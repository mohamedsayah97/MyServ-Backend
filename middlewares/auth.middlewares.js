import jwt from "jsonwebtoken";
import userRepo from "../repositories/user.repo.js";

export const authorizer = async (req, res, next) => {
  try {
    // Check if authorization header exists
    if (!req.headers.authorization) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    // Check if header is in the correct format "Bearer <token>"
    const authHeader = req.headers.authorization;
    const tokenParts = authHeader.split(" ");
    
    if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
      return res.status(401).json({ message: "Invalid authorization header format. Expected 'Bearer <token>'" });
    }

    const token = tokenParts[1];
    
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    if (!process.env.TOKEN_SECRET) {
      return res.status(500).json({ message: "Server configuration error - TOKEN_SECRET missing" });
    }

    // Verify and decode the token
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (err) {
      console.error("Token verification error:", err);
      
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token expired" });
      }
      if (err.name === "JsonWebTokenError") {
        return res.status(401).json({ message: "Invalid token" });
      }
      
      return res.status(401).json({ message: "Failed to authenticate token" });
    }

    // Check if token has required data
    if (!decodedToken._id) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    // Find user in database
    const user = await userRepo.findById(decodedToken._id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Attach user to request
    req.user = user;
    next();
  } catch (error) {
    console.error("Authorization error:", error);
    res.status(500).json({ message: "Internal server error during authorization" });
  }
};