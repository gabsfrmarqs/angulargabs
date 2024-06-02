FROM node:18

WORKDIR /app

COPY . .

EXPOSE 4200

HEALTHCHECK CMD curl --fail http://localhost:4200 || exit 1

CMD npx serve -s . -l 4200