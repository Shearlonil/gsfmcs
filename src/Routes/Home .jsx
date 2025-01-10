import React from "react";
import Showcase from "../Components/Showcase/Showcase";
import { IoLogoWhatsapp } from "react-icons/io";
import { CgArrowTopRight, CgProfile } from "react-icons/cg";
import { IoStarSharp } from "react-icons/io5";
import IMAGES from "../assets/images-export";
import { Button } from "react-bootstrap";

const Home = () => {
	return (
		<>
			<Showcase>
				<div className="container text-center">
					<h1 className="display-3 mb-5 sora-font fw-bold">
						Bringing to you{" "}
						<br />
						<span className="text-warning fw-bold">NEXT LEVEL</span><br /> in <br /> 
						<span className="text-warning fw-bold">Facility Management</span>{" "}
					</h1>
					<p className="">
						Professional facility management and cleaning services at your finger tips
					</p>
					<a className="btn btn-danger p-3 mt-4" target="_blank" href="https://wa.me/+4915215341962">
						<span className='pe-3'>Chat with us</span>
						<IoLogoWhatsapp size="28" />
					</a>
				</div>
			</Showcase>

			<div className="container mt-5 d-flex flex-column align-items-center">
				<div className="d-flex flex-row gap-1 bg-light border shadow rounded-3 p-2 mb-4">
					<span>
						<IoStarSharp className="text-warning" />
						<IoStarSharp className="text-warning" />
						<IoStarSharp className="text-warning" />
						<IoStarSharp className="text-warning" />
						<IoStarSharp className="text-warning" />
					</span>
					<span className="fw-bold">
						We are simply second to none
					</span>
				</div>
				<h1 className="display-5 mb-4 sora-font fw-bold text-center">WHAT WE DO, <span className="text-danger">WE DO BEST!</span></h1>
				<div className="row">
					<div className="col-md-4 col-sm-12 mb-3">
						<div className="p-4 bg-light border shadow rounded-3">
							<div className="d-flex flex-column justify-content-between" style={{minHeight: "400px"}}>
								<img src={IMAGES.growth} width="50" />
								<h3>Grow with us</h3>
								<p>
									Partnership proposal
								</p>
								<p>
									Partner with us, and together let's navigate the ever changing landscape of facility management, achieving mutual success while staying true to our core values and making a positive impact on the communities we serve.
								</p>
								<a href="" className="btn btn-warning">View Proposal</a>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-12 mb-3">
						<div className="p-4 bg-light border shadow rounded-3">
							<div className="d-flex flex-column justify-content-between" style={{minHeight: "400px"}}>
								<img src={IMAGES.responsibility} width="50" />
								<h3>C S R</h3>
								<p>
									Our Corporate Social Responsiblity
								</p>
								<p>
								God Son Facility Management and Consultancy Services (GSFMCS) is a
								frontrunner in encouraging young talented Athletes to making
								their social and private life better and secured.
								</p>
								<a href="" className="btn btn-success">View CSR</a>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-12 mb-3">
						<div className="p-4 bg-light border shadow rounded-3">
							<div className="d-flex flex-column justify-content-between" style={{minHeight: "400px"}} >
								<img src={IMAGES.officeBranch} width="50" />
								<h3>Our Branches</h3>
								<ul>
									<li>
										<h6>Nigerian Corporate Office</h6>
										<span>Jaguna Leme, Near Sunny Yinka Filling Station, Lemme, Abeokuta, Ogun State</span>
									</li>
									<li>
										<h6>German Corporate Office</h6>
										<p>Schiesstale 3, 71083, Herrenberg, Germany</p>
									</li>
								</ul>
								<a href="" className="btn btn-danger">View Locations</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<br />
       
			<div className="container mt-5 mb-5">
				<div className="row p-2 mb-5 d-flex flex-row align-items-center">
					<div className="col-md-6 col-sm-12 mb-4 d-flex flex-column gap-3">
						<div className="pe-md-4">
							<h6 className="bg-success w-50 text-center rounded text-white p-2 fw-bold sora-font shadow">Machineries</h6>
							<h1 className=" sora-font fw-bold">Access to modern technologies and hardwares</h1>
							<p>As a German-trained Consultant and Cleaners, we are privileged to access the latest cleaning
							technology/technique. We make use of different cleaning materials</p>
							<div className="d-flex flex-column gap-1 bg-light border shadow rounded-3 p-4">
								<div className="d-flex flex-row gap-3 align-items-center">
									<div className="d-flex flex-row align-items-center gap-2 border-end pe-3">
										<CgProfile size={"40"}/>
										<h4>Chief Ibrahim Dende</h4>
									</div>

									<div>
										C.E.0 IBD HOTELS
									</div>
								</div>
								<span>
									<IoStarSharp className="text-warning" />
									<IoStarSharp className="text-warning" />
									<IoStarSharp className="text-warning" />
									<IoStarSharp className="text-warning" />
									<IoStarSharp className="text-warning" />
								</span>
								<p className="text-success fw-bold">
									Due to the input in modern techonogies and machineries used by GSFMCS, their cleaning prowess is second to none
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-sm-12 mb-4 bg-light border shadow rounded-3 p-4 d-flex flex-column justify-content-center align-items-center gap-3">
						<div className="container ps-md-5 pe-md-5">
							<div className="row d-flex flex-row align-items-center">
									<div className="col-2">
										<img src={IMAGES.garbageTruck} width="50" />
									</div>
									<div className="col-10">
										<h5>Garbage Trucks</h5>
									</div>
							</div>
							<hr />
							<div className="row">
									<div className="col-2">
										<img src={IMAGES.roadSweeper} width="50" />
									</div>
									<div className="col-10">
										<h5>Motorized Road Sweepers</h5>
										<ul>
											<li>Waste collector</li>
											<li>Rotating brush sweepers</li>
											<li>Removed trash, debris, dir, leaves etc</li>
										</ul>
									</div>
							</div>
							<hr />
							<div className="row d-flex flex-row align-items-center">
									<div className="col-2">
										<img src={IMAGES.vacuumClearner} width="50" />
									</div>
									<div className="col-10">
										<h5>Industrial Wet Vacuum Cleaners</h5>
									</div>
							</div>
							<hr />
							<div className="row">
									<div className="col-2">
										<img src={IMAGES.clearningTrolley} width="50" />
									</div>
									<div className="col-10">
										<h5>Multipurpose Cleaning Trolley</h5>
										<ul>
											<li>Mop kits</li>
											<li>Color coded pails</li>
											<li>Dust bin</li>
											<li>Storage Drawers</li>
										</ul>
									</div>
							</div>
							<hr />
							<div className="row d-flex flex-row align-items-center">
									<div className="col-2">
										<img src={IMAGES.floorScurbber} width="50" />
									</div>
									<div className="col-10">
										<h5>Floor Scrubbers and Drainers</h5>
									</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row p-2 d-flex flex-row align-items-center flex-md-row-reverse">
					<div className="col-md-6 col-sm-12 mb-4 d-flex flex-column gap-3">
						<div className="ps-md-4">
							<h6 className="bg-primary w-50 text-center rounded text-white p-2 fw-bold sora-font shadow">Cleaning Chemicals</h6>
							<h1 className=" sora-font fw-bold">Quality and environmental friendly cleaning chemicals</h1>
							<p>All cleaning chemicals are European standard certified and they offer the best hygiene possible, while delivering germ-free environment</p>
							<div className="d-flex flex-column gap-1 bg-light border shadow rounded-3 p-4">
								<div className="d-flex flex-row gap-3 align-items-center">
									<div className="d-flex flex-row gap-2 border-end pe-3">
										<CgProfile size={"40"}/>
										<h3>Ibrahim</h3>
									</div>

									<div>
										C.E.0 IBD HOTELS
									</div>
								</div>
								<span>
									<IoStarSharp className="text-warning" />
									<IoStarSharp className="text-warning" />
									<IoStarSharp className="text-warning" />
									<IoStarSharp className="text-warning" />
									<IoStarSharp className="text-warning" />
								</span>
								<p className="text-primary fw-bold">
									Due to the input in modern techonogies and machineries used by GSFMCS, their cleaning prowess is second to none
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-sm-12 mb-4 bg-light border shadow rounded-3 p-4 d-flex flex-column justify-content-center align-items-center gap-3">
						<div className="container ps-md-5 pe-md-5">
							<div className="row d-flex flex-row align-items-center">
								<div className="col-2">
									<img src={IMAGES.cleaningChemical} width="50" />
								</div>
								<div className="col-10">
									<h5>Scrubbing Chemicals</h5>
								</div>
							</div>
							<hr />
							<div className="row d-flex flex-row align-items-center">
								<div className="col-2">
									<img src={IMAGES.polishChemical} width="50" />
								</div>
								<div className="col-10">
									<h5>Polishing Chemicals</h5>
								</div>
							</div>
							<hr />
							<div className="row d-flex flex-row align-items-center">
								<div className="col-2">
									<img src={IMAGES.varnishes} width="50" />
								</div>
								<div className="col-10">
									<h5>Varnishes</h5>
								</div>
							</div>
							<hr />
							<div className="row d-flex flex-row align-items-center">
								<div className="col-2">
									<img src={IMAGES.waxing} width="50" />
								</div>
								<div className="col-10">
									<h5>Waxing Chemicals</h5>
								</div>
							</div>
							<hr />
							<div className="row d-flex flex-row align-items-center">
								<div className="col-2">
									<img src={IMAGES.waxingTwo} width="50" />
								</div>
								<div className="col-10">
									<h5>Colour Protector</h5>
								</div>
							</div>
							<hr />
						</div>
					</div>
				</div>
			</div>
			<div
				id="simpleShinyBg"
				className="d-flex flex-column align-items-center justify-content-center text-light"
			>
				<div className="container py-5">
					<div className="row py-3">
						<div className="col-12 col-md-5 order-1 order-md-0 text-center d-flex justify-content-center align-items-center">
							<div className="p-2">
								<img
									className="rounded-4"
									src={IMAGES.image3}
									alt=""
									height={"500px"}
									style={{
										width: "340px",
										maxWidth: "100%",
									}}
								/>
							</div>
						</div>
						<div className="col-12 col-md-7 order-0 order-md-1 d-flex flex-column align-items-center justify-content-center">
							<div className="p-2">
								<h2 className="display-4 sora-font fw-bold">Our Values</h2>
								<ul>
									<li>
										<h4>Integrity</h4>
										<p>
											We conduct ourselves with honesty, transparency, and ethical principles in all our dealings, earning the trust and respect of our clients, employees, and stakeholders.
										</p>
									</li>
									<li>
										<h4>Innovation</h4>
										<p>
											We embrace creativity and continuous improvement, seeking new and effective solutions to enhance the value we deliver to our clients.
										</p>
									</li>
									<li>
										<h4>Excellence</h4>
										<p>
											We strive for the highest standards in everything we do, exceeding expectations and delivering exceptional results.
										</p>
									</li>
									<li>
										<h4>Client Focus</h4>
										<p>
											We are committed to understanding and exceeding our clients' needs, building long-term partnerships based on mutual trust and collaboration.
										</p>
									</li>
									<li>
										<h4>Social Responsibility</h4>
										<p>
											We recognize our role in contributing to the well-being of the communities we serve, engaging in responsible business practices and supporting worthy causes.
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="contactUsPrev" className="py-5">
				<div className="row container mx-auto">
					<div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
						<div className="">
							<h4>WHY CHOOSE US?</h4>
							<h1 className="display-5 fw-bold">
								We constantly evolve, embrace innovation, and strive to be the best.
							</h1>
							<p>
								Our environment has a large impact on our health and well being,
								an important part of living well is doing our part to take care
								of the environment.
							</p>

							<Button size="lg" variant="warning">
								Contact Us <CgArrowTopRight />
							</Button>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="text-center">
							<img
								src={IMAGES.bucketTools}
								className="rounded-5"
								style={{
									width: "100%",
									maxWidth: "450px",
									height: "100%",
									maxHeight: "600px",
								}}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
