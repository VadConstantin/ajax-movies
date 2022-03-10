const apiUrl = "http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7"
const keyword = document.querySelector("#keyword")
const results = document.querySelector("#results")

const searchMovie = (keyword) => {
  const apiUrl = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`
  fetch(apiUrl)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach((movie) => {
        console.log(movie)
        results.insertAdjacentHTML("beforeend", `
        <li>
          <img src="${movie.Poster}">
          <p style="padding-top: 15px; font-size: 13px;">${movie.Title}</p>
        </li>
        `)
      })
    })
}

document.querySelector("#search-form").addEventListener("submit", (event) => {
  results.innerHTML =""
  event.preventDefault()
  searchMovie(keyword.value);
})

searchMovie("Harry Potter")
