FROM node:13.12.0-alpine3.11

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Build app
COPY tsconfig.json ./
COPY ./public ./public
COPY ./scripts ./scripts
COPY ./src ./src
RUN yarn build

COPY . .

EXPOSE 8080
CMD ["./docker/run.sh"]
