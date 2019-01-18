function buildDrCard(drInfo) {
  let card = document.createElement('div');
  card.setAttribute('class', 'card col-md-3 dr-card');

  card.innerHTML = `<div class="card-body">
  <h5 class="card-title">${drInfo.name}</h5>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item"><i class="fas fa-map-marked-alt"></i> ${drInfo.address}<br><span style="padding-right: 24px;"></span> ${drInfo.address2}</li>
  <li class="list-group-item"><i class="fas fa-phone"></i> ${drInfo.phone}</li>
  </ul>
  <div class="card-body">
  ${ drInfo.acceptingNewPatients ? '<i class="fas fa-user-plus"></i> Accepting patients' : '<i class="fas fa-user-slash"></i> Not accepting patients<br>'}
  </div>`;

  return card;
}

export { buildDrCard };


// <br><span style="padding-right: 24px;"></span> Portland, OR 97202