import axios from "axios";

let ProxyUrl = "https://cor-anywhere.herokuapp.com/http://arcatalog.vn/3dart/admin/tn/api/";

let BaseUrl = "http://arcatalog.vn/3dart/admin/tn/api/";

const deviceid = Math.floor(Math.random() * (10000000000000 - 10000000 + 1) + 100000000);

// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const headers = {
    "access-key": "[CFSBGpJ{-?}VsP$y[gbn&TS#!X@$7-E@sg>Sf~rrr][0YMr3^v>%3#sDSNDcugh",
    "token": localStorage.getItem("token"),
    "deviceid": localStorage.getItem("deviceid")
};

const getData = async(url) => {
    try {
        let res = await axios.get(`${BaseUrl}${url}`);
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
};


const getDataWithHeader = async(url) => {
    try {
        let res = await axios.get(`${ProxyUrl}${url}`, {
            headers: headers
        });
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
};

const getDataDetail = async(url, query, params) => {
    try {
        let res = await axios.get(`${BaseUrl}${url}/${query}`);
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
};


const getDataDetailWithHeader = async(url, query, params) => {
    try {
        let res = await axios.get(`${ProxyUrl}${url}/${query}`, {
            headers: headers
        });
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
};


const postData = async(url, params) => {
    try {
        let res = await axios.post(`${BaseUrl}${url}`, params);
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
};


const postDataWithHeader = async(url, params) => {
    try {
        let res = await axios.post(`${ProxyUrl}${url}`, params, {
            headers: headers
        });
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
};


export { getData, getDataWithHeader, postData, postDataWithHeader, getDataDetail, getDataDetailWithHeader };