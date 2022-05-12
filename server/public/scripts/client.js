$( document ).ready(onReady);

function onReady() {
  // Establish Click Listeners
  $('#addButton').on('click', addKoala);
  // load existing koalas on page load
  getKoalas();
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
      //getKoalas();
    }).catch(function(err){
      console.log(err);
      alert('error adding a koala');
    });
    // call saveKoala with the new obejct
    //saveKoala( koalaToSend ); 
};

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  // TODO: display koalas on the DOM
  
} // end getKoalas

// function saveKoala( newKoala ){
//   console.log( 'in saveKoala', newKoala );
//   // ajax call to server to get koalas
// }
