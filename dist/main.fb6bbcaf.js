// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
var hamburgerBtn = document.querySelector('.hamburger-btn');
var navMenu = document.querySelector('.nav-menu');
var closeNavBtn = document.querySelector('.close-nav-menu');
hamburgerBtn.addEventListener('click', showNavMenu);
closeNavBtn.addEventListener('click', hideNavMenu);

function showNavMenu() {
  navMenu.classList.add('open');
}

function hideNavMenu() {
  navMenu.classList.remove('open');
}

var filterConteiner = document.querySelector('.portfolio-filter');
var portfolioItems = document.querySelectorAll('.portfolio-item');
filterConteiner.addEventListener('click', function (event) {
  if (event.target.classList.contains('filter-item') && !event.target.classList.contains('active')) {
    filterConteiner.querySelector('.active').classList.remove('outer-shadow', 'active');
    event.target.classList.add('outer-shadow', 'active');
    var target = event.target.getAttribute('data-target');
    portfolioItems.forEach(function (item) {
      if (target === item.getAttribute('data-category') || target === 'all') {
        item.classList.remove('hide');
        item.classList.add('show');
      } else {
        item.classList.remove('show');
        item.classList.add('hide');
      }
    });
  }
}); //-------

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('link-item')) {
    if (event.target.hash !== '') {
      event.preventDefault();
      var hash = event.target.hash;
      console.log(hash);
      navMenu.querySelector('.active').classList.add('outer-shadow', 'hover-in-shadow');
      navMenu.querySelector('.active').classList.remove('active', 'inner-shadow');

      if (navMenu.classList.contains('open')) {
        event.target.classList.add('active', 'inner-shadow');
        event.target.classList.remove('outer-shadow', 'hover-in-shadow');
        hideNavMenu();
      } else {
        var navItems = navMenu.querySelectorAll('.link-item');
        navItems.forEach(function (item) {
          if (hash === item.hash) {
            item.classList.add('active', 'inner-shadow');
            item.classList.remove('outer-shadow', 'hover-in-shadow');
          }
        });
      }

      window.location.hash = hash;
    }
  }
});
window.addEventListener('load', function () {
  document.querySelector('.preloader').classList.add('fade-out');
  setTimeout(function () {
    document.querySelector('.preloader').style.display = 'none';
  }, 600);
});
var arrowTop = document.querySelector('.arrowTop');

arrowTop.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; // window.scrollTo(pageXOffset, 0)
};

window.addEventListener('scroll', function () {
  // if (arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight)) {
  //     arrowTop.style.display = 'block'
  // }
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    arrowTop.style.display = 'block';
  } else {
    arrowTop.style.display = 'none';
  }
}); // const targets = document.querySelectorAll('.service-item')
// const options = {
//     root: 'null',
//     rootMargin: '0px',
//     threshold: 0.05
// }
// const loadImage = function (entries, observer) {
// }
// let observer = new IntersectionObserver(loadImage, options)
// window.onload = () => {
//     // устанавливаем настройки
//     const options = {
//         // родитель целевого элемента - область просмотра
//         root: null,
//         // без отступов
//         rootMargin: '0px',
//         // процент пересечения - половина изображения
//         threshold: 0.5
//     }
//     // создаем наблюдатель
//     const observer = new IntersectionObserver((entries, observer) => {
//         // для каждой записи-целевого элемента
//         entries.forEach(entry => {
//             // если элемент является наблюдаемым
//             if (entry.isIntersecting) {
//                 const lazyImg = entry.target
//                 // выводим информацию в консоль - проверка работоспособности наблюдателя
//                 console.log(lazyImg)
//                 // меняем фон контейнера
//                 lazyImg.style.background = 'deepskyblue'
//                 // прекращаем наблюдение
//                 observer.unobserve(lazyImg)
//             }
//         })
//     }, options)
//     // с помощью цикла следим за всеми img на странице
//     const arr = document.querySelectorAll('img')
//     arr.forEach(i => {
//         observer.observe(i)
//     })
// }
// window.addEventListener('load', event => {
//     let box = document.querySelector('main')
//     // ratio - процент видимости элемента
//     let prevRatio = 0.0
//     let observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             let curRatio = entry.intersectionRatio
//             // при прокрутке цвет меняется от светло-синего до светло-красного
//             // мы хотим наблюдать эффект при прокрутке страницы в обе стороны (вниз и вверх)
//            // поэтому наблюдение за элементом не прекращается
//             curRatio > prevRatio ? entry.target.style.background = `rgba(40,40,190,${curRatio})` : entry.target.style.background = `rgba(190,40,40,${curRatio})`
//             prevRatio = curRatio
//         })
//     }, {
//         threshold: buildThresholdList()
//     })
//     observer.observe(box)
//     // функция построения шкалы пересечения
//     // шкала представляет собой массив из 20 элементов, определяющих цвет контейнера
//     function buildThresholdList() {
//         let thresholds = []
//         let steps = 20
//         for (let i = 1.0; i <= steps; i++) {
//             let ratio = i / steps
//             thresholds.push(ratio)
//         }
//         return thresholds
//     }
// })

var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    entry.isIntersecting ? entry.target.classList.replace('to-left', 'to-right') : entry.target.classList.replace('to-right', 'to-left');
  });
}, {
  threshold: .5
});
observer.observe(document.querySelector('img'));
},{}],"C:/Users/Xiaomi/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57979" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Xiaomi/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map