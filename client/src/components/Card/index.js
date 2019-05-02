import React from "react";
import "./style.css";

const Card = props => (
    <div 
	className="cards" 
	key={props.id}
	onClick={() => props.handleClick(props.id, props.clicked)}
	>
		<img 
		id={props.name}
		src={props.image}
		alt="daisyImg"
		/>
	</div>
);

export default Card;

// col-sm-6 col-md-6 col-lg-3