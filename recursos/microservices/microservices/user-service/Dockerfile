FROM node
COPY . /app
WORKDIR /app
RUN npm install --only=production
ENV PORT 3000
EXPOSE 3000
ENTRYPOINT ["npm", "start"]