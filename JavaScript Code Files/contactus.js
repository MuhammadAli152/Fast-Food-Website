function contactus()                                    
    { 
    var name = document.forms["form1"]["name"];       
    var email = document.forms["form1"]["email"];    
    var message = document.forms["form1"]["message"];    
   
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
   if (message.value == "")                                  
    { 
        window.alert("Please enter something in comment box"); 
        message.focus(); 
        return false; 
    } 
   
   
    return true; 
}