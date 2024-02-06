 const scriptURL1 = 'https://script.google.com/macros/s/AKfycbw_skkE8PPp5Nct-yeBizAxDfrCrxlz-r5u0cQ2aHvbfFo4PcSbUvu4t-9Ga1k5Oyz5Aw/exec';







let form = document.forms['contact-form'];
let submit = document.querySelector("#submit");




//  code for form msg

 submit.addEventListener('click',()=>{
        let loading= document.querySelector("#loadingmsg");
         let loadmsg= document.querySelector("#sendmessage");

function formmsg(){
  loading.innerHTML="MESSAGE SEND SUCCESSFULLY";
}


form.addEventListener('submit', e => {
  e.preventDefault()
  loading.innerHTML='<div><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div></div>' + '<div style="padding-left:15px; padding-top:4.5px; font-size:2opx;">Loading...</div?';
  fetch(scriptURL1, { method: 'POST', body: new FormData(form)})
  .then(response => formmsg())
  .then(() => { 
    document.getElementById("form").reset()
              })
              .then(()=>{ 
                setTimeout(()=>{
                                loading.innerHTML='';
                                },5000);
                              })
              .then(()=>{
                window.location.reload();
              })
                             
              .catch(error => console.error('Error!', error.message))
            })
             });



 
