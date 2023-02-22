import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";

const port = env.PORT;

mongoose
  .connect(env.MONGO_CONNECTION)
  .then(() => {
    console.log("mongooseconnected");
    app.listen(port, () => {
      console.log("server is running");
    });
  })
  .catch(console.error);
