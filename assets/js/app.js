$( document ).ready(function(){
  $(".button-collapse").sideNav();
  $('.carousel').carousel();
  $('.modal').modal();
  $('ul.tabs').tabs();

/*
  *Si es que no está vacío o no hay espacios en blanco, se habilita botón
  */ 
  $('#textarea1, #input-imgurl ').keyup(function() {
    var comment = $('#textarea1').val();
    var picture = $('#input-imgurl').val();
    if ($.trim(comment) != '' || $.trim(picture) != '') {
      $('#post').removeClass('disabled');
    } else {
      $('#post').addClass('disabled');
    }
  });

  /*
  *Postear
  */ 

  $('#post').click(function() {
    /*
    * Hora del post
    */  
    var d = new Date();
    var hour = d.toLocaleTimeString();
    var comment = $('#textarea1').val();
    $('#textarea1').val('');
    var cont = $('#div-post').addClass('comment');
    cont.append(
      '<div class="row">' +
      '<div class="col s2">' +
      '<img class="responsive-img circle profile-post" style="width: 50px;" src="assets/img/profile.jpg" alt="Profile Picture"></div>' + 
      '<div class="col s9">' +
      '<h5 class="text-post">Star Force</h5></div>' +
      '<div class="col s1">' + 
      '<i id="trash" class="fas fa-trash-alt delete-post"></i></div>' + 
      '<div class="col s12">' +
      '<hr>' + 
      comment + 
      '</p><br>' +
      '<div id="prueba" class="col s1 left-align">' +
      '<i id="heart" class="fas fa-heart"></i></div>' +
      '<div class="col s11"><p class="text right-align">' +
      hour +
      '</p></div></div></div>');
    $('#post').addClass('disabled');

    });

  /*
  *Eliminar Post
  */ 
  $('#trash').click(function() {
    $(this).parent().parent().parent().parent().parent().parent().parent().remove();
  });

  /*
  *Corazón
  */ 
  heart.click(function() {
    console.log('funciono');
    $(this).toggleClass("red-heart");
  });


});