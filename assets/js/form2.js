
const scriptURL2 = 'https://script.google.com/macros/s/AKfycbyi81JHn5mpcBSHlMoNxztmTs2RcKBn2TinVc6fHOFfbh5zacDyAb6RH7_S6X4JnsHU/exec';






let form = document.forms['contact-form2'];
let submit = document.querySelector("#submit1");




//  code for form msg

 submit.addEventListener('click',()=>{
        let loading= document.querySelector("#loadingmsg2");
         let loadmsg= document.querySelector("#sendmessage2");

function formmsg(){
  loading.innerHTML="DETIALS ARE SEND SUCCESSFULLY AND YOU WILL GET RESPONCE SOON..";
}


form.addEventListener('submit', e => {
  e.preventDefault()
  loading.innerHTML='<div><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div></div>' + '<div style="padding-left:15px; padding-top:4.5px; font-size:2opx;">Loading...</div>';
  fetch(scriptURL2, { method: 'POST', body: new FormData(form)})
  .then(response => formmsg())
  .then(() => { 
    document.getElementById("form2").reset()
              })
  .then(()=>{ 
    setTimeout(()=>{
                    loading.innerHTML='';
                    },7000);
                  })
  .then(()=>{
    window.location.reload();
  })
                 
  .catch(error => console.error('Error!', error.message))
})
 });



// let form = document.forms['contact-form2'];
// let submit = document.querySelector("#submit");

// submit2.addEventListener('click',()=>{
 
//     let loading= document.querySelector("#loadingmsg");
//     let loadmsg= document.querySelector("#sendmessage");

// function formmsg(){
// loading.innerHTML="MESSAGE SEND SUCCESSFULLY1";
// }


// form2.addEventListener('submit', e => {
// e.preventDefault()
// loading.innerHTML='<div><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div></div>' + '<div style="padding-left:15px; padding-top:4.5px; font-size:2opx;">Loading...</div?';

// fetch(scriptURL2, { method: 'POST', body: new FormData(form)})
// .then(response => formmsg())
// .then(() => { 
// document.getElementById("form2").reset();
//          })
// .then(()=>{ 
// setTimeout(()=>{
               
//                loading.innerHTML='';
//                },3000);
//              })
// .catch(error => console.error('Error!', error.message),alert("THERE IS SOME ERROR WHILE SENDING YOUR DETAILS PLEASE CONTACT ONE OF THE CONTABUTORS (Link In Home page)"))
// })


// });



