
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";
import "./DetailEtudiant.css";

function DetailEtudiant() {

  const { id } = useParams();

  const { etudiants } = useContext(StudentContext);

  const etudiant = etudiants.find(
    (e) => e.id === Number(id)
  );

  if (!etudiant) {
    return (
      <section className="detail-etudiant">
        <h2>Étudiant introuvable !</h2>

        <Link to="/etudiants">
          Retour à la liste
        </Link>
      </section>
    );
  }

  return (
    <section className="detail-etudiant">

      <Link to="/etudiants" className="retour-link">
        ← Retour à la liste
      </Link>

      <h2>Détails de l'étudiant</h2>

      <img
        src={etudiant.image}
        alt="Photo de l'étudiant"
      />

      <p><strong>Nom :</strong> {etudiant.nom}</p>
      <p><strong>Prénom :</strong> {etudiant.prenom}</p>
      <p><strong>Email :</strong> {etudiant.email}</p>
      <p><strong>Téléphone :</strong> {etudiant.tel}</p>
      <p><strong>Filière :</strong> {etudiant.filiere}</p>
      <p><strong>Année :</strong> {etudiant.annee}</p>
      <p><strong>Groupe :</strong> {etudiant.groupe}</p>
      <p><strong>Ville :</strong> {etudiant.ville}</p>

    </section>
  );
}

export default DetailEtudiant;
