class DrSearch {
  search(location, user_location, name, q) {
    return new Promise(function(resolve, reject) {
      const cors = (false) ? 'https://cors-anywhere.herokuapp.com/' : ''; //used to test cors proxy server
      const url = `${cors}https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${q}&location=${location}&user_location=${user_location}&skip=0&limit=25&user_key=${process.env.apiKey}`;
      const request = new XMLHttpRequest();

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else { reject(Error(request.statusText)); }
      };

      request.open('GET', url, true);
      request.send();
    });
  }
}

export { DrSearch };