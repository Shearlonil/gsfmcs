import React from 'react'
import { useTranslation } from 'react-i18next';

import IMAGES from '../assets/images-export';

const AboutUs = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <div className='container-fluid bg-warning-subtle'>
                <div className="container p-3 rounded-5">
                    <div className="row mb-5 d-flex mt-4 flex-row flex-md-row-reverse">
                        <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">
                            <h1 className='text-center text-md-start fw-bold sora-font'>{t('aboutUs.header')}</h1>
                            <p className='text-center text-md-start sora-font'>
                                {t('aboutUs.pOne')}
                            </p>
                            <p>
                                {t('aboutUs.pTwo')}
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <img src={IMAGES.cleaningTools} className='rounded-4 w-100 h-100' />
                        </div>
                    </div>

                    <div className="row d-flex flex-row">
                        <div className="col-sm-12 col-md-6 justify-content-center">
                            <h2 className='text-center text-md-start sora-font'>{t('aboutUs.impressiveStats')}</h2>
                        </div>
                    </div>

                    <div className="row mb-3 d-flex flex-row">
                        <div className="col-sm-12 col-md-6 d-flex flex-column p-4 justify-content-center">
                            <div className='d-flex flex-row gap-5'>
                                <div className='d-flex flex-column justify-content-center'>
                                    <h1 className='fw-bold'>12+</h1>
                                    <span>{t('aboutUs.yearsIn')}</span>
                                    <span>{t('aboutUs.business')}</span>
                                </div>

                                <div className='d-flex flex-column justify-content-center'>
                                    <h1 className='fw-bold'>100+</h1>
                                    <span>{t('aboutUs.projects')}</span>
                                    <span>{t('aboutUs.completed')}</span>
                                </div>
                            </div>

                            <div className='d-flex flex-row gap-5 mt-3'>
                                <div className='d-flex flex-column justify-content-center'>
                                    <h1 className='fw-bold'>5/5</h1>
                                    <span>{t('aboutUs.clients')}</span>
                                    <span>{t('aboutUs.satisfaction')}</span>
                                </div>

                                <div className='d-flex flex-column justify-content-center'>
                                    <h1 className='fw-bold'>100%</h1>
                                    <span>{t('aboutUs.service')}</span>
                                    <span>{t('aboutUs.coverage')}</span>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-sm-12 col-md-6 pt-4">
                            <div className="container">
                                <div className="row">
                                    <div className='col-md-6 col-sm-12 mb-4'>
                                        <div className="d-flex flex-column gap-3 bg-dark text-white rounded-4 p-3 h-100">
                                            <h5>{t('aboutUs.ourMission')}</h5>
                                            <p>
                                                {t('aboutUs.ourMissionP')}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-sm-12 mb-4'>
                                        <div className="d-flex flex-column gap-3 bg-warning rounded-4 p-3 h-100">
                                            <h5>{t('aboutUs.ourVision')}</h5>
                                            <p>
                                                {t('aboutUs.ourVisionP')}
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
                <h5>{t('aboutUs.ourStory')}</h5>
                <h1 className='text-center'>{t('aboutUs.qualityServices')}</h1>
                <div className="row mt-3">
                    <div className="col-md-6 col-sm-12 mb-3 d-flex flex-column justify-content-center">
                        <p className='text-center text-md-start sora-font'>{t('aboutUs.qualityServicesIntro')}</p>
                        <img src={IMAGES.pinkCleaners} className='w-100' />
                    </div>
                    <div className="col-md-6 col-sm-12 mb-3 d-flex flex-column justify-content-center">
                        <div className="container ps-md-3 pe-md-3">
							<div className="row text-center text-md-start">
                                <div className="col-md-2 col-sm-12">
                                    <img src={IMAGES.staff} width="50" />
                                </div>
                                <div className="col-md-10 col-sm-12">
                                    <h5 className='fw-bold'>{t('aboutUs.qualityServicesOneH')}</h5>
                                    <span className='mt-4'>{t('aboutUs.qualityServicesOneP')}</span>
                                    <p>{t('aboutUs.qualityServicesOnePtwo')}</p>
                                </div>
							</div>

							<div className="row mt-4 text-center text-md-start">
                                <div className="col-md-2 col-sm-12">
                                    <img src={IMAGES.signboard} width="50" />
                                </div>
                                <div className="col-md-10 col-sm-12">
                                    <h5 className='fw-bold'>{t('aboutUs.qualityServicesTwoH')}</h5>
                                    <span className='mt-4'>
                                        {t('aboutUs.qualityServicesTwoP')}
                                    </span>
                                    <p className='mt-3'>
                                        {t('aboutUs.qualityServicesTwoPtwo')}
                                    </p>
                                </div>
							</div>

							{/* <div className="row mt-4 text-center text-md-start">
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
							</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;