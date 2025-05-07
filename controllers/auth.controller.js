import AdminModel from "../models/admin.js";
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

export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      
      const admin = await AdminModel.findOne({ email }).select("+password");
      if (!admin) {
        return res.status(401).json({ message: "Identifiants invalides" });
      }
  
      const isMatch = await admin.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({ message: "Identifiants invalides" });
      }
  
      // Générer un token JWT ici si nécessaire
      res.json({ message: "Connexion réussie", admin: {
        id: admin._id,
        email: admin.email,
        role: admin.role
      }});
      
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  };