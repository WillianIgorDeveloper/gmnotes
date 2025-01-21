# docker build -t gmnotes-app:0.0 .
# docker run -p 5173:5173 gmnotes-app:0.0
# docker tag willianigordeveloper/gmnotes-app:0.0
# docker push willianigordeveloper/gmnotes-app:0.0
FROM node:22
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "start"]