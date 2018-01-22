// P o s t s   S e r v e r
// 2nd Lab - Node.js course
// Rafa Gómez https://rafagomez.neocities.org

const express = require('express') 
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')

const posts = require("./posts.js")
const comments = require("./comments/comments.js")

var store = {
  posts: [
    {name: 'Top 10 ES6 Features every Web Developer must know',
    url: 'https://webapplog.com/es6',
    text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
    comments: [
        {text: 'Cruel…..var { house, mouse} = No type optimization at all'},
        {text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'},
        {text: '(p1,p2)=>{ … } ,i understand this ,thank you !'}      
    ]
    }
  ]
}
let xPost = 0
let xComment = 0

let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

app.use((req,resp,siguiente) => {
    req.store = store
    
    console.log("Prms: ", req.params)
    
    siguiente()
})

// Tratamiento de P o s t s

app.get('/posts', (req, res) => {
    posts.getPosts(req, res)
})

app.post('/posts', (req, res) => {
    posts.addPost(req,res)
})

app.put('/posts/:id', (req, res) => {
    posts.updatePost(req, res)
})

app.delete('/posts/:id', (req, res) => {
    posts.removePost(req, res)
})

// Tratamiento de C o m m e n t s

app.get('/posts/:id/comments', (req, res) => {
    comments.getComments(req, res)
})

app.post('/posts/:id/comments', (req, res) => {
    comments.addComment(req,res)
})

app.put('/posts/:id/comments/:xCommentario', (req, res) => {
    comments.updateComment(req, res)
})

app.delete('/posts/:id/comments/:xCommentario', (req, res) => {
    comments.removeComment(req, res)
})

app.listen(3000)