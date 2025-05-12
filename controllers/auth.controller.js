// import AdminModel from "../models/admin.js";

// import bcrypt from "bcryptjs";

// export const signup = async (req, res, next) => {
//     const {  first_name,last_name,email, password } = req.body;
//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(password, salt);
//     // Check if the email already exists
//     const existingAdmin = await AdminModel.findOne({ email });
//     if (existingAdmin) {
//         return res.status(400).json({ message: "Email already exists" });
//     }
//     // Create a new admin
//     const newAdmin = new AdminModel({
//         first_name,
//         last_name,
//         email,
//         password: hashedPassword
//     });
//     await newAdmin.save()
//         .then(() => {
//             res.status(201).json({ message: "Admin created successfully" });
//         })
//         .catch((error) => {
//             next(error);
//         });


// }

