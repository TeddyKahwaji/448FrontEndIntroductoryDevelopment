


passwordChecker = function()
{
  let pass1 = document.getElementById("pass1").value;
  let pass2 = document.getElementById("pass2").value;


  if (pass1 != pass2)
  {
    alert("Passwords do not match!");

  }
  else if (pass1.length != 8)
  {
    alert("Password is not a length of 8 characters!");
  }
}
