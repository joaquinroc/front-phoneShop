import React, { useContext, useEffect, useState } from "react";
import { BrandFilterDiv, BrandFilterTitle, FilterContainer, MaxPrice, MinPrice, PriceFilterDiv, RangeInput } from ".";
import { DataContext } from "../../../context/context";
import getBrands from "../../../api/brands";
import { IBrand } from "../../../interface";

function Filter() {
  const [getBrand, setGetBrand] = useState<IBrand[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number>(10000); 

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

  function handleBrandChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    setSelectedBrand(value);
    setFilter({ brand: value, minPrice: 0, maxPrice: priceRange });
  }

  function handlePriceChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value);
    setPriceRange(value);
    setFilter({ brand: selectedBrand, minPrice: 0, maxPrice: value });
  }

  return (
    <>
      <FilterContainer>
        <BrandFilterDiv>
          <BrandFilterTitle>SELECT BRAND:</BrandFilterTitle>
          <select
            id="brand-select"
            value={selectedBrand}
            onChange={handleBrandChange}
          >
            <option value="">ALL BRANDS</option>
            {getBrand.map((element, index) => (
              <option key={index} value={element.brand}>
                {element.brand}
              </option>
            ))}
          </select>
        </BrandFilterDiv>

        <PriceFilterDiv>
          <MinPrice>$0</MinPrice>
          <MaxPrice>${priceRange}</MaxPrice>
          <RangeInput
            type="range"
            id="price-range"
            min="0"
            max="1000"
            value={priceRange}
            onChange={handlePriceChange}
          />
        </PriceFilterDiv>
      </FilterContainer>
      <div>
        
      </div>
    </>
  );
}

export default Filter;
