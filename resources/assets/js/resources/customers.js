/**
 * Resource dos usu�rios
 * @param $resource
 * @returns {*}
 */
module.exports = /*@ngInject*/ function Customers($resource) {
  return $resource('/customers/:id', null, {
    'update': {method: 'PUT'}
  });
};