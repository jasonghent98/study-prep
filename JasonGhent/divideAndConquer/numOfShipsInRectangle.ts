/**
 * // This is Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Sea() {
 *     @param {integer[]} topRight
 *     @param {integer[]} bottomLeft
 *     @return {boolean}
 *     this.hasShips = function(topRight, bottomLeft) {
 *         ...
 *     };
 * };
 */

/**
 * @param {Sea} sea
 * @param {integer[]} topRight
 * @param {integer[]} bottomLeft
 * @return {integer}
 divide and conquer:
 break up the rectangle into 4 quadrants recursively
 
 
 */

var countShips = function(sea, topRight, bottomLeft) {
    const countAllShips = (topRight, bottomLeft) => {
        const [xTop, yTop] = topRight
        const [xBottom, yBottom ] = bottomLeft
         // terminal condition
        if (xBottom > xTop || yBottom > yTop) return 0
        if (!sea.hasShips(topRight, bottomLeft)) return 0
        // base case is if we've reached the singularity and have found a ship
        if (xTop === xBottom && yTop === yBottom) {
            if (sea.hasShips(topRight, bottomLeft)) return 1
            return 0
        }
    
        const midX = Math.floor((xBottom + xTop) / 2)
        const midY = Math.floor((yBottom + yTop) / 2)
        // break up the quadrant into 4 subquadrants
        const topLeftQuad = countAllShips([midX, yTop], [xBottom, midY + 1])
        const topRightQuad = countAllShips(topRight, [midX+1, midY+1])
        const bottomLeftQuad = countAllShips([midX, midY], bottomLeft)
        const bottomRightQuad = countAllShips([xTop, midY], [midX+1, yBottom])
        // return the total count
        return (topLeftQuad + topRightQuad + bottomLeftQuad + bottomRightQuad);
    }
    return countAllShips(topRight, bottomLeft);
};
