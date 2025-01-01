"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CosmoPicker = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var CosmoPicker = exports.CosmoPicker = function CosmoPicker(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    icon = _ref.icon,
    startYear = _ref.startYear,
    endYear = _ref.endYear,
    dayBorderRadius = _ref.dayBorderRadius,
    inputWidth = _ref.inputWidth,
    inputFontSize = _ref.inputFontSize,
    inputFontWeight = _ref.inputFontWeight,
    inputBackgroundColor = _ref.inputBackgroundColor,
    inputTextColor = _ref.inputTextColor,
    placeholderColor = _ref.placeholderColor,
    calendarBackgroundColor = _ref.calendarBackgroundColor,
    yearBackgroundColor = _ref.yearBackgroundColor,
    calendarTextColor = _ref.calendarTextColor,
    dayBackgroundColor = _ref.dayBackgroundColor,
    dayHoverColor = _ref.dayHoverColor,
    selectedDayBackgroundColor = _ref.selectedDayBackgroundColor,
    selectedDayTextColor = _ref.selectedDayTextColor,
    yearHoverColor = _ref.yearHoverColor,
    arrowHoverColor = _ref.arrowHoverColor,
    arrowColor = _ref.arrowColor,
    calendarFontWeight = _ref.calendarFontWeight,
    scrollBarColor = _ref.scrollBarColor,
    iconColor = _ref.iconColor,
    zIndex = _ref.zIndex;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    dateDropdown = _useState2[0],
    setDateDropdown = _useState2[1];
  var _useState3 = (0, _react.useState)('day'),
    _useState4 = _slicedToArray(_useState3, 2),
    view = _useState4[0],
    setView = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    month = _useState6[0],
    setMonth = _useState6[1];
  var _useState7 = (0, _react.useState)(1),
    _useState8 = _slicedToArray(_useState7, 2),
    day = _useState8[0],
    setDay = _useState8[1];
  var datepickerRef = (0, _react.useRef)(null);
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    hoverDay = _useState10[0],
    setHoverDay = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    hoverYear = _useState12[0],
    setHoverYear = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    hoverArrow = _useState14[0],
    setHoverArrow = _useState14[1];
  var style = document.createElement('style');
  style.textContent = "\n  .year-picker::-webkit-scrollbar {\n    width: 4px;\n  }\n\n  .year-picker::-webkit-scrollbar-track {\n    background: transparent;\n  }\n\n  .year-picker::-webkit-scrollbar-thumb {\n    background: ".concat(scrollBarColor || '#bbbbbb', ";\n    border-radius: 5px;\n  }\n");
  document.head.appendChild(style);
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  function getYearRange(startYear, endYear) {
    var currentYear = new Date().getFullYear();
    var rangeStart, rangeEnd;
    if (startYear < 0 || endYear < 0) {
      rangeStart = currentYear - 200;
      rangeEnd = currentYear + 200;
    } else if (startYear && endYear) {
      rangeStart = startYear;
      rangeEnd = endYear;
    } else if (startYear) {
      rangeStart = startYear;
      rangeEnd = startYear + 200;
    } else if (endYear) {
      rangeStart = endYear - 200;
      rangeEnd = endYear;
    } else {
      rangeStart = currentYear - 200;
      rangeEnd = currentYear + 200;
    }
    return {
      rangeStart: rangeStart,
      rangeEnd: rangeEnd
    };
  }
  var _getYearRange = getYearRange(startYear, endYear),
    rangeStart = _getYearRange.rangeStart,
    rangeEnd = _getYearRange.rangeEnd;
  var _useState15 = (0, _react.useState)(rangeStart),
    _useState16 = _slicedToArray(_useState15, 2),
    year = _useState16[0],
    setYear = _useState16[1];
  var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var isLeapYear = function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  };
  var getDaysInMonth = function getDaysInMonth(year, month) {
    return Array.from({
      length: month === 1 && isLeapYear(year) ? 29 : monthDays[month]
    }, function (_, i) {
      return i + 1;
    });
  };
  var handleDayChange = function handleDayChange(selectedDay) {
    setDay(selectedDay);
    onChange("".concat(selectedDay, " ").concat(monthNames[month], " ").concat(year));
    setDateDropdown(false);
  };
  var handleMonthChange = function handleMonthChange(direction) {
    setMonth(function (prev) {
      return (prev + direction + 12) % 12;
    });
    if (direction === -1 && month === 0) setYear(function (prev) {
      return prev - 1;
    });
    if (direction === 1 && month === 11) setYear(function (prev) {
      return prev + 1;
    });
  };
  var handleClickOutside = function handleClickOutside(event) {
    if (datepickerRef.current && !datepickerRef.current.contains(event.target)) {
      setDateDropdown(false);
    }
  };
  (0, _react.useEffect)(function () {
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      return document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  var renderDays = function renderDays() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '0.5rem'
      }
    }, getDaysInMonth(year, month).map(function (d) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: d,
        onClick: function onClick() {
          handleDayChange(d);
          setHoverDay(null);
        },
        style: {
          width: '1.8rem',
          height: '1.8rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: dayBorderRadius || '5px',
          fontSize: '0.7rem',
          cursor: 'pointer',
          transition: '0.15s',
          backgroundColor: d === day && value && typeof value === 'string' && monthNames[month] === value.split(' ')[1] && year === parseInt(value.split(' ')[2]) ? selectedDayBackgroundColor || 'black' : hoverDay === d ? dayHoverColor || '#d1d5db' : dayBackgroundColor || '#f3f4f6',
          color: d === day && value && typeof value === 'string' && monthNames[month] === value.split(' ')[1] && year === parseInt(value.split(' ')[2]) ? selectedDayTextColor || 'white' : 'inherit'
        },
        onMouseEnter: function onMouseEnter() {
          return setHoverDay(d);
        },
        onMouseLeave: function onMouseLeave() {
          return setHoverDay(null);
        }
      }, d);
    }));
  };
  var renderYears = function renderYears() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "year-picker",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: '0.5rem',
        maxHeight: '15rem',
        overflowY: 'auto'
      }
    }, Array.from({
      length: rangeEnd - rangeStart + 1
    }, function (_, i) {
      return rangeStart + i;
    }).map(function (y) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: y,
        onClick: function onClick() {
          setYear(y);
          setView('day');
          setHoverYear(null);
        },
        style: {
          height: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '0.25rem',
          backgroundColor: hoverYear === y ? yearHoverColor || '#d1d5db' : yearBackgroundColor || '#f3f4f6',
          transition: '0.15s',
          fontSize: '0.75rem',
          cursor: 'pointer'
        },
        onMouseEnter: function onMouseEnter() {
          return setHoverYear(y);
        },
        onMouseLeave: function onMouseLeave() {
          return setHoverYear(null);
        }
      }, y);
    }));
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: datepickerRef,
    style: {
      position: 'relative',
      width: inputWidth || '100%',
      height: '2.5rem',
      backgroundColor: inputBackgroundColor || 'white',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      fontSize: inputFontSize || '0.75rem',
      fontWeight: inputFontWeight || '400',
      cursor: 'pointer',
      zIndex: zIndex || 100,
      borderRadius: '0.25rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return setDateDropdown(function (prev) {
        return !prev;
      });
    },
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
      color: value ? inputTextColor || 'black' : placeholderColor || '#9ca3af'
    }
  }, value || 'Date', icon && /*#__PURE__*/_react["default"].createElement("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "16px",
    height: "16px",
    fill: iconColor || 'black'
  }, /*#__PURE__*/_react["default"].createElement("title", null, "Date"), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M464.3,103.08a64,64,0,0,0-59-39.08H362.67A21.34,21.34,0,0,0,320,64H192a21.34,21.34,0,0,0-42.67,0H106.67a63.94,63.94,0,0,0-64,64V405.33a63.94,63.94,0,0,0,64,64H405.33a63.94,63.94,0,0,0,64-64V128A63.7,63.7,0,0,0,464.3,103.08ZM426.67,405.33a21.36,21.36,0,0,1-21.34,21.34H106.67a21.36,21.36,0,0,1-21.34-21.34v-192H426.67Zm0-234.66H85.33V128a21.36,21.36,0,0,1,21.34-21.33h42.66a21.34,21.34,0,0,0,42.67,0H320a21.34,21.34,0,0,0,42.67,0h42.66A21.36,21.36,0,0,1,426.67,128Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M149.36,278.39l0,.52c0,.17,0,.35.05.52l.06.52c0,.17,0,.35.07.52s.05.35.08.52.07.34.1.51.07.34.11.51l.12.51c0,.17.09.34.14.5s.09.34.14.51.11.33.16.5.11.33.17.49l.18.49.2.48c.06.16.13.32.2.48l.22.48.23.47.24.46.25.46.26.45c.09.15.18.3.28.45l.28.44.29.43.31.42.32.42c.1.14.21.27.32.41s.23.27.34.4l.35.4.35.38.37.38c.13.12.25.25.38.36s.25.25.38.36l.4.35.4.34.41.32.42.32.42.31.43.29.44.28.45.28.45.26.46.25.46.24.47.23.48.22.48.2.48.2.49.18.49.17.5.16.5.14.51.14.51.12.51.11.51.1.52.08.52.07.52.06.52.05.52,0,.53,0h1.05l.53,0,.52,0,.52-.05.53-.06.51-.07.52-.08.52-.1.5-.11.51-.12.51-.14.5-.14.5-.16.49-.17.49-.18.49-.2.48-.2.47-.22.47-.23.46-.24.46-.25.45-.26.45-.28.44-.28.43-.29.43-.31.41-.32.41-.32.41-.34.39-.35c.13-.11.26-.24.38-.36s.26-.24.38-.36l.37-.38.36-.38.34-.4c.12-.13.23-.26.34-.4l.33-.41.31-.42.31-.42.29-.43.29-.44.27-.45c.09-.15.18-.3.26-.45s.17-.31.25-.46a5.06,5.06,0,0,0,.24-.46l.23-.47c.08-.16.15-.32.22-.48l.21-.48.19-.48.18-.49c.06-.16.12-.33.17-.49s.11-.34.16-.5l.15-.51c0-.16.09-.33.13-.5l.12-.51c0-.17.08-.34.11-.51s.07-.34.1-.51.06-.35.08-.52.05-.35.08-.52,0-.34,0-.52,0-.35.05-.52l0-.52c0-.18,0-.36,0-.53s0-.35,0-.53,0-.35,0-.52,0-.35,0-.53l0-.52c0-.18,0-.35-.05-.53s0-.34,0-.52-.05-.34-.08-.51,0-.35-.08-.52-.06-.34-.1-.52-.07-.34-.11-.51l-.12-.51c0-.16-.09-.33-.13-.5l-.15-.5c0-.17-.1-.33-.16-.5s-.11-.33-.17-.49l-.18-.49-.19-.49-.21-.48c-.07-.15-.14-.31-.22-.47s-.15-.32-.23-.47a4,4,0,0,0-.24-.46c-.08-.16-.16-.31-.25-.46s-.17-.31-.26-.45l-.27-.45c-.09-.15-.19-.29-.29-.44l-.29-.43c-.1-.14-.2-.29-.31-.43l-.31-.41-.33-.41-.34-.41-.34-.39-.36-.39-.37-.37c-.12-.13-.25-.25-.38-.37l-.38-.36-.39-.34-.41-.34-.41-.33-.41-.31-.43-.31-.43-.29-.44-.29-.45-.27-.45-.26-.46-.25-.46-.25-.47-.22-.47-.22-.48-.21-.49-.19-.49-.18-.49-.17-.5-.16-.5-.15-.51-.13-.51-.12-.5-.11-.52-.1-.52-.08-.51-.08-.53-.06-.52,0-.52,0-.53,0h-1.05l-.53,0-.52,0-.52,0-.52.06-.52.08-.52.08-.51.1-.51.11-.51.12-.51.13-.5.15-.5.16-.49.17-.49.18-.48.19-.48.21-.48.22-.47.22-.46.25-.46.25-.45.26-.45.27-.44.29-.43.29-.42.31-.42.31-.41.33-.4.34-.4.34-.38.36-.38.37-.37.37-.35.39-.35.39-.34.41c-.11.13-.22.27-.32.41s-.22.27-.32.41l-.31.43-.29.43-.28.44c-.1.15-.19.3-.28.45s-.17.3-.26.45-.17.3-.25.46l-.24.46c-.08.15-.16.31-.23.47s-.15.32-.22.47-.14.32-.2.48-.13.33-.2.49l-.18.49c-.06.16-.11.33-.17.49s-.11.33-.16.5-.1.33-.14.5-.1.34-.14.5l-.12.51c0,.17-.07.34-.11.51s-.07.35-.1.52-.05.34-.08.52,0,.34-.07.51l-.06.52c0,.18,0,.35-.05.53l0,.52c0,.18,0,.35,0,.53s0,.35,0,.52,0,.36,0,.53S149.35,278.21,149.36,278.39Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M234.69,278.39c0,.17,0,.34,0,.52s0,.35,0,.52l.06.52c0,.17,0,.35.07.52l.09.52.09.51c0,.17.08.34.11.51s.08.34.13.51.08.34.13.5l.15.51.15.5.18.49a4.84,4.84,0,0,0,.18.49c.06.16.12.32.19.48l.21.48.21.48c.08.15.15.31.23.47l.24.46.25.46c.09.15.18.3.26.45l.28.45.28.44.3.43.3.42.32.42.33.41.33.4.35.4.36.38.37.38c.12.12.24.25.37.36l.39.36.39.35.4.34.41.32.42.32.42.31.44.29c.14.1.29.19.44.28s.29.19.44.28l.45.26.46.25.47.24.47.23.47.22.48.2.48.2.49.18.5.17.49.16.51.14.5.14.51.12.51.11.52.1.51.08.52.07.52.06.52.05.53,0,.52,0h1.06l.52,0,.53,0,.52-.05.52-.06.52-.07.51-.08.52-.1.51-.11.51-.12.5-.14.5-.14.5-.16.49-.17.49-.18.49-.2.48-.2.47-.22.47-.23.47-.24.45-.25.46-.26c.15-.09.3-.18.44-.28s.3-.18.44-.28l.43-.29.43-.31.42-.32.41-.32.4-.34.39-.35.39-.36c.13-.11.25-.24.37-.36l.37-.38.36-.38.35-.4.33-.4.33-.41.32-.42.3-.42.3-.43.28-.44c.09-.15.19-.3.27-.45l.27-.45.25-.46.24-.46c.08-.16.15-.32.22-.47s.15-.32.22-.48l.21-.48c.07-.16.13-.32.19-.48a4.84,4.84,0,0,0,.18-.49l.18-.49.15-.5.15-.51c.05-.16.09-.33.13-.5s.09-.34.13-.51.07-.34.11-.51L277,281l.09-.52c0-.17,0-.35.07-.52l.06-.52c0-.17,0-.35,0-.52s0-.35,0-.52,0-.36,0-.53v-1.05c0-.18,0-.35,0-.53s0-.35,0-.52,0-.35,0-.53l-.06-.52c0-.17-.05-.34-.07-.51l-.09-.52-.09-.52c0-.17-.08-.34-.11-.51s-.08-.34-.13-.51-.08-.33-.13-.5l-.15-.5-.15-.5-.18-.49a4.09,4.09,0,0,0-.18-.49c-.06-.16-.12-.33-.19-.49l-.21-.48c-.07-.15-.14-.31-.22-.47s-.14-.32-.22-.47l-.24-.46c-.08-.16-.17-.31-.25-.46l-.27-.45c-.08-.15-.18-.3-.27-.45l-.28-.44-.3-.43-.3-.43c-.11-.14-.21-.28-.32-.41l-.33-.41-.33-.41-.35-.39-.36-.39-.37-.37-.37-.37-.39-.36-.39-.34-.4-.34-.41-.33-.42-.31-.43-.31c-.14-.1-.28-.2-.43-.29l-.44-.29L267,259c-.15-.09-.3-.18-.46-.26s-.3-.17-.45-.25l-.47-.25-.47-.22-.47-.22-.48-.21-.49-.19-.49-.18-.49-.17-.5-.16-.5-.15-.5-.13-.51-.12-.51-.11-.52-.1-.51-.08-.52-.08-.52-.06-.52,0-.53,0-.52,0h-1.06l-.52,0-.53,0-.52,0-.52.06-.52.08-.51.08-.52.1-.51.11-.51.12-.5.13-.51.15-.49.16-.5.17-.49.18-.48.19-.48.21-.47.22-.47.22-.47.25-.46.25L245,259l-.44.27-.44.29-.44.29-.42.31-.42.31-.41.33-.4.34-.39.34-.39.36-.37.37-.37.37-.36.39-.35.39-.33.41-.33.41c-.11.13-.21.27-.32.41l-.3.43-.3.43-.28.44-.28.45-.26.45c-.08.15-.17.3-.25.46l-.24.46c-.08.15-.15.31-.23.47l-.21.47-.21.48c-.07.16-.13.33-.19.49a4.09,4.09,0,0,0-.18.49l-.18.49-.15.5-.15.5c0,.17-.09.34-.13.5s-.09.34-.13.51-.07.34-.11.51l-.09.52-.09.52c0,.17-.05.34-.07.51l-.06.52c0,.18,0,.35,0,.53s0,.35,0,.52,0,.35,0,.53v1.05C234.68,278,234.68,278.21,234.69,278.39Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M320,278.39l0,.52c0,.17,0,.35,0,.52l.06.52c0,.17,0,.35.08.52s.05.35.08.52.06.34.1.51.07.34.11.51l.12.51c0,.17.09.34.13.5l.15.51c.05.16.1.33.16.5s.11.33.17.49l.18.49.19.48.21.48c.07.16.14.32.22.48s.15.31.22.47.16.31.25.46.16.31.25.46.17.3.26.45l.27.45.29.44.29.43.31.42.31.42.33.41c.11.14.22.27.34.4l.34.4.36.38.37.38c.12.12.25.25.38.36s.25.25.38.36l.39.35.41.34.41.32.41.32.43.31.43.29.44.28.45.28.45.26.46.25.46.24.47.23.47.22.48.2.49.2.49.18.49.17.5.16.5.14.51.14.5.12.51.11.52.1.52.08.51.07.53.06.52.05.52,0,.53,0h1.05l.53,0,.52,0,.52-.05.52-.06.52-.07.52-.08.51-.1.51-.11.51-.12.51-.14.5-.14.5-.16.49-.17.49-.18.48-.2.48-.2.48-.22.47-.23.46-.24.46-.25.45-.26.45-.28.44-.28.43-.29.42-.31.42-.32.41-.32.4-.34.4-.35.38-.36c.13-.11.25-.24.38-.36s.25-.25.36-.38l.36-.38.35-.4c.11-.13.23-.26.34-.4s.22-.27.32-.41l.32-.42.31-.42.29-.43.28-.44c.1-.15.19-.3.28-.45l.26-.45.25-.46.24-.46.23-.47.22-.48c.07-.16.14-.32.2-.48l.2-.48.18-.49c.06-.16.11-.33.17-.49s.11-.34.16-.5.1-.34.14-.51.1-.33.14-.5l.12-.51c0-.17.07-.34.11-.51s.07-.34.1-.51,0-.35.08-.52.05-.35.07-.52l.06-.52c0-.17,0-.35.05-.52l0-.52c0-.18,0-.36,0-.53s0-.35,0-.53,0-.35,0-.52,0-.35,0-.53l0-.52c0-.18,0-.35-.05-.53l-.06-.52c0-.17,0-.34-.07-.51s-.05-.35-.08-.52-.07-.34-.1-.52-.07-.34-.11-.51l-.12-.51c0-.16-.09-.33-.14-.5s-.09-.34-.14-.5-.11-.33-.16-.5-.11-.33-.17-.49l-.18-.49c-.07-.16-.13-.33-.2-.49s-.13-.32-.2-.48-.15-.31-.22-.47-.15-.32-.23-.47l-.24-.46c-.08-.16-.17-.31-.25-.46s-.17-.31-.26-.45-.18-.3-.28-.45l-.28-.44-.29-.43-.31-.43c-.1-.14-.21-.28-.32-.41s-.21-.28-.32-.41l-.34-.41-.35-.39c-.11-.13-.24-.26-.36-.39l-.36-.37-.38-.37-.38-.36-.4-.34-.4-.34-.41-.33-.42-.31-.42-.31-.43-.29-.44-.29-.45-.27-.45-.26-.46-.25-.46-.25-.47-.22-.48-.22-.48-.21-.48-.19-.49-.18-.49-.17-.5-.16-.5-.15-.51-.13-.51-.12-.51-.11-.51-.1-.52-.08-.52-.08-.52-.06-.52,0-.52,0-.53,0h-1.05l-.53,0-.52,0-.52,0-.53.06-.51.08-.52.08-.52.1-.51.11-.5.12-.51.13-.5.15-.5.16-.49.17-.49.18-.49.19-.48.21-.47.22-.47.22-.46.25-.46.25-.45.26-.45.27-.44.29-.43.29-.43.31-.41.31-.41.33-.41.34-.39.34-.38.36c-.13.12-.26.24-.38.37l-.37.37-.36.39-.34.39-.34.41-.33.41-.31.41c-.11.14-.21.29-.31.43l-.29.43c-.1.15-.2.29-.29.44l-.27.45c-.09.14-.18.3-.26.45s-.17.3-.25.46-.17.3-.25.46-.15.31-.22.47-.15.32-.22.47l-.21.48-.19.49-.18.49c-.06.16-.12.33-.17.49s-.11.33-.16.5l-.15.5c0,.17-.09.34-.13.5l-.12.51c0,.17-.08.34-.11.51s-.07.35-.1.52-.06.34-.08.52-.05.34-.08.51l-.06.52c0,.18,0,.35,0,.53l0,.52c0,.18,0,.35,0,.53s0,.35,0,.52,0,.36,0,.53S320,278.21,320,278.39Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M149.36,363.72l0,.52c0,.18,0,.35.05.52l.06.53c0,.17,0,.34.07.51s.05.35.08.52.07.34.1.52.07.34.11.51l.12.5c0,.17.09.34.14.51s.09.34.14.5.11.33.16.5.11.33.17.49l.18.49c.07.16.13.33.2.49s.13.32.2.48.15.31.22.47.15.32.23.47l.24.46c.08.16.17.31.25.46l.26.45.27.45.29.44.29.43.31.43c.1.14.21.28.32.41s.21.28.32.41l.34.41.35.39c.11.13.23.26.35.38l.37.38.38.37.38.36.4.34.4.34.41.33.42.31.42.31.43.29.44.29.45.27.45.26.46.25a5.06,5.06,0,0,0,.46.24l.47.23.48.22.48.21.48.19.49.18.49.17.5.16.5.15.51.13.51.12.51.11.51.1.52.08.52.08.52.06.52,0,.52,0,.53,0h1.05l.53,0,.52,0,.52,0,.53-.06.51-.08.52-.08.52-.1.51-.11.5-.12.51-.13.5-.15.5-.16.49-.17.49-.18.49-.19.48-.21.47-.22.47-.23a4,4,0,0,0,.46-.24l.46-.25.45-.26.45-.27.44-.29.43-.29.43-.31.41-.31.41-.33.41-.34.39-.34.38-.36c.13-.12.26-.24.38-.37s.25-.25.37-.38l.36-.38.34-.39.34-.41.33-.41.31-.41c.11-.14.21-.29.31-.43l.29-.43c.1-.15.2-.29.29-.44l.27-.45c.09-.15.18-.3.26-.45s.17-.3.25-.46.17-.3.25-.46.15-.31.22-.47.15-.32.22-.47l.21-.48.19-.49.18-.49c.06-.16.12-.33.17-.49s.11-.33.16-.5l.15-.5c0-.17.09-.34.13-.51l.12-.5c0-.17.08-.34.11-.51s.07-.35.1-.52.06-.34.08-.52.05-.34.08-.51l.06-.53c0-.17,0-.34,0-.52l0-.52c0-.18,0-.35,0-.53s0-.35,0-.52,0-.36,0-.53,0-.35,0-.53l0-.52c0-.17,0-.35,0-.52l-.06-.52c0-.18-.05-.35-.08-.52s0-.35-.08-.52-.06-.34-.1-.51-.07-.34-.11-.51l-.12-.51c0-.17-.09-.34-.13-.51l-.15-.5c0-.16-.1-.33-.16-.5s-.11-.33-.17-.49l-.18-.49-.19-.48-.21-.48c-.07-.16-.14-.32-.22-.48s-.15-.31-.22-.47-.16-.31-.25-.46-.16-.31-.25-.46-.17-.3-.26-.45l-.27-.45-.29-.44-.29-.43-.31-.42-.31-.42-.33-.41c-.11-.14-.22-.27-.34-.4l-.34-.4-.36-.38-.37-.38-.38-.37-.38-.35-.39-.35-.41-.34-.41-.32-.41-.32-.43-.31-.43-.29-.44-.29-.45-.27-.45-.26-.46-.25-.46-.24-.47-.23-.47-.22-.48-.2-.49-.2-.49-.18-.49-.17-.5-.16-.5-.14-.51-.14-.5-.12-.51-.11-.52-.1-.52-.08-.51-.07-.53-.06-.52-.05-.52,0-.53,0h-1.05l-.53,0-.52,0-.52.05-.52.06-.52.07-.52.08-.51.1-.51.11-.51.12-.51.14-.5.14-.5.16-.49.17-.49.18-.48.2-.48.2-.48.22-.47.23-.46.24-.46.25-.45.26-.45.27-.44.29-.43.29-.42.31-.42.32-.41.32-.4.34-.4.35-.38.35-.38.37-.37.38c-.12.13-.24.25-.35.38l-.35.4c-.11.13-.23.26-.34.4s-.22.27-.32.41l-.32.42-.31.42-.29.43c-.1.15-.19.3-.29.44l-.27.45-.26.45c-.08.15-.17.3-.25.46l-.24.46-.23.47-.22.48c-.07.15-.14.32-.2.48l-.2.48-.18.49c-.06.16-.11.33-.17.49s-.11.34-.16.5-.1.34-.14.5-.1.34-.14.51l-.12.51c0,.17-.07.34-.11.51s-.07.34-.1.51-.05.35-.08.52,0,.34-.07.52l-.06.52c0,.17,0,.35-.05.52l0,.52c0,.18,0,.36,0,.53s0,.35,0,.53,0,.35,0,.52S149.35,363.54,149.36,363.72Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M234.69,363.72c0,.17,0,.35,0,.52s0,.35,0,.52l.06.53c0,.17,0,.34.07.51l.09.52.09.52c0,.17.08.34.11.51s.08.34.13.5.08.34.13.51l.15.5.15.5.18.49a4.09,4.09,0,0,0,.18.49c.06.16.12.33.19.49l.21.48.21.47c.08.16.15.32.23.47l.24.46c.08.16.17.31.25.46s.18.3.26.45l.28.45.28.44.3.43.3.43c.11.14.21.28.32.41l.33.41.33.41.35.39.36.38c.12.13.24.26.37.38l.37.37.39.36.39.34.4.34.41.33.42.31.42.31.44.29.44.29.44.27.45.26.46.25a5.21,5.21,0,0,0,.47.24l.47.23.47.22.48.21.48.19.49.18.5.17.49.16.51.15.5.13.51.12.51.11.52.1.51.08.52.08.52.06.52,0,.53,0,.52,0h1.06l.52,0,.52,0,.53,0,.52-.06.52-.08.51-.08.52-.1.51-.11.51-.12.5-.13.5-.15.5-.16.49-.17.49-.18.49-.19.48-.21.47-.22.47-.23a5.21,5.21,0,0,0,.47-.24c.15-.08.31-.16.45-.25s.31-.17.46-.26l.44-.27.44-.29c.15-.09.29-.19.43-.29l.43-.31.42-.31.41-.33.4-.34.39-.34.39-.36.37-.37c.13-.12.25-.25.37-.38l.36-.38.35-.39.33-.41.33-.41c.11-.13.21-.27.32-.41l.3-.43.3-.43.28-.44c.09-.15.19-.3.27-.45l.27-.45c.08-.15.17-.3.25-.46l.24-.46c.08-.15.15-.31.22-.47s.15-.32.22-.47l.21-.48c.07-.16.13-.33.19-.49a4.09,4.09,0,0,0,.18-.49l.18-.49.15-.5.15-.5c.05-.17.09-.34.13-.51s.09-.33.13-.5.07-.34.11-.51l.09-.52.09-.52c0-.17,0-.34.07-.51l.06-.53c0-.17,0-.34,0-.52s0-.35,0-.52,0-.35,0-.53v-1.05c0-.17,0-.35,0-.53s0-.34,0-.52,0-.35,0-.52l-.06-.52c0-.18-.05-.35-.07-.52L277,359l-.09-.51c0-.17-.08-.34-.11-.51s-.08-.34-.13-.51-.08-.34-.13-.51l-.15-.5-.15-.5-.18-.49a4.84,4.84,0,0,0-.18-.49c-.06-.16-.12-.32-.19-.48l-.21-.48c-.07-.16-.14-.32-.22-.48s-.14-.31-.22-.47l-.24-.46c-.08-.16-.17-.31-.25-.46l-.27-.45c-.08-.15-.18-.3-.27-.45l-.28-.44-.3-.43-.3-.42-.32-.42-.33-.41-.33-.4-.35-.4-.36-.38-.37-.38-.37-.37-.39-.35-.39-.35-.4-.34-.41-.32-.42-.32-.43-.31-.43-.29-.44-.29-.44-.27c-.15-.09-.3-.18-.46-.26l-.45-.25-.47-.24-.47-.23-.47-.22-.48-.2-.49-.2-.49-.18-.49-.17-.5-.16-.5-.14-.5-.14-.51-.12-.51-.11-.52-.1-.51-.08-.52-.07-.52-.06-.53-.05-.52,0-.52,0h-1.06l-.52,0-.53,0-.52.05-.52.06-.52.07-.51.08-.52.1-.51.11-.51.12-.5.14-.51.14-.49.16-.5.17-.49.18-.48.2-.48.2-.47.22-.47.23-.47.24-.46.25-.45.26-.44.27-.44.29-.44.29-.42.31-.42.32-.41.32-.4.34-.39.35-.39.35-.37.37-.37.38-.36.38-.35.4-.33.4-.33.41-.32.42-.3.42-.3.43-.28.44-.28.45c-.08.15-.17.3-.26.45s-.17.3-.25.46l-.24.46c-.08.16-.15.32-.23.47l-.21.48-.21.48c-.07.16-.13.32-.19.48a4.84,4.84,0,0,0-.18.49l-.18.49-.15.5-.15.5c0,.17-.09.34-.13.51s-.09.34-.13.51-.07.34-.11.51L235,359l-.09.52c0,.17-.05.34-.07.52l-.06.52c0,.17,0,.35,0,.52s0,.35,0,.52,0,.36,0,.53v1.05C234.68,363.37,234.68,363.54,234.69,363.72Z"
  }))), dateDropdown && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'absolute',
      top: '3rem',
      left: '0',
      width: '18rem',
      backgroundColor: calendarBackgroundColor || 'white',
      borderRadius: '0.375rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.7rem',
      padding: '1rem',
      color: calendarTextColor || 'black',
      fontWeight: calendarFontWeight || '600'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return setView(view === 'year' ? 'day' : 'year');
    },
    style: {
      width: '6rem',
      height: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: yearBackgroundColor || '#f3f4f6',
      borderRadius: '0.25rem',
      fontSize: '0.75rem',
      cursor: 'pointer'
    }
  }, year), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return handleMonthChange(-1);
    },
    style: {
      width: '2rem',
      height: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '9999px',
      transition: '0.15s',
      backgroundColor: hoverArrow === 0 ? arrowHoverColor || '#e5e7eb' : 'inherit',
      cursor: 'pointer'
    },
    onMouseEnter: function onMouseEnter() {
      return setHoverArrow(0);
    },
    onMouseLeave: function onMouseLeave() {
      return setHoverArrow(null);
    }
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: arrowColor || 'black',
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: "16px",
    height: "16px"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 12H5"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 19l-7-7 7-7"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '7rem',
      textAlign: 'center',
      fontSize: '0.75rem'
    }
  }, monthNames[month]), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return handleMonthChange(1);
    },
    style: {
      width: '2rem',
      height: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '9999px',
      transition: '0.15s',
      backgroundColor: hoverArrow === 1 ? arrowHoverColor || '#e5e7eb' : 'inherit',
      cursor: 'pointer'
    },
    onMouseEnter: function onMouseEnter() {
      return setHoverArrow(1);
    },
    onMouseLeave: function onMouseLeave() {
      return setHoverArrow(null);
    }
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: arrowColor || 'black',
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: "16px",
    height: "16px"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 5l7 7-7 7"
  }))))), view === 'day' ? renderDays() : renderYears()));
};