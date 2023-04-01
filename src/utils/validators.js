const validatorEmail = (email) => {
    return email?.toString().includes('@') && email?.toString().includes('.');
}

const validatorPass = (senha) => {
    return senha?.toString().lenght > 6;
}

export {
    validatorPass,
    validatorEmail
}