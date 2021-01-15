//loading
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};
//fetch
const movieApiUrl = "https://antique-innate-coreopsis.glitch.me/movies"
fetch(movieApiUrl).then(function (response) {
    response.json().then(function (movies) {
        console.log(movies)
    })
})

const movieObj = {
    "title": movies.title
};

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(movieObj),
}

$.ajax(movieApiUrl).done(function(data){
    data.forEach(function (movie){
       let movieHtml = "<tr>"
        movieHtml += `<td>Movie Title: <br>${ movie.title.toUpperCase()}</br></td>`
        movieHtml += `<td>Movie Rating: <br>${movie.rating}</br></td>`
        movieHtml += `<td>Movie Graphics:<br> <img src='${movie.poster}' style="width: 100px; height: 100px"></td></tr>`
        $("#movies").append(movieHtml)
    })
})


// const blogPost = {title: 'Ajax Requests', body: 'Are a fun way to use JS!'};
// const url = '/posts';
// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(blogPost),
// };
// fetch(url, options)
//     .then(/* post was created successfully */)
//     .catch(/* handle errors */);




