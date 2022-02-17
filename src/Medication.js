import React from "react";
import "./Medication.css";

export default function Medication() {
  return (
    <div className="container medication mb-5">
      <h2 className="section-title">Meds</h2>
      <h3 className="drug-name">Timolol</h3>
      <p className="medication-type mb-5">
        <strong>Type:</strong> Beta-Blocker
        <br />
        <strong>How it works:</strong> Decreases the amount of fluid within the
        eye
        <br />
        <strong>Common brand names:</strong> Betimol. Istalol. Timoptic.
        Combigan(combined with brimonidine)
        <br />
      </p>
      <h3 className="drug-name">Dexamethasone</h3>{" "}
      <h3 className="drug-name">Bimatoprost</h3>{" "}
      <h3 className="drug-name">Dorzolamide</h3>
      <h3 className="drug-name">Acetazolamide</h3>{" "}
      <h3 className="drug-name">Brimonidine</h3>
    </div>
  );
}
