import express from 'express'
const config = require('config')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();

const port = config.get('port');

app.use(express.json())
app.use(cors())

app.use('/api/auth', require('./routers/authRouter'));

const start = async () => {
    try {
        await mongoose.connect(config.get('mongoUrl'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(port, () => console.log(`Running on port ${port}`));
    }
    catch {
        console.log('Ошибка подключения к базе данных')
    }
}

start()
