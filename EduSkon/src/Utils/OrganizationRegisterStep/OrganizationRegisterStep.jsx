import React, { useState } from 'react'
import OrganizerForm from '../../Components/FormComponents/StartOrganizationForm/OrganizerForm/OrganizerForm';
import OrganizationForm from '../../Components/FormComponents/StartOrganizationForm/OrganizationForm/OrganizationForm'
import FeesForm from "../../Components/FormComponents/StartOrganizationForm/FeeForm/FeesForm"
function OrganizationRegisterStep() {
  const [currentStep, setCurrentStep] = useState(1);
  const nextStep = () =>{
    if(currentStep === 3){
        return; 
    }
    setCurrentStep(currentStep + 1);
  }
  
  const prevStep = () => setCurrentStep(currentStep - 1);

  const renderStep = (step) =>{
    switch(step){
        case 1: 
        return <OrganizerForm nextStep = {nextStep} currentStep = {currentStep} />

        case 2: 
        return <OrganizationForm nextStep = {nextStep} currentStep = {currentStep} prevStep = {prevStep} />

        case 3 : return <FeesForm nextStep={nextStep} currentStep={currentStep} prevStep = {prevStep} /> 
    }
  }
  
  
    return (
    <div className='container-fluid'>{renderStep(currentStep)}</div>
  )
}

export default OrganizationRegisterStep