
$(document).ready(function() {
    $("#hamburger").click(function(){
        $("#menu").slideToggle(100);
    })

    $("#toggle_wrapper").click(function(){
       $(".toggle__icon").toggleClass("close");
    })

});

if(document.getElementById("index")){
  //Soothing modal
// Get the modal
var modalSoothing = document.getElementById('modal_sooting');

// Get the button that opens the modal
var btnSoothing = document.getElementById("btn_soothing");

// Get the <span> element that closes the modal
var spanSoothing = document.getElementsByClassName("close_soothing")[0];

// When the user clicks on the button, open the modal 
btnSoothing.onclick = function() {
  modalSoothing.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanSoothing.onclick = function() {
  modalSoothing.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalSoothing) {
    modalSoothing.style.display = "none";
  }
} 

//Danceble Modal

var modal = document.getElementById('modal_danceble');
var btn = document.getElementById("btn_danceble");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Intense Modal

var modalIntense = document.getElementById('modal_intense');
var btnIntense = document.getElementById('btn_intense');
var spanIntense = document.getElementsByClassName('close_intense')[0];

btnIntense.onclick = function() {
  modalIntense.style.display = "block";
}

spanIntense.onclick  = function(){
  modalIntense.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalIntense) {
    modalIntense.style.display = "none";
  }
}

//Emotional Modal

var modalEmotional = document.getElementById('modal_emotional');
var btnEmotional = document.getElementById('btn_emotional');
var spanEmotional = document.getElementsByClassName('close_emotional')[0];

btnEmotional.onclick = function() {
  modalEmotional.style.display = "block";
}

spanEmotional.onclick  = function(){
  modalEmotional.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalEmotional) {
    modalEmotional.style.display = "none";
  }
}

}

if(document.getElementById("artists")){
// Artist gallery modal pop-up

//artistOne

var modalOne = document.getElementById('modalOne');
var btnOne = document.getElementById('btn-one');
var spanAlbumOne = document.getElementsByClassName('close_album_one')[0];

btnOne.onclick = function() {
  modalOne.style.display = "block";
}

spanAlbumOne.onclick  = function(){
  modalOne.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalOne) {
    modalOne.style.display = "none";
  }
}

//artisTwo

var modalTwo = document.getElementById('modalTwo');
var btnTwo = document.getElementById('btn-two');
var spanAlbumTwo = document.getElementsByClassName('close_album_two')[0];

btnTwo.onclick = function() {
  modalTwo.style.display = "block";
}

spanAlbumTwo.onclick  = function(){
  modalTwo.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalTwo) {
    modalTwo.style.display = "none";
  }
}

//artis Three

var modalThree = document.getElementById('modalThree');
var btnThree = document.getElementById('btn-three');
var spanAlbumThree = document.getElementsByClassName('close_album_three')[0];

btnThree.onclick = function() {
  modalThree.style.display = "block";
}

spanAlbumThree.onclick  = function(){
  modalThree.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalThree) {
    modalThree.style.display = "none";
  }
}

//artis Four

var modalFour = document.getElementById('modalFour');
var btnFour = document.getElementById('btn-four');
var spanAlbumFour = document.getElementsByClassName('close_album_four')[0];

btnFour.onclick = function() {
  modalFour.style.display = "block";
}

spanAlbumFour.onclick  = function(){
  modalFour.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalFour) {
    modalFour.style.display = "none";
  }
}

//artis Five

var modalFive = document.getElementById('modalFive');
var btnFive = document.getElementById('btn-five');
var spanAlbumFive = document.getElementsByClassName('close_album_five')[0];

btnFive.onclick = function() {
  modalFive.style.display = "block";
}

spanAlbumFive.onclick  = function(){
  modalFive.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalFive) {
    modalFive.style.display = "none";
  }
}

//artis Six

var modalSix = document.getElementById('modalSix');
var btnSix = document.getElementById('btn-six');
var spanAlbumSix = document.getElementsByClassName('close_album_six')[0];

btnSix.onclick = function() {
  modalSix.style.display = "block";
}

spanAlbumSix.onclick  = function(){
  modalSix.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalSix) {
    modalSix.style.display = "none";
  }
}

}

if(document.getElementById("stats")){
  // Triangle animation

  $(document).ready(function() {
      $("#switch_toggle").change(function() {
        if($(this).prop('checked')) {
          $("#red_shape").toggleClass("change");
          $("#green_shape").toggleClass("change");
          $("#submit_button_text #submit_text").text(' up');
        }else{
          $("#submit_button_text #submit_text").text(' in');
        }
      })

      $("#show_stats_toggle").change(function() {
        if($(this).prop('checked')) {
          $("#stats_section").hide();
        }else{
          $("#stats_section").show();
        }
      })
  });
  
  
  //Print username if inserted
  /*
  function signIn(){
    let username;
    let password;

    username = document.getElementById("username").value;
    password = document.getElementById("passwordField").value;

    if(username.length > 0){
      text = "Hello " + username;
    }
    document.getElementById("result").innerHTML = text;
  }
  */

}












