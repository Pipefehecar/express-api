import express from 'express'
const router = express.Router()
import User from '../models/sequelize/user.js'
// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//Get a user by id
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findByPk(id)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//Create a new user
router.post('/', async (req, res) => {
  const { firstName, lastName, email, age } = req.body
  try {
    const user = await User.create({ firstName, lastName, email, age })
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//Update a user
router.put('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const [updated] = await User.update(req.body, {
      where: { id }
    })
    if (!updated) {
      return res.status(404).json({ message: 'User not found' })
    }
    const updatedUser = await User.findByPk(id)
    res.json(updatedUser)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

//Delete a user
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deleted = await User.destroy({ where: { id } })
    if (!deleted) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.status(204).json({ message: 'User deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
