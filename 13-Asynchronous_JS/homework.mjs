// За допомогою StarWars Api https://swapi.dev/ and fetch API зробити наступне:

import request from 'request';
// 1. Використовуючи методи классу Proimse отримати масив назв плданет перших 10 id
import {json} from "stream/consumers";

// const promise = new Promise((resolve, reject) => {
//     request.get('https://swapi.dev/api/planets/', (error, response, body)=> {
//         if (error) {
//             reject(error);
//         } else {
//             resolve(JSON.parse(body));
//         }
//     } )
// })
//
// promise.then(b => console.log(b.results.slice(0, 10).map((obj) => obj.name)))



// 2 Вивеcти в консоль назви всіх "starships" котрими володів Han Solo (id = 14):
//    2.1 Використовуючи методи классу Proimse

// VARIANT 1
// const getUrls = (url) => new Promise((resolve, reject) => {
//     request.get(url, (error, response, body)=> {
//         if (error) {
//             reject(error);
//         } else {
//             resolve(JSON.parse(body));
//         }
//     } )
// })
//
// const Url = 'https://swapi.dev/api/people/14/'
// getUrls(Url)
//     .then(b => b.starships)
//     .then((starships) => {
//
//         const Url1 = starships[0]
//         getUrls(Url1)
//             .then(ship1 => console.log(ship1.name))
//         const Url2 = starships[1]
//         getUrls(Url2)
//             .then(ship2 => console.log(ship2.name))
//     })
//     .catch(e=> console.error(e))

// VARIANT 2
// fetch('https://swapi.dev/api/people/14/')
//     .then(res => res.json())
//     .then(body => body.starships)
//     .then(starships => {
//         fetch(starships[0])
//             .then(res1 => res1.json())
//             .then(body => console.log(body.name))
//         fetch(starships[1])
//             .then(res2 => res2.json())
//             .then(body2 => console.log(body2.name))
//     })

// VARIANT 3
// fetch('https://swapi.dev/api/people/14/')
//     .then(res => res.json())
//     .then(body => {
//         const starships = body.starships;
//
//         let myFetch = [];
//
//         for (const link of starships) {
//             myFetch.push(fetch(link).then(res => res.json()));
//         }
//
//         Promise.all(myFetch)
//             .then(resultArr => {
//                for (const starship of resultArr) {
//                     console.log(starship.name);
//                 }
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     })
//     .catch(error => {
//         console.error(error);
//     });

//    2.2 Використовуючи async/await

// const hanSolo = await fetch('https://swapi.dev/api/people/14/')
// const body = await  hanSolo.json()
// const starships = body.starships;
//
//         let myFetch = [];
//
//         for (const link of starships) {
//             myFetch.push(fetch(link).then(res => res.json()));
//         }
//
//         Promise.all(myFetch)
//             .then(resultArr => {
//                for (const starship of resultArr) {
//                     console.log(starship.name);
//                 }
//             })
//             .catch(error => {
//                 console.error(error);
//             })
//
//     .catch(error => {
//         console.error(error);
//     });


// 3. Зібрати в масив назви вісіх резидентів "residents", з усіх планет що були у фільмі "Return of the Jedi" (id = 3). Використовуйте async/await
// Масив має мати наступний вигляд
// [
//   {
//     planetName: 'SomePlanet1', 
//     residents: ['Han Solo', 'r2d2']
//   },
//   {
//     planetName: 'SomePlanet2', 
//     residents: ['Luke Skywalker', 'C3PO']
//   }
// }
const returnOfTheJedi = await fetch('https://swapi.dev/api/films/3')
const returnOfTheJediBody = await returnOfTheJedi.json()
const planets = returnOfTheJediBody.planets
let resultArr = new Array()
for (let planet of planets) {
    const eachPlanet = await fetch(planet)
    const eachPlanetBody = await eachPlanet.json()
    const objForPlanet = new Object()
    objForPlanet.planetName = eachPlanetBody.name
    const eachPlanetResidents = eachPlanetBody.residents
    let residentArr = new Array()
    for (let resident of eachPlanetResidents) {
        const eachResidentForPlanet = await fetch(resident)
        const eachResidentBody = await eachResidentForPlanet.json()
        const eachResidentBodyName = eachResidentBody.name

        residentArr.push(eachResidentBodyName)
    }
    objForPlanet.residents = residentArr

    resultArr.push(objForPlanet)


}

console.log(resultArr)
