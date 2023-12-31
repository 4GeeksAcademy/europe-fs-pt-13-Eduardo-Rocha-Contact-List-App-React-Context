import React, { useContext } from "react";
import { Link} from "react-router-dom";

export const ContactCard = (props) => {
	return (
		<div className="container">
            <div>
                <img src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"></img>
            </div>
            <div className="info">
                <h1>{props.name}</h1>
                <div className="iconinfo">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>{props.address}</span>
                </div>
                <div className="iconinfo">
                    <i className="fa-solid fa-phone"></i>
                    <span>{props.phone}</span>
                </div>
                <div className="iconinfo">
                    <i className="fa-solid fa-envelope"></i>
                    <span>{props.email}</span>
                </div>
            </div>
            <div className="rightIcons">
            	<Link to={"/edit/" + props.idx}>
					<button className="btn btn-outline-black">
						<i className="fa-solid fa-pencil"></i>
					</button>
				</Link>

                <button onClick={() => props.deleteContact(props.contactID)}  className="btn btn-outline-black" ><i className="fa-solid fa-trash-can fa-1x"></i></button>

            </div>
        </div>
    )
};
