import logo from "../../netflix-logo-navbar.png"
import {useState} from "react";
export default function Navbar() {
	const [color, setColor] = useState(false);

	window.addEventListener('scroll', ()=> {
		if(window.scrollY > 5){
			setColor(true)
		} else {
			setColor(false)
		}
	});

	return(
		<>
			<nav style={{backgroundColor: color ? 'black' : 'transparent'}} className="navbar px-5">
				<div className="logo">
					<img src={logo} className={"navbar-logo"} alt="Logo"/>
				</div>
			</nav>
		</>
	)
}