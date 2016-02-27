System.register(['angular2/platform/browser', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var reddit;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            reddit = (function () {
                function reddit() {
                    addArticle(title, string, link, string);
                    {
                        console.log("Adding article title: " + title.value + " and link: " + link.value);
                    }
                }
                reddit = __decorate([
                    core_1.Component({
                        selector: 'reddit',
                        template: "\n  <form class=\"ul large form segment\">\n    <h3 class=\"ui header\">Add a Link</h3>\n    <div class=\"field\">\n      <label for=\"title\">Title:</label>\n      <input name=\"title\">\n    </div>\n    <div class=\"field\">\n      <label for=\"link\">Link:</label>\n      <input name=\"link\">\n    </div>\n\n\n  <button (click)=\"addArticle(newTitle, newlink)\" class=\"ui positive right floated button\">\n    Submit link\n  </button>\n  </form>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], reddit);
                return reddit;
            }());
            browser_1.bootstrap(reddit);
        }
    }
});
//# sourceMappingURL=app.js.map