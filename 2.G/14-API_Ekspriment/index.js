let api_key ='q16hBWwIjwkjUVBbX9ckqqf65S7e9Tfc'

fetch('https://api.giphy.com/v1/gifs/trending?api_key=' + api_key + '&limit=20&rating=g')
.then( Response => Response.json() )
.then( json => {
   json.data.map(image => insertImage (image.images.fixed_width.url) )
})


const insertImage = (url) => {
    let img = document.createElement('img')
    img.src = url
    document.querySelector('body').append(img)
}