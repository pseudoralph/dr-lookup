import { apiKey } from './.env';

class DrSearch {
  search(location='37.773%2C-122.413%2C100', user_location='37.773%2C-122.413', q="") {
    return new Promise(function(resolve, reject) {
      const cors = 'https://cors-anywhere.herokuapp.com/';
      const request = new XMLHttpRequest();
      const url = `${cors}https://api.betterdoctor.com/2016-03-01/doctors?query=${q}&location=${location}&user_location=${user_location}&skip=0&limit=10&user_key=${apiKey}`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else { reject(Error(request.statusText)); }
      };

      request.open('GET', url);
      request.send();
    });
  }
}

export { DrSearch };

