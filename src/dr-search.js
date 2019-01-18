import { apiKey } from './.env';

class DrSearch {
  search(location, user_location, name, q) {
    return new Promise(function(resolve, reject) {
      let cors = (true) ? 'https://cors-anywhere.herokuapp.com/' : '';
      const url = `${cors}https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${q}&location=${location}&user_location=${user_location}&skip=0&limit=25&user_key=${apiKey}`;
      const request = new XMLHttpRequest();

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

