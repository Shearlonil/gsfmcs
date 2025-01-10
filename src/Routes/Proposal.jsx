import React from 'react'
import PropTypes from 'prop-types'
import IMAGES from '../assets/images-export';

const Proposal = props => {
    return (
        <>
            <div className='container-fluid bg-warning-subtle'>
                <div className="container p-3 rounded-5">
                    <div className="row mb-5 d-flex mt-4 flex-row flex-md-row-reverse">
                        <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">
                            <h1 className='text-center text-md-start fw-bold sora-font'>PARTNERSHIP PROPOSAL</h1>
                            <p className='text-center text-md-start sora-font'>
                                The primary objective of this proposal is to secure a financial partnership with you/your organization to support the procurement of essential equipment for our Cleaning Agency, God Son Facility Management & Consultancy Services. This partnership will enable us to significantly enhance our cleaning operations, improve service quality, and expand our client base, ultimately leading to increased profitability and sustainability for both our organizations.
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-6 p-5">
                            <img src={IMAGES.partners} className='rounded-4 w-100' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 d-flex flex-column align-items-center">
                <h5>SPECIFIC OBJECTIVES</h5>
                <div className="row mt-3">
                    <div className="col mb-3">
                        <div className="container ps-md-3 pe-md-3">
							<div className="row text-center text-md-start">
                                <div className="col-md-1 col-sm-12">
                                    <img src={IMAGES.objective} width="50" />
                                </div>
                                <div className="col-md-11 col-sm-12">
                                    <h5 className='fw-bold'>Equip our Agency with State-of-the-Art Cleaning Technology</h5>
                                    <span className='mt-4'>
                                        By securing funding from your esteemed organization, we aim to acquire advanced cleaning equipment such as listed under the proposed procurement table. This will significantly improve the efficiency and effectiveness of our cleaning services, allowing us to handle larger and more complex projects.
                                    </span>
                                </div>
							</div>

							<div className="row mt-4 text-center text-md-start">
                                <div className="col-md-1 col-sm-12">
                                    <img src={IMAGES.objective} width="50" />
                                </div>
                                <div className="col-md-11 col-sm-12">
                                    <h5 className='fw-bold'>Enhance Service Quality and Client Satisfaction</h5>
                                    <span className='mt-4'>
                                        With superior equipment, our cleaning teams will be able to deliver a higher standard of service, exceeding client expectations and building long-term relationships. This will lead to increased client retention and positive wordof-mouth referrals, further boosting our business growth.
                                    </span>
                                </div>
							</div>

							<div className="row mt-4 text-center text-md-start">
                                <div className="col-md-1 col-sm-12">
                                    <img src={IMAGES.objective} width="50" />
                                </div>
                                <div className="col-md-11 col-sm-12">
                                    <h5 className='fw-bold'>Expand our Client Base and Market Reach</h5>
                                    <p>
                                        Improved capabilities and service quality will allow us to tap into new market segments and attract larger clients with more demanding cleaning needs. This expansion will generate additional revenue streams and solidify our position as a leading cleaning service provider in Lagos.
                                    </p>
                                </div>
							</div>

							<div className="row mt-4 text-center text-md-start">
                                <div className="col-md-1 col-sm-12">
                                    <img src={IMAGES.objective} width="50" />
                                </div>
                                <div className="col-md-11 col-sm-12">
                                    <h5 className='fw-bold'>Demonstrate Financial Viability and Return on Investment</h5>
                                    <p>
                                    This proposal will outline a clear financial plan detailing the cost of equipment acquisition, projected revenue growth, and the anticipated return on investment for your partnership.
                                    </p>
                                </div>
							</div>
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
						<div className="col-12 col-md-5 order-0 order-md-0 text-center d-flex justify-content-center align-items-center">
							<div className="p-2">
								<img
									className="rounded-4 w-100"
									src={IMAGES.WhiteHandShake}
									alt=""
								/>
							</div>
						</div>
						<div className="col-12 col-md-7 order-1 order-md-1 d-flex flex-column align-items-center justify-content-center">
							<div className="p-2">
								<h2 className="display-4 sora-font fw-bold">Mutual Benefits</h2>
                                <p>By partnering with us, you will benefit from</p>
								<ul>
									<li>
										<h4>Return on Investment</h4>
										<p>
                                        Expectedly, more equipment will give us more return on investment which will be shared by us in accordance to our mutually signed agreement.
										</p>
									</li>
									<li>
										<h4>Positive Brand Association</h4>
										<p>
                                        Your organization will be associated with a reputable and successful cleaning agency, enhancing your corporate image and community engagement.
										</p>
									</li>
									<li>
										<h4>Increased Visibility and Reach</h4>
										<p>
                                        our logo and brand will be displayed on our cleaning equipment and promotional materials, expanding your reach and brand awareness in Lagos.
										</p>
									</li>
									<li>
										<h4>Fulfillment of Social Responsibility Goals</h4>
										<p>
                                        By supporting our agency's environmental sustainability initiatives through efficient cleaning practices, your organization will contribute to a cleaner and healthier Nigeria.
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
							<h1 className="display-5 fw-bold">
								Bright Future ahead
							</h1>
							<p>
                                This partnership proposal presents a mutually beneficial opportunity for you and us. By securing your financial support, we can achieve our objective of acquiring advanced cleaning equipment, enhancing our service quality, expanding our client base, and ultimately generating increased profitability and sustainability for both our organizations. We are confident that this collaboration will be a success, contributing positively to the World
							</p>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="text-center">
							<img
								src={IMAGES.aiGeneratedCleaningMachingOne}
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
}

export default Proposal