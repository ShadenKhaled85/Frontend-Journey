async function getData(){
    var myData = await fetch('http://api.weatherapi.com/v1/search.json?key=3b69cc78408a4c8fb18124357250505&q=lond')
    console.log(myData);
    var response = await myData.json()
    console.log(response);
}
getData();

