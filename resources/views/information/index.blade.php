@extends('base')

@section('content')
<div class=" pt-4">
    <div class="text-center ">
        <h2><strong>Dossier sur {{ $eleve->prenom }}</strong></h2>
    </div>
<div class="container pt-4">
    <div class="row">
        <div class="col-9">
            <div class="row">
                <div class="col-4">
                    <div id="cardinformation1"
                    data-color="{{ json_encode("rgba(0, 0, 0, 0.7)") }}"
                    data-title="{{ json_encode("Vue d'ensemble des performances académiques:") }}"
                    data-content="{{ json_encode("Afficher les notes, moyennes, et progrès dans les différentes matières.") }}"
                    data-image="{{ json_encode("image1") }}">
                    </div>
                </div>
                <div class="col-4">
                    <div id="cardinformation2"
                    data-color="{{ json_encode("rgba(0, 0, 255, 0.5)") }}"
                    data-title="{{ json_encode("Section Documents :") }}"
                    data-content="{{ json_encode("Certificat académique : Un espace dédié pour afficher ou télécharger le certificat académique de l'étudiant,
                    indiquant ses réussites et qualifications.
                    Autres documents pertinents : Espace pour d'autres documents importants comme
                    des lettres de recommandation, certificats de participation, etc.") }}"
                    data-image="{{ json_encode("image2") }}">
                    </div>
                </div>
                <div class="col-4">
                    <div id="cardinformation3"
                    data-color="{{ json_encode("rgba(255, 0, 0, 0.5)") }}"
                    data-title="{{ json_encode("Suivi de la participation:") }}"
                    data-content="{{ json_encode("Afficher les présences, les retards et les absences aux cours.") }}"
                    data-image="{{ json_encode("image3") }}">
                    </div>
                </div>
            </div>
        </div>

        <div class="col-3">
            <div class="card text-white bg-secondary mb-3 custom-card h-100" style="max-width: 18rem;">
                <div class="card-header text-lg-center">Dernier Mise a jour</div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">Ecolage ok</li>
                        <li class="list-group-item">Note de francais 5/10</li>
                        <li class="list-group-item">Absent le 25/05/2023</li>
                        <li class="list-group-item">Note de Anglais 5/10</li>
                        <li class="list-group-item">Note de note francais 5/10</li>
                      </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="m-5">
        <a type="button" class="btn btn-primary btn-lg " href="{{ route("eleves.show",['elefe'=>$eleve]) }}">
            <img class="text-white-50 mr-2" src="/images/icone/arrow-left.svg" alt="Retour"/>
            Retour
        </a>
    </div>
</div>
@endsection
