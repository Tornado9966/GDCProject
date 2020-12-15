import React from 'react';
import { Image, Menu, Responsive, Sidebar, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { map as _map } from 'lodash';
import classnames from 'classnames';

import EngUserTopbar from 'components/EngUserTopbar';
import menuItems from 'config/header-config';

import './styles.scss';

const defaultPath = '/';
const logo = 'https://firebasestorage.googleapis.com/v0/b/eatngo-fbbeb.appspot.com/o/logo_cropped.png?alt=media&token=53b331e4-1d54-47bc-85d3-91f3641ad3a5';

export class EngHeader extends React.Component {

    state = {
        visible: false
    };

    handleClick = () => {
        this.setState(state => ({
            visible: !state.visible
        }));
    }
    
    render() {
        const { visible } = this.state;
        const openMenu = classnames({
            show: visible,
            hide: !visible
          });
        return (
                <header>
                    <Responsive {...Responsive.onlyComputer}>
                        <Menu secondary size='large' fluid widths={menuItems.length + 2}>
                            <Menu.Item>
                                <Image src={logo} size='medium' as={Link} to={defaultPath} />
                            </Menu.Item>
                                {_map(menuItems, item => 
                                <Menu.Item 
                                    as={Link} 
                                    to={item.itemUrl} 
                                    name={item.itemName}  
                                    key={item.id}
                                >
                                    <Image src={item.imgSrc} className="items__icon" />
                                {item.itemText}
                                </Menu.Item>)}
                        <Menu.Item>
                            <EngUserTopbar />
                        </Menu.Item>
                        </Menu>
                    </Responsive>
                    <Responsive minWidth={320} maxWidth={992}>
                    <Sidebar.Pusher className={openMenu}>
                                {_map(menuItems, item => 
                                <Menu.Item 
                                    as={Link} 
                                    to={item.itemUrl} 
                                    name={item.itemName}  
                                    key={item.id}
                                    onClick={this.handleClick}
                                >
                                    <Image src={item.imgSrc} className="items__icon" />
                                {item.itemText}
                                </Menu.Item>)}
                    </Sidebar.Pusher>
                    <Sidebar.Pushable>
                        <Button
                            as={Menu}
                            icon="bars"
                            className='menu__burger'
                            onClick={this.handleClick}
                        />
                        
                        <Menu secondary size='large' fluid widths={menuItems.length + 2}>
                            <Menu.Item className="logo">
                                <Image src={logo} size='medium' as={Link} to={defaultPath} />
                            </Menu.Item>
                            
                        <Menu.Item className="login__button">
                            <EngUserTopbar />
                        </Menu.Item>
                        </Menu>
                        
                    </Sidebar.Pushable>
                    </Responsive>
                </header>
        );
    }
}
