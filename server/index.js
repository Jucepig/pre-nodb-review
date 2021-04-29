const express = require('express')

//Import Ctrlrs
const movieCtrl = require('./controllers/movie_controller')


const app = express()
const PORT = 3047

app.use(express.json())

//Endpoints
app.get('/api/movies', movieCtrl.getMovies)
app.post('/api/movies', movieCtrl.addMovie)
app.put('/api/movies/:id', movieCtrl.editMovie)
app.delete('/api/movies/:id', movieCtrl.deleteMovie)

//Listener
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}, you better go catch it...`))