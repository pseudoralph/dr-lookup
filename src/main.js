import { DrSearch } from './dr-search';

document.onreadystatechange = function() {
  if (document.readyState === 'interactive') {

    console.log('readssssssy!');
    
    const search = new DrSearch();
    search.search().then(function(response) {
      console.log(JSON.parse(response));
    });

  }

};
