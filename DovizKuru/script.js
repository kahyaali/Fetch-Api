
const api='https://finans.truncgil.com/v3/today.json';


function getData(api){
     fetch(api)
     .then((res)=> res.json())
     .then((data)=>{
      console.log(data);
        
       
        const USD=data.USD.Selling;
        const EUR=data.EUR.Selling;
        const GBP=data.GBP.Selling;

        setData(USD,EUR,GBP);

     })
     .catch((err)=> console.warn(err));
}

function setData(USD,EUR,GBP){
  const d=document.getElementById('dolar');
  const e=document.getElementById('euro');
  const s=document.getElementById('sterlin');

  d.textContent=USD.toString().slice(0,5);
  e.textContent=EUR.toString().slice(0,5);
  s.textContent=GBP.toString().slice(0,5);
}
setInterval(() => {
    getData(api);
},5000);
