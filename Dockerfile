FROM node:20-alpine
WORKDIR /app
RUN corepack enable pnpm
COPY package*.json pnpm-lock.yaml ./
COPY prisma ./prisma
RUN pnpm install
RUN pnpm prisma generate --no-engine
COPY . .
RUN pnpm build
CMD ["pnpm","start"]

