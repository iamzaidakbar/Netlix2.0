export default function Footer() {

	const LINKEDIN_PROFILE = "https://www.linkedin.com/in/zaidakbar"
	return(
		<>
		   <div className="footer d-flex flex-column text-center gap-2 justify-content-center text-white mb-5">
			     <a className="nav-link" rel="noreferrer"  target="_blank" href={LINKEDIN_PROFILE}>Made by Zaid Akbar</a>
			     <p>iamzaidakbar@gmail.com</p>
		   </div>
		</>
	)
}