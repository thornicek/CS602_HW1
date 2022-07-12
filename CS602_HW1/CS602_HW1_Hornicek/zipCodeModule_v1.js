const { lookupByZipCode } = require('./zipCodeModule_v2');
const data = require('./zips.json');

module.exports.lookupByZipCode =  (zip) => {
    for (const element of data){
        if(element._id === zip){
            console.log(element)
        return element
        }
    }
};



module.exports.lookupByCityState = (city, state) => {
		let cityState = [];
        for (const element of data){
            if(element.state === state && element.city === city){
                cityState.push(element);
            }
        // cityState.forEach(function(entry){
        //     console.log(entry);
        // });
        }
        let stateArr = {
            city : city,
            state : state,
            infoState : cityState
        };

        function printObject() {
            let printStateCity = JSON.stringify(stateArr);
            console.log(printStateCity);
        }
        printObject();
};

module.exports.getPopulationByState = (state) => {
		total = 0;
        for(const element of data){
            if(element.state === state){
                total += element.pop
            }
        }
        // console.log(total);
        let populationObj = {
            state : state,
            pop : total
        }
        function printObject() {
            let printStatePopulation = JSON.stringify(populationObj);
            console.log(printStatePopulation);
        }
        printObject();
};

