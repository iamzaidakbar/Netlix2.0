export default function SearchContent(props) {
	return(
		<>
		   <div className="search-content-box mb-5">
			   <img className="search-content-box-image" src={props.img_url} alt=""/>
			   <div className="search-content-box-details">
				   <p className="text-white display-name m-0">{props.media_name}</p>
				   <p className="media-type m-0">{props.media_type} {props.first_air_date && "➡"} {props.first_air_date}</p>
				   <p className="overview m-0">{props.overview}</p>
			   </div>
		   </div>
		</>
	)
}