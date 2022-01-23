function openFE() {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _ => {
      // you can use this method to get file and perform respective operations
              let files =   Array.from(input.files);
              console.log(files);
              
          };
    input.click();
    
}
function post(){
    var NewDiv = document.createElement('div');
    NewDiv.id = 'output';
    document.getElementsByTagName('body')[0].appendChild(NewDiv);
    //var nid = document.createElement('div');
    var title = document.getElementById('topic').value;
    var msg = document.getElementById('myTextArea').value;
    NewDiv.innerHTML = title + "<hr>" + msg;
    var h1 = NewDiv.createElement('H1');
    var h2 = NewDiv.createElement('H2');
    h1 = title;
    h2 = msg;
    //var heading_with_tag = "";
    //heading_with_tag = "<h2 id='jshtml'>"+ title + "</h2>"
    //document.getElementById("finalheader").innerHTML += heading_with_tag;
    //var msg = document.getElementById('myTextArea').value;
    //message_with_tag = "<h3>"+ msg +"</h3>"
    //document.getElementById("thePoSt").innerHTML += message_with_tag;
}
