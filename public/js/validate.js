
//creating a variable to hold the form object by ID
const myform = document.getElementById("myForm");

//Defining the formSubmitted function to add all the validation rules of the form fields
const formSubmitted = event => {
  //Added built-in method to prevent default actions by browser
  event.preventDefault();

  //Validating firstname and lastname 
  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");
  let ferror = document.getElementById("fnameErr");
  let lerror = document.getElementById("lnameErr");
  var letters = /^[A-Za-z]+$/;

  //Validating conditions for first name
  if (fname.value === "") {
    alert("error")
    ferror.innerHTML = "<span style='color: red;'>Enter correct name!</span>";
    fname.focus();
    return false;
  } else {
    ferror.innerHTML = "";
  }

  // //Validating conditions for last name
  // if (
  //   lname.value === "" ||
  //   !fname.value.match(letters) ||
  //   lname.value.length < 3 ||
  //   lname.value.length > 20 ||
  //   fname.value.includes("@")
  // ) {
  //   lerror.innerHTML = "<span style='color: red;'>Enter correct name!</span>";
  //   lname.focus();
  //   return false;
  // } else {
  //   lerror.innerHTML = "";
  // }

  // //Validating conditions for mobile number
  // // - input should be non empty
  // // - input should be a number with 10 characters
  // let mobile = document.getElementById("mobile");
  // let merror = document.getElementById("mobile-error");
  // if (mobile.value === "" || isNaN(mobile.value) || mobile.value.length != 10) {
  //   merror.innerHTML = "<span style='color: red;'>Enter Mobile Number!</span>";
  //   mobile.focus();
  //   return false;
  // } else {
  //   merror.innerHTML = "";
  // }

  // //Validating rules for email address
  // // - Uppercase (A-Z) and lowercase (a-z) letters
  // // - Digits (0-9)
  // // - Characters must follow the standard of email addressing
  // // - Character . but it should not be the first or last character and should not come one after the other
  // let email = document.getElementById("email");
  // let emailerror = document.getElementById("email-error");
  // var mailformat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  // if (!email.value === "" || email.value.match(mailformat)) {
  //   emailerror.innerHTML = "";
  // } else {
  //   emailerror.innerHTML =
  //     "<span style='color: red;'>Enter correct Email Address!</span>";
  //   email.focus();
  //   return false;
  // }

  // var nin = document.getElementById("nin");
  // var ninerror = document.getElementById("ninerror-msg");
  // var letterNum = /^[0-9a-zA-Z]+$/;
  // if (nin.value === "" || !nin.value.match(letterNum)) {
  //   ninerror.innerHTML = "<span style='color: red;'>Enter valid NIN!</span>";
  //   nin.focus();
  //   return false;
  // } else {
  //   ninerror.innerHTML = "";
  // }

  // //Validating rules for address
  // //- Address field must not be empty
  // //- User address must be containing alphanumeric characters only
  // let addr = document.getElementById("address");
  // let addrerror = document.getElementById("aderror-msg");

  // if (addr.value === "" || addr.value.length < 15) {
  //   addrerror.innerHTML =
  //     "<span style='color: red;'>Enter valid address!</span>";
  //   addr.focus();
  //   return false;
  // } else {
  //   addrerror.innerHTML = "";
  // }

  // //Validating rules for loan amount
  // //- Amount must not be empty
  // //- Amount must not be less than 200,000
  // //- Amount must not be more than 3,000,000
  // var amount = document.getElementById("lnamount");
  // let mnamount = 200000;
  // let mxamount = 3000000;
  // let amerror = document.getElementById("amounterror-msg");

  // if (amount.value === "" || amount.value < mnamount || amount.value > mxamount) {
  //   amerror.innerHTML =
  //     "<span style='color: red;'>Enter amount between 200000 to 3000000!</span>";
  //   amount.focus();
  //   return false;
  // } else {
  //   amerror.innerHTML = "";
  // }
  alert('Form Succesfully Submitted');
  window.location.reload()
  return true;
}; //end of validate function

//Adding the event listener to the form on the submit event on clicking the submit element to validate
myform.addEventListener("submit", formSubmitted);

