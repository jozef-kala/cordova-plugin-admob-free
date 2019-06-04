function(require, exports, module) {
"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var exec$1=_interopDefault(require("cordova/exec"));function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(e){_defineProperty(t,e,n[e])})}return t}function isUndefined(e){return void 0===e}function exec(n,i){return new Promise(function(e,t){exec$1(e,t,"AdMob",n,i)})}function isFunction(e){return"function"==typeof e}function isString(e){return"string"==typeof e}function wrapCallbacks(e,t,n){return isFunction(t)&&(e=e.then(t)),isFunction(n)&&(e=e.catch(n)),e}function boolean2string(e){return null===e?"":!0===e?"yes":!1===e?"no":e}function translateOptions(e){var t={};return isUndefined(e.forChild)||(t.forChild=boolean2string(e.forChild),isString(e.forChild)&&console.warn("`forChild` will not accept string in future, pass boolean instead")),isUndefined(e.forFamily)||(t.forFamily=boolean2string(e.forFamily),isString(e.forFamily)&&console.warn("`forFamily` will not accept string in future, pass boolean instead")),_objectSpread({},e,t,{adSize:e.size})}function buildEvents(n,e){return e.reduce(function(e,t){return e[t]="admob.".concat(n,".events.").concat(t),e},{})}var events=buildEvents("banner",["LOAD","LOAD_FAIL","OPEN","CLOSE","EXIT_APP"]),sizes={BANNER:"BANNER",IAB_BANNER:"IAB_BANNER",IAB_LEADERBOARD:"IAB_LEADERBOARD",IAB_MRECT:"IAB_MRECT",LARGE_BANNER:"LARGE_BANNER",SMART_BANNER:"SMART_BANNER",FLUID:"FLUID",FULL_BANNER:"FULL_BANNER",LEADERBOARD:"LEADERBOARD",MEDIUM_RECTANGLE:"MEDIUM_RECTANGLE",SEARCH:"SEARCH",WIDE_SKYSCRAPER:"WIDE_SKYSCRAPER"},Banner=function(){function t(e){_classCallCheck(this,t),this.config(_objectSpread({size:sizes.SMART_BANNER},e))}return _createClass(t,[{key:"config",value:function(e){return this._config=_objectSpread({},this._config,e),this._config}},{key:"prepare",value:function(){var e=_objectSpread({publisherId:this._config.id},this._config);return delete e.id,exec("createBannerView",[translateOptions(e)])}},{key:"show",value:function(){return exec("showAd",[!0])}},{key:"hide",value:function(){return exec("showAd",[!1])}},{key:"remove",value:function(){return exec("destroyBannerView",[])}}]),t}();_defineProperty(Banner,"events",events),_defineProperty(Banner,"sizes",sizes);var events$1=buildEvents("interstitial",["LOAD","LOAD_FAIL","OPEN","CLOSE","EXIT_APP"]),Interstitial=function(){function t(e){_classCallCheck(this,t),this.config(_objectSpread({},e))}return _createClass(t,[{key:"config",value:function(e){return this._config=_objectSpread({},this._config,e),this._config}},{key:"prepare",value:function(){var e=_objectSpread({interstitialAdId:this._config.id},this._config);return delete e.id,exec("prepareInterstitial",[translateOptions(e)])}},{key:"show",value:function(){return exec("showInterstitialAd",[!0])}},{key:"isReady",value:function(){return exec("isInterstitialReady",[])}}]),t}();_defineProperty(Interstitial,"events",events$1);var events$2=buildEvents("rewardvideo",["LOAD","LOAD_FAIL","OPEN","CLOSE","EXIT_APP","START","REWARD"]),RewardVideo=function(){function t(e){_classCallCheck(this,t),this.config(_objectSpread({},e))}return _createClass(t,[{key:"config",value:function(e){return this._config=_objectSpread({},this._config,e),this._config}},{key:"prepare",value:function(){var e=_objectSpread({rewardVideoId:this._config.id},this._config);return delete e.id,exec("createRewardVideo",[translateOptions(e)])}},{key:"show",value:function(){return exec("showRewardVideo",[!0])}},{key:"isReady",value:function(){return exec("isRewardVideoReady",[])}}]),t}();_defineProperty(RewardVideo,"events",events$2);var banner=new Banner,interstitial=new Interstitial,rewardvideo=new RewardVideo;function setOptions(t,e,n){"object"===_typeof(t)?(Object.keys(t).forEach(function(e){switch(e){case"publisherId":banner._config.id=t[e];break;case"bannerAtTop":case"overlap":case"offsetTopBar":banner._config[e]=t[e];break;case"interstitialAdId":interstitial._config.id=t[e];break;case"rewardVideoId":rewardvideo._config.id=t[e];break;case"isTesting":case"autoShow":banner._config[e]=t[e],interstitial._config[e]=t[e],rewardvideo._config[e]=t[e]}}),exec$1(e,n,"AdMob","setOptions",[translateOptions(t)])):"function"==typeof n&&n("options should be specified.")}var AD_SIZE=Banner.sizes;function createBannerView(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0,n=2<arguments.length?arguments[2]:void 0;console.warn("Use admob.banner.prepare() instead."),exec$1(t,n,"AdMob","createBannerView",[translateOptions(e)])}function destroyBannerView(e,t,n){console.warn("Use admob.banner.remove() instead."),exec$1(t,n,"AdMob","destroyBannerView",[])}function showAd(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],t=1<arguments.length?arguments[1]:void 0,n=2<arguments.length?arguments[2]:void 0;console.warn("Use admob.banner.show() and admob.banner.hide() instead."),exec$1(t,n,"AdMob","showAd",[e])}function createInterstitialView(e,t,n){console.warn("Use admob.interstitial.prepare() instead, it will do both createInterstitialView() and requestInterstitialAd()."),exec$1(t,n,"AdMob","createInterstitialView",[translateOptions(e)])}function requestInterstitialAd(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0,n=2<arguments.length?arguments[2]:void 0;console.warn("Use admob.interstitial.prepare() instead, it will do both createInterstitialView() and requestInterstitialAd()."),exec$1(t,n,"AdMob","requestInterstitialAd",[translateOptions(e)])}function prepareInterstitial(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length?arguments[1]:void 0,n=2<arguments.length?arguments[2]:void 0;console.warn("Use admob.interstitial.prepare() instead."),exec$1(t,n,"AdMob","prepareInterstitial",[translateOptions(e)])}function showInterstitial(e,t){console.warn("Use admob.interstitial.show() instead."),wrapCallbacks(interstitial.show(),e,t)}function showInterstitialAd(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],t=1<arguments.length?arguments[1]:void 0,n=2<arguments.length?arguments[2]:void 0;console.warn("Use admob.interstitial.show() instead."),exec$1(t,n,"AdMob","showInterstitialAd",[e])}exports.AD_SIZE=AD_SIZE,exports.banner=banner,exports.createBannerView=createBannerView,exports.createInterstitialView=createInterstitialView,exports.destroyBannerView=destroyBannerView,exports.interstitial=interstitial,exports.prepareInterstitial=prepareInterstitial,exports.requestInterstitialAd=requestInterstitialAd,exports.rewardvideo=rewardvideo,exports.setOptions=setOptions,exports.showAd=showAd,exports.showInterstitial=showInterstitial,exports.showInterstitialAd=showInterstitialAd;
//# sourceMappingURL=admob.js.map

}
