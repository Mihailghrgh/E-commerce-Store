const FormSelect = ({ name, label, list=[], defaultValue, size }) => {

    
  return (
    <div className="form-control mt-2">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize text-primary">{label}</span>
      </label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        className={`select select-bordered ${size}`}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormSelect;
