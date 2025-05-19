import express from "express";

import {
  createUserSchema,
  updateUserSchema,
  updatePassword,
  loginSchema,
} from "../schemas/User.schemas.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import { getByIdSchema } from "../schemas/core.schemas.js";
import UserController from "../controllers/user.controller.js";
import { authorizer } from "../middlewares/auth.middlewares.js";

const userRoutes = express.Router();

userRoutes.get("/list", UserController.list);

userRoutes.delete(
  "/:id",
  validateRequest(getByIdSchema),
  UserController.delete
);

userRoutes.post("/login", validateRequest(loginSchema), UserController.login);

userRoutes.get("/me",authorizer, UserController.getUser);

userRoutes.post(
  "/create",
  validateRequest(createUserSchema),
  UserController.create
);

userRoutes.put(
  "/:id",
  validateRequest(updateUserSchema),
  UserController.update
);

export default userRoutes;
