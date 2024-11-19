var X=0


function hideshow1(){
    X=1;
    show()
}

function hideshow2(){
    X=2
    show()
}

function hideshow3(){
    X=3
    show()
}



function show(){
    console.log(X)
    if(X==1){
        document.getElementById("div1").style.display="block"
        document.getElementById("div2").style.display="none"
        document.getElementById("div3").style.display="none"
    }
    if(X==2){
        document.getElementById("div2").style.display="block"
         document.getElementById("div1").style.display="none"
        document.getElementById("div3").style.display="none"
    }
    if(X==3){
        document.getElementById("div3").style.display="block"
         document.getElementById("div2").style.display="none"
        document.getElementById("div1").style.display="none"
    }
    

}

