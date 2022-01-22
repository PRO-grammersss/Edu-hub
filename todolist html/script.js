function main() {
    let addbutton = document.cgetelementById('todoadd');
    let todocontainer = document.cgetelementById('todocontainer');
    let input = document.createElement('inputfield');
    
    addbutton.addEventListener('click', function() {
        var paragraph = document.createElement('p');
        paragraph.classList.add('paragraph-styling');
        paragraph.innerText = input.value;
        todocontainer.appendChild(paragraph);
    }
    )}

