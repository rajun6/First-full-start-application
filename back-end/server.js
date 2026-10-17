const app = require("./src/app");
const connectdb = require("./src/db/db");

connectdb()


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}/`);
});