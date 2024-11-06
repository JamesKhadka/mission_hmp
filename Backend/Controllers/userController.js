import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from '../models/DoctorSchema.js'

//ROUTE 1:[PUT] ============function to update a  user =====================//
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    res.status(200).json({ success: true, message: 'Updated Successfully.....', data: updateUser });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Update Failed.....' });

  }

}


//ROUTE 2:[DELETE] ============function to delete a  user =====================//
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'User is  Deleted Successfully.....' });


  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'User Delete Failed.....' });

  }

}



//ROUTE 3: [GET]============function to get a single   user =====================//
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id).select('-password');
    res.status(200).json({ success: true, message: 'User Found Successfully.....', data: user });

  } catch (error) {
    console.error(error.message);
    res.status(404).json({ success: false, message: 'No User Found.....' });

  }

}



//ROUTE 4:[GET] ============function to get all  user =====================//
export const getAllUser = async (req, res) => {
  try {
    const user = await User.find({}).select('-password');
    res.status(200).json({ success: true, message: 'All User Found Successfully.....', data: user });

  } catch (error) {
    console.error(error.message);
    res.status(404).json({ success: false, message: 'Not Found Any User.....' });

  }

}


//ROUTE 5:[GET] ============function to get user profile =====================//
export const getUserProfile = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId)

    if (!user) {
      return res.status(404).json({ success: false, message: 'User Not Found.....' })
    }

    const { password, ...rest } = user._doc
    res.status(200).json({ success: true, message: 'User Profile Found Successfully.....', data: { ...rest } })
  } catch (error) {
    // console.error(error.message)
    return res.status(500).json({ success: false, message: "Something went  wrong.. can't  get user profile....." })
  }
}


//ROUTE 4:[GET] ============function to get an appointment =====================//
export const getMyAppointments = async (req, res) => {
  try {
    //step 1: Retrive appointments booking from specifice user
    const bookings = await Booking.find({ user: req.userId })


    //step 2:Extract doctor id's from appointments  bookings
    const doctorIds = bookings.map(el => el.doctor.id)

    //step 3: Retrive  doctor details from doctor collection using doctor id's
    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select('-password');
    res.status(200).json({ success: true, message: 'Appointments  Found Successfully.....', data: doctors });

  } catch (error) {
    console.error(error.message)
    return res.status(500).json({ success: false, message: "Something went  wrong.. can't  get appointments....." })

  }
}