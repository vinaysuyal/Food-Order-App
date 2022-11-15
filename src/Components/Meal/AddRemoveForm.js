const AddRemoveForm = props => {
    const onChangeEventHandler = (event) => {
        event.preventDefault();
        props.onChange(event.target.value);
    }
    return (
        <form>
            <span><h5 style={{display:'inline'}}>x </h5></span> <input type='number'
            value={props.value}
            onChange={onChangeEventHandler}
             min={0} 
             max={30} 
             step={1}>
             </input>
        </form>
    )
}

export default AddRemoveForm;