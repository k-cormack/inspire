import ClockService from "./clock-service.js"

let clockService = new ClockService()


export default class ClockController {
    constructor () {
        this.getClock() 
    }
    getClock(clock) {
        clockService.getClock(clock => {
            document.getElementById("clock").innerHTML = `
            <div>${clock.currentDateTime}</div>
            `
            console.log(clock)
        })
    }
}

