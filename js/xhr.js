const dat = [
    {
    firstName:'Brad', 
    lastName: 'Simmons',
    skill: ['HTML','JS','ReactJS'],
    earnin: ['$8 000 000', 'В процессе'],
    commis: ['$520','Оплачено'],
    compan: ['Intertico','Web, UI/UX Design'],
    reiting: 5
},
{
    name: ['Jessie', 'Clarcson'],
    skill: ['C#','ASP.NET','MS SQL'],
    earnin: ['$23 000 000', 'В ожидании'],
    commis: ['$1 600','Отклонен'],
    compan: ['Agoda','Houses & Hotels'],
    reiting: 4.5
},
{
    name: ['Lebron', 'Wayde'],
    skill: ['PHP','Laravel','VueJS'],
    earnin: ['$34 000 000', 'Оплачено'],
    commis: ['$6 700','Оплачено'],
    compan: ['Intertico','Web, UI/UX Design'],
    reiting: 3
},
{
    name: ['Natali', 'Trump'],
    skill: ['Python','PostgreSQL','ReactJS'],
    earnin: ['$2 600 000', 'Оплачено'],
    commis: ['$14 000','В ожидании'],
    compan: ['The Hill','Insurance'],
    reiting: 5
}
];

const datJson = JSON.stringify(dat);
const requestURL = datJson;

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
sendRequest('GET', requestURL)
.then(data=>console.log(data))
.catch(err=>console.log(err))