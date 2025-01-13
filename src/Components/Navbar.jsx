import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import IMAGES from "../assets/images-export";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function NavBar() {
	const navigate = useNavigate();
	const [expanded, setExpanded] = useState(false);

	const handleToggle = () => {
		setExpanded(!expanded);
	};

	const handleNavSelect = () => {
		setExpanded(false); // Close the navbar on selection (for mobile)
	};

	return (
		<Navbar
			collapseOnSelect={true}
			expanded={expanded}
			onToggle={handleToggle}
			expand="lg"
			className="bg-light py-1 shadow-sm navbar-white sora-font fw-bold"
		>
			<Container>
				<Navbar.Brand className="fw-bold fs-4 d-flex align-items-end">
					<img src={IMAGES.logo} width={"80px"} height={"40px"} alt="" className="d-inline-block align-text-top pb-2 px-2" />
					<span className="fw-bold navy-blue">GS</span>FMCS
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto">
						<Nav.Link
							onClick={() => {
								handleNavSelect();
								navigate("/");
							}}
						>
							<span className="navy-blue">Home</span>
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								handleNavSelect();
								navigate("/csr");
							}}
						>
							<span className="navy-blue">CSR</span>
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								handleNavSelect();
								navigate("/about-us");
							}}
						>
							<span className="navy-blue">About Us</span>
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								handleNavSelect();
								navigate("/join-us");
							}}
						>
							<span className="navy-blue">Join Us</span>
						</Nav.Link>

						<Nav.Link
							onClick={() => {
								handleNavSelect();
								navigate("/gallery");
							}}
						>
							<span className="navy-blue">Gallery</span>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
