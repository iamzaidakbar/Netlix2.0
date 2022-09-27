import logo from "../../netflix-logo-navbar.png"
import {useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import avatar_zaid from "../../images/avatar_zaid.png"
import avatar_ubaid from "../../images/avatar_ubaid.png"
import apiContext from "../../context/apiContext";
import SearchContent from "../SearchContent/searchContent";

export default function Navbar() {

	let {
		color,
		Search,
		focusIn,
		focusOut,
		urlParam,
		setVolume,
		setPlaying,
		searchQuery,
		processChange,
		searchContent,
		setSearchQuery,
		setSearchContent,
	} = useContext(apiContext)


	function handleChange(event) {
		setSearchQuery(event.target.value)
		if (event.target.value) {
			processChange()
			document.getElementById('body-content').style.display = 'none'
			setSearchContent(false)
			setVolume(false)
			setPlaying(false)
		} else {
			document.getElementById('body-content').style.display = 'unset'
			setSearchContent(true)
		}
	}

	function getAvatar() {
		if (urlParam === 'zaidakbar') {
			return avatar_zaid
		} else if (urlParam === 'ubaidmanzoor') {
			return avatar_ubaid
		} else if (urlParam === 'guest') {
			return avatar_zaid
		}
	}

	function getDisplayName() {
		if (urlParam === 'zaidakbar') {
			return "ZA"
		} else if (urlParam === 'ubaidmanzoor') {
			return 'UB'
		} else if (urlParam === 'guest') {
			return "GU"
		}
	}

	return (<>
		<nav style={{backgroundColor: color ? '#141414' : 'transparent'}} className="navbar px-5">
			<div className="logo">
				<img src={logo} className={"navbar-logo"} alt="Logo"/>
			</div>
			<ul className="me-auto">
				<li className="nav-item">
					<a className="nav-link text-white" id="popular" href="#">Popular</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-white" href="#">Anime</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-white" href="#">Trending Now</a>
				</li>
				<li className="nav-item">
					<a className="nav-link text-white" href="#">Action</a>
				</li>

			</ul>
			<div className="action-buttons d-flex align-items-center">
					<span style={{position: "relative"}} className="d-flex searchBar align-items-center">
						<input onFocus={focusIn} onBlur={focusOut} onChange={handleChange}
						       value={searchQuery} type="text" className="rounded-0 search-input"
						       placeholder="Tv Shows, Movies, Peoples"/>
						<FontAwesomeIcon id="search-icon" className="search-icon" color="white" icon={faSearch}/>
					</span>
				<span className="d-flex ms-2 gap-2 avatar align-items-center">
					<img src={getAvatar() ? getAvatar() : avatar_ubaid} className="avatar_img" alt=""/>
					<p className='avatar-display-name'>{getDisplayName() ? getDisplayName() : "UB"}</p>
				</span>
			</div>
		</nav>


		{/*	Search Wrapper*/}
		{!searchContent && <span id="search-body" className="search-body-wrapper d-flex flex-wrap mb-5">
				{Search && Search.map(data => {
					return <SearchContent key={data.id} media_type={data.media_type === 'movie' ? "Movie " : "TV"} first_air_date={data.first_air_date} overview={data.overview}
					                      media_name={data.original_title || data.original_name || data.name} img_url={data.backdrop_path}/>
				})}
			</span>}
	</>)
}

