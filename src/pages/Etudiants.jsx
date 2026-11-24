
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";
import StudentCard from "../components/StudentCard";
import StudentForm from "../components/StudentForm";
import "./Etudiants.css";

function Etudiants() {

  const { etudiants, setEtudiants } = useContext(StudentContext);

  const [recherche, setRecherche] = useState("");
  const [etudiantAModifier, setEtudiantAModifier] = useState(null);

  const ajouterEtudient = (nouvelEtudiant) => {
    const nouvelId = etudiants.length > 0
      ? Math.max(...etudiants.map(e => e.id)) + 1
      : 1;

    setEtudiants([...etudiants, {
      ...nouvelEtudiant,
      id: nouvelId
    }]);
  };

  const supprimerEtudient = (email) => {
    setEtudiants(
      etudiants.filter(e => e.email !== email)
    );
  };

  const modifierEtudient = (email, nouvelEtudiant = null) => {

    if (nouvelEtudiant) {
      setEtudiants(etudiants.map(e =>
        e.email === email ? { ...nouvelEtudiant, id: e.id } : e
      ));

      setEtudiantAModifier(null);

    } else {
      const etudiant = etudiants.find(e => e.email === email);
      setEtudiantAModifier(etudiant);
    }
  };

  const etudiantsFiltres = etudiants.filter(e =>
    e.nom.toLowerCase().includes(recherche.toLowerCase()) ||
    e.prenom.toLowerCase().includes(recherche.toLowerCase()) ||
    e.filiere.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div className="etudiants-page">

      <h1>Liste des étudiants</h1>

      <input
        type="text"
        placeholder="Rechercher un étudiant..."
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
      />

      <StudentForm
        ajouterEtudient={ajouterEtudient}
        etudiantAModifier={etudiantAModifier}
        modifierEtudient={modifierEtudient}
      />

      {etudiantsFiltres.map(etudiant => (
        <div key={etudiant.id}>
          <StudentCard
            {...etudiant}
            supprimer={supprimerEtudient}
            modifier={modifierEtudient}
          />

          <Link to={`/etudiants/${etudiant.id}`}>
            Voir les détails
          </Link>
        </div>
      ))}

    </div>
  );
}

export default Etudiants;
