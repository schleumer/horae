var { toolbarItem } = require('../helpers/page');
var R = require('ramda');

/**
 * Controller de Contas a Pagar
 * @module controller
 * @ngInject
 */
module.exports = function PayablesController($scope, $rootScope, $q, $location, $routeParams, ngTableParams, Payables, Loading, Modals) {
  $scope.form = {};

  $scope.toolbarItems = [
    toolbarItem("list", null, "view-list", "/payables"),
    toolbarItem("new", null, "plus", "/payables/new")
  ];

  $scope.tableParams = new ngTableParams({
    page: 1,
    count: 10,
    sorting: {
      'payables.id': 'desc'
    }
  }, {
    total: 0,
    getData: function ($defer, params) {
      // ajax request to api
      Loading.follow($defer.promise);
      Payables.get(params.url(), (result) => {
        params.total(result.parcel.total);
        $defer.resolve(result.parcel.result);
      });
    }
  });

  var payable = null;

  if ($routeParams.id) {
    Loading.followR(Payables.get({id: $routeParams.id}))
      .then((payable) => {
        if (payable.parcel) {
          $scope.form = payable.parcel;
        } else {
          $location.path('/payables');
        }
      });
  }

  $scope.search = (search) => {
    $scope.tableParams.filter({id: search.query, name: search.query});
  };

  $scope.save = () => {
    var request = null;
    if ($scope.form.id) {
      request = Loading.followR(Payables.update({id: $scope.form.id}, $scope.form))
    } else {
      request = Loading.followR(Payables.save($scope.form))
    }

    request.then(() => {
      $location.path('/payables')
    });

  };

  $scope.remove = (item) => {
    Modals
      .confirm("Você deseja realmente remover esse tipo de pagamento?")
      .then(function () {
        Loading.followR(Payables.delete({id: item.id})).then(() => {
          $scope.tableParams.reload();
        });
      });
  };

  $scope.getEditUrl = (payable) => {
    return `#/payables/edit/${payable.id}`;
  }


};