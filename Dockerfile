
FROM oven/bun:1.1 AS builder

WORKDIR /backend

COPY package.json bun.lock tsconfig.json ./
COPY src ./src

RUN rm -rf dist
RUN bun install
RUN bun run build


FROM oven/bun:1.1-slim

WORKDIR /backend

COPY --from=builder /backend/dist ./dist
COPY --from=builder /backend/package.json ./
COPY --from=builder /backend/bun.lock ./


RUN bun install --production

EXPOSE 3000

CMD ["bun", "run", "dist/server.js"]
