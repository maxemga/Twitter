import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { Formik, Form, Field } from 'formik'
import {CgClose} from 'react-icons/cg'
import * as yup from 'yup';

interface RegisterModalValidate {
    setModal: any
    email: string
}

const RegisterModalValidate: React.FC<RegisterModalValidate> = (props) => {

    const validationSchema = yup.object().shape({
        name: yup.string().min(3, 'Длина имени, должно быть минимум 3 символа').max(15, 'Длина имени, не должно превышать 15 символов').required('Пожалуйста, введите ваше Имя'),
        email: yup.string().email("Введите корректный email").required('Пожалуйста, введите вашу Почту')
    })

    return(
        
                    <Formik initialValues={{
                        code: ''
                        }}
                         onSubmit={(values) => console.log(values)}
                         validationSchema={validationSchema}>
                            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                            <div className='homePageModal'>
                                <div className='homePageModalWrapper'>
                                    <div className='homePageHeaderModal'>
                                        <CgClose onClick={() => props.setModal('registerConfirm')}/>
                                        <AiOutlineTwitter/>
                                        <button disabled={!isValid || !dirty} className={isValid && dirty ? 'homePageNextButton' : 'homePageNextButton homePageNextButtonError'}>Далее</button>
                                        
                                    </div>
                                    <div className='homePageModalContent'>
                                        <Form className='formRegister'>
                                            <div className='formHeader'>
                                                <p>Мы отправили вам код</p>
                                            </div>
                                            <div className='formInputsEmail'>
                                                <p>Введите код в расположенном ниже поле для подтверждения {props.email}.</p>
                                            </div>

                                            <div className='formInputs formInputsValidate'>
                                                <Field className='formInput' name='code' value={values.code} onChange={handleChange} placeholder='Имя'/>
                                                <label htmlFor='code'>Проверочный код</label>
                                                
                                            </div>
                                            <div className='formInputsCode'>
                                                <span>Не получили сообщение электронной почты?</span>
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

export default RegisterModalValidate