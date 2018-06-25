const NUM_CATS = 8;
let cats = [];


class CatClicker {
    constructor(url, name, index) {
        this.imgUrl = url;
        this.clickCounter;
        this.catPic;
        this.domName;
        this.counter = 0;
        this.index = index;
        this.name = name;
    }
    getDomElements() {
        this.clickCounter = document.getElementById(`numClicks-${this.index}`);
        this.domName = document.getElementById(`catName-${this.index}`);
        this.catPic = document.getElementById(`catPic-${this.index}`);
    }
    addOne() {
        let self = this;
        this.catPic.addEventListener('click', function(){
            self.counter += 1;
            self.clickCounter.textContent = self.counter;
        }, false);
        this.clickCounter.addEventListener('click', function(){
            self.counter++;
            self.clickCounter.textContent = self.counter;
        }, false);
        this.domName.addEventListener('click', function(){
            self.counter++;
            self.clickCounter.textContent = self.counter;
        }, false);
    }
    selectCat() {
        buildCat();
        this.getDomElements();
        this.addOne();
    }
}

const catPicArray = [
    ['img/cat-2083492_1920.jpg', 'Rudy'],
    ['img/cat-1285634_1920.png', 'James'],
    ['img/cat-323262_1920.jpg', 'Buckbeak'],
    ['img/animal-339400_1920.jpg', 'Ralph'],
    ['img/cat-914110_1920.jpg', 'Hendricks'],
    ['img/cat-1192026_1920.jpg', 'Flava'],
    ['img/cat-1647775_1920.jpg', 'Arnie'],
    ['img/cat-694730_1920.jpg', 'Sam']
];


for (let i = 0; i < NUM_CATS; i++) {
    cats.push(new CatClicker(catPicArray[i][0],catPicArray[i][1], i));
}
let activeCat = cats[0];

// Build the dom.  Run through an array of catClicker objects and assemble the dom
const mainCat = document.querySelector('.main-cat');
function buildCat() {
    mainCat.innerHTML =
    `
    <div class="container">
      <img id="catPic-${activeCat.index}" src=${activeCat.imgUrl} alt="A cat image to be clicked on">
      <div id="catName-${activeCat.index}" class="name noselect">${activeCat.name}</div>
      <div id="numClicks-${activeCat.index}" class="counter noselect">${activeCat.counter}</div>
    </div>
    `;

}
buildCat();
const sideCat = document.querySelector('.side-cat');
let thisCat = [];
for (let cat of cats) {
    sideCat.innerHTML +=
    `
    <li><div id="sideCatName-${cat.index}" class="side-cat-list">${cat.name}</div></li>
    `;
}
for (let cat of cats) {
    thisCat[cat.index] = document.getElementById(`sideCatName-${cat.index}`);
    thisCat[cat.index].addEventListener('click', function(){
        activeCat = cats[cat.index];
        cats[cat.index].selectCat();
    }, false);
}
// Get Dom Elements and Add an event listener to each objects

activeCat.getDomElements();
activeCat.addOne();
