FROM node:22.4.0
WORKDIR /app
COPY package.json /app
RUN npm install
EXPOSE 3000
CMD [ "npm", "start"]