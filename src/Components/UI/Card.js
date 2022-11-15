import './Card.css'
const Card = props => {
    const classes = 'card-component '+props.className;
    return(
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;