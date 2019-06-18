import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.0118335552543!2d69.23918851493367!3d41.30860617927147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b07e972a36f%3A0xa2de9aed6acdc711!2z0JTRgNGD0LbQsdCwINCd0LDRgNC-0LTQvtCy!5e0!3m2!1sru!2s!4v1560876365747!5m2!1sru!2s" 
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen>
            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;