const FormInput = ({label, name, type, defaultValue , size}) => {
  return (
    <label className="form-control mt-2 ">
      <div className="label">
        <span className="label-text capitalize text-primary">{label}</span>
      </div>
      <input
        type={type}
        placeholder="type here"
        className={`input input-bordered ${size}`}
        defaultValue={defaultValue}
        name={name}
      />
    </label>
  );
}
export default FormInput