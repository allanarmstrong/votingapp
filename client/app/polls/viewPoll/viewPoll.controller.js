'use strict';

function makeGraph(data) {

      var width = 640, barHeight = 20;
      var votes = [];

     _.forEach(data, function(n) {
        votes.push(n.votes);
     });

      var x = d3.scale.linear()
      .domain([0, d3.max(votes)])
      .range([0, width]);

      var chart = d3.select('.results')
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

angular.module('votingappApp')
  .controller('ViewPollCtrl', function ($scope, $http, $routeParams) {
  	$scope.voteOption = null;
  	$scope.options = '';
  	$scope.poll = '';
    $scope.hasVoted = false;
    $scope.showResults = false;
  	var pollID = $routeParams.pollID;

    $http.get('/api/polls/' + pollID).success(function(data) {
    	$scope.poll = data;
    	$scope.question = data.question;
    	console.log(data);
    	$scope.options = data.answers;
    	console.log(data.answers);
    });

    $scope.vote = function() {
    	var option = Number($scope.voteOption);
    	$scope.poll.answers[option].votes = $scope.options[option].votes+1;
    	$http.put('/api/polls/' + $scope.poll._id, $scope.poll).success(function(poll) {
    		$scope.showResults = true;
        $scope.hasVoted = true;
        makeGraph(poll.answers);
    		$scope.voteOption = null;
    	});
    };
  });
