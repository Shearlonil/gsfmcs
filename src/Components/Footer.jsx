import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import Select from "react-select";
import i18n from 'i18next';

import IMAGES from "../assets/images-export";
import { useAuth } from "../app-context/auth-user-context";

const Footer = () => {

    const { getCurrentYear } = useAuth();

	const [lngs] = useState([  
	  { value: 'en', label: 'English' },  
	  { value: 'de', label: 'German' },  
	]);

	const [selectedLng, setSelectedLng] = useState(lngs[0]);
	
	const handleLangChange = async (selected) => {
		// https://blog.openreplay.com/async-data-fetching-with-react-select/
		setSelectedLng(selected);
		i18n.changeLanguage(selected.value)
	};

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
					<Select
						menuPlacement="top"
						onChange={handleLangChange}
						value={selectedLng}
						options={lngs}
						className="col-12 col-md-4 ps-5 pe-5"
					/>
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
