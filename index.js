const express = require("express");
const { globalMiddleware } = require("./middlewares/globalMiddleware");
const postRouter = require("./routes/post.route")

const app = express();
app.use(globalMiddleware)

app.get("/", (req, res) =>{
    res.status(200).send("welcome to my server,  Please use /users to get all users")
})
app.use("/post",postRouter);

app.listen(4000, (err) => {
    console.log("Server is running on https://localhost:4000")
});  