import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

const Landing = () => {
	return (
		<main>
			<nav>
				<img src={logo} alt="jobify" className="logo" />
			</nav>
			<div className="container page">
      {/* info */}
				<div className="info">
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						I'm baby sriracha vexillologist migas health goth seitan plaid
						farm-to-table prism jean shorts fixie wolf mixtape truffaut. Fit offal put
						a bird on it gochujang helvetica, williamsburg chillwave XOXO trust fund
						meggings ascot.
					</p>
          <button className='btn btn-hero'>Login/Register</button>
				</div>
        <img src={main} alt="job hunt" className='img main-img'/>
			</div>
		</main>
	);
};
export default Landing;
