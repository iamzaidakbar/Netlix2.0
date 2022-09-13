import './App.css';
import Navbar from "./components/Navbar/navbar";
import Player from "./components/VideoPlayer/player";
import video from "./SayMyName.mp4"
import Popular from "./components/Popular/popular";
import img from './images/breaking bad.jpg'
import ApiState from "./context/apiState";
import TrendingNow from "./components/TrendingNow/trendingNow";
import GetItOnTheAction from "./components/GetItOnTheAction/getItOnTheAction";
import Footer from "./components/Footer/footer";
import mobile_wallpaper from "./images/breaking-bad-Mobile.jpg"
import Anime from "./components/Anime/Anime";

const videoName = "Breaking Bad"
const description = 'Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.'

function App() {

	return (<div className="App">
		<ApiState>
			<Navbar/>
			<Player url={video}
			          imgUrl={img}
			          videoName={videoName}
			          description={description}
			          showPlayButton={true}
			          width={"100%"}
			          height={"100%"}/>
			<div className="collection">
				<div className="mobile_wallpaper">
					<img src={mobile_wallpaper} alt=""/>
					<p>Breaking Bad</p>
					<h4> - Dark Comedy - Suspense - Drama - Tragedy - Crime film - Crime TV Genre - Thriller</h4>
				</div>
				<Popular/>
				<Anime/>
				<TrendingNow/>
				<GetItOnTheAction/>
				<Footer/>
			</div>
		</ApiState>
	</div>);
}

export default App;
