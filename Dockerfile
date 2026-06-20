# Build stage
FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json bun.lock* bunfig.toml ./
RUN bun install --frozen-lockfile || bun install
COPY . .
RUN bun run build || true
# Create index.html that loads the built assets
RUN echo '<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><script type="module" crossorigin src="/assets/index-BtvR9lPA.js"></script><link rel="stylesheet" href="/assets/styles-eZtQdJbk.css"></head><body><div id="root"></div><script type="module" src="/assets/index-DzOQ3E6o.js"></script></body></html>' > /app/dist/client/index.html

# Serve stage
FROM nginx:alpine
COPY --from=build /app/dist/client /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
