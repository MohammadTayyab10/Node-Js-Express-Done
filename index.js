const express = require('express')
const app =express()
const mongoose = require('mongoose')
const userRoutes = require('./Router/user')
const blogRoutes = require('./Router/blog')

const morgan = require('morgan')


mongoose.connect('mongodb+srv://MohammadTayyab10:blog@cluster0.j22izrs.mongodb.net/').then(() => {
    console.log('Mongodb Connected')
}).catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send(new Date())
})

function middleware(re, res, next) {
    console.log("Middleware Console0");
    next()
}

app.use(morgan('tiny'));
app.use(middleware);
app.use(express.json());
app.use('/user',userRoutes);
app.use('/blog',blogRoutes);



const port = 3000;

app.listen(port, () => {
    console.log('Server listening on port' + port);
});