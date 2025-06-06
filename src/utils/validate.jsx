export const validate=(email,password)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;

    if (!emailRegex.test(email)) {
        return "Invalid email format";
    }

    if (!passwordRegex.test(password)) {
        return "Password must be at least 8 characters long and contain at least one letter and one number";
    }
}