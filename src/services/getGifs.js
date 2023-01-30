
const apiKey = "rWnDiD7b04VvHdapYevpjz4sR9FSxk8w"

export default function getGifs({keyword, limit} = {}) {
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`)
      .then(res => res.json())
      .then(response => {
        const {data} = response
        const gifs = data.map(image => {
            const { images, title, id } = image
            const url = images.downsized.url
            return { title, id, url }
        })
        return gifs
      })
}