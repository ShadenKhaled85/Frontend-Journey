async function getData(){
    var myData = await fetch('http://api.weatherapi.com/v1/search.json?key=3b69cc78408a4c8fb18124357250505&q=lond')
        // method: 'GET' // DEFAULT METHOD FOR FETCH
        console.log(myData);
        var response = await myData.json()
        console.log(response);
        // console.log(response.country);

}
getData()