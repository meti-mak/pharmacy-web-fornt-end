const inputvalue=Document.getElementbyid('task');
const taskform=Document.queryselectory('.form');
const ul=Document.queryselectory('.collection');
taskform.addeventlistener('submit',addtask);
function addtask(e){
    const li =document.createElement('li');
    const link=Document.createElement('a');
  li.classList.add('collection-itam');
  li.appendChild(document.createTextNode(inputvalue));
  link.innerhtml= '<i class="fa-solid fa-xmark"></i>';
li.appendChild(link);
ul.appendChild(li);
e.preventDefault();

}