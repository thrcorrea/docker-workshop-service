FROM node:carbon

ENV DB_HOST docker-workshop-database
ENV DB_PORT 3306
ENV DB_POOL_MIN 1
ENV DB_POOL_MAX 1
ENV DB_DATABASE accountdb
ENV DB_USERNAME root
ENV DB_PASSWORD root
ENV PORT 3001
ENV AGREEMENT_URL 'http://bank-service:3000'

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json .

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3001

CMD ["npm", "start"]
