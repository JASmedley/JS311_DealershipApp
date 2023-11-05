const express = require("express");
const app = express();

app.use(express.json())
app.use(express.static("public"))
app.use(require("./src/commentsRoutes"))
app.use(require("./src/contactsRouter"))
app.use(require("./src/productsRouter"))
app.use(require("./src/vehiclesRouter"))



const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
