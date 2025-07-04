FROM public.ecr.aws/docker/library/node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "index.js"]
