import React from 'react';
import {map as _map} from 'lodash';
import PropTypes from 'prop-types'; 

import EngSpecialOffer from './EngSpecialOffer';

import {getSpecialOffersList} from './utils';

import './styles.scss';

export class EngSpecialOffers extends React.Component {
    static propTypes = {
        count: PropTypes.number,
    };

    static defaultProps = {
        count: 4,
    };

    state = {
        specialOffers: [],
    };

    componentDidMount() {
        return getSpecialOffersList(this.props.count)
            .then(res => this.setState({specialOffers: res.data}) );
    }

    render() {
        return(
            <div className='main__special'>
                {_map(this.state.specialOffers, ({_id, imgUrl, title, summary, details}) => 
                <EngSpecialOffer
                    key={_id}
                    imgUrl={imgUrl} 
                    title={title}
                    summary={summary}
                    details={details} 
                />)}
            </div>
        );
    }
    
}
