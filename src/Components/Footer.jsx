import React from "react";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import IMAGES from "../assets/images-export";
import { useAuth } from "../app-context/auth-user-context";

const Footer = () => {

    const { getCurrentYear } = useAuth();

	return (
		<div className="w-100 bg-light mb-0 mt-auto">
			<div className="container py-3">
				<footer className="row py-2">
					<div className="col-12 col-md-4 my-2 mx-auto text-start text-center d-flex align-items-center justify-content-center">
						<Link
							to="/"
							className="d-flex justify-content-center align-items-center me-2"
						>
							<img className="" src={IMAGES.logo} alt="logo" width={"50px"} />
						</Link>
						<p className="mb-0">&copy; {getCurrentYear()} Company, Inc</p>
					</div>
					<ul className="col-12 col-md-4 list-unstyled d-flex justify-content-center gap-3 align-items-center m-0 my-2">
						<li>
							<a
								className="link-body-emphasis"
								target="_blank"
								// href="https://wa.me/+447460716648"
							>
								<IoLogoWhatsapp size="28" />
							</a>
						</li>
						<li>
							<a
								className="link-body-emphasis"
								target="_blank"
								// href="https://www.instagram.com/kiddies_me"
							>
								<IoLogoInstagram size="28" />
							</a>
						</li>
						<li>
							<a
								className="link-body-emphasis"
								target="_blank"
								// href="https://www.linkedin.com/in/kiddies-and-me-childcare-934190300"
							>
								<GrLinkedinOption size="28" />
							</a>
						</li>
						<li>
							<a
								className="link-body-emphasis"
								target="_blank"
								// href="https://www.facebook.com/profile.php?id=100091337111350"
							>
								<FaFacebook size="28" />
							</a>
						</li>
					</ul>
				</footer>
			</div>
		</div>
	);
};

export default Footer;
