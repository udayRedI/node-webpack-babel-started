FROM node
WORKDIR /app
COPY . /app


ENV NODE_ENV development

CMD [ "sh", "dev.sh" ]