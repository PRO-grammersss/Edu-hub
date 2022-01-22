function main() {
    let addbutton = document.getElementById('todoadd');
    let todocontainer = document.getElementById('todocontainer');
    let input = document.getElementById('inputfield');
    
    addbutton.addEventListener('click', function() {
        var paragraph = document.createElement('p');
        paragraph.classList.add('paragraph-styling');
        paragraph.innerText = input.value;

        todocontainer.appendChild(paragraph);
        inputfield.value="";

        paragraph.addEventListener('click', function() {
            paragraph.style.textDecoration = "line-through";
        })
        paragraph.addEventListener('dblclick', function() {
            paragraph.removeChild(paragraph);
        })
    })
}
