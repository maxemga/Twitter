import React, { useContext, useState } from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup';
import { useHttp } from './../../hooks/useHttp'
import { ContextAuth } from '../../context/ContextAuth';

interface LoginModal {
    setModal: any
}

const LoginModal: React.FC<LoginModal> = (props) => {
    const { request } = useHttp()
    const auth: any = useContext(ContextAuth)
    const [errorMessage, setErrorMessage] = useState<string>('')

    const validationSchema = yup.object().shape({
        email: yup.string().email("Введите корректный email").required('Пожалуйста, введите вашу Почту'),

    })

    const loginUser = async (values: object) => {
        const data: any = await request('/api/auth/login', 'POST', values, 'json')
        if (data.successfully == false) {
            setErrorMessage(data.message)
        }
        auth.login(data.id, data.token)
    }


    return(
        <Formik initialValues={{ 
            email: ``,
            password: ''
            }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}>
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <div className='homePageModal'>
                    <div className='homePageModalWrapper'>
                        <div className='homePageHeaderModal'>
                            <button disabled={!isValid || !dirty} className={isValid && dirty ? 'homePageNextButton' : 'homePageNextButton homePageNextButtonError'} onClick={() => loginUser(values)}>Войти</button>
                            <AiOutlineTwitter/>
                        </div>
                        <div className='homePageModalContent'>
                            <Form className='formRegister'>
                                <div className='formHeader'>
                                    <p>Войти в свою учетную запись</p>
                                </div>

                                <div className='formInputs'>
                                    <Field className={touched.email && errors.email || errorMessage != '' ? "formInput formInputError" : "formInput"} name='email' value={values.email} onChange={handleChange} placeholder='Адрес электронной почты'/>
                                    <label htmlFor='name'>Адрес электронной почты</label>
                                </div>

                                <div className='formInputsError'>
                                    {touched.email && errors.email && <span>{errors.email}</span>}
                                </div>

                                <div className='formInputs'>                                  
                                    <Field className={errorMessage != '' ? "formInput formInputError" : "formInput"} name='password' value={values.password} onChange={handleChange} placeholder='Пароль'/>
                                    <label htmlFor="phone">Пароль</label>
                                </div>

                                <div className='formInputsError'>
                                    {<span>{errorMessage}</span>}
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

export default LoginModal