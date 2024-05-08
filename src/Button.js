function Button({text, handleClick}) {
    return (
        <button className="button-53 mt-3" onClick={(e) => handleClick(e.target.innerHTML)}>{text}</button>
    )
}

export default Button;