import data from "./fakeData.json";

const User = [...data];

const shuffleArray = User => {
    for (let i = User.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [User[i-1], User[j]] = [User[j],User[i-1]];
    }
}
 
shuffleArray(User);

export default User;