#Stage 1
FROM node:18-alpine as builder
RUN npm install -g pnpm
WORKDIR /app

EXPOSE 5173

CMD ["pnpm", "run", "dev"]


