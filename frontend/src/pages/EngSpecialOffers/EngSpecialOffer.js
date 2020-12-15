import React from 'react';
import {Image, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {close, seeMore, defaultTitle} from 'constants/text-constants';

import defaultImg from './default.jpg';
 

class EngSpecialOffer extends React.Component {
    static propTypes = {
        imgUrl: PropTypes.string,  
        title: PropTypes.string, 
        summary: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired
    };
    
    static defaultProps = {
        imgUrl: defaultImg,  
        title: defaultTitle
    };

     state = {
        isToggleOn: false,
    }
    handleClick = () => {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
    }
    render() {
        const {imgUrl, title, summary, details} = this.props;
        const {isToggleOn} = this.state;
        const detailsClass = classnames('details-block', {
            show: isToggleOn,
            hide: !isToggleOn
          });

            return (
                <div className='specialitem'>
                    <Image 
                        src={imgUrl} 
                        size='large' 
                        floated='left' 
                    />
                    <div className='specialitem__info'>
                        <h2>{title}</h2>
                        <p>{summary}</p>
                        <p className={detailsClass}>{details}</p>
                        <Button className='specialitem__button' onClick={this.handleClick}>
                            {this.state.isToggleOn ? close : seeMore }
                        </Button>
                    </div>
                </div>
        );
    }
}

export default EngSpecialOffer;
