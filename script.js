function temperature(){
    let city=document.getElementById("city").value;
    const key ="6821ba8f9d26765c8f01ca7fa4a8369b";
    const res = document.querySelector('#result');
    console.log(document.getElementById("result").childElementCount)
    if(document.getElementById("result").childElementCount){
        document.getElementById("result").innerHTML='';
    }
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+key)
    .then(response=>response.json())
    .then(data=>{
        var degree=data['main']['temp'];
        const res = document.querySelector('#result');
        let div = document.createElement('div');
        div.id = 'result-element';
        div.innerHTML = '<h1 id="degree">'+city+" : "+degree+' C&deg;&nbsp;&nbsp;&nbsp;</h1>';
        res.appendChild(div);
        console.log(data);
      }
    )
    .catch(err=>alert("Enter city name correctly"));
    document.getElementById('city').value = '';

}