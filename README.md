# Angulargabs yay

This is a very very very simple website made just for fun. You can check it out at https://meltylands.boo

This project uses Angular and is deployed to my local Raspberry Pi using TeamCity. TeamCity is triggered by VCS pushes, the project is build and a docker image is created with the built artifacts. Docker Compose takes care of the rest and makes the website available at localhost:4200, which i just reverse proxy using Cloudflare Tunnel.

## TeamCity
### Build
#### Step 1
```
npm install
npm run build
```
#### Step 2
[Dockerfile](Dockerfile) step builds the angulargabs:latest image

### Deploy
I could just use docker-compose build runner that TeamCity provides, buuuuut it has caused me problems in the past so I just use Command Line runner. Mission accomplished™!
#### Step 1
```
docker compose down
```
#### Step 2
```
docker compose up -d
```