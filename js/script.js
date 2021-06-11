const ativos = document.querySelectorAll(".planos > div > div");
function updateTextInput(val) {
  document.getElementById('textInput').value=val;
  if(val == '1'){ 
   document.getElementById('mensal').value='100';
   document.getElementById('anual').value="200";
   document.getElementById("valorMensal").href="valor100.html";
   document.getElementById("valorAnual").href="valor200.html";
  }
  else if(val == '2'){
    document.getElementById('mensal').value="200";
    document.getElementById('anual').value="300";
    document.getElementById("valorMensal").href="valor200.html";
    document.getElementById("valorAnual").href="valor300.html";
  } 
  else if(val == '3'){
    document.getElementById('mensal').value="300";
    document.getElementById('anual').value="400";
    document.getElementById("valorMensal").href="valor300.html";
    document.getElementById("valorAnual").href="valor400.html";
  } 
  else if(val == '4'){
    document.getElementById('mensal').value="400";
    document.getElementById('anual').value="500";
    document.getElementById("valorMensal").href="valor400.html";
    document.getElementById("valorAnual").href="valor500.html";
  } 
  else if(val == '5'){
    document.getElementById('mensal').value="500";
    document.getElementById('anual').value="600";
    document.getElementById("valorMensal").href="valor500.html";
    document.getElementById("valorAnual").href="valor600.html";
  } 
  else if(val == '6'){
    document.getElementById('mensal').value="600";
    document.getElementById('anual').value="700";
    document.getElementById("valorMensal").href="valor600.html";
    document.getElementById("valorAnual").href="valor700.html";
  } 
  else if(val == '7'){
    document.getElementById('mensal').value="700";
    document.getElementById('anual').value="800";
    document.getElementById("valorMensal").href="valor700.html";
    document.getElementById("valorAnual").href="valor800.html";
  } 
  else if(val == '8'){
    document.getElementById('mensal').value="800";
    document.getElementById('anual').value="900";
    document.getElementById("valorMensal").href="valor800.html";
    document.getElementById("valorAnual").href="valor900.html";
  } 
  else if(val == '9'){
    document.getElementById('mensal').value="900";
    document.getElementById('anual').value="1000";
    document.getElementById("valorMensal").href="valor900.html";
    document.getElementById("valorAnual").href="valor1000.html";
  } 
  else{
    document.getElementById('mensal').value="1000";
    document.getElementById('anual').value="1100";
    document.getElementById("valorMensal").href="valor1000.html";
    document.getElementById("valorAnual").href="valor1100.html";
  } 
}
function setSize() {
    var myWidth = 0, myHeight = 0;
    var objContentTab0 = document.getElementById('contentTab0');
    var objContentTab1 = document.getElementById('contentTab1');
    if (typeof (window.innerWidth) == 'number') {
        //Non-IE
        myWidth = document.documentElement.clientWidth;
        myHeight = window.innerHeight;
    }
    else if (document.documentElement && (document.documentElement.clientWidth ||
    document.documentElement.clientHeight)) {
        //IE 6+ in 'standards compliant mode'
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
    }
    else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        //IE 4 compatible
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
    }

}

function selectionTab(value) {

    var objTab0 = document.getElementById('tab0');
    var objTab1 = document.getElementById('tab1');

    var objContentTab0 = document.getElementById('contentTab0');
    var objContentTab1 = document.getElementById('contentTab1');

    objContentTab0.style.display = 'none';
    objContentTab1.style.display = 'none';

    if (value == "0") {
        objContentTab0.style.display = 'block';
    }
    else{
        objContentTab1.style.display = 'block';
    }
}

//A função é executada quando a página é carregada.
//Colocando a altura das tags divs.
//Selecionando a tab.
function pageLoad() {
    setSize();
    selectionTab('0');
}

window.onload = pageLoad;
window.onresize = setSize;

ativos.forEach(tabs => {
  ['click'].forEach(user => {
    tabs.addEventListener(user, handleClick);
  })
} )

function handleClick(event){
  var planos = event.target;
  console.log(planos);

    if(this.classList.contains('ativo')){
      this.classList.remove('ativo')
    }
    else{
      this.classList.add('ativo');
    }
  }


