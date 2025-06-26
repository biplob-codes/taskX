FROM node:20-alpine
WORKDIR /app
RUN corepack enable pnpm
COPY package*.json pnpm-lock.yaml ./
COPY prisma ./prisma
RUN pnpm install
RUN pnpm run db:generate
COPY . .
RUN pnpm build
CMD ["sh","-c","pnpm run start-app"]

