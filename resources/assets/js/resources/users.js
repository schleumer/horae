/**
 * Resource dos usu�rios
 * @param $resource
 * @returns {*}
 * @ngInject
 */
module.exports = function Users($resource) {
  return $resource('/users', null);
};