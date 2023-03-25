function TextInputField({ name, label, ...props }) {
    return (
        <>

            <div className='main-info-input'>
                <label htmlFor={name + '-input'}>{label}:</label>
                <input id={name + '-input'}  {...props} />
            </div>
        </>
    )
}

export default TextInputField
