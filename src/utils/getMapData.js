import userMeters from "../mocks/data";
import axios from "axios";

const mapReq = {
    getMeterInfo:async function() {
        return Promise.resolve({message:"Info"})
    },
    getMeters: async function() {
        console.log("data");
        return Promise.resolve(userMeters)
    }
}

export default mapReq;