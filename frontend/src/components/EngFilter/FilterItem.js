import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const FilterIcon = ({name, icon, selectedCategory, selectCategory}) => {
    return (
        <div
            onClick={() => selectCategory(name)}
            onKeyDown={() => selectCategory(name)}
            className="filter__item"
            role="menuitem"
            tabIndex={0}
        >
            <i className={
                name === selectedCategory 
                ? `filter__icon filter__icon--purple ${icon}` 
                : `filter__icon filter__icon--orange ${icon}`
                }
            />
            <div className="filter__name">{name}</div>
        </div>
    );
};

FilterIcon.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    selectedCategory: PropTypes.string.isRequired,
    selectCategory: PropTypes.func.isRequired
};

export default FilterIcon;