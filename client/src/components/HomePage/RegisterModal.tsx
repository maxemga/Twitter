import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup';

interface RegisterModal {
    name: string
    email: string
    setModal: any
    changeValues: any
}

const RegisterModal: React.FC<RegisterModal> = (props) => {

    const validationSchema = yup.object().shape({
        name: yup.string().min(3, 'Длина имени, должно быть минимум 3 символа').max(15, 'Длина имени, не должно превышать 15 символов').required('Пожалуйста, введите ваше Имя'),
        email: yup.string().email("Введите корректный email").required('Пожалуйста, введите вашу Почту'),
    })

    const pressButton = (values: any): void => {
        props.changeValues(values)
        props.setModal('registerTracking')
    }

    return(
        
                    <Formik initialValues={{
                        name: `${props.name}`,
                        email: `${props.email}`,
                        day: '',
                        month: '',
                        year: ''
                        }}
                         onSubmit={(values) => console.log(values)}
                         validationSchema={validationSchema}>
                            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                            <div className='homePageModal'>
                                <div className='homePageModalWrapper'>
                                    <div className='homePageHeaderModal'>
                                        
                                        <button disabled={!isValid || !dirty} className={isValid && dirty ? 'homePageNextButton' : 'homePageNextButton homePageNextButtonError'} onClick={() => pressButton(values)}>Далее</button>
                                        <AiOutlineTwitter/>
                                    </div>
                                    <div className='homePageModalContent'>
                                        <Form className='formRegister'>
                                            <div className='formHeader'>
                                                <p>Создайте учетную запись</p>
                                            </div>

                                            <div className='formInputs'>
                                                <Field className={touched.name && errors.name ? "formInput formInputError" : "formInput"} name='name' value={values.name} onChange={handleChange} placeholder='Имя'/>
                                                <label htmlFor='name'>Имя</label>
                                            </div>

                                            <div className='formInputsError'>
                                                {touched.name && errors.name && <span>{errors.name}</span>}
                                            </div>

                                            <div className='formInputs'>                                  
                                                <Field className={touched.email && errors.email ? "formInput formInputError" : "formInput"} name='email' value={values.email} onChange={handleChange} placeholder='Адрес электронной почты'/>
                                                <label htmlFor="phone">Адрес электронной почты</label>
                                            </div>

                                            <div className='formInputsError'>
                                                {touched.email && errors.email && <span>{errors.email}</span>}
                                            </div>

                                            <div className='formInputs'>
                                                <span>Использовать телефон</span> 
                                            </div>

                                            <div className='formInputs formInputDate'>
                                                <p>Дата рождения <br/><span>Эта информация не будет общедоступной. Подтвердите свой возраст, даже если эта учетная запись предназначена для компании, домашнего животного и т. д.</span></p>                           
                                            </div>

                                            <div className='formInputDate'>
                                                
                                                    {/* <div className='formInputsSelectInput'>
                                                        <label htmlFor="select">Месяц</label>                            
                                                        <Field as='select' className='formInput formInputSelect' onBlur={handleBlur} name='month' onChange={handleChange}> 
                                                            <option value=''></option>         
                                                            <option value='Январь'>Январь</option>
                                                            <option value='Февраль'>Февраль</option>
                                                            <option value='Март'>Март</option>
                                                            <option value='Апрель'>Апрель</option>
                                                            <option value='Май'>Май</option>
                                                            <option value='Июнь'>Июнь</option>
                                                            <option value='Июль'>Июль</option>
                                                            <option value='Август'>Август</option>
                                                            <option value='Сентябрь'>Сентябрь</option>
                                                            <option value='Октябрь'>Октябрь</option>
                                                            <option value='Ноябрь'>Ноябрь</option>
                                                            <option value='Декабрь'>Декабрь</option>
                                                        </Field>
                                                    </div>

                                                    <div className='formInputsSelectInput'>
                                                        <label htmlFor="select">День</label>                            
                                                        <Field as='select' className='formInput formInputSelect' name='day' value={values.month} onChange={handleChange}>          
                                                            <option>FFFF</option>
                                                        </Field>
                                                    </div>

                                                    <div className='formInputsSelectInput'>
                                                        <label htmlFor="select">Год</label>                            
                                                        <Field as='select' className='formInput formInputSelect' name='year' value={values.year} onChange={handleChange}>          
                                                            <option>FFFF</option>
                                                            
                                                        </Field>
                                                        
                                                    </div>      */}
                                            </div>      
                                        </Form>
                                    </div>
                                </div>
                            </div>
                            )}
                        </Formik>
                
    )
}

export default RegisterModal