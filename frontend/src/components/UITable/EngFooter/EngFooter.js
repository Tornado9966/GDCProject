import React from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { map as _map } from 'lodash';
import { Link } from 'react-router-dom';

import menuItems from 'config/header-config';
import { copyright, faceLink, instLink } from 'constants/text-constants';

import './styles.scss';

export class EngFooter extends React.Component {

    render() {
        return (
            <footer>
                <p>{copyright}</p>
                <Menu secondary size='large' fluid widths={menuItems.length + 2}>
                                {_map(menuItems, item => 
                                <Menu.Item 
                                    as={Link} 
                                    to={item.itemUrl} 
                                    name={item.itemName} 
                                    onClick={this.handleItemClick} 
                                    key={item.id}
                                >
                                {item.itemText}
                                </Menu.Item>)}
                </Menu>
                <div className='social-media-buttons'>
                    <a href={faceLink} rel='noopener noreferrer' target="_blank">
                        <Button circular inverted icon='facebook' />
                    </a>
                    <a href={instLink} rel='noopener noreferrer' target="_blank">
                        <Button circular inverted icon='instagram' />
                    </a>
                </div>
            </footer>
        );
    }
    
}
