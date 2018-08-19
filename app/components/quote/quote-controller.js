import QuoteService from "./quote-service.js";

let quoteService = new QuoteService


export default class QuoteController {
	constructor() {
		this.setQuote()
	}

	setQuote() {
		//this is the line that invokes the getQuote function from the Service.
		quoteService.getQuote(quote => {
			document.getElementById("quote").innerHTML = `
			<h4>${quote.quote}</h4>
			`
			console.log('What is the quote', quote)
		})
	}
}
