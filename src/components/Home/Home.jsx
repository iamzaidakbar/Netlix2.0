import Navbar from "../Navbar/navbar";
import Player from "../VideoPlayer/player";
import video from "../../SayMyName.mp4";
import img from "../../images/breaking-bad.jpg";
import Mobile from "../Mobile/Mobile";
import Popular from "../Popular/popular";
import Anime from "../Anime/Anime";
import TrendingNow from "../TrendingNow/trendingNow";
import GetItOnTheAction from "../GetItOnTheAction/getItOnTheAction";
import Footer from "../Footer/footer";
import React from "react";

const videoName = "Breaking Bad"
const description = 'Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.'


export default function Home(){
	return(
		<>
			<Navbar/>
			<span id="body-content">
				<Player   url={video}
				          imgUrl={img}
				          videoName={videoName}
				          description={description}
				          showPlayButton={true}
				          width={"100%"}
				          height={"100%"}/>
			<div className="collection">
				<Mobile/>
				<Popular/>
				<Anime/>
				<TrendingNow/>
				<GetItOnTheAction/>
				<Footer/>
			</div>
			</span>
		</>
	)
}