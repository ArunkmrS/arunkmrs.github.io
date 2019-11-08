(function() {
    // your page initialization code here
    // the DOM will be available here
    Email.send({
     Host : "smtp.gmail.com",
     Username : "devyrbusiness@gmail.com",
     Password : "Ruby@725896-",
     To : 'arunkmr12345@gmail.com',
     From : "devyrbusiness@gmail.com",
     Subject : "This is the subject",
     Body : "And this is the body"
 }).then(
   message => alert(message)
 );
 })();