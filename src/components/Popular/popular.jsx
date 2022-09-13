import Card from "../Card/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useContext, useEffect} from "react";
import apiContext from "../../context/apiContext";

export default function Popular() {

	const {
		handleLeftArrowClickRow1,
		handleRightArrowClickRow1,
		handleRow1NegativeCounter,
		handleRow1PositiveCounter,
		handleMouseLeaveRow1,
		handleMouseOverRow1,
		showArrowsRow1,
		popularVideos,
		fetchPopular,
		MobileDevice,
		row1Counter,
		setTotal,
		genre,
	} = useContext(apiContext)


	useEffect(() => {
		fetchPopular().then(r => r)
		// eslint-disable-next-line
	}, []);


	return (<>
		<div onMouseOver={handleMouseOverRow1} onMouseLeave={handleMouseLeaveRow1} className="popular container-fluid px-5">
			<div className="d-flex justify-content-between">
				<h2 className="text-white lead">Popular On Netflix</h2>
			</div>
			<div id="row-1" className="popular-videos d-flex gap">
				{popularVideos && popularVideos.map((data) => {
					let getPopularity = data.popularity.toString().slice(0, 2);
					return <Card key={data.id}
					             keyId={data.id}
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
				{showArrowsRow1 && row1Counter > 0 && <FontAwesomeIcon onClick={() => {
					handleLeftArrowClickRow1("row-1");
					handleRow1NegativeCounter()
				}} className="left-arrow" icon={faAngleLeft} size="3x" color="white"/>}
				{showArrowsRow1 && !(row1Counter === setTotal) && <FontAwesomeIcon onClick={() => {
					handleRightArrowClickRow1("row-1");
					handleRow1PositiveCounter()
				}} className="right-arrow" icon={faAngleRight} size="3x" color="white"/>}
			</div>
		</div>
	</>)
}