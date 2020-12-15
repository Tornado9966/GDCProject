import React, { useState } from 'react';

import EngDishes from 'components/EngDishes';
import { Filter } from 'components/EngFilter/Filter';
import MenuDropdown from 'components/EngMenuDropdown';
import EngNavigationButton from 'components/EngNavigationButton';
import { menu } from 'config/menu-config';
import useOrder from 'context/useOrder';
import './style.scss';

export function EngMenu() {

    const { state : {dishes} } = useOrder();
    const [selectedCategory, setCategory] = useState('All');
    const [sortedBy, setSort] = useState('rating');

    return (
        <div>
            <div className="menu__title">{menu.title}</div>
            <div className="menu__mainblock">
                <div className="menu__filter">
                    <Filter 
                        selectCategory={name => setCategory(name)}
                        selectedCategory={selectedCategory}    
                    />
                </div>
                <div className="menu__items--wrapper">
                    <EngNavigationButton
                        icon='shop'  
                        link='/order' 
                        text={`${dishes.length}`}
                    />
                    <div className="menu__sort">
                        <MenuDropdown 
                            onChange={({target:{value}}) => setSort(value)}
                            options={menu.sorting}
                        />
                    </div>
                    <div className="menu__items">
                        <EngDishes
                            filter={sortedBy}
                            dishToShow={menu.dishOnPage}
                            category={selectedCategory}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
