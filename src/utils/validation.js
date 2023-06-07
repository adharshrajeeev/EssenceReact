

export const validateEmail = (email)=>{
    return /\S+@\S+\.\S+/.test(email);
}

export const isValidatePhoneNumber = (phoneNumber) =>{
    return /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{6}$/.test(phoneNumber);
}

export const isValidatePassword = (password) =>{
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}