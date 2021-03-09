import './styles.css';

export const InputSearch = (props) => ({
    render() {
        const { value, onChange } = this.props;

        return (
            <input
                className="input-search"
                onChange={onChange}
                type="search"
                value={value}
                placeholder="Type your search"
            />
        );
    }
})