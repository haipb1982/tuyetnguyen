import { getData, postData, getDataDetail } from "../../api/Service";

export default {

    async POST_LOGIN({ commit }, data) {
        try {
            // console.log(data);
            let response = await postData("login", data);
            return response;
        } catch (error) {
            console.log(console.error);
        }
    },

    async POST_LOGOUT({ commit }, data) {
        try {
            let response = await postData("logout", data);
            return response;
        } catch (error) {
            console.log(console.error);
        }
    },

    async POST_FORGOT_PASS({ commit }, data) {
        try {
            let response = await postData("forgot_pass", data);
            return response;
        } catch (error) {
            console.log(console.error);
        }
    },

    async GET_PROFILE({ commit }, data) {
        try {
            let response = await getData("profile");
            return response;
        } catch (error) {
            console.log(console.error);
        }
    },

    async UPDATE_PROFILE({ commit }, data) {
        try {
            let response = await postData("update_profile", data);
            return response;
        } catch (error) {
            console.log(console.error);
        }
    },

    async UPDATE_AVATAR({ commit }, data) {
        try {
            let response = await postData("update_image", data);
            return response;
        } catch (error) {
            console.log(console.error);
        }
    },

    async HOME_PAGE_LIST({ commit }) {
        try {
            console.log(' vao day')
            let response = await getData("homepage_list");
            return response;
        } catch (error) {
            console.log(console.error);
        }
    },

    async HOME_PAGE_DETAIL({ commit }, data) {
        try {
            let response = await getDataDetail("homepage_detail", data);
            return response;
        } catch (error) {
            console.log(console.error);
        }
    },

    async PRODUCT_DETAIL({ commit }, data) {
        try {
            let response = await getDataDetail("product_detail", data);
            return response;
        } catch (error) {
            console.log(console.error);
        }
    },

    async PRODUCT_LIST({ commit }, data) {
        try {
            let response = await getDataDetail(`product_list/${data}/?store/3`);
            return response;
        } catch (error) {
            console.log(console.error);
        }
    },

    async ADD_FAVORITE({ commit }, data) {
        try {
            let response = await postData("add_favorite_product", data);
            return response;
        } catch (error) {
            console.log(console.error);
        }
    },

    async DELETE_FAVORITE({ commit }, data) {
        try {
            let response = await postData("delete_favorite_product", data);
            return response;
        } catch (error) {
            console.log(console.error);
        }
    },

    async FAVORITE_LIST({ commit }, data) {
        try {
            let response = await getData(`list_favorite_product`);
            return response;
        } catch (error) {
            console.log(console.error);
        }
    },
};