class UndergroundSystem {
    routes: Record<string, {totalCustomers: number, totalTime: number}>
    customerData: Record<number, {checkInStation: string, checkInTime: number}>
    constructor() {
        // routes keeps track of the route from one station to the next, as well as the number of ppl that have taken that route and the aggregate time
        this.routes = {}
        // keeps track of the customers and when they have checked in from which station and at what time
        this.customerData = {}
    }
    checkIn(id: number, stationName: string, time: number): void{ // checks in the customer to the customerData map 
        this.customerData[id] = {
            checkInStation: stationName,
            checkInTime: time
        }
    }
    checkOut(id: number, stationName: string, time: number): void {
        // grab customer data
        const {checkInStation, checkInTime} = this.customerData[id]
        // add the data to the routes map if dne
        if (this.routes[`${checkInStation}-${stationName}`] == undefined) {
            this.routes[`${checkInStation}-${stationName}`] = {
                totalCustomers:1, 
                totalTime: time - checkInTime
            }
            return
        } 

        // add to the existing data
        let {totalCustomers, totalTime} = this.routes[`${checkInStation}-${stationName}`]
        totalCustomers++
        totalTime += (time - checkInTime)
        this.routes[`${checkInStation}-${stationName}`] = {
            totalCustomers, 
            totalTime
        }
    }
    getAverageTime(startStation: string, endStation: string) {
        const {totalCustomers, totalTime} = this.routes[`${startStation}-${endStation}`]
        return totalTime / totalCustomers
    }
}

const newSystem = new UndergroundSystem()
newSystem.checkIn(1, 'london', 10)
newSystem.checkOut(1, 'paris', 14)
console.log(newSystem.getAverageTime('london', 'paris')) // 4
newSystem.checkIn(2, 'london', 55)
newSystem.checkOut(2, 'paris', 61)
console.log(newSystem.getAverageTime('london', 'paris')) // 5