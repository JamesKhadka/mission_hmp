import Review from '../models/ReviewSchema.js'
import Doctor from '../models/DoctorSchema.js'


//================getting all reviews =====================//

export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({})
    res.status(200).json({ success: true, message: 'Successful', data: reviews })

  } catch (error) {
    console.error(error.message);
    res.status(404).json({ success: false, message: 'Not Found' })

  }
};

//================= create review function  =====================//
export const createReview = async (req, res) => {
  if (!req.body.doctor) req.body.doctor = req.params.doctorId
  if (!req.body.user) req.body.user = req.userId


  //creating new review
  const newReview = new Review(req.body)
  try {
    const savedReview = await newReview.save();

    //now we can access and populate the rewiew info for specefic doc
    await Doctor.findByIdAndUpdate(req.body.doctor, { $push: { reviews: savedReview._id } });
    res.status(200).json({ success: true, message: 'Review Submitted successfully........', data: savedReview })

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: 'Error Occured in Review Submition ........' })

  }


}


