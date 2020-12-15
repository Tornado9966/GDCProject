import React from 'react';
import { Map, Marker } from 'google-maps-react';
import { Grid, Button, Responsive } from 'semantic-ui-react';
import { map as _map, each as _each, find as _find } from 'lodash';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import EngDetails from 'components/EngDetails';
import { showLess } from 'constants/text-constants';
import { getPlaces } from './utils/get-data/get-places';

import './styles.scss';

export class EngMap extends React.Component {

  initialState = {
    zoom: 12,
    center: { lat: 50.4475854, lng: 30.519837 },
    visible: false,
    mapStyles: { 
      width: '100%', 
      height: '100%', 
      zIndex: 10
    }
  };

  state = {
    ...this.initialState, ...{restaurants: [], chosenRestaurant: {}}, isToggleOn: false
  };

  stylesWhenVisible = {
    width: '50%', 
    height: '100%', 
    margin: '0 0 0 50%',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  };

  componentDidMount(){
    getPlaces().then(({ data }) => 
      this.setState({restaurants: data}));
  }

  changeMapStatus = ({ target }) => {
    const { restaurants, visible } = this.state;
    let chosenPlace = {};
    const clickedText = target.innerText;

    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));

    _each(restaurants, restaurant => {
      if (restaurant.name === clickedText) {
        chosenPlace = restaurant;
      }
    });

    if (!visible) {
      this.setState({
        chosenRestaurant: chosenPlace, 
        visible: true,
        zoom: 12 * 1.2,
        center: { lat: chosenPlace.lat, lng: chosenPlace.long},
        mapStyles: this.stylesWhenVisible
      });
    } else {
      if (clickedText === showLess) {
        this.setState(
          {...this.initialState, ...{chosenRestaurant: chosenPlace}}
        );
      } else {
        this.setState({
          chosenRestaurant: chosenPlace,
          center: { lat: chosenPlace.lat, lng: chosenPlace.long }
        });
      }
    }
  };

  displayMarkers = () => {
    const { restaurants, chosenRestaurant } = this.state;
    if (!chosenRestaurant.name) {
      return _map(restaurants, ({ _id, lat, long }) => {
          return <Marker 
          key={_id} 
          id={_id} 
          position={
            {
              lat: lat,
              lng: long
            }
          } 
          />;
      });
    } else {
      const chosenPlace = _find(restaurants, ({ name }) => {
        return name===chosenRestaurant.name;
      });

      const { _id, lat, long } = chosenPlace;

      return <Marker 
        key={_id} 
        id={_id} 
        position={
          {
            lat: lat,
            lng: long
          }
        } 
      />;
      }
  };

    render() {
    
    const { restaurants, chosenRestaurant, zoom, center, mapStyles, isToggleOn } = this.state;
    const { google } = this.props;
    const detailsBox = () => {
      if (chosenRestaurant.name) {
        return <EngDetails {...chosenRestaurant} />;
      } 
    };
    const detailsClass = classnames('map-content-wrapper details-wrapper', {
      'active': isToggleOn,
      'not-active': !isToggleOn
    });

      return (
        <Grid>
          <Grid.Column floated='left' className="restaurants__list">
            <div className='info-wrapper'>
              {_map(restaurants, ({ _id, imageSrc, name }) =>
              <div key={_id} className='single-restaurant-wrapper'> 
                <Button 
                onClick={this.changeMapStatus} 
                fluid 
                style={{backgroundImage: `url(${imageSrc})`}}
                >
                  <h1>
                    {chosenRestaurant.name === name ? showLess : name}
                  </h1>
                </Button>
              </div>
              )}
            </div>
          </Grid.Column>
          <Grid.Column floated='left' className="restaurants__map">
            <div className='map-content-wrapper'>
              <Map
                google={google}
                zoom={zoom}
                style={mapStyles}
                initialCenter={center}
                center={center}
              >
              {this.displayMarkers()}
              </Map>
            </div>
            <Responsive {...Responsive.onlyComputer}>
              <div className='map-content-wrapper details-wrapper'>
                  {detailsBox()}
              </div>
            </Responsive>
            <Responsive {...Responsive.onlyMobile}>
              <div className={detailsClass}>
                  <EngDetails {...chosenRestaurant} />
              </div>
            </Responsive>
          </Grid.Column>
        </Grid>
      );
    }
}

EngMap.propTypes = {
  google: PropTypes.object.isRequired
};
