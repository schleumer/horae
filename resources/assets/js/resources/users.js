/**
 * Resource dos usu�rios
 * @param $resource
 * @returns {*}
 */
module.exports = /*@ngInject*/ function Users($resource) {
  return $resource('/users', null, {
    'update': {method: 'PUT'}
  });
};