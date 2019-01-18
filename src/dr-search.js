import { apiKey } from './.env';

class DrSearch {
  search() {
    return new Promise(function(resolve, reject) {
      const cors = 'https://cors-anywhere.herokuapp.com/';
      const request = new XMLHttpRequest();
      const url = `${cors}https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`;


      console.log(url)

      request.onload = function() {
        if (this.status === 200) {
          console.log(request.reponse)
          resolve(request.reponse);
          // console.log('working')
        } else { reject(Error(request.statusText)); }

      }

      

      // request.withCredentials = true;
      request.open('GET', url);
      request.setRequestHeader("Accept", "application/json");
      // request.setRequestHeader("Access-Control-Allow-Origin", "true");

      request.setRequestHeader("Cache-Control", "no-cache");

      request.send();

    });
  }
}

export { DrSearch };



// var data = null;

// var xhr = new XMLHttpRequest();

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === 4) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("GET", "https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=9e2b13d06971bf14bb573a58bbd741fd");
// // xhr.setRequestHeader("Accept", "application/json");
// // xhr.setRequestHeader("Cache-Control", "no-cache");
// xhr.setRequestHeader("cache-control", "no-cache");
// xhr.setRequestHeader("Postman-Token", "44533c95-8d79-4b73-a2cb-b3bf02c30b31");

// xhr.send(data);


