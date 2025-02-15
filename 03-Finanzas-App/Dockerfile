#Use the official image as a parent image
FROM node:20-alpine AS build

#Set the working directory
WORKDIR /app

#Copy the file from your host to your current location
COPY package*.json ./

#Run the command by install dependencies
RUN npm install

#Copy the rest of code to the container
COPY . .

#Build the app
RUN npm run build

#Use the official image as a parent image
FROM node:20-alpine

#Set the working directory
WORKDIR /app

#Copy the file from your host to your current location
COPY --from=build /app/dist /app/dist

#Install serve
RUN npm install -g serve

#Expose the port the app runs in
EXPOSE 4173

#Run the app
CMD ["serve", "-s", "dist", "-l", "4173"]