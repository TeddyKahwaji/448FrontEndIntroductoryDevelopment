let arr = ["91YLuOr4bmL._UY606_.jpg","jwgibbo.jpg","1200px-McDonald's_Golden_Arches.svg.jpg", "6cf2bd7eecb487aa57b8e63dc449bfc4.jpg"
          , "0messy-desk.jpg"];
let next = 1;
imageCollector = function()
{
  if(next ==5)
  {
    next =0;
  }
  let img1 = document.getElementById("image1");

  img1.src = arr[next];
  next++;

}

imageBacker = function()
{
  
}
