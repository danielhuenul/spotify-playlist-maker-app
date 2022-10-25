import axios from 'axios'

const clientAdapter = axios.create({
  baseURL: "http://localhost:3200"
})

export default clientAdapter