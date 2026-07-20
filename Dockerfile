FROM node:24

WORKDIR /dist

COPY . .

EXPOSE 4200

HEALTHCHECK CMD curl --fail http://localhost:4200 || exit 1

CMD npx serve -s dist/angulargabs/browser -l 4200
