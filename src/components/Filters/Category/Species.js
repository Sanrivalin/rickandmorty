import React from 'react'
import FilterBTN from '../FilterBTN'

const Species = ({setSpecies, setPageNumber}) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Species
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-3">
      {species.map((items, index) => {
            return (
              <FilterBTN
                task={setSpecies}
                setPageNumber={setPageNumber}
                name="species"
                index={index}
                key={index}                
                items={items}
              />
            );
          })}
      </div>
    </div>
  </div>
  )
}

export default Species
