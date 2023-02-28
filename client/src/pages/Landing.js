import main from '../assets/images/main-alternative.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className="container page">
				{/* info */}
				<div className="info">
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						Pabst readymade heirloom, kinfolk bodega boys asymmetrical marxism vinyl
						gastropub mustache. Hot chicken quinoa semiotics woke JOMO kale chips +1
						hammock tonx listicle.
					</p>
					<Link to='/register' className="btn btn-hero">Login/Register</Link>
				</div>
				<img src={main} alt="job hunt" className="img main-img" />
			</div>
		</Wrapper>
	);
};

export default Landing;
