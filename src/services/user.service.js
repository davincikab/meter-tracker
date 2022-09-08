import axios from 'axios';
import authHeader from './auth-header';

const API_ENDPOINTS = "https://intelligent-network-api-ad5p4ure7q-uc.a.run.app/";


class UserService {
    getChartDataCollection1(serialNumber, toDate) {
        let url = 'api/Dashboard/GetChartDataCollection1';
        return axios.get(
            `${API_ENDPOINTS}${url}?serialNumber=${serialNumber}&toDate=${toDate}`, 
            { headers: authHeader() }
        );
    }


    getDashboardChartCollectionByDate(serialNumber, fromDate, toDate) {
        let url = '/api/Dashboard/GetDashboardChartCollectionByDate';

        return axios.get(
            `${API_ENDPOINTS}${url}?serialNumber=${serialNumber}&toDate=${toDate}&fromDate=${fromDate}`, 
            { headers: authHeader() }
        );
    }
}


export default new UserService();