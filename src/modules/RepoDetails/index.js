/*
 * Javascripts
 * ========================================================================== */

import angular        from 'angular';
import RepoDetailsCtrl from './controller/RepoDetails';

/*
 * Stylesheets
 * ========================================================================== */

import './stylesheets/repo_details.scss';

/* ========================================================================== */

/**
 * Define home page module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of this module.
 */
export default angular.module('Starter.App.RepoDetails', []).controller('RepoDetailsCtrl', RepoDetailsCtrl).name;
