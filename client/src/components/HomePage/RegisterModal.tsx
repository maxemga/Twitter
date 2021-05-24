import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup';


const RegisterModal: React.FC= () => {

    const validationSchema = yup.object().shape({
        name: yup.string().min(20, 'dddddddddddddddddddddd'),
        email: yup.string().email("Введите корректный email")
    })

    return(
        <div className='homePageModal'>
            <div className='homePageModalWrapper'>
                <div className='homePageHeader'>
                    <AiOutlineTwitter/>
                    <button>Далее</button>
                </div>
                <div className='homePageContent'>
                    <Formik initialValues={{
                        name: '',
                        email: '',
                        day: '',
                        month: '',
                        year: ''
                        }}
                         onSubmit={(values) => console.log(values)}
                         validationSchema={validationSchema}>
                            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                                <Form className='formRegister'>
                                    <div className='formHeader'>
                                        <p>Создайте учетную запись</p>
                                    </div>
                                    <div className='formInputs'>
                                        <Field className={touched.name && errors.name ? "formInput formInputError" : "formInput"} name='name' value={values.name} onChange={handleChange} placeholder='Имя'/>
                                        <label htmlFor='name'>Имя</label>
                                    </div>
                                    <div className='formInputs'>                                  
                                        <Field className="formInput" name='email' value={values.email} onChange={handleChange} placeholder='Адрес электронной почты'/>
                                        <label htmlFor="phone">Адрес электронной почты</label>
                                    </div>
                                    <div className='formInputs'>
                                        <span>Использовать телефон</span> 
                                    </div>
                                    <div className='formInputs formInputDate'>
                                        <p>Дата рождения <br/><span>Эта информация не будет общедоступной. Подтвердите свой возраст, даже если эта учетная запись предназначена для компании, домашнего животного и т. д.</span></p>                           
                                    </div>
                                    <div className='formInputsSelect'>
                                            <div className='formInputsSelectInput'>
                                                <label htmlFor="select">Месяц</label>                            
                                                <Field as='select' className='formInput' onBlur={handleBlur} name='day' value={values.day} onChange={handleChange}>          
                                                    <option value='0'>FFFF</option>
                                                </Field>
                                            </div>

                                            <div className='formInputsSelectInput'>
                                                <label htmlFor="select">День</label>                            
                                                <Field as='select' className='formInput' name='month' value={values.month} onChange={handleChange}>          
                                                    <option>FFFF</option>
                                                </Field>
                                            </div>

                                            <div className='formInputsSelectInput'>
                                                <label htmlFor="select">Год</label>                            
                                                <Field as='select' className='formInput' name='year' value={values.year} onChange={handleChange}>          
                                                    <option>FFFF</option>
                                                    
                                                </Field>
                                                <button onClick={() => fetch}>fdffffffffffffffffffffffffffffffffffffffffffffffffff</button>
                                            </div>     
                                    </div>      
                                </Form>
                            )}
                        </Formik>
                </div>
            </div>
        </div>
    )
}

export default RegisterModal