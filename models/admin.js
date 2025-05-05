import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true,
            trim: true,
          },
          last_name: {
            type: String,
            required: true,
            trim: true,
          },
          email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
          },
            password: {
                type: String,
                required: true,
                trim: true,
            },
            
    },
    {
        timestamps: true,
    }
);

const AdminModel = mongoose.model("Admin", adminSchema);
export default AdminModel;