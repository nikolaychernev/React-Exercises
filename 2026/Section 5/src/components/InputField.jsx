export default function InputField({type, onChange}) {
    return (
        <div>
            <label>{type.label}</label>
            <input
                id={type.key}
                value={type.value}
                onChange={onChange}
                type="number">
            </input>
        </div>
    );
}