FROM node:13-alpine

RUN npm install 
RUN npx @11ty/eleventy --pathprefix='/techblog/

