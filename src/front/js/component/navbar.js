import React, { useContext } from "react";
import "../../styles/navbar.css"
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions} = useContext(Context);
	return (
	  <nav className="navbar">
		<div className="text-wrapper">Main Course</div>
		
	
		<div className="sign-up-button">
		<Link className= 'nav-link' to="/signup">Sign Up</Link>
		</div>
		
		<div className="log-in-button">
			{!store.token?

		<Link className= 'nav-link' to="/login">Log In</Link>
		:
		<button onClick={() => actions.logout()} className="btn">Log out</button>
	}
		</div>

	  </nav>
	);
  };
