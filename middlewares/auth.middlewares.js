import jwt from "jsonwebtoken";
import userRepo from "../repositories/user.repo.js";  


export const authorizer = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    const user= await userRepo.findById(decodedToken._id);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({ message: "wrong credentials" });
  }
};