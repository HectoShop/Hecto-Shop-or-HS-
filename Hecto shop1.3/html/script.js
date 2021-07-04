var charachter = document.getElementById( "charachter");
var block =  document.getElementById( "block");
function jump  (){
    if (charachter.classList !="animate")
{    charachter.classList.add ("animate");}
    setTimeout(function(){ 
        charachter.classList.remove("animate");
    },500); 
}
var checkDead = setInterval(function (){
    var charachterTop= 
    parseInt (window.getComputedStyle(charachter).
    getPropertyValue ("top"));
    var blockLeft= 
    parseInt (window.getComputedStyle(block).
    getPropertyValue ("Left"));
    if(blockLeft<20 && blockLeft>0 %
        charachterTop>=130) {
              block.style.animation= " none;"
              block.style.display= " none;"
            alert("you lose")
        }
},10);
