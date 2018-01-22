// C o m m e n t s   i n   P o s t s
// 2nd Lab - Node.js course
// Rafa Gómez https://rafagomez.neocities.org

function mstPrms(prms) {
    for(x in prms) {
        console.log("- ", x, ": ", prms[x])
    }
}

function texto(fuente) {
    if (typeof fuente === "object") retorno = fuente.text 
    else retorno = fuente;
    console.log("Texto: ", retorno)
    return { text: retorno };
}

module.exports = {
  getComments(req, res) {
      res.status(200).send(req.store.posts[req.params.id].comments)
  }, 
  addComment(req, res) {
      if (!req.store.posts[req.params.id].comments) req.store.posts[req.params.id].comments = {}
      let id = req.store.posts[req.params.id].comments.length
      req.store.posts[req.params.id].comments.push(texto(req.body))
      res.status(201).send({id: id})
  },
  updateComment(req, res) {
console.log("Viejo: ",       req.store.posts[req.params.id].comments[req.params.xComentario] )
      req.store.posts[req.params.id].comments[req.params.xComentario] = texto(req.body)
console.log("Nuevo: ",       req.store.posts[req.params.id].comments[req.params.xComentario] )
      res.status(200).send(req.store.posts[req.params.id])    
  },
  removeComment(req, res) {
      req.store.posts[req.params.id].comments.splice(req.params.xCommentario, 1)
      res.status(204).send()    
  }  
}
