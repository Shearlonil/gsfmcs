import React from 'react'
import IMAGES from '../assets/images-export'

const csr = () => {
    return (
        <>
            <div className='container-fluid bg-warning-subtle'>
                <div className="container p-3 rounded-5">
                    <div className="row mb-5 d-flex mt-4 flex-row flex-md-row-reverse">
                        <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">
                            <h1 className='text-center text-md-start fw-bold sora-font'>OUR CORPORATE SOCIAL RESPONSIBILITY ( CSR) ACHIEVEMENT</h1>
                            <p className='text-center text-md-start sora-font'>
                                Year in year out God Son Facility Management and Consultancy Services (
                                GSFMCS) is engaged giving back to the society through Sports event sponsorship
                                which always come in Partnership with Hoffnung Sports Foundation (HSF). Both
                                Innitiative is owned by Mr. Dapo Akiode.
                            </p>
                            <p>
                                God Son Facility Management and Consultancy Services is a
                                frontrunner in encouraging young talented Athletes to making
                                their social and private life better and secured.
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <img src={IMAGES.medal} className='rounded-4 w-100' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 d-flex flex-column align-items-center">
                <h5>OUR JOURNEY</h5>
                <div className="row mt-3">
                    <div className="col mb-3">
                        <div className="container ps-md-3 pe-md-3">
							<div className="row text-center text-md-start">
                                <div className="col-md-1 col-sm-12">
                                    <img src={IMAGES.medal} width="50" />
                                </div>
                                <div className="col-md-11 col-sm-12">
                                    <h5 className='fw-bold'>Partnership with HSF</h5>
                                    <span className='mt-4'>
                                        2018 GSFMCS & HSF in conjunction with the Nigeria Table tennis
                                        Federation ( NTTF) hosted the 1st. Late Mrs. Anthonia Akiode South/West
                                        Table tennis Championship
                                    </span>
                                </div>
							</div>

							<div className="row mt-4 text-center text-md-start">
                                <div className="col-md-1 col-sm-12">
                                    <img src={IMAGES.medal} width="50" />
                                </div>
                                <div className="col-md-11 col-sm-12">
                                    <h5 className='fw-bold'>Table Tennis Chanpionship Hosting</h5>
                                    <span className='mt-4'>
                                        2019 successful hosting of the 2nd Anthonia Bolanle Akiode
                                        South/West Table tennis Championship
                                    </span>
                                </div>
							</div>

							<div className="row mt-4 text-center text-md-start">
                                <div className="col-md-1 col-sm-12">
                                    <img src={IMAGES.medal} width="50" />
                                </div>
                                <div className="col-md-11 col-sm-12">
                                    <h5 className='fw-bold'>Official Cleaning Company to the 2019 International Table tennis
                                    Federation (ITTF) Lagos Open</h5>
                                    <p>
                                        God Son Facility Management and Consultancy Services was the official Cleaning Company to the 2019 International Table tennis Federation ( ITTF) Lagos Open.
                                    </p>
                                </div>
							</div>

							<div className="row mt-4 text-center text-md-start">
                                <div className="col-md-1 col-sm-12">
                                    <img src={IMAGES.medal} width="50" />
                                </div>
                                <div className="col-md-11 col-sm-12">
                                    <h5 className='fw-bold'>One year full Equipment Sponsorship</h5>
                                    <p>
                                        2020 GSFMCS financed a 1 year full equipment sponsorship to Ogun State born Badminton Senior National player Tunde Bankole via its International partner Victor International GmbH Germany
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

export default csr