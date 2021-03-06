$( document ).ready(onReady);

function onReady() {
  // Establish Click Listeners
  $('#addButton').on('click', addKoala);
  // load existing koalas on page load
  getKoalas();
  $('#viewKoalas').on('click', '.transferButton', transferKoala);
};

function addKoala() {
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      readyForTransfer: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val()
    };
    console.log('adding:', koalaToSend);
    $.ajax({
      method: 'POST',
      url: '/koalas',
      data: koalaToSend
    }).then(function(response){
      console.log('back from /koalas POST:', response);
      // display on the DOM
      getKoalas();
      // empty inputs
      $('#nameIn').val('');
      $('#ageIn').val('');
      $('#genderIn').val('');
      $('#readyForTransferIn').val('');
      $('#notesIn').val('');
    }).catch(function(err){
      console.log(err);
      alert('error adding a koala');
    });
    // call saveKoala with the new obejct
    //saveKoala( koalaToSend ); 
};

function getKoalas(){
  console.log( 'in getKoalas' );
  $.ajax({
    method: 'GET',
    url: '/koalas'
  }).then(function(response){
    console.log('back from /koalas GET:', response);
    let el = $('#viewKoalas');
    el.empty();
    for(let i=0; i<response.length; i++) {
      el.append(`<tr><td>${response[i].koala_name}</td><td>${response[i].age}</td><td>${response[i].gender}</td><td>${response[i].ready_for_transfer}</td><td>${response[i].notes}</td><td><button class="transferButton" data-id="${response[i].id}">Ready for Transfer</button></td></tr>`);
    }
  }).catch(function(err){
    console.log(err);
    alert('error getting koalas');
  })
  // ajax call to server to get koalas
  // TODO: display koalas on the DOM
} // end getKoalas

function transferKoala() {
  console.log('in transferKoala:', $(this).data('id'));
  $.ajax({
    method: 'PUT',
    url: '/koalas?id=' + $(this).data('id')
  }).then(function(response){
    console.log('back from PUT:', response);
    getKoalas();
  }).catch(function(err){
    console.log(err);
    alert('error transferring koala');
  })
}