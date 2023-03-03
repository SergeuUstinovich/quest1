const htt = 'https://github.com/SergeuUstinovich/quest1/blob/main/packej.json';

function sendRequest(method, url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.responseType = 'json';
    
        xhr.onload = () =>{
        if (xhr.status >= 400){
            reject(xhr.response)
        }else{
            resolve(xhr.response)
        }
    };
    xhr.onerror = () =>{
        reject(xhr.response)
    };
        xhr.send();        
    })  
};
sendRequest('GET', htt)
.then(data=>console.log(data))
.catch(err=>console.log(err))

//фильтр выплывающее
function displ(){
    document.getElementById("myDropdown").classList.toggle("show");
}
//сворачивает окно если нажать в рандомном месте
window.onclick = function(e){
    if(!e.target.matches('.but3')){
        let myDropdown = document.getElementById("myDropdown");
        if(myDropdown.classList.contains('show')){
            myDropdown.classList.remove('show');
        }
    }
}
//сортировка пузырьком
// for(let i = 0; i< sor.length; i++){
//     for(let j = i; j< sor.length; j++){
//         if(a[i] > a[j]) {
//             let temp = a[i];
//             a[i] = a[j];
//             a[j] = temp;
//         }
        
//     }
// }
//сортировка по рейтингу
document.querySelector('#sor-asc').onclick = function(){
    mySort('data-reit');
} 
document.querySelector('#sor-desc').onclick =  function(){
    mySortDesc('data-reit');
} 

document.querySelector('#sor-finans').onclick = function(){
    mySort('data-finans');
} 
document.querySelector('#sor-definans').onclick =  function(){
    mySortDesc('data-finans');
}

function mySort(sortType){
    let sor = document.querySelector('#sor');
    for(let i = 0; i< sor.children.length; i++){
        for(let j = i; j< sor.children.length; j++){
            if(+sor.children[i].getAttribute(sortType) > +sor.children[j].getAttribute(sortType)){
                replaceNode = sor.replaceChild(sor.children[j],sor.children[i]);
                insertAfter(replaceNode, sor.children[i]);
            } 
        }
    }
}
function mySortDesc(sortType){
    let sor = document.querySelector('#sor');
    for(let i = 0; i< sor.children.length; i++){
        for(let j = i; j< sor.children.length; j++){
            if(+sor.children[i].getAttribute(sortType) < +sor.children[j].getAttribute(sortType)){
                replaceNode = sor.replaceChild(sor.children[j],sor.children[i]);
                insertAfter(replaceNode, sor.children[i]);
            } 
        }
    }
}

function insertAfter(elem,refElem){
    return refElem.parentNode.insertBefore(elem,refElem.nextSibling);
}


//фильтр
const list = document.querySelectorAll('.box');
const items = document.querySelector('.dropdown-content');

function filter(){
    items.addEventListener('click', (event)=>{
        const targetId = event.target.dataset.skill;

        switch(targetId){
            case 'all':
                item('box')
                break;
            case 'intertico':
                item(targetId)
                break;
            case 'agoda':
                item(targetId)
                break;  
            case 'theHill':
                item(targetId)
                break;     
        }
    })
}
filter()

function item(className){
    list.forEach(list => {
        if(list.classList.contains(className)){
            list.style.display = 'flex'
        }else{
            list.style.display = 'none'
        }
    })
}
//отображение
const elem = document.querySelectorAll('.inv');
const human = document.querySelectorAll('.human');

let i;
let h;

function listView(){
    for(i=0; i < elem.length;i++){
        elem[i].style.display = "";
    }
    for(h=0;h < human.length; h++){
        human[h].style.width = "100%";
        
    }
}
function gridView(){
    for(i=0; i < elem.length;i++){
        elem[i].style.display= "none";
    }
    for(h=0;h < human.length; h++){
        human[h].style.width = "50%";
        
    }
}






