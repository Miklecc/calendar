app.controller("myCalendarController", function ($scope) {
  $scope.matrix=[[1,2,3,4],[5,6,7,8]];

  $scope.myNumber = 5;
  $scope.getNumber = function(num) {
    return new Array(num);
  }
});

app.directive("mycalendar", function () {
  return {
    restrict: "E",
    templateUrl: "templates/myCalendar.html",
    controller: "myCalendarController",
    scope: {
      selected: "="
    }
  };
});

