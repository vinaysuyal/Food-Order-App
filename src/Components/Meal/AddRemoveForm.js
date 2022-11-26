const AddRemoveForm = (props) => {
  const onChangeEventHandler = (event) => {
    event.preventDefault();
    if(event.target.name === '+')
        props.onChange(props.value + 1);
    else if(props.value == 0) return;
    else props.onChange(props.value - 1);
    //props.onChange(event.target.value);
  };
  return (
    <>
    <div className="addRemoveForm">
      <button onClick={onChangeEventHandler} name='-'>-</button>
      <span>{props.value}</span>
      <button onClick={onChangeEventHandler} name='+'>+</button>
    </div>
    </>
  );
};

export default AddRemoveForm;
