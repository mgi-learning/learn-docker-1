# Project Name

## Overview

This project uses Docker and Docker Compose to manage the development and production environments. It includes services for MongoDB, Mongo Express, and a Node.js server.

## Prerequisites

- Docker
- Docker Compose

## Running in Local

To run the application in local mode, use the following command:

```
docker-compose -d --build
```

## Running in Development

To run the application in development mode, use the following command:

```
docker-compose -f docker-compose.yml -f docker-compose.development.yml up -d --build
```

## Running in Production

To run the application in production mode, use the following command:

```
docker-compose -f docker-compose.yml -f docker-compose.production.yml up -d --build
```