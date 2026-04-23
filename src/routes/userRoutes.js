import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Get all users");
});

router.get("/:id", (req, res) => {
  res.send("Get single user by id");
});

router.post("/", (req, res) => {
  res.send("Create a new user");
});

router.patch("/:id", (req, res) => {
  res.send("Update field of an existing user");
});

router.delete("/:id", (req, res) => {
  res.send("Delete a user");
});

export default router;
