import './styles.css';

export const InputSearch = ({ value, onChange }) => {
  return (
    <input
      className="input-search"
      onChange={onChange}
      type="search"
      value={value}
      placeholder="Type your search"
    />
  )
}