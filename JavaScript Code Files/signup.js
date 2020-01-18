 function validatesignup()                                    
    { 
    var firstname = document.forms["signup"]["firstname"];  
    var lastname = document.forms["signup"]["lastname"];       
    var email = document.forms["signup"]["email"];    
    var phone = document.forms["signup"]["phone"];    
    var password = document.forms["signup"]["password"]; 
    var cpassword = document.forms["signup"]["cpassword"]; 
    var checkbox = document.forms["signup"]["checkbox"];   
   
   
    if (firstname.value == "")                                  
    { 
        window.alert("Please enter your Firstname."); 
        firstname.focus(); 
        return false; 
    } 
    if (lastname.value == "")                                  
    { 
        window.alert("Please enter your Lastname."); 
        lastname.focus(); 
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
   
    if (password.value!=cpassword.value)                        
    { 
        window.alert("Password does not match"); 
        password.focus(); 
        return false; 
    } 
    if (!checkbox.checked)                        
    { 
        window.alert("You must agree to the terms and conditions");checkbox.focus(); 
        return false; 
    } 
   
    return true; 
}