## RMIT SEPT 2020 Major Project Group 4


## AGME 🗓
A booking system web app aims to ease the booking of services between customers and businesses.


## Developers 🔧  
* LAM, John (s3681915)
* MANKS, Brenton (s3078901)
* ALMAHDAWI, Mohammed Abdullah H (s3761295)
* LEONG, Si Long (s3785099)
* VERNIK, Jonathan (s3786227)

## Records 📃
* Github repository : https://github.com/RMIT-SEPT/majorproject-5-wed-1630-4.git
* ClickUp Workspace : https://trello.com/invite/b/J1ZhzMzz/1426190fe915ef59313a0b78cb4ad7f5/sept-group-4
* MSTeams: https://teams.microsoft.com/l/channel/19%3a0cef6f6b61464e2388920c4bbefb7861%40thread.tacv2/General?groupId=7c0c37b4-d99e-4b9b-82ca-3d3b55f208bb&tenantId=d1323671-cdbe-4417-b4d4-bdb24b51316b


## Technologies 🖥
* Spring Boot
* Postgres
* ReactJS
* MaterrialUI
* Docker
* CI/CD
* AWS
* Terraform
* Kubernetes

## To Run the Backend on your local machine 💻
* Setup the backend configurations as follow.
Go to `BackEnd/src/main/resources/application.properties`
Change the line `spring.datasource.url=jdbc:postgresql://db:5432/sept_project` 
to `spring.datasource.url=jdbc:postgresql://localhost:5432/sept_project`

## To Run Docker ⛴☁
* Setup the backend configurations as follow.
Go to `BackEnd/src/main/resources/application.properties`
Change the line `spring.datasource.url=jdbc:postgresql://localhost:5432/sept_project` 
to `spring.datasource.url=jdbc:postgresql://db:5432/sept_project`
`docker-compose up --build`

## Kubernetes Configuration ⚓️

At `BackEnd/deployment/k8s`


## Code documentation

[Quick Start](/docs/README.md) in `docs` folder
