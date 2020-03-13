require("dotenv").config();

import express from "express";
import {gExpressMiddleware} from "./express-extension";
import router from "./routes/index";

const app = express();
const port = 5555; // default port to listen

//allow cross-domain
const allowCrossDomain: express.RequestHandler = (req, res, next) => {
  // res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  // TODO: Give a array of allowed origins and checks form the array instead allowing all for testing.
  // Change the allow origin according to the request origin itself to allow credentials verification.
  // if (process.env.NODE_ENV === "production") {
  //   if (req.headers.origin && req.headers.origin.includes("xxxxxx")) {
  //     res.header("Access-Control-Allow-Origin", req.headers.origin.toString());
  //   } else {
  //     res.header("Access-Control-Allow-Origin", "xxxxxxx");
  //   }
  // } else {
  // @ts-ignore
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  // }
  res.header("Access-Control-Allow-Headers", "Content-Type,Access-Token");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
};

app.use(gExpressMiddleware);

app.use(allowCrossDomain);

app.use("/", router);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server listen on port ${process.env.SERVER_PORT}`);
});
app.listen(process.env.SERVER_SSL_PORT, () => {
  console.log(`Server listen on port ${process.env.SERVER_SSL_PORT}`);
});
