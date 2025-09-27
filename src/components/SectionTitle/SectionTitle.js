import React from 'react';

const SectionTitle = ({ Title, description }) => {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
                <div className="wpo-section-title">
                    <h2>{Title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SectionTitle;
