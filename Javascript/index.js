$("button").click(function() { 
        let choice = $("#locatebook").val();
        let bookinfo = "https://www.googleapis.com/books/v1/" + choice;
    fetch(bookinfo)
      .then(function(response) {
        return response.json();

      })
      .then(function(items) {
        $('body').append("<img src = " + items.imageLinks.thumbnail + ">")
        $('body').append(items.description)    
      })
});