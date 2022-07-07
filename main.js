// GET Request.
function getMovies() {
  url =
    "https://netu.tv/api/file/list?key=2c04ce0b5cc26617f956722f279b536c&file_code={LfrTefbctDFW}";
  fetch(url, {
    method: "GET",
    headers: { "Content-type": "application/json;charset=UTF-8" },
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
    });
}

getMovies();
