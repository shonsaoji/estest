/**
 * @module Controller for page home of public section layout.
 * @class HomeController
 */
export default class HomeController {
  /**
   * @constructor
   * @param {object} TitleService - Controlling our title.
   */
  constructor(TitleService, $http, $timeout, $document) {
    'ngInject';

    TitleService.setTitle({
      newTitle: 'Home'
    });

    this.$http = $http;
    this.$timeout = $timeout;
    this.error = false;

    this.$timeout(() => {
      document.getElementById("#search-input").focus();
    }, 1000);
  }

  getRepos() {
    this.$http({
      method: 'GET',
      url: 'https://api.github.com/users/' + this.search_str + '/repos'
    }).then((successResponse) => {
      this.repositories = successResponse.data;
      this.error = false;
    }, (errorResponse) => {
      this.repositories = false;
      this.error = 'No Repositories Found';
    });
  }
}
