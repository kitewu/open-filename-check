FROM node:10

RUN mkdir /open-filename-check
ADD ./ /open-filename-check
RUN cd /open-filename-check && npm i && npm i -g tslib &&  npm i typescript@latest -g && npm run build

RUN mkdir -p /github/workspace
WORKDIR /github/workspace

RUN chmod +x /open-filename-check/entrypoint.sh
ENTRYPOINT ["/open-filename-check/entrypoint.sh"]
