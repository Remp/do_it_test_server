import { Schema } from 'mongoose'

const marker = new Schema({
  lat: Number,
  lng: Number
})

export const user = new Schema({
  email: String,
  password: String,
  token: { type: String, required: false },
  expires: { type: Date, required: false },
  markers: { type: [marker], required: false }
})
