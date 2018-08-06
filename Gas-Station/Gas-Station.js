/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    
    for (let i = 0; i < gas.length; i++) {
        let travelingIndex = i;
        let circleLength = gas.length - 1;
        let gasAmount = gas[i]-cost[i];
        while (gasAmount > 0 && circleLength > 0) {
            circleLength--;
            travelingIndex = (travelingIndex + 1) % gas.length;
            gasAmount = gasAmount + gas[travelingIndex] - cost[travelingIndex];
        }
        if (circleLength === 0 && gasAmount >= 0)
            return i;
    }
    
    return -1;
};