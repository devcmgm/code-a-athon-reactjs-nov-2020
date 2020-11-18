import {Amplify, Auth} from 'aws-amplify';
import config from "./config";
/*
AWS Amplify is a set of products and tools that enables mobile and front-end web developers to build and deploy secure, scalable full stack applications, powered by AWS.
 */
let amplifyConfig = {
    Auth: {
        mandatorySignIn: true,
        region: config.cognito.REGION,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID,
        oauth: {
            domain: config.cognito.APP_CLIENT_DOMAIN,
            redirectSignIn: window.location.origin + "/",
            redirectSignOut: window.location.origin,
            scope: ['email', 'openid', 'aws.cognito.signin.user.admin', 'profile'],
            responseType: 'token'
        }
    },
    Storage: {
        region: config.s3.REGION,
        bucket: config.s3.BUCKET,
        identityPoolId: config.cognito.IDENTITY_POOL_ID
    },
    API: {
        endpoints: [
            {
                name: "changeRequestAPI",
                endpoint: config.apiGateway.URL,
                region: config.apiGateway.REGION
            },
        ]
    }
};

export const configureAuth = () => Amplify.configure(amplifyConfig);

export const authCheck = async () => {
    configureAuth()
    try {
        await Auth.signIn("user1@cms.hhs.local", "Passw0rd!");
        var user = await Auth.currentAuthenticatedUser();
        console.log(JSON.stringify(user.attributes));
        return true;
    } catch (error) {
        console.log(
            "There was an error while loading the user information.",
            error
        );
        return false
    }
}
