$(function() {

    const data = {
        numCats: 8,
        cats: [],
        catPicArray: [
            ['img/cat-2083492_1920.jpg', 'Rudy'],
            ['img/cat-1285634_1920.png', 'James'],
            ['img/cat-323262_1920.jpg', 'Buckbeak'],
            ['img/animal-339400_1920.jpg', 'Ralph'],
            ['img/cat-914110_1920.jpg', 'Hendricks'],
            ['img/cat-1192026_1920.jpg', 'Flava'],
            ['img/cat-1647775_1920.jpg', 'Arnie'],
            ['img/cat-694730_1920.jpg', 'Sam']
        ]
    };

    const controller = {
        getActiveCat: function () {
            for (let i = 0; i < data.numCats; i++) {
                data.cats.push(new this.CatClicker(data.catPicArray[i][0],data.catPicArray[i][1], i));
            }
            return data.cats[0];
        },

        CatClicker: class {
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
                viewMain.render();
                this.getDomElements();
                this.addOne();
            }
        }

    };

    const viewMain = {
        init: function() {
            this.activeCat = controller.getActiveCat();
            this.mainCat = document.querySelector('.main-cat');
        },
        render: function() {
            this.mainCat.innerHTML =
          `
          <div class="container">
            <img id="catPic-${this.activeCat.index}" src=${this.activeCat.imgUrl} alt="A cat image to be clicked on">
            <div id="catName-${this.activeCat.index}" class="name noselect">${this.activeCat.name}</div>
            <div id="numClicks-${this.activeCat.index}" class="counter noselect">${this.activeCat.counter}</div>
          </div>
          `;

        }
    };

    const viewSide = {
        init: function() {
            this.sideCat = document.querySelector('.side-cat');
            this.thisCat = [];
        },
        render: function() {
            for (let cat of data.cats) {
                this.sideCat.innerHTML +=
          `
          <li><div id="sideCatName-${cat.index}" class="side-cat-list">${cat.name}</div></li>
          `;
            }
            for (let cat of data.cats) {
                this.thisCat[cat.index] = document.getElementById(`sideCatName-${cat.index}`);
                this.thisCat[cat.index].addEventListener('click', function(){
                    viewMain.activeCat = data.cats[cat.index];
                    data.cats[cat.index].selectCat();
                }, false);
            }
        }
    };




    // Build the dom.  Run through an array of catClicker objects and assemble the dom


    viewMain.init();
    viewMain.render();
    viewSide.init();
    viewSide.render();

    // Get Dom Elements and Add an event listener to each objects

    viewMain.activeCat.getDomElements();
    viewMain.activeCat.addOne();
}());
