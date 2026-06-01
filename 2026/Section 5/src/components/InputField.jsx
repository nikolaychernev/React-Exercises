export default function InputField({type, onChange}) {
    function handleChange(event) {
        onChange(event.target.id, event.target.value);
    }

    return (
        <div>
            <label>{type.label}</label>
            <input
                id={type.key}
                value={type.value}
                onChange={handleChange}
                type="number">
            </input>
        </div>
    );
}