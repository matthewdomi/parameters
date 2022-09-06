const router = require("express").Router;
const { 
    createPost,
    getPost,
    getPosts,
    updatePost,
    deletePost,
 } = require("../controllers/post.controller");
 const {pathMiddleware} = require("../middlewares/pathMiddleware")

 
const postRouter = router();
postRouter.route("/")
                    .post(createPost)
                    .get(pathMiddleware, getPosts) ;
postRouter.route("/:postId/")
                    .get(getPost)
                    .patch(updatePost)
                    .delete(deletePost)

module.exports = postRouter; 