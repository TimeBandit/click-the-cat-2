// knockout synchronizes the view and the model so that you dont have to
var initialCats = [{
    clickCount: 0,
    name: "Tabby",
    imgSrc: "img/1413379559_412a540d29_z.jpg",
    nickNames: ['ammar', 'akbar', 'antony', 'akira', 'anan']
}, {
    clickCount: 0,
    name: "Ali",
    imgSrc: "img/434164568_fea0ad4013_z.jpg",
    nickNames: ['Al']
}, {
    clickCount: 0,
    name: "Moham",
    imgSrc: "img/22252709_010df3379e_z.jpg",
    nickNames: ['Mo']
}, {
    clickCount: 0,
    name: "Kitty",
    imgSrc: "img/4154543904_6e2428c421_z.jpg",
    nickNames: ['Kit']
}, {
    clickCount: 0,
    name: "Shiva",
    imgSrc: "img/9648464288_2516b35537_z.jpg",
    nickNames: ['Shi']
}];

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nickNames = ko.observableArray(data.nickNames);

    this.level = ko.computed(function() {
        var title;
        var clicks = this.clickCount();

        if (clicks < 10) {
            title = 'Newborn';
        } else if (clicks < 50) {
            title = 'Infant';
        } else if (clicks < 100) {
            title = 'Child';
        } else if (clicks < 200) {
            title = 'Teen';
        } else if (clicks < 500) {
            title = 'Adult';
        } else {
            title = 'Ninja';
        };

        return title;

    }, this);
}

var ViewModel = function() {
    var self = this;
    self.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        // console.log(catItem.name);    
        self.catList.push(new Cat(catItem));
    });

    self.currentCat = ko.observable(this.catList()[0]);

    self.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    self.setCat = function (cat) {
    	self.currentCat(cat);
    };

    self.saveData = function(){
        self.currentCat().clickCount(+$('#clickCount').val());
        $('#myModal').modal('hide');
    };
};

ko.applyBindings(new ViewModel());
