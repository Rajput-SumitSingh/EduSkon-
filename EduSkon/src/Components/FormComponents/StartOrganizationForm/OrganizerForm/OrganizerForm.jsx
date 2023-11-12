import React from 'react'

function OrganizerForm({currentStep, nextStep}) {
    const handleClick = () =>{
        nextStep();
    }
  return (
    <>
    <h3>Organizer form </h3>
    <button onClick={handleClick}>nextStep </button>
    </>
  )
}

export default OrganizerForm