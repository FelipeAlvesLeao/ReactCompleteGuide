import './Card.css'

function Card(props){
    //example of how to use multiple classes. the space after card is essential because css needs a space between classes to apply multiple
    const classes = 'card ' + props.className;
    //example of how you use props.children to use a component that is purely a functional html tag with styling
    return (<div className={classes}>{props.children}</div>)
}

export default Card;