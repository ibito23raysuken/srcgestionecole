import "./bootstrap";
import ReactDOM from "react-dom";
import React from "react";
import Datepickers from "./components/eleve/datepicker/datepicker";
import CheckBox from "./components/eleve/checkbox/checkbox";
import Tableau from "./components/eleve/table/table";
import Alerts from "./components/alert/alert";
import FormulaireHidden from "./components/eleve/formularhidden/formularhidden";
import TableauEnseignant from "./components/enseignant/table/table";
import CardProfiles from "./components/eleve/cardprofile/cardprofile";
import TableauClasse from "./components/classe/table/table";
import Drawer from "./components/drawer/drawers";
import Parametre from "./components/parametre/formulaire";
import ListeMois from "./components/eleve/ecolage/ListeMois";
import ProfileEnseignant from "./components/enseignant/profile/profile";
import InputPhoneNumber from "./components/enseignant/phonenumber/phonenumber";
import ComponentListeMatiere from "./components/matiere/table/table";
import CardInformation from "./components/CardInformation/CardInformation";
import AvanceDemande from "./Page/AvancePage/AvanceDemande";
import AvanceDemandeListe from "./Page/AvancePage/AvanceDemandeListe";
import ListeEtudiants from "./Page/Enseignants/ListeEtudiants/ListeEtudiants";
import ListeNoteEnseignants from "./Page/Enseignants/ListeNotes/ListeNotes";
///////////////////////////////////etudiant  ///////////////////////////////////////////////////////////
renderComponent("drawer", Drawer, "data-parametre", "data-connexion");
renderComponent("datedenaissance", Datepickers, "data-datedenaisance");
renderComponent("droit", CheckBox, "data-name", "data-chequer");
renderComponent(
    "ecolage",
    CheckBox,
    "data-name",
    "data-chequer",
    "data-allmounthscolaire"
);
renderComponent("alerte", Alerts, "data-alerts");
renderComponent("tableau", Tableau, "data-listemois", "data-eleves");
renderComponent(
    "formularhidden",
    FormulaireHidden,
    "data-eleve",
    "data-parents"
);
renderComponent(
    "formularhidden2",
    FormulaireHidden,
    "data-eleve",
    "data-parents"
);
renderComponent(
    "formularhidden3",
    FormulaireHidden,
    "data-eleve",
    "data-parents"
);
renderComponent("cardprofile", CardProfiles, "data-card", "data-parametre");
renderComponent("show-ecolage", ListeMois, "data-eleve", "data-parametre");
renderComponent(
    "cardinformation1",
    CardInformation,
    "data-color",
    "data-title",
    "data-content",
    "data-image"
);
renderComponent(
    "cardinformation2",
    CardInformation,
    "data-color",
    "data-title",
    "data-content",
    "data-image"
);
renderComponent(
    "cardinformation3",
    CardInformation,
    "data-color",
    "data-title",
    "data-content",
    "data-image"
);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////enseignant  ///////////////////////////////////////////////////////////
renderComponent("tableauenseignant", TableauEnseignant, "data-enseignants");
renderComponent("card-profileenseignant", ProfileEnseignant, "data-enseignant");
renderComponent("phonenunber", InputPhoneNumber, "data-phonenumber");
renderComponent("AvanceDemande", AvanceDemande, "data-listeDemandeAvance");
renderComponent(
    "AvanceDemandeListe",
    AvanceDemandeListe,
    "data-listeDemandeAvance"
);
renderComponent("ListeEtudiantEnseignant", ListeEtudiants, "data-eleves");
renderComponent(
    "ListeNoteEnseignants",
    ListeNoteEnseignants,
    "data-listenoteenseignants"
);
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////classe  ///////////////////////////////////////////////////////////
renderComponent("tableauclasse", TableauClasse, "data-classes");
/////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////parametre  ///////////////////////////////////////////////////////////
renderComponent("rootformparams", Parametre, "data-parametre");
//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Matiere///////////////////////////////////////////////////
renderComponent("ListeMatiere", ComponentListeMatiere, "data-matieres");
//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////fonction generale///////////////////////////////////////////////
function renderComponent(componentId, component, ...dataAttributes) {
    const root = document.getElementById(componentId);
    if (root) {
        const props = {};
        dataAttributes.forEach((dataAttribute) => {
            const data = root.getAttribute(dataAttribute);
            props[dataAttribute] = JSON.parse(data);
        });
        ReactDOM.render(React.createElement(component, props), root);
    }
}
