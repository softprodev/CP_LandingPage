import React from 'react'
import styled from 'styled-components'
import { Card, Flex, Text } from 'penguinfinance-uikit2'


const CPRoadmap = () => {
    return (
        <section className="roadmap" id="roadmap">
            <div className="roadmap__bg" id="roadmapAnimationImg">
                <img src="img/bar-icon-1.svg" alt="" floating-node-js />
                <img src="img/bar-icon-2.svg" alt="" floating-node-js />
                <img src="img/bar-icon-3.svg" alt="" floating-node-js />
            </div>
            <div className="c-grid">
                <div className="roadmap__wrapper">
                    <p className="roadmap__desc wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">A limited NFT collection where each token drop comes with an exclusive release of our best selling protein bars. Each token also gives you a membership level seat at the business table & opens the build real wealth through brand ownership!!
                        <div className="roadmap__title-wrapper wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
                            <h2 className="roadmap__title c-title">
                                <img src="img/path-line-horizontal.png" srcSet="img/path-line-horizontal@2x.png 2x" alt="" />
                                <img src="img/path-line-horizontal.png" srcSet="img/path-line-horizontal@2x.png 2x" alt="" />
                                <span>roadmap</span>
                            </h2>
                        </div>
                    </p>
                    <div className="roadmap__block-wrapper">
                        <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
                            <div className="roadmap__block">
                                <div className="roadmap__block-left">
                                    <p className="roadmap__block-year">202<span>2</span></p>
                                    <p className="roadmap__block-progress is-active">
                                        <i className="icon-font icon-check-mark" />
                                        <span>100%</span>
                                    </p>
                                </div>
                                <div className="roadmap__block-middle"><img src="img/path-line-vertical.png" srcSet="img/path-line-vertical@2x.png 2x" alt="" /></div>
                                <div className="roadmap__block-right">
                                    <p className="roadmap__block-title">8 EXCLUSIVE BAR DROPS. <br />8 EXCLUSIVE NFTS</p>
                                    <p className="roadmap__block-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur sed lorem a posuere. Maecenas neque diam, venenatis sed nibh et, eleifend.</p>
                                </div>
                            </div>
                        </div>
                        <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
                            <div className="roadmap__block">
                                <div className="roadmap__block-left">
                                    <p className="roadmap__block-year">202<span>3</span></p>
                                    <p className="roadmap__block-progress">
                                        <i className="icon-font icon-check-mark" />
                                        <span>80%</span></p>
                                </div>
                                <div className="roadmap__block-middle"><img src="img/path-line-vertical.png" srcSet="img/path-line-vertical@2x.png 2x" alt="" /></div>
                                <div className="roadmap__block-right">
                                    <p className="roadmap__block-title">DISCOUNTED INVESTMENT <br />ACCESS TO COMPANY SERIES A</p>
                                    <p className="roadmap__block-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur sed lorem a posuere. Maecenas neque diam, venenatis sed nibh et, eleifend.</p>
                                </div>
                            </div>
                        </div>
                        <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
                            <div className="roadmap__block">
                                <div className="roadmap__block-left">
                                    <p className="roadmap__block-year">202<span>3 q2</span></p>
                                    <p className="roadmap__block-progress">
                                        <i className="icon-font icon-check-mark" />
                                        <span>20%</span></p>
                                </div>
                                <div className="roadmap__block-middle"><img src="img/path-line-vertical.png" srcSet="img/path-line-vertical@2x.png 2x" alt="" /></div>
                                <div className="roadmap__block-right">
                                    <p className="roadmap__block-title">ACCESS TO CHEF <br />PHYSIQUE GYM</p>
                                    <p className="roadmap__block-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur sed lorem a posuere. Maecenas neque diam, venenatis sed nibh et, eleifend.</p>
                                </div>
                            </div>
                        </div>
                        <div className="wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
                            <div className="roadmap__block">
                                <div className="roadmap__block-left">
                                    <p className="roadmap__block-year">202<span>4</span></p>
                                    <p className="roadmap__block-progress">
                                        <i className="icon-font icon-check-mark" /><span>0%</span></p>
                                </div>
                                <div className="roadmap__block-middle"><img src="img/path-line-vertical.png" srcSet="img/path-line-vertical@2x.png 2x" alt="" /></div>
                                <div className="roadmap__block-right">
                                    <p className="roadmap__block-title">CHEF PHYSIQUE INITIAL <br />PUBLIC OFFERING (IPO)</p>
                                    <p className="roadmap__block-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur sed lorem a posuere. Maecenas neque diam, venenatis sed nibh et, eleifend.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c-btn__wrapper c-btn__wrapper--center wow animate__animated animate__fadeInUp" data-wow-duration="1.25s">
                    <a className="c-btn" href="/">
                        <u className="c-btn__mask">Call to Action</u><span>Call to Action</span></a></div>
            </div>
        </section>
    )
}

export default CPRoadmap
