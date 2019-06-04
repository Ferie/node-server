# A ready to use node server

This is a ready to use and simple Node server easy to be used also in production environments.

## Installation

To install it you need a node environment working with `npm` or any another package manager (e.g. `yarn`).

Just run the `npm i` to install all the node modules required.

The only node module that is strictly required is [Express js](https://www.npmjs.com/package/express). All the other modules are there to give you easy acces to many functionality that you may want in some environments.

You can also install them separately if you do not need all of them.

## Configuration

Open the `server.js` file and configure your own listening port and the distribution path that needs to be loaded by the server at startup.

This server is using [`express-static-gzip` plugin](https://www.npmjs.com/package/express-static-gzip) that allows serving pre-gzipped files as well as other types of compressions like Brotli. As for the configuration, Brotli compression is already set to be served by default with Gzip as a fallback.

This server is also using [`dotenv` plugin](https://www.npmjs.com/package/dotenv) to load environment variables from a `.env` file into `process.env` that you may use in your environment.

The [`body-parser` plugin](https://www.npmjs.com/package/body-parser) is used to parse any incoming request bodies in a middleware before your handlers.

## Start the localhost server

To start the localhost server in the terminal, go to the directory where the `server.js` file is located and run:
```
node server
```

or, if you prefer,
```
npm start
```

To stop it just close the terminal window or press `CTRL + C`.
