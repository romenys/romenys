PhpLightHouse.controller('NewHouseController', ['$scope', '$http', function ($scope, $http) {

	$scope.house = {};

	$scope.create = function(house) {
		$http.post('/app.php?route=house_new', {house:house})
			.then(
				function(response) {
					console.log(response);
				},
				function(response) {
					console.log(response.status);
				}
			);
	}
}]);
