angular.module("App", ['ui.router'])

    .config(function config($stateProvider) {
        $stateProvider.
                state('index', {
                	url: '',
                	templateUrl: '/templates/template.html',
    				controller: 'MainController as main'
				})

	})

	.controller('MainController', ['$scope', function($scope) {
		$scope.text = "Hello world!"; 
	}])