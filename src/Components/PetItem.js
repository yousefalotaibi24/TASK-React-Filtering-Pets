import { useState } from "react";

function PetItem({ pet, adobt }) {
  const [image, setimage] = useState(pet.image);
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={image} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => setimage(pet.image2)}
          >
            Pet
          </button>
          <button
            type="button"
            class="btn btn-info  m-2"
            onClick={() => adobt(pet.id)}
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
