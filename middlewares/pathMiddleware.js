const pathMiddleware = (req, res, next )=> {
    console.log("Global middleware started");
    next();
    console.log("Global Middleware ended");
}

module.exports={
    pathMiddleware
};