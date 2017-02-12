/**
 * @module Controller for page home of public section layout.
 * @class HomeController
 */
export default class RepoDetailsCtrl {
  /**
   * @constructor
   * @param {object} TitleService - Controlling our title.
   */
  constructor(TitleService, $stateParams, $http) {
    'ngInject';

    this.$stateParams = $stateParams;
    this.owner = this.$stateParams.owner;
    this.repo = this.$stateParams.repo;
    this.$http = $http;
    TitleService.setTitle({
      newTitle: 'Profile'
    });

    this.getData();
  }

  drawChart() {
    var labels = [];

    for(var i in this.languages) {
      if(this.languages.hasOwnProperty(i)) {
        labels.push(i + ' (' + this.languages[i] + ' bytes)');
      }
    }
    var ctx = document.getElementById("myChart");
    var data = {
      labels: Object.keys(this.languages),
      datasets: [
          {
              data: Object.values(this.languages),
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
    };
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
          cutoutPercentage: 75
        }
    });
  }

  getData() {
    this.$http({
      method: 'GET',
      url: 'https://api.github.com/repos/' + this.$stateParams.owner + '/' + this.$stateParams.repo + '/languages'
    }).then((successResponse) => {
      this.languages = successResponse.data;
      this.drawChart();
      this.error = false;
    }, (errorResponse) => {
      this.repositories = false;
      this.error = 'No Repositories Found';
    });    
  }
}
