import Card from "../Card/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useContext, useEffect} from "react";
import apiContext from "../../context/apiContext";

export default function GetItOnTheAction() {

	const {
		handleLeftArrowClickRow3,
		handleRightArrowClickRow3,
		handleRow3NegativeCounter,
		handleRow3PositiveCounter,
		handleMouseLeaveRow3,
		handleMouseOverRow3,
		fetchGetItOnTheAction,
		GetItOnTheAction,
		showArrowsRow3,
		MobileDevice,
		row3Counter,
		setTotal,
		genre,
	} = useContext(apiContext)


	useEffect(() => {
		fetchGetItOnTheAction().then(r => r)
		// eslint-disable-next-line
	}, []);


	return (<>
		<div onMouseOver={handleMouseOverRow3} onMouseLeave={handleMouseLeaveRow3} className="popular container-fluid px-5">
			<div className="d-flex justify-content-between">
				<h2 className="text-white lead">Get It On The Action </h2>
			</div>
			<div id="row-3" className="video-menu d-flex gap">
				{GetItOnTheAction && GetItOnTheAction.map((data) => {
					let getPopularity = data.popularity.toString().slice(0, 2);
					return <Card key={data.id}
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
				{showArrowsRow3 && row3Counter > 0 && <FontAwesomeIcon onClick={() => {
					handleLeftArrowClickRow3("row-3");
					handleRow3NegativeCounter()
				}} className="left-arrow" icon={faAngleLeft} size="3x" color="white"/>}
				{showArrowsRow3 && !(row3Counter === setTotal) && <FontAwesomeIcon onClick={() => {
					handleRightArrowClickRow3("row-3");
					handleRow3PositiveCounter()
				}} className="right-arrow" icon={faAngleRight} size="3x" color="white"/>}
			</div>
		</div>
	</>)
}