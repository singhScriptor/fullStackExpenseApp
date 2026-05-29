const express = require('express')
const port = 3000
const cors = require('cors')
const db = require('./utils/db-connection')


const app = express()

app.use(express.json())
app.use(cors())

const routes = require('./routes/expenseRoutes')

app.get('/',(req,res)=>{
    res.send('welcome to my server!')
})

app.use('/expenses',routes)


db.sync({alter:true})
.then(()=>{
    app.listen(port,()=>{
        console.log('server is listening...!')
    })
})
.catch((err)=>{
    console.log(err.message)
})