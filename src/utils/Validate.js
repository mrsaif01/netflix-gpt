const validateData = (name, email, password) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Regular expression for password validation
    // Minimum 8 characters, at least one letter and one number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let isEmailValid = emailRegex.test(email);
    let isPasswordValid = passwordRegex.test(password);

    // Example usage:
    // "test@example.com";
    // "Password123";

    if (name === '') return "Name can't be empty";
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";

    return null;
};

export {validateData }