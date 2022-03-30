//SERVER
const herokuserver = "https://pacific-sierra-45747.herokuapp.com";
const SERVER = herokuserver;

// APPEL AU BACK POUR CHANNELS:   
export const API_ALL_CHANNELS = fetch(`${SERVER}/getChannels`)
.then(response => response.json())
.then( async (responseJson) => {
    return responseJson.channels;
})