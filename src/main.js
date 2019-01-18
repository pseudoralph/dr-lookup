import { DrSearch } from './dr-search';
import { buildDrCard, noResults, searchError } from './dr-search-ui';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

document.onreadystatechange = function() {
  if (document.readyState === 'interactive') {
    document.getElementById('search').addEventListener('click', search );
  }
};

function search() {
  const query = document.getElementById('query').value;
  const name = document.getElementById('dr-name').value;
  const loading = document.getElementById('loading');
  const responseOutput = document.getElementById('response');

  responseOutput.innerHTML = "";
  loading.classList.remove('hidden');

  const ailment = new DrSearch();
  ailment.search('45.517%2C-122.670%2C25', '45.517%2C-122.670', name, query)
    .then(function(response) {
      const results = JSON.parse(response);
      loading.classList.add('hidden');

      if (results.meta.total > 0) {
        results.data.forEach(function(dr) {
          const payload = {
            name: `${dr.profile.first_name} ${dr.profile.last_name}${ (dr.profile.title) ? `, ${dr.profile.title}`: ''}`,
            address: `${dr.practices[0].visit_address.street}`,
            address2: `${dr.practices[0].visit_address.city}, ${dr.practices[0].visit_address.state} ${dr.practices[0].visit_address.zip}`,
            phone: dr.practices[0].phones[0].number,
            url: dr.practices[0].website,
            acceptingNewPatients: dr.practices[0].accepts_new_patients 
          };

          responseOutput.append(buildDrCard(payload));
        });
      } else { responseOutput.append(noResults(query)); }

    })
    .catch(function(response) {
      loading.classList.add('hidden');
      responseOutput.append(searchError(response));
    });

}
