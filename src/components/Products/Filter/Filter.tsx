import React, { useContext, useEffect, useState } from "react";
import {
  FilterBranName,
  FilterCheckBox,
  FilterContainer,
  FilterDiv,
  FilterInfo,
  FilterNumInput,
  FilterSubDiv,
} from ".";
import { DataContext } from "../../../context/context";
import getBrands from "../../../api/brands";
import { IBrand } from "../../../interface";

function Filter() {
  const [getBrand, setGetBrand] = useState<IBrand[]>([]);

  const [disabledInputs, setDisabledInputs] = useState<string | null>(null); 
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);

  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Filter must be used within a DataProvider");
  }

  useEffect(() => {
    async function getAllBrands() {
      try {
        const result = await getBrands();
        setGetBrand(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getAllBrands();
  }, []);

  const { setFilter } = context;

  function handleFilterChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setFilter(isChecked ? value : '');

    // Actualiza el input deshabilitado según la selección
    setDisabledInputs(isChecked ? value : null);
  }

  return (
    <>
      <FilterContainer>
        <FilterDiv>
          {getBrand.map((element, index) => (
            <FilterInfo key={index}>
              <FilterBranName>
                {element.brand.toLocaleUpperCase()}
              </FilterBranName>
              <div className="form-check">
                <FilterCheckBox
                  className="form-check-input"
                  type="checkbox"
                  id={`flexCheck${index}`} // Asegúrate de tener IDs únicos
                  value={element.brand}
                  name="brand"
                  onChange={handleFilterChange}
                  disabled={disabledInputs !== null && disabledInputs !== element.brand} // Deshabilita todos los inputs excepto el seleccionado
                />
              </div>
            </FilterInfo>
          ))}
        </FilterDiv>
        
        <FilterDiv>
          <FilterSubDiv> 
            <h5 style={{width: "100%"}}>Price:</h5>
            <FilterNumInput
              type="number"
              placeholder="minimo"
        
              value={minValue}
              onChange={(e) => setMinValue(Number(e.target.value))}
            />
            <FilterNumInput
              type="number"
              placeholder="maximo"
              
              value={maxValue}
              onChange={(e) => setMaxValue(Number(e.target.value))}
            />
          </FilterSubDiv>
        </FilterDiv>
      </FilterContainer>
    </>
  );
}

export default Filter;