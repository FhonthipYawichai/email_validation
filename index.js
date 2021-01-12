function ValidateEmail(inputText){
    
    var mailformat = /^[a-zA-Z0-9._]+@[a-z]+(?:\.[a-z]+)*$/; 
    if(inputText.value.match(mailformat)){
        alert("Valid Email Address  :) ");
        document.form1.text1.focus();
        return true;
    }
        else {
            alert("Invalid Email ! Please enter yout Email agian  :( ");
            document.form1.text1.focus();
            return false;
        }


}