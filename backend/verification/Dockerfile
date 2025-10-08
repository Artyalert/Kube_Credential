FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
COPY src ./src
RUN npm ci
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package.json package-lock.json ./
RUN npm ci --production
RUN mkdir -p /data
ENV DATA_DIR=/data
ENV PORT=3002
EXPOSE 3002
CMD ["node", "dist/index.js"]
