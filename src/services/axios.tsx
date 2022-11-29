import axios from 'axios';

export const getAllProducts = async (path: string) => {
  return new Promise((resolve, reject) => {
    axios
        .get(`http://localhost:8000/${path}`)
        .then(res => {
            resolve(res)
        })
        .catch(err => reject(err))
    })
}
