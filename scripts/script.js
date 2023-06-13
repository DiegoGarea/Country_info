// Informacion del REST COUNTRIES API

const url = 'https://restcountries.com/v2/name/';

//Variables para seleccionar los elementos de la pagina

const busqueda = document.querySelector('#input');
const envio = document.querySelector('#submit');
const respuesta = document.querySelector('#respuesta');

//Funcion para mostrar el resultado

const muestraResultados = (res) => {
  const capital = res[0].capital;
  const countryNativeName = res[0].nativeName;
  const countrySubregion = res[0].subregion;
  const countryRegion = res[0].region;
  const countryPopulation = res[0].population;
  const countryTimeZones = res[0].timezones;
  const countryLanguages = res[0].languages[0].name;
  const countryNativeLanguages = res[0].languages[0].nativeName;
  const countryCurrencies = res[0].currencies[0].name;
  const flag = res[0].flags.png;

  respuesta.innerHTML = `<p>Capital:  ${capital}</p> 
                         <p>Native Name: ${countryNativeName}</p>
                         <p>Region: ${countryRegion}</p>
                         <p>Subregion:  ${countrySubregion}</p>
                         <p>Population: ${countryPopulation}</p>
                         <p>Timezones: ${countryTimeZones}</p>
                         <p>Languages: ${countryLanguages}</p>
                         <p>Native Name Language: ${countryNativeLanguages}</p>
                         <p>Currencie: ${countryCurrencies}</p>
                         <img src="${flag}">
                         `;
};

//Funcion para async GET Request

const recibeInfo = async () => {
  const buscaPais = busqueda.value;
  const endpoint = `${url}${buscaPais}`;

  try {
    const response = await fetch(endpoint, {cache: 'no-cache'});
    // if (response.ok) si la respuesta es valida
    if (response.ok) {
      const jsonResponse = await response.json();

      //funcion para mostrar la informacion
      muestraResultados(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

envio.addEventListener('click', recibeInfo);
