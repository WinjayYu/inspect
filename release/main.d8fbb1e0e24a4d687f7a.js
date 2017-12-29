/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(4);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(20);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(35);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(41);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(17),
    getValue = __webpack_require__(27);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _uniq = __webpack_require__(10);

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ajaxData;
var Auth, PK_QID;

function loadAuth(au, pk) {
  if (pk) {
    Auth = au;
    PK_QID = pk;
    renderPage();
  }
}

// 接收app缓存的表单数据
function acceptSubmitData(au, req) {
  Auth = au;
  alert(au);
  postAjax(req); // 发送ajax请求
}

// 定位
function sponsorLocation() {
  var geolocation = new BMap.Geolocation();
  $(".locationing").text("正在定位中...");
  // todo
  geolocation.getCurrentPosition(function (r) {
    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
      $(".province").text(r.address.province);
      $(".city").text(r.address.city);
      $(".lng").text(r.point.lng);
      $(".lat").text(r.point.lat);
      $(".locationing").hide();
      $(".warn").show();
    } else {
      alert('failed' + this.getStatus());
    }
  });
}

function renderPage() {
  var $form = $('form');
  var $target = $('.target');
  $('#submit').click(function (e) {
    e.preventDefault();
  });
  $.ajax({
    url: "http://surveyapi.lanshaoqi.cn/OpenApi/ServicesSurvey/GetSurvey",
    type: "POST",
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify({ "PK_QID": PK_QID }),
    success: function success(res) {
      console.log(res);
      $('.dialog').hide();
      if (res.ErrCode === 200) {
        ajaxData = res.Data;
        $('.q_title').text(res.Data.QName);
        $('.call').html(res.Data.Describe.replace(/\n/g, '<br />'));
        var top = res.Data.Topic;
        var target = res.Data.Target;
        $target.append('<p class="target_name">评价对象</p>');
        for (var j = 0; j < target.length; j++) {
          renderTarget(target[j], true);
        }

        for (var i = 0; i < top.length; i++) {
          if (top[i].OType === 4) {
            renderDes(top[i]);
          }
          if (top[i].OType === 0) {
            renderRadio(top[i]);
          }
          if (top[i].OType === 1) {
            renderCheckBox(top[i]);
          }
          if (top[i].OType === 3) {
            renderGrade(top[i]);
          }
          if (top[i].OType === 5) {
            renderFileUpload(top[i]);
          }
          if (top[i].OType === 2) {
            renderGap(top[i]);
          }
          if (top[i].OType === 8) {
            addMap();
            renderLocation(top[i]);
          }
        }
        $form.append('<div id="submit" class="form_submit"><input type="submit" value="提交"></div>');
      }
    },
    error: function error(res) {}
  });

  // 添加地图
  function addMap() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://api.map.baidu.com/getscript?v=2.0&ak=AufxlwWzXVQzcBEdrTIn4oRkfpnMRYjU";
    document.body.appendChild(script);
  }

  // 评价对象
  function renderTarget(data) {
    var template = "<div class=\"ques_content\">\n                    <div class=\"wrap_input\">\n                    <input class=\"hospital_val\" PK_EID=\"" + data.PK_EID + "\" EName=\"" + data.EName + "\" type=\"radio\" name=\"target\" required> " + data.EName + "\n                    </div>\n                    </div>";
    $target.append(template);
  }

  // 描述
  function renderDes(data) {
    var template = "<div class=\"item des\" pk_tid=\"" + data.PK_TID + "\">\n                              <p class=\"ques_title\">" + data.TTitle + "</p>\n                              </div>";
    $form.append(template);
  }

  //单选
  function renderRadio(data) {
    var isRequired = data.IsRequired === 0 ? '' : 'required';
    var template = "<div class=\"item rad\">\n                             <p class=\"ques_title\">" + data.TTitle + "</p>\n                            ";
    var option = data.Option;
    var sub = '';
    for (var i = 0; i < option.length; i++) {
      sub += renderSubRad(option[i], data.PK_TID, isRequired, data.OType);
    }
    $form.append(template + sub + '</div>');
  }

  // 单选子选项
  function renderSubRad(data, name, isRequired, OType) {
    return "<div class=\"ques_content\">\n              <div class=\"wrap_input\">\n                <input type=\"radio\" PK_TID=\"" + name + "\" OType=\"" + OType + "\" name=\"" + name + "\" value=\"" + data.PK_OID + "\" " + isRequired + "> " + data.TTitle + "\n              </div>\n              </div>";
  }

  // 多选
  function renderCheckBox(data) {
    var isRequired = data.IsRequired === 0 ? '' : 'required';
    var template = "<div class=\"item che\">\n                              <p class=\"ques_title\">" + data.TTitle + "</p>\n                              ";
    var option = data.Option;
    var sub = '';
    for (var i = 0; i < option.length; i++) {
      sub += renderSubChe(option[i], data.PK_TID, isRequired, data.OType);
    }

    $form.append(template + sub + '</div>');
  }

  function renderSubChe(data, name, isRequired, OType) {
    return "\n              <div class=\"ques_content\">\n              <div class=\"wrap_input\">\n              <input type=\"checkbox\" OType=\"" + OType + "\" PK_TID=\"" + name + "\" name=" + name + " value=\"" + data.PK_OID + " " + isRequired + "\" > " + data.TTitle + "\n              </div>\n              </div>";
  }

  // 评分
  function renderGrade(data) {
    var isRequired = data.IsRequired === 0 ? '' : 'required';
    var template = "<div class=\"item grade clear\" TTitle=\"" + data.TTitle + "\">\n                      <p class=\"ques_title\">" + data.TTitle + "</p>";
    var option = data.Option;
    var scoreRange = data.ScoreRange;
    var sub = '';
    for (var i = 0; i < option.length; i++) {
      sub += renderSubGra(option[i], data.PK_TID, isRequired, i, scoreRange);
    }
    var duffix = "<div class=\"satisfaction clear\">\n                      <div class=\"satisfaction_text text_left fl\">" + data.LeftText + "</div>\n                      <div class=\"satisfaction_text text_middle fl\">" + data.MiddleText + "</div>\n                      <div class=\"satisfaction_text text_right fl\">" + data.RightText + "</div>\n                     </div>";
    $form.append(template + sub + duffix + '</div>');
    adjustThumbWidth(scoreRange, data.PK_TID);
  }

  function renderSubGra(data, PK_TID, isRequired, index, scoreRange) {
    var pre = "<div class=\"grade_item\">\n                <p class=\"ques_sub_title\">" + data.TTitle + "</p><div class=\"wrap_input wrap_grade clear\">";

    var grageNumber = '';
    for (var i = 0; i < scoreRange.length; i++) {
      grageNumber += "<div PK_TID=\"" + PK_TID + "\" class=\"grade_item_number grade" + PK_TID + " fl\"></div>";
    }
    return pre + grageNumber + '</div></div>';
  }

  function renderFileUpload(data) {
    var isRequired = data.IsRequired === 0 ? '' : 'required';
    var template = "<div class=\"item file_upload clear\" PK_TID=\"" + data.PK_TID + "\">\n                        <p class=\"ques_title\">" + data.TTitle + "</p>\n                        <div class=\"img_wrap clear \">\n                          <span class=\"btn btn-success fileinput-button fl\">\n                          <i class=\"glyphicon\"></i>\n                          <span></span>\n                              <input type=\"file\" id=\"fileupload\"  name=\"file[]\" data-url=\"http://surveyapi.lanshaoqi.cn/OpenApi/ServicesSurvey/UploadFile\" multiple>\n                          </span>\n                        </div>\n                      </div>";
    $form.append(template);
    listenUpload();
  }

  // 填空
  function renderGap(data) {
    var isRequired = data.IsRequired === 0 ? '' : 'required';
    var template = "<div class=\"item gap\" PK_TID=\"" + data.PK_TID + "\">\n                        <p class=\"ques_title\">" + data.TTitle + "</p>\n                         <input type=\"text\" class=\"gap_input\" PK_TID=\"" + data.PK_TID + "\" " + isRequired + " />\n                      </div>";
    $form.append(template);
  }

  // 定位
  function renderLocation(data) {
    var template = "<div class=\"item location\">\n                         <p class=\"ques_title\">" + data.TTitle + "</p>\n                         <a class=\"map_a\" PK_TID=\"" + data.PK_TID + "\" onclick=\"sponsorLocation()\">\n                            <i class=\"location_ico\"></i>\n                            \u70B9\u51FB\u83B7\u53D6\u5B9A\u4F4D\u4FE1\u606F\n                         </a>\n                         <p class=\"locationing\"></p>\n                         <p class=\"warn\">\u60A8\u7684\u4F4D\u7F6E\uFF1A<span class=\"province\"></span><span class=\"city\"></span><span class=\"lng\"></span>,<span class=\"lat\"></span></p>\n                      </div>\n                              ";

    $form.append(template);
  }
} // end function


// 调整拇指宽度
function adjustThumbWidth(scoreRange, PK_TID) {
  var width = 100 / scoreRange.length;
  $('.grade' + PK_TID).css('width', width + '%');
}

// 监听打分
function listenGrade() {
  $('body').on('click', '.grade_item_number', function (e) {

    $(this).siblings().removeClass('grade_item_active');

    $(this).addClass('grade_item_active');
    $(this).prevAll().addClass('grade_item_active');
  });
}
listenGrade();

function handleSubmit(event) {
  event.preventDefault();
  return false;
}

function listenUpload() {
  $("#fileupload").fileupload({
    dataType: 'json',
    done: function done(e, data) {
      if (data.result.ErrCode === 200) {
        alert("上传成功！");
        $('<img class="uploaded_img fl" />').attr('src', data.result.Data[0]).appendTo('.img_wrap');
      }
    }
  });
}

$("#form_data").submit(function (event) {

  $('.dialog').show();
  var req = { Result: [] };

  //    // 判断是否评分
  //    $('.grade').find('.grade_item').each( function(i, v){
  //      if(!$(this).find('div').hasClass('selected')) {
  //        alert('请评分！');
  //        return;
  //      }
  //    })

  // 单选检查
  $('input[type="radio"][name!="target"]:checked').each(function (index, value) {
    var type = $(value).attr('type');
    if (type = 'redio') {
      req.Result.push(radioData($(value)));
    }
  });

  // 多选检查
  var checkboxNames = [];
  $('input[type="checkbox"]:checked').each(function (index, value) {
    checkboxNames.push($(value).attr('name'));
  });
  checkboxNames = (0, _uniq2.default)(checkboxNames);

  for (var i = 0; i < checkboxNames.length; i++) {
    var temp = { SelectedOption: [] };
    $('input[name=' + checkboxNames[i] + ']:checked').each(function (index, value) {
      temp.OType = $(value).attr('OType');
      temp.PK_TID = $(value).attr('PK_TID');
      temp.SelectedOption.push(checkboxData($(value)));
    });
    req.Result.push(temp);
  }

  // 评分统计
  var gradeData = { SelectedOption: [] };
  $('.grade_item').each(function (i, v) {
    var $gradeActive = $(v).find('.grade_item_active');
    if ($gradeActive.length) {
      gradeData.OType = 3;
      gradeData.PK_TID = $gradeActive.eq(0).attr('PK_TID');
      gradeData.SelectedOption.push({ "OptionScoreValue": $gradeActive.length });

      req.Result.push(gradeData);
      gradeData = { SelectedOption: [] };
    }
  });

  // 图片统计
  var fileData = { UploadValue: [] };
  $(".file_upload").each(function (i, v) {
    fileData.OType = 5;
    fileData.PK_TID = $(this).attr('PK_TID');
    var $imgArr = $(v).find('img');
    $imgArr.each(function (idx, value) {
      fileData.UploadValue.push($(value).attr('src'));
    });
    req.Result.push(fileData);
    fileData = { UploadValue: [] };
  });

  // 填空统计
  var gapData = {};
  $(".gap").each(function (i, v) {
    gapData.OType = 2;
    gapData.PK_TID = $(this).attr('PK_TID');
    gapData.InputValue = $(this).find('input').text();
    req.Result.push(gapData);
  });

  // 定位统计
  if ($('.warn').css('display') !== 'none') {
    var locationData = {};
    locationData.OType = 8;
    locationData.PK_TID = $('.map_a').attr('PK_TID');
    locationData.InputValue = $('.city').text();
    locationData.CoordinateValue = $('.lng').text() + ',' + $('.lat').text;
    req.Result.push(locationData);
  }

  req.PK_QID = ajaxData.PK_QID;
  req.PK_EID = $('input[name="target"]:checked').attr('PK_EID');

  console.log(req);

  // 判断是否登陆
  if (Auth === 0 || Auth === '0') {
    android.logIn(JSON.stringify(req));
    return;
  }

  postAjax(req); // 发送ajax请求
  event.preventDefault();
}); // end submit

// 单选数据处理
function radioData(data) {
  var obj = { SelectedOption: [] };
  obj.OType = data.attr('OType');
  obj.PK_TID = data.attr('PK_TID');
  obj.SelectedOption.push({ "PK_OID": data.attr('value') });
  return obj;
}

// 多选数据处理
function checkboxData(data) {
  var SelectedOption = {};
  SelectedOption.PK_OID = data.attr('value');
  return SelectedOption;
}

function postAjax(data) {
  $.ajax({
    url: "http://surveyapi.lanshaoqi.cn/OpenApi/General/SubmitSurvey",
    type: "POST",
    headers: {
      'Auth': Auth
    },
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify(data),
    success: function success(res) {
      $('.dialog').hide();
      if (res.ErrCode === 200) {
        alert('提交成功');
        var type = iosOrAndroid();
        if (type === 'iOS') {
          ios.showToast(JSON.stringify(res));
        } else if (type === 'Android') {
          android.showToast(JSON.stringify(res));
        }
      } else {
        alert(res.ErrMsg);
      }
    },
    error: function error(res) {
      alert('提交失败');
    }
  });
}

window.loadAuth = loadAuth;
window.handleSubmit = handleSubmit;
window.acceptSubmitData = acceptSubmitData;
window.sponsorLocation = sponsorLocation;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var baseUniq = __webpack_require__(11);

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(12),
    arrayIncludes = __webpack_require__(47),
    arrayIncludesWith = __webpack_require__(52),
    cacheHas = __webpack_require__(53),
    createSet = __webpack_require__(54),
    setToArray = __webpack_require__(7);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(13),
    setCacheAdd = __webpack_require__(45),
    setCacheHas = __webpack_require__(46);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(14),
    mapCacheDelete = __webpack_require__(40),
    mapCacheGet = __webpack_require__(42),
    mapCacheHas = __webpack_require__(43),
    mapCacheSet = __webpack_require__(44);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(15),
    ListCache = __webpack_require__(32),
    Map = __webpack_require__(39);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(16),
    hashDelete = __webpack_require__(28),
    hashGet = __webpack_require__(29),
    hashHas = __webpack_require__(30),
    hashSet = __webpack_require__(31);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(0);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(18),
    isMasked = __webpack_require__(24),
    isObject = __webpack_require__(6),
    toSource = __webpack_require__(26);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isObject = __webpack_require__(6);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(5),
    getRawTag = __webpack_require__(22),
    objectToString = __webpack_require__(23);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(5);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(25);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(0);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(0);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(0);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(33),
    listCacheDelete = __webpack_require__(34),
    listCacheGet = __webpack_require__(36),
    listCacheHas = __webpack_require__(37),
    listCacheSet = __webpack_require__(38);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(2);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(2);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(2);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(2);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(4),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(3);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(3);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(3);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(3);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(48);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(49),
    baseIsNaN = __webpack_require__(50),
    strictIndexOf = __webpack_require__(51);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(55),
    noop = __webpack_require__(56),
    setToArray = __webpack_require__(7);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(4),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ })
/******/ ]);