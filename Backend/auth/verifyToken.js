import jwt, { decode } from 'jsonwebtoken'
import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'


//=============== changes users information ===============//
export const authenticate = async (req, res, next) => {
  //get token  from authorization headers
  const authToken = req.headers.authorization;

  //checking if the token exist  or not
  if (!authToken || !authToken.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Access Denied.... No token provided.' });
  }

  try {
    const token = authToken.split(' ')[1];

    //verifying the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.id;
    req.role = decoded.role;
    // console.log(authToken);
    next();    //used to pass access to  the next middleware function



  } catch (e) {
    console.error(e.message);
    if (e.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, message: 'Access denied..... Token is expired' });
    }
    return res.status(401).json({ success: false, message: 'Invalid Token' })

  }
};

//============roles  middleware access  control ==============//
export const restrict = roles => async (req, res, next) => {
  const userId = req.userId

  let user;

  const patient = await User.findById(userId)
  const doctor = await Doctor.findById(userId)

  if (patient) {
    user = patient;
  }

  if (doctor) {
    user = doctor;
  }


  if (!roles.includes(user.role)) {
    return res.status(401).json({ success: false, message: 'Access denied. You are not Authorized' });
  }

  next();
}
