import mongoose from 'mongoose'
import * as shemas from './shemas'

export const User = mongoose.model('users', shemas.user)
