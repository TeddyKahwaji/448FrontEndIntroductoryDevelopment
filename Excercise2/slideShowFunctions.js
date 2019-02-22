let arr = ["91YLuOr4bmL._UY606_.jpg","jwgibbo.jpg","1200px-McDonald's_Golden_Arches.svg.jpg", "6cf2bd7eecb487aa57b8e63dc449bfc4.jpg"
          , "0messy-desk.jpg"];
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
