angular.module('pruebaApp')
.controller('TodosLosLibrosCtrl',function ($scope, LibrosService) {
  $scope.libros = LibrosService.todosLosLibros();
});
  
  