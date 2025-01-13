import React from 'react'
import { useTranslation } from 'react-i18next';

import IMAGES from '../assets/images-export'

const csr = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className='container-fluid bg-warning-subtle'>
                <div className="container p-3 rounded-5">
                    <div className="row mb-5 d-flex mt-4 flex-row flex-md-row-reverse">
                        <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">
                            <h1 className='text-center text-md-start fw-bold sora-font'>{t('csr.header')}</h1>
                            <p className='text-center text-md-start sora-font'>
                                {t('csr.pOne')}
                            </p>
                            <p>
                                {t('csr.pTwo')}
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <img src={IMAGES.medal} className='rounded-4 w-100' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 d-flex flex-column align-items-center">
                <h5>{t('csr.ourJourney')}</h5>
                <div className="row mt-3">
                    <div className="col mb-3">
                        <div className="container ps-md-3 pe-md-3">
							<div className="row text-center text-md-start">
                                <div className="col-md-1 col-sm-12">
                                    <img src={IMAGES.medal} width="50" />
                                </div>
                                <div className="col-md-11 col-sm-12">
                                    <h5 className='fw-bold'>{t('csr.journeyOneH')}</h5>
                                    <span className='mt-4'>
                                        {t('csr.journeyOneP')}
                                    </span>
                                </div>
							</div>

							<div className="row mt-4 text-center text-md-start">
                                <div className="col-md-1 col-sm-12">
                                    <img src={IMAGES.medal} width="50" />
                                </div>
                                <div className="col-md-11 col-sm-12">
                                    <h5 className='fw-bold'>{t('csr.journeyTwoH')}</h5>
                                    <span className='mt-4'>
                                        {t('csr.journeyTwoP')}
                                    </span>
                                </div>
							</div>

							<div className="row mt-4 text-center text-md-start">
                                <div className="col-md-1 col-sm-12">
                                    <img src={IMAGES.medal} width="50" />
                                </div>
                                <div className="col-md-11 col-sm-12">
                                    <h5 className='fw-bold'>
                                        {t('csr.journeyThreeH')}
                                    </h5>
                                    <p>
                                        {t('csr.journeyThreeP')}
                                    </p>
                                </div>
							</div>

							<div className="row mt-4 text-center text-md-start">
                                <div className="col-md-1 col-sm-12">
                                    <img src={IMAGES.medal} width="50" />
                                </div>
                                <div className="col-md-11 col-sm-12">
                                    <h5 className='fw-bold'>{t('csr.journeyFourH')}</h5>
                                    <p>
                                        {t('csr.journeyFourP')}
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