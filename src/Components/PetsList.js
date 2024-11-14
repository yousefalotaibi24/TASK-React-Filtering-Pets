import { useState } from "react";

import PetItem from "./PetItem";
import petsData from "../petsData";

function PetsList() {
  const [pets, setPets] = useState(petsData);
  const handleAdopt = (petIdRemoved) => {
    let filteredPets = pets.filter((pets) => pets.id !== petIdRemoved);
    setPets(filteredPets);
  };
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  let filterData = pets
    .filter((pets) => pets.name.includes(query))
    .filter((pets) => pets.type.includes(type))
    .map((pet) => <PetItem pet={pet} key={pet.id} adobt={handleAdopt} />);

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
              <br />
              Type:
              <select
                className="form-select"
                onChange={(event) => setType(event.target.value)}
              >
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{filterData}</div>
      </div>
    </section>
  );
}

export default PetsList;
