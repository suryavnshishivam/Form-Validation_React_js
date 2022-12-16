import { useState, useEffect } from 'react';
import './Form.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const Form = () => {

    const [form, setForm] = useState({ name: '', age: '', gender: '', email: '', dateOfBirth: new Date(), agree: 'off' })
    const [isNameValid, setIsNameValid] = useState(false)
    const [isAgeValid, setIsAgeValid] = useState(false)
    const [isGenderValid, setIsGenderValid] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [showEnabledButton, setEnabledButton] = useState(false)
    const [isValidDate, setisValidDate] = useState(false);



    const onNamechange = (events) => {
        setForm({ ...form, name: events.target.value.replace(/[^a-zA-Z0-9 ]/gi, '') })

        let number = /[0-9]/
        let alphanumeric = /[^a-zA-Z0-9, ]/

        if (form.name.trim().length <= 1) {

            if (form.name.match(number)) {
                setForm({ ...form, name: events.target.value.replace(/[^a-zA-Z ]/gi, '') })
                setIsNameValid(true)
                // alert('Please Enter Valid Name , ex:-Surya09 not 09Surya')

            } else if (form.name.match(alphanumeric)) {
                setForm({ ...form, name: events.target.value.replace(/[^a-zA-Z0-9 ]/gi, '') })
                setIsNameValid(false)

            }
        } else {
            setForm({ ...form, name: events.target.value.replace(/[^a-zA-Z0-9 ]/gi, '') })
            setIsNameValid(false)

        }





    }

    const onAgechange = (events) => {
        setForm({ ...form, age: events.target.value.replace(/[^0-9]+/, '') })


        if (events.target.value >= 15 && events.target.value <= 100) {
            setIsAgeValid(false)
        } else {
            setIsAgeValid(true)
            return true
        }
    }


    const onGenderChange = (events) => {
        setForm({ ...form, gender: events.target.value })
        setIsGenderValid(false)
    }

    const onEmailchange = (events) => {
        setForm({ ...form, email: events.target.value })
        let mailformat = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (form.email.match(mailformat)) {
            setIsEmailValid(false)
        }
        else {
            setIsEmailValid(true)

        }
    }

    const onDateChange = (date) => {
        setForm({ ...form, dateOfBirth: date })
        if (form.date > 0) {
            setisValidDate(true)
        } else {
            setisValidDate(false)
        }
    }

    const enabledButton = (events) => {
        setForm({ ...form, agree: events.target.value })
        setEnabledButton(!showEnabledButton)

    }


    const onSubmitHandler = (events) => {
        events.preventDefault()

        if (form.name.trim().length <= 1) {
            setIsNameValid(true);
        } else {
            setIsNameValid(false);

        }

        if (form.age.trim().length == 0) {
            setIsAgeValid(true);
        } else {
            setIsAgeValid(false);

        }

        if (form.gender.trim().length == 0) {
            setIsGenderValid(true);
        } else {
            setIsGenderValid(false);

        }

        let mailformat = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (form.email.match(mailformat)) {
            setIsEmailValid(false)
        }
        else {
            setIsEmailValid(true)

        }

        if (form.dateOfBirth == 0) {
            setisValidDate(true);
        } else {
            setisValidDate(false);

        }



        const studentlist = { name: form.name, age: form.age, gender: form.gender, email: form.email, dateOfBirth: form.dateOfBirth }

        console.log(studentlist)

        if (form.name.trim().length > 1) {
            setIsNameValid(false)

        } else {
            setIsNameValid(true)
            alert('Name is Invalid Please Enter Valid Name')
            return
        }

        if (form.age >= 15 && form.age <= 100) {
            setIsAgeValid(false)
        } else {
            setIsAgeValid(true)
            alert('Age is Invalid Please Enter Valid Age Number')
            return

        }

        if (form.gender.trim().length > 0) {
            setIsGenderValid(false)
        } else {
            setIsGenderValid(true)
            alert('Select At least one Gender Male/Female')
            return
        }

        let mailFormatOnSubmit = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

        if (form.email.trim().length > 0 && form.email.match(mailFormatOnSubmit)) {
            setIsEmailValid(false)
        } else {
            setIsEmailValid(true)
            alert('Please Enter Valid Email Address ')
            return
        }

        if (form.name.trim().length > 1 && form.age.trim().length > 0 && form.gender.trim().length > 0 && form.email.trim().length > 0 && form.dateOfBirth > 0) {

            alert('Name :- ' + studentlist.name + " Age :- " + studentlist.age + " Gender :- " + studentlist.gender + ' Email :- ' + studentlist.email + " DOB :- " + studentlist.dateOfBirth + " Successfuly Run ")

        }
        setEnabledButton(showEnabledButton)


    }

    
    return (
        <div className='container  col-12 text-center d-flex justify-content-between flex-wrap ' >

            <div className='col-12 col-sm-12 col-md-12 col-lg-6 '>
                <form className='form-control px-5' onSubmit={onSubmitHandler} >
                    <div className={`form_control text-start  ${isNameValid ? 'invalid' : ''}`}>
                        <label className='form-label'>Name : </label>
                        <input type='text' className='form-control' onChange={onNamechange} value={form.name} placeholder="Enter Your Name" />
                        {isNameValid && <b>Please Enter Valid Name , ex:-Surya09 not 09Surya</b>}
                    </div>
                    <div className={`form_control text-start  ${isAgeValid ? 'invalid' : ''}`}>
                        <label className='form-label' htmlFor="quantity">Age : </label>
                        <input type="text" id="quantity" name="quantity" className='form-control' onChange={onAgechange} value={form.age} placeholder="Enter Your Age" />
                        {isAgeValid && <p>Age Must be Correct from 15 to 100 </p>}
                    </div>
                    <br></br>
                    <div className={`form_control text-start  ${isGenderValid ? 'invalid' : ''}`} onChange={onGenderChange} >
                        <label >Gender : </label>

                        <input type='radio' className='form-check-input' id='Female' name='gender' style={{ marginRight: '8px' }} value='Female' defaultChecked={form.gender == 'Female'} />

                        <label htmlFor='Female' className='form-label' style={{ marginRight: '40px' }}>Female </label>

                        <input type='radio' className='form-check-input' id='Male' name='gender' style={{ marginRight: '8px' }} value='Male' defaultChecked={form.gender == 'Male'} />

                        <label htmlFor='Male' className='form-label'>Male</label>
                        {isGenderValid && <p>Select Gender Compulsory </p>}

                        <br />

                    </div>
                    <div className={`form_control text-start  ${isEmailValid ? 'invalid' : ''}`}>
                        <label className='form-label'>Email : </label>
                        <input type='text' className='form-control' onChange={onEmailchange} value={form.email} placeholder="Enter Your Emial Address" />
                        {isEmailValid && <p>Invalid Email Address Please Enter  Below Type of  <b>Ex:- surya.123@gmail.com</b> </p>}
                    </div>
                    <div className={`form_control text-start  ${isValidDate ? 'invalid' : ''}`}>
                        <label className='form-label'>D.O.B : </label>

                        <DatePicker selected={form.dateOfBirth} onChange={onDateChange} className='form-control' maxDate={new Date()}
                            showMonthDropdown={true}
                            showYearDropdown={true}
                            dropdownMode="select"
                            adjustDateOnChange
                        />

                        {isValidDate && <p>Date Of Birth Select Mandetoray </p>}


                    </div>
                    <div >
                        <input type='checkbox' className='form-check-input mt-3' style={{ marginRight: '8px' }} onClick={enabledButton} />
                        <label className='form-label mt-3'>Agree of Mantioned all data</label>
                    </div>

                    <button type='Submit' className='btn btn-primary mt-3 ' disabled={!showEnabledButton} >Submit</button>
                </form>
            </div>

            {showEnabledButton &&
                <div className='col-12 col-sm-12 col-md-12 col-lg-5 mt-5 bg-secondary p-5 text-white rounded-3 mt-md-0 mt-lg-0 '>
                    {

                        <ul className='list-unstyled  text-center'>
                            <li className=' text-start'> <label className='text-warning'>Name : -</label> {form.name}</li> <br></br>
                            <li className=' text-start'> <label className='text-warning'>Age : -</label> {form.age}</li> <br></br>
                            <li className=' text-start'> <label className='text-warning'>Gender : -</label> {form.gender}</li> <br></br>
                            <li className=' text-start'> <label className='text-warning'>Email : -</label> {form.email}</li> <br></br>
                            <li className=' text-start'> <label className='text-warning'>Date : -</label> {form.dateOfBirth.toString()}</li>
                        </ul>

                    }
                </div>
            }

        </div>

    )
}
export default Form;