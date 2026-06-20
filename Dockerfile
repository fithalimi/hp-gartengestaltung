# Build stage
FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json bun.lock* bunfig.toml ./
RUN bun install --frozen-lockfile || bun install
COPY . .
RUN bun run build || true
RUN find /app -name "index.html" | head -20

# Serve stage
FROM nginx:alpine
COPY --from=build /app/.output/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
