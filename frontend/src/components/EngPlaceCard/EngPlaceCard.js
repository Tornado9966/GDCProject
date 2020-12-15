import React from 'react';
import {Button, Card, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import useOrder from 'context/useOrder';
import {viewOnMap, bookHere, workingHoursText} from 'constants/text-constants';
import defaultImage from './default.jpg';

import './style.scss';

export const EngPlaceCard = props => {
  const {_id, name, location, workingHours, imageSrc} = props;
  const {setRestaurantStep : chooseRestaurant} = useOrder();
  return (
    <Card key={_id}>
      <Card.Content className="place-card">
        <Card.Header className="place-card-location">{location}</Card.Header>
        <Image
          className="place-card-image"
          size='big'
          bordered
          src={imageSrc}
        />
        <Card.Meta className="place-card-workingHours">
          {workingHoursText+workingHours}
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic as={Link} to='/restaurants'>
            {viewOnMap}
          </Button>
          <Button className="placeCard__order" basic as={Link} to='/order' onClick={() => chooseRestaurant(_id, name, imageSrc, location)}>
            {`${bookHere} ${name}`}
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

EngPlaceCard.propTypes = {
  _id: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  workingHours: PropTypes.string.isRequired,
  imageSrc: PropTypes.string
};

EngPlaceCard.defaultProps = {
  imageSrc: defaultImage
};
