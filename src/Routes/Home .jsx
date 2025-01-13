import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { IoLogoWhatsapp } from "react-icons/io";
import { CgArrowTopRight, CgProfile } from "react-icons/cg";
import { IoStarSharp } from "react-icons/io5";
import Showcase from "../Components/Showcase/Showcase";
import IMAGES from "../assets/images-export";

const Home = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();

	return (
		<>
			<Showcase>
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-sm-12 p-4 d-flex flex-column align-items-center align-items-md-start justify-content-center text-center text-md-start">
							<h1 className="display-5 sora-font fw-bold">
								<span className="text-warning fw-bold sora-font">{t('homePage.nextLevel')}</span> in <br /> 
								<span className="text-warning fw-bold">Facility Management</span>{" "}
							</h1>
							<p className="">
								{t('homePage.paragraph')}
							</p>
							<a className="btn btn-warning p-3 mt-4" target="_blank" href="https://wa.me/+4915215341962">
								<span className='pe-3'>{t('homePage.chatWithUs')}</span>
								<IoLogoWhatsapp size="28" />
							</a>
						</div>
						<div className="col-md-8 col-sm-12">
							<img src={IMAGES.aiGeneratedCleaningMachingTwo} width="100%" />
						</div>
					</div>
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
						{t('homePage.secondToNone')}
					</span>
				</div>
				<h1 className="display-5 mb-4 sora-font fw-bold text-center">{t('homePage.whatWeDo')} <span className="text-danger">{t('homePage.weDoBest')}</span></h1>
				<div className="row">
					<div className="col-md-4 col-sm-12 mb-3">
						<div className="p-4 bg-light border shadow rounded-3">
							<div className="d-flex flex-column justify-content-between" style={{minHeight: "400px"}}>
								<img src={IMAGES.growth} width="50" />
								<h3>{t('homePage.grow')}</h3>
								<p>
									{t('homePage.growColH')}
								</p>
								<p>
									{t('homePage.growColP')}
								</p>
								<a onClick={() => navigate('/join-us')} className="btn btn-warning">{t('homePage.growColBtn')}</a>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-12 mb-3">
						<div className="p-4 bg-light border shadow rounded-3">
							<div className="d-flex flex-column justify-content-between" style={{minHeight: "400px"}}>
								<img src={IMAGES.responsibility} width="50" />
								<h3>C S R</h3>
								<p>
									{t('homePage.csrColH')}
								</p>
								<p>
									{t('homePage.csrColP')}
								</p>
								<a onClick={() => navigate('/csr')} className="btn btn-success">
									{t('homePage.csrColBtn')}
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-12 mb-3">
						<div className="p-4 bg-light border shadow rounded-3">
							<div className="d-flex flex-column justify-content-between" style={{minHeight: "400px"}} >
								<img src={IMAGES.officeBranch} width="50" />
								<h3>{t('homePage.branches')}</h3>
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
							<h6 className="bg-success w-50 text-center rounded text-white p-2 fw-bold sora-font shadow">{t('homePage.machineries')}</h6>
							<h1 className=" sora-font fw-bold">{t('homePage.machineriesH')}</h1>
							<p>{t('homePage.machineriesP')}</p>
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
									{t('homePage.machineriesTestimonial')}
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-sm-12 mb-4 bg-light border shadow rounded-3 pt-4 pb-4 d-flex flex-column justify-content-center align-items-center gap-3">
						<div className="container ps-md-5 pe-md-5">
							<div className="row d-flex flex-row align-items-center gap-1">
									<div className="col-2">
										<img src={IMAGES.garbageTruck} width="50" />
									</div>
									<div className="col-9">
										<h5>{t('homePage.garbageTruck')}</h5>
									</div>
							</div>
							<hr />
							<div className="row">
									<div className="col-2">
										<img src={IMAGES.roadSweeper} width="50" />
									</div>
									<div className="col-10">
										<h5>{t('homePage.roadSweepers')}</h5>
										<ul>
											<li>{t('homePage.roadSweeperPointOne')}</li>
											<li>{t('homePage.roadSweeperPointTwo')}</li>
											<li>{t('homePage.roadSweeperPointThree')}</li>
										</ul>
									</div>
							</div>
							<hr />
							<div className="row d-flex flex-row align-items-center gap-1">
									<div className="col-2">
										<img src={IMAGES.vacuumClearner} width="50" />
									</div>
									<div className="col-9">
										<h5>{t('homePage.vacuumCleaners')}</h5>
									</div>
							</div>
							<hr />
							<div className="row">
									<div className="col-2">
										<img src={IMAGES.clearningTrolley} width="50" />
									</div>
									<div className="col-9">
										<h5>{t('homePage.cleaningTrolley')}</h5>
										<ul>
											<li>{t('homePage.cleaningTrolleyPointOne')}</li>
											<li>{t('homePage.cleaningTrolleyPointTwo')}</li>
											<li>{t('homePage.cleaningTrolleyPointThree')}</li>
											<li>{t('homePage.cleaningTrolleyPointFour')}</li>
										</ul>
									</div>
							</div>
							<hr />
							<div className="row d-flex flex-row align-items-center">
									<div className="col-2">
										<img src={IMAGES.floorScurbber} width="50" />
									</div>
									<div className="col-10">
										<h5>{t('homePage.floorScrubbers')}</h5>
									</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row p-2 d-flex flex-row align-items-center flex-md-row-reverse">
					<div className="col-md-6 col-sm-12 mb-4 d-flex flex-column gap-3">
						<div className="ps-md-4">
							<h6 className="bg-primary w-50 text-center rounded text-white p-2 fw-bold sora-font shadow">{t('homePage.cleaningChemical')}</h6>
							<h1 className=" sora-font fw-bold">{t('homePage.cleaningChemicalH')}</h1>
							<p>{t('homePage.cleaningChemicalP')}</p>
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
									{t('homePage.cleaningChemicalTestimonial')}
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-sm-12 mb-4 bg-light border shadow rounded-3 p-4 d-flex flex-column justify-content-center align-items-center gap-3">
						<div className="container ps-md-5 pe-md-5">
							<div className="row d-flex flex-row align-items-center gap-2">
								<div className="col-2">
									<img src={IMAGES.cleaningChemical} width="50" />
								</div>
								<div className="col-9">
									<h5>{t('homePage.scrubbingChemical')}</h5>
								</div>
							</div>
							<hr />
							<div className="row d-flex flex-row align-items-center gap-2">
								<div className="col-2">
									<img src={IMAGES.polishChemical} width="50" />
								</div>
								<div className="col-9">
									<h5>{t('homePage.polishingChemical')}</h5>
								</div>
							</div>
							<hr />
							<div className="row d-flex flex-row align-items-center gap-2">
								<div className="col-2">
									<img src={IMAGES.varnishes} width="50" />
								</div>
								<div className="col-9">
									<h5>{t('homePage.varnishes')}</h5>
								</div>
							</div>
							<hr />
							<div className="row d-flex flex-row align-items-center gap-2">
								<div className="col-2">
									<img src={IMAGES.waxing} width="50" />
								</div>
								<div className="col-9">
									<h5>{t('homePage.waxingChemical')}</h5>
								</div>
							</div>
							<hr />
							<div className="row d-flex flex-row align-items-center gap-2">
								<div className="col-2">
									<img src={IMAGES.waxingTwo} width="50" />
								</div>
								<div className="col-9">
									<h5>{t('homePage.colorProtector')}</h5>
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
								<h2 className="display-4 sora-font fw-bold">{t('homePage.ourValues')}</h2>
								<ul>
									<li>
										<h4>{t('homePage.ourValuesPointOneH')}</h4>
										<p>
											{t('homePage.ourValuesPointOneP')}
										</p>
									</li>
									<li>
										<h4>{t('homePage.ourValuesPointTwoH')}</h4>
										<p>
											{t('homePage.ourValuesPointTwoP')}
										</p>
									</li>
									<li>
										<h4>{t('homePage.ourValuesPointThreeH')}</h4>
										<p>
											{t('homePage.ourValuesPointThreeP')}
										</p>
									</li>
									<li>
										<h4>{t('homePage.ourValuesPointFourH')}</h4>
										<p>
											{t('homePage.ourValuesPointFourP')}
										</p>
									</li>
									<li>
										<h4>{t('homePage.ourValuesPointFiveH')}</h4>
										<p>
											{t('homePage.ourValuesPointFiveP')}
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
							<h4>{t('homePage.whyChooseUs')}</h4>
							<h1 className="display-5 fw-bold">
								{t('homePage.whyChooseUsH')}
							</h1>
							<p>
								{t('homePage.whyChooseUsP')}
							</p>

							<a className="btn btn-warning btn-lg" target="_blank" href="https://wa.me/+4915215341962">
								{t('homePage.chatWithUs')} <CgArrowTopRight />
							</a>
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
