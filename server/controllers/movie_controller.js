let movies = [
  {
    id : 0,
    title : "The Matrix",
    director : "Wachowskis",
    image : 'image.png'
  },
  {
    id : 1,
    title : "There Will Be Blood",
    director : "Paul Thomas Anderson",
    image : 'image.png'
  }
]

let id = 2

module.exports = {
  getMovies: (req, res) => {
    res.status(200).send(movies)
  },

  addMovie: (req, res) => {
    let {title, director, image} = req.body
    if(!title || !director || !image) {
      return res.status(400).send('The fields "title", "director", "image" are required for adding a new movie')
    }
    let newMovie = {id: (id++), title, director, image}
    movies = [...movies, newMovie]
    res.status(200).send(movies)
  },

  deleteMovie: (req, res) => {
    let {id} = req.params
    movies = movies.filter((el) => {
      return el.id !== +id
    })
    res.status(200).send(movies)
  },

  editMovie: (req, res) => {
    let {id} = req.params
    let {title, director, image} = req.body
    const index = movies.findIndex((e)=> {
      return e.id === +id
    })

    movies[index] = {
      id : +id || movies[index].id,
      title : title || movies[index].title,
      director : director || movies[index].director,
      image : image || movies[index].image
    }
    res.status(200).send(movies)
  }
}