import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPause, faPlay, faPlus} from "@fortawesome/free-solid-svg-icons";
import img from "../../images/breaking bad.jpg";
import {useContext, useState} from "react";
import ReactPlayer from "react-player";
import apiContext from "../../context/apiContext";

export default function Card(props) {

	const {
		setVolume,
		LargeDevice,
		Videos,
		fetchVideos,
	} = useContext(apiContext)

	const [playVideo, setPlayVideo] = useState(false);
	const [playing, setPlaying] = useState(false);
	const [opacity, setOpacity] = useState(1);
	const [index, setIndex] = useState(0);




	//Play / Pause Card Video
	function playCardVideo() {
		if (playVideo) {
			setOpacity(1)
			setVolume(true)
			setPlayVideo(false)
		} else {
			setOpacity(0)
			setVolume(false)
			setPlayVideo(true)
		}
	}

	function pauseCardVideo() {
		setOpacity(1)
		setIndex(0)
		setPlayVideo(false)
	}

	function handleVideoEnd() {
		setOpacity(1)
		setPlayVideo(false)
	}

	function setIndexValue() {
		fetchVideos(props.keyId)
		setIndex(1)
		setPlayVideo(true)
	}

	function handleOnReady() {
		setPlaying(true)
	}


	return (<>

		<div style={{zIndex:index ? index : 0}} onMouseOver={setIndexValue} onMouseLeave={pauseCardVideo} id={"box"} className="box">
			<div className="showcase-picture">
				<img style={{opacity: opacity, transition: "1s ease-in-out"}} src={props.pictureUrl} alt="..."/>
				{playVideo && <div className={"video-card"}>
					<ReactPlayer style={{ marginTop: LargeDevice() ? "0" : "-1.5rem"}} url={"https://youtu.be/" + Videos[0].key}
					             width={"100%"}
					             height={"11rem"}
					             onReady={handleOnReady}
					             playing={playing}
					             onEnded={handleVideoEnd}
					             volume={1}
					/>
				</div>}
			</div>
			<div className="showcase-video-details d-flex align-items-center flex-column">
				<div className="action-buttons d-flex align-items-center gap-1 mb-2">
					<FontAwesomeIcon onClick={playCardVideo} className="play" icon={!playVideo ? faPlay : faPause}
					                 color="black"/>
					<FontAwesomeIcon className="plus" icon={faPlus} color="white"/>
				</div>
				<span>
					<p className="video-name ms-auto mb-1">{props.name ? props.name : "Netflix Originals"}</p>
				</span>
				<span className="video-details d-flex align-items-center gap-1">
			           <p className="video-match mb-2">{props.popularity}% Match</p>
			           <p className="video-rating mb-2">{props.vote_average}</p>
			           <p className="video-seasons mb-2">Limited Series</p>
			           <p className="video-quality mb-2">HD</p>
		           </span>
				<span className="video-genre d-flex align-items-center gap-1">
			           <p>{props.genreId1}</p>
			           <p>{props.genreId2}</p>
			           <p>{props.genreId3}</p>
		           </span>
			</div>
		</div>
	</>)
}