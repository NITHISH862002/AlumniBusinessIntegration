import React, { useState } from "react";

const Login: React.FC = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  // function validatePassword(password: string): boolean {
  //   const minLength = 8;
  //   const uppercaseRegex = /[A-Z]/;
  //   const lowercaseRegex = /[a-z]/;
  //   const digitRegex = /\d/;
  //   const specialCharsRegex = /[!@#$%^&*]/;

  //   // Check length
  //   if (password.length < minLength) {
  //     return false;
  //   }

  //   // Check for uppercase letter
  //   if (!uppercaseRegex.test(password)) {
  //     return false;
  //   }

  //   // Check for lowercase letter
  //   if (!lowercaseRegex.test(password)) {
  //     return false;
  //   }

  //   // Check for digit
  //   if (!digitRegex.test(password)) {
  //     return false;
  //   }

  //   // Check for special characters
  //   if (!specialCharsRegex.test(password)) {
  //     return false;
  //   }

  //   // All checks passed
  //   return true;
  // }
  let formIsValid = false;

  function formHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(emailId.includes('@') && password.length>8)
    {
      formIsValid=true;
    }
    console.log(emailId);
    console.log(password);
  }

  return (
    <div>
      <section>
        <h2>WELCOME TO ALUMINI</h2>
        <p>A Place to expand your Business Network</p>
      </section>
      <form onSubmit={formHandler}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={emailId}
            onChange={(e) => {
              setEmailId(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="pwassword">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <input type="checkbox" id="checkbox" value="Remember Me" />
          <label htmlFor="checkbox">Remember Me</label>
          <a>Forgot Password</a>
        </div>
        <button type="submit" disabled={!formIsValid}>Sign in</button>
        <p>Don't have an account ?</p> <a>Register</a>
      </form>
    </div>
  );
};
export default Login;


// import React from 'react'
// import { useState } from 'react'

// function App() {
//   const [email, setEmail] = useState('') // useState to store Email address of the user
//   const [password, setPassword] = useState('') // useState to store Password

//   // Function which will validate the input data whenever submit button is clicked.

//   function validateForm() {
//     // Check if the First Name is an Empty string or not.

    

//     // Check if the Email is an Empty string or not.

//     if (email.length == 0) {
//       alert('Invalid Form, Email Address can not be empty')
//       return
//     }

//     // check if the password follows constraints or not.

//     // if password length is less than 8 characters, alert invalid form.

//     if (password.length < 8) {
//       alert(
//         'Invalid Form, Password must contain greater than or equal to 8 characters.',
//       )
//       return
//     }

//     // variable to count upper case characters in the password.
//     let countUpperCase = 0
//     // variable to count lowercase characters in the password.
//     let countLowerCase = 0
//     // variable to count digit characters in the password.
//     let countDigit = 0
//     // variable to count special characters in the password.
//     let countSpecialCharacters = 0

//     for (let i = 0; i < password.length; i++) {
//       const specialChars = [
//         '!',
//         '@',
//         '#',
//         '$',
//         '%',
//         '^',
//         '&',
//         '*',
//         '(',
//         ')',
//         '_',
//         '-',
//         '+',
//         '=',
//         '[',
//         '{',
//         ']',
//         '}',
//         ':',
//         ';',
//         '<',
//         '>',
//       ]

//       if (specialChars.includes(password[i])) {
//         // this means that the character is special, so increment countSpecialCharacters
//         countSpecialCharacters++
//       } else if (!isNaN(password[i] * 1)) {
//         // this means that the character is a digit, so increment countDigit
//         countDigit++
//       } else {
//         if (password[i] == password[i].toUpperCase()) {
//           // this means that the character is an upper case character, so increment countUpperCase
//           countUpperCase++
//         }
//         if (password[i] == password[i].toLowerCase()) {
//           // this means that the character is lowercase, so increment countUpperCase
//           countLowerCase++
//         }
//       }
//     }

//     if (countLowerCase == 0) {
//       // invalid form, 0 lowercase characters
//       alert('Invalid Form, 0 lower case characters in password')
//       return
//     }

//     if (countUpperCase == 0) {
//       // invalid form, 0 upper case characters
//       alert('Invalid Form, 0 upper case characters in password')
//       return
//     }

//     if (countDigit == 0) {
//       // invalid form, 0 digit characters
//       alert('Invalid Form, 0 digit characters in password')
//       return
//     }

//     if (countSpecialCharacters == 0) {
//       // invalid form, 0 special characters characters
//       alert('Invalid Form, 0 special characters in password')
//       return
//     }

//     // if all the conditions are valid, this means that the form is valid

//     alert('Form is valid')
//   }

//   return (
//     <div className="main">
//       <form>
        
//         {/* Input Field to insert Email Address of the user */}
//         <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//         {/* Input Field to insert Password */}
//         <input
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           type="submit"
//           onClick={() => {
//             validateForm()
//           }}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   )
// }

// export default App
