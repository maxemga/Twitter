import express from 'express'
import { Schema, model, connect } from 'mongoose';
import { Router } from 'express'
import User from './../models/User'
import TokenGenerator from 'tokgen'
import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer'
import config from 'config'
import jwt from 'jsonwebtoken'

const router = Router();

const transporter: any = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'maxemga22@gmail.com',
        pass: 'MAXEMGA22a'
    },
    tls : { rejectUnauthorized: false }
})

router.post('/register', async (req: express.Request, res: express.Response) => {
    try {
        const { name, email } = req.body

        const candidate: object = await User.findOne({email});
        
        if (candidate) {       
            return res.send({ message: 'Такой пользователь уже существует', successfully: false })  
        }

        else {      
            const generator: any = new TokenGenerator({length: 8});
            const password: string = generator.generate();
            
            const hashedPassword: string = await bcrypt.hash(password, 8)
            
            const user = new User({
                name: name,
                email: email,
                password: hashedPassword,
                code: Math.ceil(Math.random() * 1000000),
                isActivated: false

            })
            await user.save()

            const mailOptions = {
                from: `maxemga22@gmail.com`,
                to: `${user.email}`,
                subject: 'Twitter',
                text: ``,
                html: `
                <h1>Спасибо за регистрацию!</h1>

                <p style="font-size:20px;">Ваш код для подтверждение регистрации: ${user.code}</p>
                <p style="font-size:20px;">Ваш пароль для входа на аккаунт: ${password}</p> 
                `
            }
            transporter.sendMail(mailOptions)
            
            return res.send({ message: 'Вы успешно зарегестрировались', successfully: true })

            
        }

        
    }
    catch(e) {
        console.log('Ошибка: ', e)
    }
    
})

router.post('/activationAccount', async (req: express.Request, res: express.Response) => {
    try {
        const { code, email } = req.body

        const user = await User.findOne({email})

        if (code == user.code) {
            await User.updateOne({email}, {isActivated: true, $unset: {code: 1}})
            
            return res.send({ message: 'Аккаунт успешно активирован', successfully: true })
        }
        else {
            return res.send({ message: 'Неправильный код', successfully: false })
        }

    }
    catch(e) {
        console.log('Ошибка ', e)
    }
})

router.post('/login', async (req: express.Request, res: express.Response) => {
    try {
        const {email, password} = req.body

        const user: any = await User.findOne({email})

        if (user) {

            const isMatch: boolean = await bcrypt.compare(password, user.password)

            if (isMatch && user.isActivated == true) {

                const token = jwt.sign(
                    { userId: user.id },
                    config.get('jwtToken'),
                    { expiresIn: '1h' }
                )

                return res.send({ message: 'Вы вошли в аккаунт', successfully: true, id: user.id, token: token})
            }

            if (user.isActivated == false) {
                return res.send({ message: 'Аккаунт не активирован', successfully: false })
            }
        
            return res.send({ message: 'Неправильная почта или пароль', successfully: false })

        }
       
        return res.send({ message: 'Пользователь не найден', successfully: false })
       
    }
    catch(e) {
        console.log('Ошибка ', e)
    }
})


module.exports = router