import React from 'react';
import PropTypes from 'prop-types';
import { map as _map } from 'lodash';
import { menu } from 'config/menu-config';

import FilterItem from './FilterItem';

import './style.scss';

export const Filter = props => {
    return (
        <div>
            {_map(menu.filter, item => 
                <FilterItem
                    key={item.id}
                    name={item.name}
                    icon={item.icon}
                    selectCategory={props.selectCategory}
                    selectedCategory={props.selectedCategory}
                />
            )}
        </div>
    );
};

Filter.propTypes = {
    selectedCategory: PropTypes.string.isRequired,
    selectCategory: PropTypes.func.isRequired
};