FROM node:13.12.0-alpine3.11

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Build
COPY .env ./
COPY tsconfig.json ./
COPY ./public ./public
COPY ./scripts ./scripts
COPY ./src ./src
RUN yarn build

# Copy files
COPY . .

# Run
ENV CI=1
EXPOSE 80
CMD ["./docker/run.sh"]
