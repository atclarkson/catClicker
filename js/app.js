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
    catPic.addEventListener('click', function(){
      this.counter += 21;
      this.clickCounter.textContent=counter;
    }, false);
    clickCounter.addEventListener('click', function(){
      this.counter++;
      this.clickCounter.textContent=counter;
    }, false);
  }
}

// Build the dom.  Run through an array of catClicker objects and assemble the dom



// Get Dom Elements and Add an event listener to each objects


//




let counter = 0;
catPic.addEventListener('click', function(){
  counter += 21;
  console.log(counter);
  clickCounter.textContent=counter;
}, false);
clickCounter.addEventListener('click', function(){
  counter++;
  console.log(counter);
  clickCounter.textContent=counter;
}, false);
