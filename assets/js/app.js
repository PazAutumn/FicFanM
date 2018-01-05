var idPost = 0;


$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('.carousel').carousel();
  $('.modal').modal();
  $('ul.tabs').tabs();
  $('.tooltipped').tooltip({delay: 50});

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
  *Postear Estado
  */ 
  $('#post').click(function() {
    /*
    * Hora del post
    */  
    var d = new Date();
    var hour = d.toLocaleTimeString();
    var comment = $('#textarea1').val();
    var picture = $('#input-imgurl').val();
    $('#textarea1').val('');
    $('#input-imgurl').val('');
    var cont = $('#div-post');
    cont.append(
      '<div class="row comment">' +
      '<div id="newPost_' + idPost + '" class="col s2">' +
      '<img class="responsive-img circle profile-post" style="width: 50px;" src="assets/img/profile.jpg" alt="Profile Picture"></div>' + 
      '<div class="col s9">' +
      '<h5 class="text-post">Star Force</h5></div>' +
      '<div class="col s1">' + 
      '<i id="trash" class="fas fa-trash-alt delete-post"></i></div>' + 
      '<div class="col s12">' +
      '<hr><p class="post-update">' + 
      comment + 
      '</p><br>' +
      '<img class="responsive-img" src="' + (picture || "assets/img/white.png") + '" alt="..."></div>' +
      '<div class="row">' +
      '<div id="prueba" class="col s1 left-align">' +
      '<i id="heart" class="fas fa-heart"></i></div>' +
      '<div class="col s11"><p class="text right-align">' +
      hour +
      '</p></div></div></div>');
    $('#post').addClass('disabled');
    idPost++;

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
  $('#heart').click(function() {
    if(this.hasClass('red-heart')) {
      $('#heart').removeClass('red-heart');
    } else {
      $('#heart').addClass('disabled');
    }
  /*
  *$(this).toggleClass("red-heart");
  */
  });


  /*
  *Si es que no está vacío o no hay espacios en blanco, se habilita botón
  */ 
  $('#textarea2, #input-img-comment ').keyup(function() {
    var comment = $('#textarea2').val();
    var picture = $('#input-img-comment').val();
    if ($.trim(comment) != '' || $.trim(picture) != '') {
      $('#comment-post').removeClass('disabled');
    } else {
      $('#comment-post').addClass('disabled');
    }
  });

  $('#comment-post').click(function() {
  /*
  * Hora del comentario
  */  
  var d = new Date();
  var hour = d.toLocaleTimeString();
  var commentPost = $('#textarea2').val();
  var picComment = $('#input-img-comment').val();
  $('#textarea2').val('');
  $('#input-img-comment').val('');
  var cont = $('#new-comment').addClass('comment');
  cont.append(
    '<div class="row">' +
    '<div class="col s1">' +
    '<img class="circle profile-post comment-profile" style="width: 40px;" src="assets/img/profile.jpg" alt="Profile Picture"></div>' + 
    '<div class="col s10">' +
    '<h5 class="name-comment">Star Force</h5></div>' +
    '<div class="col s1">' + 
    '<i id="trash" class="fas fa-trash-alt delete-post"></i></div>' + 
    '<div class="col s12">' +
    '<hr><p class="comment-text">' + 
    commentPost + 
    '</p><br>' +
    '<img class="responsive-img" src="' + (picComment || "assets/img/white.png") + '" alt="..."></div>' +
    '<div class="row">' +
    '<div id="prueba" class="col s1 left-align">' +
    '<i id="heart" class="fas fa-heart"></i></div>' +
    '<div class="col s11"><p class="text right-align">' +
    hour +
    '</p></div></div></div><hr><br>');
  $('#comment-post').addClass('disabled');

 });

  /*
  *Si es que no está vacío o no hay espacios en blanco, se habilita botón
  */ 
  $('#textarea3, #input-img-comment2').keyup(function() {
    var comment = $('#textarea3').val();
    var picture = $('#input-img-comment2').val();
    if ($.trim(comment) != '' || $.trim(picture) != '') {
      $('#comment-post2').removeClass('disabled');
    } else {
      $('#comment-post2').addClass('disabled');
    }
  });

  $('#comment-post2').click(function() {
  /*
  * Hora del comentario
  */  
  var d = new Date();
  var hour = d.toLocaleTimeString();
  var commentPost = $('#textarea3').val();
  var picComment = $('#input-img-comment2').val();
  $('#textarea3').val('');
  $('#input-img-comment2').val('');
  var cont = $('#new-comment2').addClass('comment');
  cont.append(
    '<div class="row">' +
    '<div class="col s1">' +
    '<img class="circle profile-post comment-profile" style="width: 40px;" src="assets/img/profile.jpg" alt="Profile Picture"></div>' + 
    '<div class="col s10">' +
    '<h5 class="name-comment">Star Force</h5></div>' +
    '<div class="col s1">' + 
    '<i id="trash" class="fas fa-trash-alt delete-post"></i></div>' + 
    '<div class="col s12">' +
    '<hr><p class="comment-text">' + 
    commentPost + 
    '</p><br>' +
    '<img class="responsive-img" src="' + (picComment || "assets/img/white.png") + '" alt="..."></div>' +
    '<div class="row">' +
    '<div id="prueba" class="col s1 left-align">' +
    '<i id="heart" class="fas fa-heart"></i></div>' +
    '<div class="col s11"><p class="text right-align">' +
    hour +
    '</p></div></div></div><hr><br>');
  $('#comment-post2').addClass('disabled');

 });

  /*
  *Si es que no está vacío o no hay espacios en blanco, se habilita botón
  */ 
  $('#textarea4, #input-img-comment3').keyup(function() {
    var comment = $('#textarea4').val();
    var picture = $('#input-img-comment3').val();
    if ($.trim(comment) != '' || $.trim(picture) != '') {
      $('#comment-post3').removeClass('disabled');
    } else {
      $('#comment-post3').addClass('disabled');
    }
  });

  $('#comment-post3').click(function() {
  /*
  * Hora del comentario
  */  
  var d = new Date();
  var hour = d.toLocaleTimeString();
  var commentPost = $('#textarea4').val();
  var picComment = $('#input-img-comment3').val();
  $('#textarea4').val('');
  $('#input-img-comment3').val('');
  var cont = $('#new-comment3').addClass('comment');
  cont.append(
    '<div class="row">' +
    '<div class="col s1">' +
    '<img class="circle profile-post comment-profile" style="width: 40px;" src="assets/img/profile.jpg" alt="Profile Picture"></div>' + 
    '<div class="col s10">' +
    '<h5 class="name-comment">Star Force</h5></div>' +
    '<div class="col s1">' + 
    '<i id="trash" class="fas fa-trash-alt delete-post"></i></div>' + 
    '<div class="col s12">' +
    '<hr><p class="comment-text">' + 
    commentPost + 
    '</p><br>' +
    '<img class="responsive-img" src="' + (picComment || "assets/img/white.png") + '" alt="..."></div>' +
    '<div class="row">' +
    '<div id="prueba" class="col s1 left-align">' +
    '<i id="heart" class="fas fa-heart"></i></div>' +
    '<div class="col s11"><p class="text right-align">' +
    hour +
    '</p></div></div></div><hr><br>');
  $('#comment-post3').addClass('disabled');

 });

  /*
  *Eliminar amigo
  */ 
  $('#unfollow').click(function() { 
   $('#friend-post').remove();
   $('#pearl-ff').remove();
  });

  $('#unfollow2').click(function() { 
   $('#friend-post2').remove();
   $('#marco-ff').remove();
  });

  $('#unfollow3').click(function() { 
   $('#friend-post3').remove();
   $('#garnet-ff').remove();
  });


});
