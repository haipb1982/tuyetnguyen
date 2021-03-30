import axios from "axios";

let BaseUrl = "https://arcatalog.vn/3dart/admin/tn/api/";

const deviceid = Math.floor(Math.random() * (10000000000000 - 10000000 + 1) + 100000000);

const getData = async (url, params) => {
  try {
    let res = await axios.get(`${BaseUrl}${url}`, {
      params
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};


const getDataDetail = async (url,query, params) => {
  try {
    let res = await axios.get(`${BaseUrl}${url}/${query}`, {
      params
    });
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};


const postData = async (url, params) => {
  try {
    let res = await axios.post(`${BaseUrl}${url}`,params);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};



export { getData,postData,getDataDetail };
