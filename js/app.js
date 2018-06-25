const NUM_CATS = 4;

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

let cats = [];
for (let i = 0; i < NUM_CATS; i++) {
    cats.push(new CatClicker(catPicArray[i][0],catPicArray[i][1], i));
}

// Build the dom.  Run through an array of catClicker objects and assemble the dom
const containerDiv = document.querySelector('.flex-container');
for (let cat of cats) {
    containerDiv.innerHTML +=
    `
    <div class="container">
      <img id="catPic-${cat.index}" src=${cat.imgUrl} alt="A cat image to be clicked on">
      <div id="catName-${cat.index}" class="name noselect">${cat.name}</div>
      <div id="numClicks-${cat.index}" class="counter noselect">0</div>
    </div>
    `;
}

// Get Dom Elements and Add an event listener to each objects
for (let cat of cats) {
    cat.getDomElements();
    cat.addOne();
}
