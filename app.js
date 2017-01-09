(function(){
'use strict';
  angular.module('myCourseraAssignment1',[])

  .controller('myCourseraAssignment1Controller', function($scope){
    $scope.lunchList = "";
    $scope.error = "";

    $scope.add = function(){
      var array = new Array(10);
      array = $scope.lunchList.split(',');

      for (var i = 0; i < array.length; i++) {
        if((array[i] == null) || (array[i] == " ") || (array[i] == ""))
        {
            $scope.error = "An entry is empty";
            return;
        }

      }

      if(array.length <= 3)
      {
        $scope.error = "Enjoy!";
      }else
      {
          $scope.error = "Too much!";
      }

    };
  });

})();
