angular.module('pruebaApp')
.service('LibrosService',function(){
  this.todosLosLibros=function(){
    return  [
      {
        titulo: 'The design of every day things', 
        autor: 'Don Norman'
      },{
        titulo: 'El nombre del viento', 
        autor: 'Patrik Rufus'
      },{
        titulo: 'Cancion de Hielo y Fuego', 
        autor: 'R.R. Martin'
      },{
        titulo: 'Las venas abiertas de america Latina', 
        autor: 'Galeano'
      },{
        titulo: 'A sangre fria', 
        autor: 'Truman Capote'
      },{
        titulo: '100 aÃ±os de soledad', 
        autor: 'GarcÃ­a marquez'
      },{
        titulo: 'Kryptonita', 
        autor: 'Oyola'
      },{
        titulo: 'Historia de un loco', 
        autor: 'Katzenbach'
      },{
        titulo: 'DonÂ´t make me think', 
        autor: 'Steve Krug'
      },{
        titulo: 'Management 3.0', 
        autor: 'Jurgen'
      }
    ];
  }
});