var invalidTransactions = function(transactions) {
    let invalid = []
    let map = {} 
     
    for (let trans of transactions) {
        let [name, time, amount, city] = trans.split(",")
        
        if (map[name]){
            map[name].push({time, city})
        } else {
            map[name] = [{time, city}]
        }
        
    }
    
    for (let trans of transactions) {
        
        if (isInvalid(trans, map)){
            invalid.push(trans)
        }
    }
    
    return invalid
};


function isInvalid(trans, map) {
    
  let [name, time, amount, city] = trans.split(",")
  
   if (amount > 1000) return true   
  let prevTrans = map[name]
  
   for (let trans of prevTrans) {
       
       if (Math.abs(trans.time - time) <= 60 && trans.city !== city) return true
   }
    
    return false
}