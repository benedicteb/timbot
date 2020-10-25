FROM node:current-alpine

RUN mkdir -p /usr/src/app/data

WORKDIR /usr/src/app

COPY *.js /usr/src/app/

COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
COPY scripts/start.sh /usr/src/app/

RUN npm install

CMD ["sh", "start.sh"]
