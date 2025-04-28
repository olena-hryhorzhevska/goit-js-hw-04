// prettier-ignore
const profile = {
  username: "Jacob",
  playTime: 300,
  changeUsername(newName) {
    this.username = newName;
  },
  updatePlayTime(hours) {
    this.playTime += hours;
  },
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

// const profile = {
//   username: "Jacob",
//   playTime: 300,
//   changeUsername(newName) {
//     this.username = newName;
//   },
//   updatePlayTime(hours) {
//     this.playTime += hours;
//   },
//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
//   },
// };

// const profile2 = {
//   username: "Lena",
//   playTime: 10,
// };

// profile2.changeUsername = profile.changeUsername;
// profile2.updatePlayTime = profile.updatePlayTime;
// profile2.getInfo = profile.getInfo;

// console.log(profile2.getInfo());
// console.log(profile.getInfo());

// profile.updatePlayTime(-100);
// profile2.updatePlayTime(100);
// profile.changeUsername("Jac");
// profile2.changeUsername("Lenochka");

// console.log(profile2.getInfo());
// console.log(profile.getInfo());
