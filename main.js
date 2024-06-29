const menu = document.querySelector('.menu');
const trans = document.querySelector('.trans');
const sent = document.querySelector('.sent');
const menubox = document.querySelector('.menubox');
const  close = document.querySelector('.close');
const  home = document.querySelector('.home');
const  user1 = document.querySelector('.user1');
const  user2 = document.querySelector('.user2');
const  user3 = document.querySelector('.user3');
const  user4 = document.querySelector('.user4');
const  user5 = document.querySelector('.user5');
const  camount1 = document.querySelector('.a');
const  camount2 = document.querySelector('.b');
const  camount3 = document.querySelector('.c');
const  camount4 = document.querySelector('.d');
const  camount5 = document.querySelector('.e');


const year = document.querySelector('.year')
const date = new Date();
const fullyear = date.getFullYear();
const day = date.getDay();
const month = date.getMonth() + 1;
const datestring = date.toDateString();
const hour = date.getHours();
const minute = date.getMinutes()
year.innerHTML = fullyear;


if ('serviceWorker' in navigator) {
   window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js')
         .then(registration => {
            console.log('Service worker registered:', registration);
         })
         .catch(error => {
            console.error('Service worker registration failed:', error);
         });
   });
}


function start() {
   menu.addEventListener('click', (e)=>{
      e.preventDefault();
     menubox.style.display = 'block';
   })
   
   close.addEventListener('click', (e)=>{
   menubox.style.display = 'none'; 
   })
   
   
   home.addEventListener('click', (e) => {
    menubox.style.display = 'none';
   })
   
      
   user1.addEventListener('click', (e)=>{
      if (camount1.style.color == 'green') {
         camount1.style.color = 'indianred';
         
      } else {
         camount1.style.color = 'green';
      }
      
   });
   

   user2.addEventListener('click', (e) => {

      if (camount2.style.color == 'green') {
         camount2.style.color = 'indianred';

      } else {
         camount2.style.color = 'green';
      }

   })
   
   user3.addEventListener('click', (e) => {

      if (camount3.style.color == 'green') {
         camount3.style.color = 'indianred';

      } else {
         camount3.style.color = 'green';
      }

   });
   
   
   user4.addEventListener('click', (e) => {

      if (camount4.style.color == 'green') {
         camount4.style.color = 'indianred';

      } else {
         camount4.style.color = 'green';
      }

   });
   
   
   
   
   user5.addEventListener('click', (e) => {

         if (camount5.style.color == 'green') {
            camount5.style.color = 'indianred';

         } else {
            camount5.style.color = 'green';
         }

      });
   
   sent.addEventListener('click', (e)=>{
      transfer.style.display = 'flex';
   })
   
    trans.addEventListener('click', (e)=>{
    receipt.style.display = 'flex';
    })
    
    
    
    
    
    //============== DATE AND TIME =================//
   const paydate = document.querySelector('.paydate');
   const usertime = document.querySelector('.usertime')
   paydate.value = datestring;
}

start();





//=================== RECEIPT SECTION =================//


const recbtn = document.querySelector('.recbtn');
const receipt = document.querySelector('.receipt');
const okbtn = document.querySelector('.ok');
const payamount= document.querySelector('.payamount');
const payname= document.querySelector('.payname');


function page() {
   recbtn.addEventListener('click', (e)=>{
      receipt.style.display = 'flex';
   })
   
   okbtn.addEventListener('click', (e)=>{
      receipt.style.display = 'none';
      transfer.style.display = 'none';
   })
   
}



page();





//=================== TRANSFER SECTION =================//

const transfer = document.querySelector('.transferpage');
const sendmoney = document.querySelector('.sendmoney');
const sendbtn = document.querySelector('.sendbtn');
const back = document.querySelector('.back')
const sendname = document.querySelector('.sendname');
const sendamount = document.querySelector('.sendamount');



function pagetwo() {
   sendmoney.addEventListener('click', (e) => {
      transfer.style.display = 'flex';
   });

   sendbtn.addEventListener('click', (e) => {
      payamount.value = sendamount.value;
      payname.value = sendname.value.toUpperCase();
      receipt.style.display = 'flex';
   });
   
   back.addEventListener('click', (e)=>{
      transfer.style.display = 'none';
   })

}


pagetwo();




//================= DATA TO DATA ============//

const sendkeys = document.querySelectorAll('.sendkey');
const clear = document.querySelector('.clear');


function enterdata() {
   sendkeys.forEach(sendkey =>{
      sendkey.addEventListener('click', (e)=>{
        sendamount.value +=sendkey.innerHTML;
      })
      clear.addEventListener('click', (e)=>{
         sendamount.value= null;
      })
   })
}

enterdata();