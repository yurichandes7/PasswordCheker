// "use stric";
console.log("hhhhhhhheeeeeeeeeeey");
// let password = document.getElementsByClassName("password").value;
// const repeatpass = document.querySelector(".repeatpass");
const button = document.querySelector(".button");
button.addEventListener("click", function () {
  console.log(document.querySelector(".password").value);
  console.log(document.querySelector(".repeatpass").value);
  const pass = document.querySelector(".password").value;
  const repeatpass = document.querySelector(".repeatpass").value;

  if (pass === repeatpass) {
    console.log("correct");
    alert("Password and Repeated password are the same!");
  } else {
    console.log("not correct");
    alert("Password and Repeated password are NOT the same!");
  }
});
