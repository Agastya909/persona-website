FROM node:20.18.3-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build
RUN rm -rf node_modules && npm install --omit=dev

FROM node:20.18.3-alpine
WORKDIR /app
COPY --from=builder /app/.next .next
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/public public  
COPY --from=builder /app/next.config.ts next.config.ts
EXPOSE 3000
CMD ["npm", "start"]
