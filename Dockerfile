# Use the official Node.js image as a build environment
FROM node:22-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Use Nginx to serve the static files
FROM nginx:alpine
# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist /usr/share/nginx/html
# Expose port 8080 (Cloud Run default)
EXPOSE 8080
# Copy a custom nginx config to listen on port 8080
RUN echo "server { listen 8080; location / { root /usr/share/nginx/html; index index.html; try_files \$uri \$uri/ /index.html; } }" > /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
