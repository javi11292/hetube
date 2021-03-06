FROM node:alpine as client
WORKDIR /client
COPY client/package*.json ./
RUN npm install
COPY client .
RUN npm run build

FROM node:alpine as server
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
WORKDIR /server
COPY server/package*.json ./
RUN npm install
COPY server .

FROM node:alpine
RUN mkdir /client && chown node /client
RUN mkdir /server && chown node /server
RUN mkdir /videos && chown node /videos
USER node
COPY --from=client /client/build /client
COPY --from=server /server /server
WORKDIR /server

EXPOSE 3000

ENTRYPOINT []

CMD ["node", "src/index"]