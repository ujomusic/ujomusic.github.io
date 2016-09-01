/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	var validator = __webpack_require__(27);

	$('body').hide();

	$(document).ready(function () {
	  $('body').show();

	  // Setup http://davist11.github.io/jQuery-One-Page-Nav/
	  $('#nav').onePageNav();

	  // SET UP THE CONTACT US FORM
	  $('#ujo-contact-form').on('submit', function (evt) {
	    var email = $('#ujo-contact-form').find('#email').val();
	    if (validator.validate(email)) {
	      if ($('#mailchimp-checkbox').is(':checked')) {
	        mailchimpSignup(email);
	      }
	      $.ajax({
	        url: "https://formspree.io/info@ujomusic.com",
	        method: "POST",
	        data: {
	          Email: email,
	          Identity: $('#ujo-contact-form').find('#user-identity').val(),
	          Message: $('#ujo-contact-form').find('#message-body').val()
	        },
	        dataType: "json",
	        success: function success() {
	          $('#error-indicator').hide();
	          $('#sent-indicator').show();

	          // reset values
	          $('#ujo-contact-form').find('#email').val('');
	          $('#ujo-contact-form').find('#message-body').val('');
	        }
	      });
	    } else {
	      $('#sent-indicator').hide();
	      $('#error-indicator').show();
	      $('#error-message').text('Invalid email address');
	    }
	    return false;
	  });

	  $('#down-button').click(function () {
	    $('html, body').animate({
	      scrollTop: $($.attr(this, 'href')).offset().top
	    }, 500);
	  });
	});

	function mailchimpSignup(emailAddress) {
	  var protocol = window.location.protocol != "https:" ? "http://" : "https://";
	  var maichimpURL = protocol + "wtf.us11.list-manage1.com/subscribe/post-json?u=5b0868a9cb58b8b0f36aacd90&id=4002d0fa0e&c=?";

	  $.ajax({
	    type: "GET",
	    url: maichimpURL,
	    data: { 'EMAIL': emailAddress },
	    cache: false,
	    dataType: 'json',
	    contentType: "application/json; charset=utf-8",
	    error: function error(err) {
	      // SQUASH :(
	    },
	    success: function success(data) {
	      // SQUASH :(
	    }
	  });
	}

	(function (i, s, o, g, r, a, m) {
	  i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
	    (i[r].q = i[r].q || []).push(arguments);
	  }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
	})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

	ga('create', 'UA-68390837-1', 'auto');
	ga('send', 'pageview');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(26)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./ujo.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./ujo.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "html, body {\n  height: 100%;\n  font-family: montserratregular;\n  background-color: #211E2A; }\n\n.heading-border-left {\n  background: url(" + __webpack_require__(4) + ") no-repeat;\n  background-size: 2px 35px;\n  background-position: 0px 5px;\n  padding-left: 14px;\n  color: white;\n  font-family: montserrathairline;\n  margin-bottom: 30px; }\n\n.heading-border-bottom {\n  background: url(" + __webpack_require__(5) + ") no-repeat;\n  background-size: 25px 2px;\n  background-position: 50% 35px;\n  padding-bottom: 10px;\n  color: white;\n  font-family: montserrathairline;\n  margin-bottom: 30px;\n  line-height: 0.7em; }\n\n.btn-ujo {\n  background: #FCDE00;\n  padding: 5px 20px;\n  border-radius: 3px;\n  text-transform: uppercase;\n  color: black;\n  text-decoration: none; }\n\na {\n  color: #FCDE00;\n  text-decoration: underline; }\n  a:hover {\n    color: #FCDE00; }\n\np {\n  color: #CFCDD0;\n  font-family: montserratultra_light;\n  text-align: left; }\n\nul li {\n  font-family: montserratultra_light; }\n\nh2 {\n  font-size: 3em; }\n\n@font-face {\n  font-family: 'montserratblack';\n  src: url(" + __webpack_require__(6) + ") format(\"woff2\"), url(" + __webpack_require__(7) + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'montserratbold';\n  src: url(" + __webpack_require__(8) + ") format(\"woff2\"), url(" + __webpack_require__(9) + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'montserratextra_bold';\n  src: url(" + __webpack_require__(10) + ") format(\"woff2\"), url(" + __webpack_require__(11) + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'montserrathairline';\n  src: url(" + __webpack_require__(12) + ") format(\"woff2\"), url(" + __webpack_require__(13) + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'montserratlight';\n  src: url(" + __webpack_require__(14) + ") format(\"woff2\"), url(" + __webpack_require__(15) + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'montserratregular';\n  src: url(" + __webpack_require__(16) + ") format(\"woff2\"), url(" + __webpack_require__(17) + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'montserratsemi_bold';\n  src: url(" + __webpack_require__(18) + ") format(\"woff2\"), url(" + __webpack_require__(19) + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'montserratultra_light';\n  src: url(" + __webpack_require__(20) + ") format(\"woff2\"), url(" + __webpack_require__(21) + ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n\n.ujo-head {\n  background: url(" + __webpack_require__(22) + ") no-repeat center;\n  background-size: cover;\n  min-height: 100%; }\n  .ujo-head .head-content {\n    margin-top: 100px;\n    min-height: 100%;\n    font-size: 18px; }\n    .ujo-head .head-content .abstract {\n      max-width: 560px;\n      margin: auto; }\n      .ujo-head .head-content .abstract p {\n        padding: 0 20px;\n        font-family: montserrathairline;\n        text-align: center;\n        color: #CFCDD0;\n        line-height: 2em; }\n        .ujo-head .head-content .abstract p span {\n          font-family: montserratlight;\n          color: #FFF;\n          font-size: 1.1em; }\n    .ujo-head .head-content .ujo-logo {\n      text-align: center;\n      display: block;\n      margin: 0 auto;\n      margin-bottom: 80px;\n      width: 100px; }\n    .ujo-head .head-content .info {\n      max-width: 400px;\n      margin: auto;\n      margin-top: 60px; }\n      .ujo-head .head-content .info span {\n        font-family: montserratlight;\n        color: white; }\n        .ujo-head .head-content .info span.at {\n          text-transform: uppercase;\n          font-family: montserrathairline;\n          color: #FCDE00; }\n      .ujo-head .head-content .info hr {\n        border-top: 1px solid #FCDE00; }\n      .ujo-head .head-content .info a {\n        font-family: montserrathairline;\n        text-align: left;\n        padding: 0;\n        margin: 0; }\n      .ujo-head .head-content .info .date {\n        margin-top: 15px; }\n        .ujo-head .head-content .info .date p {\n          margin: 0;\n          padding: 0;\n          text-align: center; }\n        .ujo-head .head-content .info .date .day {\n          font-size: 38px;\n          font-family: montserrathairline;\n          padding-bottom: 10px; }\n        .ujo-head .head-content .info .date .month {\n          font-size: 12px;\n          text-transform: uppercase;\n          margin-top: -10px; }\n\n.ujo-the-problem {\n  background: url(" + __webpack_require__(23) + ") no-repeat center;\n  background-size: cover;\n  min-height: 100%; }\n  .ujo-the-problem .content {\n    margin-top: 20%; }\n    .ujo-the-problem .content p {\n      margin-left: 20px;\n      margin-bottom: 30px;\n      font-size: 1.1em;\n      line-height: 1.7em; }\n\n.ujo-imogen-heap {\n  background: url(" + __webpack_require__(24) + ") no-repeat center;\n  background-size: cover;\n  min-height: 100%; }\n  .ujo-imogen-heap .content {\n    margin-top: 15%; }\n    .ujo-imogen-heap .content p {\n      margin-left: 20px;\n      margin-bottom: 30px;\n      font-size: 1.1em;\n      line-height: 1.7em; }\n    .ujo-imogen-heap .content ul li {\n      color: #FCDE00;\n      margin-bottom: 10px; }\n      .ujo-imogen-heap .content ul li span {\n        color: white; }\n\n.ujo-future {\n  background: #252131;\n  background-image: url(" + __webpack_require__(25) + ");\n  background-size: cover;\n  min-height: 100%; }\n  .ujo-future .content {\n    margin-top: 10%; }\n    .ujo-future .content p {\n      margin-left: 20px;\n      margin-bottom: 30px;\n      font-size: 1.1em;\n      line-height: 1.7em; }\n\n.blog-contact .container-fluid .row .blog {\n  background: #1E1C29;\n  min-height: 650px; }\n  .blog-contact .container-fluid .row .blog .content {\n    width: 70%;\n    max-width: 300px;\n    margin-left: auto;\n    margin-right: 10%;\n    margin-top: 40px;\n    position: relative; }\n    @media screen and (max-width: 991px) {\n      .blog-contact .container-fluid .row .blog .content {\n        margin: auto; } }\n    .blog-contact .container-fluid .row .blog .content .btn-more {\n      position: absolute;\n      top: 0;\n      right: 0; }\n    .blog-contact .container-fluid .row .blog .content .entries {\n      width: 100%; }\n      .blog-contact .container-fluid .row .blog .content .entries .entry {\n        position: relative;\n        width: 100%;\n        height: 150px;\n        margin-bottom: 20px;\n        overflow: hidden;\n        opacity: 1;\n        transition: opacity .25s ease-in-out;\n        -moz-transition: opacity .25s ease-in-out;\n        -webkit-transition: opacity .25s ease-in-out; }\n        .blog-contact .container-fluid .row .blog .content .entries .entry .blog-image-container {\n          position: absolute;\n          width: 350px;\n          height: 150px;\n          background-position: center center;\n          background-repeat: no-repeat;\n          background-size: auto 150px; }\n        .blog-contact .container-fluid .row .blog .content .entries .entry div {\n          position: absolute;\n          bottom: 5px;\n          color: white;\n          width: 100%;\n          text-align: center; }\n      .blog-contact .container-fluid .row .blog .content .entries .entry:hover {\n        opacity: 0.5; }\n\n.blog-contact .container-fluid .row .contact {\n  background: #1B1922;\n  min-height: 650px; }\n  .blog-contact .container-fluid .row .contact .content {\n    width: 70%;\n    max-width: 300px;\n    margin-right: auto;\n    margin-left: 10%;\n    margin-top: 40px; }\n    @media screen and (max-width: 991px) {\n      .blog-contact .container-fluid .row .contact .content {\n        margin: auto; } }\n    .blog-contact .container-fluid .row .contact .content .form-control {\n      background-color: transparent;\n      border-color: rgba(255, 255, 255, 0.6); }\n    .blog-contact .container-fluid .row .contact .content label {\n      color: rgba(255, 255, 255, 0.6);\n      font-family: montserratlight; }\n    .blog-contact .container-fluid .row .contact .content button {\n      float: right; }\n      .blog-contact .container-fluid .row .contact .content button:after {\n        clear: both; }\n\n.ujo-team {\n  text-align: center;\n  background: #252131;\n  min-height: 100%; }\n  .ujo-team .content {\n    margin-top: 50px; }\n    .ujo-team .content .members ul {\n      padding: 0;\n      margin: 0;\n      list-style: none;\n      text-align: center; }\n      .ujo-team .content .members ul li {\n        display: inline-block;\n        width: 200px;\n        margin-bottom: 20px;\n        margin-right: 0px; }\n        .ujo-team .content .members ul li .profile-picture {\n          height: 120px;\n          width: 120px;\n          border-radius: 50%; }\n        .ujo-team .content .members ul li p {\n          margin: 0;\n          padding: 0;\n          text-align: center; }\n        .ujo-team .content .members ul li .name {\n          color: white;\n          font-size: 16px;\n          font-weight: bold; }\n        .ujo-team .content .members ul li .charge {\n          color: gray;\n          font-size: 12px; }\n        @media (min-width: 1000px) {\n          .ujo-team .content .members ul li {\n            margin-right: 40px;\n            margin-left: 40px;\n            margin-top: 40px;\n            margin-bottom: 40px; } }\n        @media (min-width: 1200px) {\n          .ujo-team .content .members ul li {\n            margin-right: 40px;\n            margin-left: 40px;\n            margin-top: 40px;\n            margin-bottom: 40px; } }\n        @media (min-width: 1400px) {\n          .ujo-team .content .members ul li {\n            margin-right: 40px;\n            margin-left: 40px;\n            margin-top: 40px;\n            margin-bottom: 40px; } }\n        @media (min-width: 1600px) {\n          .ujo-team .content .members ul li {\n            margin-right: 40px;\n            margin-left: 40px;\n            margin-top: 40px;\n            margin-bottom: 40px; } }\n        @media (min-width: 1800px) {\n          .ujo-team .content .members ul li {\n            margin-right: 40px;\n            margin-left: 40px;\n            margin-top: 40px;\n            margin-bottom: 40px; } }\n        @media (min-width: 2000px) {\n          .ujo-team .content .members ul li {\n            margin-right: 40px;\n            margin-left: 40px;\n            margin-top: 40px;\n            margin-bottom: 40px; } }\n    @media (min-width: 1000px) {\n      .ujo-team .content .members {\n        margin-top: 00px; } }\n    @media (min-width: 1200px) {\n      .ujo-team .content .members {\n        margin-top: 00px; } }\n    @media (min-width: 1400px) {\n      .ujo-team .content .members {\n        margin-top: 00px; } }\n    @media (min-width: 1600px) {\n      .ujo-team .content .members {\n        margin-top: 00px; } }\n    @media (min-width: 1800px) {\n      .ujo-team .content .members {\n        margin-top: 00px; } }\n    @media (min-width: 2000px) {\n      .ujo-team .content .members {\n        margin-top: 00px; } }\n\n.ujo-footer {\n  height: 310px;\n  background: #211E2A;\n  padding-top: 65px;\n  padding-bottom: 60px; }\n  .ujo-footer .social-links {\n    text-align: center;\n    margin-bottom: 40px; }\n    .ujo-footer .social-links ul {\n      list-style: none;\n      padding: 0; }\n      .ujo-footer .social-links ul li {\n        display: inline-block;\n        height: 50px;\n        width: 50px;\n        border-radius: 50%;\n        margin-right: 12px; }\n        .ujo-footer .social-links ul li:last-child {\n          margin-right: 0; }\n  .ujo-footer .copyright p {\n    margin-top: 30px;\n    padding: 0;\n    text-align: center; }\n\n#nav {\n  position: fixed;\n  top: 10vh;\n  right: 0;\n  float: right; }\n  #nav li {\n    line-height: 2em;\n    list-style-type: none;\n    padding-right: 58px;\n    text-align: right; }\n    #nav li a {\n      text-decoration: none;\n      color: #CFCDD0;\n      visibility: visible; }\n      @media screen and (max-width: 991px) {\n        #nav li a {\n          visibility: hidden; } }\n    #nav li .bullet-point {\n      position: absolute;\n      right: 20px;\n      width: 0.8em;\n      height: 0.8em;\n      margin-top: -1.4em;\n      background-color: #FFF;\n      border-radius: 50%;\n      visibility: visible; }\n  #nav .current a .nav-text {\n    color: white !important;\n    visibility: visible; }\n    @media screen and (max-width: 991px) {\n      #nav .current a .nav-text {\n        visibility: hidden; } }\n  #nav .current .bullet-point {\n    background-color: #FCDE00 !important; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4338b93f99f14a6e77f649a469adddce.png";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "01ab7a4106c67ee9f141de93f46c4d06.png";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "55f5695d2ff879893143eaf536d7f50b.woff2";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ab8b0026c49d94f9b908ed3fb5129656.woff";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e77106f18936d57e55a519be661bb278.woff2";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3c9e42671d3d21cbbd929ed12beb3d05.woff";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "398d081f0e9413999bc29e8ed76af5a0.woff2";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f0f6890d8c95b8ff83d89eb9fc0ec414.woff";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ff8e4d69d373502d162cdc4ee7094ce3.woff2";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c4e901f96cffe033acb0df5dc9993cb4.woff";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "50fd9005b00c8f37406658b12ca07c9c.woff2";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7d7b75839f1e25cbdd5df943bbc6124e.woff";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1989d34764b43b900d806f853164500e.woff2";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7e51f0ae450233c16be3d50892f06b4e.woff";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "290d39c3b785e53bb6c6cc40b7bb4a70.woff2";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c1d2dda9c66752f79f518b196d6902e1.woff";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "385fa79f42c107192d327d2239696a2b.woff2";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "173e7ec0f94772d16c0d5ddf2df94b23.woff";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "003811d20f098c30eb36599126bbdcdb.jpg";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d317e36db42643d883317d443d615a58.jpg";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4db1accd215c7eb6b598ae6181b0ba54.jpg";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "84a61ef6408a30b36bdd6c30d5870c5c.jpg";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	var exporter = {};

	var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
	// Thanks to:
	// http://fightingforalostcause.net/misc/2006/compare-email-regex.php
	// http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx
	// http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378
	function validate(email)
	{
		if (!email)
			return false;
			
		if(email.length>254)
			return false;

		var valid = tester.test(email);
		if(!valid)
			return false;

		// Further checking of some things regex can't handle
		var parts = email.split("@");
		if(parts[0].length>64)
			return false;

		var domainParts = parts[1].split(".");
		if(domainParts.some(function(part) { return part.length>63; }))
			return false;

		return true;
	}
	exporter.validate = validate;

	function validate_async(email, callback)
	{
	    var isValidEmail = false;
	    try {
	        isValidEmail = exporter.validate(email);
	        callback(null, isValidEmail);
	    }
	    catch(err) {
	        callback(err, isValidEmail)
	    }
	}
	exporter.validate_async = validate_async;

	module.exports = exporter;

/***/ }
/******/ ]);