let bookinfo = "https://www.googleapis.com/books/v1/";

    fetch(bookinfo).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data)
    });