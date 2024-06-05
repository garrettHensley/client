# Use an official Node.js runtime as the base image
FROM node:21.7-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Svelte application
RUN npm run build

FROM node:21.7.1-alpine

WORKDIR /app

COPY --from=build /app /app/

RUN npm install
RUN npm ci

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "build/index.js"]

# Use an official Nginx image as the base image for serving the application
# FROM nginx:alpine
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /app/build /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
