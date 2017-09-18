//jQuery starts here
$(function() {
  var playListLink = "https://lit-fortress-6467.herokuapp.com/object";

  // function for playlist.html starts here
  function playListPage(albumLinks) {
    var myRequest = [];
    var textArea = document.getElementById('txtArea');

    for (let i = 0; i < 5; i++) {

      $.get(albumLinks, function(albums) {

        var imgDiv = document.createElement('div');
        imgDiv.id = "albumDiv";
        var img = document.createElement('img');
        img.id = albums.results[i].id;
        img.class = "imgPlayList"; // Adding class to each image
        var imgDivContainer = document.getElementById('albumRow');
        img.src = "images/" + albums.results[i].cover_art;
        imgDiv.appendChild(img);
        imgDivContainer.appendChild(imgDiv);

        // click eventListener starts here
        var para = document.createElement('p');

        img.addEventListener('click', function() {
          para.textContent = albums.results[i].artist + ": " +
            albums.results[i].title;
          myRequest.push(para.textContent);

        }); // click eventListener ends here
        textArea.appendChild(para);
      }); // api call ends here

    } // for loop ends here

    // Reset button starts here
    var resetBtn = document.getElementById('clrTrk');
    var insidePara = document.getElementsByTagName('p');
    resetBtn.addEventListener("click", function() {
      $(insidePara).empty();

    }); // Reset button ends here

    // Submit bin (post request starts here)
    var submitBin = document.getElementById('submitTrk');
    submitTrk.addEventListener('click', function(){
      $.post('https://lit-fortress-6467.herokuapp.com/post',
        myRequest,
        function(data,status){
          console.log('Data: ' + data + '\nStatus: ' + status);
        });
    });

  } // playListPage function ends here

  playListPage(playListLink); // running function here

}); //jQuery ends here
