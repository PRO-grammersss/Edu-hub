function saveTextAsFile(textToWrite, fileNameToSaveAs) {
    var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}

function makebold() {
    document.getElementById("notesarea").style.fontWeight = "bold";;

}

function makeitalic() {
    document.getElementById("notesarea").style.fontStyle = "italic";
}

function cleartext() {
    document.getElementById("notesarea").value = ""
}

function fontsizechange() {
    var changefontsize = document.getElementById('fontsizedropdown');
    changefontsize.onchange = function() {
        var textarea = document.getElementById("notesarea")
        textarea.style.fontSize = this.value + "px";
    };

}

function fontchange() {
    var changeFontStyle = function(font) {
        document.getElementById("notesarea").style.fontFamily = font.value;
    }


}

function onloadbody() {
    window.alert("loaded")
    var textarea = document.getElementById("notesarea")
    textarea.style.fontSize = 8;

}