import { PORT } from "./app/config.js";
import app from "./app/app.js";

const port = process.env.PORT || PORT;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
