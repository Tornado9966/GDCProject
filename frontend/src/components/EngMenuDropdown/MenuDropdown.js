import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export const MenuDropdown = ({onChange, options}) => {
    
    return (
        <div>
            <select
            onChange={onChange}
            className="dropdown__option"
            >
                {options.map(item => 
                    <option
                        value={item.value}
                        key={item.value}
                    >
                        {item.text}
                    </option>
                )}
            </select>
        </div>
    );
};

MenuDropdown.propTypes = {
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
};