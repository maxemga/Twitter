import express from 'express'
const config = require('config')

const app = express();

const port = config.get('port');
app.use('/api/auth', require('./routers/test'));

app.listen(port, () => console.log(`Running on port ${port}`));
