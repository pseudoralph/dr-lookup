import { apiKey } from './.env';

class DrSearch {

  search() {
    return new Promise(function(resolve, reject) {
      const cors = 'https://cors-anywhere.herokuapp.com/';
      const request = new XMLHttpRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`;


      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }


      request.open('GET', url);
      request.setRequestHeader("Accept", "application/json");
      request.setRequestHeader("Cache-Control", "no-cache");
      // request.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:8080/");

      request.send();
      

    });
  }
}

export { DrSearch };


let xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(JSON.parse(this.responseText));
  }
});

xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=1&user_key=5f3f3999115c62d6f07974ce335107a9");
xhr.send();





