# Stage 1: Compile and Build angular codebase

FROM node:22 AS builder

# Set the working directory

WORKDIR /app

# Add the source code to app

COPY . .

# Install all the dependencies

RUN npm install

# Generate the build of the application

RUN npm run build

# Stage 2: Serve app with nginx server


# Use official Nginx image as the base image

FROM nginx:1.27.2

# Copy the custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output to replace the default nginx contents.

COPY --from=builder /app/dist/infinity-math /usr/share/nginx/html

