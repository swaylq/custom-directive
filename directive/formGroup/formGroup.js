MyApp.directive('formGroup', function(){
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        scope: {
            obj: '@formObj',
            name: '@formName',
            key: '@formKey',
            validate: '=formValidate',
            placeholder: '@formPlaceholder',
            type: '@formType'
        }, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
        templateUrl: 'directive/formGroup/formGroup.html',
        replace: true,
        transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {
        }
    };
});