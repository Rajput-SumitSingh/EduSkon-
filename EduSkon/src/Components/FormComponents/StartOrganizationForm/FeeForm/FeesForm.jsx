import React from 'react'

function FeesForm({nextStep, prevStep, currentStep}) {
  return (
    <div className="p-5">
      <button onClick={() => prevStep()} className='btn btn-outline-success'>Back</button>
    </div>
  )
}

export default FeesForm