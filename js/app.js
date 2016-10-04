/*
  Please add all Javascript code to this file.
  Daniel S. Madrigal 
  sfjs3

*/


// $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(results){
//   console.log(results);
//   results.data.feed.forEach(function(result){
//     $("ul").append("<li>"+result.content.title+"</li>")
//   })
// });



// nytimes api key... a46134b0142b4036b672da006e5970e3



// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "a46134b0142b4036b672da006e5970e3"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
  console.log(result.response.docs[0].lead_paragraph);
  $(document).ready(function() {
    $('body').append(result.response.docs[0].snippet).addClass('h1').css("color","green");

  });



}).fail(function(err) {
  throw err;
});

console.log("hi!");
