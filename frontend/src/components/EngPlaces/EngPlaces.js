import React, { useState, useEffect, Fragment } from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {map as _map} from 'lodash';

import EngPlaceCard from 'components/EngPlaceCard';
import {getPlaces} from './utils/get-data/get-places';


import './style.scss';

export const EngPlaces = props => {
    const [places, setPlaces] = useState({});

    useEffect(() => {
      getPlaces().then(res => setPlaces(res.data));
    }, []);

    return (
      <Fragment>
          <Card.Group
            centered
            className="eng-places"
            itemsPerRow={props.itemsPerRow}
          >
              {_map(places, place =>
                  <EngPlaceCard key={place._id} {...place} />
              )}
          </Card.Group>
      </Fragment>
    );
};

EngPlaces.propTypes = {
  itemsPerRow: PropTypes.number
};

EngPlaces.defaultProps = {
  itemsPerRow: 3
};

