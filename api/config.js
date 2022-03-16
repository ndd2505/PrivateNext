const isDevMode = process.env.NODE_ENV;
const apiCovid = (isDevMode ? process.env.REACT_APP_COVID_DEV : process.env.REACT_APP_COVID);