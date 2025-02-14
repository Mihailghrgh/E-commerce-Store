import { formatPrice } from "../utils";
import { useState } from "react";

const FormRange = ({ label, name, size }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);

  return (
    <div className="form-control mt-4 pb-3 md:pb-0 ">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize text-primary">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-primary ${size}`}
        step={step}
      />
    </div>
  );
};
export default FormRange;
