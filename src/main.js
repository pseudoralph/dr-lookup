import { DrSearch } from './dr-search';

document.onreadystatechange = function() {
  if (document.readyState === 'interactive') {

    init();
  }

};


function init() {
  console.log('ready!');

  const drsearch = new DrSearch();

  drsearch.search().then(function(response) {
    console.log(response)
  });


}

