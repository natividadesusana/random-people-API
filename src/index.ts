import express, { json } from "express";
import router from "./routes/index-routes";

const app = express();

app.use(json());
app.use(router);

app.listen(3000, () => {
  console.log(`Server is up and running on port 3000!`);
})
