const convertTime = (time) => {
  // Split time into hours and minutes parts
  const timeParts = time.split(':');
  let hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);

  let meridiem = 'AM';
  if (hours >= 12) {
    meridiem = 'PM';
    if (hours > 12) {
      hours -= 12;
    }
  } else if (hours === 0) {
    hours = 12; // For midnight case
  }

  return (
    hours.toString().padStart(2, '0') +
    ':' +
    minutes.toString().padStart(2, '0') +
    ' ' +
    meridiem
  );
};

export default convertTime;
