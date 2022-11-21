import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import express from "express";

import { handler as ssrHandler } from "./dist/server/entry.mjs";

const app = express();
app.use(cookieParser());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("./dist/client/"));
app.use(ssrHandler);

app.listen(3000, () => {
    console.log(`Hermes SSR online http://localhost:3000`);
});
