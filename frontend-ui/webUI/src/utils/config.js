export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    ALLOW_DEV_LOGIN: "true",
    s3: {
        REGION: "us-east-1",
        BUCKET: "bucket"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://??????????.execute-api.us-east-1.amazonaws.com/myapp"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_myapp",
        APP_CLIENT_ID: "myid",
        APP_CLIENT_DOMAIN: "mydomain-us-east-1.amazoncognito.com",
        IDENTITY_POOL_ID: "us-east-1:mypool",
    }
};

