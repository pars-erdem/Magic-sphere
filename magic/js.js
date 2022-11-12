function reply() {
var list =[
 "You will be a billionaire!",
  "Watch for your health, more vitamins!",
"Love of your life is on the way!",
"Youl go to the Mars!",
"Nothing special...",
  "ex1",
  "ex2",
  "ex3"
];
var number = Math.floor(Math.random()*8)
           document.getElementById("reply").innerHTML = list[number];
}