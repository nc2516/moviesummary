const app = {

  initialize: function () {
    $('button').click(function (e) {
      app.getMovieName();
    });

  },
  
  getMovieName: function() {
  	let movieName = $('#search-input').val();
    app.getListOfMovies(movieName);
  },
  

  getListOfMovies: function(name) {
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + name + '&api-key=REGh7JKghsKjaicNaiY3Nlqql4BrQm2s')
      .then(response => response.json())
      .then(response => app.showMovieSummary(response))
      .catch(error => app.noMoviesFound());
  },

  showMovieSummary: function(response) {
  	console.log(response.results);  
    
    const title = response.results[0].display_title;
    const author = response.results[0].byline;
    const summary = response.results[0].summary_short;
  
    $('#output').html('Title: ' +title + '<br />' + 'Summary Author: ' + author + '<br /> '+ 		'Summary: ' + summary); 
    $('#output').addClass('.summary');
  },
  
  noMoviesFound: function() {
  	 $('#output').html('No movies found!'); 
  }
}

app.initialize();
