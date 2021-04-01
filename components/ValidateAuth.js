export default function validateAuth(user){
    let errors = {}

    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;

    if (!user.username.trim()) {
        errors.username = 'Username required';
      }else{
          errors.username='';
      }
    
      if (!user.email) {
        errors.email = 'Email required';
      } else if (!/\S+@\S+\.\S+/.test(user.email)) {
        errors.email = 'Email address is invalid';
      }else{
        errors.email = ''
      }

      if (!user.password) {
        errors.password = 'Password is required';
      } else if (user.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
      }else{
        errors.password = ''
      }
    
      if (!user.password2) {
        errors.password2 = 'Confirm your password';
      } else if (user.password2 !== user.password) {
        errors.password2 = 'Passwords do not match';
      }else{
        errors.password2 = ''
      }

      return errors;
}