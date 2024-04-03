let $ = document;
let countryInput = $.getElementById('country');
let cityInput = $.getElementById('city');
let countriesData = {
    Iran : ['Tabriz','Tehran','Shiraz','Isfahan','mashhad'],
    Turkey : ['Stambul','Izmir','Ankara','Antalya','goonie'],
    UnitedState : ['los angeles','las ve gas','san diego','san andres','chicago'],
    France : ['Paris','Nice','Lyon','Bordeaux','Marseille'],
    Germany : ['Hamburg','berlin','clan','asin','Leipzig'],
}

countryInput.addEventListener('change',function(){
    //console.log(countryInput.value);
    if(countryInput.value === 'select country...'){
        cityInput.innerHTML='';
        cityInput.innerHTML='<option value="" selected>select city...</option>'
    }else{
        let mainCountryName = countryInput.value;
        let mainCountryCities = countriesData[mainCountryName];
        cityInput.innerHTML='';
        mainCountryCities.forEach(function(city) {
            //console.log(city)
            cityInput.innerHTML += '<option>' + city + '</option>';
        });
    }
})