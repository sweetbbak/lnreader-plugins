var t=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(i,o){function s(t){try{u(n.next(t))}catch(t){o(t)}}function a(t){try{u(n.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(s,a)}u((n=n.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("cheerio"),n=require("@libs/fetch"),i=require("@libs/novelStatus"),o=new(function(){function o(t){var e;this.id=t.id,this.name=t.sourceName,this.icon="multisrc/readnovelfull/".concat(t.id.toLowerCase(),"/icon.png"),this.site=t.sourceSite;var r=(null===(e=t.options)||void 0===e?void 0:e.versionIncrements)||0;this.version="1.0.".concat(0+r),this.options=t.options}return o.prototype.getCheerio=function(i,o){return t(this,void 0,void 0,(function(){var t,s;return e(this,(function(e){switch(e.label){case 0:return[4,(0,n.fetchApi)(i)];case 1:if(!(t=e.sent()).ok&&1!=o)throw new Error("Could not reach site ("+t.status+") try to open in webview.");return s=r.load,[4,t.text()];case 2:return[2,s.apply(void 0,[e.sent()])]}}))}))},o.prototype.parseNovels=function(t){var e=this,r=[];return t(".list-novel > .row").each((function(n,i){var o=t(i).find("h3").text(),s=t(i).find("img").attr("src"),a=e.site+t(i).find("a").attr("href");a&&r.push({name:o,cover:s,path:a.replace(e.site,"")})})),r},o.prototype.popularNovels=function(r,n){return t(this,arguments,void 0,(function(t,r){var n,i,o=r.filters,s=r.showLatestNovels;return e(this,(function(e){switch(e.label){case 0:return n=this.site+"/novel-list/most-popular-novel?page="+t,o||(o={}),s&&(n+=this.site+"/novel-list/latest-release-novel?page="+t),[4,this.getCheerio(n,!1)];case 1:return i=e.sent(),[2,this.parseNovels(i)]}}))}))},o.prototype.parseNovel=function(r){return t(this,void 0,void 0,(function(){var t,n,o,s,a;return e(this,(function(e){switch(e.label){case 0:return[4,this.getCheerio(this.site+r,!1)];case 1:return t=e.sent(),(n={path:r.replace(this.site,""),name:"Untitled"}).name=t("h3").text().trim(),n.cover=t(".book > img").attr("src"),t("ul.info.info-meta > li").each((function(){var e=t(this).find("h3").text().toLowerCase().replace(":",""),r=t(this).text().split(":")[1].trim();switch(e){case"author":n.author=r;break;case"genre":n.genres=r;break;case"status":switch(r){case"completed":n.status=i.NovelStatus.Completed;break;case"ongoing":n.status=i.NovelStatus.Ongoing;break;case"hiatus":n.status=i.NovelStatus.OnHiatus;break;default:n.status=i.NovelStatus.Unknown}}})),n.summary=t(".desc-text").text(),o=t("#rating").attr("data-novel-id"),s=this.site+"/ajax/chapter-archive?novelId="+o,[4,this.getCheerio(s,!1)];case 2:return t=e.sent(),a=[],t(".panel-body").find("li").each((function(){var e,r=t(this).find("a").attr("title")||"",n=t(this).find("a").attr("href")||"",i=Number(null===(e=r.match(/Chapter (\d*)/g))||void 0===e?void 0:e[1]);a.push({name:r,path:n,chapterNumber:i})})),n.chapters=a,[2,n]}}))}))},o.prototype.parseChapter=function(r){return t(this,void 0,void 0,(function(){return e(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+r,!1)];case 1:return[2,t.sent()("#chr-content").html()]}}))}))},o.prototype.searchNovels=function(r,n){return t(this,void 0,void 0,(function(){var t,i;return e(this,(function(e){switch(e.label){case 0:return t=this.site+"/novel-list/search?keyword="+r+"&page="+n,[4,this.getCheerio(t,!0)];case 1:return i=e.sent(),[2,this.parseNovels(i)]}}))}))},o}())({id:"readnovelfull",sourceSite:"https://readnovelfull.com",sourceName:"ReadNovelFull",options:{versionIncrements:1}});exports.default=o;