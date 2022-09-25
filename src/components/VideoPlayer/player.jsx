import React, {useContext} from 'react'
import ReactPlayer from 'react-player'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPause, faPlay, faVolumeMute, faVolumeUp} from "@fortawesome/free-solid-svg-icons"
import apiContext from "../../context/apiContext";

export default function Player(props) {

	const {
		opacity,
		playing,
		handleEnd,
		volume,
		playPauseVideo,
		handleVolume,
		isTablet,getDeviceType,

	} = useContext(apiContext)

	return (
		<>
			{getDeviceType() === "desktop" && <div className="video-player">
				{props.imgUrl &&
					<img style={{opacity: opacity}} id="homepage-image" src={props.imgUrl} className="homepage-image"
					     alt=""/>}
				<ReactPlayer
					url={props.url}
					width={props.width}
					height={props.height}
					playing={playing}
					controls={false}
					onEnded={handleEnd}
					volume={volume ? 1 : 0}
					playsinline={true}/>


				<div id="video-actions" className="videoActions">
					<div>
						{props.videoName && <h1 id={"homeTitle"}>{props.videoName}</h1>}
						{props.description && <p>{props.description}</p>}
						{props.showPlayButton &&
							<button onClick={playPauseVideo} className="play-home-button"><FontAwesomeIcon
								className="me-3"
								icon={playing ? faPause : faPlay}
								size={"lg"}
								color="black"/>{playing ? "Pause" : "Play"}
							</button>}
					</div>
				</div>

				<div onClick={handleVolume} className="volume">
					<FontAwesomeIcon icon={volume ? faVolumeUp : faVolumeMute} className="volumeIcon"
					                 color={"white"}/>
				</div>
			</div>}
		</>)
}