function getChampions(number){
    document.getElementById("table0").style.display="none";
	document.getElementById("table1").style.display="none";
    document.getElementById("table2").style.display="none";
    document.getElementById("table3").style.display="none";
    document.getElementById("table4").style.display="none";
    document.getElementById("table5").style.display="none";
    document.getElementById("table6").style.display="none";
    document.getElementById("table7").style.display="none";
    document.getElementById("table"+number).style.display="inline";

    document.getElementById("header0").style.display="none";
    document.getElementById("header1").style.display="none";
    document.getElementById("header2").style.display="none";
    document.getElementById("header3").style.display="none";
    document.getElementById("header4").style.display="none";
    document.getElementById("header5").style.display="none";
    document.getElementById("header6").style.display="none";
    document.getElementById("header7").style.display="none";
    document.getElementById("header"+number).style.display="block";

    document.getElementById("btn0").style.backgroundColor="black";
        document.getElementById("btn0").style.color="white";

    document.getElementById("btn1").style.backgroundColor="black";
        document.getElementById("btn1").style.color="white";

    document.getElementById("btn2").style.backgroundColor="black";
        document.getElementById("btn2").style.color="white";

    document.getElementById("btn3").style.backgroundColor="black";
        document.getElementById("btn3").style.color="white";

    document.getElementById("btn4").style.backgroundColor="black";
        document.getElementById("btn4").style.color="white";

    document.getElementById("btn5").style.backgroundColor="black";
        document.getElementById("btn5").style.color="white";

    document.getElementById("btn6").style.backgroundColor="black";
        document.getElementById("btn6").style.color="white";

    document.getElementById("btn7").style.backgroundColor="black";
        document.getElementById("btn7").style.color="white";

    document.getElementById("btn"+number).style.backgroundColor="white";
    document.getElementById("btn"+number).style.color="black";
}
const moreno = document.getElementById("moreno");
const sterling = document.getElementById("sterling");
const volkanovski = document.getElementById("volkanovski");
const oliveira = document.getElementById("oliveira");
const usman = document.getElementById("usman");
const adesanya = document.getElementById("adesanya");
const teixeira = document.getElementById("teixeira");
const ngannou = document.getElementById("ngannou");

moreno.addEventListener('mouseover', function(){
    moreno.src = "../images/morenoFight.jpg";
});
moreno.addEventListener('mouseout', function(){
    moreno.src = "../images/moreno.jpg";
});

sterling.addEventListener('mouseover', function(){
    sterling.src = "../images/sterlingFight.jpg";
});
sterling.addEventListener('mouseout', function(){
    sterling.src = "../images/sterling.jpg";
});

volkanovski.addEventListener('mouseover', function(){
    volkanovski.src = "../images/volkanovskiFight.jpg";
});
volkanovski.addEventListener('mouseout', function(){
    volkanovski.src = "../images/volkanovski.jpg";
});

oliveira.addEventListener('mouseover', function(){
    oliveira.src = "../images/fight1.jpg";
});
oliveira.addEventListener('mouseout', function(){
    oliveira.src = "../images/oliveira.jpg";
});

usman.addEventListener('mouseover', function(){
    usman.src = "../images/fight2.jpg";
});
usman.addEventListener('mouseout', function(){
    usman.src = "../images/usman.jpg";
});

adesanya.addEventListener('mouseover', function(){
    adesanya.src = "../images/fight3.jpg";
});
adesanya.addEventListener('mouseout', function(){
    adesanya.src = "../images/adesanya.jpg";
});

teixeira.addEventListener('mouseover', function(){
    teixeira.src = "../images/teixeiraFight.jpg";
});
teixeira.addEventListener('mouseout', function(){
    teixeira.src = "../images/teixeira.jpg";
});

ngannou.addEventListener('mouseover', function(){
    ngannou.src = "../images/fight4.jpg";
});
ngannou.addEventListener('mouseout', function(){
    ngannou.src = "../images/ngannou.jpg";
});



function countChar(total) {
  var len = total.value.length;
  if (len >= 100) {
    total.value = total.value.substring(0, 100);
  } else {
    $('#charNum').text((100 - len) + " characters remaining");
  }
};
