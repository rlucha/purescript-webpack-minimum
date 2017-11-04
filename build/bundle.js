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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pure__ = __webpack_require__(/*! ./pure */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pure___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pure__);


console.log(__WEBPACK_IMPORTED_MODULE_0__pure___default.a.hello());

/***/ }),
/* 1 */
/*!*********************!*\
  !*** ./src/pure.js ***!
  \*********************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
    if (true) module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["pure"] = factory();else root["pure"] = factory();
})(this, function () {
    return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/ });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 23);
            /******/
        }(
        /************************************************************************/
        /******/[
        /* 0 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var $foreign = __webpack_require__(27);
            var Data_Show = __webpack_require__(6);
            var showUnit = new Data_Show.Show(function (v) {
                return "unit";
            });
            module.exports = {
                showUnit: showUnit,
                unit: $foreign.unit
            };

            /***/
        },
        /* 1 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var $foreign = __webpack_require__(43);
            var Data_Unit = __webpack_require__(0);
            var Semiring = function (add, mul, one, zero) {
                this.add = add;
                this.mul = mul;
                this.one = one;
                this.zero = zero;
            };
            var zero = function (dict) {
                return dict.zero;
            };
            var semiringUnit = new Semiring(function (v) {
                return function (v1) {
                    return Data_Unit.unit;
                };
            }, function (v) {
                return function (v1) {
                    return Data_Unit.unit;
                };
            }, Data_Unit.unit, Data_Unit.unit);
            var semiringNumber = new Semiring($foreign.numAdd, $foreign.numMul, 1.0, 0.0);
            var semiringInt = new Semiring($foreign.intAdd, $foreign.intMul, 1, 0);
            var one = function (dict) {
                return dict.one;
            };
            var mul = function (dict) {
                return dict.mul;
            };
            var add = function (dict) {
                return dict.add;
            };
            var semiringFn = function (dictSemiring) {
                return new Semiring(function (f) {
                    return function (g) {
                        return function (x) {
                            return add(dictSemiring)(f(x))(g(x));
                        };
                    };
                }, function (f) {
                    return function (g) {
                        return function (x) {
                            return mul(dictSemiring)(f(x))(g(x));
                        };
                    };
                }, function (v) {
                    return one(dictSemiring);
                }, function (v) {
                    return zero(dictSemiring);
                });
            };
            module.exports = {
                Semiring: Semiring,
                add: add,
                mul: mul,
                one: one,
                zero: zero,
                semiringInt: semiringInt,
                semiringNumber: semiringNumber,
                semiringFn: semiringFn,
                semiringUnit: semiringUnit
            };

            /***/
        },
        /* 2 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var $foreign = __webpack_require__(26);
            var Control_Semigroupoid = __webpack_require__(12);
            var Data_Function = __webpack_require__(5);
            var Data_Unit = __webpack_require__(0);
            var Functor = function (map) {
                this.map = map;
            };
            var map = function (dict) {
                return dict.map;
            };
            var mapFlipped = function (dictFunctor) {
                return function (fa) {
                    return function (f) {
                        return map(dictFunctor)(f)(fa);
                    };
                };
            };
            var $$void = function (dictFunctor) {
                return map(dictFunctor)(Data_Function["const"](Data_Unit.unit));
            };
            var voidLeft = function (dictFunctor) {
                return function (f) {
                    return function (x) {
                        return map(dictFunctor)(Data_Function["const"](x))(f);
                    };
                };
            };
            var voidRight = function (dictFunctor) {
                return function (x) {
                    return map(dictFunctor)(Data_Function["const"](x));
                };
            };
            var functorFn = new Functor(Control_Semigroupoid.compose(Control_Semigroupoid.semigroupoidFn));
            var functorArray = new Functor($foreign.arrayMap);
            var flap = function (dictFunctor) {
                return function (ff) {
                    return function (x) {
                        return map(dictFunctor)(function (f) {
                            return f(x);
                        })(ff);
                    };
                };
            };
            module.exports = {
                Functor: Functor,
                flap: flap,
                map: map,
                mapFlipped: mapFlipped,
                "void": $$void,
                voidLeft: voidLeft,
                voidRight: voidRight,
                functorFn: functorFn,
                functorArray: functorArray
            };

            /***/
        },
        /* 3 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var $foreign = __webpack_require__(42);
            var Data_Semiring = __webpack_require__(1);
            var Data_Unit = __webpack_require__(0);
            var Ring = function (Semiring0, sub) {
                this.Semiring0 = Semiring0;
                this.sub = sub;
            };
            var sub = function (dict) {
                return dict.sub;
            };
            var ringUnit = new Ring(function () {
                return Data_Semiring.semiringUnit;
            }, function (v) {
                return function (v1) {
                    return Data_Unit.unit;
                };
            });
            var ringNumber = new Ring(function () {
                return Data_Semiring.semiringNumber;
            }, $foreign.numSub);
            var ringInt = new Ring(function () {
                return Data_Semiring.semiringInt;
            }, $foreign.intSub);
            var ringFn = function (dictRing) {
                return new Ring(function () {
                    return Data_Semiring.semiringFn(dictRing.Semiring0());
                }, function (f) {
                    return function (g) {
                        return function (x) {
                            return sub(dictRing)(f(x))(g(x));
                        };
                    };
                });
            };
            var negate = function (dictRing) {
                return function (a) {
                    return sub(dictRing)(Data_Semiring.zero(dictRing.Semiring0()))(a);
                };
            };
            module.exports = {
                Ring: Ring,
                negate: negate,
                sub: sub,
                ringInt: ringInt,
                ringNumber: ringNumber,
                ringUnit: ringUnit,
                ringFn: ringFn
            };

            /***/
        },
        /* 4 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var $foreign = __webpack_require__(25);
            var Control_Category = __webpack_require__(8);
            var Data_Function = __webpack_require__(5);
            var Data_Functor = __webpack_require__(2);
            var Apply = function (Functor0, apply) {
                this.Functor0 = Functor0;
                this.apply = apply;
            };
            var applyFn = new Apply(function () {
                return Data_Functor.functorFn;
            }, function (f) {
                return function (g) {
                    return function (x) {
                        return f(x)(g(x));
                    };
                };
            });
            var applyArray = new Apply(function () {
                return Data_Functor.functorArray;
            }, $foreign.arrayApply);
            var apply = function (dict) {
                return dict.apply;
            };
            var applyFirst = function (dictApply) {
                return function (a) {
                    return function (b) {
                        return apply(dictApply)(Data_Functor.map(dictApply.Functor0())(Data_Function["const"])(a))(b);
                    };
                };
            };
            var applySecond = function (dictApply) {
                return function (a) {
                    return function (b) {
                        return apply(dictApply)(Data_Functor.map(dictApply.Functor0())(Data_Function["const"](Control_Category.id(Control_Category.categoryFn)))(a))(b);
                    };
                };
            };
            var lift2 = function (dictApply) {
                return function (f) {
                    return function (a) {
                        return function (b) {
                            return apply(dictApply)(Data_Functor.map(dictApply.Functor0())(f)(a))(b);
                        };
                    };
                };
            };
            var lift3 = function (dictApply) {
                return function (f) {
                    return function (a) {
                        return function (b) {
                            return function (c) {
                                return apply(dictApply)(apply(dictApply)(Data_Functor.map(dictApply.Functor0())(f)(a))(b))(c);
                            };
                        };
                    };
                };
            };
            var lift4 = function (dictApply) {
                return function (f) {
                    return function (a) {
                        return function (b) {
                            return function (c) {
                                return function (d) {
                                    return apply(dictApply)(apply(dictApply)(apply(dictApply)(Data_Functor.map(dictApply.Functor0())(f)(a))(b))(c))(d);
                                };
                            };
                        };
                    };
                };
            };
            var lift5 = function (dictApply) {
                return function (f) {
                    return function (a) {
                        return function (b) {
                            return function (c) {
                                return function (d) {
                                    return function (e) {
                                        return apply(dictApply)(apply(dictApply)(apply(dictApply)(apply(dictApply)(Data_Functor.map(dictApply.Functor0())(f)(a))(b))(c))(d))(e);
                                    };
                                };
                            };
                        };
                    };
                };
            };
            module.exports = {
                Apply: Apply,
                apply: apply,
                applyFirst: applyFirst,
                applySecond: applySecond,
                lift2: lift2,
                lift3: lift3,
                lift4: lift4,
                lift5: lift5,
                applyFn: applyFn,
                applyArray: applyArray
            };

            /***/
        },
        /* 5 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var Control_Category = __webpack_require__(8);
            var on = function (f) {
                return function (g) {
                    return function (x) {
                        return function (y) {
                            return f(g(x))(g(y));
                        };
                    };
                };
            };
            var flip = function (f) {
                return function (b) {
                    return function (a) {
                        return f(a)(b);
                    };
                };
            };
            var $$const = function (a) {
                return function (v) {
                    return a;
                };
            };
            var applyFlipped = function (x) {
                return function (f) {
                    return f(x);
                };
            };
            var apply = function (f) {
                return function (x) {
                    return f(x);
                };
            };
            module.exports = {
                apply: apply,
                applyFlipped: applyFlipped,
                "const": $$const,
                flip: flip,
                on: on
            };

            /***/
        },
        /* 6 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var $foreign = __webpack_require__(28);
            var Show = function (show) {
                this.show = show;
            };
            var showString = new Show($foreign.showStringImpl);
            var showNumber = new Show($foreign.showNumberImpl);
            var showInt = new Show($foreign.showIntImpl);
            var showChar = new Show($foreign.showCharImpl);
            var showBoolean = new Show(function (v) {
                if (v) {
                    return "true";
                };
                if (!v) {
                    return "false";
                };
                throw new Error("Failed pattern match at Data.Show line 12, column 1 - line 12, column 37: " + [v.constructor.name]);
            });
            var show = function (dict) {
                return dict.show;
            };
            var showArray = function (dictShow) {
                return new Show($foreign.showArrayImpl(show(dictShow)));
            };
            module.exports = {
                Show: Show,
                show: show,
                showBoolean: showBoolean,
                showInt: showInt,
                showNumber: showNumber,
                showChar: showChar,
                showString: showString,
                showArray: showArray
            };

            /***/
        },
        /* 7 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var Control_Apply = __webpack_require__(4);
            var Data_Functor = __webpack_require__(2);
            var Data_Unit = __webpack_require__(0);
            var Applicative = function (Apply0, pure) {
                this.Apply0 = Apply0;
                this.pure = pure;
            };
            var pure = function (dict) {
                return dict.pure;
            };
            var unless = function (dictApplicative) {
                return function (v) {
                    return function (v1) {
                        if (!v) {
                            return v1;
                        };
                        if (v) {
                            return pure(dictApplicative)(Data_Unit.unit);
                        };
                        throw new Error("Failed pattern match at Control.Applicative line 62, column 1 - line 62, column 65: " + [v.constructor.name, v1.constructor.name]);
                    };
                };
            };
            var when = function (dictApplicative) {
                return function (v) {
                    return function (v1) {
                        if (v) {
                            return v1;
                        };
                        if (!v) {
                            return pure(dictApplicative)(Data_Unit.unit);
                        };
                        throw new Error("Failed pattern match at Control.Applicative line 57, column 1 - line 57, column 63: " + [v.constructor.name, v1.constructor.name]);
                    };
                };
            };
            var liftA1 = function (dictApplicative) {
                return function (f) {
                    return function (a) {
                        return Control_Apply.apply(dictApplicative.Apply0())(pure(dictApplicative)(f))(a);
                    };
                };
            };
            var applicativeFn = new Applicative(function () {
                return Control_Apply.applyFn;
            }, function (x) {
                return function (v) {
                    return x;
                };
            });
            var applicativeArray = new Applicative(function () {
                return Control_Apply.applyArray;
            }, function (x) {
                return [x];
            });
            module.exports = {
                Applicative: Applicative,
                liftA1: liftA1,
                pure: pure,
                unless: unless,
                when: when,
                applicativeFn: applicativeFn,
                applicativeArray: applicativeArray
            };

            /***/
        },
        /* 8 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var Control_Semigroupoid = __webpack_require__(12);
            var Category = function (Semigroupoid0, id) {
                this.Semigroupoid0 = Semigroupoid0;
                this.id = id;
            };
            var id = function (dict) {
                return dict.id;
            };
            var categoryFn = new Category(function () {
                return Control_Semigroupoid.semigroupoidFn;
            }, function (x) {
                return x;
            });
            module.exports = {
                Category: Category,
                id: id,
                categoryFn: categoryFn
            };

            /***/
        },
        /* 9 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var $foreign = __webpack_require__(38);
            var Data_Unit = __webpack_require__(0);
            var Data_Void = __webpack_require__(10);
            var Eq = function (eq) {
                this.eq = eq;
            };
            var Eq1 = function (eq1) {
                this.eq1 = eq1;
            };
            var eqVoid = new Eq(function (v) {
                return function (v1) {
                    return true;
                };
            });
            var eqUnit = new Eq(function (v) {
                return function (v1) {
                    return true;
                };
            });
            var eqString = new Eq($foreign.refEq);
            var eqNumber = new Eq($foreign.refEq);
            var eqInt = new Eq($foreign.refEq);
            var eqChar = new Eq($foreign.refEq);
            var eqBoolean = new Eq($foreign.refEq);
            var eq1 = function (dict) {
                return dict.eq1;
            };
            var eq = function (dict) {
                return dict.eq;
            };
            var eqArray = function (dictEq) {
                return new Eq($foreign.eqArrayImpl(eq(dictEq)));
            };
            var eq1Array = new Eq1(function (dictEq) {
                return eq(eqArray(dictEq));
            });
            var notEq = function (dictEq) {
                return function (x) {
                    return function (y) {
                        return eq(eqBoolean)(eq(dictEq)(x)(y))(false);
                    };
                };
            };
            var notEq1 = function (dictEq1) {
                return function (dictEq) {
                    return function (x) {
                        return function (y) {
                            return eq(eqBoolean)(eq1(dictEq1)(dictEq)(x)(y))(false);
                        };
                    };
                };
            };
            module.exports = {
                Eq: Eq,
                Eq1: Eq1,
                eq: eq,
                eq1: eq1,
                notEq: notEq,
                notEq1: notEq1,
                eqBoolean: eqBoolean,
                eqInt: eqInt,
                eqNumber: eqNumber,
                eqChar: eqChar,
                eqString: eqString,
                eqUnit: eqUnit,
                eqVoid: eqVoid,
                eqArray: eqArray,
                eq1Array: eq1Array
            };

            /***/
        },
        /* 10 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var Data_Show = __webpack_require__(6);
            var Void = function (x) {
                return x;
            };
            var absurd = function (a) {
                var spin = function ($copy_v) {
                    var $tco_result;
                    function $tco_loop(v) {
                        $copy_v = v;
                        return;
                    };
                    while (!false) {
                        $tco_result = $tco_loop($copy_v);
                    };
                    return $tco_result;
                };
                return spin(a);
            };
            var showVoid = new Data_Show.Show(absurd);
            module.exports = {
                absurd: absurd,
                showVoid: showVoid
            };

            /***/
        },
        /* 11 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var Data_Eq = __webpack_require__(9);
            var Data_Semigroup = __webpack_require__(21);
            var Data_Show = __webpack_require__(6);
            var LT = function () {
                function LT() {};
                LT.value = new LT();
                return LT;
            }();
            var GT = function () {
                function GT() {};
                GT.value = new GT();
                return GT;
            }();
            var EQ = function () {
                function EQ() {};
                EQ.value = new EQ();
                return EQ;
            }();
            var showOrdering = new Data_Show.Show(function (v) {
                if (v instanceof LT) {
                    return "LT";
                };
                if (v instanceof GT) {
                    return "GT";
                };
                if (v instanceof EQ) {
                    return "EQ";
                };
                throw new Error("Failed pattern match at Data.Ordering line 26, column 1 - line 26, column 39: " + [v.constructor.name]);
            });
            var semigroupOrdering = new Data_Semigroup.Semigroup(function (v) {
                return function (v1) {
                    if (v instanceof LT) {
                        return LT.value;
                    };
                    if (v instanceof GT) {
                        return GT.value;
                    };
                    if (v instanceof EQ) {
                        return v1;
                    };
                    throw new Error("Failed pattern match at Data.Ordering line 21, column 1 - line 21, column 49: " + [v.constructor.name, v1.constructor.name]);
                };
            });
            var invert = function (v) {
                if (v instanceof GT) {
                    return LT.value;
                };
                if (v instanceof EQ) {
                    return EQ.value;
                };
                if (v instanceof LT) {
                    return GT.value;
                };
                throw new Error("Failed pattern match at Data.Ordering line 33, column 1 - line 33, column 31: " + [v.constructor.name]);
            };
            var eqOrdering = new Data_Eq.Eq(function (v) {
                return function (v1) {
                    if (v instanceof LT && v1 instanceof LT) {
                        return true;
                    };
                    if (v instanceof GT && v1 instanceof GT) {
                        return true;
                    };
                    if (v instanceof EQ && v1 instanceof EQ) {
                        return true;
                    };
                    return false;
                };
            });
            module.exports = {
                LT: LT,
                GT: GT,
                EQ: EQ,
                invert: invert,
                eqOrdering: eqOrdering,
                semigroupOrdering: semigroupOrdering,
                showOrdering: showOrdering
            };

            /***/
        },
        /* 12 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var Semigroupoid = function (compose) {
                this.compose = compose;
            };
            var semigroupoidFn = new Semigroupoid(function (f) {
                return function (g) {
                    return function (x) {
                        return f(g(x));
                    };
                };
            });
            var compose = function (dict) {
                return dict.compose;
            };
            var composeFlipped = function (dictSemigroupoid) {
                return function (f) {
                    return function (g) {
                        return compose(dictSemigroupoid)(g)(f);
                    };
                };
            };
            module.exports = {
                Semigroupoid: Semigroupoid,
                compose: compose,
                composeFlipped: composeFlipped,
                semigroupoidFn: semigroupoidFn
            };

            /***/
        },
        /* 13 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var $foreign = __webpack_require__(29);
            var Control_Applicative = __webpack_require__(7);
            var Control_Apply = __webpack_require__(4);
            var Control_Category = __webpack_require__(8);
            var Data_Function = __webpack_require__(5);
            var Data_Functor = __webpack_require__(2);
            var Data_Unit = __webpack_require__(0);
            var Bind = function (Apply0, bind) {
                this.Apply0 = Apply0;
                this.bind = bind;
            };
            var Discard = function (discard) {
                this.discard = discard;
            };
            var discard = function (dict) {
                return dict.discard;
            };
            var bindFn = new Bind(function () {
                return Control_Apply.applyFn;
            }, function (m) {
                return function (f) {
                    return function (x) {
                        return f(m(x))(x);
                    };
                };
            });
            var bindArray = new Bind(function () {
                return Control_Apply.applyArray;
            }, $foreign.arrayBind);
            var bind = function (dict) {
                return dict.bind;
            };
            var bindFlipped = function (dictBind) {
                return Data_Function.flip(bind(dictBind));
            };
            var composeKleisliFlipped = function (dictBind) {
                return function (f) {
                    return function (g) {
                        return function (a) {
                            return bindFlipped(dictBind)(f)(g(a));
                        };
                    };
                };
            };
            var composeKleisli = function (dictBind) {
                return function (f) {
                    return function (g) {
                        return function (a) {
                            return bind(dictBind)(f(a))(g);
                        };
                    };
                };
            };
            var discardUnit = new Discard(function (dictBind) {
                return bind(dictBind);
            });
            var ifM = function (dictBind) {
                return function (cond) {
                    return function (t) {
                        return function (f) {
                            return bind(dictBind)(cond)(function (cond$prime) {
                                if (cond$prime) {
                                    return t;
                                };
                                return f;
                            });
                        };
                    };
                };
            };
            var join = function (dictBind) {
                return function (m) {
                    return bind(dictBind)(m)(Control_Category.id(Control_Category.categoryFn));
                };
            };
            module.exports = {
                Bind: Bind,
                Discard: Discard,
                bind: bind,
                bindFlipped: bindFlipped,
                composeKleisli: composeKleisli,
                composeKleisliFlipped: composeKleisliFlipped,
                discard: discard,
                ifM: ifM,
                join: join,
                bindFn: bindFn,
                bindArray: bindArray,
                discardUnit: discardUnit
            };

            /***/
        },
        /* 14 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var $foreign = __webpack_require__(34);
            var Data_Unit = __webpack_require__(0);
            var HeytingAlgebra = function (conj, disj, ff, implies, not, tt) {
                this.conj = conj;
                this.disj = disj;
                this.ff = ff;
                this.implies = implies;
                this.not = not;
                this.tt = tt;
            };
            var tt = function (dict) {
                return dict.tt;
            };
            var not = function (dict) {
                return dict.not;
            };
            var implies = function (dict) {
                return dict.implies;
            };
            var heytingAlgebraUnit = new HeytingAlgebra(function (v) {
                return function (v1) {
                    return Data_Unit.unit;
                };
            }, function (v) {
                return function (v1) {
                    return Data_Unit.unit;
                };
            }, Data_Unit.unit, function (v) {
                return function (v1) {
                    return Data_Unit.unit;
                };
            }, function (v) {
                return Data_Unit.unit;
            }, Data_Unit.unit);
            var ff = function (dict) {
                return dict.ff;
            };
            var disj = function (dict) {
                return dict.disj;
            };
            var heytingAlgebraBoolean = new HeytingAlgebra($foreign.boolConj, $foreign.boolDisj, false, function (a) {
                return function (b) {
                    return disj(heytingAlgebraBoolean)(not(heytingAlgebraBoolean)(a))(b);
                };
            }, $foreign.boolNot, true);
            var conj = function (dict) {
                return dict.conj;
            };
            var heytingAlgebraFunction = function (dictHeytingAlgebra) {
                return new HeytingAlgebra(function (f) {
                    return function (g) {
                        return function (a) {
                            return conj(dictHeytingAlgebra)(f(a))(g(a));
                        };
                    };
                }, function (f) {
                    return function (g) {
                        return function (a) {
                            return disj(dictHeytingAlgebra)(f(a))(g(a));
                        };
                    };
                }, function (v) {
                    return ff(dictHeytingAlgebra);
                }, function (f) {
                    return function (g) {
                        return function (a) {
                            return implies(dictHeytingAlgebra)(f(a))(g(a));
                        };
                    };
                }, function (f) {
                    return function (a) {
                        return not(dictHeytingAlgebra)(f(a));
                    };
                }, function (v) {
                    return tt(dictHeytingAlgebra);
                });
            };
            module.exports = {
                HeytingAlgebra: HeytingAlgebra,
                conj: conj,
                disj: disj,
                ff: ff,
                implies: implies,
                not: not,
                tt: tt,
                heytingAlgebraBoolean: heytingAlgebraBoolean,
                heytingAlgebraUnit: heytingAlgebraUnit,
                heytingAlgebraFunction: heytingAlgebraFunction
            };

            /***/
        },
        /* 15 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var Data_Ring = __webpack_require__(3);
            var Data_Semiring = __webpack_require__(1);
            var Data_Unit = __webpack_require__(0);
            var CommutativeRing = function (Ring0) {
                this.Ring0 = Ring0;
            };
            var commutativeRingUnit = new CommutativeRing(function () {
                return Data_Ring.ringUnit;
            });
            var commutativeRingNumber = new CommutativeRing(function () {
                return Data_Ring.ringNumber;
            });
            var commutativeRingInt = new CommutativeRing(function () {
                return Data_Ring.ringInt;
            });
            var commutativeRingFn = function (dictCommutativeRing) {
                return new CommutativeRing(function () {
                    return Data_Ring.ringFn(dictCommutativeRing.Ring0());
                });
            };
            module.exports = {
                CommutativeRing: CommutativeRing,
                commutativeRingInt: commutativeRingInt,
                commutativeRingNumber: commutativeRingNumber,
                commutativeRingUnit: commutativeRingUnit,
                commutativeRingFn: commutativeRingFn
            };

            /***/
        },
        /* 16 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var $foreign = __webpack_require__(44);
            var Data_BooleanAlgebra = __webpack_require__(19);
            var Data_CommutativeRing = __webpack_require__(15);
            var Data_Eq = __webpack_require__(9);
            var Data_HeytingAlgebra = __webpack_require__(14);
            var Data_Ring = __webpack_require__(3);
            var Data_Semiring = __webpack_require__(1);
            var EuclideanRing = function (CommutativeRing0, degree, div, mod) {
                this.CommutativeRing0 = CommutativeRing0;
                this.degree = degree;
                this.div = div;
                this.mod = mod;
            };
            var mod = function (dict) {
                return dict.mod;
            };
            var gcd = function ($copy_dictEq) {
                return function ($copy_dictEuclideanRing) {
                    return function ($copy_a) {
                        return function ($copy_b) {
                            var $tco_var_dictEq = $copy_dictEq;
                            var $tco_var_dictEuclideanRing = $copy_dictEuclideanRing;
                            var $tco_var_a = $copy_a;
                            var $tco_done = false;
                            var $tco_result;
                            function $tco_loop(dictEq, dictEuclideanRing, a, b) {
                                var $7 = Data_Eq.eq(dictEq)(b)(Data_Semiring.zero(dictEuclideanRing.CommutativeRing0().Ring0().Semiring0()));
                                if ($7) {
                                    $tco_done = true;
                                    return a;
                                };
                                $tco_var_dictEq = dictEq;
                                $tco_var_dictEuclideanRing = dictEuclideanRing;
                                $tco_var_a = b;
                                $copy_b = mod(dictEuclideanRing)(a)(b);
                                return;
                            };
                            while (!$tco_done) {
                                $tco_result = $tco_loop($tco_var_dictEq, $tco_var_dictEuclideanRing, $tco_var_a, $copy_b);
                            };
                            return $tco_result;
                        };
                    };
                };
            };
            var euclideanRingNumber = new EuclideanRing(function () {
                return Data_CommutativeRing.commutativeRingNumber;
            }, function (v) {
                return 1;
            }, $foreign.numDiv, function (v) {
                return function (v1) {
                    return 0.0;
                };
            });
            var euclideanRingInt = new EuclideanRing(function () {
                return Data_CommutativeRing.commutativeRingInt;
            }, $foreign.intDegree, $foreign.intDiv, $foreign.intMod);
            var div = function (dict) {
                return dict.div;
            };
            var lcm = function (dictEq) {
                return function (dictEuclideanRing) {
                    return function (a) {
                        return function (b) {
                            var $8 = Data_Eq.eq(dictEq)(a)(Data_Semiring.zero(dictEuclideanRing.CommutativeRing0().Ring0().Semiring0())) || Data_Eq.eq(dictEq)(b)(Data_Semiring.zero(dictEuclideanRing.CommutativeRing0().Ring0().Semiring0()));
                            if ($8) {
                                return Data_Semiring.zero(dictEuclideanRing.CommutativeRing0().Ring0().Semiring0());
                            };
                            return div(dictEuclideanRing)(Data_Semiring.mul(dictEuclideanRing.CommutativeRing0().Ring0().Semiring0())(a)(b))(gcd(dictEq)(dictEuclideanRing)(a)(b));
                        };
                    };
                };
            };
            var degree = function (dict) {
                return dict.degree;
            };
            module.exports = {
                EuclideanRing: EuclideanRing,
                degree: degree,
                div: div,
                gcd: gcd,
                lcm: lcm,
                mod: mod,
                euclideanRingInt: euclideanRingInt,
                euclideanRingNumber: euclideanRingNumber
            };

            /***/
        },
        /* 17 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var $foreign = __webpack_require__(24);
            var Control_Applicative = __webpack_require__(7);
            var Control_Apply = __webpack_require__(4);
            var Control_Bind = __webpack_require__(13);
            var Control_Monad = __webpack_require__(18);
            var Data_Functor = __webpack_require__(2);
            var Data_Unit = __webpack_require__(0);
            var monadEff = new Control_Monad.Monad(function () {
                return applicativeEff;
            }, function () {
                return bindEff;
            });
            var bindEff = new Control_Bind.Bind(function () {
                return applyEff;
            }, $foreign.bindE);
            var applyEff = new Control_Apply.Apply(function () {
                return functorEff;
            }, Control_Monad.ap(monadEff));
            var applicativeEff = new Control_Applicative.Applicative(function () {
                return applyEff;
            }, $foreign.pureE);
            var functorEff = new Data_Functor.Functor(Control_Applicative.liftA1(applicativeEff));
            module.exports = {
                functorEff: functorEff,
                applyEff: applyEff,
                applicativeEff: applicativeEff,
                bindEff: bindEff,
                monadEff: monadEff,
                forE: $foreign.forE,
                foreachE: $foreign.foreachE,
                runPure: $foreign.runPure,
                untilE: $foreign.untilE,
                whileE: $foreign.whileE
            };

            /***/
        },
        /* 18 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var Control_Applicative = __webpack_require__(7);
            var Control_Apply = __webpack_require__(4);
            var Control_Bind = __webpack_require__(13);
            var Data_Functor = __webpack_require__(2);
            var Data_Unit = __webpack_require__(0);
            var Monad = function (Applicative0, Bind1) {
                this.Applicative0 = Applicative0;
                this.Bind1 = Bind1;
            };
            var whenM = function (dictMonad) {
                return function (mb) {
                    return function (m) {
                        return Control_Bind.bind(dictMonad.Bind1())(mb)(function (v) {
                            return Control_Applicative.when(dictMonad.Applicative0())(v)(m);
                        });
                    };
                };
            };
            var unlessM = function (dictMonad) {
                return function (mb) {
                    return function (m) {
                        return Control_Bind.bind(dictMonad.Bind1())(mb)(function (v) {
                            return Control_Applicative.unless(dictMonad.Applicative0())(v)(m);
                        });
                    };
                };
            };
            var monadFn = new Monad(function () {
                return Control_Applicative.applicativeFn;
            }, function () {
                return Control_Bind.bindFn;
            });
            var monadArray = new Monad(function () {
                return Control_Applicative.applicativeArray;
            }, function () {
                return Control_Bind.bindArray;
            });
            var liftM1 = function (dictMonad) {
                return function (f) {
                    return function (a) {
                        return Control_Bind.bind(dictMonad.Bind1())(a)(function (v) {
                            return Control_Applicative.pure(dictMonad.Applicative0())(f(v));
                        });
                    };
                };
            };
            var ap = function (dictMonad) {
                return function (f) {
                    return function (a) {
                        return Control_Bind.bind(dictMonad.Bind1())(f)(function (v) {
                            return Control_Bind.bind(dictMonad.Bind1())(a)(function (v1) {
                                return Control_Applicative.pure(dictMonad.Applicative0())(v(v1));
                            });
                        });
                    };
                };
            };
            module.exports = {
                Monad: Monad,
                ap: ap,
                liftM1: liftM1,
                unlessM: unlessM,
                whenM: whenM,
                monadFn: monadFn,
                monadArray: monadArray
            };

            /***/
        },
        /* 19 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var Data_HeytingAlgebra = __webpack_require__(14);
            var Data_Unit = __webpack_require__(0);
            var BooleanAlgebra = function (HeytingAlgebra0) {
                this.HeytingAlgebra0 = HeytingAlgebra0;
            };
            var booleanAlgebraUnit = new BooleanAlgebra(function () {
                return Data_HeytingAlgebra.heytingAlgebraUnit;
            });
            var booleanAlgebraFn = function (dictBooleanAlgebra) {
                return new BooleanAlgebra(function () {
                    return Data_HeytingAlgebra.heytingAlgebraFunction(dictBooleanAlgebra.HeytingAlgebra0());
                });
            };
            var booleanAlgebraBoolean = new BooleanAlgebra(function () {
                return Data_HeytingAlgebra.heytingAlgebraBoolean;
            });
            module.exports = {
                BooleanAlgebra: BooleanAlgebra,
                booleanAlgebraBoolean: booleanAlgebraBoolean,
                booleanAlgebraUnit: booleanAlgebraUnit,
                booleanAlgebraFn: booleanAlgebraFn
            };

            /***/
        },
        /* 20 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var $foreign = __webpack_require__(37);
            var Data_Eq = __webpack_require__(9);
            var Data_Function = __webpack_require__(5);
            var Data_Ord_Unsafe = __webpack_require__(39);
            var Data_Ordering = __webpack_require__(11);
            var Data_Ring = __webpack_require__(3);
            var Data_Semiring = __webpack_require__(1);
            var Data_Unit = __webpack_require__(0);
            var Data_Void = __webpack_require__(10);
            var Ord = function (Eq0, compare) {
                this.Eq0 = Eq0;
                this.compare = compare;
            };
            var Ord1 = function (Eq10, compare1) {
                this.Eq10 = Eq10;
                this.compare1 = compare1;
            };
            var ordVoid = new Ord(function () {
                return Data_Eq.eqVoid;
            }, function (v) {
                return function (v1) {
                    return Data_Ordering.EQ.value;
                };
            });
            var ordUnit = new Ord(function () {
                return Data_Eq.eqUnit;
            }, function (v) {
                return function (v1) {
                    return Data_Ordering.EQ.value;
                };
            });
            var ordString = new Ord(function () {
                return Data_Eq.eqString;
            }, Data_Ord_Unsafe.unsafeCompare);
            var ordOrdering = new Ord(function () {
                return Data_Ordering.eqOrdering;
            }, function (v) {
                return function (v1) {
                    if (v instanceof Data_Ordering.LT && v1 instanceof Data_Ordering.LT) {
                        return Data_Ordering.EQ.value;
                    };
                    if (v instanceof Data_Ordering.EQ && v1 instanceof Data_Ordering.EQ) {
                        return Data_Ordering.EQ.value;
                    };
                    if (v instanceof Data_Ordering.GT && v1 instanceof Data_Ordering.GT) {
                        return Data_Ordering.EQ.value;
                    };
                    if (v instanceof Data_Ordering.LT) {
                        return Data_Ordering.LT.value;
                    };
                    if (v instanceof Data_Ordering.EQ && v1 instanceof Data_Ordering.LT) {
                        return Data_Ordering.GT.value;
                    };
                    if (v instanceof Data_Ordering.EQ && v1 instanceof Data_Ordering.GT) {
                        return Data_Ordering.LT.value;
                    };
                    if (v instanceof Data_Ordering.GT) {
                        return Data_Ordering.GT.value;
                    };
                    throw new Error("Failed pattern match at Data.Ord line 68, column 1 - line 68, column 37: " + [v.constructor.name, v1.constructor.name]);
                };
            });
            var ordNumber = new Ord(function () {
                return Data_Eq.eqNumber;
            }, Data_Ord_Unsafe.unsafeCompare);
            var ordInt = new Ord(function () {
                return Data_Eq.eqInt;
            }, Data_Ord_Unsafe.unsafeCompare);
            var ordChar = new Ord(function () {
                return Data_Eq.eqChar;
            }, Data_Ord_Unsafe.unsafeCompare);
            var ordBoolean = new Ord(function () {
                return Data_Eq.eqBoolean;
            }, Data_Ord_Unsafe.unsafeCompare);
            var compare1 = function (dict) {
                return dict.compare1;
            };
            var compare = function (dict) {
                return dict.compare;
            };
            var comparing = function (dictOrd) {
                return function (f) {
                    return Data_Function.on(compare(dictOrd))(f);
                };
            };
            var greaterThan = function (dictOrd) {
                return function (a1) {
                    return function (a2) {
                        var v = compare(dictOrd)(a1)(a2);
                        if (v instanceof Data_Ordering.GT) {
                            return true;
                        };
                        return false;
                    };
                };
            };
            var greaterThanOrEq = function (dictOrd) {
                return function (a1) {
                    return function (a2) {
                        var v = compare(dictOrd)(a1)(a2);
                        if (v instanceof Data_Ordering.LT) {
                            return false;
                        };
                        return true;
                    };
                };
            };
            var signum = function (dictOrd) {
                return function (dictRing) {
                    return function (x) {
                        var $33 = greaterThanOrEq(dictOrd)(x)(Data_Semiring.zero(dictRing.Semiring0()));
                        if ($33) {
                            return Data_Semiring.one(dictRing.Semiring0());
                        };
                        return Data_Ring.negate(dictRing)(Data_Semiring.one(dictRing.Semiring0()));
                    };
                };
            };
            var lessThan = function (dictOrd) {
                return function (a1) {
                    return function (a2) {
                        var v = compare(dictOrd)(a1)(a2);
                        if (v instanceof Data_Ordering.LT) {
                            return true;
                        };
                        return false;
                    };
                };
            };
            var lessThanOrEq = function (dictOrd) {
                return function (a1) {
                    return function (a2) {
                        var v = compare(dictOrd)(a1)(a2);
                        if (v instanceof Data_Ordering.GT) {
                            return false;
                        };
                        return true;
                    };
                };
            };
            var max = function (dictOrd) {
                return function (x) {
                    return function (y) {
                        var v = compare(dictOrd)(x)(y);
                        if (v instanceof Data_Ordering.LT) {
                            return y;
                        };
                        if (v instanceof Data_Ordering.EQ) {
                            return x;
                        };
                        if (v instanceof Data_Ordering.GT) {
                            return x;
                        };
                        throw new Error("Failed pattern match at Data.Ord line 123, column 3 - line 126, column 12: " + [v.constructor.name]);
                    };
                };
            };
            var min = function (dictOrd) {
                return function (x) {
                    return function (y) {
                        var v = compare(dictOrd)(x)(y);
                        if (v instanceof Data_Ordering.LT) {
                            return x;
                        };
                        if (v instanceof Data_Ordering.EQ) {
                            return x;
                        };
                        if (v instanceof Data_Ordering.GT) {
                            return y;
                        };
                        throw new Error("Failed pattern match at Data.Ord line 114, column 3 - line 117, column 12: " + [v.constructor.name]);
                    };
                };
            };
            var ordArray = function (dictOrd) {
                return new Ord(function () {
                    return Data_Eq.eqArray(dictOrd.Eq0());
                }, function () {
                    var toDelta = function (x) {
                        return function (y) {
                            var v = compare(dictOrd)(x)(y);
                            if (v instanceof Data_Ordering.EQ) {
                                return 0;
                            };
                            if (v instanceof Data_Ordering.LT) {
                                return 1;
                            };
                            if (v instanceof Data_Ordering.GT) {
                                return -1 | 0;
                            };
                            throw new Error("Failed pattern match at Data.Ord line 61, column 7 - line 66, column 1: " + [v.constructor.name]);
                        };
                    };
                    return function (xs) {
                        return function (ys) {
                            return compare(ordInt)(0)($foreign.ordArrayImpl(toDelta)(xs)(ys));
                        };
                    };
                }());
            };
            var ord1Array = new Ord1(function () {
                return Data_Eq.eq1Array;
            }, function (dictOrd) {
                return compare(ordArray(dictOrd));
            });
            var clamp = function (dictOrd) {
                return function (low) {
                    return function (hi) {
                        return function (x) {
                            return min(dictOrd)(hi)(max(dictOrd)(low)(x));
                        };
                    };
                };
            };
            var between = function (dictOrd) {
                return function (low) {
                    return function (hi) {
                        return function (x) {
                            if (lessThan(dictOrd)(x)(low)) {
                                return false;
                            };
                            if (greaterThan(dictOrd)(x)(hi)) {
                                return false;
                            };
                            return true;
                        };
                    };
                };
            };
            var abs = function (dictOrd) {
                return function (dictRing) {
                    return function (x) {
                        var $42 = greaterThanOrEq(dictOrd)(x)(Data_Semiring.zero(dictRing.Semiring0()));
                        if ($42) {
                            return x;
                        };
                        return Data_Ring.negate(dictRing)(x);
                    };
                };
            };
            module.exports = {
                Ord: Ord,
                Ord1: Ord1,
                abs: abs,
                between: between,
                clamp: clamp,
                compare: compare,
                compare1: compare1,
                comparing: comparing,
                greaterThan: greaterThan,
                greaterThanOrEq: greaterThanOrEq,
                lessThan: lessThan,
                lessThanOrEq: lessThanOrEq,
                max: max,
                min: min,
                signum: signum,
                ordBoolean: ordBoolean,
                ordInt: ordInt,
                ordNumber: ordNumber,
                ordString: ordString,
                ordChar: ordChar,
                ordUnit: ordUnit,
                ordVoid: ordVoid,
                ordArray: ordArray,
                ordOrdering: ordOrdering,
                ord1Array: ord1Array
            };

            /***/
        },
        /* 21 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var $foreign = __webpack_require__(41);
            var Data_Unit = __webpack_require__(0);
            var Data_Void = __webpack_require__(10);
            var Semigroup = function (append) {
                this.append = append;
            };
            var semigroupVoid = new Semigroup(function (v) {
                return Data_Void.absurd;
            });
            var semigroupUnit = new Semigroup(function (v) {
                return function (v1) {
                    return Data_Unit.unit;
                };
            });
            var semigroupString = new Semigroup($foreign.concatString);
            var semigroupArray = new Semigroup($foreign.concatArray);
            var append = function (dict) {
                return dict.append;
            };
            var semigroupFn = function (dictSemigroup) {
                return new Semigroup(function (f) {
                    return function (g) {
                        return function (x) {
                            return append(dictSemigroup)(f(x))(g(x));
                        };
                    };
                });
            };
            module.exports = {
                Semigroup: Semigroup,
                append: append,
                semigroupString: semigroupString,
                semigroupUnit: semigroupUnit,
                semigroupVoid: semigroupVoid,
                semigroupFn: semigroupFn,
                semigroupArray: semigroupArray
            };

            /***/
        },
        /* 22 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var Data_EuclideanRing = __webpack_require__(16);
            var Data_Ring = __webpack_require__(3);
            var Data_Semiring = __webpack_require__(1);
            var DivisionRing = function (Ring0, recip) {
                this.Ring0 = Ring0;
                this.recip = recip;
            };
            var recip = function (dict) {
                return dict.recip;
            };
            var rightDiv = function (dictDivisionRing) {
                return function (a) {
                    return function (b) {
                        return Data_Semiring.mul(dictDivisionRing.Ring0().Semiring0())(a)(recip(dictDivisionRing)(b));
                    };
                };
            };
            var leftDiv = function (dictDivisionRing) {
                return function (a) {
                    return function (b) {
                        return Data_Semiring.mul(dictDivisionRing.Ring0().Semiring0())(recip(dictDivisionRing)(b))(a);
                    };
                };
            };
            var divisionringNumber = new DivisionRing(function () {
                return Data_Ring.ringNumber;
            }, function (x) {
                return 1.0 / x;
            });
            module.exports = {
                DivisionRing: DivisionRing,
                leftDiv: leftDiv,
                recip: recip,
                rightDiv: rightDiv,
                divisionringNumber: divisionringNumber
            };

            /***/
        },
        /* 23 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var Control_Monad_Eff = __webpack_require__(17);
            var Control_Monad_Eff_Console = __webpack_require__(30);
            var Prelude = __webpack_require__(32);
            var hello = Control_Monad_Eff_Console.log("Hello sailor!");
            module.exports = {
                hello: hello
            };

            /***/
        },
        /* 24 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            exports.pureE = function (a) {
                return function () {
                    return a;
                };
            };

            exports.bindE = function (a) {
                return function (f) {
                    return function () {
                        return f(a())();
                    };
                };
            };

            exports.runPure = function (f) {
                return f();
            };

            exports.untilE = function (f) {
                return function () {
                    while (!f());
                    return {};
                };
            };

            exports.whileE = function (f) {
                return function (a) {
                    return function () {
                        while (f()) {
                            a();
                        }
                        return {};
                    };
                };
            };

            exports.forE = function (lo) {
                return function (hi) {
                    return function (f) {
                        return function () {
                            for (var i = lo; i < hi; i++) {
                                f(i)();
                            }
                        };
                    };
                };
            };

            exports.foreachE = function (as) {
                return function (f) {
                    return function () {
                        for (var i = 0, l = as.length; i < l; i++) {
                            f(as[i])();
                        }
                    };
                };
            };

            /***/
        },
        /* 25 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            exports.arrayApply = function (fs) {
                return function (xs) {
                    var l = fs.length;
                    var k = xs.length;
                    var result = new Array(l * k);
                    var n = 0;
                    for (var i = 0; i < l; i++) {
                        var f = fs[i];
                        for (var j = 0; j < k; j++) {
                            result[n++] = f(xs[j]);
                        }
                    }
                    return result;
                };
            };

            /***/
        },
        /* 26 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            exports.arrayMap = function (f) {
                return function (arr) {
                    var l = arr.length;
                    var result = new Array(l);
                    for (var i = 0; i < l; i++) {
                        result[i] = f(arr[i]);
                    }
                    return result;
                };
            };

            /***/
        },
        /* 27 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            exports.unit = {};

            /***/
        },
        /* 28 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            exports.showIntImpl = function (n) {
                return n.toString();
            };

            exports.showNumberImpl = function (n) {
                var str = n.toString();
                return isNaN(str + ".0") ? str : str + ".0";
            };

            exports.showCharImpl = function (c) {
                var code = c.charCodeAt(0);
                if (code < 0x20 || code === 0x7F) {
                    switch (c) {
                        case "\x07":
                            return "'\\a'";
                        case "\b":
                            return "'\\b'";
                        case "\f":
                            return "'\\f'";
                        case "\n":
                            return "'\\n'";
                        case "\r":
                            return "'\\r'";
                        case "\t":
                            return "'\\t'";
                        case "\v":
                            return "'\\v'";
                    }
                    return "'\\" + code.toString(10) + "'";
                }
                return c === "'" || c === "\\" ? "'\\" + c + "'" : "'" + c + "'";
            };

            exports.showStringImpl = function (s) {
                var l = s.length;
                return "\"" + s.replace(/[\0-\x1F\x7F"\\]/g, // eslint-disable-line no-control-regex
                function (c, i) {
                    switch (c) {
                        case "\"":
                        case "\\":
                            return "\\" + c;
                        case "\x07":
                            return "\\a";
                        case "\b":
                            return "\\b";
                        case "\f":
                            return "\\f";
                        case "\n":
                            return "\\n";
                        case "\r":
                            return "\\r";
                        case "\t":
                            return "\\t";
                        case "\v":
                            return "\\v";
                    }
                    var k = i + 1;
                    var empty = k < l && s[k] >= "0" && s[k] <= "9" ? "\\&" : "";
                    return "\\" + c.charCodeAt(0).toString(10) + empty;
                }) + "\"";
            };

            exports.showArrayImpl = function (f) {
                return function (xs) {
                    var ss = [];
                    for (var i = 0, l = xs.length; i < l; i++) {
                        ss[i] = f(xs[i]);
                    }
                    return "[" + ss.join(",") + "]";
                };
            };

            /***/
        },
        /* 29 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            exports.arrayBind = function (arr) {
                return function (f) {
                    var result = [];
                    for (var i = 0, l = arr.length; i < l; i++) {
                        Array.prototype.push.apply(result, f(arr[i]));
                    }
                    return result;
                };
            };

            /***/
        },
        /* 30 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var $foreign = __webpack_require__(31);
            var Control_Monad_Eff = __webpack_require__(17);
            var Data_Show = __webpack_require__(6);
            var Data_Unit = __webpack_require__(0);
            var warnShow = function (dictShow) {
                return function (a) {
                    return $foreign.warn(Data_Show.show(dictShow)(a));
                };
            };
            var logShow = function (dictShow) {
                return function (a) {
                    return $foreign.log(Data_Show.show(dictShow)(a));
                };
            };
            var infoShow = function (dictShow) {
                return function (a) {
                    return $foreign.info(Data_Show.show(dictShow)(a));
                };
            };
            var errorShow = function (dictShow) {
                return function (a) {
                    return $foreign.error(Data_Show.show(dictShow)(a));
                };
            };
            module.exports = {
                errorShow: errorShow,
                infoShow: infoShow,
                logShow: logShow,
                warnShow: warnShow,
                error: $foreign.error,
                info: $foreign.info,
                log: $foreign.log,
                warn: $foreign.warn
            };

            /***/
        },
        /* 31 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            exports.log = function (s) {
                return function () {
                    console.log(s);
                    return {};
                };
            };

            exports.warn = function (s) {
                return function () {
                    console.warn(s);
                    return {};
                };
            };

            exports.error = function (s) {
                return function () {
                    console.error(s);
                    return {};
                };
            };

            exports.info = function (s) {
                return function () {
                    console.info(s);
                    return {};
                };
            };

            /***/
        },
        /* 32 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var Control_Applicative = __webpack_require__(7);
            var Control_Apply = __webpack_require__(4);
            var Control_Bind = __webpack_require__(13);
            var Control_Category = __webpack_require__(8);
            var Control_Monad = __webpack_require__(18);
            var Control_Semigroupoid = __webpack_require__(12);
            var Data_Boolean = __webpack_require__(33);
            var Data_BooleanAlgebra = __webpack_require__(19);
            var Data_Bounded = __webpack_require__(35);
            var Data_CommutativeRing = __webpack_require__(15);
            var Data_DivisionRing = __webpack_require__(22);
            var Data_Eq = __webpack_require__(9);
            var Data_EuclideanRing = __webpack_require__(16);
            var Data_Field = __webpack_require__(45);
            var Data_Function = __webpack_require__(5);
            var Data_Functor = __webpack_require__(2);
            var Data_HeytingAlgebra = __webpack_require__(14);
            var Data_NaturalTransformation = __webpack_require__(46);
            var Data_Ord = __webpack_require__(20);
            var Data_Ordering = __webpack_require__(11);
            var Data_Ring = __webpack_require__(3);
            var Data_Semigroup = __webpack_require__(21);
            var Data_Semiring = __webpack_require__(1);
            var Data_Show = __webpack_require__(6);
            var Data_Unit = __webpack_require__(0);
            var Data_Void = __webpack_require__(10);
            module.exports = {};

            /***/
        },
        /* 33 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var otherwise = true;
            module.exports = {
                otherwise: otherwise
            };

            /***/
        },
        /* 34 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            exports.boolConj = function (b1) {
                return function (b2) {
                    return b1 && b2;
                };
            };

            exports.boolDisj = function (b1) {
                return function (b2) {
                    return b1 || b2;
                };
            };

            exports.boolNot = function (b) {
                return !b;
            };

            /***/
        },
        /* 35 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var $foreign = __webpack_require__(36);
            var Data_Ord = __webpack_require__(20);
            var Data_Ordering = __webpack_require__(11);
            var Data_Unit = __webpack_require__(0);
            var Bounded = function (Ord0, bottom, top) {
                this.Ord0 = Ord0;
                this.bottom = bottom;
                this.top = top;
            };
            var top = function (dict) {
                return dict.top;
            };
            var boundedUnit = new Bounded(function () {
                return Data_Ord.ordUnit;
            }, Data_Unit.unit, Data_Unit.unit);
            var boundedOrdering = new Bounded(function () {
                return Data_Ord.ordOrdering;
            }, Data_Ordering.LT.value, Data_Ordering.GT.value);
            var boundedInt = new Bounded(function () {
                return Data_Ord.ordInt;
            }, $foreign.bottomInt, $foreign.topInt);
            var boundedChar = new Bounded(function () {
                return Data_Ord.ordChar;
            }, $foreign.bottomChar, $foreign.topChar);
            var boundedBoolean = new Bounded(function () {
                return Data_Ord.ordBoolean;
            }, false, true);
            var bottom = function (dict) {
                return dict.bottom;
            };
            module.exports = {
                Bounded: Bounded,
                bottom: bottom,
                top: top,
                boundedBoolean: boundedBoolean,
                boundedInt: boundedInt,
                boundedChar: boundedChar,
                boundedOrdering: boundedOrdering,
                boundedUnit: boundedUnit
            };

            /***/
        },
        /* 36 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            exports.topInt = 2147483647;
            exports.bottomInt = -2147483648;

            exports.topChar = String.fromCharCode(65535);
            exports.bottomChar = String.fromCharCode(0);

            /***/
        },
        /* 37 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            exports.ordArrayImpl = function (f) {
                return function (xs) {
                    return function (ys) {
                        var i = 0;
                        var xlen = xs.length;
                        var ylen = ys.length;
                        while (i < xlen && i < ylen) {
                            var x = xs[i];
                            var y = ys[i];
                            var o = f(x)(y);
                            if (o !== 0) {
                                return o;
                            }
                            i++;
                        }
                        if (xlen === ylen) {
                            return 0;
                        } else if (xlen > ylen) {
                            return -1;
                        } else {
                            return 1;
                        }
                    };
                };
            };

            /***/
        },
        /* 38 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            exports.refEq = function (r1) {
                return function (r2) {
                    return r1 === r2;
                };
            };

            exports.eqArrayImpl = function (f) {
                return function (xs) {
                    return function (ys) {
                        if (xs.length !== ys.length) return false;
                        for (var i = 0; i < xs.length; i++) {
                            if (!f(xs[i])(ys[i])) return false;
                        }
                        return true;
                    };
                };
            };

            /***/
        },
        /* 39 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var $foreign = __webpack_require__(40);
            var Data_Ordering = __webpack_require__(11);
            var unsafeCompare = $foreign.unsafeCompareImpl(Data_Ordering.LT.value)(Data_Ordering.EQ.value)(Data_Ordering.GT.value);
            module.exports = {
                unsafeCompare: unsafeCompare
            };

            /***/
        },
        /* 40 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            exports.unsafeCompareImpl = function (lt) {
                return function (eq) {
                    return function (gt) {
                        return function (x) {
                            return function (y) {
                                return x < y ? lt : x === y ? eq : gt;
                            };
                        };
                    };
                };
            };

            /***/
        },
        /* 41 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            exports.concatString = function (s1) {
                return function (s2) {
                    return s1 + s2;
                };
            };

            exports.concatArray = function (xs) {
                return function (ys) {
                    if (xs.length === 0) return ys;
                    if (ys.length === 0) return xs;
                    return xs.concat(ys);
                };
            };

            /***/
        },
        /* 42 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            exports.intSub = function (x) {
                return function (y) {
                    /* jshint bitwise: false */
                    return x - y | 0;
                };
            };

            exports.numSub = function (n1) {
                return function (n2) {
                    return n1 - n2;
                };
            };

            /***/
        },
        /* 43 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            exports.intAdd = function (x) {
                return function (y) {
                    /* jshint bitwise: false */
                    return x + y | 0;
                };
            };

            exports.intMul = function (x) {
                return function (y) {
                    /* jshint bitwise: false */
                    return x * y | 0;
                };
            };

            exports.numAdd = function (n1) {
                return function (n2) {
                    return n1 + n2;
                };
            };

            exports.numMul = function (n1) {
                return function (n2) {
                    return n1 * n2;
                };
            };

            /***/
        },
        /* 44 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            exports.intDegree = function (x) {
                return Math.min(Math.abs(x), 2147483647);
            };

            exports.intDiv = function (x) {
                return function (y) {
                    /* jshint bitwise: false */
                    return x / y | 0;
                };
            };

            exports.intMod = function (x) {
                return function (y) {
                    return x % y;
                };
            };

            exports.numDiv = function (n1) {
                return function (n2) {
                    return n1 / n2;
                };
            };

            /***/
        },
        /* 45 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            var Data_CommutativeRing = __webpack_require__(15);
            var Data_DivisionRing = __webpack_require__(22);
            var Data_EuclideanRing = __webpack_require__(16);
            var Data_Ring = __webpack_require__(3);
            var Data_Semiring = __webpack_require__(1);
            var Field = function (EuclideanRing0) {
                this.EuclideanRing0 = EuclideanRing0;
            };
            var fieldNumber = new Field(function () {
                return Data_EuclideanRing.euclideanRingNumber;
            });
            module.exports = {
                Field: Field,
                fieldNumber: fieldNumber
            };

            /***/
        },
        /* 46 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // Generated by purs version 0.11.6

            module.exports = {};

            /***/
        }]
        /******/)
    );
});

/***/ })
/******/ ]);