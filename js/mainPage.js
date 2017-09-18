//jQuery starts here
$(function() {
  var playListLink = "https://lit-fortress-6467.herokuapp.com/object";

  // index.html page api call code goes here

  function indexPage(link) {
    for (let i = 0; i < 3; i++) {

      $.get(link, function(albumCover) {
        var randNo = Math.floor(Math.random() * 4); // Random no function
        var secondHalfDiv = document.getElementById('secondHalf');
        var indexAlbumCover = document.createElement('div');
        var img = document.createElement('img');
        img.src = "images/" + albumCover.results[randNo].cover_art;
        indexAlbumCover.appendChild(img);
        secondHalfDiv.appendChild(indexAlbumCover);

      }); // index.html page api call ends here
    } //for loop ends here
  } // indexPage function ends here
  // for loop ends here

  indexPage(playListLink); // running function here

}); //jQuery ends here
