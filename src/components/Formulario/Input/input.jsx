export function Input({ name, type, placeholder }) {
  return (
    <div className="form__filds">
      <input name={name} type={type} placeholder={placeholder} />
    </div>
  );
}
