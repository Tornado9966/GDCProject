import React, { Fragment } from 'react';

import EngCarousel from 'components/EngCarousel';
import EngDishes from 'components/EngDishes';
import EngPlaces from 'components/EngPlaces';
import EngNavigationButton from 'components/EngNavigationButton';
import { linkToRestaurants, viewOnMap } from 'constants/text-constants';
import imgs from 'config/carousel-config';

export function EngMainPageContent() {
    return (
        <Fragment>
           <EngCarousel images={imgs} shouldAutoplay shouldWrapAround />
             <EngDishes count={3} filter='rating' />
            <EngPlaces itemsPerRow={3} />
            <div className='button-wrapper'>
                <EngNavigationButton className="navigation-button" link={linkToRestaurants} text={viewOnMap} />
            </div>
        </Fragment>
    );
}
