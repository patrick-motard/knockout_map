$(document).ready(function(){
    // This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
    var AppViewModel = {
        firstName: ko.observable("Bert"),
        lastName: ko.observable("Bertington"),
        
        start: 0,
        end: ko.observable('500px'),
        
        currentProfit: ko.observable(3),
        incrementProfit: function(){
            var previousProfit = this.currentProfit();
            this.currentProfit(previousProfit + 1);
        },
        decrementProfit: function(){
            var previousProfit = this.currentProfit();
            this.currentProfit(previousProfit - 1);
        }
    };
    
    // Activates knockout.js
    ko.applyBindings(AppViewModel);
});