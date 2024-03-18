# Use the official Microsoft .NET SDK image for the build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /source

# Copy csproj and restore as distinct layers to cache dependencies
COPY *.csproj .
RUN dotnet restore

# Copy the rest of the source code and build the application
COPY . .
RUN dotnet publish -c Release -o /publish

# Use the official Microsoft .NET runtime image optimized for AWS Lambda for the final stage
FROM public.ecr.aws/lambda/dotnet:8 AS runtime
WORKDIR /var/task
COPY --from=build-env /publish .

CMD ["MyFirstCSharpFunction"]