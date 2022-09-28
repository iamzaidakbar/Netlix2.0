import avatar_one from "../../images/avatar_zaid.png"
import avatar_two from "../../images/avatar_ubaid.png"
import { Link } from "react-router-dom";
import {useContext} from "react";
import apiContext from "../../context/apiContext";

export default function ChooseAvatar() {


	const {
		setUrlParam, setUrl
	} = useContext(apiContext)


	return (
		<>
			<div className="choose-avatar">
				<h2 className="text-white">Who's watching?</h2>
				<div className="d-flex flex-column gap-2 me-3">
					<Link to="home" onClick={()=>{
						setUrl(1)
					}} className="nav-link">
					<img src={avatar_one} alt=""/>
					<p className="mt-2">Zaid Akbar</p>
					</Link>
				</div>
				<div className="d-flex flex-column gap-2 me-3">
					<Link to="home" onClick={()=>{
						setUrl(2)
					}} className="nav-link">
						<img src={avatar_two} alt=""/>
						<p className="mt-2">Ubaid Manzoor</p>
					</Link>
				</div>
				<div className="d-flex flex-column gap-2 me-3">
					<Link to="home" onClick={()=>{
						setUrl(3)
					}} className="nav-link">
						<img src={avatar_one} alt=""/>
						<p className="mt-2">Guest</p>
					</Link>
				</div>
			</div>
		</>
	)
}