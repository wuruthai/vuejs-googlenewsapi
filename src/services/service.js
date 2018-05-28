export default {
  fetchNews(url) {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=c26001f9857c45f585c71a831f506c99')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
  }
}
