

backgroundRGB= function()
{

  let borderRed = document.getElementById("redBo").value;
  let borderGreen = document.getElementById("greenBo").value;
  let borderBlue = document.getElementById("blueBo").value;
  let borderWidth = document.getElementById("widthBo").value;

  let backGroundRed=document.getElementById("red").value;
  let backGroundGreen=document.getElementById("green").value;
  let backGroundBlue=document.getElementById("blue").value;

 document.body.style.backgroundColor = 'rgb(' + [backGroundRed,backGroundGreen,backGroundBlue].join(',') + ')';
document.getElementById("m_div").style.borderColor = 'rgb(' + [borderRed,borderGreen,borderBlue].join(',') + ')';
document.getElementById("m_div").style.borderWidth = borderWidth;
}
