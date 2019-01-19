function buildDrCard(drInfo) {
  let card = document.createElement('div');
  card.setAttribute('class', 'col-md-3');

  card.innerHTML = `
  <div class="card dr-card">
  <div class="card-body">
    <h5 class="card-title">${drInfo.name}</h5>
    
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><i class="fas fa-map-marked-alt"></i> ${drInfo.address}<br><span style="padding-right: 24px;"></span> ${drInfo.address2}</li>
    <li class="list-group-item"><i class="fas fa-phone"></i> ${drInfo.phone}</li>
    ${drInfo.url ? `<li class="list-group-item"><i class="fas fa-globe"></i> ${drInfo.url}</li>`: ''}
  </ul>
  <div class="card-body">
   ${ drInfo.acceptingNewPatients ? '<i class="fas fa-user-plus"></i> Accepting patients' : '<i class="fas fa-user-slash"></i> Not accepting patients<br>'}

  </div>
</div>`;

  return card;
}

function noResults(q) {
  let card = document.createElement('div');
  card.setAttribute('class', 'col-md-5 mx-auto');

  card.innerHTML = `<div class="card">
  <div class="card-header">
  No results found
  </div>
  <div class="card-body">
    <p class="card-text">Your query for <code>${q}</code> returned 0 results.</p>
    <p class="card-text">Try a different search.</p>
  </div>
  </div>`;

  return card;
}

function searchError(error) {
  let card = document.createElement('div');
  card.setAttribute('class', 'col-md-5 mx-auto');

  card.innerHTML = `<div class="card">
  <div class="card-header">
  Error
  </div>
  <div class="card-body">
    <p class="card-text">An error has occured: <code>${error}</code></p>
    <p class="card-text">Please retry your search later.</p>
  </div>
  </div>`;

  return card;

}

export { buildDrCard, noResults, searchError };


