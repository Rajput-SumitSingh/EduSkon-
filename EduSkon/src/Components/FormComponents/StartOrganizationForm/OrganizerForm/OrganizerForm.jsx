import React from 'react'
import { Form, Field } from 'react-final-form'

function OrganizerForm({ currentStep, nextStep }) {

    const onSubmit = (values) => {
        console.log("OrganizerFormValues", values);
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
                        <h2>Organiz3r - Form</h2>
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
                        <div className="col-md-7 col-12">
                            <div className="justify-content-center align-items-center">
                                <div className="card border-0 shadow p-5">
                                    <Form
                                        onSubmit={onSubmit}
                                        //validate={validate}
                                        initialValues={{
                                            isManager: "yes"
                                        }
                                        }
                                        render={({ handleSubmit, values, form }) => (
                                            <form onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-md-6 col-12">
                                                        <Field name='first_name'>
                                                            {({ input, meta }) => (
                                                                <div className="form-outline">
                                                                    <label className='form-label'>first name</label>
                                                                    <input {...input} autoComplete='off' type='text' className='form-control form-control-lg' />
                                                                    {meta.error && meta.touched && (
                                                                        <span className='errorMessage'>
                                                                            <i className="bi bi-exclamation-circle"></i>{" "}
                                                                            {meta.error}
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </Field>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <Field name='last_name'>
                                                            {({ input, meta }) => (
                                                                <div className="form-outline">
                                                                    <label className='form-label'>last name</label>
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
                                                    </div>
                                                </div>


                                                <Field name='phone_no'>
                                                    {({ input, meta }) => (
                                                        <div className="form-outline">
                                                            <label className='form-label'>cell phone </label>
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
                                                <Field name='email_id'>
                                                    {({ input, meta }) => (
                                                        <div className="form-outline">
                                                            <label className='form-label'>Email Id </label>
                                                            <input {...input} autoComplete='off' type='text' className='form-control form-control-lg' />
                                                            {meta.error && meta.touched && (
                                                                <span className='errorMessage'>
                                                                    <i className="bi bi-exclamation-circle"></i>{" "}
                                                                    {meta.error}
                                                                </span>
                                                            )}
                                                        </div>
                                                    )}
                                                </Field>

                                                <div className="text-bold">
                                                    <div className="form-label mt-3">
                                                        <b>Are you a manager ? </b>
                                                    </div>
                                                </div>
                                                <div className="d-flex g-1" style={{ gap: "20px" }}>
                                                    <Field name='isManager' type='radio' value="yes">
                                                        {({ input }) => (
                                                            <div className="d-flex align-items-center ques-radio">
                                                                <input {...input} className='radio-input' />
                                                                <label className='custom-contrl-label m-1'>Yes</label>
                                                            </div>
                                                        )}
                                                    </Field>

                                                    <Field name='isManager' type='radio' value="no">
                                                        {({ input }) => (
                                                            <div className="d-flex align-items-center">
                                                                <input
                                                                    {...input}
                                                                    className='radio-input'
                                                                    onChange={(e) => {
                                                                        input.onChange(e);
                                                                        form.change("managerFirstName", "");
                                                                        form.change("managerLasttName", "");
                                                                        form.change("managerPhone", "");
                                                                        form.change("managerEmail", "");
                                                                    }}
                                                                />
                                                                <label className='custom-contrl-label m-1'>No</label>
                                                            </div>
                                                        )}
                                                    </Field>

                                                    
                                                </div>
                                                {values?.isManager === "no" && (
                                                        <>
                                                            <div className="row">
                                                                <div className="col-md-6 col-12">
                                                                    <Field name='managerFirstName'>
                                                                        {({ input, meta }) => (
                                                                            <div className="form-outline">
                                                                                <label className='form-label'>Manager first name</label>
                                                                                <input {...input} autoComplete='off' type='text' className='form-control form-control-lg' />
                                                                                {meta.error && meta.touched && (
                                                                                    <span className='errorMessage'>
                                                                                        <i className="bi bi-exclamation-circle"></i>{" "}
                                                                                        {meta.error}
                                                                                    </span>
                                                                                )}
                                                                            </div>
                                                                        )}
                                                                    </Field>
                                                                </div>
                                                                <div className="col-md-6 col-12">
                                                                    <Field name='managerLasttName'>
                                                                        {({ input, meta }) => (
                                                                            <div className="form-outline">
                                                                                <label className='form-label'>Manager last name</label>
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
                                                                </div>
                                                            </div>


                                                            <Field name='managerPhone'>
                                                                {({ input, meta }) => (
                                                                    <div className="form-outline">
                                                                        <label className='form-label'>Manager cell phone </label>
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
                                                            <Field name='managerEmail'>
                                                                {({ input, meta }) => (
                                                                    <div className="form-outline">
                                                                        <label className='form-label'>Manager Email Id </label>
                                                                        <input {...input} autoComplete='off' type='text' className='form-control form-control-lg' />
                                                                        {meta.error && meta.touched && (
                                                                            <span className='errorMessage'>
                                                                                <i className="bi bi-exclamation-circle"></i>{" "}
                                                                                {meta.error}
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </Field>
                                                        </>
                                                    )}
                                                <div className="text-end">
                                                    <button type='submit' className='btn btn-outline-success mt-4' style={{ width: "20%" }}> Next </button>
                                                </div>
                                            </form>
                                        )}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="justify-content-center align-items-center text-center">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrganizerForm