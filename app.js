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
    var ArticleComponent, reddit;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ArticleComponent = (function () {
                function ArticleComponent() {
                    this.title = 'Angular 2';
                    this.link = 'http://angular.io';
                    this.votes = 10;
                }
                ArticleComponent.prototype.voteUp = function () {
                    this.votes += 1;
                };
                ArticleComponent.prototype.voteDown = function () {
                    this.votes -= 1;
                };
                ArticleComponent = __decorate([
                    core_1.Component({
                        selector: 'reddit-article',
                        host: {
                            class: 'row'
                        },
                        template: "\n    <div class=\"four wide column center aligned votes\">\n      <div class=\"ui statistic\">\n        <div class=\"value\">\n          {{ votes }}\n        </div>\n        <div class=\"label\">\n          Points\n        </div>\n      </div>\n    </div>\n    <div class=\"twelve wide column\">\n      <a class=\"ui large header\" href=\"{{ link }}\"\n      {{ title }}\n      </a>\n      <ul class=\"ui big horizontal list voters\">\n        <li class=\"item\"\n          <a href (click)=\"voteUp()\">\n            <i class=\"arrow up icon\"></i>\n            upvote\n          </a>\n        </li>\n        <li class=\"item\"\n          <a href (click)=\"voteDown()\">\n            <i class=\"arrow down icon\"></i>\n            downvote\n          </a>\n        </li>\n      </ul>\n    </div>\n  "
                    }),
                    core_1.Component({
                        selector: 'reddit',
                        directives: [ArticleComponent],
                        template: "\n  <form class=\"ul large form segment\">\n    <h3 class=\"ui header\">Add a Link</h3>\n    <div class=\"field\">\n      <label for=\"title\">Title:</label>\n      <input name=\"title\" #newtitle>\n    </div>\n    <div class=\"field\">\n      <label for=\"link\">Link:</label>\n      <input name=\"link\" #newlink>\n    </div>\n\n\n  <button (click)=\"addArticle(newtitle, newlink)\" class=\"ui positive right floated button\">\n    Submit link\n  </button>\n  </form>\n\n  <div class=\"ui grid posts\">\n    <reddit-article>\n    </reddit-article>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticleComponent);
                return ArticleComponent;
            }());
            reddit = (function () {
                function reddit() {
                }
                reddit.prototype.addArticle = function (title, link) {
                    console.log("Adding article title: " + title.value + " and link: " + link.value);
                };
                return reddit;
            }());
            browser_1.bootstrap(reddit);
        }
    }
});
//# sourceMappingURL=app.js.map