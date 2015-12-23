!function(){"use strict";angular.module("infoProTest",["ngAnimate","ngResource","ui.router"])}(),function(){"use strict";function e(e,i){function a(e){for(var i=0;i<t.pieces.length;i++){var a=t.pieces[i];if(null!=a.ref&&void 0!=typeof a.ref&&a.ref===e)return a}}function r(){t.addToCart(angular.copy(c.piece))}var t=e.$parent.index,c=this;c.refid=i.ref,c.piece=a(c.refid),c.addToCart=r}angular.module("infoProTest").controller("DetailsController",e),e.$inject=["$scope","$stateParams"]}(),function(){"use strict";function e(e){function i(e){null!=e&&angular.isNumber(e)&&t.cart.length>=e&&t.cart.splice(e,1),t.refreshSum()}function a(){t.cart=[]}var r=this;r.removeItem=i,r.removeAllItem=a;var t=e.$parent.index}angular.module("infoProTest").controller("CartController",e),e.$inject=["$scope"]}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("infoProTest").run(e)}(),function(){"use strict";function e(e,i){e.state("main",{url:"/",templateUrl:"app/main/main.html"}).state("details",{url:"/details/:ref",templateUrl:"app/components/details/details.html",controller:"DetailsController",controllerAs:"details"}),i.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("infoProTest").config(e)}(),function(){"use strict";function e(e){function i(e){0===t.cart.length&&(t.cartPanelOpen=!0),t.cart.push(e),a()}function a(){t.sum=t.cart.reduce(function(e,i){return e+=i.cost||0},0),t.cartLength=t.cart.length}function r(i){e.url("/details/"+i)}var t=this;t.cart=[],t.sum=0,t.cartLength=0,t.addToCart=i,t.cartPanelOpen=!1,t.refreshSum=a,t.basePicUrl="assets/images/",t.showItem=r,t.pieces=[{ref:"1",name:"Filtre à air",car:"Honda Civic",cost:25,pic:"filtre-a-air-civic.JPG",desc:"Filtre à air pour Honda Civic LSI modèle 92",vendor:"Honda",state:"Occasion"},{ref:"2",name:"Arbre à came",car:"Honda Civic",cost:600,pic:"arbre-a-came-civic.jpg",desc:"Arbre à came pour moteur VTEC sur Civic ou Del Sol.",vendor:"Honda",state:"Neuf"},{ref:"3",name:"Collecteur d'échappement",car:"Honda Civic",cost:800,pic:"collecteur-echappement-civic.jpg",desc:"Collecteur d'échappement titane pour swap sur Honda Civic.",vendor:"Honda",state:"Neuf"},{ref:"4",name:"Ligne d'échappement",car:"Mazda RX-7",cost:700,pic:"ligne-echappement-mazda-rx7.JPG",desc:"Ligne d'échappement Invidia GT-300 pour Mazda RX-7",vendor:"Invidia",state:"Neuf"},{ref:"5",name:"Kit gros freins",car:"Mazda RX-7",cost:2800,pic:"kit-gros-freins-mazda-rx7.jpg",desc:"Kit gros freins pour Mazda RX-7 fabriqué par Wilwood",vendor:"Wilwood",state:"Neuf"},{ref:"6",name:"Radiateur Mishimoto",car:"Nissan Skyline R33",cost:360,pic:"radiateur-mishimoto-skyline-r33.jpg",desc:"Radiateur pour Nissan Skyline R33 de la marque Mishimoto",vendor:"Wilwood",state:"Neuf"},{ref:"7",name:"Capot en fibre de carbone",car:"Honda S2000",cost:800,pic:"capot-carbon-aeroworks-s2000.jpg",desc:"Capot en fibre de carbone pour Honda S2000 réalisé par Aerowork",vendor:"Aerowork",state:"Reconditionné"},{ref:"8",name:"Valves",car:"Toyota Supra",cost:22,pic:"valves-ferrea-toyota-supra.jpg",desc:"Valves de la marque Ferrea pour Toyota Supra",vendor:"Ferrea",state:"Neuf"},{ref:"9",name:"Pistons",car:"Toyota Supra",cost:1439,pic:"pistons-performance-toyota-supra.jpg",desc:"Pistons de la marque CP Pistons pour Toyota Supra",vendor:"CP Pistons",state:"Neuf"}]}angular.module("infoProTest").controller("IndexController",e),e.$inject=["$location"]}(),function(){"use strict";angular.module("infoProTest").constant("moment",moment)}(),function(){"use strict";function e(e){e.debugEnabled(!0)}e.$inject=["$logProvider"],angular.module("infoProTest").config(e)}(),angular.module("infoProTest").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="ipro-piece-container"><h2>Liste des pièces disponibles</h2><div class="ipro-piece" ng-repeat="piece in index.pieces" ng-click="index.showItem(piece.ref)"><img ng-src="{{index.basePicUrl + piece.pic}}"><div class="ipro-piece-footer"><div class="ipro-piece-part"><div class="ipro-piece-title-content"><div class="ipro-piece-title">{{piece.name}}</div><div class="ipro-piece-subtitle">{{piece.car}}</div></div><div class="ipro-piece-cost-content">${{piece.cost}}</div></div><div class="ipro-piece-part alone-part"><span ng-if="piece.desc">"{{piece.desc}}"</span></div></div></div></div>'),e.put("app/components/cart/cart.html",'<div class="ipro-cart-elem" ng-repeat="item in index.cart track by $index"><div class="ipro-cart-section"><div class="ipro-cart-thumbnail"><img ng-src="{{index.basePicUrl + item.pic}}"></div><div class="ipro-cart-name">{{item.name}}</div></div><div class="ipro-cart-section"><div class="ipro-cart-price">${{item.cost}}</div><div class="ipro-cart-delete"><div class="material-round-btn color-blue" ng-click="index.showItem(item.ref)"><i class="fa fa-eye"></i></div><div class="material-round-btn color-red" ng-click="cartCtrl.removeItem($index)"><i class="fa fa-trash"></i></div></div></div></div><h2>Total : ${{index.sum}}</h2>'),e.put("app/components/details/details.html",'<div class="ipro-details-container"><div class="ipro-details"><div class="align-right"><a class="material-btn" ng-href="#/">Retour</a></div><h2>{{details.piece.name}}</h2><div class="ipro-details-pic"><img class="pic-img" ng-src="{{index.basePicUrl + details.piece.pic}}"></div><div><b>Voiture</b> : {{details.piece.car}}<br><b>Marque</b> : {{details.piece.vendor}}<br><b>Etat</b> : {{details.piece.state}}<hr><b>Description</b> :<br>{{details.piece.desc}}<hr></div><div>Prix à l\'unité : <span class="ipro-details-price">${{details.piece.cost}}</span></div><br><div class="align-right"><div class="material-btn" ng-click="details.addToCart()">Ajouter au panier <i class="fa fa-plus"></i></div></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-984330f904.js.map
