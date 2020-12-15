import React, {useState} from 'react';
import { Button, Grid, Image } from 'semantic-ui-react';
import { map as _map } from 'lodash';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import useOrder from 'context/useOrder';
import { bookHere } from 'constants/text-constants';

import './styles.scss';

export const EngDetails = props => {
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const {setRestaurantStep} = useOrder();
    const redirectToOrder = (id, name) => {
        setRestaurantStep(id, name);
        return <Redirect to='/order' />;
    };

    const {_id, name, location, phone, workingHours, email, gallery} = props;

    const galleryLayout = _map(gallery, ({id, first, second}) =>
    <Grid.Row key={id}>
        <Grid.Column floated='left' width={8}>
            <Image src={first} />
        </Grid.Column>
        <Grid.Column floated='left' width={8}>
            <Image src={second} />
        </Grid.Column>
    </Grid.Row>
    );

    return (
        <div className='details-container'>
            {shouldRedirect && redirectToOrder(_id, name)}
            <h1>{name}</h1>
            <hr />
            <div>
                <h3>{location}</h3>
                <h3>
                {phone}
                <pre> | </pre>
                {workingHours}
                </h3>
                <h3>{email}</h3>
            </div>
            <hr />
            <Button fluid size='huge' onClick={()=>setShouldRedirect(true)}>
                {`${bookHere} ${name}`}
            </Button>
            <hr />
            <div className='gallery'>
                <Grid columns='two'>
                    {galleryLayout}
                </Grid>
            </div>
        </div>
    );
};

EngDetails.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    phone: PropTypes.string,
    workingHours: PropTypes.string.isRequired,
    email: PropTypes.string,
    gallery: PropTypes.array
};

EngDetails.defaultProps = {
    phone: 'This restaurant has no phone',
    email: 'This restaurant has no email',
    gallery: []
};
