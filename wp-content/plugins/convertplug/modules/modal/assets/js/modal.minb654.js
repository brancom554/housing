function cp_column_equilize(){setTimeout(function(){jQuery(".cp-columns-equalized").each(function(){if(jQuery(this).closest(".cp-overlay").hasClass("cp-open")||jQuery(this).closest(".global_modal_container").hasClass("cp-modal-inline")){var t=jQuery(window).width();const i=Array();jQuery(this).children(".cp-column-equalized-center").each(function(){var e=jQuery(this).outerHeight();jQuery(this).addClass("cp-center"),i.push(e)});let e=0;0<jQuery(this).find(".cp-image-container").length&&jQuery(this).find(".cp-highlight").each(function(){e++});var s=parseInt(jQuery(this).css("padding-top"))+parseInt(jQuery(this).css("padding-top")),s=Math.max.apply(Math,i)+s;s-=e,768<t?jQuery(this).css("height",s):jQuery(this).css("height","auto")}})},100)}function CPResponsiveTypoInit(){jQuery(".cp_responsive").each(function(e,t){const s=jQuery(t);let i="";var o;s.hasClass("cp_line_height")||(o=s.css("font-size"),i=s.attr("data-font-size"),i||s.attr("data-font-size-init",o)),s.hasClass("cp_font")||(o=s.css("line-height"),i=s.attr("data-line-height"),i||s.attr("data-line-height-init",o))})}function CPModelHeight(){setTimeout(function(){jQuery(".cp-overlay").parents("body").hasClass("admin_page_cp_customizer")?jQuery(".cp-modal-popup-container").each(function(e,t){const s=jQuery(t),i=s.find(".cp-modal"),o=s.find(".cp-overlay"),a=s.find(".cp-overlay").outerHeight(),c=s.find(".cp-modal-body").outerHeight();jQuery(this).find(".cp-overlay").hasClass("cp-open")&&(jQuery(this).hasClass("cp-inline-modal-container")||(a<c?(i.addClass("cp-modal-exceed"),o.each(function(e,t){jQuery(t).hasClass("cp-open")&&jQuery("html").addClass("cp-exceed-vieport"),jQuery("html").removeClass("cp-window-viewport")})):(i.removeClass("cp-modal-exceed"),jQuery("html").removeClass("cp-exceed-vieport"),i.css("height","")))),set_affiliate_link()}):jQuery(".cp-overlay").each(function(e,t){const s=jQuery(t),i=s.find(".cp-modal"),o=s,a=s.outerHeight(),c=s.find(".cp-modal-body").outerHeight();s.hasClass("cp-open")&&(s.hasClass("cp-inline-modal-container")||(a<c||650<=c?(i.addClass("cp-modal-exceed"),o.each(function(e,t){jQuery(t).hasClass("cp-open")&&jQuery("html").addClass("cp-exceed-viewport"),jQuery("html").removeClass("cp-window-viewport")})):(i.removeClass("cp-modal-exceed"),jQuery("html").removeClass("cp-exceed-vieport"),i.css("height","")))),set_affiliate_link()})},1200)}function set_affiliate_link(c){jQuery(".cp-overlay").each(function(){const e=jQuery(this).find(".cp-modal").hasClass("cp-modal-window-size"),t=jQuery(window).width(),s=jQuery(this).find(".cp-animate-container"),i=jQuery(this),o=jQuery(this).find(".cp-affilate-link");let a=jQuery(this).data("affiliate_setting");jQuery(this).hasClass("ps-container")&&(a=c),"1"===String(a)&&(e?t<=768?(o.addClass("cp-afl-for-smallscreen"),o.appendTo(s)):(o.removeClass("cp-afl-for-smallscreen"),o.appendTo(i),o.css("top","")):t<=768?(o.appendTo(s),o.addClass("cp-afl-for-smallscreen")):(o.removeClass("cp-afl-for-smallscreen"),o.appendTo(i)))})}function cp_color_for_list_tag(){jQuery(".cp-overlay").each(function(){const r=jQuery(this);jQuery(this).find("li").each(function(){if(0===jQuery(this).parents(".cp_social_networks").length&&0===jQuery(this).parents(".custom-html-form").length){var o=jQuery(r).find(".cp-modal-body").attr("class").split(" ")[1];let e=jQuery(this).parents(".cp_responsiv").attr("class");e=(null!==e&&void 0!==e?jQuery(this).parents(".cp_responsive"):jQuery(this).parents("div")).attr("class").split(" ")[0];let t=jQuery(this).find("span").css("color"),s=jQuery(this).parent(),i="";var a=jQuery(this).index()+1,c=jQuery(this).find(".cp_font").css("font-size");s=s[0].nodeName.toLowerCase(),"ul"===s?(i=jQuery(this).closest("ul").css("list-style-type"),"none"===i&&jQuery(this).closest("ul").css("list-style-type","disc")):(i=jQuery(this).closest("ol").css("list-style-type"),"none"===i&&jQuery(this).closest("ol").css("list-style-type","decimal")),jQuery(this).find("span").each(function(){var e=jQuery(this).css("color");0<e.length&&(t=e)});var n;jQuery(".cp-li-color-css-"+a).remove(),jQuery(".cp-li-font-css-"+a).remove(),c&&(n="font-size:"+c,jQuery("head").append('<style class="cp-li-font-css'+a+'">.'+o+" ."+e+" li:nth-child("+a+"){ "+n+"}</style>")),t&&jQuery("head").append('<style class="cp-li-color-css'+a+'">.'+o+" ."+e+" li:nth-child("+a+"){ color: "+t+";}</style>")}})})}function cp_modal_common(){cp_column_equilize(),cp_row_equilize(),addPaddingtoYoutubeFrame()}function cp_form_sep_setting(){jQuery(".cp-overlay").each(function(){if(jQuery(this).find(".cp-modal-body").hasClass("cp-jugaad")){var t=jQuery(this).find(".cp-form-separator").data("form-sep-pos"),s=jQuery(this).find(".cp-form-separator").data("form-sep-part"),i=jQuery(this).find(".cp-form-separator").data("form-sep");"horizontal"===t?"part-of-content"===s?jQuery(this).find(".cp-form-separator").appendTo(jQuery(this).find(".cp-modal-body > .cp-row .cp-content-section")):jQuery(this).find(".cp-form-separator").appendTo(jQuery(this).find(".cp-modal-body > .cp-row .cp-form-section")):jQuery(this).find(".cp-form-separator").appendTo(jQuery(this).find(".cp-modal-body > .cp-row"));let e="";e=("part-of-content"===s?jQuery(this).find(".cp-content-section-overlay"):jQuery(this).find(".cp-form-section-overlay")).css("background-color");t=cp_get_viewbox_svg(i),s=cp_get_svg(i,e,t,s);jQuery(this).find(".cp-form-separator").html(s)}}),jQuery(".cp-inline-modal-container").each(function(){if(jQuery(this).find(".cp-modal-body").hasClass("cp-jugaad")){var t=jQuery(this).find(".cp-form-separator").data("form-sep-pos"),s=jQuery(this).find(".cp-form-separator").data("form-sep-part"),i=jQuery(this).find(".cp-form-separator").data("form-sep");"horizontal"===t?"part-of-content"===s?jQuery(this).find(".cp-form-separator").appendTo(jQuery(this).find(".cp-modal-body > .cp-row .cp-content-section")):jQuery(this).find(".cp-form-separator").appendTo(jQuery(this).find(".cp-modal-body > .cp-row .cp-form-section")):jQuery(this).find(".cp-form-separator").appendTo(jQuery(this).find(".cp-modal-body > .cp-row"));let e="";e=("part-of-content"===s?jQuery(this).find(".cp-content-section-overlay"):jQuery(this).find(".cp-form-section-overlay")).css("background-color");t=cp_get_viewbox_svg(i),s=cp_get_svg(i,e,t,s);jQuery(this).find(".cp-form-separator").html(s)}})}function cp_get_svg(e,t,s,i){let o="",a="",c="";a="waves"===String(e)?'preserveAspectRatio="none"':"",c=0===Number(i)?" right":" left",o+='<svg class="'+e+c+'" '+a+' fill="'+t+'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="100%" height="30" preserveAspectRatio="none" viewBox="'+s+'" enable-background="new 0 0 98.5 1097.757" xml:space="preserve">';let n="",r="";switch(e){case"waves":n='<path d="M0.199945 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c-0.0541102,0 -0.0981929,-0.0430079 -0.0999409,-0.0967008l0 0.0967008 0.0999409 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm2.00004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm-0.1 0.1l-0.200008 0c-0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1 -7.87402e-006,0.0552205 -0.0447874,0.1 -0.1,0.1l0.2 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm-0.400008 0l-0.200008 0c-0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1 -7.87402e-006,0.0552205 -0.0447874,0.1 -0.1,0.1l0.2 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm-0.400008 0l-0.200008 0c-0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1 -7.87402e-006,0.0552205 -0.0447874,0.1 -0.1,0.1l0.2 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm-0.400008 0l-0.200008 0c-0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1 -7.87402e-006,0.0552205 -0.0447874,0.1 -0.1,0.1l0.2 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm-0.400008 0l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1 3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1zm1.90004 -0.1c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.200004 0c7.87402e-006,0.0552205 0.0447874,0.1 0.1,0.1l-0.2 0c0.0552126,0 0.0999921,-0.0447795 0.1,-0.1zm0.200004 0c3.93701e-006,0.0552205 0.0447795,0.1 0.100004,0.1l-0.200008 0c0.0552244,0 0.1,-0.0447795 0.100004,-0.1zm0.199945 0.00329921l0 0.0967008 -0.0999409 0c0.0541102,0 0.0981929,-0.0430079 0.0999409,-0.0967008z"></path>',o+=n;break;case"triangle":n='<path class="fil0" d="M-0 0.333331l4.66666 0 0 -3.93701e-006 -2.33333 0 -2.33333 0 0 3.93701e-006zm0 -0.333331l4.66666 0 0 0.166661 -4.66666 0 0 -0.166661zm4.66666 0.332618l0 -0.165953 -4.66666 0 0 0.165953 1.16162 -0.0826181 1.17171 -0.0833228 1.17171 0.0833228 1.16162 0.0826181z"></path>',o+=n;break;case"big_triangle_right":case"big_triangle_left":r='<polygon xmlns="http://www.w3.org/2000/svg" points="1600,-148 0,-148 428.067,-83.114 "/>',o+=r;break;case"clouds":o+='<path d="M369.112,0L369.112,0H0v63.065l0.032,0.559c21.29,9.47,44.537-15.028,44.537-15.028c61.847,30.504,89.625-27.994,89.625-27.994c18.674,10.285,46.32-0.138,46.32-0.138c52.377,76.808,103.636-5.729,103.636-5.729C336.792,42.609,369.104,0.009,369.112,0c22.006,15.26,55.156,1.585,55.156,1.585c19.499,33.14,52.647,32.087,52.647,32.087c42.064,2.626,60.171-11.971,60.171-11.971c37.22,28.195,71.603-12.78,71.603-12.78c19.771,29.328,55.433,2.259,55.433,2.259c28.254,73.546,83.571,19.989,83.571,19.989c20.144,40.313,79.514,47.483,99.412-9.316c11.586,28.465,39.627,23.784,52.524,20.7c29.937,64.271,88.996,43.13,110.192-25.715c17.479,34.709,54.434,16.065,59.901,0.525c21.138,56.183,74.132,32.033,79.915,30.876c3.375,11.047,21.676,45.967,57.934,41.716c36.262-4.245,43.799-39.459,47.08-58.545c33.985,10.523,54.651-15.098,54.651-15.098c59.06,69.967,101.394-1.052,101.394-1.052c31.481,16.827,55.432,1.582,55.432,1.582c16.566,31.292,41.514,38.394,41.514,38.394c36.49,8.943,62.033-28.718,62.033-28.718c11.555,7.383,30.326,7.909,30.326,7.909V0H369.112z"/>';break;case"curve_center":n='<path class="fil1" d="M4.66666 0l0 7.87402e-006 -3.93701e-006 0c0,0.0920315 -1.04489,0.166665 -2.33333,0.166665 -1.28844,0 -2.33333,-0.0746339 -2.33333,-0.166665l-3.93701e-006 0 0 -7.87402e-006 4.66666 0z"></path>',o+=n;break;case"tilt":r='<polygon points="0,172 0,262 1600,172 "></polygon>',o+=r;break;case"circle_bottom":n='<path d="M0.200004 0c-3.93701e-006,0.0552205 -0.0447795,0.1 -0.100004,0.1 -0.0552126,0 -0.0999921,-0.0447795 -0.1,-0.1l0.200004 0z"></path>',o+=n;break;case"round_split":n='<g xmlns="http://www.w3.org/2000/svg"><g><defs><rect id="SVGID_1_" y="-1" width="1600" height="90"/></defs><clipPath id="SVGID_2_"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#SVGID_1_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_2_)"><g><path d="M1605,89c33,0,60-27,60-60V-7c0-33-27-60-60-60H860c-33,0-60,27-60,60v36c0,33,27,60,60,60H1605z"/></g></g></g><g><defs><rect id="SVGID_3_" y="-1" width="1600" height="90"/></defs><clipPath id="SVGID_4_"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#SVGID_3_" overflow="visible"/></clipPath><g clip-path="url(#SVGID_4_)"><g><path d="M740,89c33,0,60-27,60-60V-7c0-33-27-60-60-60H-5c-33,0-60,27-60,60v36c0,33,27,60,60,60H740z"/></g></g></g></g>',o+=n}return o+="</svg>",o}function cp_get_viewbox_svg(e){let t="";switch(e){case"triangle":t="0 0 4.66666 0.333331";break;case"big_triangle_left":case"big_triangle_right":t="0 -148 1600 90";break;case"waves":t="0 0 6 0.1";break;case"clouds":t="0 0 1600 90";break;case"curve_center":t="0 0 4.66666 0.333331";break;case"tilt":t="0 172 1600 90";break;case"circle_bottom":t="0 0 0.2 0.1";break;case"round_split":t="0 0 1600 90"}return t}function cp_form_sep_top(){setTimeout(function(){jQuery(".cp-overlay, .cp-inline-modal-container").each(function(){if(jQuery(this).find(".cp-modal-body").hasClass("cp-jugaad")){const s=jQuery(this).find(".cp-form-separator");var e=jQuery(this).find(".cp-content-section").outerHeight()-5+"px",t=jQuery(this).find(".cp-form-section").outerHeight()-5+"px";s.hasClass("cp-fs-horizontal")&&(s.hasClass("part-of-content")?s.hasClass("upward")?s.css("bottom",e):s.css("top",e):s.hasClass("upward")?s.css("bottom",t):s.css("top",t))}})},500)}function cp_set_width_svg(){setTimeout(function(){jQuery(".cp-overlay, .cp-inline-modal-container").each(function(){if(jQuery(this).find(".cp-modal-body").hasClass("cp-jugaad")){const t=jQuery(this).find(".cp-form-separator"),s=jQuery(window).width();if(0<t.length){const i=jQuery(this).find(".cp-content-section"),o=jQuery(this).find(".cp-form-section");var e=t.find("svg").outerHeight()+10+"px";t.hasClass("form_bottom")||t.hasClass("img_left_form_bottom")||t.hasClass("img_right_form_bottom")||t.hasClass("form_bottom_img_top")?t.hasClass("part-of-content")?(o.css("padding",e+" 15px 15px 15px"),i.css("padding","15px")):(i.css("padding","15px 15px "+e+" 15px"),o.css("padding","15px")):t.hasClass("form_left")||t.hasClass("form_left_img_botttom")||t.hasClass("form_left_img_top")?768<=s?t.hasClass("part-of-content")?(o.css("padding","15px "+e+" 15px 15px"),i.css("padding","15px")):(i.css("padding","15px 15px 15px "+e),o.css("padding","15px")):t.hasClass("part-of-content")?(o.css("padding","15px 15px "+e+" 15px"),i.css("padding","15px")):(i.css("padding",e+" 15px 15px 15px"),o.css("padding","15px")):768<=s?t.hasClass("part-of-content")?(o.css("padding","15px 15px 15px "+e),i.css("padding","15px")):(i.css("padding","15px "+e+" 15px 15px"),o.css("padding","15px")):t.hasClass("part-of-content")?(o.css("padding",e+" 15px 15px 15px"),i.css("padding","15px")):(i.css("padding","15px 15px "+e+" 15px"),o.css("padding","15px"))}e=jQuery(this).find(".cp-modal-body > .cp-row").outerHeight()+5+"px";(t.hasClass("triangle")||t.hasClass("round_split")||t.hasClass("tilt"))&&(t.hasClass("form_bottom")||t.hasClass("img_left_form_bottom")||t.hasClass("img_right_form_bottom")||t.hasClass("form_bottom_img_top")||!(768<=s)||t.hasClass("tilt")?t.find("svg").attr("width","100%"):t.find("svg").attr("width",e))}})},200)}function form_sep_position(){jQuery(".cp-overlay , .cp-inline-modal-container").each(function(){if(jQuery(this).find(".cp-modal-body").hasClass("cp-jugaad")){const t=jQuery(this).find(".cp-form-separator");var e=jQuery(window).width();t.hasClass("form_bottom")||jQuery(".cp-form-separator").hasClass("form_bottom_img_top")||(e<768?t.hasClass("part-of-form")?(t.removeClass("cp-fs-vertical cp-fs-vertical-form").addClass("cp-fs-horizontal cp-fs-horizontal-form"),jQuery(this).find(".cp-form-separator").appendTo(jQuery(this).find(".cp-form-section"))):(jQuery(this).find(".cp-form-separator").appendTo(jQuery(this).find(".cp-content-section")),t.removeClass("cp-fs-vertical cp-fs-vertical-content").addClass("cp-fs-horizontal cp-fs-horizontal-content")):t.hasClass("img_left_form_bottom")||t.hasClass("img_right_form_bottom")||(jQuery(this).find(".cp-form-separator").appendTo(jQuery(this).find(".cp-modal-body > .cp-row")),jQuery(this).find(".cp-form-separator").hasClass("part-of-form")?jQuery(this).find(".cp-form-separator").removeClass("cp-fs-horizontal cp-fs-horizontal-form cp-fs-vertical-content").addClass("cp-fs-vertical cp-fs-vertical-form"):jQuery(this).find(".cp-form-separator").removeClass("cp-fs-horizontal cp-fs-horizontal-content").addClass("cp-fs-vertical cp-fs-vertical-content"),jQuery(this).find(".cp-form-separator").css({bottom:"",top:""})))}})}function addPaddingtoYoutubeFrame(){var e,t;jQuery(".cp-youtube-container").length&&(jQuery(".cp-modal").hasClass("cp-modal-window-size")?(e=jQuery(".cp-form-container").outerHeight(),t=jQuery(".cp-form-container").css("display"),"none"!==String(t)?jQuery(".cp-youtube-frame").css("padding-bottom",e+"px"):jQuery(".cp-youtube-frame").css("padding-bottom","")):jQuery(".cp-youtube-frame").css("padding-bottom",""))}function cp_row_equilize(){setTimeout(function(){jQuery(".cp-row-equalized-center").each(function(){var e=jQuery(this).closest(".cp-row-equalized-center").outerHeight();jQuery(this).closest(".cp-modal-body").css("min-height").replace("px","")<e?jQuery(this).parent(".cp-row-center").addClass("cp-big-content"):jQuery(this).parent(".cp-row-center").removeClass("cp-big-content")})},200)}function cp_social_responsive(){const s=jQuery(window).width();jQuery(".cp-modal").find(".cp_social_networks").each(function(){var e=jQuery(this).data("column-no");let t="";s<768?(jQuery(this).removeClass("cp_social_networks"),jQuery(this).removeClass(e),t=jQuery(this).attr("class"),jQuery(this).attr("class","cp_social_networks cp_social_autowidth  "+t)):(jQuery(this).removeClass("cp_social_networks"),jQuery(this).removeClass("cp_social_autowidth"),jQuery(this).removeClass(e),t=jQuery(this).attr("class"),jQuery(this).attr("class","cp_social_networks  "+e+" "+t))})}!function(){var o;function e(){jQuery(".cp_responsive").each(function(e,t){const s=jQuery(window).width(),i=jQuery(t),o=i.attr("data-font-size"),a=i.attr("data-font-size-init"),c=i.attr("data-line-height"),n=i.attr("data-line-height-init");let r="",l=i.css("font-size");var p;o?l=o:a&&(l=a),c?r=c:n&&(r=n),s<=800?(i.hasClass("cp-submit")?i.css({"line-height":"1.15em"}):i.css({display:"block","line-height":"1.15em"}),p=i,t=l,"function"==typeof p.fitText&&(p.hasClass("cp-description")||p.hasClass("cp-short-description")||p.hasClass("cp-info-container")?p.fitText(1.7,{minFontSize:"12px",maxFontSize:t}):p.fitText(1.2,{minFontSize:"16px",maxFontSize:t}))):(i.css({display:"","line-height":r}),"function"==typeof i.fitText&&i.fitText(1.2,{minFontSize:l,maxFontSize:l}))})}function t(){jQuery(".cp-overlay ,.cp-modal-inline ").each(function(){var e=jQuery(window).innerWidth(),t=jQuery(this).data("hide-img-on-mobile");t&&(e<=t?jQuery(this).find(".cp-image-container").addClass("cp-hide-image"):jQuery(this).find(".cp-image-container").removeClass("cp-hide-image"))})}function s(){jQuery(".cp-overlay").each(function(){var e;jQuery(this).find(".cp-modal-body").hasClass("cp-optin-to-win")&&(jQuery(window).innerWidth()<=(e=jQuery(this).data("hide-img-on-mobile"))?768<=e&&jQuery(this).find(".cp-text-container").removeClass("col-lg-7 col-md-7 col-sm-7").addClass("col-lg-12 col-md-12 col-sm-12  cp-bigtext-container"):jQuery(this).find(".cp-text-container").removeClass("col-lg-12 col-md-12 col-sm-12  cp-bigtext-container").addClass("col-lg-7 col-md-7 col-sm-7 "))})}function i(){jQuery(".cp-overlay").each(function(){var e;jQuery(this).find(".cp-modal-body").hasClass("cp-direct-download")&&(jQuery(window).width()<=(e=jQuery(this).data("hide-img-on-mobile"))?768<=e&&jQuery(this).find(".cp-text-container").removeClass("col-lg-7 col-md-7 col-sm-7").addClass("col-lg-12 col-md-12 col-sm-12  cp-bigtext-container"):jQuery(this).find(".cp-text-container").removeClass("col-lg-12 col-md-12 col-sm-12  cp-bigtext-container").addClass("col-lg-7 col-md-7 col-sm-7 "))})}function a(){jQuery(".cp-overlay").each(function(){var e;jQuery(this).find(".cp-modal-body").hasClass("cp-free-ebook")&&(jQuery(window).outerWidth()<=(e=jQuery(this).data("hide-img-on-mobile"))?768<=e&&jQuery(this).find(".cp-text-container").removeClass("col-lg-7 col-md-7 col-sm-7").addClass("col-lg-12 col-md-12 col-sm-12  cp-bigtext-container"):jQuery(this).find(".cp-text-container").removeClass("col-lg-12 col-md-12 col-sm-12  cp-bigtext-container").addClass("col-lg-7 col-md-7 col-sm-7 "))})}(o=jQuery).fn.fitText=function(e,t){const s=e||1,i=o.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},t);return this.each(function(){const e=o(this);function t(){e.css("font-size",Math.max(Math.min(e.width()/(10*s),parseFloat(i.maxFontSize)),parseFloat(i.minFontSize)))}t(),o(window).on("resize.fittext orientationchange.fittext",t)})},jQuery(document).ready(function(){setTimeout(function(){CPResponsiveTypoInit(),cp_color_for_list_tag()},500),cp_column_equilize(),t(),s(),i(),a(),cp_form_sep_setting(),form_sep_position(),cp_set_width_svg(),cp_social_responsive()}),jQuery(window).on("resize",function(){CPModelHeight(),e(),jQuery(".cp-onload").each(function(){var e=jQuery(this).data("class-id");const t=jQuery("."+e);t.hasClass("cp-window-size")&&t.windowSize()}),t(),s(),i(),a(),setTimeout(function(){cp_row_equilize()},300),cp_column_equilize(),cp_form_sep_top(),form_sep_position(),set_affiliate_link(),cp_set_width_svg(),cp_social_responsive()}),jQuery(window).on("load",function(){set_affiliate_link()}),jQuery.fn.windowSize=function(){const e=this.find(".cp-content-container"),t=this.find(".cp-modal"),s=this.find(".cp-modal-content"),i=this.find(".cp-modal-body");t.removeAttr("style"),s.removeAttr("style"),e.removeAttr("style"),i.removeAttr("style");var o=jQuery(window).width()+30,a=jQuery(window).height();jQuery(this).find("iframe").css("width",o),e.css({"max-width":o+"px",width:"100%",height:a+"px",padding:"0",margin:"0 auto"}),s.css({"max-width":o+"px",width:"100%"}),t.css({"max-width":o+"px",width:"100%",left:"0",right:"0"}),i.css({"max-width":o+"px",width:"100%",height:a+"px"})}}(jQuery),jQuery(document).on("smile_data_continue_received",function(){addPaddingtoYoutubeFrame()}),jQuery(document).on("smile_data_received",function(e,t){cp_modal_common(t)}),jQuery(document).on("after_cp_column_equilize",function(){jQuery(".cp-overlay, .cp-inline-modal-container").each(function(){var e;jQuery(this).find(".cp-modal-body").hasClass("cp-jugaad")&&jQuery(this).find(".cp-modal-body .cp-form-separator").length&&(e=jQuery(this).find(".cp-modal-body .cp-form-separator").outerHeight(),e=jQuery(this).find(".cp-modal-body .cp-columns-equalized").outerHeight()+e,jQuery(this).find(".cp-modal-body .cp-columns-equalized").css("height",e))})}),function(n){"use strict";jQuery(document).on("click",".cp-overlay-close",function(){if(!jQuery(this).hasClass("do_not_close")){const e=n(this).parents(".cp-overlay"),t=e.find(".cp-tooltip-icon").data("classes");jQuery(document).trigger("closeModal",[e]),jQuery("head").append('<style id="cp-tooltip-close-css">.tip.'+t+"{ display:none; }</style>")}}),jQuery(document).on("click",".cp-overlay",function(){var e;!jQuery(this).hasClass("do_not_close")&&jQuery(this).hasClass("close_btn_nd_overlay")&&(e=jQuery(this),jQuery(document).trigger("closeModal",[e]))}),jQuery(document).on("click",".cp_fs_overlay",function(){var e;!jQuery(this).parents(".cp-overlay").hasClass("do_not_close")&&jQuery(this).parents(".cp-overlay").hasClass("close_btn_nd_overlay")&&(e=jQuery(this).parents(".cp-overlay"),jQuery(document).trigger("closeModal",[e]))}),jQuery(document).on("click",".cp-overlay .cp-modal",function(e){e.stopPropagation()}),jQuery(document).on("smile_customizer_field_change",function(){CPResponsiveTypoInit()}),jQuery(document).on("smile_data_received",function(){CPResponsiveTypoInit()}),jQuery(".wpcf7").on("wpcf7:invalid",function(){cp_column_equilize()}),jQuery(window).on("modalOpen",function(e,t){jQuery("html").addClass("cp-mp-open");var s=t.data("close-btnonload-delay");(s=Math.round(1e3*s))&&setTimeout(function(){t.find(".cp-overlay-close").removeClass("cp-hide-close")},s),cp_column_equilize(),CPModelHeight(),cp_form_sep_top(),cp_set_width_svg(),cp_row_equilize();const i=t.find(".cp-animate-container"),o=i.data("overlay-animation"),a=i.data("disable-animationwidth"),c=jQuery(window).width();(a<=c||void 0===a)&&jQuery(i).addClass("smile-animated "+o),jQuery("#cp-tooltip-close-css").remove(),jQuery(".cp-modal-popup-container").each(function(e,t){const s=jQuery(t),i=s.find(".cp-modal");i.hasClass("cp-modal-exceed")||(i.hasClass("cp-modal-window-size")?jQuery("html").addClass("cp-window-viewport"):jQuery("html").delay(1e3).addClass("cp-custom-viewport"))});s=t.data("close-after");n.idleTimer("destroy"),void 0!==s&&(s*=1e3,jQuery(".cp-overlay").idleTimer({timeout:s,idle:!1})),0<jQuery(".kleo-carousel-features-pager").length&&setTimeout(function(){n(window).trigger("resize")},1500),setTimeout(function(){!function(e){let t=jQuery(".cp-mp-open").height(),s="",i="";if(e.find(".cp-modal-content").attr("data-height",t),e.hasClass("cp-overlay")&&void 0!==e){var o=0;if(!e.hasClass("ps-container")){o++;const a=e.find(".cp-modal-content");o=e.attr("data-modal-id");e.attr("id",o+"-1");o=e.attr("id");if("undefined"!=typeof Ps&&Ps.initialize(document.getElementById(o)),e.hasClass("cp-window-overlay")){i=n(window).height();const c=e.find(".cp-modal-body");t=e.data("height"),s=c.height()+100,t=parseInt(t)-100,i>=s&&(s=i),e.find(".cp-modal").hasClass("cp-modal-exceed")&&(e.find(".cp-overlay-background").css("height",s+"px"),e.find(".cp_fs_overlay").css("height",s+"px"),e.find(".cp-modal-content").css("height",s+"px"))}else t=e.data("height"),t=parseInt(t)-100,s=a.height()+100,i=n(window).height(),i>=s&&(s=i),e.find(".cp-modal").hasClass("cp-modal-exceed")&&e.find(".cp-overlay-background").css("height",s+"px")}}}(t)},1500)}),jQuery(document).ready(function(){jQuery(document).on("keydown",function(e){if(27===e.which){const t=jQuery(".cp-open"),s=t;t.hasClass("close_btn_nd_overlay")&&!t.hasClass("do_not_close")&&jQuery(document).trigger("closeModal",[s])}}),set_affiliate_link(),CPResponsiveTypoInit()})}(jQuery),function(a){"use strict";function o(r){const l=jQuery(r).parents(".cp-modal-body").find(".smile-optin-form"),e=l.serialize(),p=jQuery(r).parents(".cp-animate-container").find(".cp-msg-on-submit"),d=jQuery(r).parents(".cp-animate-container").find(".cp-form-processing"),u=jQuery(r).parents(".global_modal_container "),h=jQuery(r).parents(".cp-animate-container").find(".cp-form-processing-wrap"),m=jQuery(r).parents(".cp-animate-container"),f=u.find(".cp-tooltip-icon").data("classes"),y=u.data("conversion-cookie-time"),g=jQuery(r).parents(".global_modal_container ").hasClass("do_not_close"),j=jQuery(r).parents(".global_modal_container ").data("redirect-lead-data"),Q=jQuery(r).parents(".global_modal_container ").data("redirect-to"),_=jQuery(r).parents(".global_modal_container").data("form-action");let v=jQuery(r).parents(".global_modal_container").data("form-action-time");v=parseInt(1e3*v);var t=u.data("parent-style");let w="";w=void 0!==t?t:u.data("modal-id");let C="",b,x;l.find(".cp-input").each(function(t){const s=jQuery(this);if(!s.hasClass("cp-submit-button")){const i=s.attr("name"),o=s.val();let e=i.replace(/param/gi,function(){return""});e=e.replace("[",""),e=e.replace("]",""),C+=0!==t?"&":"",C+=e+"="+o,!s.attr("required")||(validate_it(s,o)?s.addClass("cp-input-error"):s.removeClass("cp-input-error"))}});let o=0;l.find("select, textarea, input ").each(function(e,t){let s="";if(jQuery(t).prop("required")){var i;let e="";("checkbox"!==jQuery(t).attr("type")||!1!==a(this).prop("checked"))&&jQuery(t).val()||(o++,setTimeout(function(){jQuery(t).addClass("cp-error")},100),e=jQuery(t).attr("name"),s+=e+" is required \n"),jQuery(t).hasClass("cp-email")?(i=jQuery(t).val(),isValidEmailAddress(i)?jQuery(t).removeClass("cp-error"):(setTimeout(function(){jQuery(t).addClass("cp-error")},100),o++,e=jQuery(t).attr("name")||"",s+=e+" is required \n")):jQuery(t).removeClass("cp-error")}}),0===o&&(h.show(),p.fadeOut(120,function(){jQuery(this).show().css({visibility:"hidden"})}),d.hide().css({visibility:"visible"}).fadeIn(100),jQuery.ajax({url:smile_ajax.url,data:e,type:"POST",dataType:"HTML",success(t){y&&createCookie(w,!0,y);const s=JSON.parse(t);let e="",i="";void 0!==s.status&&null!==s.status&&(i=s.status),void 0!==s.cf_response&&null!==s.cf_response&&(x=s.cf_response,jQuery(document).trigger("cp_cf_response_done",[this,u,x])),s.email_status?l.find(".cp-email").removeClass("cp-error"):(setTimeout(function(){l.find(".cp-email").addClass("cp-error")},100),l.find(".cp-email").trigger("focus"));let o=void 0!==s.detailed_msg&&null!==s.detailed_msg?s.detailed_msg:"";if(""!==o&&null!==o&&(o="<h5>Here is More Information:</h5><div class='cp-detailed-message'>"+o+"</div>",o+="<div class='cp-admin-error-notice'>Read How to Fix This, click <a target='_blank' rel='noopener' href='https://www.convertplug.com/plus/docs/something-went-wrong/'>here</a></div>",o+="<div class='cp-go-back'>Go Back</div>",e+='<div class="cp-only-admin-msg">[Only you can see this message]</div>'),s.message=s.message.replace(/\\/g,""),"Invalid Secret Key for Google Recaptcha"===s.detailed_msg&&(setTimeout(function(){l.find(".g-recaptcha").addClass("cp-error")},100),l.find(".g-recaptcha").trigger("focus")),void 0!==s.message&&null!==s.message&&(p.hide().css({visibility:"visible"}).fadeIn(120),e+='<div class="cp-m-'+i+'"><div class="cp-error-msg">'+s.message+"</div>"+o+"</div>",p.html(e),m.addClass("cp-form-submit-"+i)),void 0!==s.action&&null!==s.action&&(d.fadeOut(100,function(){jQuery(this).show().css({visibility:"hidden"})}),p.hide().css({visibility:"visible"}).fadeIn(120),"success"===i)){if(jQuery("head").append('<style class="cp-tooltip-css">.tip.'+f+"{display:none }</style>"),"redirect"===s.action){h.hide();const c=s.url;let e="";e=-1<c.indexOf("?")?"&":"?";let i=c+e+decodeURI(C);if(i=1===Number(j)?i:s.url,"download"!==Q){b=Q;t=window.open(i,"_"+b);""===String(t)&&(document.location.href=i)}else if(""!==i){var a=i.split(",");const n=a.length;let s=1;jQuery.each(a,function(e,t){s+=1,i=t,function(e,t,s){const i=jQuery("<a>"),o=e.lastIndexOf("/")+1,a=e.substr(o);i.attr("href",e),i.attr("download",a),i.text("cpro_anchor_link"),i.addClass("cplus_dummy_anchor"),i.attr("target","_blank"),jQuery("body").append(i),jQuery(".cplus_dummy_anchor")[0].click(),setTimeout(function(){jQuery(".cplus_dummy_anchor").remove()},500),t===s&&(jQuery("html").removeClass("cp-custom-viewport"),jQuery("html").removeClass("cp-exceed-vieport cp-window-viewport"))}(i,s,n)})}u.removeClass("cp-open"),jQuery(document).trigger("closeModal",[u])}else{if(h.show(),0<jQuery(r).find("a").length){a=jQuery(r).find("a").attr("href");let e=jQuery(r).find("a").attr("target");""!==e&&void 0!==e||(e="_self"),""===a&&"#"===a||window.open(a,e)}"disappear"===_?(u.removeClass("cp-hide-inline-style"),setTimeout(function(){u.hasClass("cp-modal-inline")&&u.addClass("cp-hide-inline-style"),jQuery(document).trigger("closeModal",[u])},v)):"reappear"===_&&setTimeout(function(){p.empty(),h.css({display:"none"}),p.removeAttr("style"),d.removeAttr("style"),l.trigger("reset")},v)}g&&!u.hasClass("cp-do-not-close-inline")&&setTimeout(function(){jQuery(document).trigger("closeModal",[u])},3e3)}},error(){h.hide(),d.fadeOut(100,function(){jQuery(this).show().css({visibility:"hidden"})})}}))}jQuery(document).ready(function(){jQuery(".cp-modal-popup-container").find(".smile-optin-form").each(function(e,i){jQuery(i).find("input").keypress(function(e){13===e.which&&(e.preventDefault(),jQuery(this).parents(".cp-animate-container").hasClass("cp-form-submit-success")||o(this))}),jQuery(i).find(".btn-subscribe").on("click",function(e){var t,s=jQuery(this).parents(".global_modal_container").data("modal-id");jQuery(i).find(".cp-input").removeClass("cp-error"),jQuery(this).hasClass("cp-disabled")||(o(this),jQuery(document).trigger("cp_conversion_done",[this,s]),t=jQuery(this).attr("data-redirect-link")||"",s=jQuery(this).attr("data-redirect-link-target")||"_blank","undefined"!==t&&""!==t&&(navigator.userAgent.toLowerCase().match(/(ipad|iphone)/)?document.location=t:window.open(t,s))),e.preventDefault()}),jQuery(i).find(".btn-subscribe").keypress(function(e){13===e.which&&(e.preventDefault(),jQuery(this).parents(".cp-animate-container").hasClass("cp-form-submit-success")||o(this))})})})}(jQuery);