 function validatereservation()                                    
    { 
    var name = document.forms["reservation"]["name"];        
    var email = document.forms["reservation"]["email"];    
    var phone = document.forms["reservation"]["phone"];   
    var checkbox = document.forms["reservation"]["checkbox"];   
   
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your Name."); 
        name.focus(); 
        return false; 
    } 
   
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 
   
    if (!checkbox.checked)                        
    { 
        window.alert("You must agree to the terms and conditions");checkbox.focus(); 
        return false; 
    } 
   
    return true; 
}