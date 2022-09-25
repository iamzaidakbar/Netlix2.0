import Card from "../Card/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useContext, useEffect} from "react";
import apiContext from "../../context/apiContext";

export default function Anime() {

	const {
		handleLeftArrowClickRow4,
		handleRightArrowClickRow4,
		handleRow4NegativeCounter,
		handleRow4PositiveCounter,
		handleMouseLeaveRow4,
		handleMouseOverRow4,
		showArrowsRow4,
		MobileDevice,
		row4Counter,
		fetchAnime,
		setTotal,
		Anime,
		genre,
	} = useContext(apiContext)


	useEffect(() => {
		fetchAnime().then(r => r)
		// eslint-disable-next-line
	}, []);


	return (<>
		<div onMouseOver={handleMouseOverRow4} onMouseLeave={handleMouseLeaveRow4} className="popular container-fluid px-5">
			<div className="d-flex justify-content-between">
				<h2 className="text-white lead">Anime</h2>
			</div>
			<div id="row-4" className="popular-videos d-flex gap">
				{Anime && Anime.map((data) => {
					let getPopularity = data.popularity.toString().slice(0, 2);
					return <Card key={data.id}
					             keyId={data.id}
					             genreId1={genre[data.genre_ids[0]]}
					             genreId2={genre[data.genre_ids[1]]}
					             genreId3={genre[data.genre_ids[2]]}
					             pictureUrl={MobileDevice() ? data.poster_path : data.backdrop_path}
					             vote_average={data.vote_average}
					             popularity={getPopularity}
					             name={data?.name || data?.original_title || data?.original_name}
					/>
				})}
			</div>
			<div className="arrows">
				{showArrowsRow4 && row4Counter > 0 && <FontAwesomeIcon onClick={() => {
					handleLeftArrowClickRow4("row-4");
					handleRow4NegativeCounter()
				}} className="left-arrow" icon={faAngleLeft} size="3x" color="white"/>}
				{showArrowsRow4 && !(row4Counter === setTotal) && <FontAwesomeIcon onClick={() => {
					handleRightArrowClickRow4("row-4");
					handleRow4PositiveCounter()
				}} className="right-arrow" icon={faAngleRight} size="3x" color="white"/>}
			</div>
		</div>
	</>)
}