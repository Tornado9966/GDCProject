import React from 'react';
import FacebookLogin from 'react-facebook-login';

const Facebook = (props) => {

    const responseFacebook = (res) => {
        return props.socialFbLogin(res);
    };

    let fbContent;
    if (props.loggedIn) {
        fbContent = null;
    } else {
        fbContent = (
            <FacebookLogin
                appId="405991763355169"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                icon="fa-facebook"
            />
        );

        return (
            <div>{fbContent}</div>
        );
    }
};

export default Facebook;