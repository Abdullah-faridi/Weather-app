/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("{\n\nconst apiKey = \"9684a6d8834c6f067df1da442108e8f9\";\n\nconst weatherBtn = document.getElementById(\"btnSearch\");\n\nasync function getWeather() {\n  const city = document.getElementById(\"search\").value.trim();\n  const weather = document.querySelector(\"#container\");\n\n  if (!city) {\n    alert(\"Please enter a city name\");\n    return;\n  }\n\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;\n\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n\n    \n    if (data.cod === 200) {\n      \n      weather.className = \"weather-details\";\n      weather.style.display = \"flex\"; \n\n      const temp = data.main.temp;\n      const feelsLike = data.main.feels_like;\n      const pressure = data.main.pressure;\n      const humidity = data.main.humidity;\n      const description = data.weather[0].description;\n      const icon = data.weather[0].icon;\n      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;\n\n      weather.innerHTML = `\n      \n        <h2>${city}</h2>\n        <img src=\"${iconUrl}\" alt=\"weather icon\" />\n        <h3>${description}</h3>\n        <p>Temperature: ${temp}°C</p>\n        <p>Feels Like: ${feelsLike}°C</p>\n        <p>Pressure: ${pressure} hPa</p>\n        <p>Humidity: ${humidity}%</p>\n      `;\n    } else {\n      alert(\"City not found\");\n      weather.innerHTML = \"\";\n    }\n  } catch (error) {\n    weather.innerText = \"⚠️ Failed to fetch weather data.\";\n    console.error(error);\n  }\n}\n\nweatherBtn.addEventListener(\"click\", getWeather);\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtRUFBbUUsS0FBSyxzQkFBc0IsT0FBTzs7QUFFckc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELEtBQUs7O0FBRWhFO0FBQ0E7QUFDQSxjQUFjLEtBQUs7QUFDbkIsb0JBQW9CLFFBQVE7QUFDNUIsY0FBYyxZQUFZO0FBQzFCLDBCQUEwQixLQUFLO0FBQy9CLHlCQUF5QixVQUFVO0FBQ25DLHVCQUF1QixVQUFVO0FBQ2pDLHVCQUF1QixTQUFTO0FBQ2hDO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9pbmRleC5qcz80MWY1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBhcGlLZXkgPSBcIjk2ODRhNmQ4ODM0YzZmMDY3ZGYxZGE0NDIxMDhlOGY5XCI7XG5cbmNvbnN0IHdlYXRoZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0blNlYXJjaFwiKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoXCIpLnZhbHVlLnRyaW0oKTtcbiAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpO1xuXG4gIGlmICghY2l0eSkge1xuICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIGEgY2l0eSBuYW1lXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPSR7YXBpS2V5fWA7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIFxuICAgIGlmIChkYXRhLmNvZCA9PT0gMjAwKSB7XG4gICAgICBcbiAgICAgIHdlYXRoZXIuY2xhc3NOYW1lID0gXCJ3ZWF0aGVyLWRldGFpbHNcIjtcbiAgICAgIHdlYXRoZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyBcblxuICAgICAgY29uc3QgdGVtcCA9IGRhdGEubWFpbi50ZW1wO1xuICAgICAgY29uc3QgZmVlbHNMaWtlID0gZGF0YS5tYWluLmZlZWxzX2xpa2U7XG4gICAgICBjb25zdCBwcmVzc3VyZSA9IGRhdGEubWFpbi5wcmVzc3VyZTtcbiAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZGF0YS5tYWluLmh1bWlkaXR5O1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgICBjb25zdCBpY29uID0gZGF0YS53ZWF0aGVyWzBdLmljb247XG4gICAgICBjb25zdCBpY29uVXJsID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb259QDJ4LnBuZ2A7XG5cbiAgICAgIHdlYXRoZXIuaW5uZXJIVE1MID0gYFxuICAgICAgXG4gICAgICAgIDxoMj4ke2NpdHl9PC9oMj5cbiAgICAgICAgPGltZyBzcmM9XCIke2ljb25Vcmx9XCIgYWx0PVwid2VhdGhlciBpY29uXCIgLz5cbiAgICAgICAgPGgzPiR7ZGVzY3JpcHRpb259PC9oMz5cbiAgICAgICAgPHA+VGVtcGVyYXR1cmU6ICR7dGVtcH3CsEM8L3A+XG4gICAgICAgIDxwPkZlZWxzIExpa2U6ICR7ZmVlbHNMaWtlfcKwQzwvcD5cbiAgICAgICAgPHA+UHJlc3N1cmU6ICR7cHJlc3N1cmV9IGhQYTwvcD5cbiAgICAgICAgPHA+SHVtaWRpdHk6ICR7aHVtaWRpdHl9JTwvcD5cbiAgICAgIGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwiQ2l0eSBub3QgZm91bmRcIik7XG4gICAgICB3ZWF0aGVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHdlYXRoZXIuaW5uZXJUZXh0ID0gXCLimqDvuI8gRmFpbGVkIHRvIGZldGNoIHdlYXRoZXIgZGF0YS5cIjtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgfVxufVxuXG53ZWF0aGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXRXZWF0aGVyKTtcblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./index.js\n\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;