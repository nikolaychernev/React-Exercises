export default function Button({label, hasBackground = true, classes = "", ...props}) {
    if (hasBackground) {
        classes += " px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100";
    } else {
        classes += " text-stone-600 hover:text-stone-950";
    }

    return (
        <button {...props} className={classes}>
            {label}
        </button>
    );
}