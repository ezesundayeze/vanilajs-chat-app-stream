const axios = require("../../node_modules/axios/index.js")


const email = document.getElementById("email")
const password = document.getElementById("password")
const lastname = document.getElementById("lastname")
const firstname = document.getElementById("firstname")
const submit = document.getElementById("submit")

submit.addEventListener("submit", (e)=>{
    e.preventDefault()
    initStream(e)
})

const initStream = async (e) =>{

    e.preventDefault()

    await axios.post('https://react-api-stream.herokuapp.com/v1/auth/init', {
        headers: {
          'Content-Type': 'application/json'
        },
        name: {first:firstname.value, last:lastname.value},
        password: password.value,
        email: email.value
  
      }).then((response)=>{

        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("apiKey", response.data.apiKey);    
        window.location.href = "/public/index.html"

      }).catch((err)=>{
        // setLoading(false);
        // setErrorMessage("Your registration wasn't successful, please, try again.")
        console.log("error", err)
      })
    

  }
