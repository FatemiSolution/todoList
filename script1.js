const button = document.getElementById("addTask");
const search = document.getElementById("input");
const listContainer = document.getElementById("list-container");



button.addEventListener('click',function(){
    if (search.value === ''){
        alert('please enter something!');
    }else{
        let li = document.createElement('li');
        li.innerHTML = search.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    saveData();
    search.value = '';
})
listContainer.addEventListener('click', function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle('checked');
        saveData();
    }else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData (){
  localStorage.setItem('data',listContainer.innerHTML);
}

function getData (){
 listContainer.innerHTML =localStorage.getItem('data');
}
getData();