(function() {
	'use strict';

	angular
		.module('societyApp.login')
		.factory('LoginDataService', LoginDataService);

	LoginDataService.$inject = ['$http'];

	/* @ngInject */
	function LoginDataService($http) {
		var service = {};
		service.Login= Login;
		return service;
        function Login(username,password, callback)
		{
			
			return $http.post('http://52.38.177.138:4000/api/login', { username: username, password: password }).success(function (response, status, headers, config) 
			{
                    callback(response, status, headers, config);
					
            }).error(function (response, status, headers, config)
			{
				
				//alert(response+"--"+status);

					callback(response, status, headers, config);
					
			});
        
		}
		function handleSuccess(res) {
            return res.data;
        }
 
        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
	}
})();
