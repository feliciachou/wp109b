// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
<img src="members/taeil.png" alt="MoonTaeIl"style="width:450px;height:450px;" id="img01"></img>
var img = document.getElementById("img01");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("MoonTaeIl");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}