(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
	  .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    ;


  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var buy = this;

    buy.toBuyItems = ShoppingListCheckOffService.getToBuy();

    buy.removeAndAddtoBought = function (index) {
      ShoppingListCheckOffService.removeAndAddtoBought(index);
    }
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var bought = this;

    bought.toBoughtItems = ShoppingListCheckOffService.getToBought();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [{name: 'Laptop', quantity: 5}, {name: 'Hard disks', quantity: 10},
                      {name: 'PC', quantity: 8}, {name: 'Processors', quantity: 2},
                      {name: 'Memory', quantity: 2}, {name: 'Motherboard', quantity: 5}];

    var toBoughtItems = [];

    service.removeAndAddtoBought = function (itemIndex) {
      var item = toBuyItems.splice(itemIndex, 1);
      toBoughtItems.push(item[0]);
    };

    service.getToBuy = function () {
      return toBuyItems;
    };

    service.getToBought = function () {
      return toBoughtItems;
    };

  }

})();
