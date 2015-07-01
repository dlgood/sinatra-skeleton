$(document).ready(function() {

  $('#get-all').on('click', function() {
    $.ajax({
      url: "/contacts",
      dataType: 'json',
      method: "GET",
      success: function(users){
        var h3 = $("<h3>").text('All contacts').appendTo('body'); 
        $.each(users, function(index, user) {          
        var p = $("<p>").text(user.first_name + ' | ' + user.last_name).appendTo('body');
        });
      },
      failure: function(response) {                     
        alert("UH OH!");
      }
    });
  });


  $('#name-search-button').on('click', function() {
    var input = $('#name-search-box').val();
    $.ajax({
      url: "/contacts/search/"+input,
      dataType: 'json',
      method: 'GET',
      success: function(contact){
        console.log(contact);
        var p = $("<p>").text(contact[0].first_name + ' | ' + contact[0].last_name).appendTo('body');
        }
    });

  });

  $('#id-search-button').on('click', function() {
    var input = $('#id-search-box').val();
    $.ajax({
      url: "/contacts/find/"+input,
      dataType: 'json',
      method: 'GET',
      success: function(contact){
        console.log(contact);
        var p = $("<p>").text(contact[0].first_name + ' | ' + contact[0].last_name).appendTo('body');
        }
    });
  });

  $('#add-contact').on('click', function() {   
    console.log("button clicked");                 
    var contact = {
      first_name: $('#first-name').val(), 
      last_name: $('#last-name').val(),
      email: $('#email').val(),
      phone: $('#phone').val()
    }
    console.log(contact);
    $.post('/contact/add', contact, function(response) {                           
      if (response.result) {  
        var p = $("<p>").text(contact.first_name + " " + contact.last_name).appendTo('body');
      } 
      else {
        alert("Something borked");
      }
    }, 'json'); 

  });

  $('#delete-button').on('click', function() {
    var input = $('#delete-search-box').val();
    console.log("We're going to delete " + input);
    $.ajax({
      url: "/contacts/delete/"+input,
      dataType: 'json',
      method: 'POST',
      // data: {
      //   "_method": "delete"
      // },
      success: function(id) {
        console.log(id);
        var p = $("<p>").text(id + ' has been deleted.').appendTo('body');
        }
    });

  });


});
