import express from 'express'
import { Schema, model, connect } from 'mongoose';
import User from './../models/User'
import { Router } from 'express'

const router = Router();

router.post('/register', async (req: express.Request, res: express.Response) => {
    try {
        const { name, email } = req.body

        const candidate: any = await User.find({email})

        if (candidate) {
            return res.send({ message: 'Такой пользователь уже существует' })
        }
        
        const user = new User({
            name: name,
            email: email,
            password: '2',
            code: Math.ceil(Math.random() * 1000000),
            isActivated: false

        })
        await user.save()

        
    }
    catch {
        console.log('Ошибка')
    }
    
})


module.exports = router