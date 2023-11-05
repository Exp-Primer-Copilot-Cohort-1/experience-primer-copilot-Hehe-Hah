// Create web server

const express = require("express");
const router = express.Router();

// Import controllers
const commentsController = require("../controllers/commentsController");

// Import middlewares
const auth = require("../middlewares/auth");

// Import validators
const { check } = require("express-validator");

// Create comment
// api/comments
router.post(
  "/",
  auth,
  [check("comment", "Comment is required").not().isEmpty()],
  commentsController.createComment
);

// Get all comments by publication id
// api/comments
router.get("/", auth, commentsController.getComments);

// Delete comment by id
// api/comments/:id
router.delete("/:id", auth, commentsController.deleteComment);

module.exports = router;
