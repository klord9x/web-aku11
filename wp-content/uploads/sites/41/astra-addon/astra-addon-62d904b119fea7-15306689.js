astraToggleSetupPro=function(e,a,t){var l,o,n,r=!1;if(0<(l="off-canvas"===e||"full-width"===e?(o=document.querySelectorAll("#ast-mobile-popup, #ast-mobile-header"),(n=a.classList.contains("ast-header-break-point")?document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle"):document.querySelectorAll("#ast-desktop-header .main-header-menu-toggle")).length):(r=!(0<(l=(n=a.classList.contains("ast-header-break-point")?(o=document.querySelectorAll("#ast-mobile-header"),document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")):(o=document.querySelectorAll("#ast-desktop-header"),document.querySelectorAll("#ast-desktop-header .main-header-menu-toggle"))).length)))?1:l)||r)for(var s=0;s<l;s++)if(r||(n[s].setAttribute("data-index",s),t[s]||(t[s]=n[s],n[s].addEventListener("click",astraNavMenuToggle,!1))),void 0!==o[s])for(var d,i=0;i<o.length;i++)if(0<(d=document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link")?o[i].querySelectorAll("ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle"):o[i].querySelectorAll("ul.main-header-menu .ast-menu-toggle")).length)for(var g=0;g<d.length;g++)d[g].addEventListener("click",AstraToggleSubMenu,!1)},astraNavMenuTogglePro=function(e,a,t,l){e.preventDefault();var o=e.target.closest("#ast-desktop-header"),n=document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content"),r=(o=null!=o&&""!==o?o.querySelector(".main-header-menu-toggle"):document.querySelector("#masthead > #ast-desktop-header .main-header-menu-toggle"),document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content .main-header-bar-navigation"));if("desktop"===e.currentTarget.trigger_type)return null!==r&&""!==r&&void 0!==r&&(astraToggleClass(r,"toggle-on"),r.classList.contains("toggle-on")?r.style.display="block":r.style.display=""),astraToggleClass(o,"toggled"),void(o.classList.contains("toggled")?(a.classList.add("ast-main-header-nav-open"),"dropdown"===t&&(n.style.display="block")):(a.classList.remove("ast-main-header-nav-open"),n.style.display="none"));e=document.querySelectorAll("#masthead > #ast-mobile-header .main-header-bar-navigation"),menu_toggle_all=document.querySelectorAll("#masthead > #ast-mobile-header .main-header-menu-toggle"),r="0",o=!1;if(null!==l.closest("#ast-fixed-header")&&(e=document.querySelectorAll("#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation"),menu_toggle_all=document.querySelectorAll("#ast-fixed-header .main-header-menu-toggle"),r="0",o=!0),void 0===e[r])return!1;for(var s=e[r].querySelectorAll(".menu-item-has-children"),d=0;d<s.length;d++){s[d].classList.remove("ast-submenu-expanded");for(var i=s[d].querySelectorAll(".sub-menu"),g=0;g<i.length;g++)i[g].style.display="none"}-1!==(l.getAttribute("class")||"").indexOf("main-header-menu-toggle")&&(astraToggleClass(e[r],"toggle-on"),astraToggleClass(menu_toggle_all[r],"toggled"),o&&1<menu_toggle_all.length&&astraToggleClass(menu_toggle_all[1],"toggled"),e[r].classList.contains("toggle-on")?(e[r].style.display="block",a.classList.add("ast-main-header-nav-open")):(e[r].style.display="",a.classList.remove("ast-main-header-nav-open")))};!function(n,h){var a="astExtSticky",l=h.document,r=(jQuery(h).outerWidth(),jQuery(h).width()),c=astraAddon.header_builder_active,s={dependent:[],max_width:"",site_layout:"",break_point:920,admin_bar_height_lg:32,admin_bar_height_sm:46,admin_bar_height_xs:0,stick_upto_scroll:0,gutter:0,wrap:"<div></div>",body_padding_support:!0,html_padding_support:!0,shrink:{padding_top:"",padding_bottom:""},sticky_on_device:"desktop",header_style:"none",hide_on_scroll:"no"},d=0;function t(e,t){this.element=e,this.options=n.extend({},s,t),this._defaults=s,this._name=a,"1"==this.options.hide_on_scroll&&(this.navbarHeight=n(e).outerHeight()),this.lastScrollTop=0,this.delta=5,this.should_stick=!0,this.hideScrollInterval="",this.init()}t.prototype.stick_me=function(e,t){var a,s,d,i,r,o=jQuery(e.element);jQuery(h).outerWidth();stick_upto_scroll=parseInt(e.options.stick_upto_scroll),max_width=parseInt(o.parent().attr("data-stick-maxwidth")),gutter=parseInt(o.parent().attr("data-stick-gutter")),aboveHeaderSelectorValue=gutter,c&&astraAddon.header_main_shrink&&((o.hasClass("ast-stick-primary-below-wrapper")||o.hasClass("ast-primary-header"))&&1==astraAddon.header_above_stick&&0<gutter&&(gutter-=10),a=l.querySelector(".ast-above-header-bar"),1==astraAddon.header_above_stick&&null!==a&&(aboveHeaderSelectorValue=a.getBoundingClientRect().height+parseInt(a.parentNode.getAttribute("data-stick-gutter")))),("desktop"!=e.options.sticky_on_device||!jQuery("body").hasClass("ast-header-break-point"))&&("mobile"!=e.options.sticky_on_device||jQuery("body").hasClass("ast-header-break-point"))?(stick_upto_scroll<0&&(stick_upto_scroll=0),a=0<l.getElementsByClassName("elementor-motion-effects-parent").length,jQuery(h).scrollTop()>stick_upto_scroll?(s=o,c&&(r=o.closest(".ast-mobile-header-wrap"),d=o.closest("#ast-desktop-header"),r=0===r.length?o.find(".ast-mobile-header-wrap"):r,d=0===d.length?o.find("#ast-desktop-header"):d,r.find(".ast-mobile-header-content").css("top",o.outerHeight()+gutter),"ast-box-layout"==e.options.site_layout?(i=jQuery("body").width(),r.find(".ast-mobile-header-content").css("width",i)):r.find(".ast-mobile-header-content").css("width",max_width),d.find(".ast-desktop-header-content").css("top",o.outerHeight()+gutter),d.find(".ast-desktop-header-content").css("width",max_width)),"1"===e.options.hide_on_scroll?e.hasScrolled(e,"stick"):"none"==e.options.header_style?(a||o.parent().css("min-height",o.outerHeight()),l.querySelector("body").classList.contains("fl-builder-edit")||o.addClass("ast-sticky-active").stop().css({top:gutter}),o.addClass("ast-sticky-active").stop().css({"max-width":max_width,"padding-top":e.options.shrink.padding_top,"padding-bottom":e.options.shrink.padding_bottom}),(o.hasClass("ast-stick-primary-below-wrapper")||o.hasClass("ast-primary-header"))&&1==astraAddon.header_above_stick&&o.closest("#ast-desktop-header").find(".ast-above-header-bar").outerHeight()<70&&(o.addClass("ast-sticky-active").stop().css({top:a?aboveHeaderSelectorValue:"unset"}),o.parent().css("min-height","unset")),o.addClass("ast-sticky-shrunk").stop(),n(l).trigger("addStickyClass"),s.addClass("ast-header-sticked")):"slide"==e.options.header_style?(s.css({top:gutter}),s.addClass("ast-header-slide"),s.css("visibility","visible"),s.addClass("ast-sticky-active").stop().css({transform:"translateY(0)"}),n("html").addClass("ast-header-stick-slide-active"),n(l).trigger("addStickyClass"),s.addClass("ast-header-sticked")):"fade"==e.options.header_style&&(s.css({top:gutter}),s.addClass("ast-header-fade"),s.css("visibility","visible"),s.addClass("ast-sticky-active").stop().css({opacity:"1"}),n("html").addClass("ast-header-stick-fade-active"),n(l).trigger("addStickyClass"),s.addClass("ast-header-sticked"))):(e.stickRelease(e),c&&(r=0===(r=o.closest(".ast-mobile-header-wrap")).length?o.find(".ast-mobile-header-wrap"):r,jQuery("body").hasClass("ast-primary-sticky-header-active")&&jQuery("body").hasClass("ast-above-sticky-header-active")&&jQuery("body").hasClass("ast-below-sticky-header-active")||r.find(".ast-mobile-header-content").removeAttr("style")))):e.stickRelease(e)},t.prototype.update_attrs=function(){var e,a,t=this,s=jQuery(t.element),d=parseInt(t.options.gutter),i=t.options.max_width;"none"!=t.options.header_style||jQuery("body").hasClass("ast-sticky-toggled-off")?n("#masthead").length&&(e=n("#masthead"),a=e.offset().top+e.outerHeight()+100||0):a=s.offset().top||0,"ast-box-layout"!=t.options.site_layout&&(i=jQuery("body").width()),t.options.dependent&&jQuery.each(t.options.dependent,function(e,t){jQuery(t).length&&"on"==jQuery(t).parent().attr("data-stick-support")&&(dependent_height=jQuery(t).outerHeight(),d+=parseInt(dependent_height),a-=parseInt(dependent_height))}),t.options.admin_bar_height_lg&&jQuery("#wpadminbar").length&&782<r&&(d+=parseInt(t.options.admin_bar_height_lg),a-=parseInt(t.options.admin_bar_height_lg)),t.options.admin_bar_height_sm&&jQuery("#wpadminbar").length&&600<=r&&r<=782&&(d+=parseInt(t.options.admin_bar_height_sm),a-=parseInt(t.options.admin_bar_height_sm)),t.options.admin_bar_height_xs&&jQuery("#wpadminbar").length&&(d+=parseInt(t.options.admin_bar_height_xs),a-=parseInt(t.options.admin_bar_height_xs)),t.options.body_padding_support&&(d+=parseInt(jQuery("body").css("padding-top"),10),a-=parseInt(jQuery("body").css("padding-top"),10)),t.options.html_padding_support&&(d+=parseInt(jQuery("html").css("padding-top"),10),a-=parseInt(jQuery("html").css("padding-top"),10)),S&&a--,t.options.stick_upto_scroll=a,"none"==t.options.header_style?s.parent().css("min-height",s.outerHeight()).attr("data-stick-gutter",parseInt(d)).attr("data-stick-maxwidth",parseInt(i)):(s.parent().attr("data-stick-gutter",parseInt(d)).attr("data-stick-maxwidth",parseInt(i)),"ast-padded-layout"===t.options.site_layout&&s.css("max-width",parseInt(i)))},t.prototype.hasScrolled=function(e,t){var a,s=n(h).scrollTop();Math.abs(d-s)<=5||(a=jQuery(e.element),d<s&&0<s?jQuery(e.element).removeClass("ast-nav-down").addClass("ast-nav-up"):s+n(h).height()<n(l).height()&&jQuery(e.element).removeClass("ast-nav-up").addClass("ast-nav-down"),d=s,n(e.element).hasClass("ast-nav-up")||"stick"!=t?(a.css({transform:"translateY(-100%)"}).stop(),setTimeout(function(){a.removeClass("ast-sticky-active")},300),a.css({visibility:"hidden",top:""}),n(l).trigger("removeStickyClass"),n("html").removeClass("ast-header-stick-scroll-active"),a.removeClass("ast-header-sticked")):(a.css({top:gutter}),a.addClass("ast-header-sticked"),a.addClass("ast-header-slide"),a.css("visibility","visible"),a.addClass("ast-sticky-active").stop().css({transform:"translateY(0)"}),n(l).trigger("addStickyClass"),n("html").addClass("ast-header-stick-scroll-active")))},t.prototype.stickRelease=function(e){var t=jQuery(e.element),a=t;"1"===e.options.hide_on_scroll?e.hasScrolled(e,"release"):"none"==e.options.header_style?(t.removeClass("ast-sticky-active").stop().css({"max-width":"",top:"",padding:""}),t.parent().css("min-height",""),n(l).trigger("removeStickyClass"),a.removeClass("ast-header-sticked"),t.removeClass("ast-sticky-shrunk").stop()):"slide"==e.options.header_style?(a.removeClass("ast-sticky-active").stop().css({transform:"translateY(-100%)"}),a.css({visibility:"hidden",top:""}),n("html").removeClass("ast-header-stick-slide-active"),n(l).trigger("removeStickyClass"),a.removeClass("ast-header-sticked")):"fade"==e.options.header_style&&(a.removeClass("ast-sticky-active").stop().css({opacity:"0"}),a.css({visibility:"hidden"}),a.removeClass("ast-header-sticked"),n(l).trigger("removeStickyClass"),n("html").removeClass("ast-header-stick-fade-active"))},t.prototype.init=function(){var t,e;jQuery(this.element)&&(t=this,e=jQuery(t.element),("none"==t.options.header_style?e.wrap(t.options.wrap).parent().css("min-height",e.outerHeight()):e.wrap(t.options.wrap)).attr("data-stick-support","on").attr("data-stick-maxwidth",parseInt(t.options.max_width)),t.update_attrs(),jQuery(h).on("resize",function(){t.stickRelease(t),t.update_attrs(),t.stick_me(t)}),jQuery(h).on("scroll",function(){t.stick_me(t,"scroll"),jQuery("body").hasClass("ast-sticky-toggled-off")&&(t.update_attrs(),t.stick_me(t,"scroll"))}),jQuery(l).ready(function(e){t.stick_me(t)}))},n.fn[a]=function(e){return this.each(function(){n.data(this,"plugin_"+a)||n.data(this,"plugin_"+a,new t(this,e))})};var e,i=jQuery("body"),o=i.width(),p=astraAddon.stick_header_meta||"default",y=astraAddon.header_main_stick||"",_=astraAddon.header_main_shrink||"",m=astraAddon.header_above_stick||"",u=astraAddon.header_below_stick||"",k=astraAddon.header_main_stick_meta||"",b=astraAddon.header_above_stick_meta||"",g=astraAddon.header_below_stick_meta||"",v=astraAddon.site_layout||"",w=astraAddon.site_layout_box_width||1200,j=astraAddon.sticky_header_on_devices||"desktop",Q=astraAddon.sticky_header_style||"none",f=astraAddon.sticky_hide_on_scroll||"",x=astraAddon.header_logo_width||"",C=astraAddon.responsive_header_logo_width||"",S=astraAddon.stick_origin_position||"",I=astraAddon.tablet_break_point||768,A=astraAddon.mobile_break_point||544;"disabled"!=p&&("enabled"===p&&(y=k,m=b,u=g),0<n("header .site-logo-img img").length&&(-1===(k=0==(k=void 0===(k=(p=n("header .site-logo-img img")).attr("height"))?p.height():k)?"":k).toString().indexOf("%")&&(k+="px"),""!=C.desktop||""!=C.tablet||""!=C.mobile?e="<style type='text/css' id='ast-site-identity-img' class='ast-site-identity-img' > #masthead .ast-header-sticked .site-logo-img .astra-logo-svg { width: "+C.desktop+"px; } @media (max-width: "+I+"px) { #masthead .ast-header-sticked .site-logo-img .astra-logo-svg { width: "+C.tablet+"px; } } @media (max-width: "+A+"px) { #masthead .ast-header-sticked .site-logo-img .astra-logo-svg{ width: "+C.mobile+"px; } } </style>":""!=x&&(e="<style type='text/css' id='ast-site-identity-img' class='ast-site-identity-img' > #masthead .ast-header-sticked .site-logo-img .astra-logo-svg { width: "+x+"px; } #masthead .ast-header-sticked .site-logo-img img { max-height: "+k+"; width: auto; } </style>"),n("head").append(e)),(y||m||u)&&(n(l).on("addStickyClass",function(){var e="";"1"!=y&&"on"!=y&&"disabled"!=y||(e+=" ast-primary-sticky-header-active"),"1"!=m&&"on"!=m&&"disabled"!=m||(e+=" ast-above-sticky-header-active"),"1"!=u&&"on"!=u&&"disabled"!=u||(e+=" ast-below-sticky-header-active"),n("body").addClass(e)}),n(l).on("removeStickyClass",function(){var e="";"1"!=y&&"on"!=y&&"disabled"!=y||(e+=" ast-primary-sticky-header-active"),"1"!=m&&"on"!=m&&"disabled"!=m||(e+=" ast-above-sticky-header-active"),"1"!=u&&"on"!=u&&"disabled"!=u||(e+=" ast-below-sticky-header-active"),n("body").removeClass(e)}),"ast-box-layout"===v&&(o=parseInt(w)),jQuery(l).on("ready astLayoutWidthChanged",function(e){if("astLayoutWidthChanged"===e.type){if(!(parseInt(y)||parseInt(u)||parseInt(m)))return;jQuery("div.ast-stick-primary-below-wrapper").children().unwrap(),jQuery('div[data-stick-support="on"]').children().unwrap()}var t;"1"==f?("1"==_&&jQuery("#ast-fixed-header").addClass("ast-sticky-shrunk").stop(),"1"!=m&&"on"!=m&&"disabled"!=m&&jQuery("#ast-fixed-header .ast-above-header").hide(),"1"!=y&&"on"!=y&&"disabled"!=y&&jQuery("#ast-fixed-header .main-header-bar").hide(),"1"!=u&&"on"!=u&&"disabled"!=u&&jQuery("#ast-fixed-header .ast-below-header").hide(),jQuery("#ast-fixed-header").astExtSticky({max_width:o,site_layout:v,sticky_on_device:j,header_style:"slide",hide_on_scroll:f})):"none"==Q?c?("both"===j?["desktop","mobile"]:[j]).forEach(function(e){var t;"1"!=m&&"on"!=m&&"disabled"!=m||jQuery("#masthead #ast-"+e+"-header .ast-above-header").astExtSticky({max_width:o,site_layout:v,sticky_on_device:j,header_style:Q,hide_on_scroll:f}),"1"!=y&&"on"!=y&&"disabled"!=y||"1"!=u&&"on"!=u&&"disabled"!=u?("1"!=y&&"on"!=y&&"disabled"!=y||(t=_?{padding_top:"",padding_bottom:""}:"",jQuery("#masthead #ast-"+e+"-header .main-header-bar").astExtSticky({dependent:["#masthead #ast-"+e+"-header .ast-above-header"],max_width:o,site_layout:v,shrink:t,sticky_on_device:j,header_style:Q,hide_on_scroll:f}),jQuery("#masthead #ast-"+e+"-header .ast-custom-header").astExtSticky({max_width:o,site_layout:v,shrink:t,sticky_on_device:j,header_style:Q,hide_on_scroll:f})),"1"!=u&&"on"!=u&&"disabled"!=u||jQuery("#masthead #ast-"+e+"-header .ast-below-header").astExtSticky({dependent:["#masthead #ast-"+e+"-header .main-header-bar","#masthead #ast-"+e+"-header .ast-above-header"],max_width:o,site_layout:v,sticky_on_device:j,header_style:Q,hide_on_scroll:f})):((jQuery("#masthead #ast-"+e+"-header .main-header-bar-wrap").length?jQuery("#masthead #ast-"+e+"-header .main-header-bar-wrap"):jQuery("#masthead #ast-"+e+"-header .ast-below-header-wrap")).wrap('<div class="ast-stick-primary-below-wrapper"></div>'),jQuery("#masthead #ast-"+e+"-header .ast-below-header-wrap").prependTo("#masthead #ast-"+e+"-header .ast-stick-primary-below-wrapper"),jQuery("#masthead #ast-"+e+"-header .main-header-bar-wrap").prependTo("#masthead #ast-"+e+"-header .ast-stick-primary-below-wrapper"),jQuery("#masthead #ast-"+e+"-header .ast-stick-primary-below-wrapper").astExtSticky({dependent:["#masthead #ast-"+e+"-header .ast-above-header"],max_width:o,site_layout:v,shrink:t,sticky_on_device:j,header_style:Q,hide_on_scroll:f}))}):("1"!=m&&"on"!=m&&"disabled"!=m||jQuery("#masthead .ast-above-header").astExtSticky({max_width:o,site_layout:v,sticky_on_device:j,header_style:Q,hide_on_scroll:f}),"1"!=y&&"on"!=y&&"disabled"!=y||"1"!=u&&"on"!=u&&"disabled"!=u?("1"!=y&&"on"!=y&&"disabled"!=y||(t=_?{padding_top:"",padding_bottom:""}:"",jQuery("#masthead .main-header-bar").astExtSticky({dependent:["#masthead .ast-above-header"],max_width:o,site_layout:v,shrink:t,sticky_on_device:j,header_style:Q,hide_on_scroll:f}),jQuery("#masthead .ast-custom-header").astExtSticky({max_width:o,site_layout:v,shrink:t,sticky_on_device:j,header_style:Q,hide_on_scroll:f})),"1"!=u&&"on"!=u&&"disabled"!=u||jQuery("#masthead .ast-below-header").astExtSticky({dependent:["#masthead .main-header-bar","#masthead .ast-above-header"],max_width:o,site_layout:v,sticky_on_device:j,header_style:Q,hide_on_scroll:f})):(jQuery("#masthead .main-header-bar-wrap").wrap('<div class="ast-stick-primary-below-wrapper"></div>'),jQuery("#masthead .ast-below-header-wrap").prependTo(".ast-stick-primary-below-wrapper"),jQuery("#masthead .main-header-bar-wrap").prependTo(".ast-stick-primary-below-wrapper"),jQuery("#masthead .ast-stick-primary-below-wrapper").astExtSticky({dependent:["#masthead .ast-above-header"],max_width:o,site_layout:v,shrink:t,sticky_on_device:j,header_style:Q,hide_on_scroll:f}))):(jQuery("#ast-fixed-header").addClass("ast-sticky-shrunk").stop(),"1"!=m&&"on"!=m&&"disabled"!=m&&jQuery("#ast-fixed-header .ast-above-header").hide(),"1"!=y&&"on"!=y&&"disabled"!=y&&jQuery("#ast-fixed-header .main-header-bar").hide(),"1"!=u&&"on"!=u&&"disabled"!=u&&jQuery("#ast-fixed-header .ast-below-header").hide(),"1"!=m&&"on"!=m&&"disabled"!=m&&"1"!=y&&"on"!=y&&"disabled"!=y&&"1"!=u&&"on"!=u&&"disabled"!=u||(t=_?{padding_top:"",padding_bottom:""}:"",jQuery("#ast-fixed-header").astExtSticky({max_width:o,site_layout:v,shrink:t,sticky_on_device:j,header_style:Q,hide_on_scroll:f}))),"mobile"!=j&&"both"!=j||(jQuery("#masthead .main-header-menu-toggle").click(function(e){var t,a;jQuery("#masthead .main-header-menu-toggle").hasClass("toggled")?(i.addClass("ast-sticky-toggled-off"),"none"==s.header_style&&(jQuery("#masthead .main-header-bar").hasClass("ast-sticky-active")||jQuery("#masthead .ast-stick-primary-below-wrapper").hasClass("ast-sticky-active"))&&(t=jQuery(h).height(),a=0,jQuery("#masthead .ast-above-header")&&jQuery("#masthead .ast-above-header").length&&(a=jQuery("#masthead .ast-above-header").height()),"1"==f&&jQuery("html").css({overflow:"hidden"}),("1"!=_||"1"!=y&&"on"!=y&&"disabled"!=y||"1"!=u&&"on"!=u&&"disabled"!=u?jQuery("#masthead .main-header-bar.ast-sticky-active"):jQuery("#masthead .ast-stick-primary-below-wrapper")).css({"max-height":t-a+"px","overflow-y":"auto"}))):(i.addClass("ast-sticky-toggled-off"),jQuery("html").css({overflow:""}),("1"!=_||"1"!=y&&"on"!=y&&"disabled"!=y||"1"!=u&&"on"!=u&&"disabled"!=u?jQuery("#masthead .main-header-bar.ast-sticky-active"):jQuery("#masthead .ast-stick-primary-below-wrapper")).css({"max-height":"","overflow-y":""}))}),jQuery("#ast-fixed-header .main-header-menu-toggle").click(function(e){var t;jQuery("#ast-fixed-header .main-header-menu-toggle").hasClass("toggled")?(t=jQuery(h).height(),"1"==f&&jQuery("html").css({overflow:"auto"}),jQuery("#ast-fixed-header").css({"max-height":t+"px","overflow-y":"auto"})):(jQuery("html").css({overflow:""}),jQuery("#ast-fixed-header").css({"max-height":"","overflow-y":""}))}))})))}(jQuery,window);!function(){var e,t;function o(e){var t=(t=document.body.className).replace(e,"");document.body.className=t}function d(e){e.style.display="block",setTimeout(function(){e.style.opacity=1},1)}function n(e){e.style.opacity="",setTimeout(function(){e.style.display=""},200)}e="iPhone"==navigator.userAgent.match(/iPhone/i)?"iphone":"",t="iPod"==navigator.userAgent.match(/iPod/i)?"ipod":"",document.body.className+=" "+e,document.body.className+=" "+t;for(var a=document.querySelectorAll("a.astra-search-icon:not(.slide-search)"),s=0;a.length>s;s++)a[s].onclick=function(e){var t,a,o,n;if(e.preventDefault(),e=e||window.event,this.classList.contains("header-cover"))for(var s=document.querySelectorAll(".ast-search-box.header-cover"),c=astraAddon.is_header_builder_active||!1,r=0;r<s.length;r++)for(var l=s[r].parentNode.querySelectorAll("a.astra-search-icon"),i=0;i<l.length;i++)l[i]==this&&(d(s[r]),s[r].querySelector("input.search-field").focus(),c?(t=s[r],n=o=a=void 0,document.body.classList.contains("ast-header-break-point")&&(n=document.querySelector(".main-navigation"),a=document.querySelector(".main-header-bar"),o=document.querySelector(".ast-mobile-header-wrap"),null!==a&&null!==n&&(n=n.offsetHeight,a=a.offsetHeight,o=o.offsetHeight,n=n&&!document.body.classList.contains("ast-no-toggle-menu-enable")?parseFloat(n)-parseFloat(a):parseFloat(a),t.parentNode.classList.contains("ast-mobile-header-wrap")&&(n=parseFloat(o)),t.style.maxHeight=Math.abs(n)+"px"))):(a=s[r],t=o=void 0,document.body.classList.contains("ast-header-break-point")&&(t=document.querySelector(".main-navigation"),null!==(o=document.querySelector(".main-header-bar"))&&null!==t&&(t=t.offsetHeight,o=o.offsetHeight,t=t&&!document.body.classList.contains("ast-no-toggle-menu-enable")?parseFloat(t)-parseFloat(o):parseFloat(o),a.style.maxHeight=Math.abs(t)+"px"))));else!this.classList.contains("full-screen")||(e=document.getElementById("ast-seach-full-screen-form")).classList.contains("full-screen")&&(d(e),document.body.className+=" full-screen",e.querySelector("input.search-field").focus())};for(var c=document.querySelectorAll(".ast-search-box .close"),s=0,r=c.length;s<r;++s)c[s].onclick=function(e){e=e||window.event;for(var t=this;;){if(t.parentNode.classList.contains("ast-search-box")){n(t.parentNode),o("full-screen");break}if(t.parentNode.classList.contains("site-header"))break;t=t.parentNode}};document.onkeydown=function(e){if(27==e.keyCode)for(var e=document.getElementById("ast-seach-full-screen-form"),t=(null!=e&&(n(e),o("full-screen")),document.querySelectorAll(".ast-search-box.header-cover")),a=0;a<t.length;a++)n(t[a])},window.addEventListener("resize",function(){if("BODY"===document.activeElement.tagName&&"INPUT"!=document.activeElement.tagName){var e=document.querySelectorAll(".ast-search-box.header-cover");if(!document.body.classList.contains("ast-header-break-point"))for(var t=0;t<e.length;t++)e[t].style.maxHeight="",e[t].style.opacity="",e[t].style.display=""}})}();