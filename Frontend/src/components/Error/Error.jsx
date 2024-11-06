/* eslint-disable react/prop-types */

const Error = ({ errMessage }) => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <h3 className='text-red-500 text-[25px] leading-[30px] font-bold'>{errMessage}</h3>

    </div>
  )
}

export default Error
