const functions = require("firebase-functions");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  exports.nextApp = functions.https.onRequest((req, res) => {
    return handle(req, res);  // This will render the appropriate Next.js page based on the route
  });
});
