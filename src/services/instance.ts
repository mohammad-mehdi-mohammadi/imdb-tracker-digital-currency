import axios, {Method} from "axios";

const client = axios.create({
    baseURL: import.meta.env.VITE_IMDB_BASE_URL
});

client.defaults.timeout = 20000;
client.interceptors.response.use(
    (config) => config,
    (error: any) => {

        return Promise.reject(error);
    }
);
const call = async <T>(
    method: Method,
    url: string,
    data: any = {},
    header: any = {}
): Promise<T> => {

    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...header
    };

    const request: any = {headers, method, url};

    try {
        const response = await client(request);
        return Promise.resolve(response.data);
    } catch (error: any) {
        let err = null;
        if (error.response) {
            err = error.response;
        } else if (error.request) {
            err = {message: error.request._response};
        } else {
            err = error;
        }
        return Promise.reject(err);
    }
};

export default {
    delete: <T, D = any>(url: string, data?: D | null) =>
        call<T>("delete", url, data),
    get: <T, D = any>(url: string, data?: D | null, header?: D | null) =>
        call<T>("get", url, data, header),
    patch: <T, D = any>(url: string, data?: D | null) =>
        call<T>("patch", url, data),
    post: <T, D = any>(url: string, data?: D | null, header?: D | null) =>
        call<T>("post", url, data, header),
    put: <T, D = any>(url: string, data?: D | null) => call<T>("put", url, data),

};
