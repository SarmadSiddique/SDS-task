# Step 1: Install dependencies and build the app
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Run the app
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]
