# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

To build the project please run these commands: (We need two terminal for json-server and application).\
npm install\
npx json-server --watch src/mock-api-source/db.json --port 8000\
npm start\


Mock data				src -> mock-api-source -> db.json\
Route and Context    	src -> App.tsx\
Get request(axios)		src -> services -> axios.tsx\
Layout					src -> pages -> Layout -> Layout.tsx\
Build page				src -> pages -> build -> build.tsx\
My Cart page			src -> pages -> mycart -> mycart.tsx






