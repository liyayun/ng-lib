/**
 *  @name ar-change
 *  @description 当停止输入时,执行指定的函数
 *  @param {function=} ar-change,要执行的函数
 *  @param {expression=} interval,检查变化的时间间隔
 *
 *  @usage
 *    <input type="search" ng-model="params.keyword" ar-change="search()" interval="800">
 */
angular.module('ar-directives', []).directive('arChange', ['$interval', function($interval){
  return {
    district: 'A',
    require: 'ngModel',
    scope: {
      arChange: '&',
      interval: '@'
    },
    link: function (scope, element, attr, ngModel) {
      var interval = scope.interval || 1000;

      var watch = {preOldVal: null, oldVal: null};

      $interval(function () {
        if (ngModel.$modelValue !== null) {

          if (ngModel.$modelValue === watch.oldVal && watch.oldVal !== watch.preOldVal) {
            scope.$eval(scope.eveChange);
          }

          watch.preOldVal = watch.oldVal;
          watch.oldVal = ngModel.$modelValue;
        }
      }, interval);

    }
  }
}]);