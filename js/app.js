class CatClicker {
  constructor(url, index) {
    this.imgUrl = url;
    this.clickCounter;
    this.catPic;
    this.counter = 0;
    this.index = index;
  }
  getDomElements() {
    this.clickCounter = document.getElementById(`numClicks-${this.index}`);
    this.catPic = document.getElementById(`catPic-${this.index}`);
  }
  addOne() {
    let self = this;
    this.catPic.addEventListener('click', function(){
      self.counter += 21;
      self.clickCounter.textContent = self.counter;
    }, false);
    this.clickCounter.addEventListener('click', function(){
      self.counter++;
      self.clickCounter.textContent = self.counter;
    }, false);
  }
}

const catPicArray = [
  'img/cat-2083492_1920.jpg',
  'img/cat-1285634_1920.png',
  'img/cat-323262_1920.jpg',
  'img/animal-339400_1920.jpg'
];

let cats = [];
const numCats = 4;
for (let i = 0; i < numCats; i++) {
  cats.push(new CatClicker(catPicArray[i], i));
}

// Build the dom.  Run through an array of catClicker objects and assemble the dom
const containerDiv = document.querySelector('.flex-container');
for (let cat of cats) {
  containerDiv.innerHTML +=
    `
    <div class=\"container\">
      <img id=\"catPic-${cat.index}\" src=${catPicArray[cat.index]} alt=\"A cat image to be clicked on\">
      <div id=\"numClicks-${cat.index}\" class=\"counter noselect\">0</div>
    </div>
    `
}

// Get Dom Elements and Add an event listener to each objects
for (let cat of cats) {
  cat.getDomElements();
  cat.addOne();
}
//




// let counter = 0;
// catPic.addEventListener('click', function(){
//   counter += 21;
//   console.log(counter);
//   clickCounter.textContent=counter;
// }, false);
// clickCounter.addEventListener('click', function(){
//   counter++;
//   console.log(counter);
//   clickCounter.textContent=counter;
// }, false);
