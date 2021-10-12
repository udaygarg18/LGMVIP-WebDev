function validateForm(){
    var returnval = true;
  

   
    var name = document.forms['myForm']["name"].value;
   

    if (name.length == 0){
        seterror("name", "*name length cannot be zero");
        returnval = false;
    }

    var email = document.forms['myForm']["email"].value;
    if (email.length>15){
        seterror("email", "*length of email is long");
        returnval = false;
    }

    var phone = document.forms['myForm']["mobile"].value;
    if (phone.length != 10){
        seterror("phone", "*mobile number should be of 10 digits");
        returnval = false;
    }
    
   

  
    return returnval;
}