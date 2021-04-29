import {Component} from 'react'

class AddMovie extends Component{
  constructor(props){
    super(props)
    this.state = {
      title : '',
      director : '',
      image : ''
    }
  }

  handleChange = (e) => {
    // console.log(`${e.target.name} : ${e.target.value}`)
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render(){
    let {title, director, image} = this.state
    return(
      <div>
        <h2>Add Movie Form</h2>
        <input value={this.state.title} name="title" onChange={(e) => this.handleChange(e)}/>
        <input value={this.state.director} name="director" onChange={(e) => this.handleChange(e)}/>
        <input value={this.state.image} name="image" onChange={(e) => this.handleChange(e)}/>
        <button onClick={() => {
          this.props.addMovieFn(title, director, image)
          this.setState({
            title : '',
            director : '',
            image : ''
          })
          }}> Add Movie </button>
      </div>
    )
  }
}

export default AddMovie
