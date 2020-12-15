import React from 'react';
import { Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { map as _map } from 'lodash';
import PropTypes from 'prop-types';

import Carousel from 'nuka-carousel';

import './styles.scss';

export const EngCarousel = ({shouldAutoplay, shouldWrapAround, images}) => {

    return (
        <div className='carousel-wrapper'>
            <Carousel 
            autoplay={shouldAutoplay} 
            wrapAround={shouldWrapAround}
            renderCenterLeftControls={({ previousSlide }) => (
                <button type='button' onClick={previousSlide} className='controllers'>
                    <Icon name='angle left' size='big' />
                </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <button type='button' onClick={nextSlide} className='controllers'>
                    <Icon name='angle right' size='big' />
                </button>
            )}
            >
                {_map(images, item => 
                <Image src={item.src} key={item.id} as={Link} to={item.url} />)}
            </Carousel>
        </div>
    );
};

EngCarousel.propTypes = {
    shouldAutoplay: PropTypes.bool,
    shouldWrapAround: PropTypes.bool,
    images: PropTypes.array.isRequired
};

EngCarousel.defaultProps = {
    shouldAutoplay: false,
    shouldWrapAround: false
};
