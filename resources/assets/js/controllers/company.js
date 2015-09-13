/**
 * Controller para exibir a empresa atrelada ao atual usu�rio
 * @module controller
 * @type {*[]}
 */
module.exports = /*@ngInject*/ function CompanyController($scope, $http, Auth) {
  $scope.form = Auth.getUser().company;
};