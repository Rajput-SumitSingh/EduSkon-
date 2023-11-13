import React from 'react'
import { Form, Field } from 'react-final-form'

function OrganizationForm({ nextStep, prevStep, currentStep }) {
    const onSubmit = () => {
        nextStep();
    }
    return (
        <div className="p-5">
            <div className="card border-0">
                <div className="card-header border-0">
                    <div className="text-center">
                        <span className="text-dark">
                            Stage : {currentStep} / 3
                        </span>
                    </div>
                    <div className="text-center">
                        <h2>Organization - Form</h2>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-5 col-12">
                            <div className=" p-5 text-align-center text-center justify-content-center">
                                <h1 className='text-secondary pt-5'>
                                    <b>Start your journey <br />with EduSkon</b>
                                </h1>
                                <div className="stage1-form-text">


                                    <span className='pt-3 text-dark'>Get unlimited access to structured courses & doubt clearing sessions</span>

                                </div><button type='button' className='btn btn-outline-success m-3 '> Start Learning  </button>

                            </div>
                        </div>
                        <div className="col-md-7 col-12 ">
                            <div className="justify-content-center align-items-center">
                                <div className="card border-0 p-5 shadow">
                                    <Form
                                        onSubmit={onSubmit}
                                        //validate={validate}   
                                        initialValues={{
                                            isOfflineStudent: "no", 
                                            isLiveClasses: "yes"
                                        }}
                                        render={({ handleSubmit, values, form }) => (
                                            <form onSubmit={handleSubmit}>


                                                <Field name='institute_or_organization_name'>
                                                    {({ input, meta }) => (
                                                        <div className="form-outline">
                                                            <label className='form-label'>Institute Or Organization Name </label>
                                                            <input {...input} autoComplete='off' type='text' className='form-control form-control-lg' placeholder='' />
                                                            {meta.error && meta.touched && (
                                                                <span className='errorMessage'>
                                                                    <i className="bi bi-exclamation-circle"></i>{" "}
                                                                    {meta.error}
                                                                </span>
                                                            )}
                                                        </div>
                                                    )}
                                                </Field>

                                                <Field name='institute_location'>
                                                    {({ input, meta }) => (
                                                        <div className="form-outline">
                                                            <label className='form-label'>Institute Location </label>
                                                            <input {...input} autoComplete='off' type='text' className=' form-control form-control-lg' />
                                                            {meta.error && meta.touched && (
                                                                <span className='errorMessage'>
                                                                    <i className="bi bi-exclamation-circle"></i>{" "}
                                                                    {meta.error}
                                                                </span>
                                                            )}
                                                        </div>
                                                    )}
                                                </Field>


                                                <Field name='no_of_teachers'>
                                                    {({ input, meta }) => (
                                                        <div className="form-outline">
                                                            <label className='form-label'>How many teacher you have ? </label>
                                                            <input {...input} autoComplete='off' type='number' className='form-control form-control-lg' />
                                                            {meta.error && meta.touched && (
                                                                <span className='errorMessage'>
                                                                    <i className="bi bi-exclamation-circle"></i>{" "}
                                                                    {meta.error}
                                                                </span>
                                                            )}
                                                        </div>
                                                    )}
                                                </Field>

                                                <div>
                                                    <div className="text-bold">
                                                        <label className='form-label'>Do you have Offline Students ? </label>
                                                    </div>
                                                </div>

                                                <div className="d-flex g-1">
                                                    <Field name='isOfflineStudent' type='radio' value="yes">
                                                        {({ input }) => (


                                                            <div className="d-flex ">
                                                                <input
                                                                    {...input}
                                                                    className='radio-input'
                                                                />
                                                                <label className='m-1'> yes</label>
                                                            </div>
                                                        )}
                                                    </Field>
                                                    <Field name='isOfflineStudent' type='radio' value="no">
                                                        {({ input }) => (
                                                            <div className="d-flex">
                                                                <input
                                                                    {...input}
                                                                    className='radio-input'
                                                                    onChange={(e) => {
                                                                        input.onChange(e);
                                                                        form.change("noOfStudent", "")
                                                                    }}
                                                                />
                                                                <label className='m-1'> no</label>
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>

                                                {values?.isOfflineStudent === "yes" && (
                                                    <>
                                                        <Field name='noOfStudent'>
                                                            {({ input, meta }) => (
                                                                <div className="form-label mt-3">
                                                                    <label>How many student you have ?</label>
                                                                    <input
                                                                        {...input}
                                                                        type='number'
                                                                        autoComplete='off'
                                                                        className='form-control form-control-lg'
                                                                    />
                                                                </div>
                                                            )}
                                                        </Field>
                                                    </>
                                                )}

                                                <div className="text-bold">
                                                    <label className='form-label'>Do you provide live classes ? </label>
                                                </div>

                                                <div className="d-flex g-1">
                                                    <Field name='isLiveClasses' type='radio' value="yes">
                                                        {({ input }) => (
                                                            <div className="d-flex ">
                                                                <input
                                                                    {...input}
                                                                    className='radio-input'
                                                                />
                                                                <label className='m-1'> yes</label>
                                                            </div>
                                                        )}
                                                    </Field>
                                                    <Field name='isLiveClasses' type='radio' value="no">
                                                        {({ input }) => (
                                                            <div className="d-flex">
                                                                <input
                                                                    {...input}
                                                                    className='radio-input'
                                                                    onChange={(e) => {
                                                                        input.onChange(e);
                                                                        form.change("timingOfLiveClasses", "")
                                                                    }}
                                                                />
                                                                <label className='m-1'> no</label>
                                                            </div>
                                                        )}
                                                    </Field>
                                                </div>

                                                {values?.isLiveClasses === "yes" && (
                                                    <>
                                                        <Field name='timingOfLiveClasses'>
                                                            {({ input, meta }) => (
                                                                <div className="form-label mt-3">
                                                                    <label className='form-label'>Timing for online classes ?</label>
                                                                    <input
                                                                        {...input}
                                                                        type='text'
                                                                        autoComplete='off'
                                                                        className='form-control form-control-lg'
                                                                    />
                                                                </div>
                                                            )}
                                                        </Field>
                                                    </>
                                                )}
                                                <div className="row mt-4">
                                                    <div className="col-md-6 col-12">
                                                        <div className="text-start">
                                                            <button type='button' className='btn btn-outline-dark ' onClick={() => prevStep()} style={{ width: "20%" }}> Back </button>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className="text-end">
                                                            <button type='submit' className='btn btn-outline-success ' style={{ width: "20%" }}> Next </button>
                                                        </div>
                                                    </div>


                                                </div>

                                            </form>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrganizationForm