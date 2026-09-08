function TextInputField({ name, label, ...props }) {
    return (
        <>

            <div className='main-info-input'>
                <label htmlFor={name + '-input'}>{label}:</label>
                <input id={name + '-input'} name={name} {...props} />
            </div>
        </>
    )
}

export default TextInputField
