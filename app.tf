resource "aws_key_pair" "deployer" {
  key_name   = "deployer-key"
  public_key = var.public_key
}

resource "aws_launch_configuration" "AGME" {
  name = "web_config"
  image_id = var.ami_id
  instance_type = "t2.micro"
  security_groups = [aws_security_group.allow_http_ssh.id]
  
  key_name = aws_key_pair.deployer.key_name
}

resource "aws_lb_target_group" "AGME" {
  name        = "AGME-target-group"
  port        = 80
  protocol    = "HTTP"
  vpc_id      = aws_vpc.main.id
}

resource "aws_autoscaling_group" "AGME" {
  name                 = "terraform-asg"
  max_size             = 1
  min_size             = 1
  launch_configuration = aws_launch_configuration.AGME.name
  vpc_zone_identifier  = [aws_subnet.private_az1.id, aws_subnet.private_az2.id, aws_subnet.private_az3.id]
  target_group_arns = [aws_lb_target_group.AGME.arn]
}


resource "aws_lb" "AGME" {
  name               = "AGME-lb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.allow_http_ssh.id]
  subnets            = [aws_subnet.public_az1.id, aws_subnet.public_az2.id, aws_subnet.public_az3.id]

    
  tags = {
    Environment = "production"
  }
}

resource "aws_lb_listener" "AGME" {
  load_balancer_arn = aws_lb.AGME.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.AGME.arn
  }
}
