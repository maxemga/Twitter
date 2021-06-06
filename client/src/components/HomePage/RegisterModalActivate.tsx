import React, { useState } from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { Formik, Form, Field } from 'formik'
import { CgClose } from 'react-icons/cg'
import * as yup from 'yup';
import { useHttp } from './../../hooks/useHttp'

interface RegisterModalActivate {
    setModal: any
    email: string
}

const RegisterModalActivate: React.FC<RegisterModalActivate> = (props) => {
    const { request } = useHttp()
    const [errorMessage, setErrorMessage] = useState<string>('')

    const validationSchema = yup.object().shape({
        code: yup.string().required()
    })

    const activateAccount = async (values: any) => {
        const data: any = await request('/api/auth/activationAccount', 'POST', {email: props.email, code: values.code}, 'json')
        if (data.successfully === false) {
            setErrorMessage(data.message)
        }
        else {
            props.setModal('registerComplete')
        }
    }

    return(      
        <Formik initialValues={{
            code: ''
            }}
                onSubmit={(values: object) => console.log(values)}
                validationSchema={validationSchema}>
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <div className='homePageModal'>
                    <div className='homePageModalWrapper'>
                        <div className='homePageHeaderModal'>
                            <CgClose onClick={() => props.setModal('registerConfirm')}/>
                            <AiOutlineTwitter/>
                            <button onClick={() => activateAccount(values)} disabled={!isValid || !dirty} className={isValid && dirty ? 'homePageNextButton' : 'homePageNextButton homePageNextButtonError'}>Далее</button>
                            
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
                                    <Field className={errorMessage !== '' ? "formInput formInputError" : "formInput"} name='code' value={values.code} onChange={handleChange} placeholder='Имя'/>
                                    <label htmlFor='code'>Проверочный код</label>
                                </div>
                                <div className='formInputsError'>
                                    {<span>{errorMessage}</span>}
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

export default RegisterModalActivate