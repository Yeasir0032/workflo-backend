const express = require("express");
const {
  login,
  signup,
  createCard,
  getBoard,
  reorderCard,
  moveCard,
  editCard,
  deleteCard,
} = require("../controller");
const router = express.Router();

router.post("/user/login", login);
router.post("/user/signup", signup);

router.get("/task/:id", getBoard);
router.post("/task/new", createCard);

router.put("/task/reorder", reorderCard);
router.put("/task/move", moveCard);

router.put("/task/edit", editCard);
router.put("/task/delete", deleteCard);
module.exports = router;
