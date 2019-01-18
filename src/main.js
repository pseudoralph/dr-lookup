import { DrSearch } from './dr-search';
import { ui } from './dr-search-ui';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

document.onreadystatechange = function() {
  if (document.readyState === 'interactive') {
    document.getElementById('search').addEventListener('click', search );
  }

};

function search() {
  const query = document.getElementById('query').value;
  const loading = document.getElementById('loading');
  loading.classList.remove('hidden');

  const search = new DrSearch();
  search.search('45.517%2C-122.670%2C25', '45.517%2C-122.670', query).then(function(response) {
    loading.classList.add('hidden');

    console.log(JSON.parse(response));
  });


}
