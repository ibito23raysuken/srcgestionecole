<nav class="navbar navbar-expand-lg  navbar-dark red-navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="{{ route('home') }}">RADAMA I</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Administration Scolaire
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="{{ route('eleves.create') }}">INSCRIPTION</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="{{ route('enseignants.create') }}">ENREGISTRER UN ENSEIGNANT</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="{{ route('classes.create') }}">CREER UNE CLASSE</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tableau de Bord Administratif
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="{{ route('eleves.index') }}">Liste des etudiants</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="{{ route('enseignants.index') }}">Liste des enseignant</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="me-2 mt-2 mt-lg-0">
        <button class="btn gradient-gray-btn " type="submit">DECONNEXION</button>
    </div>
  </nav>
