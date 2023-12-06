import axiosInstance from "helpers/AxiosInstance";

const API_URL = "panel/admin/user?selection=true&search=";

class UsersService {
    getAllUsers(history) {
        return axiosInstance(history)
            .get(`${API_URL}`)
            .then(response => {
                if (response.data) {
                    return response.data;
                }
            });
    }
}

export default new UsersService();
