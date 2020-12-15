import React from 'react';
import GoogleLogin from 'react-google-login';

const Google = (props) => {

    const responseGoogle = (response) => {
        return props.socialGLogin(response);
    };

    let gContent;
    if (props.loggedIn) {
        gContent = null;
    } else {
        gContent = (
            <GoogleLogin
                clientId="743743334859-63732b55orqomp4iv173iajnd0vknmpv.apps.googleusercontent.com"
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
        );
    }
    return (
        <div>{gContent}</div>

    );
};
export default Google;