import { userMeters, cellTower } from "../mocks/data";

const mapReq = {
    getMeterInfo:async function() {
        return Promise.resolve({message:"Info"})
    },
    getCellTower:async function() {
        return Promise.resolve(cellTower);
    },
    getMeters: async function() {
        console.log("data");
        return Promise.resolve(userMeters)
    }
}

export default mapReq;