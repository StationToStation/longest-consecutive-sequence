module.exports = function longestConsecutiveLength(array) {
    if (array.length == 0) return 0;

    let longestStreak = 1;
    for (let i = 0; i < array.length; i++) {
        let left = array[i] - 1,
            right = array[i] + 1,
            streak = 1;

        while (array.indexOf(left) != -1) {
            streak++;
            array.splice(array.indexOf(left), 1);
            left--;
        }
        while (array.indexOf(right) != -1) {
            streak++;
            array.splice(array.indexOf(right), 1);
            right++;
        }
        longestStreak = (longestStreak > streak) ? longestStreak : streak;
    }
    return longestStreak;
}
