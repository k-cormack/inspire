//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js"

let imageService = new ImageService()


export default class ImageController {
    constructor() {
        this.setImage()
    }
    setImage() {
        //this is the line that invokes the getImage function from the Service.
        imageService.getImage(image => {
            document.getElementById("background").innerHTML = `
            <img src="${image.url}">
            `
            
            console.log(image)
        })
    }
}
