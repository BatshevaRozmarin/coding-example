FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build 
EXPOSE 3000
RUN npx tsc
CMD ["node", "dist/server.js"]
