import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPause, faPlay, faPlus, faVolumeMute, faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import img from "../../images/breaking-bad.jpg";
import React, {useContext, useState} from "react";
import ReactPlayer from "react-player";
import apiContext from "../../context/apiContext";

export default function Card(props) {

	const {
		setVolume, LargeDevice, Videos, fetchVideos, getDeviceType
	} = useContext(apiContext)

	const [playVideo, setPlayVideo] = useState(false);
	const [playing, setPlaying] = useState(false);
	const [opacity, setOpacity] = useState(1);
	const [index, setIndex] = useState(0);
	const [trailerVolume, setTrailerVolume] = useState(true);


	//Play / Pause Card Video
	function playCardVideo() {
		fetchVideos(props.keyId)
		if (!Videos?.success === false) {
			setIndex(0)
		}
		setPlaying(true)
		setVolume(false)
		setPlayVideo(true)
	}

	function pauseCardVideo() {
		setOpacity(1)
		setIndex(0)
		setPlayVideo(false)
		setVolume(true)
	}

	function handleVideoEnd() {
		setOpacity(1)
		setPlayVideo(false)
	}

	function setIndexValue() {
		setIndex(1)
	}

	function handleOnReady() {
		setPlaying(true)
	}


	function HandleTrailerVolume() {
		if (trailerVolume) {
			setTrailerVolume(false)
		} else {
			setTrailerVolume(true)
		}
	}

	function handlePlayPauseClick() {
		if (playVideo) {
			setPlayVideo(false)
			setOpacity(1)
		} else {
			setPlayVideo(true)
			setOpacity(0)
		}
	}

	return (<>

		<div style={{zIndex: index ? index : 0}} onMouseOver={setIndexValue} onMouseLeave={pauseCardVideo} id={"box"}
		     className="box">
			<div className="showcase-picture">
				<img onMouseOver={playCardVideo} style={{opacity: opacity, transition: "1s ease-in-out"}}
				     src={props.pictureUrl} alt="..."/>
				{playVideo && getDeviceType() === "desktop" && Videos.length > 0 && <div className={"video-card"}>
					<ReactPlayer style={{marginTop: LargeDevice() ? "0" : "-1.5rem"}}
					             url={"https://youtu.be/" + Videos[0]?.key}
					             width={"100%"}
					             height={"11rem"}
					             onReady={handleOnReady}
					             playing={playing}
					             onEnded={handleVideoEnd}
					             volume={trailerVolume ? 1 : 0}
					/>
				</div>}
			</div>
			<div className="showcase-video-details d-flex align-items-center flex-column">
				<div className="action-buttons d-flex align-items-center gap-1 mb-2">
					<FontAwesomeIcon onClick={handlePlayPauseClick} className="play"
					                 icon={!playVideo ? faPlay : faPause}
					                 color="black"/>
					<FontAwesomeIcon className="plus" icon={faPlus} color="white"/>
					<FontAwesomeIcon onClick={HandleTrailerVolume} size="xs"
					                 icon={trailerVolume ? faVolumeUp : faVolumeMute} className="vol ms-auto"
					                 color={"silver"}/>
					{Videos?.success === false &&
						<p className="default-video-playing">Video not available!</p>}
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