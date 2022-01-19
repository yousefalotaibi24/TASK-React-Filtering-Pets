import { useState } from "react";
export default function PetItem({ pet, adoptPet }) {
  const [petImage, setPetImage] = useState(pet.image);

  const changePetImage = () => {
    setPetImage(pet.image2);
  };

  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={pet.image} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button type="button" className="btn btn-info">
            Pet
          </button>
          <button
            type="button"
            class="btn btn-info  m-2"
            onClick={() => adoptPet(pet.id)}
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}
