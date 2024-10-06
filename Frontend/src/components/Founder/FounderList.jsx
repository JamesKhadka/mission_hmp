import React from 'react'
import FounderCard from './FounderCard';
import { founders } from '../../assets/data/founders'

const FounderList = () => (
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] '>
    {founders.map(founder => (
      <FounderCard key={founder.id} founder={founder} />
    ))}
  </div>
);

export default FounderList
