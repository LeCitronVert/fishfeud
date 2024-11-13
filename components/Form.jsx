const Form = ({ formSubmitHandler }) => {
    return (
        <form className="form-wrapper" onSubmit={formSubmitHandler}>
            <input type="text" name="search" placeholder="Type to make a guess !" />
            <button type="submit">This ?</button>
        </form>
    );
}

export default Form;