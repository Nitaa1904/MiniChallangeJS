//Study Case Struktur Data
const  x = 21;
const y = 23;
let z = x + y -19;
console.log(z);



// Study Case Logical Operator
console.log(false || 10 && false);



// Study Case: Data Type - Array Sorting
const scores = [10,8,7,5,6,3,2,4,1]
scores.sort(function(a, b) {
    return a - b;
});
console.log(scores);



// Study Case: Data Type - Array Find
const countries = ["Albania", "Turkey", "Netherland", "Germany", "Spain", "England", "Albania", "Germany"]
// Mencari Indeks dari "Spain" dan "England"
const spainIndex = countries.indexOf("Spain");
const englandIndex = countries.indexOf("England");

if (spainIndex !== -1) {
    console.log(`Spain ditemukan pada indeks ${spainIndex}`);
}else{
    console.log("Spain tidak ditemukan");
}
if (englandIndex !== -1) {
    console.log(`England ditemukan pada indeks ${englandIndex}`);
}else{
    console.log("England tidak ditemukan")
}



// Study Case: Data Type - Array Filter
const duplicates = countries.filter((item, index) => countries.indexOf(item) !== index);

console.log(duplicates);