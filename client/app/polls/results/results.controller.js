'use strict';

angular.module('votingappApp')
  .controller('ResultsCtrl', function ($scope, $http, $location, $routeParams) {
    
  	var pollID = $routeParams.pollID;


    function makeGraph(data) {

      var width = 640, barHeight = 20;
      var votes = [];

     _.forEach(data, function(n) {
        votes.push(n.votes);
     });

      var x = d3.scale.linear()
      .domain([0, d3.max(votes)])
      .range([0, width]);

      var chart = d3.select('#results')
      .attr('width', width)
      .attr('height', barHeight * data.length);

      var bar = chart.selectAll('g')
        .data(data)
        .enter().append('g')
        .attr('transform', function(d,i) { return 'translate(0, ' + i * barHeight + ')';});

        bar.append('rect')
        .attr('width', function(d) { return x(+d.votes); })
        .attr('height', barHeight - 1);

        bar.append('text')
        .attr('x', '10')
        .attr('y', barHeight/2)
        .attr('dy', '.35em')
        .text(function(d) { return d.option + ': ' + d.votes;});


    }

  	$http.get('/api/polls/' + pollID).success(function(data) {
  		$scope.poll = data;
      makeGraph($scope.poll.answers);

  	}).error(function() {
  		$location.path('/polls');
  	});




  });
