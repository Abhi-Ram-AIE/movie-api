# Use an official OpenJDK image
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy everything to the container
COPY . .

# Make the wrapper script executable
RUN chmod +x mvnw

# Build the application
RUN ./mvnw clean package -DskipTests

# Expose the port your app runs on
EXPOSE 8080

# Run the jar file
CMD ["java", "-jar", "target/*.jar"]
