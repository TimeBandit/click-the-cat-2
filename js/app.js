// knockout synchronizes the view and the model so that you dont have to
var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/1413379559_412a540d29_z.jpg');
    this.nickNames = ko.observableArray([
        'ammar',
        'akbar',
        'antony',
        'akira',
        'anan'
    ]);

    this.level = ko.computed(function() {
        if (this.clickCount() <= 10) {
            return 'Newborn';
        } else {
            return 'Infant';
        };
    }, this);
}

var ViewModel = function() {
	self = this;
	self.currentCat = ko.observable(new Cat);

    self.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());
