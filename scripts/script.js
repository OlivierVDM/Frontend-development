// JavaScript Document

//Bron: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible_animate

//Bron: https://www.youtube.com/watch?v=pjm1jKPSGck&ab_channel=KodeBase

//bron: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sticky_header


var coll = document.getElementsByClassName("collapsible");
var i;

var afb = document.querySelector('#afbeelding-iphone');
var btn1 = document.querySelector('#wit');
var btn2 = document.querySelector('#zwart');
var btn3 = document.querySelector('#rood');






window.onload = function () {

    
    //Iphone kleur aanpassen    
    btn1.addEventListener('click', () => {
        afb.src = 'images/iphone-se-detail.jpg';
    })

    btn2.addEventListener('click', () => {
        afb.src = 'images/iphone-se-detail-zwart.jpg';
    })

    btn3.addEventListener('click', () => {
        afb.src = 'images/iphone-se-detail-rood.jpg';
    })
    
    
    


//prijs iphone
document.getElementById("a").onchange = function() {updatePrijs()};
document.getElementById("b").onchange = function() {updatePrijs()};
document.getElementById("c").onchange = function() {updatePrijs()};  
    
document.getElementById('applecareU').onchange = function() {updatePrijs()};   
document.getElementById('applecareA').onchange = function() {updatePrijs()};       
    
 
    
    
function updatePrijs() {
 var basisPrijs = 498;
 var prijsOptie = 0;
var prijsOptie2 = 0;    
    
    function checkGb() {
       if (document.getElementById('a').checked) {
        prijsOptie += 0;
        }

        if (document.getElementById('b').checked) {
        prijsOptie += 50;
        }
         

        if (document.getElementById('c').checked) {
        prijsOptie += 170;
        }
    }
        
        
    function checkAc() {
       if (document.getElementById('applecareU').checked) {
        prijsOptie2 += 0;
        }

        if (document.getElementById('applecareA').checked) {
        prijsOptie2 += 99;
        }
        
    }
        
        
        
 checkGb();
        
 checkAc();        
        
        
        
var totaalPrijs = basisPrijs + prijsOptie + prijsOptie2;
document.getElementById('prijs').innerHTML = "€ " + totaalPrijs;

}


    
}

console.log ('Geef prijs weer');


//footer script
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

