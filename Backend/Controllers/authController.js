import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


const generateToken = user => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY,
    {
      expiresIn: '15d',
    }
  );
};

//====================== register function ======================= //
export const register = async (req, res) => {

  const { name, email, password, role, gender, photo } = req.body;

  try {
    let user = null;
    //checking  if user already exists or not with  same email
    if (role === 'patient') {
      user = await User.findOne({ email })
    }
    else if (role === 'doctor') {
      user = await Doctor.findOne({ email })
    }

    //if  user already exists then 
    if (user) {
      return res.status(400).json({ message: 'User Already Exists........' });
    }

    //hashing user  password
    const salt = await bcrypt.genSalt(10);  //salt is a  random string of characters combine  with password to hash
    const hashedPassword = await bcrypt.hash(password, salt);

    //creating new user
    if (role === 'patient') {
      user = new User({
        name,
        email,
        password: hashedPassword,
        role,
        gender,
        photo
      });
    }

    //creating a  new doctor
    if (role === 'doctor') {
      user = new Doctor({
        name,
        email,
        password: hashedPassword,
        role,
        gender,
        photo
      })
    }

    await user.save();
    res.status(200).json({ success: true, message: 'User  Created Successfully.......' });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: ' Error creating user ,  Please Try Again......' });

  }
}

//====================== login function ======================= //
export const login = async (req, res) => {
  const { email } = req.body;
  try {
    let user = null;

    const patient = await User.findOne({ email })
    const doctor = await Doctor.findOne({ email })

    //assigning  user to either patient or doctor
    if (patient) {
      user = patient;
    }
    if (doctor) {
      user = doctor;
    }

    // checking if user exists or not
    if (!user) {
      return res.status(404).json({ message: 'User Not Found.......' })
    }
    // checking if password is correct or not
    const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ status: false, message: 'Invalid Credentials(Email or Password)......' });
    }

    //if  user is found and password is correct then generating token
    const token = generateToken(user);
    const { password, role, appointments, ...rest } = user._doc
    return res.status(200).json({ status: true, message: 'Login Successfully.....', token, data: { ...rest }, role });


  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: false, message: 'Error Logging In......' });
  }
}