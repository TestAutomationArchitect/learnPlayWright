import dotenv from 'dotenv';

dotenv.config();

const globalSetup = async() => {
    switch (process.env.Jenkins_Playwright_Env) {
        case 'qa':
            process.env.BASE_UI_URL = process.env.REACT_APP_URI_QA;
            process.env.USERNAME = process.env.REACT_APP_USERNAME;
            process.env.PASSWORD = process.env.REACT_APP_PASSWORD;
            break;
        
        case 'feature':
            process.env.BASE_UI_URL = process.env.REACT_APP_URI_FEATURE;
            process.env.USERNAME = process.env.REACT_APP_USERNAME;
            process.env.PASSWORD = process.env.REACT_APP_PASSWORD;
            break;

        default:
            process.env.BASE_UI_URL = process.env.REACT_APP_URI_FEATURE;
            process.env.USERNAME = process.env.REACT_APP_USERNAME;
            process.env.PASSWORD = process.env.REACT_APP_PASSWORD;
            break;
    }

    console.log('UI url: ', process.env.BASE_UI_URL);

};

export default globalSetup;

