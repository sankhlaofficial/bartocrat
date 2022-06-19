import { Products, Users } from "../models/model.js";

export const getPosts = (req, res) => {
  res.status(200).json({ message: "Controller working" });
};
