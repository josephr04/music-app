/**
 * @param {Array} array
 * @param {number} count
 * @returns {Array}
 */
export const getRandomItems = (array, count) => {
    if (!Array.isArray(array)) {
        console.warn('getRandomItems: First argument must be an array.');
        return [];
    }
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};
