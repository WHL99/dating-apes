<p align="right"><img src="https://user-images.githubusercontent.com/104759740/183436724-23c3129c-29c3-43c3-ac79-a02b0b320024.png" alt="datingApesLogo" height="100" /></p>

# My Mission
Since dating apps become one of the mainstream tools for connecting human being, but these apps still don't give any chance to our pets to make new friends.<br>Pets are always used as human accessories or even as a method for dating. Therefore I created the app to serve the pets, all the user information is about the pets, not about his/her/its owner.<br>
<p align="center"><img width="900" alt="index" src="https://user-images.githubusercontent.com/104759740/183531361-a927f4b2-9792-4b0b-827c-592c1d4c21aa.png"></p>

## Setup

- Clone this repo
- Open the file and start:

  ```bash
  cd dating-apes
  ```
  First install all npm package in root folder (backend) and run it: 
  ```bash
  npm install
  npm run dev
  ```
  Second install all npm package in client folder (frontend) and run it:
  ```bash
  cd client
  npm install
  npm start
  ```
  
- Create ```.env``` file with the following variables:
  ```
  MONGODB_URI
  TOKEN_SECRET
  CLOUDINARY_NAME
  CLOUDINARY_API_KEY
  CLOUDINARY_API_SECRET
  ```

## File Structure

```
dating-apes
 ┣ client
 ┃   ┣ build
 ┃   ┣ node_modules
 ┃   ┣ public
 ┃   ┣ .gitignore
 ┃   ┣ package.json
 ┃   ┗ src
 ┃      ┣ App.js
 ┃      ┣ App.css
 ┃      ┣ index.js
 ┃      ┣ index.css
 ┃      ┣ utils
 ┃      ┃     ┣ ConvertZodiac.js
 ┃      ┃     ┗ MatchPercentage.js
 ┃      ┣ components
 ┃      ┃     ┣ Navbar.js
 ┃      ┃     ┣ IsAnon.js
 ┃      ┃     ┣ IsPrivate.js
 ┃      ┃     ┣ UserCard.js
 ┃      ┃     ┣ MessageCard.js
 ┃      ┃     ┗ AddAText.js
 ┃      ┣ context
 ┃      ┃     ┗ auth.context.js
 ┃      ┗ pages
 ┃            ┣ HomePage.js
 ┃            ┣ SignupPage.js
 ┃            ┣ LoginPage.js
 ┃            ┣ UserListPage.js
 ┃            ┗ UserDetailsPage.js
 ┃           
 ┣ server.js
 ┣ app.js
 ┣ .env
 ┣ models
 ┃   ┣ User.model.js
 ┃   ┗ Message.model.js
 ┣ routes
 ┃   ┣ index.routes.js
 ┃   ┣ auth.routes.js
 ┃   ┣ user.routes.js
 ┃   ┗ message.routes.js
 ┣ db
 ┃   ┗ index.js
 ┣ middleware
 ┃   ┗ jwt.middleware.js
 ┣ error-handling
 ┃   ┗ index.js
 ┣ config
 ┃   ┗ index.js
 ┣ node_modules
 ┣ .gitignore
 ┣ package.json
 ┗ README.md

 ```
client-side
- `client` folder contains the client-side code for the application.
    - `build` folder contains the compiled and minified production build of the client-side code.
    - `public` folder contains the static assets that are not processed by webpack.
    - `src` folder contains the source code for the client-side application.
        - `App.js` is the root component of the React application.
        - `App.css` contains styles specific to the App component.
        - `index.js` is the entry point for the React application and renders the App component.
        - `utils` folder contains utility pieces that are used by the client-side code.
        - `components` folder contains smaller components that make up the UI of the application.
        - `context` folder contains the auth.context.js file, which is the context provider for authentication.
        - `pages` folder contains components that represent routes for the application.

server-side
- `server.js` is the entry point for the server and exports the Express app.
- `app.js` sets up an Express application that imports environment variables, connects to a database, adds middleware, defines routes, serves static files, and sets up error handling.
- `.env` contains environment variables for the application.
- `models` folder contains the Mongoose models for the application.
- `routes` folder contains the route handlers for the server.
- `db/index.js` connects to a MongoDB database using Mongoose.
- `middleware/jwt.middleware.js` exports the middleware for verifying JWT tokens.
- `error-handling/index.js` exports the error-handling middleware for the server.
- `config/index.js` exports a middleware function that sets up a Express application with common middleware such as CORS, logging, cookie parsing, and JSON body parsing.


## NPM Packages

- Promise based HTTP client - [axios](https://github.com/mzabriskie/axios)@0.27.2
- Optimized bcrypt in plain JavaScript with zero dependencies - [bcryptjs](https://www.npmjs.com/package/bcryptjs)@2.4.3
- Cloudinary NPM for node.js integration - [cloudinary](https://github.com/cloudinary/cloudinary_npm)@1.30.1
- Effortlessly optimize and transform your cloud's assets - [cloudinary-react](https://www.npmjs.com/package/cloudinary-react)@1.8.1
- Environment configuration - [dotenv](https://www.npmjs.com/package/dotenv)@16.0.1
- Web framework for Node.js - [express](http://expressjs.com/)@4.18.1
- JWT authentication middleware - [express-jwt](https://www.npmjs.com/package/express-jwt)@7.7.5
- JSON Web Tokens (jwt) - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)@8.5.1
- Mongoose MongoDB ODM - [mongoose](https://www.npmjs.com/package/mongoose)@6.4.5
- JavaScript library for building user interfaces - [react](https://facebook.github.io/react/)@18.2.0
- Declarative routing for React web applications - [react-router-dom](https://github.com/remix-run/react-router)@6.3.0
- Run multiple commands concurrently - [concurrently](https://www.npmjs.com/package/concurrently)@7.6.0

## Stack 

- Frontend: React
- Backend: Express and Node.js
- Database: MongoDB 
- Deployed on Render 

## 
Now you have it&nbsp;&nbsp;&nbsp;🎉&nbsp;&nbsp;&nbsp;🦍 <br>
Thank you for reading and happy coding &nbsp;💚
