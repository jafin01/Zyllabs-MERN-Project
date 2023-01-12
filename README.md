# Zyllabs - School Management System

## Table of contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Run](#run)
- [Technology](#technology)
- [Features](#features)


## Introduction

Zyllabs is a student-led learning platform within a school management system. It provides students a space to ask and answer questions, share resources and knowledge, and collaborate with their peers and seniors. This can help students to learn more effectively and take a more active role in their own learning.

NOTE: Please read the RUN section before opening an issue.

## Demo

The web app consists of three tiers
 - School
 - Staff
 - Student

![This is an image](/zyllabs.png)
## Run

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

- NODE_ENV: Specify the environment as development or production

- PORT: Specify the port Number

- MONGO_URI: Specify the MongoDB URI to connect to the database

- SECRET: JWT secret to verify JWT token for authorization

- NODEMAILER_EMAIL: Email from which login credentials of students should be send

- NODEMAILER_PASS: App password for the specified email

After you've set these environmental variables in the .env file at the server folder of the project, and intsall node modules using  `npm install` in both server and client folder

Now you can run `npm start` in the client folder and `npm run dev` in server folder and the application should work.

## Technology

The application is built with:

- Node.js 
- MongoDB
- Express 
- JWT authentication and authorization
- MVC architecture
- Nodemailer
- React.js
- Redux and Redux toolkit
- Material UI
- Framer Motion
- Formik for form handling and yup for validation
- ESlint airbnb configurations with some custom rules to maintain code standards

To be deployed in the following using Nginix
  - AWS
  - Digital Ocean cloud server
  - Google cloud server and
  - Azure cloud server 

## Features

- Fosters a sense of community and collaboration among students.
- Provides students with a safe and supportive space to ask questions and seek help.
- Enhances the learning experience by providing students with a diverse range of resources and perspectives
- Makes it easier for students to stay organized and manage their assignments and tasks.
- Enables students to stay up-to-date with school news and events through a school notice board feature.



 Copyright 2022 © [Jafin Jahfar](https://github.com/jafin01)
