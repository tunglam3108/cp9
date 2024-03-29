// Import các hàm tới từ firebase để lập trình tính năng xác thực người dùng
import {app, auth} from "./firebase.js"
import {
    createUserWithEmailAndPassword,
    // getAuth,
    sendEmailVerification,
  } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
  

  
  const registerForm = document.getElementById("register-form");
  
  // Bắt sự kiện khi người dùng submit form
  registerForm.addEventListener("submit", (event) => {
    // Ngăn sự kiện reload mặc định của trình duyệt.
    event.preventDefault();
  
    const dataSignUp = {
      firstName: registerForm.firstName.value.trim(),
      lastName: registerForm.lastName.value.trim(),
      email: registerForm.email.value.trim(),
      password: registerForm.password.value,
      confirmPassword: registerForm.confirmPassword.value,
    };
  
    console.log(dataSignUp);

    let dataSignUpClean = controller.register(dataSignUp);
    ///xay dung phuong thuc xac thuc ng dung voi du kieu dc nhan
    createUserWithEmailAndPassword(auth, dataSignUpClean.email, dataSignUpClean.password )
    .then((userCredential)=>{
        ///gui  email xac thuc ng dung

        sendEmailVerification(userCredential.user)
        .then(()=>{
            console.log('Email verification sent!');
        })
        .catch((error)=>{
            console.log('Error signing up with email and password', error);
        })
    })
  });