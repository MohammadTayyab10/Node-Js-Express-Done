const app = require('express')
const router = app.Router()

const blogs = [
    {
        title: 'Azeem',
        desc: 'This for you',
        id: 1
    },
    {
        title: 'Ali',
        desc: 'This foeeekje melemke',
        id: 2
    },
    {
        title: 'Azaan',
        desc: 'This eyeeuccb  cchj',
        id: 3
    }
];


router.get('/', (req, res) => {
    res.status(200).send({
        status: 200,
        blogs: blogs
    })
})


router.get('/:id', (req, res) => {
    if(blogs[req.params.id-1]){
    
    res.status(200).send({
        status: 200,
        blogs: blogs[req.params.id-1]
    })}
    else{
        res.status(500).send({
            status: 500,
            blogs: "blog not found on" + req.params.id
        })}
})

router.post('/', (req, res) => {
    console.log(req.body)
    blogs.push({title :req.body.title , id : blogs.length + 1 ,desc:req.body.desc})
    res.status(200).send({
         status: 200,
         blogs : {title :req.body.title , id : blogs.length + 1, desc: req.body.desc }})

})

router.put('/:id', (req, res) => {

    if (blogs[req.params.id - 1]) {
        blogs[req.params.id - 1].title = req.body.title
        blogs[req.params.id - 1].desc = req.body.desc

        res.status(200).send({ status: 200,  blog : blogs[req.params.id - 1] })

    } else {
        
        res.status(200).send({ 
            status: 500, 
            blog : "Blogs not found"
        })
    }
    
})


router.delete('/:id', (req, res) => {
    blogs.splice(req.params.id - 1, 1)
    res.status(200).send({ status: 200, blogs })
})


module.exports=router;