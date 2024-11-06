import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

//ROUTE 1:[PUT] ============function to update a  Doctor =====================//
export const updateDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const updateDoctor = await Doctor.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    res.status(200).json({ success: true, message: 'Updated Successfully.....', data: updateDoctor });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Update Failed.....' });

  }

}



//ROUTE 2:[DELETE] ============function to delete a  Doctor =====================//
export const deleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    await Doctor.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Doctor is  Deleted Successfully.....' });


  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Doctor Delete Failed.....' });

  }

}



//ROUTE 3: [GET]============function to get a single   Doctor =====================//
export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await Doctor.findById(id).populate("reviews").select('-password');
    res.status(200).json({ success: true, message: 'Doctor Found Successfully.....', data: doctor });

  } catch (error) {
    console.error(error.message);
    res.status(404).json({ success: false, message: 'No Doctor Found.....' });

  }

}



//ROUTE 4:[GET] ============function to get all  Doctor =====================//
export const getAllDoctor = async (req, res) => {
  try {
    //this parameter  is used to filter data on the basis of specific criteria
    const { query } = req.query;
    let doctors;
    if (query) {
      doctors = await Doctor.find({
        isApproved: 'approved', $or: [
          //regex operator with the options set to "i"  used for case  insensitive searching
          { name: { $regex: query, $options: 'i' } },
          { specialization: { $regex: query, $options: 'i' } },
        ],
      }).select('-password');
    }
    else {
      doctors = await Doctor.find({ isApproved: 'approved' }).select('-password');
    }

    res.status(200).json({ success: true, message: 'All Approved Doctors Found Successfully.....', data: doctors });

  } catch (error) {
    console.error(error.message);
    res.status(404).json({ success: false, message: 'Not Found Any Approved Doctor.....' });

  }

}


//ROUTE 4:[GET] ============function to get  Doctor profile=====================//
export const getDoctorProfile = async (req, res) => {
  const doctorId = req.userId;

  try {
    const doctor = await Doctor.findById(doctorId)

    if (!doctor) {
      return res.status(404).json({ success: false, message: 'Doctor Not Found.....' })
    }

    const { password, ...rest } = doctor._doc
    const appointments = await Booking.find({ doctor: doctorId })


    res.status(200).json({ success: true, message: 'Doctor Profile Found Successfully.....', data: { ...rest, appointments } })
  } catch (error) {
    console.error(error.message)
    return res.status(500).json({ success: false, message: "Something went  wrong.. can't  get doctor profile....." })
  }
}
