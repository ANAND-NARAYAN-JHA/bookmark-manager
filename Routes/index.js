const router = require("express").Router();


const userController = require("../Controller/api");
// const auth = require("../Middleware/auth");




// router.post("/login", userController.loginUser);
// router.post("/register", userController.registerUser);
// router.post("/update", userController.updateDb);
// router.post("/toggleBookmark", userController.toggleBookmark);
// router.post("/postComment", userController.postComment);
// router.post("/logout", userController.logout);
// router.post("/getAllBooks", userController.getBooks);
// router.post("/setrating", userController.setRating);

// // router.get("/logedinuser", userController.userDetails);
// router.get("/books/:minAge/:maxAge", userController.getBooksByAge);
// router.get("/getbook/:id", userController.getBook);
// router.get("/getLikedBook/:id", userController.getLikedBook);
// router.get("/getComment/:bookId", userController.getComment);
// router.get('/getUser', auth, userController.getUser);
// router.get('/recomBook/:book', userController.getRecom);
// router.get('/recomBookCollab/:book', userController.getRecom2);
// router.get('/search/:bookName', userController.getSearch);

router.get('/',userController.getHome);


module.exports = router;