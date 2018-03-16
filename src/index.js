module.exports = function longestConsecutiveLength(array) {
  if (array.length == 0) return 0;

  let longestStreak = 1;
  let set = new Set(array);

  for (let number of set.values()) {
      let compared = number - 1,
          streak = 1;
      while (set.has(compared)) {
          set.delete(compared);
          compared--;
          streak++;
      }
      compared = number + 1;
      while (set.has(compared)) {
          set.delete(compared);
          compared++;
          streak++;
      }
      longestStreak = (streak > longestStreak) ? streak : longestStreak;
  }
  return longestStreak;
}
