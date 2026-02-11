# ---------- Build Stage ----------
FROM node:18-alpine AS builder
 
WORKDIR /app
 
# Copy dependency files
COPY package.json package-lock.json ./
 
# Install dependencies
RUN npm install
 
# Copy rest of the source
COPY . .
 
# Build the Vite app
RUN npm run build
 
 
# ---------- Run Stage ----------
FROM nginx:alpine
 
# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*
 
# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html
 
# Expose nginx port
EXPOSE 80
 
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
