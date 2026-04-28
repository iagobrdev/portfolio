# ---------- Stage 1: Build ----------
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .

ARG VITE_GA_MEASUREMENT_ID
ENV VITE_GA_MEASUREMENT_ID=$VITE_GA_MEASUREMENT_ID

ARG VITE_FX_RATES_API_URL
ENV VITE_FX_RATES_API_URL=$VITE_FX_RATES_API_URL

RUN npm run build


# ---------- Stage 2: Runtime ----------
FROM node:20-alpine
WORKDIR /app

COPY --from=build /app/dist ./dist
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]   