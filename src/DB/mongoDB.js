import mongoose from 'mongoose'
import pc from 'picocolors'

mongoose.set('debug', true)
export default mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(pc.green('\n>>>Connected to MongoDB...'))
    console.log('\tDatabase connected and synced\n')
  })
  .catch((error) => {
    console.log(pc.red('\n>>> MongoDB Error: '), error)
    process.exit(1) // Termina el proceso si no puede conectar
  })
