function Welcome() {
  return (
    <div className="welcome">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"><img src="logo.png" alt="Logo" width="50"/></a>
        <form class="form-inline mx-auto">
          <input class="form-control mr-sm-2" type="search" placeholder="Rechercher" aria-label="Rechercher"/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
        </form>
          <a href="https://portfolio.metamask.io/" target="_blank">  <button class="btn btn-primary ml-auto" type="button"><img src="icon.ico" width="20"/>Connexion</button></a>
      </nav>      
      <hr />
      
      <div class="row"> 
        <div class="col text-center">
        <h2 >FAITES VOUS JEUX LA BLOCKCHAIN S'OCCUPE DE TOUT</h2>  
        </div>
      </div>
    </div>
  );
}

export default Welcome;
