const EventEmitter = require('events').EventEmitter;
const data = require('./zips.json');



// Custom class 
class ZipCodeEmitter  extends EventEmitter {
	
	// member functions

	lookupByZipCode(zip)  {
		var searchObject = data.find((data) => data._id === zip);
		console.log("Event lookUpByZipCode raised!");
		this.emit("lookUpByZipCode",searchObject);
	}

	lookupByCityState(city, state)  {
		const filteredCities = data.filter( x=>
            x.state === state &&
            x.city === city
        );

        const filteredCitiesMapped = filteredCities.map(cityObject => {return {"_id": cityObject._id, "pop": cityObject.pop}})

        result = {
            "city": city,
            "state": state,
            "data": filteredCitiesMapped
        } 
	}

	getPopulationByState(state) {
		let filteredState = data.filter(element => element.state === state)
		let total = filteredState.reduce(function (previousValue, currentValue){
        return previousValue + currentValue.pop;
		},0);

		result = {
			"state": state,
			"pop": total
		}
	}

}

module.exports.ZipCodeEmitter = ZipCodeEmitter;

