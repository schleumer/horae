/**
 * Resource dos usu�rios
 * @param $resource
 * @returns {*}
 * @ngInject
 */
module.exports = function Customers($resource) {
  return $resource('/customers/:id', null, {
    'update': {method: 'PUT'}
  });
};