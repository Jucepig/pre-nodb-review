import {Component} from 'react'
import axios from 'axios'
import Movie from './Movie'
import AddMovie from './AddMovie'

class MovieList extends Component{
  constructor(){
    super()
    this.state = {
      movieArray : []
    }
  }

  componentDidMount() {
    axios
      .get('/api/movies')
      .then((res) => {
        this.setState({
          movieArray : res.data
        })
      })
      .catch((err) => {console.log(err)})
  }

  deleteMovie = (id) => {
    axios
      .delete(`/api/movies/${id}`)
      .then((res) => {
        this.setState({
          movieArray : res.data
        })
      })
      .catch((err) => {console.log(err)})
  }

  addMovie = (title, director, image) => {
    axios
      .post('/api/movies', {title, director, image})
      .then((res) => {
        this.setState({
          movieArray : res.data
        })
      })
      .catch((err) => console.log(err))
  }

  editMovie = (id, title, director) => {
    axios
      .put(`/api/movies/${id}`, {title, director})
      .then((res) => {
        this.setState({
          movieArray : res.data
        })
      })
      .catch((err) => console.log(err))
  }


  render(){
    return(
      <div>
        <AddMovie addMovieFn={this.addMovie}/>
        {this.state.movieArray.map(movie => {
          return(
            <Movie 
              movie={movie} 
              key={movie.id} 
              deleteMovieFn={this.deleteMovie} 
              editMovieFn={this.editMovie}
            />
          )
        })}
      </div>
    )
  }
}

export default MovieList
