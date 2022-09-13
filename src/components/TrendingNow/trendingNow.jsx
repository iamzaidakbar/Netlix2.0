import Card from "../Card/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useContext, useEffect} from "react";
import apiContext from "../../context/apiContext";

export default function TrendingNow() {

	const {
		handleRow2PositiveCounter,
		handleRow2NegativeCounter,
		handleLeftArrowClickRow2,
		handleRightArrowClickRow2,
		handleMouseLeaveRow2,
		handleMouseOverRow2,
		fetchTrendingNow,
		showArrowsRow2,
		MobileDevice,
		trendingNow,
		row2Counter,
		setTotal,
		genre,
	} = useContext(apiContext)


	useEffect(() => {
		fetchTrendingNow().then(r => r)
		// eslint-disable-next-line
	}, []);


	return (<>
		<div onMouseOver={handleMouseOverRow2} onMouseLeave={handleMouseLeaveRow2} className="popular container-fluid px-5">
			<div className="d-flex justify-content-between">
				<h2 className="text-white lead">Trending Now</h2>
			</div>
			<div id="row-2" className="popular-videos d-flex gap">
				{trendingNow && trendingNow.map((data) => {
					let getPopularity = data.popularity.toString().slice(0, 2);
					return <Card key={data.id}
					             genreId1={genre[data.genre_ids[0]]}
					             genreId2={genre[data.genre_ids[1]]}
					             genreId3={genre[data.genre_ids[2]]}
					             pictureUrl={MobileDevice() ? data.poster_path : data.backdrop_path}
					             vote_average={data.vote_average}
					             popularity={getPopularity}
					             name={data.name}
					/>
				})}
			</div>
			<div className="arrows">
				{showArrowsRow2 && row2Counter > 0 && <FontAwesomeIcon onClick={() => {
					handleLeftArrowClickRow2("row-2");
					handleRow2NegativeCounter()
				}} className="left-arrow" icon={faAngleLeft} size="3x" color="white"/>}
				{showArrowsRow2 && !(row2Counter === setTotal) && <FontAwesomeIcon onClick={() => {
					handleRightArrowClickRow2("row-2");
					handleRow2PositiveCounter()
				}} className="right-arrow" icon={faAngleRight} size="3x" color="white"/>}
			</div>
		</div>
	</>)
}