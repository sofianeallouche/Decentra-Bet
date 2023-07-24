function Setup() {

  return (
    <div>
    < div class="card">
  <div class="card-header">
    Match de football
  </div>
  <div class="card-body">
    <h5 class="card-title">Paris</h5>
    <p class="card-text">Misez sur votre équipe favorite !</p>

<form>
  <div class="form-group">
    <label for="team">Équipe</label>
    <input type="text" class="form-control" id="team" placeholder="Entrez le nom de l'équipe"/>
  </div>
  <div class="form-group">
    <label for="bet">Montant du pari</label>
    <input type="number" class="form-control" id="bet" placeholder="Entrez le montant du pari"/>
  </div>
  <div class="form-group">
    <label for="odds">Cote</label>
    <input type="number" class="form-control" id="odds" placeholder="Entrez la cote"/>
  </div>
  <button type="submit" class="btn btn-primary">Parier</button>
</form>
</div>
</div>
</div>



  );
}

export default Setup;
