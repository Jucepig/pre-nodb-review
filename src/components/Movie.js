import {Component} from 'react'

class Movie extends Component { 
  constructor() {
    super()

    this.state = {
      editMode : false,
      title : '',
      director: ''
    }
  }

  handleChange = (e) => {
    // console.log(`${e.target.name} : ${e.target.value}`)
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  toggleEdit = () => {
    this.setState({
      editMode : !this.state.editMode
    })
  }

  handleSave = () => {
    const {title, director} = this.state
    const {movie, editMovieFn} = this.props
    editMovieFn(movie.id, title, director)
    this.toggleEdit()
    this.setState({
      title : '',
      director : '',
    })
  }

  render() {
    const {movie, deleteMovieFn} = this.props
    return this.state.editMode ? (
      <div>
        <input value={this.state.title} name="title" onChange={(e) => this.handleChange(e)}/>
        <input value={this.state.director} name="director" onChange={(e) => this.handleChange(e)}/>
        <button onClick={this.handleSave}> SAVE </button>
      </div>
    ):(
      <div key = {movie.id}>
        <p>{movie.title}</p>
        <button onClick={() => deleteMovieFn(movie.id)}> DELETE </button>
        <button onClick={() => this.toggleEdit()}>
          EDIT
        </button>
      </div>
    )
  }
}

export default Movie