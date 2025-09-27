import React, { useState } from 'react';
import Slider from "react-slick";
import { Button, Dialog, DialogContent, DialogActions } from '@material-ui/core';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogs from '../../api/blogs';
import BlogSingle from "../BlogSingle";

const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const BlogSection = () => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (blog) => {
        // Gunakan highResImage jika tersedia, jika tidak gunakan screens
        setSelectedImage(blog.highResImage || blog.screens);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    return (
        <section className="wpo-blog-section section-padding" id='blog'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="wpo-section-title">
                            <h2>Certificate</h2>
                            <p>Here are some of the certificates I have obtained in the past few years, which represent my commitment and self-development in various fields.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-blog-wrap wpo-blog-slide owl-carousel">
                    <Slider {...settings}>
                        {blogs.map((blog, bl) => (
                            <div className="wpo-blog-item" key={bl}>
                                <div className="wpo-blog-img">
                                    <img
                                        src={blog.screens}
                                        alt={blog.title}
                                        onClick={() => handleImageClick(blog)}
                                        style={{ cursor: 'pointer', imageRendering: 'auto' }}
                                    />
                                </div>
                                <div className="wpo-blog-text">
                                    <ul>
                                        <li>{blog.create_at}</li>
                                    </ul>
                                    <h2>{blog.title}</h2>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <Dialog
                            open={open}
                            onClose={handleClose}
                            fullWidth
                            maxWidth="lg"
                            aria-labelledby="image-popup"
                            PaperProps={{
                                style: {
                                    margin: 14,
                                    marginTop: '16vh',
                                    maxHeight: 'calc(85vh - 32px)', // Maksimalkan tinggi dialog
                                }
                            }}
                        >
                            <DialogContent
                                style={{
                                    padding: 0,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start', // Mulai dari atas untuk scroll
                                    maxHeight: 'calc(100vh - 64px)', // Sisakan ruang untuk DialogActions
                                    overflowY: 'auto', // Aktifkan scroll vertikal
                                    overflowX: 'hidden' // Hindari scroll horizontal
                                }}
                            >
                                {selectedImage && (
                                    <img
                                        src={selectedImage}
                                        alt="Sertifikat Terpilih"
                                        style={{
                                            width: '100%',
                                            maxWidth: '100%',
                                            height: 'auto', // Biarkan tinggi menyesuaikan
                                            objectFit: 'contain', // Jaga rasio aspek
                                            imageRendering: 'optimizeQuality' // Optimalkan kualitas
                                        }}
                                    />
                                )}
                            </DialogContent>
                            <DialogActions>
                            <Button
                                onClick={handleClose}
                                style={{
                                    color: '#ffffff', 
                                    textTransform: 'none' 
                                }}
                            >
                                Close
                            </Button>
                            </DialogActions>
                        </Dialog>
            <div className="shadow-shape">
                <svg width="1319" height="1567" viewBox="0 0 1319 1567" fill="none">
                    <g filter="url(#filter0_f_39_3832)">
                        <circle cx="803" cy="803" r="303" fill="#59C378" fillOpacity="0.5" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_3832" x="0" y="0" width="1606" height="1606"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_3832" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default BlogSection;