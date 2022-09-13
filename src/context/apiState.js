import apiContext from "./apiContext";
import {useState} from "react";

const ApiState = (props) => {


	// Returns Window Screen Sizes
	function LargeDevice() {
		return window.innerWidth > 1900
	}

	function IPadDevice() {
		return window.innerWidth <= 1024 && window.innerWidth > 450
	}

	function MobileDevice() {
		return  window.innerWidth <= 480
	}



	//Calculations for animation
	let oneBoxWidth = LargeDevice() ? 18.6 : 15.5
	let gap = 0.4
	let totalGaps = LargeDevice() ? 6 : 5
	let totalBoxes = 20
	let pageSize = LargeDevice() ? 6 : 5
	let setTotal = Math.floor(totalBoxes / pageSize) - (LargeDevice() ? 0 : 1)
	let onePageWidth = pageSize * oneBoxWidth + gap * totalGaps

	// Timeout for Homepage Video details to resize
	const timeOut = (delay, size) => setTimeout(() => {
		document.getElementById("homeTitle").style.fontSize = size
	}, delay)

	//State Hooks
	const [showArrowsRow1, setShowArrowsRow1] = useState(false);
	const [showArrowsRow2, setShowArrowsRow2] = useState(false);
	const [showArrowsRow3, setShowArrowsRow3] = useState(false);
	const [showArrowsRow4, setShowArrowsRow4] = useState(false);
	const [playVideo, setPlayVideo] = useState(false);
	const [row1Counter, setRow1Counter] = useState(0);
	const [row2Counter, setRow2Counter] = useState(0);
	const [row3Counter, setRow3Counter] = useState(0);
	const [row4Counter, setRow4Counter] = useState(0);
	const [popularVideos, setPopularVideos] = useState([]);
	const [trendingNow, setTrendingNow] = useState([]);
	const [GetItOnTheAction, setGetItOnTheAction] = useState([]);
	const [Anime, setAnimations] = useState([]);
	const [Videos, setGetVideos] = useState([]);
	const [row1Right, setRow1Right] = useState(0);
	const [row2Right, setRow2Right] = useState(0);
	const [row3Right, setRow3Right] = useState(0);
	const [row4Right, setRow4Right] = useState(0);
	const [playing, setPlaying] = useState(false);
	const [volume, setVolume] = useState(false);
	const [opacity, setOpacity] = useState(1);


	// Genre
	let genre = {
		10759: "Action & Adventure",
		16: "Animation",
		35: "Comedy",
		80: "Crime",
		99: "Documentary",
		18: "Drama",
		10751: "Family",
		10762: "Kids",
		9648: "Mystery",
		10763: "News",
		10764: "Reality",
		10765: "Sci-Fi & Fantasy",
		10766: "Soap",
		10767: "Talk",
		10768: "War & Politics",
		37: "Western"
	}

	// Show arrows when mouse over row 1
	function handleMouseOverRow1() {
		setShowArrowsRow1(true)
	}

	// hides arrows when mouse leave row 1
	function handleMouseLeaveRow1() {
		setShowArrowsRow1(false)
	}

	// Show arrows when mouse over row 2
	function handleMouseOverRow2() {
		setShowArrowsRow2(true)
	}

	// hides arrows when mouse leave row 2
	function handleMouseLeaveRow2() {
		setShowArrowsRow2(false)
	}

	// Show arrows when mouse over row 3
	function handleMouseOverRow3() {
		setShowArrowsRow3(true)
	}

	// hides arrows when mouse leave row 3
	function handleMouseLeaveRow3() {
		setShowArrowsRow3(false)
	}

	// Show arrows when mouse over row 3
	function handleMouseOverRow4() {
		setShowArrowsRow4(true)
	}

	// hides arrows when mouse leave row 3
	function handleMouseLeaveRow4() {
		setShowArrowsRow4(false)
	}

	function handleRow1PositiveCounter() {
		setRow1Counter(row1Counter + 1)
	}

	function handleRow1NegativeCounter() {
		setRow1Counter(row1Counter - 1)
	}

	function handleRow2PositiveCounter() {
		setRow2Counter(row2Counter + 1)
	}

	function handleRow2NegativeCounter() {
		setRow2Counter(row2Counter - 1)
	}

	function handleRow3PositiveCounter() {
		setRow3Counter(row3Counter + 1)
	}

	function handleRow3NegativeCounter() {
		setRow3Counter(row3Counter - 1)
	}

	function handleRow4PositiveCounter() {
		setRow4Counter(row4Counter + 1)
	}

	function handleRow4NegativeCounter() {
		setRow4Counter(row4Counter - 1)
	}

	// Resize Video details on End
	function handleEnd() {
		timeOut(2000, '10rem')
		setOpacity(1)
		setPlaying(false)
	}


	// PLay or Pause Video
	function playPauseVideo() {
		if (playing) {
			setPlaying(false)
			setOpacity(1)
		} else {
			setPlaying(true)
			setOpacity(0)
		}
	}

	// Handles volume of video
	function handleVolume() {
		if (volume) {
			setVolume(false)
		} else {
			setVolume(true)
		}
	}

	// Detects when netflix tab is focused
	document.addEventListener("visibilitychange", () => {
		if (document.visibilityState === 'hidden') {
			setVolume(false)
			setPlaying(false)
			setOpacity(1)
		} else {
			setVolume(true)
			setPlaying(true)
			setOpacity(0)
		}
	})

	// Changes volume on Scroll down
	window.addEventListener('scroll', () => {
		if (window.scrollY > 300) {
			setVolume(false)
			setPlaying(false)
			setOpacity(1)
		} else {
			setVolume(true)
			setPlaying(true)
			setOpacity(0)
		}
	});

	// Resize Description
	if (playing) {
		timeOut(1000, "6rem")
	} else {
		timeOut(1500, "10rem")
	}

	//Play / Pause Card Video

	function playPauseCardVideo() {
		setPlayVideo(true)
	}

	// Animate Rows 1
	function handleRightArrowClickRow1(id) {
		document.getElementById(id).style.marginLeft = row1Right - onePageWidth + "rem"
		setRow1Right(row1Right - onePageWidth)
	}

	function handleLeftArrowClickRow1(id) {
		document.getElementById(id).style.marginLeft = row1Right + onePageWidth + "rem"
		setRow1Right(row1Right + onePageWidth)
	}

	// Animate Rows 2
	function handleRightArrowClickRow2(id) {
		document.getElementById(id).style.marginLeft = row2Right - onePageWidth + "rem"
		setRow2Right(row2Right - onePageWidth)
	}

	function handleLeftArrowClickRow2(id) {
		document.getElementById(id).style.marginLeft = row2Right + onePageWidth + "rem"
		setRow2Right(row2Right + onePageWidth)
	}

	// Animate Rows 3
	function handleRightArrowClickRow3(id) {
		document.getElementById(id).style.marginLeft = row3Right - onePageWidth + "rem"
		setRow3Right(row3Right - onePageWidth)
	}

	function handleLeftArrowClickRow3(id) {
		document.getElementById(id).style.marginLeft = row3Right + onePageWidth + "rem"
		setRow3Right(row3Right + onePageWidth)
	}

	// Animate Rows 3
	function handleRightArrowClickRow4(id) {
		document.getElementById(id).style.marginLeft = row4Right - onePageWidth + "rem"
		setRow4Right(row4Right - onePageWidth)
	}

	function handleLeftArrowClickRow4(id) {
		document.getElementById(id).style.marginLeft = row4Right + onePageWidth + "rem"
		setRow4Right(row4Right + onePageWidth)
	}


	// Api Call
	// Popular on Netflix
	const fetchPopular = async () => {
		await fetch('https://api.themoviedb.org/3/tv/popular?api_key=890b1191453c654b1dceeaba2f52c3a4')
			.then((response) => response.json())
			.then((data) => {
				for (const e of data.results) {
					e.backdrop_path = "https://image.tmdb.org/t/p/w500" + e.backdrop_path
					e.poster_path = "https://image.tmdb.org/t/p/w500" + e.poster_path
				}
				setPopularVideos(data.results)
			});
	}


	// Trending Now
	const fetchTrendingNow = async () => {
		await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=890b1191453c654b1dceeaba2f52c3a4')
			.then((response) => response.json())
			.then((data) => {
				for (const e of data.results) {
					e.backdrop_path = "https://image.tmdb.org/t/p/w500" + e.backdrop_path
					e.poster_path = "https://image.tmdb.org/t/p/w500" + e.poster_path
				}
				setTrendingNow(data.results)
			});
	}

	// Get It On The Action
	const fetchGetItOnTheAction = async () => {
		await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=890b1191453c654b1dceeaba2f52c3a4')
			.then((response) => response.json())
			.then((data) => {
				for (const e of data.results) {
					e.backdrop_path = "https://image.tmdb.org/t/p/w500" + e.backdrop_path
					e.poster_path = "https://image.tmdb.org/t/p/w500" + e.poster_path
				}
				setGetItOnTheAction(data.results)
			});
	}


	// Videos
	const fetchVideos = async (key) => {
		await fetch('https://api.themoviedb.org/3/tv/' + key + '/videos?api_key=890b1191453c654b1dceeaba2f52c3a4')
			.then((response) => response.json())
			.then((data) => {
				if(data.results === undefined){
					data.results = [
						{key : "ZFnuI3rZPaA"}
					]
				}
				setGetVideos(data.results)
			});
	}

	//Animation
	const fetchAnime = async (key) => {
		await fetch('https://api.themoviedb.org/3/discover/movie?api_key=890b1191453c654b1dceeaba2f52c3a4&with_genres=16')
			.then((response) => response.json())
			.then((data) => {
				for (const e of data.results) {
					e.backdrop_path = "https://image.tmdb.org/t/p/w500" + e.backdrop_path
					e.poster_path = "https://image.tmdb.org/t/p/w500" + e.poster_path
				}
				setAnimations(data.results)
			});
	}


	return (<apiContext.Provider
		value={{
			handleRow1PositiveCounter,
			handleRow4NegativeCounter,
			handleRow4PositiveCounter,
			handleRow1NegativeCounter,
			handleRow2PositiveCounter,
			handleRow2NegativeCounter,
			handleRightArrowClickRow1,
			handleRow3NegativeCounter,
			handleRightArrowClickRow2,
			handleRow3PositiveCounter,
			handleRightArrowClickRow3,
			handleLeftArrowClickRow3,
			handleLeftArrowClickRow1,
			handleLeftArrowClickRow2,
			handleRightArrowClickRow4,
			handleLeftArrowClickRow4,
			fetchGetItOnTheAction,
			handleMouseLeaveRow4,
			handleMouseLeaveRow2,
			handleMouseLeaveRow1,
			handleMouseLeaveRow3,
			handleMouseOverRow4,
			handleMouseOverRow1,
			handleMouseOverRow2,
			handleMouseOverRow3,
			playPauseCardVideo,
			setShowArrowsRow3,
			setShowArrowsRow4,
			GetItOnTheAction,
			fetchTrendingNow,
			showArrowsRow1,
			showArrowsRow2,
			showArrowsRow3,
			showArrowsRow4,
			playPauseVideo,
			popularVideos,
			setRow4Counter,
			MobileDevice,
			fetchPopular,
			handleVolume,
			fetchAnime,
			LargeDevice,
			fetchVideos,
			row1Counter,
			row2Counter,
			row3Counter,
			row4Counter,
			trendingNow,
			oneBoxWidth,
			setPlaying,
			IPadDevice,
			totalBoxes,
			setVolume,
			row1Right,
			handleEnd,
			playVideo,
			totalGaps,
			setTotal,
			pageSize,
			playing,
			opacity,
			Videos,
			volume,
			Anime,
			genre,
			gap,
		}}>
		{props.children}
	</apiContext.Provider>)

}

export default ApiState;