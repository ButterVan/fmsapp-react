import React from 'react'

const Detail = () => {
  return (
    <div  className='Detail'>
      <form action="">
        <h3>Animal Detail</h3>
        <div className='AnimalPics'>
          
        </div>
        <div className='basicInfo'>
          {/* This will include, id 1 and 2, breed, sex */}
          <input type="text" name="animalSteelID" placeholder='Value1'/>
        </div>
        <div className='additionalInfo'>
          {/* This will inclide all dates, vacines, */}
          <label>DOB</label>
          <input type={"date"} />
        </div>
      </form>
    </div>
  )
}

export default Detail