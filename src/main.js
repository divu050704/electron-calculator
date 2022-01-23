function write7(){
    document.getElementById("panel").value += 7;
  }
function clear1(){
    document.getElementById("panel").value = null;
  }
function writed(){
    document.getElementById("panel").value += "/";
}
function backspace(){
    var x = document.getElementById("panel").value;
    document.getElementById("panel").value=x.substring(0,x.length-1);
}
function writem(){
    document.getElementById("panel").value += "*";
}
function writes(){
    document.getElementById("panel").value+="-";
}
function write8(){
    document.getElementById("panel").value += 8;
}
function write9(){
    document.getElementById("panel").value += 9;
}
function writep(){
    document.getElementById("panel").value += "+";
}
function write4(){
    document.getElementById("panel").value += 4;
}
function write5(){
    document.getElementById("panel").value += 5;
}
function write6(){
    document.getElementById("panel").value += 6;
}
function write1(){
    document.getElementById("panel").value += 1;
}
function write2(){
    document.getElementById("panel").value += 2;
}
function write3(){
    document.getElementById("panel").value += 3;
}
function write0(){
    document.getElementById("panel").value += 0;
}
function write00(){
    document.getElementById("panel").value += "00";
}
function writepoint(){
    document.getElementById("panel").value += ".";
}
function sub(){
    var x = (document.getElementById("panel").value);
    var F = (new Function ("document.getElementById('panel').value = "+x)());
    

}





