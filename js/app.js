(function(){
  var app = angular.module("store",[]);
  app.controller('StoreController',function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

/* data */
  var gems = [
   {
    name: "BetaFish Ale",
    price: 4.50,
    description: "A rowdy one",
    canPurchase: true,
    soldOut: false
  },
  {
    name: "RedBoat IPA",
    price: 5.95,
    description: "A blue one",
    canPurchase: true,
    soldOut: false
  },
  {
    name: "Nizotope Stout",
    price: 4.95,
    description: "An abundant one",
    canPurchase: true,
    soldOut: false
  }
];
})();
