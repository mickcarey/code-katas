const User = (() => {
  const Defaults = {
    configurable: true,
    writable: false,
  };

  const Properties = {
    rank: "_rank",
    progress: "_progress",
  };

  const RankSystem = {
    ranks: [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8],
    minRankIndex: 0,
    progressInitial: 0,
    progressThreshold: 100,
  };

  // Add dynamic properties after object created
  RankSystem.maxRankIndex = RankSystem.ranks.length - 1;
  RankSystem.minRank = RankSystem.ranks[RankSystem.minRankIndex];
  RankSystem.maxRank = RankSystem.ranks[RankSystem.maxRankIndex];

  const calculatePoints = (currentRank, activityRank) => {
    const rankDiff =
      RankSystem.ranks.indexOf(activityRank) -
      RankSystem.ranks.indexOf(currentRank);

    if (rankDiff === 0) return 3;
    else if (rankDiff === -1) return 1;
    else if (rankDiff <= -2) return 0;
    else return 10 * rankDiff * rankDiff;
  };

  const getNewRank = (currentRank, levelsCleared = 1) => {
    const nextRankIndex = RankSystem.ranks.indexOf(currentRank) + levelsCleared;
    return nextRankIndex >= RankSystem.maxRankIndex
      ? RankSystem.maxRank
      : RankSystem.ranks[nextRankIndex];
  };

  // Possibly expensive operation, just experimenting with preventing direct property updates to User
  const updateValue = (obj, propertyName, callback) => {
    Object.defineProperty(obj, propertyName, { writable: true });
    obj[propertyName] = callback();
    Object.defineProperty(obj, propertyName, { writable: false });
  };

  // Public object
  class User {
    constructor() {
      // Experimenting with defineProperty to configure access level of properties and prevent direct writes
      Object.defineProperty(this, Properties.rank, {
        ...Defaults,
        value: RankSystem.minRank,
      });
      Object.defineProperty(this, Properties.progress, {
        ...Defaults,
        value: RankSystem.progressInitial,
      });
    }

    get rank() {
      return this[Properties.rank];
    }

    get progress() {
      return this[Properties.progress];
    }

    incProgress(activityRank) {
      if (RankSystem.ranks.indexOf(activityRank) === -1)
        throw new Error("Invalid activity rank provided");

      if (this.rank === RankSystem.maxRank) return;

      updateValue(this, Properties.progress, () => {
        return this.progress + calculatePoints(this.rank, activityRank);
      });

      if (this.progress >= RankSystem.progressThreshold) {
        updateValue(this, Properties.rank, () => {
          return getNewRank(
            this.rank,
            Math.floor(this.progress / RankSystem.progressThreshold)
          );
        });

        updateValue(this, Properties.progress, () => {
          return this.rank === RankSystem.maxRank
            ? RankSystem.progressInitial
            : this.progress % RankSystem.progressThreshold;
        });
      }
    }
  }

  return User;
})();