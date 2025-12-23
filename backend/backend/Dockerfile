# Use Maven 3.9.11 with OpenJDK 21 to build the project
FROM maven:3.9.11-eclipse-temurin-21 AS build

# Set working directory
WORKDIR /app

# Copy pom.xml and install dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy source code
COPY src ./src
# Build Spring Boot JAR (skip tests for faster build)
RUN mvn clean package -DskipTests

# -------- Runtime Stage --------
# Use an official openJDK image to run the application
FROM eclipse-temurin:21-jdk-jammy

# Set working directory
WORKDIR /app

# Copy the built JAR from the build stage
COPY --from=build /app/target/backend-0.0.1-SNAPSHOT.jar .

# Expose port your app runs on
EXPOSE 8080

# Run the Spring Boot app
ENTRYPOINT ["java","-jar","/app/backend-0.0.1-SNAPSHOT.jar"]