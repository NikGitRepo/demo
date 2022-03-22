function valid()
{
   var f_name,l_name,u_num,u_gender;
   f_name = document.getElementById("fname").value;
   l_name = document.getElementById("lname").value;
   u_num = document.getElementById("number").value;
   document.getElementById("x1").innerHTML = "Hie, " + f_name + " " + l_name + " welcome to coding.";
   document.getElementById("x2").innerHTML = "your unique id is " + u_num + ".";
   var gen;
    if(document.getElementById("male").checked){
        gen = document.getElementById("male").value;
     }else if(document.getElementById("female").checked){
        gen = document.getElementById("female").value;
     }else if(document.getElementById("other").checked){
        gen = document.getElementById("other").value;
     }else {
        gen = "Not Selected";
     }
     document.getElementById("x3").innerHTML = "your Gender is  " + gen + ".";
}