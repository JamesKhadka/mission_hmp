import Admin from '../models/AdminSchema.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Function to generate a JWT token for admin
const generateToken = (admin) => {
  return jwt.sign({ id: admin._id, role: 'admin' }, process.env.JWT_SECRET_KEY, {
    expiresIn: '15d',
  });
};

//====================== Register Admin ======================= //
export const registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists.' });
    }

    // Hash admin password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new admin
    const newAdmin = new Admin({
      name,
      email,
      password: hashedPassword,
    });

    await newAdmin.save();

    res.status(201).json({ success: true, message: 'Admin registered successfully.' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Error registering admin. Please try again.' });
  }
};

//====================== Admin Login ======================= //
export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found.' });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ status: false, message: 'Invalid credentials.' });
    }

    // Generate JWT token
    const token = generateToken(admin);

    const { password: adminPassword, ...adminData } = admin._doc;

    res.status(200).json({
      status: true,
      message: 'Admin logged in successfully.',
      token,
      data: { ...adminData },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: false, message: 'Error logging in. Please try again.' });
  }
};
