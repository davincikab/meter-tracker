import userMeters from "../mocks/data";

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