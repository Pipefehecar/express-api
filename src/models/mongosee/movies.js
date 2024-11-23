import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    title: {type: String, required: true},
    director: {type: String, required: true},
    year: {type: Number, required: true},
    coverUrl: {type: String, required: false},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

export default mongoose.model('Movie', movieSchema);
