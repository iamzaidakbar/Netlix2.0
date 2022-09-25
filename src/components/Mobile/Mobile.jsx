import img from "../../images/breaking bad.jpg";
import React, {useContext, useEffect, useState} from "react";
import apiContext from "../../context/apiContext";

export default function Mobile() {

	const {
		fetchTrendingNow,
		randomNumber,
		trendingNow,
		getDeviceType,
		genre,
	} = useContext(apiContext)

	const [RandomNumber, setRandomNumber] = useState(0);

	useEffect(() => {
		fetchTrendingNow().then(r => r)
		const random = randomNumber(19)
		setRandomNumber(random)
		// eslint-disable-next-line
	}, []);

	return(
		<>
			{getDeviceType() === "mobile" && <div className="mobile_wallpaper">
				<img src={trendingNow[RandomNumber]?.poster_path} alt=""/>
				<p>{trendingNow[RandomNumber]?.original_title || trendingNow[RandomNumber]?.original_name || trendingNow[RandomNumber]?.name || "Netflix Originals"}</p>
				<h4> - Dark Comedy - Suspense - Drama - Tragedy - Crime film - Crime TV Genre - Thriller</h4>
			</div>}
			{getDeviceType() === "tablet" && <div className="tablet_wallpaper">
				<img src={trendingNow[RandomNumber]?.backdrop_path} alt=""/>
				<p>{trendingNow[RandomNumber]?.original_title || trendingNow[RandomNumber]?.original_name || trendingNow[RandomNumber]?.name || "Netflix Originals"}</p>
				<h4> - Dark Comedy - Suspense - Drama - Tragedy - Crime film - Crime TV Genre - Thriller</h4>
			</div>

			}

		</>
	)
}