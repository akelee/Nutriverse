export default function validateInfo(values) {
    let errors = {}
    let errors_bool = true

    console.log("Validate info ran");

    if(!values.username.trim()) {
        errors.username = "Username required!"
    }

    if(!values.email()) {
        errors.email = "Email required!"
    } else if (!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+i/.test(values.email)) {
        errors.email = 'Email address is invalid'
    }
    if(!values.password) {
        errors.password = "Password is required!"
    } else if (values.password.length < 6) {
        document.querySelector(".password-invalid").innerHTML = "Password requires 6 or more characters!"
        errors_bool = false
    } 
    if(!values.password2) {
        errors.password2 = "Password is required!"
    } else if (values.password !== values.password2) {
        errors.password2 = "Passwords do not match!"
    }
    return errors_bool
}

// return errors
    
