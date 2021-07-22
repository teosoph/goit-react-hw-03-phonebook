const FilterInput = ({ value, onChange }) => {
  return (
    <label>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default FilterInput;
