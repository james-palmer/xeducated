
function saveToFirebase() 
{
    const data = document.getElementById('emailForm').elements[0].value;
 

  if(ValidateEmail(data))
  {
    database.ref('emails').push({ email: data}).then(function(snapshot) {
      pass(); // some success method
      }, function(error) 
         {
            console.log('error' + error);
            fail(); // some error method
          });
     document.getElementById('frm1').reset();
  }

}

function ValidateEmail(mail) 
{
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail))
        {
          pass();
          return (true);
        }
    else{
          fail();
          return (false);
          }
} 


function fail()
{

  $('#fail').finish().show().delay(1000).fadeOut(6000);

}
function pass()
{
 
$('#succ').finish().show().delay(1000).fadeOut(6000);

} 
