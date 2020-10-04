### STAGE 1: Build ###
FROM maven:3.6-jdk-8-slim AS build
RUN mkdir -p /BackEnd
WORKDIR /BackEnd
COPY src /BackEnd/src
COPY pom.xml /BackEnd
RUN mvn clean package -Dmaven.test.skip=true

### STAGE 2: Run ###
FROM openjdk:8-alpine
COPY --from=build BackEnd/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
