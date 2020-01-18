 function validatelogin()                                    
    {       
    var email = document.forms["login1"]["email"];    
    var password = document.forms["login1"]["password"];     
   
   
   
   
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
   
     if (password.value == "")                                  
    { 
        window.alert("Please enter your password."); 
        password.focus(); 
        return false; 
    } 
    
    return true; 
}