// Object Destructuring

const band = {
    bandName : "led zeppelin",
    famousSong : "Stirway to Heaven",
    year : 1899
};

// const bandName = band.bandName;
// const bandSong = band.famousSong;

// console.log(bandName);
// console.log(bandSong);


const {bandName, famousSong , ...rest} = band;
console.log(bandName);
console.log(famousSong);
console.log(rest);