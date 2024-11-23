import express from 'express'
import Movie from '../models/mongosee/movies.js'
import { Movie as MovieSchema } from '../schemas/movie.js'
const router = express.Router()

//Get all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find()
    res.json(movies)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//Get a movie by id
router.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)
    res.json(movie)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//Create a movie
router.post('/', async (req, res) => {
  try {
    const movie = MovieSchema.safeParse(req.body)
    if (!movie.success) throw new Error(movie.error.message)
    const moviedb = await Movie.create(movie.data)
    res.status(201).json(moviedb)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//Update a movie
router.put('/:id', async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(movie)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//Delete a movie
router.delete('/:id', async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id)
    res.status(204).send()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

export default router
