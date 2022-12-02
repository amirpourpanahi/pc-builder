import axios from 'axios';

export const getAllProducts = async (path: string) => {
    return new Promise((resolve, reject) => {
      axios
          .get(`data.json`)
          .then(res => {
            resolve(res.data[path])
          })
          .catch(err => reject(err))
      })
  }
