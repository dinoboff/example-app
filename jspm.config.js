SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "example-app/": "src/"
  },
  browserConfig: {
    "baseURL": "/",
    "depCache": {
      "example-app/components/example-app/example-app.js": [
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/classCallCheck.js",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/createClass.js",
        "./example-app.html!text",
        "./example-app.css!"
      ],
      "example-app/components/shopping-lists/shopping-lists.js": [
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/classCallCheck.js",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/createClass.js",
        "./shopping-lists.html!text"
      ],
      "example-app/components/shopping/shopping.js": [
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/classCallCheck.js",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/createClass.js",
        "./shopping.html!text"
      ],
      "example-app/example-app.js": [
        "angular",
        "firebase",
        "example-app/tools/rx.js",
        "angular-rx-subscribe",
        "rx-firebase",
        "angular-route",
        "example-app/services.js",
        "example-app/components/example-app/example-app.js",
        "example-app/components/shopping/shopping.js",
        "example-app/components/shopping-lists/shopping-lists.js"
      ],
      "example-app/services.js": [
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/defineProperty.js",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/classCallCheck.js",
        "npm:systemjs-plugin-babel@0.0.12/babel-helpers/createClass.js",
        "example-app/tools/rx.js"
      ],
      "example-app/tools/rx.js": [
        "rxjs/bundles/Rx.umd.js"
      ],
      "github:angular/bower-angular-route@1.5.6/angular-route.js": [
        "angular"
      ],
      "index.js": [
        "angular",
        "example-app"
      ],
      "npm:angular-rx-subscribe@0.2.5/angular-rx-subscribe.js": [
        "angular"
      ]
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "example-app": {
      "main": "example-app.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "angular": "github:angular/bower-angular@1.5.6",
    "angular-route": "github:angular/bower-angular-route@1.5.6",
    "angular-rx-subscribe": "npm:angular-rx-subscribe@0.2.5",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "chai": "npm:chai@3.5.0",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "css": "github:systemjs/plugin-css@0.1.22",
    "dirty-chai": "npm:dirty-chai@1.2.2",
    "firebase": "github:firebase/firebase-bower@3.0.5",
    "get-parameter-names": "npm:get-parameter-names@0.3.0",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "rx-firebase": "npm:rx-firebase@0.4.0",
    "rxjs": "npm:rxjs@5.0.0-beta.8",
    "sinon": "npm:sinon@1.17.4",
    "sinon-chai": "npm:sinon-chai@2.8.0",
    "text": "github:systemjs/plugin-text@0.0.8",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha"
  },
  packages: {
    "npm:sinon@1.17.4": {
      "map": {
        "util": "npm:util@0.10.3",
        "samsam": "npm:samsam@1.1.2",
        "formatio": "npm:formatio@1.1.1",
        "lolex": "npm:lolex@1.3.2"
      }
    },
    "npm:util@0.10.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:formatio@1.1.1": {
      "map": {
        "samsam": "npm:samsam@1.1.3"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "npm:buffer@4.6.0": {
      "map": {
        "ieee754": "npm:ieee754@1.1.6",
        "base64-js": "npm:base64-js@1.1.2",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "github:angular/bower-angular-route@1.5.6": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.6"
      }
    },
    "npm:chai@3.5.0": {
      "map": {
        "assertion-error": "npm:assertion-error@1.0.2",
        "type-detect": "npm:type-detect@1.0.0",
        "deep-eql": "npm:deep-eql@0.1.3"
      }
    },
    "npm:deep-eql@0.1.3": {
      "map": {
        "type-detect": "npm:type-detect@0.1.1"
      }
    },
    "npm:rxjs@5.0.0-beta.8": {
      "map": {
        "symbol-observable": "npm:symbol-observable@0.2.4"
      }
    }
  }
});
