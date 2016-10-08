(function(){
    var app = angular.module("store", []);

    app.controller("NavController", function(){
        this.tab = 1;

        this.setTab = function(Tab){
            this.tab = Tab;
        };

        this.isSet = function(checkTab) {
            return this.tab === checkTab
        };
    });
})();