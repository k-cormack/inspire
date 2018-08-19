let url = '//bcw-getter.herokuapp.com/?url=';
let url2 = 'http://worldclockapi.com/api/json/mst/now';
let apiUrl = url + encodeURIComponent(url2);
//Do Not Edit above we have to go through the bcw-getter to access this api


// @ts-ignore
const clockApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});



export default class ClockService {
    getClock(callWhenDone) {
        console.log("clock is wired")
        clockApi().then((res) =>  {
            callWhenDone(res.data)
        })

        
    }
}


