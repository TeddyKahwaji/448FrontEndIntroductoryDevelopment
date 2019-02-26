let arr = ["thumb.jpg","thum2.jpg","thum3.jpg", "thum4.jpg"
          , "thumb5.jpg"];
let next = 0;



imageCollector = function()
{
    next++;
  if(next ==5)
  {
    next =0;
  }
  let img1 = document.getElementById("image1");

  img1.src = arr[next];



}

backwards = function()
{
  next--;



  if(next ==-1)
  {
    next =4;

  }
  let img1 = document.getElementById("image1");
    img1.src = arr[next];



}
