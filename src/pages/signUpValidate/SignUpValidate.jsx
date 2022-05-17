export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required!";
  }

  if (!values.email.trim()) {
    errors.email = "Email required!";
  } else if (!/\S+@\S+\.\S+/gi.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required!";
  } else if (values.password.length < 6) {
    errors.password = "Password requires 6 or more characters!";
  }
  if (!values.password2) {
    errors.password2 = "Password is requireed!";
  } else if (values.password !== values.password2) {
    errors.password2 = "Passwords do not match!";
  }
}

// return errors
