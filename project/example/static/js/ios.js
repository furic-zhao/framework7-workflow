!function e(n,t,o){function a(r,s){if(!t[r]){if(!n[r]){var l="function"==typeof require&&require;if(!s&&l)return l(r,!0);if(i)return i(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var d=t[r]={exports:{}};n[r][0].call(d.exports,function(e){var t=n[r][1][e];return a(t?t:e)},d,d.exports,e,n,t,o)}return t[r].exports}for(var i="function"==typeof require&&require,r=0;r<o.length;r++)a(o[r]);return a}({1:[function(e,n,t){n.exports=function(e,n){var t=n||document;if(t.createStyleSheet){var o=t.createStyleSheet();return o.cssText=e,o.ownerNode}var a=t.getElementsByTagName("head")[0],i=t.createElement("style");return i.type="text/css",i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),a.appendChild(i),i},n.exports.byUrl=function(e){if(document.createStyleSheet)return document.createStyleSheet(e).ownerNode;var n=document.getElementsByTagName("head")[0],t=document.createElement("link");return t.rel="stylesheet",t.href=e,n.appendChild(t),t}},{}],2:[function(e,n,t){n.exports=e("cssify")},{cssify:1}],3:[function(e,n,t){e("./js/kitchen-sink"),e("./less/kitchen-sink.less")},{"./js/kitchen-sink":4,"./less/kitchen-sink.less":5}],4:[function(e,n,t){function o(){r.router.loadContent('<!-- Top Navbar--><div class="navbar">  <div class="navbar-inner">    <div class="left sliding"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>    <div class="center sliding">Dynamic Page '+ ++g+'</div>  </div></div><div class="pages">  <!-- Page, data-page contains page name-->  <div data-page="dynamic-content" class="page">    <!-- Scrollable page content-->    <div class="page-content">      <div class="content-block">        <div class="content-block-inner">          <p>Here is a dynamic page created on '+new Date+' !</p>          <p>Go <a href="#" class="back">back</a> or generate <a href="#" class="ks-generate-page">one more page</a>.</p>        </div>      </div>    </div>  </div></div>')}var a=new Framework7({modalTitle:"Framework7",animateNavBackIcon:!0}),i=Dom7,r=a.addView(".view-main",{dynamicNavbar:!0});a.addView(".view-right",{dynamicNavbar:!0});i(document).on("ajaxStart",function(e){e.detail.xhr.requestUrl.indexOf("autocomplete-languages.json")>=0||a.showIndicator()}),i(document).on("ajaxComplete",function(e){e.detail.xhr.requestUrl.indexOf("autocomplete-languages.json")>=0||a.hideIndicator()}),a.onPageInit("modals",function(e){i(".demo-alert").on("click",function(){a.alert("Hello!")}),i(".demo-confirm").on("click",function(){a.confirm("Are you feel good today?",function(){a.alert("Great!")})}),i(".demo-prompt").on("click",function(){a.prompt("What is your name?",function(e){a.confirm("Are you sure that your name is "+e+"?",function(){a.alert("Ok, your name is "+e+" ;)")})})}),i(".demo-login").on("click",function(){a.modalLogin("Enter your username and password",function(e,n){a.alert("Thank you! Username: "+e+", password: "+n)})}),i(".demo-password").on("click",function(){a.modalPassword("Enter your password",function(e){a.alert("Thank you! Password: "+e)})}),i(".demo-modals-stack").on("click",function(){a.alert("Alert 1"),a.alert("Alert 2"),a.alert("Alert 3"),a.alert("Alert 4"),a.alert("Alert 5")}),i(".demo-picker-modal").on("click",function(){a.pickerModal(".picker-modal-demo")})}),a.onPageInit("preloader",function(e){i(".demo-indicator").on("click",function(){a.showIndicator(),setTimeout(function(){a.hideIndicator()},2e3)}),i(".demo-preloader").on("click",function(){a.showPreloader(),setTimeout(function(){a.hidePreloader()},2e3)}),i(".demo-preloader-custom").on("click",function(){a.showPreloader("My text..."),setTimeout(function(){a.hidePreloader()},2e3)})}),a.onPageInit("swipe-delete",function(e){i(".demo-remove-callback").on("deleted",function(){a.alert("Thanks, item removed!")})}),a.onPageInit("swipe-delete media-lists",function(e){i(".demo-reply").on("click",function(){a.alert("Reply")}),i(".demo-mark").on("click",function(){a.alert("Mark")}),i(".demo-forward").on("click",function(){a.alert("Forward")})}),a.onPageInit("swipe-delete modals media-lists",function(e){var n=[[{text:"Here comes some optional description or warning for actions below",label:!0},{text:"Alert",onClick:function(){a.alert("He Hoou!")}},{text:"Nice Red Button ",color:"red",onClick:function(){a.alert("You have clicked red button!")}}],[{text:"Cancel",bold:!0}]];i(".demo-actions").on("click",function(e){a.actions(n)}),i(".demo-actions-popover").on("click",function(e){a.actions(this,n)})}),a.onPageInit("messages",function(e){var n,t,o=!1,r=["Yes!","No","Hm...","I am not sure","And what about you?","May be ;)","Lorem ipsum dolor sit amet, consectetur","What?","Are you sure?","Of course","Need to think about it","Amazing!!!"],s=[{name:"Kate Johnson",avatar:"http://lorempixel.com/output/people-q-c-100-100-9.jpg"},{name:"Blue Ninja",avatar:"http://lorempixel.com/output/people-q-c-100-100-7.jpg"}],l=a.messages(".messages"),c=a.messagebar(".messagebar");i(".messagebar a.send-message").on("touchstart mousedown",function(){t=document.activeElement&&document.activeElement===c.textarea[0]}),i(".messagebar a.send-message").on("click",function(e){t&&(e.preventDefault(),c.textarea[0].focus());var a=c.value();0!==a.length&&(c.clear(),l.addMessage({text:a,type:"sent",day:o?!1:"Today",time:o?!1:(new Date).getHours()+":"+(new Date).getMinutes()}),o=!0,n&&clearTimeout(n),n=setTimeout(function(){var e=(r[Math.floor(Math.random()*r.length)],s[Math.floor(Math.random()*s.length)]);l.addMessage({text:r[Math.floor(Math.random()*r.length)],type:"received",name:e.name,avatar:e.avatar})},2e3))})}),a.onPageInit("pull-to-refresh",function(e){var n=["Yellow Submarine","Don't Stop Me Now","Billie Jean","Californication"],t=["Beatles","Queen","Michael Jackson","Red Hot Chili Peppers"],o=i(e.container).find(".pull-to-refresh-content");o.on("refresh",function(e){setTimeout(function(){var e="http://lorempixel.com/88/88/abstract/"+Math.round(10*Math.random()),i=n[Math.floor(Math.random()*n.length)],r=t[Math.floor(Math.random()*t.length)],s='<li class="item-content"><div class="item-media"><img src="'+e+'" width="44"/></div><div class="item-inner"><div class="item-title-row"><div class="item-title">'+i+'</div></div><div class="item-subtitle">'+r+"</div></div></li>";o.find("ul").prepend(s),a.pullToRefreshDone()},2e3)})}),a.onPageInit("sortable-list",function(e){i(".list-block.sortable").on("open",function(){i(".toggle-sortable").text("Done")}),i(".list-block.sortable").on("close",function(){i(".toggle-sortable").text("Edit")})});var s=[{url:"img/beach.jpg",caption:"Amazing beach in Goa, India"},"http://placekitten.com/1024/1024","img/lock.jpg",{url:"img/monkey.jpg",caption:"I met this monkey in Chinese mountains"},{url:"img/mountains.jpg",caption:"Beautiful mountains in Zhangjiajie, China"}],l=a.photoBrowser({photos:s}),c=a.photoBrowser({photos:s,type:"popup"}),d=a.photoBrowser({photos:s,type:"page",backLinkText:"Back"}),p=a.photoBrowser({photos:s,theme:"dark"}),u=a.photoBrowser({photos:s,theme:"dark",type:"popup"}),m=a.photoBrowser({photos:s,lazyLoading:!0,theme:"dark"});a.onPageInit("photo-browser",function(e){i(".ks-pb-standalone").on("click",function(){l.open()}),i(".ks-pb-popup").on("click",function(){c.open()}),i(".ks-pb-page").on("click",function(){d.open()}),i(".ks-pb-popup-dark").on("click",function(){u.open()}),i(".ks-pb-standalone-dark").on("click",function(){p.open()}),i(".ks-pb-lazy").on("click",function(){m.open()})}),a.onPageInit("infinite-scroll",function(e){var n=!1,t=i(".infinite-scroll .list-block li").length;i(".infinite-scroll").on("infinite",function(){n||(n=!0,i.get("infinite-scroll-load.php",{leftIndex:t+1},function(e){n=!1,""===e?a.detachInfiniteScroll(i(".infinite-scroll")):(i(".infinite-scroll .list-block ul").append(e),t=i(".infinite-scroll .list-block li").length)}))})}),a.onPageInit("notifications",function(e){i(".ks-notification-simple").on("click",function(){a.addNotification({title:"Framework7",message:"This is a simple notification message with title and message"})}),i(".ks-notification-full").on("click",function(){a.addNotification({title:"Framework7",subtitle:"Notification subtitle",message:"This is a simple notification message with custom icon and subtitle",media:'<i class="icon icon-f7"></i>'})}),i(".ks-notification-custom").on("click",function(){a.addNotification({title:"My Awesome App",subtitle:"New message from John Doe",message:"Hello, how are you? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut posuere erat. Pellentesque id elementum urna, a aliquam ante. Donec vitae volutpat orci. Aliquam sed molestie risus, quis tincidunt dui.",media:'<img width="44" height="44" style="border-radius:100%" src="http://lorempixel.com/output/people-q-c-100-100-9.jpg">'})}),i(".ks-notification-callback").on("click",function(){a.addNotification({title:"My Awesome App",subtitle:"New message from John Doe",message:"Hello, how are you? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut posuere erat. Pellentesque id elementum urna, a aliquam ante. Donec vitae volutpat orci. Aliquam sed molestie risus, quis tincidunt dui.",media:'<img width="44" height="44" style="border-radius:100%" src="http://lorempixel.com/output/people-q-c-100-100-9.jpg">',onClose:function(){a.alert("Notification closed")}})})}),a.onPageInit("login-screen-embedded",function(e){i(e.container).find(".list-button").on("click",function(){var n=i(e.container).find('input[name="username"]').val(),t=i(e.container).find('input[name="password"]').val();a.alert("Username: "+n+", password: "+t,function(){r.router.back()})})}),i(".login-screen").find(".list-button").on("click",function(){var e=i(".login-screen").find('input[name="username"]').val(),n=i(".login-screen").find('input[name="password"]').val();a.alert("Username: "+e+", password: "+n,function(){a.closeModal(".login-screen")})}),i(".popover a").on("click",function(){a.closeModal(".popover")}),a.onPageInit("color-themes",function(e){var n="theme-white theme-black theme-yellow theme-red theme-blue theme-green theme-pink theme-lightblue theme-orange theme-gray",t="layout-dark layout-white";i(e.container).find(".ks-color-theme").click(function(){i("body").removeClass(n).addClass("theme-"+i(this).attr("data-theme"))}),i(e.container).find(".ks-layout-theme").click(function(){i("body").removeClass(t).addClass("layout-"+i(this).attr("data-theme"))})}),a.onPageInit("virtual-list",function(e){for(var n=[],t=0;1e4>t;t++)n.push({title:"Item "+t,subtitle:"Subtitle "+t});a.virtualList(i(e.container).find(".virtual-list"),{items:n,searchAll:function(e,n){for(var t=[],o=0;o<n.length;o++)(n[o].title.indexOf(e)>=0||""===e.trim())&&t.push(o);return t},template:'<li><a href="#" class="item-link item-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">{{title}}</div></div><div class="item-subtitle">{{subtitle}}</div></div></a></li>',height:63})}),a.onPageInit("swiper-gallery",function(e){var n=a.swiper(".ks-swiper-gallery-top",{nextButton:".swiper-button-next",prevButton:".swiper-button-prev",spaceBetween:10}),t=a.swiper(".ks-swiper-gallery-thumbs",{slidesPerView:"auto",spaceBetween:10,centeredSlides:!0,touchRatio:.2,slideToClickedSlide:!0});n.params.control=t,t.params.control=n}),a.onPageInit("calendar",function(e){var n=(a.calendar({input:"#ks-calendar-default"}),a.calendar({input:"#ks-calendar-date-format",dateFormat:"DD, MM dd, yyyy"}),a.calendar({input:"#ks-calendar-multiple",dateFormat:"M dd yyyy",multiple:!0}),a.calendar({input:"#ks-calendar-range",dateFormat:"M dd yyyy",rangePicker:!0}),["January","February","March","April","May","June","July","August","September","October","November","December"]),t=a.calendar({container:"#ks-calendar-inline-container",value:[new Date],weekHeader:!1,toolbarTemplate:'<div class="toolbar calendar-custom-toolbar"><div class="toolbar-inner"><div class="left"><a href="#" class="link icon-only"><i class="icon icon-back"></i></a></div><div class="center"></div><div class="right"><a href="#" class="link icon-only"><i class="icon icon-forward"></i></a></div></div></div>',onOpen:function(e){i(".calendar-custom-toolbar .center").text(n[e.currentMonth]+", "+e.currentYear),i(".calendar-custom-toolbar .left .link").on("click",function(){t.prevMonth()}),i(".calendar-custom-toolbar .right .link").on("click",function(){t.nextMonth()})},onMonthYearChangeStart:function(e){i(".calendar-custom-toolbar .center").text(n[e.currentMonth]+", "+e.currentYear)}})}),a.onPageInit("pickers",function(e){var n=new Date,t=(a.picker({input:"#ks-picker-device",cols:[{textAlign:"center",values:["iPhone 4","iPhone 4S","iPhone 5","iPhone 5S","iPhone 6","iPhone 6 Plus","iPad 2","iPad Retina","iPad Air","iPad mini","iPad mini 2","iPad mini 3"]}]}),a.picker({input:"#ks-picker-describe",rotateEffect:!0,cols:[{textAlign:"left",values:"Super Lex Amazing Bat Iron Rocket Lex Cool Beautiful Wonderful Raining Happy Amazing Funny Cool Hot".split(" ")},{values:"Man Luthor Woman Boy Girl Person Cutie Babe Raccoon".split(" ")}]}),{Japanese:["Honda","Lexus","Mazda","Nissan","Toyota"],German:["Audi","BMW","Mercedes","Volkswagen","Volvo"],American:["Cadillac","Chrysler","Dodge","Ford"]});a.picker({input:"#ks-picker-dependent",rotateEffect:!0,formatValue:function(e,n){return n[1]},cols:[{textAlign:"left",values:["Japanese","German","American"],onChange:function(e,n){e.cols[1].replaceValues&&e.cols[1].replaceValues(t[n])}},{values:t.Japanese,width:160}]}),a.picker({input:"#ks-picker-custom-toolbar",rotateEffect:!0,toolbarTemplate:'<div class="toolbar"><div class="toolbar-inner"><div class="left"><a href="#" class="link toolbar-randomize-link">Randomize</a></div><div class="right"><a href="#" class="link close-picker">That\'s me</a></div></div></div>',cols:[{values:["Mr","Ms"]},{textAlign:"left",values:"Super Lex Amazing Bat Iron Rocket Lex Cool Beautiful Wonderful Raining Happy Amazing Funny Cool Hot".split(" ")},{values:"Man Luthor Woman Boy Girl Person Cutie Babe Raccoon".split(" ")}],onOpen:function(e){e.container.find(".toolbar-randomize-link").on("click",function(){var n=e.cols[0].values,t=n[Math.floor(Math.random()*n.length)],o=e.cols[1].values,a=o[Math.floor(Math.random()*o.length)],i=e.cols[2].values,r=i[Math.floor(Math.random()*i.length)];e.setValue([t,a,r])})}}),a.picker({input:"#ks-picker-date",container:"#ks-picker-date-container",toolbar:!1,rotateEffect:!0,value:[n.getMonth(),n.getDate(),n.getFullYear(),n.getHours(),n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes()],onChange:function(e,n,t){var o=new Date(e.value[2],1*e.value[0]+1,0).getDate();n[1]>o&&e.cols[1].setValue(o)},formatValue:function(e,n,t){return t[0]+" "+n[1]+", "+n[2]+" "+n[3]+":"+n[4]},cols:[{values:"0 1 2 3 4 5 6 7 8 9 10 11".split(" "),displayValues:"January February March April May June July August September October November December".split(" "),textAlign:"left"},{values:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},{values:function(){for(var e=[],n=1950;2030>=n;n++)e.push(n);return e}()},{divider:!0,content:"&nbsp;&nbsp;"},{values:function(){for(var e=[],n=0;23>=n;n++)e.push(n);return e}()},{divider:!0,content:":"},{values:function(){for(var e=[],n=0;59>=n;n++)e.push(10>n?"0"+n:n);return e}()}]})}),a.onPageInit("progressbar",function(e){i(".ks-demo-progressbar-inline .button").on("click",function(){var e=i(this).attr("data-progress"),n=i(".ks-demo-progressbar-inline .progressbar");a.setProgressbar(n,e)}),i(".ks-demo-progressbar-load-hide .button").on("click",function(){function e(){setTimeout(function(){var o=t;t+=20*Math.random(),a.setProgressbar(n,t),100>o?e():a.hideProgressbar(n)},200*Math.random()+200)}var n=i(".ks-demo-progressbar-load-hide p:first-child");if(!n.children(".progressbar").length){a.showProgressbar(n,0);var t=0;e()}}),i(".ks-demo-progressbar-overlay .button").on("click",function(){function e(){setTimeout(function(){var o=t;t+=20*Math.random(),a.setProgressbar(n,t),100>o?e():a.hideProgressbar(n)},200*Math.random()+200)}var n=i("body");if(!n.children(".progressbar, .progressbar-infinite").length){a.showProgressbar(n,0);var t=0;e()}}),i(".ks-demo-progressbar-infinite-overlay .button").on("click",function(){var e=i("body");e.children(".progressbar, .progressbar-infinite").length||(a.showProgressbar(e),setTimeout(function(){a.hideProgressbar()},3e3))}),i(".ks-demo-progressbar-infinite-multi-overlay .button").on("click",function(){var e=i("body");e.children(".progressbar, .progressbar-infinite").length||(a.showProgressbar(e,"multi"),setTimeout(function(){a.hideProgressbar()},3e3))})}),a.onPageInit("autocomplete",function(e){var n="Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple".split(" ");a.autocomplete({input:"#autocomplete-dropdown",openIn:"dropdown",source:function(e,t,o){var a=[];if(0===t.length)return void o(a);for(var i=0;i<n.length;i++)n[i].toLowerCase().indexOf(t.toLowerCase())>=0&&a.push(n[i]);o(a)}}),a.autocomplete({input:"#autocomplete-dropdown-expand",openIn:"dropdown",expandInput:!0,source:function(e,t,o){var a=[];if(0===t.length)return void o(a);for(var i=0;i<n.length;i++)n[i].toLowerCase().indexOf(t.toLowerCase())>=0&&a.push(n[i]);o(a)}}),a.autocomplete({input:"#autocomplete-dropdown-all",openIn:"dropdown",source:function(e,t,o){for(var a=[],i=0;i<n.length;i++)n[i].toLowerCase().indexOf(t.toLowerCase())>=0&&a.push(n[i]);o(a)}}),a.autocomplete({input:"#autocomplete-dropdown-placeholder",openIn:"dropdown",dropdownPlaceholderText:'Try to type "Apple"',source:function(e,t,o){var a=[];if(0===t.length)return void o(a);for(var i=0;i<n.length;i++)n[i].toLowerCase().indexOf(t.toLowerCase())>=0&&a.push(n[i]);o(a)}}),a.autocomplete({input:"#autocomplete-dropdown-ajax",openIn:"dropdown",preloader:!0,valueProperty:"id",textProperty:"name",limit:20,dropdownPlaceholderText:'Try "JavaScript"',expandInput:!0,source:function(e,n,t){var o=[];return 0===n.length?void t(o):(e.showPreloader(),void i.ajax({url:"js/autocomplete-languages.json",method:"GET",dataType:"json",data:{query:n},success:function(a){for(var i=0;i<a.length;i++)a[i].name.toLowerCase().indexOf(n.toLowerCase())>=0&&o.push(a[i]);e.hidePreloader(),t(o)}}))}}),a.autocomplete({openIn:"page",opener:i("#autocomplete-standalone"),backOnSelect:!0,source:function(e,t,o){var a=[];if(0===t.length)return void o(a);for(var i=0;i<n.length;i++)n[i].toLowerCase().indexOf(t.toLowerCase())>=0&&a.push(n[i]);o(a)},onChange:function(e,n){i("#autocomplete-standalone").find(".item-after").text(n[0]),i("#autocomplete-standalone").find("input").val(n[0])}}),a.autocomplete({openIn:"popup",opener:i("#autocomplete-standalone-popup"),backOnSelect:!0,source:function(e,t,o){var a=[];if(0===t.length)return void o(a);for(var i=0;i<n.length;i++)n[i].toLowerCase().indexOf(t.toLowerCase())>=0&&a.push(n[i]);o(a)},onChange:function(e,n){i("#autocomplete-standalone-popup").find(".item-after").text(n[0]),i("#autocomplete-standalone-popup").find("input").val(n[0])}}),a.autocomplete({openIn:"page",opener:i("#autocomplete-standalone-multiple"),multiple:!0,source:function(e,t,o){var a=[];if(0===t.length)return void o(a);for(var i=0;i<n.length;i++)n[i].toLowerCase().indexOf(t.toLowerCase())>=0&&a.push(n[i]);o(a)},onChange:function(e,n){i("#autocomplete-standalone-multiple").find(".item-after").text(n.join(", ")),i("#autocomplete-standalone-multiple").find("input").val(n.join(", "))}}),a.autocomplete({openIn:"page",opener:i("#autocomplete-standalone-ajax"),multiple:!0,valueProperty:"id",textProperty:"name",limit:50,preloader:!0,source:function(e,n,t){var o=[];return 0===n.length?void t(o):(e.showPreloader(),void i.ajax({url:"js/autocomplete-languages.json",method:"GET",dataType:"json",data:{query:n},success:function(a){for(var i=0;i<a.length;i++)a[i].name.toLowerCase().indexOf(n.toLowerCase())>=0&&o.push(a[i]);e.hidePreloader(),t(o)}}))},onChange:function(e,n){for(var t=[],o=[],a=0;a<n.length;a++)t.push(n[a].name),o.push(n[a].id);i("#autocomplete-standalone-ajax").find(".item-after").text(t.join(", ")),i("#autocomplete-standalone-ajax").find("input").val(o.join(", "))}})}),i(".panel-left").on("open",function(){i(".statusbar-overlay").addClass("with-panel-left")}),i(".panel-right").on("open",function(){i(".statusbar-overlay").addClass("with-panel-right")}),i(".panel-left, .panel-right").on("close",function(){i(".statusbar-overlay").removeClass("with-panel-left with-panel-right")});var g=0;i(document).on("click",".ks-generate-page",o)},{}],5:[function(e,n,t){var o=".panel {\n  background: #222;\n  color: #dddddd;\n}\n.popover {\n  width: 240px;\n}\n.ks-grid div[class*=\"col-\"] {\n  background: #fff;\n  text-align: center;\n  color: #000;\n  border: 1px solid #ddd;\n  padding: 5px;\n  margin-bottom: 15px;\n}\n.ks-preloaders {\n  text-align: center;\n}\n.ks-preloader-big {\n  width: 42px;\n  height: 42px;\n}\n.statusbar-overlay {\n  background: #000;\n}\n.statusbar-overlay.with-panel-left {\n  background: #222426;\n}\n.statusbar-overlay.with-panel-right {\n  background: #131313;\n}\n.page[data-page=\"tabbar\"] .tabbar,\n.page[data-page=\"tabbar-labels\"] .tabbar,\n.page[data-page=\"messages\"] .tabbar,\n.page[data-page=\"tabbar\"] .toolbar,\n.page[data-page=\"tabbar-labels\"] .toolbar,\n.page[data-page=\"messages\"] .toolbar {\n  -webkit-transform: none;\n  -moz-transform: none;\n  -ms-transform: none;\n  -o-transform: none;\n  transform: none;\n  -webkit-transition: 0ms;\n  -o-transition: 0ms;\n  transition: 0ms;\n}\n.page[data-page=\"tabbar\"] .page-content {\n  padding-bottom: 44px;\n}\n.page[data-page=\"tabbar-labels\"] .page-content {\n  padding-bottom: 50px;\n}\n@media all and (min-width: 768px) {\n  .page[data-page=\"tabbar-labels\"] .page-content {\n    padding-bottom: 56px;\n  }\n}\ni.ks-tabbar-icon-1 {\n  width: 30px;\n  height: 30px;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30' fill='%23929292'><g><circle cx='15.2' cy='8.8' r='1.5'/><polygon points='16.7,12.3 16.7,11.7 16.7,11.3 13.7,11.3 13.7,12.3 14.7,12.3 14.7,20.3 13.7,20.3 13.7,21.3 17.7,21.3 17.7,20.3 16.7,20.3'/><path d='M15.2,2.3C8.3,2.3,2.7,7.9,2.7,14.8s5.6,12.5,12.5,12.5c6.9,0,12.5-5.6,12.5-12.5S22.1,2.3,15.2,2.3z M15.2,26.3 c-6.3,0-11.5-5.2-11.5-11.5S8.8,3.3,15.2,3.3s11.5,5.2,11.5,11.5S21.5,26.3,15.2,26.3z'/></g></svg>\");\n}\n.active i.ks-tabbar-icon-1 {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 30 30' fill='%23007aff'><path d='M15,2.6C8.1,2.6,2.5,8.2,2.5,15.1C2.5,22,8.1,27.6,15,27.6S27.5,22,27.5,15.1C27.5,8.2,21.9,2.6,15,2.6z M15,7.6 c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5C13.5,8.3,14.2,7.6,15,7.6z M17.5,21.6h-4v-1h1v-8h-1v-1h3V12 v0.6v8h1V21.6z'/></svg>\");\n}\ni.ks-tabbar-icon-2 {\n  width: 25px;\n  height: 30px;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 25 17' fill='%23929292'><path d='M19.5,0h-14L0,6v11h25V6L19.5,0z M5.9,1h13.2l4.5,5H16c0,1.9-1.6,3.4-3.5,3.4C10.6,9.4,9,7.9,9,6H1.4L5.9,1z M24,16H1V7h7.1 c0.5,1.9,2.3,3.4,4.4,3.4s3.9-1.5,4.4-3.4H24V16z'/></svg>\");\n}\n.active i.ks-tabbar-icon-2 {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 25 17' fill='%23007aff'><path d='M19.5,0h-14L0,6v11h25V6L19.5,0z M5.9,1h13.2l4.5,5H16c0,1.9-1.6,3.4-3.5,3.4C10.6,9.4,9,7.9,9,6H1.3L5.9,1z'/></svg>\");\n}\ni.ks-tabbar-icon-3 {\n  width: 30px;\n  height: 30px;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 30 19' fill='%23929292'><path d='M16.8,1c3.7,0,6.8,3,6.8,6.8l0,0.1c0,0,0,0.1,0,0.1l0,1l1,0C27,9,29,11,29,13.5c0,2.5-2,4.5-4.5,4.5H6c-2.8,0-5-2.2-5-5 c0-2.1,1.4-4,3.4-4.7L5,8.1l0.1-0.6C5.3,6,6.5,5,8,5c0.4,0,0.9,0.1,1.3,0.3l0.9,0.5l0.4-0.9C11.8,2.5,14.2,1,16.8,1 M16.8,0 c-3.1,0-5.7,1.8-7,4.4C9.2,4.2,8.6,4,8,4C6,4,4.4,5.4,4.1,7.3C1.7,8.1,0,10.4,0,13c0,3.3,2.7,6,6,6h18.5v0c3,0,5.5-2.5,5.5-5.5 c0-3-2.5-5.5-5.5-5.5c0-0.1,0-0.2,0-0.2C24.5,3.5,21.1,0,16.8,0L16.8,0z'/></svg>\");\n}\n.active i.ks-tabbar-icon-3 {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 30 19' fill='%23007aff'><path d='M24.5,8c0-0.1,0-0.2,0-0.2C24.5,3.5,21,0,16.8,0c-3.1,0-5.7,1.8-7,4.4C9.2,4.2,8.6,4,8,4C6,4,4.4,5.4,4,7.3 C1.7,8.1,0,10.4,0,13c0,3.3,2.7,6,6,6h18.5v0c3,0,5.5-2.5,5.5-5.5C30,10.5,27.5,8,24.5,8z'/></svg>\");\n}\ni.ks-tabbar-icon-4 {\n  width: 25px;\n  height: 30px;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 25 19' fill='%23929292'><g><path d='M23,3h-4.1l-2.4-2.4c0,0,0,0,0,0l0,0C16.1,0.2,15.6,0,15,0h-5C9.5,0,8.9,0.3,8.6,0.6l0,0L6.2,3H2C0.9,3,0,3.9,0,5v12 c0,1.1,0.9,2,2,2h21c1.1,0,2-0.9,2-2V5C25,3.9,24.1,3,23,3z M24,17c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h4.2h0.4 l0.3-0.3l1.2-1.2l0,0.1l1.1-1.2C9.5,1.1,9.8,1,10,1h5c0.3,0,0.5,0.1,0.7,0.3l2.4,2.4L18.4,4h0.4H23c0.6,0,1,0.4,1,1V17z'/><path d='M12.5,4C8.9,4,6,6.9,6,10.5c0,3.6,2.9,6.5,6.5,6.5c3.6,0,6.5-2.9,6.5-6.5C19,6.9,16.1,4,12.5,4z M12.5,16 c-3,0-5.5-2.5-5.5-5.5C7,7.5,9.5,5,12.5,5S18,7.5,18,10.5C18,13.5,15.5,16,12.5,16z'/><path d='M12.5,6C10,6,8,8,8,10.5C8,13,10,15,12.5,15s4.5-2,4.5-4.5C17,8,15,6,12.5,6z M12.5,14C10.6,14,9,12.4,9,10.5 C9,8.6,10.6,7,12.5,7S16,8.6,16,10.5C16,12.4,14.4,14,12.5,14z'/></g></svg>\");\n}\n.active i.ks-tabbar-icon-4 {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 25 19' fill='%23007aff'><g><path d='M23,3h-4.1l-2.4-2.4c0,0,0,0,0,0l0,0C16.1,0.2,15.6,0,15.1,0h-5C9.5,0,9,0.3,8.6,0.6l0,0L6.2,3H2C0.9,3,0,3.9,0,5v12 c0,1.1,0.9,2,2,2h21c1.1,0,2-0.9,2-2V5C25,3.9,24.1,3,23,3z M12.5,16c-3,0-5.5-2.5-5.5-5.5C7,7.5,9.5,5,12.5,5c3,0,5.5,2.5,5.5,5.5 C18,13.5,15.5,16,12.5,16z'/><circle cx='12.5' cy='10.5' r='4.5'/></g></svg>\");\n}\n.ks-demo-slider {\n  width: 100%;\n  height: 100%;\n}\n.ks-demo-slider .swiper-slide,\n.ks-carousel-slider .swiper-slide {\n  font-size: 25px;\n  font-weight: 300;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  background: #fff;\n}\n.ks-carousel-slider .swiper-slide {\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  background: #fff;\n}\n.ks-carousel-slider.ks-carousel-slider-auto .swiper-slide {\n  width: 85%;\n}\n.ks-carousel-slider.ks-carousel-slider-auto .swiper-slide:nth-child(2n) {\n  width: 70%;\n}\n.ks-carousel-slider.ks-carousel-slider-auto .swiper-slide:nth-child(3n) {\n  width: 30%;\n}\n.page[data-page=\"swiper-multiple\"] .swiper-container {\n  margin: 0px 0 35px;\n  font-size: 18px;\n  height: 120px;\n}\n.ks-slider-custom {\n  height: 100%;\n}\n.ks-slider-custom .swiper-container {\n  background: #000;\n  height: 100%;\n}\n.ks-slider-custom .swiper-slide {\n  -webkit-background-size: cover;\n  background-size: cover;\n  background-position: center;\n}\n.ks-slider-custom .swiper-pagination .swiper-pagination-bullet {\n  cursor: pointer;\n  width: 10px;\n  height: 10px;\n  background: rgba(255, 255, 255, 0);\n  opacity: 1;\n  border-radius: 0;\n  -webkit-transition: 200ms;\n  -moz-transition: 200ms;\n  -ms-transition: 200ms;\n  -o-transition: 200ms;\n  transition: 200ms;\n  position: relative;\n  -webkit-transform: scale(0.9);\n  -moz-transform: scale(0.9);\n  transform: scale(0.9);\n  box-sizing: border-box;\n  border: 1px solid rgba(255, 255, 255, 0.8);\n}\n.ks-slider-custom .swiper-pagination .swiper-pagination-bullet-active {\n  z-index: 1;\n  border: 1px solid #007aff;\n  -webkit-transform: scale(1.4);\n  -moz-transform: scale(1.4);\n  transform: scale(1.4);\n}\n.ks-cube-slider {\n  width: 80%;\n  height: 70%;\n  top: 15%;\n}\n.ks-coverflow-slider {\n  height: 60%;\n  top: 20%;\n}\n.ks-coverflow-slider .swiper-slide {\n  width: 65%;\n}\n.ks-cube-slider .swiper-slide,\n.ks-coverflow-slider .swiper-slide {\n  background-size: cover;\n  color: #fff;\n  -webkit-backface-visibility: hidden;\n}\n.ks-fade-slider .swiper-slide {\n  background-size: cover;\n  background-position: center;\n}\n.page[data-page=\"swiper-gallery\"] {\n  background: #000;\n}\n.ks-swiper-gallery-top {\n  height: 70%;\n}\n.ks-swiper-gallery-thumbs {\n  margin-top: 10px;\n  height: 20%;\n  height: -webkit-calc(30% - 20px);\n  height: -moz-calc(30% - 20px);\n  height: -ms-calc(30% - 20px);\n  height: calc(30% - 20px);\n}\n.ks-swiper-gallery-thumbs .swiper-slide {\n  width: 25%;\n}\n.ks-swiper-gallery-thumbs .swiper-slide-pic {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.35;\n  -webkit-transition: 300ms;\n}\n.ks-swiper-gallery-thumbs .swiper-slide-active .swiper-slide-pic {\n  opacity: 1;\n}\n.ks-swiper-gallery-top .swiper-slide,\n.ks-swiper-gallery-thumbs .swiper-slide,\n.ks-swiper-gallery-top .swiper-slide-pic,\n.ks-swiper-gallery-thumbs .swiper-slide-pic {\n  -webkit-background-size: cover;\n  background-size: cover;\n  background-position: center;\n}\n.ks-parallax-slider {\n  height: 100%;\n}\n.ks-parallax-slider .swiper-parallax-bg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 130%;\n  height: 100%;\n  -webkit-background-size: cover;\n  background-size: cover;\n  background-position: center;\n}\n.ks-parallax-slider .swiper-slide {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 40px 60px;\n  color: #fff;\n}\n.ks-parallax-slider .swiper-slide-title {\n  font-size: 41px;\n  font-weight: 300;\n}\n.ks-parallax-slider .swiper-slide-subtitle {\n  font-size: 21px;\n}\n.ks-parallax-slider .swiper-slide-text {\n  font-size: 14px;\n  max-width: 400px;\n  line-height: 1.3;\n}\n.ks-lazy-slider {\n  height: 100%;\n}\n.ks-lazy-slider .swiper-slide {\n  position: relative;\n}\n.ks-lazy-slider .swiper-slide img {\n  width: auto;\n  height: auto;\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n.page[data-page=\"virtual-list\"] .virtual-list li {\n  height: 63px;\n}\n.custom-accordion {\n  padding-left: 0;\n  padding-right: 0;\n}\n.custom-accordion .accordion-item-toggle {\n  padding: 0px 15px;\n  height: 44px;\n  line-height: 44px;\n  font-size: 17px;\n  color: #000;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n}\n.custom-accordion .accordion-item-toggle:active {\n  background: rgba(0, 0, 0, 0.15);\n}\n.custom-accordion .accordion-item-toggle span {\n  display: inline-block;\n  margin-left: 15px;\n}\nhtml[dir=\"rtl\"] .custom-accordion .accordion-item-toggle span {\n  margin-left: 0;\n  margin-right: 15px;\n}\n.custom-accordion .accordion-item:last-child .accordion-item-toggle {\n  border-bottom: none;\n}\n.custom-accordion .icon-ks-plus,\n.custom-accordion .icon-ks-minus {\n  display: inline-block;\n  width: 22px;\n  height: 22px;\n  border: 1px solid #000;\n  border-radius: 100%;\n  line-height: 20px;\n  text-align: center;\n}\n.custom-accordion .icon-ks-minus {\n  display: none;\n}\n.custom-accordion .accordion-item-expanded .icon-ks-minus {\n  display: inline-block;\n}\n.custom-accordion .accordion-item-expanded .icon-ks-plus {\n  display: none;\n}\n.custom-accordion .accordion-item-content {\n  padding: 0px 15px;\n}\n#ks-picker-date-container .picker-item {\n  color: #999;\n}\n#ks-picker-date-container .picker-selected {\n  color: #000;\n}\n.layout-dark #ks-picker-date-container .picker-selected {\n  color: #fff;\n}\n@media (max-width: 767px) {\n  #ks-picker-date-container .picker-items {\n    font-size: 21px;\n  }\n  #ks-picker-date-container .picker-item {\n    height: 36px;\n    line-height: 36px;\n    padding: 0 6px;\n  }\n}\n#ks-calendar-inline-container .picker-calendar {\n  height: 280px;\n}\nimg.ks-demo-lazy {\n  display: block;\n  width: 100%;\n  height: auto;\n}\ndiv.ks-demo-lazy {\n  background: #aaa;\n  -webkit-background-size: cover;\n  background-size: cover;\n  height: 300px;\n  height: 60vw;\n}\n.ks-layout-theme {\n  height: 44px;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n}\n.ks-layout-theme.ks-layout-default {\n  background: #efeff4;\n}\n.ks-layout-theme.ks-layout-dark {\n  background: #222426;\n}\n.ks-layout-theme.ks-layout-white {\n  background: #fff;\n}\n.ks-color-theme {\n  height: 44px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  margin-bottom: 10px;\n}\n.ks-card-header-pic .card-header {\n  height: 40vw;\n  background-size: cover;\n  background-position: center;\n}\n.ks-facebook-card .card-header {\n  display: block;\n  padding: 10px;\n}\n.ks-facebook-card .ks-facebook-avatar {\n  float: left;\n}\n.ks-facebook-card .ks-facebook-name {\n  margin-left: 44px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.ks-facebook-card .ks-facebook-date {\n  margin-left: 44px;\n  font-size: 13px;\n  color: #8e8e93;\n}\n.ks-facebook-card .card-footer {\n  background: #fafafa;\n}\n.ks-facebook-card .card-footer a {\n  color: #81848b;\n  font-weight: 500;\n}\n.ks-facebook-card .card-content img {\n  display: block;\n}\n.ks-facebook-card .card-content-inner {\n  padding: 15px 10px;\n}\n";
e("lessify")(o),n.exports=o},{lessify:2}]},{},[3]);