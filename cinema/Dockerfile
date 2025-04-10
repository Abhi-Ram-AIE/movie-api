FROM openjdk:17-jdk-alpine

WORKDIR /movieOnly

COPY target/cinema-0.0.1-SNAPSHOT.jar movieOnly.jar

EXPOSE 8080

CMD [ "java", "-jar", "movieOnly.jar" ]