import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockHospitalData } from '../assets/data/hospitals';
import starIcon from '../assets/images/Star.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'


const HospitalDetails = () => {

  // const { name, specilization, avgRating, totalRating, photo, totalPatients, hospitalName } = doctor


  const { id } = useParams();
  const [hospital, setHospital] = useState(null);
  const [showEmergencyForm, setShowEmergencyForm] = useState(false);
  const [emergencyFormData, setEmergencyFormData] = useState({
    name: '',
    phone: '',
    emergencyType: '',
    doctor: '',
    description: ''
  });
  const [emergencySubmitted, setEmergencySubmitted] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // In a real application, fetch hospital data based on the ID
    // For now, we'll use mock data
    const foundHospital = mockHospitalData.find(h => h.id === id);
    setHospital(foundHospital);


    // Set up an interval to change the image every 3 seconds
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (foundHospital?.images.length || 1));
    }, 3000);

    // Clear the interval when component unmounts
    return () => clearInterval(imageInterval);
  }, [id]);

  const handleEmergencyFormChange = (e) => {
    const { name, value } = e.target;
    setEmergencyFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setEmergencyFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmergencySubmit = (e) => {
    e.preventDefault();
    console.log('Emergency appointment requested:', emergencyFormData);
    setEmergencySubmitted(true);
    setShowEmergencyForm(false);
    // Reset form after submission
    setEmergencyFormData({ name: '', phone: '', emergencyType: '', doctor: '', description: '' });
  };

  if (!hospital) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8" >
      <h1 className="text-3xl font-bold mb-6 text-center  text-irisBlueColor">{hospital.name}</h1>

      {/*============ Image Carousel with Automatic Slideshow =============*/}
      <div className="mb-8 flex justify-center">
        <div className="w-full">
          <img
            src={hospital.images[currentImageIndex]}
            alt={`${hospital.name} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/*========== Emergency Service Button ===========*/}
      <div className="mb-8">
        <button
          onClick={() => setShowEmergencyForm(true)}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Book Emergency Appointment
        </button>
      </div>

      {/*======= Emergency Service Form ================*/}
      {
        showEmergencyForm && (
          <div className="mb-8 border border-gray-300 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Emergency Appointment Request</h2>
            <form onSubmit={handleEmergencySubmit} className="space-y-4">
              {/*========== for name ====================*/}
              <div>
                <label htmlFor="name" className="form__label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={emergencyFormData.name}
                  onChange={handleEmergencyFormChange}
                  required
                  className="form__input mt-1 rounded-full"
                />
              </div>

              {/*========== for phone number ====================*/}
              <div>
                <label htmlFor="phone" className="form__label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={emergencyFormData.phone}
                  onChange={handleEmergencyFormChange}
                  required
                  className="form__input mt-1  rounded-full p-2"
                />
              </div>

              {/*========== for Type of Emergency ====================*/}
              <div>
                <label htmlFor="emergencyType" className="form__label">Type of Emergency</label>
                <select
                  id="emergencyType"
                  name="emergencyType"
                  value={emergencyFormData.emergencyType}
                  onChange={(e) => handleSelectChange('emergencyType', e.target.value)}
                  required
                  className="form__input mt-1  rounded-full p-2"
                >
                  <option value="">Select emergency type</option>
                  {hospital.emergencyTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/*========== for Preferred Doctor ====================*/}
              <div>
                <label htmlFor="doctor" className="form__label">Preferred Doctor (Optional)</label>
                <select
                  id="doctor"
                  name="doctor"
                  value={emergencyFormData.doctor}
                  onChange={(e) => handleSelectChange('doctor', e.target.value)}
                  className="form__input mt-1  rounded-full p-2"
                >
                  <option value="">Select a doctor (optional)</option>
                  {hospital.doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.name} - {doctor.specialization}
                    </option>
                  ))}
                </select>
              </div>

              {/*========== for Emergency Description ====================*/}
              <div>
                <label htmlFor="description" className="form__label">Emergency Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={emergencyFormData.description}
                  onChange={handleEmergencyFormChange}
                  required
                  className="form__input mt-1  rounded-lg p-2"
                />
              </div>

              {/*========== for request button ====================*/}
              <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                Submit Emergency Request
              </button>

            </form>
          </div>
        )
      }

      {/* Emergency Submission Confirmation */}
      {
        emergencySubmitted && (
          <div className="mb-8 bg-gray-100 border-l-4 border-gray-500 text-gray-700 p-4 rounded-lg">
            <strong>Emergency Request Submitted</strong>
            <p>We have received your emergency appointment request. Our team will contact you shortly.</p>
          </div>
        )
      }

      {/*========= About Section ============*/}
      <div className="mb-8  p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-irisBlueColor">About </h2>
        <p className="text-gray-700">{hospital.about}</p>
      </div>

      {/* Doctors Section */}
      <div className="container mx-auto py-8">
        <h2 className='text-2xl font-semibold text-center mb-4  text-irisBlueColor'>Our Hospital Doctors</h2>
        <p className='text-center mb-6'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, molestiae facere! Maiores deleniti explicabo officiis omnis dicta ullam optio.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospital.doctors?.map((doctor) => (
            <div key={doctor.id} className='p-3 lg:p-5 rounded-xl transition-all duration-300 ease-in-out hover:scale-105   hover:shadow-black hover:shadow-xl'>
              <div>  <img src={doctor.photo} alt={`${doctor.name}`} className='w-full h-[200px] object-cover rounded-lg' /> </div>

              <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5'>{doctor.name}</h2>

              <div className="mt-2 lg:mt-4 flex items-center justify-between">
                <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[14px] leading-4 lg:text-[16px]lg:leading-7 font-bold rounded'>{doctor.specialization}</span>

                <div className="flex items-center gap-[6px]">

                  <span className='flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-bold text-headingColor'>

                    <img src={starIcon} alt='star icon' /> {doctor.avgRating}
                  </span>

                  <span className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>({doctor.totalRating})</span>
                </div>
              </div>
              <div className="mt-[18px] lg:mt-5 flex items-centers justify-between">

                <div>
                  <h3 className='text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-bold text-headingColor'>+{doctor.totalPatients} patients</h3>
                  <p className='text-[15px] leading-6 font-[400] text-textColor'>At {hospital.name}</p>
                </div>

                <Link to={`/doctors/${doctor.id}`} className='w-[44px] h-[44px] rounded-full border-solid border-[#181A1E]  flex items-center justify-center group hover:border-none transition-all duration-300 ease-in-out hover:scale-105  hover:bg-irisBlueColor hover:shadow-black hover:shadow-xl '>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HospitalDetails
