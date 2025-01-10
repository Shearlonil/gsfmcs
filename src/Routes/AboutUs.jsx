import React from 'react'
import IMAGES from '../assets/images-export';

const AboutUs = () => {
    return (
        <>
            <div className='container-fluid bg-warning-subtle'>
                <div className="container p-3 rounded-5">
                    <div className="row mb-5 d-flex mt-4 flex-row flex-md-row-reverse">
                        <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">
                            <h1 className='text-center text-md-start fw-bold sora-font'>About Us</h1>
                            <p className='text-center text-md-start sora-font'>
                                God Son Facility Management and Consultancy Services (GSFMCS) is a German-trained cleaners and cleaning consultant with over ten (10) years of provable working experience.
                            </p>
                            <p>
                                Our Company’s goal is to professionally clean and service Nigerians to the best of our abilities and in the highest standards possible
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <img src={IMAGES.cleaningTools} className='rounded-4 w-100 h-100' />
                        </div>
                    </div>

                    <div className="row d-flex flex-row">
                        <div className="col-sm-12 col-md-6 justify-content-center">
                            <h2 className='text-center text-md-start sora-font'>Impressive Stats and Achievements You Can Trust</h2>
                        </div>
                    </div>

                    <div className="row mb-3 d-flex flex-row">
                        <div className="col-sm-12 col-md-6 d-flex flex-column p-4 justify-content-center">
                            <div className='d-flex flex-row gap-5'>
                                <div className='d-flex flex-column justify-content-center'>
                                    <h1 className='fw-bold'>12+</h1>
                                    <span>Years in</span>
                                    <span>Business</span>
                                </div>

                                <div className='d-flex flex-column justify-content-center'>
                                    <h1 className='fw-bold'>100+</h1>
                                    <span>Projects</span>
                                    <span>Completed</span>
                                </div>
                            </div>

                            <div className='d-flex flex-row gap-5 mt-3'>
                                <div className='d-flex flex-column justify-content-center'>
                                    <h1 className='fw-bold'>5/5</h1>
                                    <span>Client</span>
                                    <span>Satisfaction</span>
                                </div>

                                <div className='d-flex flex-column justify-content-center'>
                                    <h1 className='fw-bold'>100%</h1>
                                    <span>Service</span>
                                    <span>Coverage</span>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-sm-12 col-md-6 pt-4">
                            <div className="container">
                                <div className="row">
                                    <div className='col-md-6 col-sm-12 mb-4'>
                                        <div className="d-flex flex-column gap-3 bg-dark text-white rounded-4 p-3 h-100">
                                            <h5>Our mission for your facility</h5>
                                            <p>
                                                To empower our clients to achieve optimal operational efficiency and asset value through customized facility management solutions, delivered with professionalism, technical expertise, and unwavering commitment to their needs.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-sm-12 mb-4'>
                                        <div className="d-flex flex-column gap-3 bg-warning rounded-4 p-3 h-100">
                                            <h5>Our Vision</h5>
                                            <p>
                                                To be the premier provider of facility management and consultancy services in Nigeria, driven by integrity, innovation, and exceptional customer service, while upholding deep ethical principles in our conduct.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 d-flex flex-column align-items-center">
                <h5>OUR STORY</h5>
                <h1 className='text-center'>Quality Services for All Your Facilities</h1>
                <div className="row mt-3">
                    <div className="col-md-6 col-sm-12 mb-3 d-flex flex-column justify-content-center">
                        <p className='text-center text-md-start sora-font'>Cleaning services is a serious and dutiful business in the western world and it has gone beyond just sweeping, mopping and washing as there are new discoveries about various micro-organisms that thrive conveniently after the aforementioned cleaning processes had been carried out</p>
                        <img src={IMAGES.pinkCleaners} className='w-100' />
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3">
                        <div className="container ps-md-3 pe-md-3">
							<div className="row text-center text-md-start">
                                <div className="col-md-2 col-sm-12">
                                    <img src={IMAGES.staff} width="50" />
                                </div>
                                <div className="col-md-10 col-sm-12">
                                    <h5 className='fw-bold'>Work Force</h5>
                                    <span className='mt-4'>Our branch in Germany has a work force with over 12 active workers</span>
                                    <p>We have over 25 active workers in Nigeria</p>
                                </div>
							</div>

							<div className="row mt-4 text-center text-md-start">
                                <div className="col-md-2 col-sm-12">
                                    <img src={IMAGES.signboard} width="50" />
                                </div>
                                <div className="col-md-10 col-sm-12">
                                    <h5 className='fw-bold'>Specialization</h5>
                                    <span className='mt-4'>
                                        We specializes in the cleaning of both Commercial and Residential Structures like Airports, Roads, Banks, Houses, Hotels, Retail Outlets, Hospitals, etc.
                                    </span>
                                    <p className='mt-3'>
                                        Our cleaning expertise covers both indoor and outdoor cleaning, industrial cleaning,
                                        maintenance cleaning, sewage management and disposal, refrigeration cleaning, gardening and
                                        horticultural cleaning services, construction cleaning, VIP cleaning and many others.
                                    </p>
                                </div>
							</div>

							<div className="row mt-4 text-center text-md-start">
                                <div className="col-md-2 col-sm-12">
                                    <img src={IMAGES.clients} width="50" />
                                </div>
                                <div className="col-md-10 col-sm-12">
                                    <h5 className='fw-bold'>Clientele</h5>
                                    <p>
                                        Our Clients include Volksbank in Stuttgart, Asphalt Rems in Waiblingen, Autohaus Peter Eisemann
                                        in Fellbach. Others include Fitness Club in Fellbach and Goetze Armaturen in Ludwigsburg.
                                    </p>
                                </div>
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;