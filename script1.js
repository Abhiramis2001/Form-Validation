function form_validation(){

    let completeName = document.getElementById('#fullname').value
    console.log(completeName)

    let completeNameLength = completeName.length
    console.log(completeNameLength)

    let mobileNumber = document.getElementById('#phone').value
    console.log(mobileNumber)

    let mobileNumberLength = mobileNumber.length
    console.log(mobileNumberLength)

    let emailId = document.getElementById('#email').value
    console.log(emailId)

    let emailIdLength = emailId.length
    console.log(emailIdLength)

    let emailStructure = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    console.log(emailStructure)

    let securityPassword = document.getElementById('#password').value
    console.log(securityPassword)

    let securityPasswordLength = securityPassword.length
    console.log(securityPasswordLength)

    let confirmPassword = document.getElementById('#password_2').value
    console.log(confirmPassword)

    let confirmPasswordLength = confirmPassword.length
    console.log(confirmPasswordLength)




    if(completeNameLength < 3 ){
        document.getElementById('.invalid_text').innerText = 'Name is required with min. 3 characters  !'

    }else if( mobileNumberLength !== 10){
        document.getElementById('.invalid_text').innerText = 'Phone number should be of 10 digits !'

    }else if(!emailId.match(emailStructure)){
        document.getElementById('.invalid_text').innerText = 'Please enter a valid e-mail address !'

    }else if(securityPasswordLength <8){
        document.getElementById('.invalid_text').innerText = 'Password should contain atleast 8 characters !'

    // }else if(confirmPasswordLength !==8){
    //     document.querySelector('.invalid_text').innerText = 'Confirm password should contain atleast 8 charac.'
    }
    else if(!securityPassword.match(confirmPassword)){
        document.getElementById('.invalid_text').innerText = 'These passwords dont match. Try again !'
    }
    else{
        document.getElementById('.invalid_text').innerText = ''

    }

}