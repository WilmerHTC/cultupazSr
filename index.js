import app from "./app/app.js";
import env from "dotenv";

env.config({ path: "./env/.env" });

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
