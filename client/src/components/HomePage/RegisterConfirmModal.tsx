import React from 'react'
import { Formik, Form, Field } from 'formik'
import {CgClose} from 'react-icons/cg'
import { useHttp } from './../../hooks/useHttp'
import * as yup from 'yup';

interface RegisterConfirmModal {
    setModal: any
    name: string
    email: string
}

const RegisterConfirmModal: React.FC<RegisterConfirmModal> = (props) => {
    const { request } = useHttp()

    const validationSchema = yup.object().shape({
        name: yup.string().min(3, 'Длина имени, должно быть минимум 3 символа').max(15, 'Длина имени, не должно превышать 15 символов').required('Пожалуйста, введите ваше Имя'),
        email: yup.string().email("Введите корректный email").required('Пожалуйста, введите вашу Почту')
    })

    const register = (values: any) => {
        request('/api/auth/register', 'POST', values, 'json')
        props.setModal('registerValidate')
        
    }

    return(
                    <Formik initialValues={{
                        name: `${props.name}`,
                        email: `${props.email}`,

                        }}
                         onSubmit={(values) => console.log(values)}
                         validationSchema={validationSchema}>
                            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                            <div className='homePageModal'>
                                <div className='homePageModalWrapper'>
                                    <div className='homePageHeaderModal'>
                                        <CgClose onClick={() => props.setModal('registerTracking')}/>
                                        <p>Шаг 3 из 5</p>                            
                                    </div>
                                    <div className='homePageModalContent'>
                                        <Form className='formRegister'>
                                            <div className='formHeader'>
                                                <p>Создайте учетную запись</p>
                                            </div>

                                            <div className='formInputs'>
                                                <Field onChange={() => props.setModal('register')} className={touched.name && errors.name ? "formInput formInputError" : "formInput"} name='name' value={values.name} placeholder='Имя'/>
                                                <label htmlFor='name'>Имя</label>
                                            </div>

                                            <div className='formInputs'>                                  
                                                <Field onChange={() => props.setModal('register')} className={touched.email && errors.email ? "formInput formInputError" : "formInput"} name='email' value={values.email} placeholder='Адрес электронной почты'/>
                                                <label htmlFor="phone">Адрес электронной почты</label>
                                            </div>                       

                                            <div className='formInputs formInputsPolitics'>
                                                <p>Регистрируясь, вы соглашаетесь с  <span>Условиями предоставления услуг</span> и <span>Политикой конфиденциальности</span>, включая <span> Политику использования файлов cookie</span>. Вас можно будет найти по адресу электронной почты или номеру телефона, если вы его укажете. · <span>Параметры конфиденциальности</span></p>                           
                                            </div>
                                            <div className='formInputsSubmit'>
                                                <button onClick={() => register(values)}>Зарегестрироваться</button>
                                            </div>

                                                 
                                        </Form>
                                    </div>
                                </div>
                            </div>
                            )}
                        </Formik>
                
    )
}

export default RegisterConfirmModal