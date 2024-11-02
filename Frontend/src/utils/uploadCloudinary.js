//importing .env life
const upload_preset = import.meta.env.VITE_UPLOAD_PRESET
const cloud_name = import.meta.env.VITE_CLOUD_NAME

//function takes image to its parameter
const uploadImageToCloudinary = async file => {

  const uploadData = new FormData();
  //this object  is used to preare the photo to up load
  uploadData.append('file', file);
  uploadData.append('upload_preset', upload_preset);
  uploadData.append('cloud_name', cloud_name);

  //fetching url  to upload image
  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
    method: 'post',
    body: uploadData,
  })

  const data = await response.json()
  //returning the url of the image
  return data;


}



export default uploadImageToCloudinary;