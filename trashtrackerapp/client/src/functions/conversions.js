//448,00 tons of plastic in ocean
// 896,000,000 lbs ^
// 1 ton 2000 lbs
// 448,000 x
// 1 ton = 907,185 g
// avg water bottle 18.9g
//convert pounds of plastic to

function poundsToGrams(numOfPounds) {
  return numOfPounds * 453;
}

function gramsToPounds(numOfGrams) {
  // 453 g = 1 lb
  let pounds = numOfGrams / 453;
  return pounds;
}

console.log(waterBottlestoPounds(430));

function waterBottlestoPounds(numWaterBottles) {
  let grams = numWaterBottles * 18.9;
  let pounds = gramsToPounds(grams);

  return pounds;
}

let fishKilledPerLB = 0.0018;

function savedFish(numOfPounds) {
  let fish = numOfPounds * fishKilledPerLB;
  return fish;
}

function co2BikeSavings(numOfMiles) {
  let gramsSaved = numOfMiles * 411;
  return gramsSaved;
}

export function BottlesToFishSaved(numOfBottles) {
  let lb = waterBottlestoPounds(numOfBottles);
  return savedFish(lb).toFixed(3);
}

// console.log(BottlesToFishSaved(this.state.totalPlastics));

//1,100,000  sea animals die a year from plastic
//448,000 tons of plastic in ocean
//1 ton of plastic = 2.45 fish die
//2000 lbs kill 2.45 fish

// module.exports = {
//   savedFish: savedFish,
//   co2BikeSavings: co2BikeSavings,
//   BottlesToFishSaved: BottlesToFishSaved
// };

let treeKilledPerlBpaper = 0.0085;
let gallonOfOilPerlBpaper = 0.341;
let literofWaterPerlBpaper = 13.25;

export function PaperToTreesSaved(amountofPaper) {
  let treesaved = amountofPaper * 0.0085;
  return treesaved.toFixed(5);
}

export function GallonofOilSaved(amountofPaper) {
  let oilsaved = amountofPaper * 0.341;
  return oilsaved.toFixed(3);
}

export function WaterSavedTree(amountofPaper) {
  let watersaved = amountofPaper * 13.25;
  return watersaved.toFixed(3);
}
