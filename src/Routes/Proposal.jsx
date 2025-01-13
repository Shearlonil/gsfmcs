import React from 'react'
import { useTranslation } from 'react-i18next';

import IMAGES from '../assets/images-export';

const Proposal = props => {
	const { t } = useTranslation();

    return (
        <>
            <div className='container-fluid bg-warning-subtle'>
                <div className="container p-3 rounded-5">
                    <div className="row mb-5 d-flex mt-4 flex-row flex-md-row-reverse">
                        <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">
                            <h1 className='text-center text-md-start fw-bold sora-font'>{t('joinUs.header')}</h1>
                            <p className='text-center text-md-start sora-font'>
								{t('joinUs.p')}
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-6 p-5">
                            <img src={IMAGES.partners} className='rounded-4 w-100' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 d-flex flex-column align-items-center">
                <h5>{t('joinUs.objectives')}</h5>
                <div className="row mt-3">
                    <div className="col mb-3">
                        <div className="container ps-md-3 pe-md-3">
							<div className="row text-center text-md-start">
                                <div className="col-md-1 col-sm-12">
                                    <img src={IMAGES.objective} width="50" />
                                </div>
                                <div className="col-md-11 col-sm-12">
                                    <h5 className='fw-bold'>{t('joinUs.objectiveOneH')}</h5>
                                    <span className='mt-4'>
										{t('joinUs.objectiveOneP')}
                                    </span>
                                </div>
							</div>

							<div className="row mt-4 text-center text-md-start">
                                <div className="col-md-1 col-sm-12">
                                    <img src={IMAGES.objective} width="50" />
                                </div>
                                <div className="col-md-11 col-sm-12">
                                    <h5 className='fw-bold'>{t('joinUs.objectiveTwoH')}</h5>
                                    <span className='mt-4'>
										{t('joinUs.objectiveTwoP')}
                                    </span>
                                </div>
							</div>

							<div className="row mt-4 text-center text-md-start">
                                <div className="col-md-1 col-sm-12">
                                    <img src={IMAGES.objective} width="50" />
                                </div>
                                <div className="col-md-11 col-sm-12">
                                    <h5 className='fw-bold'>{t('joinUs.objectiveThreeH')}</h5>
                                    <p>
										{t('joinUs.objectiveThreeP')}
                                    </p>
                                </div>
							</div>

							<div className="row mt-4 text-center text-md-start">
                                <div className="col-md-1 col-sm-12">
                                    <img src={IMAGES.objective} width="50" />
                                </div>
                                <div className="col-md-11 col-sm-12">
                                    <h5 className='fw-bold'>{t('joinUs.objectiveFourH')}</h5>
                                    <p>
                                    	{t('joinUs.objectiveFourP')}
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
								<h2 className="display-4 sora-font fw-bold">{t('joinUs.benefits')}</h2>
                                <p>{t('joinUs.benefitP')}</p>
								<ul>
									<li>
										<h4>{t('joinUs.benefitHone')}</h4>
										<p>
											{t('joinUs.benefitPone')}
										</p>
									</li>
									<li>
										<h4>{t('joinUs.benefitHtwo')}</h4>
										<p>
                                        	{t('joinUs.benefitPtwo')}
										</p>
									</li>
									<li>
										<h4>{t('joinUs.benefitHthree')}</h4>
										<p>
                                        	{t('joinUs.benefitPthree')}
										</p>
									</li>
									<li>
										<h4>{t('joinUs.benefitHfour')}</h4>
										<p>
                                        	{t('joinUs.benefitPfour')}
										</p>
									</li>
									<li>
										<h4>{t('joinUs.benefitHfive')}</h4>
										<p>
											{t('joinUs.benefitPfive')}
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
								{t('joinUs.brightFuture')}
							</h1>
							<p>
								{t('joinUs.brightFutureP')}
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