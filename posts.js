// P o s t s
// 2nd Lab - Node.js course
// Rafa Gómez https://rafagomez.neocities.org

module.exports = {
  getPosts(req, res) {
      res.status(200).send(req.store.posts)
  },
  addPost(req, res) {
      let id = req.store.posts.length
      req.store.posts.push(req.body)
      res.status(201).send({id: id})
  },
  updatePost(req, res) {
      req.store.posts[req.params.id] = req.body
      res.status(200).send(req.store.posts[req.params.id])
  },
  removePost(req, res) {
      req.store.posts.splice(req.params.id, 1)
      res.status(204).send()
  }
}

/*
For example, an URL query string value http://webapplog.com/search?term=node.js&page=1 can be accessed with req.query.term and req.query.page in a request handler such as app.get() or any other:

app.get('/search', (req, res) => {
  db.find(
    {term: req.query.term}, 
    {page: req.query.page, limit: 10}, (error, results)=> {
    // error handling
    res.send(results)
  })
})
By default, Express.js doesn't allow developers to route by query string arguments, such as the following:

GET: www.webapplog.com/?id=10233
GET: www.webapplog.com/about/?author=10239
GET: www.webapplog.com/books/?id=10&ref=201
However, it's trivial to write your own middleware. It might look like this:

app.use((req, res, next) => {
  if (req.query.id) {
    // process the id, then call next() when done
  else if (req.query.author) {
    // same approach as with id
  else if (req.query.id && req.query.ref) {
    // process when id and ref present
  } else {
    next()
  }
})

app.get('/about', (req, res, next) => {
  // this code is executed after the query string middleware
})
In this middleware, if/else is used to execute different code based on the value from query string req.query.
*/