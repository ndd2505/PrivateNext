import _ from "lodash";
import queryString from 'query-string';

const createHeaders = (token_auth, up_file = false, uid = 0) => {
    // const debug = AdminStorage.getItem("debug");
    let headers = {
        "Content-Type": 'application/json',
        'Accept': 'application/json',
        'User-Agent': `${navigator.userAgent} - ${uid}`,
    };
    if (up_file) {
        headers = {}
    }
    // if (token_auth) {
    //     headers.Authorization = "Bearer " + token_auth //TODO: JWT token
    // }

    // headers["x-correlation-id"] = uuid_v4();
    // headers["x-request-id"] = `${uuid_v4()}-${uid}`;
    // if (debug) {
    //     headers["x-debug"] = debug;
    // }
    return headers
};

const callApi = async(method, endpoint, body, options = {}) => {
    const { baseUrl, refresh_token } = options;
    // let token_FE = AdminStorage.getItem('token_FE');
    // let user = token_FE ? jwt.decode(token_FE, Constant.JWT_SECRET_KEY) : null;

    query = queryString.stringify(search) ? query + "?" + queryString.stringify(search) : query;
    let postOptions = {
        method: method
    };
    //set token_auth
    let token = "";
    let uid = "";
    // if (refresh_token) {
    //     token = refresh_token;
    // } else {
    //     token = user && user.token_auth ? user.token_auth : "";
    //     uid = user && user.data.id ? user.data.id : "";
    // }
    if (body) {
        if (body.up_file) {
            postOptions.headers = createHeaders(token, true);
            postOptions.body = body.file
        } else {
            postOptions.body = JSON.stringify(body);
        }
    }
    postOptions.headers = postOptions.headers ? postOptions.headers : createHeaders(token, false, uid);
    const res = await fetch(`${baseUrl}${query}`, postOptions).then(parseJSON);
    // if (res.code === Constant.CODE_EXPIRED_TOKEN) {
    //     return await retryCall(baseUrl, postOptions, query, body?.up_file, uid);
    // }
    return res;
};

const mapObjectToUrlParams = (params) => {
    return queryString.stringify(params, {arrayFormat: 'bracket'})
};

const get = (endpoint, { params, ...restOptions } = {}) => {
    let endPoint = endpoint;
    if (params) {
        endPoint = `${endpoint}?${mapObjectToUrlParams({...params})}`;
    }
    return callApi('GET', endPoint, null, {...restOptions });
};
const post = (endpoint, { body, ...restParams } = {}) => {
    return callApi('POST', endpoint, body, {...restParams });
};

export function fnGetV2(service, url, args = {}, delay = 0) {
    // let refresh_token = _.get(args, ['refresh_token'], null);
    // delete args.refresh_token;

    return new Promise((resolve, reject) => {
        let restOptions = {
            baseUrl: service,
            params: args,
            // refresh_token: refresh_token
        };

        return get(url, restOptions)
            .then(response => resolve(response))
            .catch(error => reject(error));
    }).then(response => {
        if (_.get(response, 'code') === 200) {
            return _.get(response, 'data');
        } else {
            // console.log(response)
            // alert(_.get(response, 'msg'))
            // store.dispatch({
            //     type: types.PUT_TOAST_ERROR,
            //     payload: { msg: _.get(response, 'msg'), uid: Math.random() }
            // });
        }
    });
}

export function fnPostV2(service, url, args = {}, delay = 0) {
    return new Promise((resolve, reject) => {
        let restOptions = {
            baseUrl: service,
            body: {...args}
        };

        return post(url, restOptions)
            .then(response => resolve(response))
            .catch(error => reject(error));
    }).then(response => {
        if (_.get(response, 'code') === 200) {
            return _.get(response, 'data');
        } else {
            console.log(response)
            // store.dispatch({
            //     type: types.PUT_TOAST_ERROR,
            //     payload: {msg: _.get(response, 'msg'), uid: Math.random()}
            // });
        }
    });
}