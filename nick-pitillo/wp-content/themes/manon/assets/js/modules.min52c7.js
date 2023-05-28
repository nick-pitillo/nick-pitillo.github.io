!(function (e) {
  "use strict";
  function t() {
    (edgtf.scroll = e(window).scrollTop()),
      (function () {
        var e =
            /Chrome/.test(navigator.userAgent) &&
            /Google Inc/.test(navigator.vendor),
          t =
            /Safari/.test(navigator.userAgent) &&
            /Apple Computer/.test(navigator.vendor),
          n = -1 < navigator.userAgent.toLowerCase().indexOf("firefox"),
          o = window.navigator.userAgent.indexOf("MSIE ");
        e && edgtf.body.addClass("edgtf-chrome");
        t && edgtf.body.addClass("edgtf-safari");
        n && edgtf.body.addClass("edgtf-firefox");
        (0 < o || navigator.userAgent.match(/Trident.*rv\:11\./)) &&
          edgtf.body.addClass("edgtf-ms-explorer");
        /Edge\/\d./i.test(navigator.userAgent) &&
          edgtf.body.addClass("edgtf-edge");
      })(),
      edgtf.body.hasClass("edgtf-dark-header") &&
        (edgtf.defaultHeaderStyle = "edgtf-dark-header"),
      edgtf.body.hasClass("edgtf-light-header") &&
        (edgtf.defaultHeaderStyle = "edgtf-light-header");
  }
  function n() {}
  function o() {
    (edgtf.windowWidth = e(window).width()),
      (edgtf.windowHeight = e(window).height());
  }
  function a() {
    edgtf.scroll = e(window).scrollTop();
  }
  switch (
    ((window.edgtf = {}),
    (edgtf.modules = {}),
    (edgtf.scroll = 0),
    (edgtf.window = e(window)),
    (edgtf.document = e(document)),
    (edgtf.windowWidth = e(window).width()),
    (edgtf.windowHeight = e(window).height()),
    (edgtf.body = e("body")),
    (edgtf.html = e("html, body")),
    (edgtf.htmlEl = e("html")),
    (edgtf.menuDropdownHeightSet = !1),
    (edgtf.defaultHeaderStyle = ""),
    (edgtf.minVideoWidth = 1500),
    (edgtf.videoWidthOriginal = 1280),
    (edgtf.videoHeightOriginal = 720),
    (edgtf.videoRatio = 1.61),
    (edgtf.edgtfOnDocumentReady = t),
    (edgtf.edgtfOnWindowLoad = n),
    (edgtf.edgtfOnWindowResize = o),
    (edgtf.edgtfOnWindowScroll = a),
    e(document).ready(t),
    e(window).on("load", n),
    e(window).resize(o),
    e(window).scroll(a),
    !0)
  ) {
    case edgtf.body.hasClass("edgtf-grid-1300"):
      edgtf.boxedLayoutWidth = 1350;
      break;
    case edgtf.body.hasClass("edgtf-grid-1200"):
      edgtf.boxedLayoutWidth = 1250;
      break;
    case edgtf.body.hasClass("edgtf-grid-1000"):
      edgtf.boxedLayoutWidth = 1050;
      break;
    case edgtf.body.hasClass("edgtf-grid-800"):
      edgtf.boxedLayoutWidth = 850;
      break;
    default:
      edgtf.boxedLayoutWidth = 1150;
  }
  (edgtf.gridWidth = function () {
    var e = 1100;
    switch (!0) {
      case edgtf.body.hasClass("edgtf-grid-1300") && 1400 < edgtf.windowWidth:
        e = 1300;
        break;
      case edgtf.body.hasClass("edgtf-grid-1200") && 1300 < edgtf.windowWidth:
      case edgtf.body.hasClass("edgtf-grid-1000") && 1200 < edgtf.windowWidth:
        e = 1200;
        break;
      case edgtf.body.hasClass("edgtf-grid-800") && 1024 < edgtf.windowWidth:
        e = 800;
    }
    return e;
  }),
    (edgtf.transitionEnd = (function () {
      var e,
        t = document.createElement("transitionDetector"),
        n = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          transition: "transitionend",
        };
      for (e in n) if (void 0 !== t.style[e]) return n[e];
    })()),
    (edgtf.animationEnd = (function () {
      var e,
        t = document.createElement("animationDetector"),
        n = {
          animation: "animationend",
          OAnimation: "oAnimationEnd",
          MozAnimation: "animationend",
          WebkitAnimation: "webkitAnimationEnd",
        };
      for (e in n) if (void 0 !== t.style[e]) return n[e];
    })());
})(jQuery),
  (function (H) {
    "use strict";
    var e = {};
    function t() {
      var e;
      function t() {
        H(this)
          .children()
          .css({
            opacity: 1,
            transform: "rotate(0deg)",
            "stroke-dashoffset": 0,
            transition: "1s cubic-bezier(0.645, 0.045, 0.355, 1) .1s",
          });
      }
      h().init(),
        l().init(),
        H("#edgtf-back-to-top").on("click", function (e) {
          e.preventDefault(),
            edgtf.html.animate(
              { scrollTop: 0 },
              edgtf.window.scrollTop() / 4,
              "easeInOutQuint"
            );
        }),
        edgtf.window.scroll(function () {
          var e = H(this).scrollTop(),
            t = H(this).height(),
            t = 0 < e ? e + t / 2 : 1;
          f(t < 1e3 ? "off" : "on");
        }),
        g(),
        T(),
        D(),
        v(),
        (e = H(".edgtf-preload-background")).length &&
          e.each(function () {
            var e,
              t,
              n = H(this);
            "" !== n.css("background-image") &&
            "none" !== n.css("background-image")
              ? (t = (t = (t = n.attr("style")).match(
                  /url\(["']?([^'")]+)['"]?\)/
                ))
                  ? t[1]
                  : "") &&
                (((e = new Image()).src = t),
                H(e).load(function () {
                  n.removeClass("edgtf-preload-background");
                }))
              : H(window).on("load", function () {
                  n.removeClass("edgtf-preload-background");
                });
          }),
        c(),
        (e = H(".edgtf-search-post-type")).length &&
          e.each(function () {
            var e = H(this),
              t = e.find(".edgtf-post-type-search-field"),
              o = e.siblings(".edgtf-post-type-search-results"),
              a = e.find(".edgtf-search-loading"),
              d = e.find(".edgtf-search-icon");
            a.addClass("edgtf-hidden");
            var n,
              i = e.data("post-type");
            t.on("keyup paste", function () {
              var t = H(this);
              t.attr("autocomplete", "off"),
                a.removeClass("edgtf-hidden"),
                d.addClass("edgtf-hidden"),
                clearTimeout(n),
                (n = setTimeout(function () {
                  var e = t.val();
                  e.length < 3
                    ? (o.html(""),
                      o.fadeOut(),
                      a.addClass("edgtf-hidden"),
                      d.removeClass("edgtf-hidden"))
                    : H.ajax({
                        type: "POST",
                        data: {
                          action: "manon_edge_search_post_types",
                          term: e,
                          postType: i,
                        },
                        url: edgtfGlobalVars.vars.edgtfAjaxUrl,
                        success: function (e) {
                          e = JSON.parse(e);
                          "success" === e.status &&
                            (a.addClass("edgtf-hidden"),
                            d.removeClass("edgtf-hidden"),
                            o.html(e.data.html),
                            o.fadeIn());
                        },
                        error: function (e, t, n) {
                          console.log("Status: " + t),
                            console.log("Error: " + n),
                            a.addClass("edgtf-hidden"),
                            d.removeClass("edgtf-hidden"),
                            o.fadeOut();
                        },
                      });
                }, 500));
            }),
              t.on("focusout", function () {
                a.addClass("edgtf-hidden"),
                  d.removeClass("edgtf-hidden"),
                  o.fadeOut();
              });
          }),
        (e = H(".edgtf-dashboard-form")).length &&
          e.each(function () {
            var e = H(this),
              n = e.find("button.edgtf-dashboard-form-button"),
              o = n.data("updating-text"),
              a = n.data("updated-text"),
              d = e.data("action");
            e.on("submit", function (e) {
              e.preventDefault();
              var t = n.html(),
                e = H(this).find(".edgtf-dashboard-gallery-upload-hidden"),
                s = [];
              n.html(o);
              var r = new FormData();
              e.each(function () {
                var e,
                  t,
                  n = H(this),
                  o = n.attr("name"),
                  a = n.attr("id"),
                  d = n[0].files;
                (e =
                  -1 < o.indexOf("[")
                    ? ((e =
                        o.substring(0, o.indexOf("[")) + "_edgtf_regarray_"),
                      (t = a.indexOf("[")),
                      (n = a.indexOf("]")),
                      (n = a.substring(t + 1, n)),
                      s.push(e),
                      e + n + "_")
                    : o + "_edgtf_reg_"),
                  0 === d.length &&
                    r.append(
                      e,
                      new File([""], "edgtf-dummy-file.txt", {
                        type: "text/plain",
                      })
                    );
                for (var i = 0; i < d.length; i++)
                  1 === d[i].name.match(/\./g).length &&
                    -1 !==
                      H.inArray(d[i].type, [
                        "image/png",
                        "image/jpg",
                        "image/jpeg",
                        "application/pdf",
                      ]) &&
                    r.append(e + i, d[i]);
              }),
                r.append("action", d);
              e = H(this).serialize();
              return (
                r.append("data", e),
                H.ajax({
                  type: "POST",
                  data: r,
                  contentType: !1,
                  processData: !1,
                  url: edgtfGlobalVars.vars.edgtfAjaxUrl,
                  success: function (e) {
                    e = JSON.parse(e);
                    edgtf.modules.socialLogin.edgtfRenderAjaxResponseMessage(e),
                      "success" === e.status
                        ? (n.html(a), (window.location = e.redirect))
                        : n.html(t);
                  },
                }),
                !1
              );
            });
          }),
        u(),
        (function () {
          {
            var o, e, t;
            edgtf.body.hasClass("edgtf-smooth-page-transitions") &&
              (edgtf.body.hasClass("edgtf-smooth-page-transitions-preloader") &&
                ((o = H(
                  "body > .edgtf-smooth-transition-loader.edgtf-mimic-ajax"
                )),
                (e = H("#edgtf-main-rev-holder")),
                (t = function (t, e, n) {
                  (t = t || 600),
                    (n = n || "easeOutSine"),
                    o.delay((e = e || 0)).fadeOut(t, n),
                    H(window).on("bind", "pageshow", function (e) {
                      e.originalEvent.persisted && o.fadeOut(t, n);
                    });
                }),
                e.length
                  ? e
                      .find(".rev_slider")
                      .on("revolution.slide.onloaded", function () {
                        t();
                      })
                  : H(window).on("load", function () {
                      t();
                    })),
              window.addEventListener("pageshow", function (e) {
                (e.persisted ||
                  (void 0 !== window.performance &&
                    2 === window.performance.navigation.type)) &&
                  window.location.reload();
              }),
              edgtf.body.hasClass("edgtf-smooth-page-transitions-fadeout") &&
                H("a").on("click", function (e) {
                  var t = H(this);
                  ((t.parents(".edgtf-shopping-cart-dropdown").length ||
                    t.parent(".product-remove").length) &&
                    t.hasClass("remove")) ||
                    (1 === e.which &&
                      0 <= t.attr("href").indexOf(window.location.host) &&
                      void 0 === t.data("rel") &&
                      void 0 === t.attr("rel") &&
                      !t.hasClass("lightbox-active") &&
                      (void 0 === t.attr("target") ||
                        "_self" === t.attr("target")) &&
                      t.attr("href").split("#")[0] !==
                        window.location.href.split("#")[0] &&
                      (e.preventDefault(),
                      H(".edgtf-wrapper-inner").fadeOut(
                        600,
                        "easeOutSine",
                        function () {
                          window.location = t.attr("href");
                        }
                      )));
                }));
          }
        })(),
        (e = H(".edgtf-svg-loading-fx").length),
        Modernizr.touch ||
          (e &&
            (function () {
              var e = H(".edgtf-theme-svg");
              e.each(function () {
                var e = H(this).find("circle");
                e.data("length", 2 * e[0].getAttribute("r") * Math.PI).css({
                  opacity: 0,
                  transform: "rotate(-20deg)",
                  "transform-origin": "50% 50%",
                  "stroke-dasharray": e.data("length"),
                  "stroke-dashoffset": e.data("length"),
                });
              }),
                e.appear(t, {
                  accX: 0,
                  accY: edgtfGlobalVars.vars.edgtfElementAppearAmount,
                });
            })()),
        (function () {
          var e = H("#edgtf-manon-loading-title");
          {
            var t, n, o;
            e.length &&
              ((t = !!edgtf.body.hasClass("edgtf-ms-explorer")),
              (n = function () {
                d(),
                  edgtf.body.addClass("edgtf-loading-title-done"),
                  H(document).trigger("edgtfTitleDone");
              }),
              (o = function () {
                e.addClass("edgtf-to-top").one(edgtf.transitionEnd, n);
              }),
              a(),
              e.addClass("edgtf-load"),
              t && o(),
              e.one(edgtf.animationEnd, o));
          }
        })();
    }
    function n() {
      z(),
        p().init(),
        H(".edgtf-team-social-wrapper").each(function () {
          H(this).on("touchstart touchend", function () {
            H(this).toggleClass("mhover");
          });
        }),
        H(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/global",
            function () {
              z();
            }
          );
        }),
        H(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_clients_carousel.default",
            function () {
              v();
            }
          );
        }),
        H(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_image_gallery.default",
            function () {
              u(), v();
            }
          );
        }),
        H(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_team_carousel.default",
            function () {
              v();
            }
          );
        }),
        H(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_video_button.default",
            function () {
              c();
            }
          );
        }),
        H(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_blog_slider.default",
            function () {
              v();
            }
          );
        }),
        H(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_product_list.default",
            function () {
              u();
            }
          );
        }),
        H(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_product_list_carousel.default",
            function () {
              v();
            }
          );
        }),
        H(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_portfolio_list.default",
            function () {
              u();
            }
          );
        }),
        H(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_instagram_list.default",
            function () {
              v();
            }
          );
        });
    }
    function o() {
      u(), T();
    }
    function a() {
      window.addEventListener &&
        window.addEventListener("wheel", i, { passive: !1 }),
        (document.onkeydown = s);
    }
    function d() {
      window.removeEventListener &&
        window.removeEventListener("wheel", i, { passive: !1 }),
        (window.onmousewheel =
          document.onmousewheel =
          document.onkeydown =
            null);
    }
    function i(e) {
      r(e);
    }
    function s(e) {
      for (var t = [37, 38, 39, 40], n = t.length; n--; )
        if (e.keyCode === t[n]) return void r(e);
    }
    function r(e) {
      (e = e || window.event).preventDefault && e.preventDefault(),
        (e.returnValue = !1);
    }
    ((edgtf.modules.common = e).edgtfFluidVideo = D),
      (e.edgtfEnableScroll = d),
      (e.edgtfDisableScroll = a),
      (e.edgtfOwlSlider = v),
      (e.edgtfInitParallax = z),
      (e.edgtfInitSelfHostedVideoPlayer = g),
      (e.edgtfSelfHostedVideoSize = T),
      (e.edgtfPrettyPhoto = c),
      (e.edgtfStickySidebarWidget = p),
      (e.getLoadMoreData = function (e) {
        var t,
          n = e.data(),
          o = {};
        for (t in n)
          n.hasOwnProperty(t) &&
            void 0 !== n[t] &&
            !1 !== n[t] &&
            (o[t] = n[t]);
        return o;
      }),
      (e.setLoadMoreAjaxData = function (e, t) {
        var n,
          o = { action: t };
        for (n in e)
          e.hasOwnProperty(n) &&
            void 0 !== e[n] &&
            !1 !== e[n] &&
            (o[n] = e[n]);
        return o;
      }),
      (e.setFixedImageProportionSize = m),
      (e.edgtfInitPerfectScrollbar = function () {
        var n = { wheelSpeed: 0.6, suppressScrollX: !0 };
        return {
          init: function (e) {
            var t;
            e.length &&
              ((t = new PerfectScrollbar(e[0], n)),
              H(window).resize(function () {
                t.update();
              }));
          },
        };
      }),
      (e.edgtfOnDocumentReady = t),
      (e.edgtfOnWindowLoad = n),
      (e.edgtfOnWindowResize = o),
      H(document).ready(t),
      H(window).on("load", n),
      H(window).resize(o);
    var l = function () {
      function a(t) {
        H(
          ".edgtf-main-menu, .edgtf-mobile-nav, .edgtf-fullscreen-menu, .edgtf-vertical-menu, .edgtf-vertical-right-menu"
        ).each(function () {
          var e = H(this);
          t.parents(e).length &&
            (e.find(".edgtf-active-item").removeClass("edgtf-active-item"),
            t.parent().addClass("edgtf-active-item"),
            e.find("a").removeClass("current"));
        });
      }
      var t = function (e) {
          var t = H(
              ".edgtf-main-menu a, .edgtf-mobile-nav a, .edgtf-fullscreen-menu a, .edgtf-vertical-menu a, .edgtf-vertical-right-menu a"
            ),
            n = e,
            e = "" !== n ? H('[data-edgtf-anchor="' + n + '"]') : "";
          if ("" !== n && 0 < e.length) {
            (e = e.offset().top),
              (e = e - o(e) - edgtfGlobalVars.vars.edgtfAddForAdminBar);
            return (
              t.length &&
                t.each(function () {
                  var e = H(this);
                  -1 < e.attr("href").indexOf(n) && a(e);
                }),
              edgtf.html
                .stop()
                .animate({ scrollTop: Math.round(e) }, 1e3, function () {
                  history.pushState && history.pushState(null, "", "#" + n);
                }),
              !1
            );
          }
        },
        o = function (e) {
          "edgtf-sticky-header-on-scroll-down-up" ===
            edgtf.modules.stickyHeader.behaviour &&
            (edgtf.modules.stickyHeader.isStickyVisible =
              e > edgtf.modules.header.stickyAppearAmount),
            "edgtf-sticky-header-on-scroll-up" ===
              edgtf.modules.stickyHeader.behaviour &&
              e > edgtf.scroll &&
              (edgtf.modules.stickyHeader.isStickyVisible = !1);
          e = edgtf.modules.stickyHeader.isStickyVisible
            ? edgtfGlobalVars.vars.edgtfStickyHeaderTransparencyHeight
            : edgtfPerPageVars.vars.edgtfHeaderTransparencyHeight;
          return (e = edgtf.windowWidth < 1025 ? 0 : e);
        };
      return {
        init: function () {
          H("[data-edgtf-anchor]").length &&
            (edgtf.document.on(
              "click",
              ".edgtf-main-menu a, .edgtf-fullscreen-menu a, .edgtf-btn, .edgtf-anchor, .edgtf-mobile-nav a, .edgtf-vertical-menu a, .edgtf-vertical-right-menu a",
              function () {
                var e = H(this),
                  t = e.prop("hash").split("#")[1],
                  n = "" !== t ? H('[data-edgtf-anchor="' + t + '"]') : "";
                if ("" !== t && 0 < n.length) {
                  var n = n.offset().top,
                    n = n - o(n) - edgtfGlobalVars.vars.edgtfAddForAdminBar;
                  return (
                    a(e),
                    edgtf.html
                      .stop()
                      .animate({ scrollTop: Math.round(n) }, 1e3, function () {
                        history.pushState &&
                          history.pushState(null, "", "#" + t);
                      }),
                    !1
                  );
                }
              }
            ),
            (function () {
              var t,
                e = H("[data-edgtf-anchor]"),
                n = window.location.href.split("#")[0];
              "/" !== n.substr(-1) && (n += "/"),
                e.waypoint(
                  function (e) {
                    "down" === e &&
                      ((t = (
                        0 < H(this.element).length ? H(this.element) : H(this)
                      ).data("edgtf-anchor")),
                      a(H("a[href='" + n + "#" + t + "']")));
                  },
                  { offset: "50%" }
                ),
                e.waypoint(
                  function (e) {
                    "up" === e &&
                      ((t = (
                        0 < H(this.element).length ? H(this.element) : H(this)
                      ).data("edgtf-anchor")),
                      a(H("a[href='" + n + "#" + t + "']")));
                  },
                  {
                    offset: function () {
                      return -(H(this.element).outerHeight() - 150);
                    },
                  }
                );
              var o = H("div[data-edgtf-anchor], section[data-edgtf-anchor]"),
                d = H(
                  ".edgtf-main-menu, .edgtf-mobile-nav, .edgtf-fullscreen-menu, .edgtf-vertical-menu, .edgtf-vertical-right-menu"
                ).find(".edgtf-anchor");
              o.length &&
                d.length &&
                (d.first().addClass("edgtf-active-item"),
                H(window).scroll(function () {
                  o.each(function (e) {
                    var t = H(this),
                      n = t.offset().top,
                      o = t.outerHeight(),
                      a = edgtf.windowHeight / 5,
                      t = 0;
                    0 === edgtf.scroll
                      ? d
                          .removeClass("edgtf-active-item")
                          .first()
                          .addClass("edgtf-active-item")
                      : n <= edgtf.scroll + a && n + o >= edgtf.scroll + a
                      ? t !== e &&
                        ((t = e),
                        d
                          .removeClass("edgtf-active-item")
                          .eq(e)
                          .addClass("edgtf-active-item"))
                      : edgtf.scroll + edgtf.windowHeight ==
                          edgtf.document.height() &&
                        d
                          .removeClass("edgtf-active-item")
                          .last()
                          .addClass("edgtf-active-item");
                  });
                }));
            })(),
            H(window).on("load", function () {
              var e;
              "" !== (e = window.location.hash.split("#")[1]) &&
                0 < H('[data-edgtf-anchor="' + e + '"]').length &&
                t(e);
            }));
        },
      };
    };
    function f(e) {
      var t = H("#edgtf-back-to-top");
      t.removeClass("off on"),
        "on" === e ? t.addClass("on") : t.addClass("off");
    }
    function g() {
      var e = H(".edgtf-self-hosted-video");
      e.length && e.mediaelementplayer({ audioWidth: "100%" });
    }
    function T() {
      var e = H(".edgtf-self-hosted-video-holder .edgtf-video-wrap");
      e.length &&
        e.each(function () {
          var e = H(this),
            t = e.closest(".edgtf-self-hosted-video-holder").outerWidth(),
            n = t / edgtf.videoRatio;
          navigator.userAgent.match(
            /(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/
          ) && (e.parent().width(t), e.parent().height(n)),
            e.width(t),
            e.height(n),
            e.find("video, .mejs-overlay, .mejs-poster").width(t),
            e.find("video, .mejs-overlay, .mejs-poster").height(n);
        });
    }
    function D() {
      fluidvids.init({
        selector: ["iframe:not(.elementor-video-iframe)"],
        players: ["www.youtube.com", "player.vimeo.com"],
      });
    }
    function c() {
      var e =
        '<div class="pp_pic_holder">                         <div class="ppt">&nbsp;</div>                         <div class="pp_top">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                         <div class="pp_content_container">                             <div class="pp_left">                             <div class="pp_right">                                 <div class="pp_content">                                     <div class="pp_loaderIcon"></div>                                     <div class="pp_fade">                                         <a href="#" class="pp_expand" title="' +
        edgtfGlobalVars.vars.ppExpand +
        '">' +
        edgtfGlobalVars.vars.ppExpand +
        '</a>                                         <div class="pp_hoverContainer">                                             <a class="pp_next" href="#"><span class="fa fa-angle-right"></span></a>                                             <a class="pp_previous" href="#"><span class="fa fa-angle-left"></span></a>                                         </div>                                         <div id="pp_full_res"></div>                                         <div class="pp_details">                                             <div class="pp_nav">                                                 <a href="#" class="pp_arrow_previous">' +
        edgtfGlobalVars.vars.ppPrev +
        '</a>                                                 <p class="currentTextHolder">0/0</p>                                                 <a href="#" class="pp_arrow_next">' +
        edgtfGlobalVars.vars.ppNext +
        '</a>                                             </div>                                             <p class="pp_description"></p>                                             {pp_social}                                             <a class="pp_close" href="#">' +
        edgtfGlobalVars.vars.ppClose +
        '</a>                                         </div>                                     </div>                                 </div>                             </div>                             </div>                         </div>                         <div class="pp_bottom">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                     </div>                     <div class="pp_overlay"></div>';
      H("a[data-rel^='prettyPhoto']").prettyPhoto({
        hook: "data-rel",
        animation_speed: "normal",
        slideshow: !1,
        autoplay_slideshow: !1,
        opacity: 0.8,
        show_title: !0,
        allow_resize: !0,
        horizontal_padding: 0,
        default_width: 960,
        default_height: 540,
        counter_separator_label: "/",
        theme: "pp_default",
        hideflash: !1,
        wmode: "opaque",
        autoplay: !0,
        modal: !1,
        overlay_gallery: !1,
        keyboard_shortcuts: !0,
        deeplinking: !1,
        custom_markup: "",
        social_tools: !1,
        markup: e,
      });
    }
    function u() {
      var e = H(".edgtf-grid-masonry-list");
      e.length &&
        e.each(function () {
          var e = H(this),
            t = e.find(".edgtf-masonry-list-wrapper"),
            n = e.find(".edgtf-masonry-grid-sizer").width();
          t.waitForImages(function () {
            t.isotope({
              layoutMode: "packery",
              itemSelector: ".edgtf-item-space",
              percentPosition: !0,
              masonry: {
                columnWidth: ".edgtf-masonry-grid-sizer",
                gutter: ".edgtf-masonry-grid-gutter",
              },
            }),
              (e.find(".edgtf-fixed-masonry-item").length ||
                e.hasClass("edgtf-fixed-masonry-items")) &&
                m(t, t.find(".edgtf-item-space"), n, !0),
              setTimeout(function () {
                z();
              }, 600),
              t.isotope("layout").css("opacity", 1);
          });
        });
    }
    function m(e, t, n, o) {
      var a, d;
      (!e.hasClass("edgtf-masonry-images-fixed") && !0 !== o) ||
        ((d = n - 2 * (a = parseInt(t.css("paddingLeft"), 10))),
        (o = e.find(".edgtf-masonry-size-small")),
        (n = e.find(".edgtf-masonry-size-large-width")),
        (t = e.find(".edgtf-masonry-size-large-height")),
        (e = e.find(".edgtf-masonry-size-large-width-height")),
        o.css("height", d),
        t.css("height", Math.round(2 * (d + a))),
        680 < edgtf.windowWidth
          ? (n.css("height", d), e.css("height", Math.round(2 * (d + a))))
          : (n.css("height", Math.round(d / 2)), e.css("height", d)));
    }
    var h = function () {
      var e = H(".edgtf-icon-has-hover");
      return {
        init: function () {
          e.length &&
            e.each(function () {
              var e, t, n, o;
              void 0 !== (e = H(this)).data("hover-color") &&
                ((t = function (e) {
                  e.data.icon.css("color", e.data.color);
                }),
                (n = e.data("hover-color")),
                (o = e.css("color")),
                "" !== n &&
                  (e.on("mouseenter", { icon: e, color: n }, t),
                  e.on("mouseleave", { icon: e, color: o }, t)));
            });
        },
      };
    };
    function z() {
      var e = H(".edgtf-parallax-row-holder");
      e.length &&
        e.each(function () {
          var e,
            t,
            n = H(this),
            o = n.find(".edgtf-parallax-helper-holder");
          (o =
            ((t = o.length
              ? ((e = o.data("parallax-bg-image")),
                0.4 * o.data("parallax-bg-speed"))
              : ((e = n.data("parallax-bg-image")),
                0.4 * n.data("parallax-bg-speed"))),
            0)),
            void 0 !== n.data("parallax-bg-height") &&
              !1 !== n.data("parallax-bg-height") &&
              (o = parseInt(n.data("parallax-bg-height"))),
            n.css({ "background-image": "url(" + e + ")" }),
            0 < o && n.css({ "min-height": o + "px", height: o + "px" }),
            n.parallax("50%", t);
        });
    }
    function p() {
      var d,
        i,
        e = H(".edgtf-widget-sticky-sidebar"),
        t = H(".edgtf-page-header"),
        r = t.length ? t.outerHeight() : 0,
        s = 0,
        l = 0,
        f = [];
      function n() {
        f.length &&
          H.each(f, function (e) {
            f[e].object;
            var t,
              n = f[e].offset,
              o = f[e].position,
              a = f[e].height,
              d = f[e].width,
              i = f[e].sidebarHolder,
              s = f[e].sidebarHolderHeight;
            edgtf.body.hasClass("edgtf-fixed-on-scroll")
              ? (t = H(".edgtf-fixed-wrapper.fixed")).length &&
                (r = t.outerHeight() + edgtfGlobalVars.vars.edgtfAddForAdminBar)
              : edgtf.body.hasClass("edgtf-no-behavior") &&
                (r = edgtfGlobalVars.vars.edgtfAddForAdminBar),
              1024 < edgtf.windowWidth && i.length
                ? ((e = -(o - r)),
                  (t = a - o - 40),
                  (o = s + n - r - o - edgtfGlobalVars.vars.edgtfTopBarHeight),
                  edgtf.scroll >= n - r && a < s
                    ? (i.hasClass("edgtf-sticky-sidebar-appeared")
                        ? i.css({ top: e + "px" })
                        : i
                            .addClass("edgtf-sticky-sidebar-appeared")
                            .css({
                              position: "fixed",
                              top: e + "px",
                              width: d,
                              "margin-top": "-10px",
                            })
                            .animate({ "margin-top": "0" }, 200),
                      edgtf.scroll + t >= o
                        ? ((t = s - t + e - r),
                          i.css({ position: "absolute", top: t + "px" }))
                        : i.hasClass("edgtf-sticky-sidebar-appeared") &&
                          i.css({ position: "fixed", top: e + "px" }))
                    : i
                        .removeClass("edgtf-sticky-sidebar-appeared")
                        .css({ position: "relative", top: "0", width: "auto" }))
                : i
                    .removeClass("edgtf-sticky-sidebar-appeared")
                    .css({ position: "relative", top: "0", width: "auto" });
          });
      }
      return {
        init: function () {
          e.length &&
            e.each(function () {
              var e = H(this),
                t = e.parents("aside.edgtf-sidebar"),
                n = e.parents(".wpb_widgetised_column"),
                o = "",
                a = 0;
              (d = e.offset().top),
                (i = e.position().top),
                (l = s = 0),
                t.length
                  ? ((s = t.outerHeight()),
                    (l = t.outerWidth()),
                    (a = (o = t).parent().parent().outerHeight()),
                    (t = t.parent().parent().find(".edgtf-blog-holder"))
                      .length && (a -= parseInt(t.css("marginBottom"))))
                  : n.length &&
                    ((s = n.outerHeight()),
                    (l = n.outerWidth()),
                    (a = (o = n).parents(".vc_row").outerHeight())),
                f.push({
                  object: e,
                  offset: d,
                  position: i,
                  height: s,
                  width: l,
                  sidebarHolder: o,
                  sidebarHolderHeight: a,
                });
            }),
            n(),
            H(window).scroll(function () {
              n();
            });
        },
        reInit: n,
      };
    }
    function v() {
      var e = H(".edgtf-owl-slider");
      e.length &&
        e.each(function () {
          var t = H(this),
            e = H(this),
            n = t.children().length,
            o = 1,
            a = !0,
            d = !0,
            i = !0,
            s = 5e3,
            r = 600,
            l = 0,
            f = 0,
            g = 0,
            c = 0,
            u = !1,
            m = !1,
            h = !1,
            p = !1,
            v = !1,
            w = !0,
            y = !1,
            b = !1,
            C = !!t.hasClass("edgtf-list-is-slider"),
            x = C ? t.parent() : t;
          if (
            (void 0 === t.data("number-of-items") ||
              !1 === t.data("number-of-items") ||
              C ||
              (o = t.data("number-of-items")),
            void 0 !== x.data("number-of-columns") &&
              !1 !== x.data("number-of-columns") &&
              C)
          )
            switch (x.data("number-of-columns")) {
              case "one":
                o = 1;
                break;
              case "two":
                o = 2;
                break;
              case "three":
                o = 3;
                break;
              case "four":
                o = 4;
                break;
              case "five":
                o = 5;
                break;
              case "six":
                o = 6;
                break;
              default:
                o = 4;
            }
          "no" === x.data("enable-loop") && (a = !1),
            "no" === x.data("enable-autoplay") && (d = !1),
            "no" === x.data("enable-autoplay-hover-pause") && (i = !1),
            void 0 !== x.data("slider-speed") &&
              !1 !== x.data("slider-speed") &&
              (s = x.data("slider-speed")),
            void 0 !== x.data("slider-speed-animation") &&
              !1 !== x.data("slider-speed-animation") &&
              (r = x.data("slider-speed-animation")),
            void 0 !== x.data("slider-margin") && !1 !== x.data("slider-margin")
              ? (l =
                  "no" === x.data("slider-margin")
                    ? 0
                    : x.data("slider-margin"))
              : t.parent().hasClass("edgtf-huge-space")
              ? (l = 60)
              : t.parent().hasClass("edgtf-large-space")
              ? (l = 50)
              : t.parent().hasClass("edgtf-medium-space")
              ? (l = 40)
              : t.parent().hasClass("edgtf-normal-space")
              ? (l = 30)
              : t.parent().hasClass("edgtf-small-space")
              ? (l = 20)
              : t.parent().hasClass("edgtf-tiny-space") && (l = 10),
            "yes" === x.data("slider-padding") &&
              ((u = !0), (c = parseInt(0.28 * t.outerWidth())), (l = 50)),
            "yes" === x.data("enable-center") && (m = !0),
            "yes" === x.data("enable-auto-width") && (h = !0),
            void 0 !== x.data("slider-animate-in") &&
              !1 !== x.data("slider-animate-in") &&
              (p = x.data("slider-animate-in")),
            void 0 !== x.data("slider-animate-out") &&
              !1 !== x.data("slider-animate-out") &&
              (v = x.data("slider-animate-out")),
            "no" === x.data("enable-navigation") && (w = !1),
            "yes" === x.data("enable-pagination") && (y = !0),
            (b = "yes" === x.data("enable-thumbnail") ? !0 : b) &&
              !y &&
              ((y = !0), e.addClass("edgtf-slider-hide-pagination")),
            w && y && t.addClass("edgtf-slider-has-both-nav"),
            n <= 1 && (y = w = d = a = !1);
          var _ = 2,
            k = 3,
            I = o,
            S = o;
          if (
            (o < 3 && (k = _ = o),
            4 < o && (I = 4),
            5 < o && (S = 5),
            (u || 30 < l) && ((f = 20), (g = 30)),
            0 < l && l <= 30 && (g = f = l),
            t.waitForImages(function () {
              e = t.owlCarousel({
                items: o,
                loop: a,
                autoplay: d,
                autoplayHoverPause: i,
                autoplayTimeout: s,
                smartSpeed: r,
                margin: l,
                stagePadding: c,
                center: m,
                autoWidth: h,
                animateIn: p,
                animateOut: v,
                dots: y,
                nav: w,
                navText: [
                  '<span class="edgtf-prev-icon ' +
                    edgtfGlobalVars.vars.sliderNavPrevArrow +
                    '"></span>',
                  '<span class="edgtf-next-icon ' +
                    edgtfGlobalVars.vars.sliderNavNextArrow +
                    '"></span>',
                ],
                responsive: {
                  0: {
                    items: 1,
                    margin: f,
                    stagePadding: 0,
                    center: !1,
                    autoWidth: !1,
                  },
                  681: { items: _, margin: g },
                  769: { items: k, margin: g },
                  1025: { items: I },
                  1281: { items: S },
                  1367: { items: o },
                },
                onInitialize: function () {
                  t.css("visibility", "visible"),
                    z(),
                    (t.find("iframe").length || t.find("video").length) &&
                      setTimeout(function () {
                        T(), D();
                      }, 500),
                    b &&
                      A.find(
                        ".edgtf-slider-thumbnail-item:first-child"
                      ).addClass("active");
                },
                onRefreshed: function () {
                  var e;
                  !0 === h &&
                    ((e = parseInt(t.find(".owl-stage").css("width"))),
                    t.find(".owl-stage").css("width", e + 1 + "px"));
                },
                onTranslate: function (e) {
                  b &&
                    ((e = e.page.index + 1),
                    A.find(".edgtf-slider-thumbnail-item.active").removeClass(
                      "active"
                    ),
                    A.find(
                      ".edgtf-slider-thumbnail-item:nth-child(" + e + ")"
                    ).addClass("active"));
                },
                onDrag: function (e) {
                  edgtf.body.hasClass(
                    "edgtf-smooth-page-transitions-fadeout"
                  ) &&
                    0 < e.isTrigger &&
                    t.addClass("edgtf-slider-is-moving");
                },
                onDragged: function () {
                  edgtf.body.hasClass(
                    "edgtf-smooth-page-transitions-fadeout"
                  ) &&
                    t.hasClass("edgtf-slider-is-moving") &&
                    setTimeout(function () {
                      t.removeClass("edgtf-slider-is-moving");
                    }, 500);
                },
              });
            }),
            b)
          ) {
            var A = t.parent().find(".edgtf-slider-thumbnail"),
              O = "";
            switch (parseInt(A.data("thumbnail-count")) % 6) {
              case 2:
                O = "two";
                break;
              case 3:
                O = "three";
                break;
              case 4:
                O = "four";
                break;
              case 5:
                O = "five";
                break;
              case 0:
              default:
                O = "six";
            }
            "" !== O && A.addClass("edgtf-slider-columns-" + O),
              A.find(".edgtf-slider-thumbnail-item").on("click", function () {
                H(this).siblings(".active").removeClass("active"),
                  H(this).addClass("active"),
                  e.trigger("to.owl.carousel", [H(this).index(), r]);
              });
          }
        });
    }
  })(jQuery),
  (function (l) {
    "use strict";
    var e = {};
    function t() {
      f();
    }
    function n() {
      a().init();
    }
    function o() {
      a().scroll();
    }
    function f() {
      var e = l("audio.edgtf-blog-audio");
      e.length && e.mediaelementplayer({ audioWidth: "100%" });
    }
    function a() {
      function n(e) {
        var t =
          e.outerHeight() +
          e.offset().top -
          edgtfGlobalVars.vars.edgtfAddForAdminBar;
        !e.hasClass("edgtf-blog-pagination-infinite-scroll-started") &&
          edgtf.scroll + edgtf.windowHeight > t &&
          o(e);
      }
      var e = l(".edgtf-blog-holder"),
        o = function (n) {
          var e,
            o = n.children(".edgtf-blog-holder-inner");
          void 0 !== n.data("max-num-pages") &&
            !1 !== n.data("max-num-pages") &&
            (e = n.data("max-num-pages")),
            n.hasClass("edgtf-blog-pagination-infinite-scroll") &&
              n.addClass("edgtf-blog-pagination-infinite-scroll-started");
          var t = edgtf.modules.common.getLoadMoreData(n),
            a = n.find(".edgtf-blog-pag-loading"),
            d = t.nextPage,
            i = n.find('input[name*="qodef_blog_load_more_nonce_"]');
          (t.blog_load_more_id = i
            .attr("name")
            .substring(i.attr("name").length - 4, i.attr("name").length)),
            (t.blog_load_more_nonce = i.val()),
            d <= e &&
              (a.addClass("edgtf-showing"),
              (t = edgtf.modules.common.setLoadMoreAjaxData(
                t,
                "manon_edge_blog_load_more"
              )),
              l.ajax({
                type: "POST",
                data: t,
                url: edgtfGlobalVars.vars.edgtfAjaxUrl,
                success: function (e) {
                  d++, n.data("next-page", d);
                  var t = l.parseJSON(e).html;
                  n.waitForImages(function () {
                    n.hasClass("edgtf-grid-masonry-list")
                      ? (s(o, a, t),
                        edgtf.modules.common.setFixedImageProportionSize(
                          n,
                          n.find("article"),
                          o.find(".edgtf-masonry-grid-sizer").width()
                        ))
                      : r(o, a, t),
                      setTimeout(function () {
                        f(),
                          edgtf.modules.common.edgtfOwlSlider(),
                          edgtf.modules.common.edgtfFluidVideo(),
                          edgtf.modules.common.edgtfInitSelfHostedVideoPlayer(),
                          edgtf.modules.common.edgtfSelfHostedVideoSize(),
                          "function" ==
                            typeof edgtf.modules.common
                              .edgtfStickySidebarWidget &&
                            edgtf.modules.common
                              .edgtfStickySidebarWidget()
                              .reInit(),
                          l(document.body).trigger(
                            "blog_list_load_more_trigger"
                          );
                      }, 400);
                  }),
                    n.hasClass(
                      "edgtf-blog-pagination-infinite-scroll-started"
                    ) &&
                      n.removeClass(
                        "edgtf-blog-pagination-infinite-scroll-started"
                      );
                },
              })),
            d === e && n.find(".edgtf-blog-pag-load-more").hide();
        },
        s = function (e, t, n) {
          e
            .append(n)
            .isotope("reloadItems")
            .isotope({ sortBy: "original-order" }),
            t.removeClass("edgtf-showing"),
            setTimeout(function () {
              e.isotope("layout");
            }, 600);
        },
        r = function (e, t, n) {
          t.removeClass("edgtf-showing"), e.append(n);
        };
      return {
        init: function () {
          e.length &&
            e.each(function () {
              var t,
                e = l(this);
              e.hasClass("edgtf-blog-pagination-load-more") &&
                (t = e)
                  .find(".edgtf-blog-pag-load-more a")
                  .on("click", function (e) {
                    e.preventDefault(), e.stopPropagation(), o(t);
                  }),
                e.hasClass("edgtf-blog-pagination-infinite-scroll") && n(e);
            });
        },
        scroll: function () {
          e.length &&
            e.each(function () {
              var e = l(this);
              e.hasClass("edgtf-blog-pagination-infinite-scroll") && n(e);
            });
        },
      };
    }
    ((edgtf.modules.blog = e).edgtfOnDocumentReady = t),
      (e.edgtfOnWindowLoad = n),
      (e.edgtfOnWindowScroll = o),
      l(document).ready(t),
      l(window).on("load", n),
      l(window).scroll(o);
  })(jQuery),
  (function (o) {
    "use strict";
    var e = {};
    function t() {
      edgtf.window.scroll(function () {
        var e = o(".edgtf-content").height() - 200,
          t = o(this).scrollTop(),
          n = o(this).height(),
          n = 0 < t ? t + n / 2 : 1;
        a(e < n ? "off" : "on");
      });
    }
    function a(e) {
      var t = o(
        ".edgtf-content-side .edgtf-content-side-holder-outer .edgtf-content-side-holder-inner"
      );
      t.removeClass("off on"),
        "on" === e ? t.addClass("on") : t.addClass("off");
    }
    ((edgtf.modules.contentSide = e).edgtfOnDocumentReady = t),
      o(document).ready(t);
  })(jQuery),
  (function (a) {
    "use strict";
    var e = {};
    function t() {
      !(function () {
        {
          var e, t, n, o;
          a("body:not(.error404) .edgtf-footer-uncover").length &&
            !edgtf.htmlEl.hasClass("touch") &&
            ((e = a("footer")),
            (t = e.outerHeight()),
            (n = a(".edgtf-content")),
            (o = function () {
              n.css("margin-bottom", t), e.css("height", t);
            })(),
            a(window).resize(function () {
              (t = e.find(".edgtf-footer-inner").outerHeight()), o();
            }));
        }
      })();
    }
    ((edgtf.modules.footer = e).edgtfOnWindowLoad = t), a(window).on("load", t);
  })(jQuery),
  (function (r) {
    "use strict";
    var e = {};
    function t() {
      o(),
        r(".edgtf-main-menu ul li a").on("click", function (e) {
          ("http://#" !== r(this).attr("href") &&
            "#" !== r(this).attr("href")) ||
            e.preventDefault();
        }),
        setTimeout(function () {
          r(".edgtf-drop-down > ul > li").each(function () {
            var d = r(this);
            d.find(".second").length &&
              d.waitForImages(function () {
                var t,
                  e,
                  n,
                  o = d.find(".second"),
                  a = edgtf.menuDropdownHeightSet ? 0 : o.outerHeight();
                d.hasClass("wide") &&
                  ((t = 0),
                  (e = o.find("> .inner > ul > li")).each(function () {
                    var e = r(this).outerHeight();
                    t < e && (t = e);
                  }),
                  e.css("height", "").height(t),
                  edgtf.menuDropdownHeightSet || (a = o.outerHeight())),
                  edgtf.menuDropdownHeightSet || o.height(0),
                  navigator.userAgent.match(/(iPod|iPhone|iPad)/)
                    ? d
                        .on("touchstart mouseenter", function () {
                          o.css({
                            height: a,
                            overflow: "visible",
                            visibility: "visible",
                            opacity: "1",
                          });
                        })
                        .on("mouseleave", function () {
                          o.css({
                            height: "0px",
                            overflow: "hidden",
                            visibility: "hidden",
                            opacity: "0",
                          });
                        })
                    : edgtf.body.hasClass("edgtf-dropdown-animate-height")
                    ? ((n = {
                        interval: 0,
                        over: function () {
                          setTimeout(function () {
                            o
                              .addClass("edgtf-drop-down-start")
                              .css({
                                visibility: "visible",
                                height: "0",
                                opacity: "1",
                              }),
                              o
                                .stop()
                                .animate(
                                  { height: a },
                                  400,
                                  "easeInOutQuint",
                                  function () {
                                    o.css("overflow", "visible");
                                  }
                                );
                          }, 100);
                        },
                        timeout: 100,
                        out: function () {
                          o
                            .stop()
                            .animate(
                              { height: "0", opacity: 0 },
                              100,
                              function () {
                                o.css({
                                  overflow: "hidden",
                                  visibility: "hidden",
                                });
                              }
                            ),
                            o.removeClass("edgtf-drop-down-start");
                        },
                      }),
                      d.hoverIntent(n))
                    : ((n = {
                        interval: 0,
                        over: function () {
                          setTimeout(function () {
                            o.addClass("edgtf-drop-down-start")
                              .stop()
                              .css({ height: a });
                          }, 150);
                        },
                        timeout: 150,
                        out: function () {
                          o.stop()
                            .css({ height: "0" })
                            .removeClass("edgtf-drop-down-start");
                        },
                      }),
                      d.hoverIntent(n));
              });
          }),
            r(".edgtf-drop-down ul li.wide ul li a").on("click", function (e) {
              var t;
              1 === e.which &&
                ((t = r(this)),
                setTimeout(function () {
                  t.mouseleave();
                }, 500));
            }),
            (edgtf.menuDropdownHeightSet = !0);
        }, 100);
    }
    function n() {
      a();
    }
    function o() {
      var e = r(".edgtf-drop-down > ul > li.narrow.menu-item-has-children");
      e.length &&
        e.each(function (e) {
          var t,
            n = r(this),
            o = n.offset().left,
            a = n.find(".second"),
            d = a.find(".inner ul"),
            i = d.outerWidth(),
            s = edgtf.windowWidth - o;
          edgtf.body.hasClass("edgtf-boxed") &&
            (s =
              edgtf.boxedLayoutWidth -
              (o - (edgtf.windowWidth - edgtf.boxedLayoutWidth) / 2)),
            0 < n.find("li.sub").length && (t = s - i),
            a.removeClass("right"),
            d.removeClass("right"),
            (s < i || t < i) && (a.addClass("right"), d.addClass("right"));
        });
    }
    ((edgtf.modules.header = e).edgtfSetDropDownMenuPosition = o),
      (e.edgtfSetDropDownWideMenuPosition = a),
      (e.edgtfOnDocumentReady = t),
      (e.edgtfOnWindowLoad = n),
      r(document).ready(t),
      r(window).on("load", n);
    var d = function () {
      var e = document.createElement("div");
      (e.style.visibility = "hidden"),
        (e.style.width = "100px"),
        (e.style.msOverflowStyle = "scrollbar"),
        document.body.appendChild(e);
      var t = e.offsetWidth;
      e.style.overflow = "scroll";
      var n = document.createElement("div");
      (n.style.width = "100%"), e.appendChild(n);
      n = n.offsetWidth;
      return e.parentNode.removeChild(e), t - n;
    };
    function a() {
      var e = r(".edgtf-drop-down > ul > li.wide"),
        a = screen.width;
      e.length &&
        e.each(function (e) {
          var t,
            n,
            o = r(this).find(".second");
          !o.length ||
            o.hasClass("left_position") ||
            o.hasClass("right_position") ||
            (o.css("left", 0),
            (n = d()),
            (t = o.offset().left + n),
            edgtf.body.hasClass("edgtf-boxed")
              ? ((n = r(
                  ".edgtf-boxed .edgtf-wrapper .edgtf-wrapper-inner"
                ).outerWidth()),
                o.css({ left: -(t -= (a - n) / 2), width: n }))
              : edgtf.body.hasClass("edgtf-wide-dropdown-menu-in-grid")
              ? o.css({
                  left: -t + (a - edgtf.gridWidth()) / 2,
                  width: edgtf.gridWidth(),
                })
              : o.css({ left: -t, width: a }));
        });
    }
  })(jQuery),
  (function (a) {
    "use strict";
    function e() {
      a(document).on("click", ".edgtf-like", function () {
        var t = a(this),
          e = t.attr("id"),
          n = t.data("post-id"),
          o = "";
        if (t.hasClass("liked")) return !1;
        (n = {
          action: "manon_edge_like",
          likes_id: e,
          type: (o = void 0 !== t.data("type") ? t.data("type") : o),
          like_nonce: a("#qodef_like_nonce_" + n).val(),
        }),
          a.post(edgtfGlobalVars.vars.edgtfAjaxUrl, n, function (e) {
            t.html(e).addClass("liked").attr("title", "You already like this!");
          });
        return !1;
      });
    }
    a(document).ready(e);
  })(jQuery),
  (function (f) {
    "use strict";
    var e = {};
    function t() {
      var e;
      !(function () {
        var o,
          a = f(".edgtf-wrapper"),
          d = f(".edgtf-side-menu"),
          i = f("a.edgtf-side-menu-button-opener"),
          s = !1,
          r = !1,
          l = !1;
        edgtf.body.hasClass("edgtf-side-menu-slide-from-right")
          ? (f(".edgtf-cover").remove(),
            (o = "edgtf-right-side-menu-opened"),
            a.prepend('<div class="edgtf-cover"/>'),
            (s = !0))
          : edgtf.body.hasClass("edgtf-side-menu-slide-with-content")
          ? ((o = "edgtf-side-menu-open"), (r = !0))
          : edgtf.body.hasClass("edgtf-side-area-uncovered-from-content") &&
            ((o = "edgtf-right-side-menu-opened"), (l = !0));
        f("a.edgtf-side-menu-button-opener, a.edgtf-close-side-menu").on(
          "click",
          function (e) {
            var t, n;
            e.preventDefault(),
              i.hasClass("opened")
                ? (i.removeClass("opened"),
                  edgtf.body.removeClass(o),
                  l &&
                    (t = setTimeout(function () {
                      d.css({ visibility: "hidden" }), clearTimeout(t);
                    }, 400)))
                : (i.addClass("opened"),
                  edgtf.body.addClass(o),
                  s &&
                    f(".edgtf-wrapper .edgtf-cover").on("click", function () {
                      edgtf.body.removeClass("edgtf-right-side-menu-opened"),
                        i.removeClass("opened");
                    }),
                  l && d.css({ visibility: "visible" }),
                  (n = f(window).scrollTop()),
                  f(window).scroll(function () {
                    var e;
                    400 < Math.abs(edgtf.scroll - n) &&
                      (edgtf.body.removeClass(o),
                      i.removeClass("opened"),
                      l &&
                        (e = setTimeout(function () {
                          d.css({ visibility: "hidden" }), clearTimeout(e);
                        }, 400)));
                  })),
              r &&
                (e.stopPropagation(),
                a.on("click", function () {
                  e.preventDefault(),
                    i.removeClass("opened"),
                    edgtf.body.removeClass("edgtf-side-menu-open");
                }));
          }
        ),
          d.length && edgtf.modules.common.edgtfInitPerfectScrollbar().init(d);
      })(),
        (e = f(
          ".edgtf-sidearea-menu .edgtf-fullscreen-menu-arrow, .edgtf-sidearea-menu .menu-item.menu-item-has-children a"
        )).length &&
          e.each(function () {
            var o = f(this);
            o.on("tap click", function (e) {
              e.preventDefault();
              var t,
                n = o.parent("li"),
                e = n.siblings(".menu-item-has-children");
              n.hasClass("has_sub") &&
                ((t = n.find("> ul.sub_menu")).is(":visible")
                  ? (t.slideUp(450, "easeInOutQuint"),
                    n.removeClass("edgtf-opened"))
                  : (n.addClass("edgtf-opened"),
                    (0 === e.length
                      ? n
                      : n.siblings().removeClass("edgtf-opened")
                    )
                      .find(".sub_menu")
                      .slideUp(400, "easeInOutQuint", function () {
                        t.slideDown(400, "easeInOutQuint");
                      })));
            });
          });
    }
    ((edgtf.modules.sidearea = e).edgtfOnDocumentReady = t),
      f(document).ready(t);
  })(jQuery),
  (function (s) {
    "use strict";
    var e = {};
    function t() {
      !(function () {
        var e = s(".edgtf-subscribe-popup-holder"),
          t = s(".edgtf-sp-close");
        {
          var n, o, a, d, i;
          e.length &&
            ((n = e.find(".edgtf-sp-prevent")),
            (o = "no"),
            n.length &&
              ((a = e.hasClass("edgtf-sp-prevent-cookies")),
              (d = n.find(".edgtf-sp-prevent-input")),
              (i = d.data("value")),
              a
                ? ((o = localStorage.getItem("disabledPopup")),
                  sessionStorage.removeItem("disabledPopup"))
                : ((o = sessionStorage.getItem("disabledPopup")),
                  localStorage.removeItem("disabledPopup")),
              n.children().on("click", function (e) {
                "yes" !== i
                  ? ((i = "yes"),
                    d.addClass("edgtf-sp-prevent-clicked").data("value", "yes"))
                  : ((i = "no"),
                    d
                      .removeClass("edgtf-sp-prevent-clicked")
                      .data("value", "no")),
                  "yes" === i
                    ? (a ? localStorage : sessionStorage).setItem(
                        "disabledPopup",
                        "yes"
                      )
                    : (a ? localStorage : sessionStorage).setItem(
                        "disabledPopup",
                        "no"
                      );
              })),
            "yes" !== o &&
              (edgtf.body.hasClass("edgtf-sp-opened")
                ? (edgtf.body.removeClass("edgtf-sp-opened"),
                  edgtf.modules.common.edgtfEnableScroll())
                : (edgtf.body.addClass("edgtf-sp-opened"),
                  edgtf.modules.common.edgtfDisableScroll()),
              t.on("click", function (e) {
                e.preventDefault(),
                  edgtf.body.removeClass("edgtf-sp-opened"),
                  edgtf.modules.common.edgtfEnableScroll();
              }),
              s(document).keyup(function (e) {
                27 === e.keyCode &&
                  (edgtf.body.removeClass("edgtf-sp-opened"),
                  edgtf.modules.common.edgtfEnableScroll());
              })));
        }
      })();
    }
    ((edgtf.modules.subscribePopup = e).edgtfOnWindowLoad = t),
      s(window).on("load", t);
  })(jQuery),
  (function (s) {
    "use strict";
    var e = {};
    function t() {
      !(function () {
        var e = s(".edgtf-title-holder.edgtf-bg-parallax");
        {
          var t, n, o, a, d, i;
          0 < e.length &&
            1024 < edgtf.windowWidth &&
            ((t = e.hasClass("edgtf-bg-parallax-zoom-out")),
            (n = parseInt(e.data("height"))),
            (o = parseInt(e.data("background-width"))),
            (a = (n / 1e4) * 7),
            (d = -edgtf.scroll * a),
            (i = edgtfGlobalVars.vars.edgtfAddForAdminBar),
            e.css({ "background-position": "center " + (d + i) + "px" }),
            t && e.css({ "background-size": o - edgtf.scroll + "px auto" }),
            s(window).scroll(function () {
              (d = -edgtf.scroll * a),
                e.css({ "background-position": "center " + (d + i) + "px" }),
                t && e.css({ "background-size": o - edgtf.scroll + "px auto" });
            }));
        }
      })();
    }
    ((edgtf.modules.title = e).edgtfOnDocumentReady = t), s(document).ready(t);
  })(jQuery),
  (function (s) {
    "use strict";
    var e = {};
    function t() {
      var e;
      s(document).on(
        "click",
        ".edgtf-quantity-minus, .edgtf-quantity-plus",
        function (e) {
          e.stopPropagation();
          var t,
            n = s(this),
            o = n.siblings(".edgtf-quantity-input"),
            a = parseFloat(o.data("step")),
            d = parseFloat(o.data("max")),
            i = parseFloat(o.data("min")),
            e = !1,
            i =
              "function" == typeof Number.isNaN &&
              Number.isNaN(parseFloat(o.val()))
                ? i
                : parseFloat(o.val());
          (e = n.hasClass("edgtf-quantity-minus") ? !0 : e)
            ? 1 <= (t = i - a)
              ? o.val(t)
              : o.val(0)
            : ((t = i + a), void 0 !== d && d <= t ? o.val(d) : o.val(t)),
            o.trigger("change");
        }
      ),
        (function () {
          var e = s(".woocommerce-ordering .orderby");
          e.length && e.select2({ minimumResultsForSearch: 1 / 0 });
          e = s(
            ".edgtf-woocommerce-page .edgtf-content .variations td.value select"
          );
          e.length && e.select2();
          e = s("#calc_shipping_country");
          e.length && e.select2();
          e = s(".cart-collaterals .shipping select#calc_shipping_state");
          e.length && e.select2();
          e = s(
            ".widget.widget_archive select, .widget.widget_categories select, .widget.widget_text select"
          );
          e.length && e.select2();
        })(),
        (e = s(
          ".edgtf-woo-single-page.edgtf-woo-single-has-pretty-photo .images .woocommerce-product-gallery__image"
        )).length &&
          (e
            .children("a")
            .attr("data-rel", "prettyPhoto[woo_single_pretty_photo]"),
          "function" == typeof edgtf.modules.common.edgtfPrettyPhoto &&
            edgtf.modules.common.edgtfPrettyPhoto());
    }
    ((edgtf.modules.woocommerce = e).edgtfOnDocumentReady = t),
      s(document).ready(t);
  })(jQuery),
  (function (c) {
    "use strict";
    var e = {};
    function t() {
      o().init(),
        c(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_blog_list.default",
            function () {
              o().init();
            }
          );
        });
    }
    function n() {
      o().scroll();
    }
    function o() {
      function a(e) {
        var t =
          e.outerHeight() +
          e.offset().top -
          edgtfGlobalVars.vars.edgtfAddForAdminBar;
        !e.hasClass("edgtf-bl-pag-infinite-scroll-started") &&
          edgtf.scroll + edgtf.windowHeight > t &&
          d(e);
      }
      var e = c(".edgtf-blog-list-holder"),
        d = function (n, e) {
          var o,
            a = n.find(".edgtf-blog-list");
          void 0 !== n.data("max-num-pages") &&
            !1 !== n.data("max-num-pages") &&
            (o = n.data("max-num-pages")),
            n.hasClass("edgtf-bl-pag-standard-shortcodes") &&
              n.data("next-page", e),
            n.hasClass("edgtf-bl-pag-infinite-scroll") &&
              n.addClass("edgtf-bl-pag-infinite-scroll-started");
          var t = edgtf.modules.common.getLoadMoreData(n),
            d = n.find(".edgtf-blog-pag-loading"),
            i = t.nextPage,
            e = n.find('input[name*="qodef_blog_load_more_nonce_"]');
          (t.blog_load_more_id = e
            .attr("name")
            .substring(e.attr("name").length - 4, e.attr("name").length)),
            (t.blog_load_more_nonce = e.val()),
            i <= o &&
              (n.hasClass("edgtf-bl-pag-standard-shortcodes")
                ? (d.addClass("edgtf-showing edgtf-standard-pag-trigger"),
                  n.addClass("edgtf-bl-pag-standard-shortcodes-animate"))
                : d.addClass("edgtf-showing"),
              (t = edgtf.modules.common.setLoadMoreAjaxData(
                t,
                "manon_edge_blog_shortcode_load_more"
              )),
              c.ajax({
                type: "POST",
                data: t,
                url: edgtfGlobalVars.vars.edgtfAjaxUrl,
                success: function (e) {
                  n.hasClass("edgtf-bl-pag-standard-shortcodes") || i++,
                    n.data("next-page", i);
                  var t = c.parseJSON(e).html;
                  n.hasClass("edgtf-bl-pag-standard-shortcodes")
                    ? (s(n, o, i),
                      n.waitForImages(function () {
                        n.hasClass("edgtf-bl-masonry")
                          ? r(n, a, d, t)
                          : (l(n, a, d, t),
                            "function" ==
                              typeof edgtf.modules.common
                                .edgtfStickySidebarWidget &&
                              edgtf.modules.common
                                .edgtfStickySidebarWidget()
                                .reInit());
                      }))
                    : n.waitForImages(function () {
                        n.hasClass("edgtf-bl-masonry")
                          ? f(a, d, t)
                          : (g(a, d, t),
                            "function" ==
                              typeof edgtf.modules.common
                                .edgtfStickySidebarWidget &&
                              edgtf.modules.common
                                .edgtfStickySidebarWidget()
                                .reInit());
                      }),
                    n.hasClass("edgtf-bl-pag-infinite-scroll-started") &&
                      n.removeClass("edgtf-bl-pag-infinite-scroll-started");
                },
              })),
            i === o && n.find(".edgtf-blog-pag-load-more").hide();
        },
        s = function (e, t, n) {
          var o = e.find(".edgtf-bl-standard-pagination"),
            a = o.find("li.edgtf-pag-number"),
            e = o.find("li.edgtf-pag-prev a"),
            o = o.find("li.edgtf-pag-next a");
          a.removeClass("edgtf-pag-active"),
            a.eq(n - 1).addClass("edgtf-pag-active"),
            e.data("paged", n - 1),
            o.data("paged", n + 1),
            1 < n ? e.css({ opacity: "1" }) : e.css({ opacity: "0" }),
            n === t ? o.css({ opacity: "0" }) : o.css({ opacity: "1" });
        },
        r = function (e, t, n, o) {
          t
            .html(o)
            .isotope("reloadItems")
            .isotope({ sortBy: "original-order" }),
            n.removeClass("edgtf-showing edgtf-standard-pag-trigger"),
            e.removeClass("edgtf-bl-pag-standard-shortcodes-animate"),
            setTimeout(function () {
              t.isotope("layout"),
                "function" ==
                  typeof edgtf.modules.common.edgtfStickySidebarWidget &&
                  edgtf.modules.common.edgtfStickySidebarWidget().reInit();
            }, 600);
        },
        l = function (e, t, n, o) {
          n.removeClass("edgtf-showing edgtf-standard-pag-trigger"),
            e.removeClass("edgtf-bl-pag-standard-shortcodes-animate"),
            t.html(o);
        },
        f = function (e, t, n) {
          e
            .append(n)
            .isotope("reloadItems")
            .isotope({ sortBy: "original-order" }),
            t.removeClass("edgtf-showing"),
            setTimeout(function () {
              e.isotope("layout"),
                "function" ==
                  typeof edgtf.modules.common.edgtfStickySidebarWidget &&
                  edgtf.modules.common.edgtfStickySidebarWidget().reInit();
            }, 600);
        },
        g = function (e, t, n) {
          t.removeClass("edgtf-showing"), e.append(n);
        };
      return {
        init: function () {
          e.length &&
            e.each(function () {
              var o,
                e,
                t,
                n = c(this);
              n.hasClass("edgtf-bl-pag-standard-shortcodes") &&
                (e = (o = n).find(".edgtf-bl-standard-pagination li")).length &&
                e.each(function () {
                  var t = c(this).children("a"),
                    n = 1;
                  t.on("click", function (e) {
                    e.preventDefault(),
                      e.stopPropagation(),
                      void 0 !== t.data("paged") &&
                        !1 !== t.data("paged") &&
                        (n = t.data("paged")),
                      d(o, n);
                  });
                }),
                n.hasClass("edgtf-bl-pag-load-more") &&
                  (t = n)
                    .find(".edgtf-blog-pag-load-more a")
                    .on("click", function (e) {
                      e.preventDefault(), e.stopPropagation(), d(t);
                    }),
                n.hasClass("edgtf-bl-pag-infinite-scroll") && a(n);
            });
        },
        scroll: function () {
          e.length &&
            e.each(function () {
              var e = c(this);
              e.hasClass("edgtf-bl-pag-infinite-scroll") && a(e);
            });
        },
      };
    }
    ((edgtf.modules.blogListSC = e).edgtfOnWindowLoad = t),
      (e.edgtfOnWindowScroll = n),
      c(window).on("load", t),
      c(window).scroll(n);
  })(jQuery),
  (function (f) {
    "use strict";
    var e = {};
    function t() {
      !(function () {
        var t = f("a.edgtf-fullscreen-menu-opener");
        {
          var e, n, o, a, d, i, s, r, l;
          t.length &&
            ((e = f(".edgtf-fullscreen-menu-holder-outer")),
            (a = o = !1),
            (d = f(".edgtf-fullscreen-above-menu-widget-holder")),
            (i = f(".edgtf-fullscreen-below-menu-widget-holder")),
            (s = f(".edgtf-fullscreen-menu-holder-outer nav > ul > li > a")),
            (r = f(".edgtf-fullscreen-menu > ul li.has_sub > a")),
            (l = f(".edgtf-fullscreen-menu ul li:not(.has_sub) a")),
            edgtf.modules.common.edgtfInitPerfectScrollbar().init(e),
            f(window).resize(function () {
              e.height(edgtf.windowHeight);
            }),
            edgtf.body.hasClass("edgtf-fade-push-text-right")
              ? ((n = "edgtf-push-nav-right"), (o = !0))
              : edgtf.body.hasClass("edgtf-fade-push-text-top") &&
                ((n = "edgtf-push-text-top"), (a = !0)),
            (o || a) &&
              (d.length &&
                d
                  .children()
                  .css({
                    "-webkit-animation-delay": "0ms",
                    "-moz-animation-delay": "0ms",
                    "animation-delay": "0ms",
                  }),
              s.each(function (e) {
                f(this).css({
                  "-webkit-animation-delay": 70 * (e + 1) + "ms",
                  "-moz-animation-delay": 70 * (e + 1) + "ms",
                  "animation-delay": 70 * (e + 1) + "ms",
                });
              }),
              i.length &&
                i
                  .children()
                  .css({
                    "-webkit-animation-delay": 70 * (s.length + 1) + "ms",
                    "-moz-animation-delay": 70 * (s.length + 1) + "ms",
                    "animation-delay": 70 * (s.length + 1) + "ms",
                  })),
            t.on("click", function (e) {
              e.preventDefault(),
                t.hasClass("edgtf-fm-opened")
                  ? (t.removeClass("edgtf-fm-opened"),
                    edgtf.body
                      .removeClass(
                        "edgtf-fullscreen-menu-opened edgtf-fullscreen-fade-in"
                      )
                      .addClass("edgtf-fullscreen-fade-out"),
                    edgtf.body.addClass(n),
                    edgtf.modules.common.edgtfEnableScroll(),
                    f("nav.edgtf-fullscreen-menu ul.sub_menu").slideUp(200))
                  : (t.addClass("edgtf-fm-opened"),
                    edgtf.body
                      .removeClass("edgtf-fullscreen-fade-out")
                      .addClass(
                        "edgtf-fullscreen-menu-opened edgtf-fullscreen-fade-in"
                      ),
                    edgtf.body.removeClass(n),
                    edgtf.modules.common.edgtfDisableScroll(),
                    f(document).keyup(function (e) {
                      27 === e.keyCode &&
                        (t.removeClass("edgtf-fm-opened"),
                        edgtf.body
                          .removeClass(
                            "edgtf-fullscreen-menu-opened edgtf-fullscreen-fade-in"
                          )
                          .addClass("edgtf-fullscreen-fade-out"),
                        edgtf.body.addClass(n),
                        edgtf.modules.common.edgtfEnableScroll(),
                        f("nav.edgtf-fullscreen-menu ul.sub_menu").slideUp(
                          200
                        ));
                    }));
            }),
            r.on("tap click", function (e) {
              e.preventDefault();
              var t,
                n = f(this).parent(),
                e = n.siblings(".menu-item-has-children");
              return (
                n.hasClass("has_sub") &&
                  ((t = n.find("> ul.sub_menu")).is(":visible")
                    ? (t.slideUp(450, "easeInOutQuint"),
                      n.removeClass("open_sub"))
                    : (n.addClass("open_sub"),
                      0 === e.length
                        ? t.slideDown(400, "easeInOutQuint")
                        : (n
                            .closest("li.menu-item")
                            .siblings()
                            .find(".menu-item")
                            .removeClass("open_sub"),
                          n
                            .siblings()
                            .removeClass("open_sub")
                            .find(".sub_menu")
                            .slideUp(400, "easeInOutQuint", function () {
                              t.slideDown(400, "easeInOutQuint");
                            })))),
                !1
              );
            }),
            l.on("click", function (e) {
              return (
                "http://#" !== f(this).attr("href") &&
                "#" !== f(this).attr("href") &&
                void (
                  1 === e.which &&
                  (t.removeClass("edgtf-fm-opened"),
                  edgtf.body.removeClass("edgtf-fullscreen-menu-opened"),
                  edgtf.body
                    .removeClass("edgtf-fullscreen-fade-in")
                    .addClass("edgtf-fullscreen-fade-out"),
                  edgtf.body.addClass(n),
                  f("nav.edgtf-fullscreen-menu ul.sub_menu").slideUp(200),
                  edgtf.modules.common.edgtfEnableScroll())
                )
              );
            }));
        }
      })();
    }
    ((edgtf.modules.headerMinimal = e).edgtfOnDocumentReady = t),
      f(document).ready(t);
  })(jQuery),
  (function (i) {
    "use strict";
    var e = {};
    function t() {
      n().init();
    }
    ((edgtf.modules.headerVertical = e).edgtfOnDocumentReady = t),
      i(document).ready(t);
    var n = function () {
      function e() {
        var o,
          a,
          d,
          e = n.find(".edgtf-vertical-menu");
        e.hasClass("edgtf-vertical-dropdown-below")
          ? (d = e.find("ul li.menu-item-has-children")).each(function () {
              var t = i(this).find(" > .second, > ul"),
                n = this,
                o = i(this).find("> a"),
                a = "fast";
              o.on("click tap", function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  t.is(":visible")
                    ? (i(n).removeClass("open"), t.slideUp(a))
                    : (o.parent().parent().children().hasClass("open") &&
                      o
                        .parent()
                        .parent()
                        .parent()
                        .hasClass("edgtf-vertical-menu")
                        ? (i(this)
                            .parent()
                            .parent()
                            .children()
                            .removeClass("open"),
                          i(this)
                            .parent()
                            .parent()
                            .children()
                            .find(" > .second")
                            .slideUp(a))
                        : (i(this).parents("li").hasClass("open") ||
                            (d.removeClass("open"),
                            d.find(" > .second, > ul").slideUp(a)),
                          i(this)
                            .parent()
                            .parent()
                            .children()
                            .hasClass("open") &&
                            (i(this)
                              .parent()
                              .parent()
                              .children()
                              .removeClass("open"),
                            i(this)
                              .parent()
                              .parent()
                              .children()
                              .find(" > .second, > ul")
                              .slideUp(a))),
                      i(n).addClass("open"),
                      t.slideDown("slow"));
              });
            })
          : e.hasClass("edgtf-vertical-dropdown-side") &&
            ((o = e.find("ul li.menu-item-has-children")),
            (a = o.find(" > .second > .inner > ul, > ul")),
            o.each(function () {
              var t = i(this).find(" > .second > .inner > ul, > ul"),
                n = this;
              Modernizr.touch
                ? i(this)
                    .find("> a")
                    .on("click tap", function (e) {
                      e.preventDefault(),
                        e.stopPropagation(),
                        t.hasClass("edgtf-float-open")
                          ? (t.removeClass("edgtf-float-open"),
                            i(n).removeClass("open"))
                          : (i(this).parents("li").hasClass("open") ||
                              (o.removeClass("open"),
                              a.removeClass("edgtf-float-open")),
                            t.addClass("edgtf-float-open"),
                            i(n).addClass("open"));
                    })
                : i(this).hoverIntent({
                    over: function () {
                      t.addClass("edgtf-float-open"), i(n).addClass("open");
                    },
                    out: function () {
                      t.removeClass("edgtf-float-open"),
                        i(n).removeClass("open");
                    },
                    timeout: 300,
                  });
            }));
      }
      function t() {
        n.hasClass("edgtf-with-scroll") &&
          edgtf.modules.common.edgtfInitPerfectScrollbar().init(n);
      }
      var n = i(".edgtf-vertical-menu-area");
      return {
        init: function () {
          n.length && (e(), t());
        },
      };
    };
  })(jQuery),
  (function (a) {
    "use strict";
    var e = {};
    function t() {
      n().init();
    }
    ((edgtf.modules.headerVerticalRight = e).edgtfOnDocumentReady = t),
      a(document).ready(t);
    var n = function () {
      var o = a(".edgtf-header-vertical-right .edgtf-vertical-menu-area");
      return {
        init: function () {
          o.length &&
            (function () {
              var e = o.find(".edgtf-vertical-menu-opener a"),
                t = o.find(".edgtf-vertical-menu-nav-holder-outer"),
                n = o.find(".edgtf-fullscreen-menu > ul li.has_sub > a");
              o.find(".edgtf-fullscreen-menu ul li:not(.has_sub) a");
              t.height(edgtf.windowHeight),
                a(window).resize(function () {
                  t.height(edgtf.windowHeight);
                }),
                e.on("click", function (e) {
                  e.preventDefault(),
                    t.hasClass("active")
                      ? (t.removeClass("active"),
                        o.removeClass("opened"),
                        edgtf.body.hasClass("page-template-full_screen-php") ||
                          edgtf.modules.common.edgtfEnableScroll())
                      : (t.addClass("active"),
                        o.addClass("opened"),
                        edgtf.body.hasClass("page-template-full_screen-php") ||
                          edgtf.modules.common.edgtfDisableScroll());
                }),
                a(".edgtf-content").on("click", function () {
                  t.hasClass("active") &&
                    (t.removeClass("active"),
                    o.removeClass("opened"),
                    edgtf.body.hasClass("page-template-full_screen-php") ||
                      edgtf.modules.common.edgtfEnableScroll());
                }),
                n.on("tap click", function (e) {
                  return (
                    e.preventDefault(),
                    a(this).parent().hasClass("has_sub") &&
                      ((e = a(this).parent().find("> ul.sub_menu")).is(
                        ":visible"
                      )
                        ? (e.slideUp(200),
                          a(this).parent().removeClass("open_sub"))
                        : (a(this).parent().siblings().hasClass("open_sub") &&
                            a(this)
                              .parent()
                              .siblings()
                              .each(function () {
                                var e = a(this);
                                e.hasClass("open_sub") &&
                                  (e.find("> ul.sub_menu").slideUp(200),
                                  e.removeClass("open_sub")),
                                  e.find(".open_sub") &&
                                    (e
                                      .find(".open_sub")
                                      .find("> ul.sub_menu")
                                      .slideUp(200),
                                    e
                                      .find(".open_sub")
                                      .removeClass("open_sub"));
                              }),
                          a(this).parent().addClass("open_sub"),
                          e.slideDown(200))),
                    !1
                  );
                });
            })();
        },
      };
    };
  })(jQuery),
  (function (i) {
    "use strict";
    var e = {};
    function t() {
      !(function () {
        var t = i(".edgtf-mobile-header .edgtf-mobile-menu-opener"),
          n = i(".edgtf-mobile-header .edgtf-mobile-nav"),
          e = i(
            ".edgtf-mobile-nav .mobile_arrow, .edgtf-mobile-nav h6, .edgtf-mobile-nav a.edgtf-mobile-no-link"
          );
        t.length &&
          n.length &&
          t.on("tap click", function (e) {
            e.stopPropagation(),
              e.preventDefault(),
              n.is(":visible")
                ? (n.slideUp(450, "easeInOutQuint"),
                  t.removeClass("edgtf-mobile-menu-opened"))
                : (n.slideDown(450, "easeInOutQuint"),
                  t.addClass("edgtf-mobile-menu-opened"));
          });
        e.length &&
          e.each(function () {
            var a = i(this);
            a.on("tap click", function (e) {
              var t,
                n = a.parent("li"),
                o = n.siblings(".menu-item-has-children");
              n.hasClass("has_sub") &&
                ((t = n.find("> ul.sub_menu")).is(":visible")
                  ? (t.slideUp(450, "easeInOutQuint"),
                    n.removeClass("edgtf-opened"))
                  : (n.addClass("edgtf-opened"),
                    (0 === o.length
                      ? n
                      : n.siblings().removeClass("edgtf-opened")
                    )
                      .find(".sub_menu")
                      .slideUp(400, "easeInOutQuint", function () {
                        t.slideDown(400, "easeInOutQuint");
                      })));
            });
          });
        i(".edgtf-mobile-nav a, .edgtf-mobile-logo-wrapper a").on(
          "click tap",
          function (e) {
            "http://#" !== i(this).attr("href") &&
              "#" !== i(this).attr("href") &&
              (n.slideUp(450, "easeInOutQuint"),
              t.removeClass("edgtf-mobile-menu-opened"));
          }
        );
      })(),
        o(),
        (function () {
          var t = i(".edgtf-mobile-header"),
            n = t.find(".edgtf-mobile-menu-opener"),
            e = t.length ? t.outerHeight() : 0;
          edgtf.body.hasClass("edgtf-content-is-behind-header") &&
            0 < e &&
            edgtf.windowWidth <= 1024 &&
            i(".edgtf-content").css("marginTop", -e);
          {
            var o, a, d;
            edgtf.body.hasClass("edgtf-sticky-up-mobile-header") &&
              ((a = i("#wpadminbar")),
              (d = i(document).scrollTop()),
              (o = e + edgtfGlobalVars.vars.edgtfAddForAdminBar),
              i(window).scroll(function () {
                var e = i(document).scrollTop();
                o < e
                  ? t.addClass("edgtf-animate-mobile-header")
                  : t.removeClass("edgtf-animate-mobile-header"),
                  (d < e && o < e && !n.hasClass("edgtf-mobile-menu-opened")) ||
                  e < o
                    ? (t.removeClass("mobile-header-appear"),
                      t.css("margin-bottom", 0),
                      a.length &&
                        t.find(".edgtf-mobile-header-inner").css("top", 0))
                    : (t.addClass("mobile-header-appear"),
                      t.css("margin-bottom", o)),
                  (d = i(document).scrollTop());
              }));
          }
        })();
    }
    function n() {
      o();
    }
    function o() {
      var e, t, n, o;
      edgtf.windowWidth <= 1024 &&
        ((e = (o = i(".edgtf-mobile-header")).length ? o.height() : 0),
        (n = (t = o.find(".edgtf-mobile-nav")).outerHeight()),
        (o = edgtf.windowHeight - 100),
        t.length &&
          (t.height(o < e + n ? o - e : n),
          edgtf.modules.common.edgtfInitPerfectScrollbar().init(t)));
    }
    ((edgtf.modules.mobileHeader = e).edgtfOnDocumentReady = t),
      (e.edgtfOnWindowResize = n),
      i(document).ready(t),
      i(window).resize(n);
  })(jQuery),
  (function (f) {
    "use strict";
    var e = {};
    function t() {
      1024 < edgtf.windowWidth &&
        (function () {
          var t,
            e,
            n = f(".edgtf-page-header"),
            o = f(".edgtf-sticky-header"),
            a = f(".edgtf-fixed-wrapper"),
            d = a.children(".edgtf-menu-area").outerHeight(),
            i = f(".edgtf-slider"),
            s = i.length ? i.outerHeight() : 0;
          a.length &&
            (a.offset().top, edgtfGlobalVars.vars.edgtfAddForAdminBar);
          switch (!0) {
            case edgtf.body.hasClass("edgtf-sticky-header-on-scroll-up"):
              edgtf.modules.stickyHeader.behaviour =
                "edgtf-sticky-header-on-scroll-up";
              var r = f(document).scrollTop();
              (t =
                parseInt(edgtfGlobalVars.vars.edgtfTopBarHeight) +
                parseInt(edgtfGlobalVars.vars.edgtfLogoAreaHeight) +
                parseInt(edgtfGlobalVars.vars.edgtfMenuAreaHeight) +
                parseInt(edgtfGlobalVars.vars.edgtfStickyHeaderHeight)),
                (e = function () {
                  var e = f(document).scrollTop();
                  (r < e && t < e) || e < t
                    ? ((edgtf.modules.stickyHeader.isStickyVisible = !1),
                      o
                        .removeClass("header-appear")
                        .find(".edgtf-main-menu .second")
                        .removeClass("edgtf-drop-down-start"),
                      edgtf.body.removeClass("edgtf-sticky-header-appear"))
                    : ((edgtf.modules.stickyHeader.isStickyVisible = !0),
                      o.addClass("header-appear"),
                      edgtf.body.addClass("edgtf-sticky-header-appear")),
                    (r = f(document).scrollTop());
                })(),
                f(window).scroll(function () {
                  e();
                });
              break;
            case edgtf.body.hasClass("edgtf-sticky-header-on-scroll-down-up"):
              (edgtf.modules.stickyHeader.behaviour =
                "edgtf-sticky-header-on-scroll-down-up"),
                0 !== edgtfPerPageVars.vars.edgtfStickyScrollAmount
                  ? (edgtf.modules.stickyHeader.stickyAppearAmount = parseInt(
                      edgtfPerPageVars.vars.edgtfStickyScrollAmount
                    ))
                  : (edgtf.modules.stickyHeader.stickyAppearAmount =
                      parseInt(edgtfGlobalVars.vars.edgtfTopBarHeight) +
                      parseInt(edgtfGlobalVars.vars.edgtfLogoAreaHeight) +
                      parseInt(edgtfGlobalVars.vars.edgtfMenuAreaHeight) +
                      parseInt(s)),
                (e = function () {
                  edgtf.scroll < edgtf.modules.stickyHeader.stickyAppearAmount
                    ? ((edgtf.modules.stickyHeader.isStickyVisible = !1),
                      o
                        .removeClass("header-appear")
                        .find(".edgtf-main-menu .second")
                        .removeClass("edgtf-drop-down-start"),
                      edgtf.body.removeClass("edgtf-sticky-header-appear"))
                    : ((edgtf.modules.stickyHeader.isStickyVisible = !0),
                      o.addClass("header-appear"),
                      edgtf.body.addClass("edgtf-sticky-header-appear"));
                })(),
                f(window).scroll(function () {
                  e();
                });
              break;
            case edgtf.body.hasClass("edgtf-fixed-on-scroll"):
              edgtf.modules.stickyHeader.behaviour = "edgtf-fixed-on-scroll";
              var l = function () {
                a.addClass("fixed"), n.css("margin-bottom", d + "px");
              };
              l(),
                f(window).scroll(function () {
                  l();
                });
          }
        })();
    }
    ((edgtf.modules.stickyHeader = e).isStickyVisible = !1),
      (e.stickyAppearAmount = 0),
      (e.behaviour = ""),
      (e.edgtfOnDocumentReady = t),
      f(document).ready(t);
  })(jQuery),
  (function (a) {
    "use strict";
    var e = {};
    function t() {
      !(function () {
        {
          var n, t, e, o;
          !edgtf.body.hasClass("edgtf-fullscreen-search") ||
            (0 < (e = a("a.edgtf-search-opener")).length &&
              ((n = a(".edgtf-fullscreen-search-holder")),
              (t = a(".edgtf-search-close")),
              e.on("click", function (e) {
                e.preventDefault(),
                  n.hasClass("edgtf-animate")
                    ? (edgtf.body.removeClass(
                        "edgtf-fullscreen-search-opened edgtf-search-fade-out"
                      ),
                      edgtf.body.removeClass("edgtf-search-fade-in"),
                      n.removeClass("edgtf-animate"),
                      setTimeout(function () {
                        n.find(".edgtf-search-field").val(""),
                          n.find(".edgtf-search-field").blur();
                      }, 300),
                      edgtf.modules.common.edgtfEnableScroll())
                    : (edgtf.body.addClass(
                        "edgtf-fullscreen-search-opened edgtf-search-fade-in"
                      ),
                      edgtf.body.removeClass("edgtf-search-fade-out"),
                      n.addClass("edgtf-animate"),
                      setTimeout(function () {
                        n.find(".edgtf-search-field").focus();
                      }, 900),
                      edgtf.modules.common.edgtfDisableScroll()),
                  t.on("click", function (e) {
                    e.preventDefault(),
                      edgtf.body.removeClass(
                        "edgtf-fullscreen-search-opened edgtf-search-fade-in"
                      ),
                      edgtf.body.addClass("edgtf-search-fade-out"),
                      n.removeClass("edgtf-animate"),
                      setTimeout(function () {
                        n.find(".edgtf-search-field").val(""),
                          n.find(".edgtf-search-field").blur();
                      }, 300),
                      edgtf.modules.common.edgtfEnableScroll();
                  }),
                  a(document).mouseup(function (e) {
                    var t = a(".edgtf-form-holder-inner");
                    t.is(e.target) ||
                      0 !== t.has(e.target).length ||
                      (e.preventDefault(),
                      edgtf.body.removeClass(
                        "edgtf-fullscreen-search-opened edgtf-search-fade-in"
                      ),
                      edgtf.body.addClass("edgtf-search-fade-out"),
                      n.removeClass("edgtf-animate"),
                      setTimeout(function () {
                        n.find(".edgtf-search-field").val(""),
                          n.find(".edgtf-search-field").blur();
                      }, 300),
                      edgtf.modules.common.edgtfEnableScroll());
                  }),
                  a(document).keyup(function (e) {
                    27 === e.keyCode &&
                      (edgtf.body.removeClass(
                        "edgtf-fullscreen-search-opened edgtf-search-fade-in"
                      ),
                      edgtf.body.addClass("edgtf-search-fade-out"),
                      n.removeClass("edgtf-animate"),
                      setTimeout(function () {
                        n.find(".edgtf-search-field").val(""),
                          n.find(".edgtf-search-field").blur();
                      }, 300),
                      edgtf.modules.common.edgtfEnableScroll());
                  });
              }),
              (e = a(".edgtf-fullscreen-search-holder .edgtf-search-field")),
              (o = a(
                ".edgtf-fullscreen-search-holder .edgtf-field-holder .edgtf-line"
              )),
              e.focus(function () {
                o.css("width", "100%");
              }),
              e.blur(function () {
                o.css("width", "0");
              })));
        }
      })();
    }
    ((edgtf.modules.searchFullscreen = e).edgtfOnDocumentReady = t),
      a(document).ready(t);
  })(jQuery),
  (function (r) {
    "use strict";
    var e = {};
    function t() {
      n().init(),
        (function () {
          var e = r(".edgtf-portfolio-info-float");
          {
            var a, d, i;
            e.length &&
              (edgtf.body.append(
                '<div class="edgtf-pl-follow-info-holder"><div class="edgtf-pl-follow-info-inner"><span class="edgtf-pl-follow-info-title">Title</span><span class="edgtf-pl-follow-info-categories"></span></div></div>'
              ),
              (a = r(".edgtf-pl-follow-info-holder")),
              (d = a.find(".edgtf-pl-follow-info-categories")),
              (i = a.find(".edgtf-pl-follow-info-title")),
              e.each(function () {
                var t,
                  n,
                  o = r(this);
                o.hasClass("edgtf-gallery-follow-info-dark") &&
                  a.addClass("edgtf-dark-info"),
                  o.on("mousemove", function (e) {
                    (t = e.clientX),
                      (n = "auto"),
                      (n =
                        e.clientX + a.width() > r(window).width()
                          ? ((t = "auto"), 0)
                          : ((t = e.clientX), "auto")),
                      a.css({ top: e.clientY, left: t, right: n });
                  }),
                  o.find(".edgtf-pl-item").each(function (e) {
                    r(this)
                      .find(".edgtf-pl-item-inner")
                      .on("mouseenter", function () {
                        var e = r(this),
                          t = e.find(".edgtf-pli-title"),
                          e = e.find(".edgtf-pli-category");
                        e.length &&
                          e.each(function () {
                            var e = r(this);
                            d.append(
                              '<span class="edgtf-pl-follow-info-category">' +
                                e.text() +
                                "</span>"
                            );
                          }),
                          t.length && i.text(t.text()),
                          setTimeout(function () {
                            a.hasClass("edgtf-is-active") ||
                              a.addClass("edgtf-is-active");
                          }, 20);
                      })
                      .on("mouseleave", function () {
                        a.hasClass("edgtf-is-active") &&
                          a.removeClass("edgtf-is-active"),
                          r(".edgtf-pl-follow-info-category").remove();
                      }),
                      r(window).scroll(function () {
                        a.hasClass("edgtf-is-active") &&
                          (a.offset().top < o.offset().top ||
                            a.offset().top >
                              o.offset().top + o.outerHeight()) &&
                          a.removeClass("edgtf-is-active");
                      });
                  });
              }));
          }
        })();
    }
    ((edgtf.modules.portfolio = e).edgtfOnWindowLoad = t),
      r(window).on("load", t);
    var n = function () {
      var e,
        t,
        n,
        o,
        a,
        d,
        i,
        s = r(
          ".edgtf-follow-portfolio-info .edgtf-portfolio-single-holder .edgtf-ps-info-sticky-holder"
        );
      s.length &&
        ((e = s.parent()),
        (t = e.offset().top),
        (n = e.height()),
        (o = r(".edgtf-ps-image-holder").height()),
        (a = r(".header-appear, .edgtf-fixed-wrapper")),
        (d = a.length ? a.height() : 0),
        (i = 30));
      return {
        init: function () {
          var e;
          s.length &&
            n <= o &&
            edgtf.scroll >=
              t - d - edgtfGlobalVars.vars.edgtfAddForAdminBar - i &&
            ((e =
              edgtf.scroll -
              t +
              edgtfGlobalVars.vars.edgtfAddForAdminBar +
              d +
              i),
            o < e + n && (e = o - n + i),
            s.stop().animate({ marginTop: e })),
            r(window).scroll(function () {
              var e;
              s.length &&
                n <= o &&
                ((e =
                  (d = 0 < edgtf.scroll && a.length ? a.height() : d) +
                  edgtfGlobalVars.vars.edgtfAddForAdminBar +
                  i),
                edgtf.scroll >= t - e
                  ? edgtf.scroll + n + e + 2 * i < t + o
                    ? (s
                        .stop()
                        .animate({ marginTop: edgtf.scroll - t + e + 2 * i }),
                      (d = 0))
                    : s.stop().animate({ marginTop: o - n })
                  : s.stop().animate({ marginTop: 0 }));
            });
        },
      };
    };
  })(jQuery),
  (function (o) {
    "use strict";
    var e = {};
    function t() {
      n();
    }
    function n() {
      var e = o(".edgtf-accordion-holder");
      e.length &&
        e.each(function () {
          var e,
            t,
            n = o(this);
          n.hasClass("edgtf-accordion") &&
            n.accordion({
              animate: "swing",
              collapsible: !0,
              active: 0,
              icons: "",
              heightStyle: "content",
            }),
            n.hasClass("edgtf-toggle") &&
              ((n = (t = (e = o(this)).find(".edgtf-accordion-title")).next()),
              e.addClass(
                "accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset"
              ),
              t.addClass(
                "ui-accordion-header ui-state-default ui-corner-top ui-corner-bottom"
              ),
              n
                .addClass(
                  "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
                )
                .hide(),
              t.each(function () {
                var e = o(this);
                e.on("mouseenter mouseleave", function () {
                  e.toggleClass("ui-state-hover");
                }),
                  e.on("click", function () {
                    e.toggleClass(
                      "ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom"
                    ),
                      e
                        .next()
                        .toggleClass("ui-accordion-content-active")
                        .slideToggle(400);
                  });
              }));
        });
    }
    ((edgtf.modules.accordions = e).edgtfInitAccordions = n),
      (e.edgtfOnDocumentReady = t),
      o(document).ready(t),
      o(window).on("load", function () {
        o(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_accordion.default",
            function () {
              n();
            }
          );
        });
      });
  })(jQuery),
  (function (i) {
    "use strict";
    var e = {};
    function t() {
      n();
    }
    function n() {
      var e,
        d,
        t = i(".edgtf-anchor-menu");
      t.length &&
        1024 < edgtf.windowWidth &&
        (t.remove(),
        i(".edgtf-content-inner").append(t.addClass("edgtf-init")),
        (e = i("div[data-edgtf-anchor]")),
        (d = t.find(".edgtf-anchor")),
        e.length &&
          d.length &&
          (d.first().addClass("edgtf-active"),
          i(window).scroll(function () {
            e.each(function (e) {
              var t = i(this),
                n = t.offset().top,
                o = t.outerHeight(),
                a = edgtf.windowHeight / 5,
                t = 0;
              0 === edgtf.scroll
                ? d.removeClass("edgtf-active").first().addClass("edgtf-active")
                : n <= edgtf.scroll + a && n + o >= edgtf.scroll + a
                ? t !== e &&
                  ((t = e),
                  d.removeClass("edgtf-active").eq(e).addClass("edgtf-active"))
                : edgtf.scroll + edgtf.windowHeight ==
                    edgtf.document.height() &&
                  d.removeClass("edgtf-active").last().addClass("edgtf-active");
            });
          })));
    }
    ((edgtf.modules.anchorMenu = e).edgtfAnchorMenu = n),
      (e.edgtfOnDocumentReady = t),
      i(document).ready(t),
      i(window).on("load", function () {
        i(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/manon_anchor_menu.default",
            function () {
              n();
            }
          );
        });
      });
  })(jQuery),
  (function (a) {
    "use strict";
    var e = {};
    function t() {
      n();
    }
    function n() {
      var n,
        o,
        e = a(
          ".edgtf-grow-in, .edgtf-fade-in-down, .edgtf-element-from-fade, .edgtf-element-from-left, .edgtf-element-from-right, .edgtf-element-from-top, .edgtf-element-from-bottom, .edgtf-flip-in, .edgtf-x-rotate, .edgtf-z-rotate, .edgtf-y-translate, .edgtf-fade-in, .edgtf-fade-in-left-x-rotate"
        );
      e.length &&
        e.each(function () {
          var t = a(this);
          t.appear(
            function () {
              var e;
              (n = t.data("animation")),
                (o = parseInt(t.data("animation-delay"))),
                void 0 !== n &&
                  "" !== n &&
                  ((e = n + "-on"),
                  setTimeout(function () {
                    t.addClass(e);
                  }, o));
            },
            { accX: 0, accY: edgtfGlobalVars.vars.edgtfElementAppearAmount }
          );
        });
    }
    ((edgtf.modules.animationHolder = e).edgtfInitAnimationHolder = n),
      (e.edgtfOnDocumentReady = t),
      a(document).ready(t);
  })(jQuery),
  (function (s) {
    "use strict";
    var e = {};
    function t() {
      n().init();
    }
    ((edgtf.modules.button = e).edgtfButton = n),
      (e.edgtfOnDocumentReady = t),
      s(document).ready(t),
      s(window).on("load", function () {
        s(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_button.default",
            function () {
              n().init();
            }
          );
        });
      });
    var n = function () {
      var e = s(".edgtf-btn");
      return {
        init: function () {
          e.length &&
            e.each(function () {
              var e, t, n, o, a, d, i;
              void 0 !== (e = s(this)).data("hover-color") &&
                ((a = function (e) {
                  e.data.button.css("color", e.data.color);
                }),
                (t = e.css("color")),
                (n = e.data("hover-color")),
                e.on("mouseenter", { button: e, color: n }, a),
                e.on("mouseleave", { button: e, color: t }, a)),
                void 0 !== (a = s(this)).data("hover-bg-color") &&
                  ((i = function (e) {
                    e.data.button.css("background-color", e.data.color);
                  }),
                  (d = a.css("background-color")),
                  (o = a.data("hover-bg-color")),
                  a.on("mouseenter", { button: a, color: o }, i),
                  a.on("mouseleave", { button: a, color: d }, i)),
                void 0 !== (o = s(this)).data("hover-border-color") &&
                  ((a = function (e) {
                    e.data.button.css("border-color", e.data.color);
                  }),
                  (d = o.css("borderTopColor")),
                  (i = o.data("hover-border-color")),
                  o.on("mouseenter", { button: o, color: i }, a),
                  o.on("mouseleave", { button: o, color: d }, a));
            });
        },
      };
    };
  })(jQuery),
  (function (v) {
    "use strict";
    var e = {};
    function t() {
      n();
    }
    function n() {
      var a,
        d,
        i,
        s,
        r,
        l,
        f,
        g,
        c,
        u,
        m,
        e = v(".edgtf-countdown"),
        t = new Date(),
        h = t.getMonth(),
        p = t.getFullYear();
      e.length &&
        e.each(function () {
          var e,
            t,
            n = v(this).attr("id"),
            o = v("#" + n);
          (a = o.data("year")),
            (d = o.data("month")),
            (i = o.data("day")),
            (s = o.data("hour")),
            (r = o.data("minute")),
            (l = o.data("timezone")),
            (f = o.data("month-label")),
            (g = o.data("day-label")),
            (c = o.data("hour-label")),
            (u = o.data("minute-label")),
            (m = o.data("second-label")),
            (e = o.data("digit-size")),
            (t = o.data("label-size")),
            (h === d && p === a) || (d -= 1),
            o.countdown({
              until: new Date(a, d, i, s, r, 44),
              labels: ["", f, "", g, c, u, m],
              format: "ODHMS",
              timezone: l,
              padZeroes: !0,
              onTick: function () {
                o
                  .find(".countdown-amount")
                  .css({ "font-size": e + "px", "line-height": e + "px" }),
                  o.find(".countdown-period").css({ "font-size": t + "px" });
              },
            });
        });
    }
    ((edgtf.modules.countdown = e).edgtfInitCountdown = n),
      (e.edgtfOnDocumentReady = t),
      v(document).ready(t),
      v(window).on("load", function () {
        v(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_countdown.default",
            function () {
              n();
            }
          );
        });
      });
  })(jQuery),
  (function (o) {
    "use strict";
    var e = {};
    function t() {
      n();
    }
    function n() {
      var e = o(".edgtf-counter-holder");
      e.length &&
        e.each(function () {
          var t = o(this),
            n = t.find(".edgtf-counter");
          t.appear(
            function () {
              var e;
              t.css("opacity", "1"),
                n.hasClass("edgtf-zero-counter")
                  ? ((e = parseFloat(n.text())),
                    n.countTo({
                      from: 0,
                      to: e,
                      speed: 1500,
                      refreshInterval: 100,
                    }))
                  : n.absoluteCounter({ speed: 2e3, fadeInDelay: 1e3 });
            },
            { accX: 0, accY: edgtfGlobalVars.vars.edgtfElementAppearAmount }
          );
        });
    }
    ((edgtf.modules.counter = e).edgtfInitCounter = n),
      (e.edgtfOnDocumentReady = t),
      o(document).ready(t),
      o(window).on("load", function () {
        o(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_counter.default",
            function () {
              n();
            }
          );
        });
      });
  })(jQuery),
  (function (r) {
    "use strict";
    var e = {};
    function t() {
      o();
    }
    function n() {
      a(),
        r(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_custom_font.default",
            function () {
              a();
            }
          );
        });
    }
    function o() {
      var e = r(".edgtf-custom-font-holder");
      e.length &&
        e.each(function () {
          var e = r(this),
            t = "",
            n = "",
            o = "",
            a = "",
            d = "",
            i = "",
            s = "";
          void 0 !== e.data("item-class") &&
            !1 !== e.data("item-class") &&
            (t = e.data("item-class")),
            void 0 !== e.data("font-size-1366") &&
              !1 !== e.data("font-size-1366") &&
              (n += "font-size: " + e.data("font-size-1366") + " !important;"),
            void 0 !== e.data("font-size-1024") &&
              !1 !== e.data("font-size-1024") &&
              (o += "font-size: " + e.data("font-size-1024") + " !important;"),
            void 0 !== e.data("font-size-768") &&
              !1 !== e.data("font-size-768") &&
              (a += "font-size: " + e.data("font-size-768") + " !important;"),
            void 0 !== e.data("font-size-680") &&
              !1 !== e.data("font-size-680") &&
              (d += "font-size: " + e.data("font-size-680") + " !important;"),
            void 0 !== e.data("line-height-1366") &&
              !1 !== e.data("line-height-1366") &&
              (n +=
                "line-height: " + e.data("line-height-1366") + " !important;"),
            void 0 !== e.data("line-height-1024") &&
              !1 !== e.data("line-height-1024") &&
              (o +=
                "line-height: " + e.data("line-height-1024") + " !important;"),
            void 0 !== e.data("line-height-768") &&
              !1 !== e.data("line-height-768") &&
              (a +=
                "line-height: " + e.data("line-height-768") + " !important;"),
            void 0 !== e.data("line-height-680") &&
              !1 !== e.data("line-height-680") &&
              (d +=
                "line-height: " + e.data("line-height-680") + " !important;"),
            (n.length || o.length || a.length || d.length) &&
              (n.length &&
                (s +=
                  "@media only screen and (max-width: 1366px) {.edgtf-custom-font-holder." +
                  t +
                  " { " +
                  n +
                  " } }"),
              o.length &&
                (s +=
                  "@media only screen and (max-width: 1024px) {.edgtf-custom-font-holder." +
                  t +
                  " { " +
                  o +
                  " } }"),
              a.length &&
                (s +=
                  "@media only screen and (max-width: 768px) {.edgtf-custom-font-holder." +
                  t +
                  " { " +
                  a +
                  " } }"),
              d.length &&
                (s +=
                  "@media only screen and (max-width: 680px) {.edgtf-custom-font-holder." +
                  t +
                  " { " +
                  d +
                  " } }")),
            (i = s.length ? '<style type="text/css">' + s + "</style>" : i)
              .length && r("head").append(i);
        });
    }
    function a() {
      var e = r(".edgtf-cf-typed");
      e.length &&
        e.each(function () {
          var e = r(this),
            t = e.parent(".edgtf-cf-typed-wrap"),
            n = t.parent(".edgtf-custom-font-holder"),
            o = {
              strings: t.data("strings"),
              typeSpeed: 90,
              backDelay: 700,
              loop: !0,
              contentType: "text",
              loopCount: !1,
              cursorChar: "_",
            };
          n.appear(
            function () {
              e.hasClass("qodef--initialized") ||
                (new Typed(e[0], o), e.addClass("qodef--initialized"));
            },
            { accX: 0, accY: edgtfGlobalVars.vars.edgtfElementAppearAmount }
          );
        });
    }
    ((edgtf.modules.customFont = e).edgtfCustomFontResize = o),
      (e.edgtfCustomFontTypeOut = a),
      (e.edgtfOnDocumentReady = t),
      (e.edgtfOnWindowLoad = n),
      r(document).ready(t),
      r(window).on("load", n);
  })(jQuery),
  (function (l) {
    "use strict";
    var e = {};
    function t() {
      n();
    }
    function n() {
      var e = l(".edgtf-elements-holder");
      e.length &&
        e.each(function () {
          var e = l(this).children(".edgtf-eh-item"),
            t = "",
            r = "";
          e.each(function () {
            var e,
              t = l(this),
              n = "",
              o = "",
              a = "",
              d = "",
              i = "",
              s = "";
            void 0 !== t.data("item-class") &&
              !1 !== t.data("item-class") &&
              (n = t.data("item-class")),
              void 0 !== t.data("1367-1600") &&
                !1 !== t.data("1367-1600") &&
                (o = t.data("1367-1600")),
              void 0 !== t.data("1025-1366") &&
                !1 !== t.data("1025-1366") &&
                (a = t.data("1025-1366")),
              void 0 !== t.data("769-1024") &&
                !1 !== t.data("769-1024") &&
                (d = t.data("769-1024")),
              void 0 !== t.data("681-768") &&
                !1 !== t.data("681-768") &&
                (i = t.data("681-768")),
              void 0 !== t.data("680") &&
                !1 !== t.data("680") &&
                (s = t.data("680")),
              (o.length ||
                a.length ||
                d.length ||
                i.length ||
                s.length ||
                "".length) &&
                (o.length &&
                  (r +=
                    "@media only screen and (min-width: 1367px) and (max-width: 1600px) {.edgtf-eh-item-content." +
                    n +
                    " { padding: " +
                    o +
                    " !important; } }"),
                a.length &&
                  (r +=
                    "@media only screen and (min-width: 1025px) and (max-width: 1366px) {.edgtf-eh-item-content." +
                    n +
                    " { padding: " +
                    a +
                    " !important; } }"),
                d.length &&
                  (r +=
                    "@media only screen and (min-width: 769px) and (max-width: 1024px) {.edgtf-eh-item-content." +
                    n +
                    " { padding: " +
                    d +
                    " !important; } }"),
                i.length &&
                  (r +=
                    "@media only screen and (min-width: 681px) and (max-width: 768px) {.edgtf-eh-item-content." +
                    n +
                    " { padding: " +
                    i +
                    " !important; } }"),
                s.length &&
                  (r +=
                    "@media only screen and (max-width: 680px) {.edgtf-eh-item-content." +
                    n +
                    " { padding: " +
                    s +
                    " !important; } }")),
              "function" != typeof edgtf.modules.common.edgtfOwlSlider ||
                ((e = t.find(".edgtf-owl-slider")).length &&
                  setTimeout(function () {
                    e.trigger("refresh.owl.carousel");
                  }, 100));
          }),
            (t = r.length ? '<style type="text/css">' + r + "</style>" : t)
              .length && l("head").append(t);
        });
    }
    ((edgtf.modules.elementsHolder = e).edgtfInitElementsHolderResponsiveStyle =
      n),
      (e.edgtfOnDocumentReady = t),
      l(document).ready(t);
  })(jQuery),
  (function (h) {
    "use strict";
    var e = {};
    function t() {
      o();
    }
    function n() {
      h(window).on("elementor/frontend/init", function () {
        elementorFrontend.hooks.addAction(
          "frontend/element_ready/edgtf_google_map.default",
          function () {
            o();
          }
        );
      });
    }
    function o() {
      var e = h(".edgtf-google-map");
      e.length &&
        e.each(function () {
          var e,
            t,
            n,
            o,
            a,
            d,
            i,
            s,
            r,
            l,
            f,
            g,
            c = h(this),
            u = !1,
            m = "";
          void 0 !== c.data("snazzy-map-style") &&
            "yes" === c.data("snazzy-map-style") &&
            ((u = !0),
            (t = (e = c.parent().find(".edgtf-snazzy-map")).val()),
            e.length &&
              t.length &&
              (m = JSON.parse(
                t
                  .replace(/`{`/g, "[")
                  .replace(/`}`/g, "]")
                  .replace(/``/g, '"')
                  .replace(/`/g, "")
              ))),
            void 0 !== c.data("custom-map-style") &&
              (n = c.data("custom-map-style")),
            void 0 !== c.data("color-overlay") &&
              !1 !== c.data("color-overlay") &&
              (o = c.data("color-overlay")),
            void 0 !== c.data("saturation") &&
              !1 !== c.data("saturation") &&
              (a = c.data("saturation")),
            void 0 !== c.data("lightness") &&
              !1 !== c.data("lightness") &&
              (d = c.data("lightness")),
            void 0 !== c.data("zoom") &&
              !1 !== c.data("zoom") &&
              (i = c.data("zoom")),
            void 0 !== c.data("pin") &&
              !1 !== c.data("pin") &&
              (s = c.data("pin")),
            void 0 !== c.data("height") &&
              !1 !== c.data("height") &&
              (r = c.data("height")),
            void 0 !== c.data("unique-id") &&
              !1 !== c.data("unique-id") &&
              (l = c.data("unique-id")),
            (function (e, t, n, o, a, d, i, s, r, l, f, g, c, u) {
              if ("object" == typeof google) {
                var m = [];
                (m =
                  e && t.length
                    ? t
                    : [
                        {
                          stylers: [
                            { hue: o },
                            { saturation: a },
                            { lightness: d },
                            { gamma: 1 },
                          ],
                        },
                      ]),
                  (e =
                    e || "yes" === n
                      ? "edgtf-style"
                      : google.maps.MapTypeId.ROADMAP),
                  (i = "yes" === i);
                n = new google.maps.StyledMapType(m, { name: "Google Map" });
                c = new google.maps.Geocoder();
                m = new google.maps.LatLng(-34.397, 150.644);
                isNaN(l) || (l += "px");
                var h,
                  e = {
                    zoom: s,
                    scrollwheel: i,
                    center: m,
                    zoomControl: !0,
                    zoomControlOptions: {
                      style: google.maps.ZoomControlStyle.SMALL,
                      position: google.maps.ControlPosition.RIGHT_CENTER,
                    },
                    scaleControl: !1,
                    scaleControlOptions: {
                      position: google.maps.ControlPosition.LEFT_CENTER,
                    },
                    streetViewControl: !1,
                    streetViewControlOptions: {
                      position: google.maps.ControlPosition.LEFT_CENTER,
                    },
                    panControl: !1,
                    panControlOptions: {
                      position: google.maps.ControlPosition.LEFT_CENTER,
                    },
                    mapTypeControl: !1,
                    mapTypeControlOptions: {
                      mapTypeIds: [
                        google.maps.MapTypeId.ROADMAP,
                        "edgtf-style",
                      ],
                      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                      position: google.maps.ControlPosition.LEFT_CENTER,
                    },
                    mapTypeId: e,
                  };
                for (
                  (g = new google.maps.Map(
                    document.getElementById(r),
                    e
                  )).mapTypes.set("edgtf-style", n),
                    h = 0;
                  h < u.length;
                  ++h
                )
                  !(function (o, a, d, e) {
                    var t, i;
                    "" !== o &&
                      ((t =
                        '<div id="content"><div id="siteNotice"></div><div id="bodyContent"><p>' +
                        o +
                        "</p></div></div>"),
                      (i = new google.maps.InfoWindow({ content: t })),
                      e.geocode({ address: o }, function (e, t) {
                        var n;
                        t === google.maps.GeocoderStatus.OK &&
                          (d.setCenter(e[0].geometry.location),
                          (n = new google.maps.Marker({
                            map: d,
                            position: e[0].geometry.location,
                            icon: a,
                            title: o.store_title,
                          })),
                          google.maps.event.addListener(
                            n,
                            "click",
                            function () {
                              i.open(d, n);
                            }
                          ),
                          google.maps.event.addDomListener(
                            window,
                            "resize",
                            function () {
                              d.setCenter(e[0].geometry.location);
                            }
                          ));
                      }));
                  })(u[h], f, g, c);
                document.getElementById(r).style.height = l;
              }
            })(
              u,
              m,
              n,
              o,
              a,
              d,
              (f =
                void 0 !== c.data("scroll-wheel") ? c.data("scroll-wheel") : f),
              i,
              "edgtf-map-" + l,
              r,
              s,
              "map_" + l,
              "geocoder_" + l,
              (g =
                void 0 !== c.data("addresses") && !1 !== c.data("addresses")
                  ? c.data("addresses")
                  : g)
            );
        });
    }
    ((edgtf.modules.googleMap = e).edgtfShowGoogleMap = o),
      (e.edgtfOnDocumentReady = t),
      (e.edgtfOnWindowLoad = n),
      h(document).ready(t),
      h(window).on("load", n);
  })(jQuery),
  (function (l) {
    "use strict";
    var e = {};
    function t() {
      n().init();
    }
    ((edgtf.modules.icon = e).edgtfIcon = n),
      (e.edgtfOnDocumentReady = t),
      l(document).ready(t),
      l(window).on("load", function () {
        l(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_icon.default",
            function () {
              n().init();
            }
          );
        });
      });
    var n = function () {
      var e = l(".edgtf-icon-shortcode");
      return {
        init: function () {
          e.length &&
            e.each(function () {
              var e, t, n, o, a, d, i, s, r;
              (e = l(this)).hasClass("edgtf-icon-animation") &&
                e.appear(
                  function () {
                    e.parent(".edgtf-icon-animation-holder").addClass(
                      "edgtf-icon-animation-show"
                    );
                  },
                  {
                    accX: 0,
                    accY: edgtfGlobalVars.vars.edgtfElementAppearAmount,
                  }
                ),
                void 0 !== (t = l(this)).data("hover-color") &&
                  ((i = function (e) {
                    e.data.icon.css("color", e.data.color);
                  }),
                  (n = t.find(".edgtf-icon-element")),
                  (o = t.data("hover-color")),
                  (a = n.css("color")),
                  "" !== o &&
                    (t.on("mouseenter", { icon: n, color: o }, i),
                    t.on("mouseleave", { icon: n, color: a }, i))),
                void 0 !== (i = l(this)).data("hover-background-color") &&
                  ((r = function (e) {
                    e.data.icon.css("background-color", e.data.color);
                  }),
                  (d = i.data("hover-background-color")),
                  (s = i.css("background-color")),
                  "" !== d &&
                    (i.on("mouseenter", { icon: i, color: d }, r),
                    i.on("mouseleave", { icon: i, color: s }, r))),
                void 0 !== (d = l(this)).data("hover-border-color") &&
                  ((i = function (e) {
                    e.data.icon.css("border-color", e.data.color);
                  }),
                  (s = d.data("hover-border-color")),
                  (r = d.css("borderTopColor")),
                  "" !== s &&
                    (d.on("mouseenter", { icon: d, color: s }, i),
                    d.on("mouseleave", { icon: d, color: r }, i)));
            });
        },
      };
    };
  })(jQuery),
  (function (t) {
    "use strict";
    var e = {};
    function n() {
      o().init();
    }
    ((edgtf.modules.iconListItem = e).edgtfInitIconList = o),
      (e.edgtfOnDocumentReady = n),
      t(document).ready(n);
    var o = function () {
      var e = t(".edgtf-animate-list");
      return {
        init: function () {
          e.length &&
            e.each(function () {
              var e;
              (e = t(this)),
                setTimeout(function () {
                  e.appear(
                    function () {
                      e.addClass("edgtf-appeared");
                    },
                    {
                      accX: 0,
                      accY: edgtfGlobalVars.vars.edgtfElementAppearAmount,
                    }
                  );
                }, 30);
            });
        },
      };
    };
  })(jQuery),
  (function (a) {
    "use strict";
    var e = {};
    function t() {
      var e;
      n(),
        (e = a(".edgtf-image-gallery.edgtf-ig-fullscreen")).length &&
          e.each(function () {
            function e() {
              (o = (
                1024 < edgtf.windowWidth
                  ? a(".edgtf-page-header")
                  : a(".edgtf-mobile-header")
              ).outerHeight(!0)),
                edgtf.body.hasClass("admin-bar") &&
                  (a("html").css("height", "auto"),
                  (o += a("#wpadminbar").outerHeight()));
              var e = a(".edgtf-faux-footer").outerHeight(!0);
              (t = edgtf.windowHeight - o - e),
                n.find(".owl-item").each(function () {
                  a(this).css({ height: t });
                }),
                n.find(".owl-nav").css({ height: t });
            }
            var t,
              n = a(this),
              o = 0;
            e(),
              a(window).on("resize", function () {
                e();
              });
          });
    }
    function n() {
      var e = a(".edgtf-image-gallery.edgtf-mousewheel-enabled");
      e.length &&
        e.each(function () {
          var t = a(this).find(".edgtf-owl-slider"),
            n = !0;
          t.on("translate.owl.carousel", function () {
            n = !1;
          }),
            t.on("translated.owl.carousel", function () {
              n = !0;
            }),
            t.on("mousewheel", ".owl-stage", function (e) {
              n &&
                (0 < e.deltaY ? t.trigger("prev.owl") : t.trigger("next.owl"),
                e.preventDefault());
            });
        });
    }
    ((edgtf.modules.imageGallery = e).edgtfInitImageGalleryMousewheelScroll =
      n),
      (e.edgtfOnWindowLoad = t),
      a(window).on("load", t);
  })(jQuery),
  (function (a) {
    "use strict";
    var e = {};
    function t() {
      n(), o().init();
    }
    function n() {
      var t,
        n,
        o,
        e = a(".edgtf-ils-holder");
      e.length &&
        ((t = e.find(".edgtf-ils-item-image")),
        (n = e.find(".edgtf-ils-item-link")),
        (o = function (e) {
          t.add(n)
            .removeClass("edgtf-active")
            .filter(function () {
              return a(this).data("index") == e;
            })
            .addClass("edgtf-active");
        }),
        e.addClass("edgtf-loaded"),
        o(0),
        n.on("touchstart mouseenter", function () {
          var e = a(this).data("index");
          o(e);
        }));
    }
    function o() {
      function e() {
        var e = o.find(".edgtf-ils-content-inner");
        o.height(e.outerHeight());
      }
      var o = a(".edgtf-ils-holder");
      return {
        init: function () {
          var t, n;
          o.length &&
            ((t = a(".edgtf-ils-content-holder")),
            (n = -100),
            e(),
            (function e() {
              if (n == window.pageYOffset) return requestAnimationFrame(e), !1;
              (n = window.pageYOffset),
                t.css({ transform: "translate3d(0px, -" + n + "px, 0px)" }),
                requestAnimationFrame(e);
            })());
        },
        resize: function () {
          o.length && e();
        },
      };
    }
    ((edgtf.modules.interactiveLinkShowcase =
      e).edgtfInitInteractiveLinkShowcase = n),
      (e.edgtfOnDocumentReady = t),
      a(document).ready(t),
      a(window).on("load", function () {
        a(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_interactive_link_showcase.default",
            function () {
              n();
            }
          );
        });
      }),
      a(window).on("resize", function () {
        o().resize();
      });
  })(jQuery),
  (function (t) {
    "use strict";
    var e = {};
    function n() {
      o();
    }
    function o() {
      var e = t(".edgtf-pie-chart-holder");
      e.length &&
        e.each(function () {
          var n = t(this),
            o = n.children(".edgtf-pc-percentage"),
            a = "#000000",
            d = "#ffffff",
            i = 192;
          void 0 !== o.data("size") &&
            "" !== o.data("size") &&
            (i = o.data("size")),
            void 0 !== o.data("bar-color") &&
              "" !== o.data("bar-color") &&
              (a = o.data("bar-color")),
            void 0 !== o.data("track-color") &&
              "" !== o.data("track-color") &&
              (d = o.data("track-color")),
            o.appear(
              function () {
                var e, t;
                (t = (e = o).find(".edgtf-pc-percent")),
                  (e = parseFloat(t.text())),
                  t.countTo({
                    from: 0,
                    to: e,
                    speed: 1500,
                    refreshInterval: 50,
                  }),
                  n.css("opacity", "1"),
                  o.easyPieChart({
                    barColor: a,
                    trackColor: d,
                    scaleColor: !1,
                    lineCap: "butt",
                    lineWidth: 1,
                    animate: 1500,
                    size: i,
                  });
              },
              { accX: 0, accY: edgtfGlobalVars.vars.edgtfElementAppearAmount }
            );
        });
    }
    ((edgtf.modules.pieChart = e).edgtfInitPieChart = o),
      (e.edgtfOnDocumentReady = n),
      t(document).ready(n),
      t(window).on("load", function () {
        t(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_pie_chart.default",
            function () {
              o();
            }
          );
        });
      });
  })(jQuery),
  (function (t) {
    "use strict";
    var e = {};
    function n() {
      o();
    }
    function o() {
      var e = t(".edgtf-process-holder");
      e.length &&
        e.each(function () {
          var e = t(this);
          e.appear(
            function () {
              e.addClass("edgtf-process-appeared");
            },
            { accX: 0, accY: edgtfGlobalVars.vars.edgtfElementAppearAmount }
          );
        });
    }
    ((edgtf.modules.process = e).edgtfInitProcess = o),
      (e.edgtfOnDocumentReady = n),
      t(document).ready(n),
      t(window).on("load", function () {
        t(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_process.default",
            function () {
              o();
            }
          );
        });
      });
  })(jQuery),
  (function (i) {
    "use strict";
    var e = {};
    function t() {
      n();
    }
    function n() {
      var e = i(".edgtf-progress-bar");
      e.length &&
        e.each(function () {
          var n = i(this),
            o = n.find(".edgtf-pb-content"),
            a = n.find(".edgtf-pb-percent"),
            d = o.data("percentage");
          n.appear(function () {
            var e, t;
            (e = a),
              (t = parseFloat(d)),
              e.length &&
                e.each(function () {
                  var e = i(this);
                  e.css("opacity", "1"),
                    e.countTo({
                      from: 0,
                      to: t,
                      speed: 2e3,
                      refreshInterval: 50,
                    });
                }),
              o.css("width", "0%").animate({ width: d + "%" }, 2e3),
              n.hasClass("edgtf-pb-percent-floating") &&
                a.css("left", "0%").animate({ left: d + "%" }, 2e3);
          });
        });
    }
    ((edgtf.modules.progressBar = e).edgtfInitProgressBars = n),
      (e.edgtfOnDocumentReady = t),
      i(document).ready(t),
      i(window).on("load", function () {
        i(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_progress_bar.default",
            function () {
              n();
            }
          );
        });
      });
  })(jQuery),
  (function (o) {
    "use strict";
    var e = {};
    function t() {
      n();
    }
    function n() {
      var e = o(".edgtf-tabs");
      e.length &&
        e.each(function () {
          var e = o(this);
          e.children(".edgtf-tab-container").each(function (e) {
            e += 1;
            var t = o(this),
              n = t.attr("id"),
              t = t.parent().find(".edgtf-tabs-nav li:nth-child(" + e + ") a"),
              e = t.attr("href");
            -1 < (n = "#" + n).indexOf(e) && t.attr("href", n);
          }),
            e.tabs(),
            o(".edgtf-tabs a.edgtf-external-link").off("click");
        });
    }
    ((edgtf.modules.tabs = e).edgtfInitTabs = n),
      (e.edgtfOnDocumentReady = t),
      o(document).ready(t),
      o(window).on("load", function () {
        o(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_tabs.default",
            function () {
              n();
            }
          );
        });
      });
  })(jQuery),
  (function (a) {
    "use strict";
    var e = {};
    function t() {
      var e;
      n().init(),
        (e = a(".edgtf-text-marquee")).length &&
          e.each(function () {
            var e,
              t = a(this),
              n = 1,
              o = 1;
            edgtf.windowWidth < 1480 && (n = 0.8),
              edgtf.windowWidth < 1200 && (n = 0.7),
              edgtf.windowWidth < 768 && ((n = 0.55), (o = 0.65)),
              edgtf.windowWidth < 600 && ((n = 0.45), (o = 0.55)),
              edgtf.windowWidth < 480 && ((n = 0.4), (o = 0.5)),
              200 < (e = parseInt(t.css("font-size")))
                ? (e = Math.round(e * n))
                : 60 < e && (e = Math.round(e * o)),
              t.css("font-size", e + "px"),
              (70 < (e = parseInt(t.css("line-height"))) &&
                edgtf.windowWidth < 1440) ||
              (35 < e && edgtf.windowWidth < 768)
                ? (e = "1.2em")
                : (e += "px"),
              t.css("line-height", e);
          });
    }
    function n() {
      function n(e) {
        (this.holder = e),
          (this.els = this.holder.find(".edgtf-marquee-element")),
          (this.delta = 0.05);
      }
      var e = a(".edgtf-text-marquee"),
        o = function (n) {
          if (
            ((e = n.holder),
            !(
              edgtf.scroll + edgtf.windowHeight >= e.offset().top &&
              edgtf.scroll < e.offset().top + e.height()
            ))
          )
            return (
              requestAnimationFrame(function () {
                o(n);
              }),
              !1
            );
          var e;
          n.els.each(function (e) {
            var t = a(this);
            t.css("transform", "translate3d(" + t.data("x") + "%, 0, 0)"),
              t.data("x", (t.data("x") - n.delta).toFixed(2)),
              t.offset().left < -t.width() - 25 &&
                t.data("x", 100 * Math.abs(e - 1));
          }),
            requestAnimationFrame(function () {
              o(n);
            });
        };
      return {
        init: function () {
          e.length &&
            e.each(function () {
              var e,
                t = new n(a(this));
              (e = t).els.each(function (e) {
                a(this).data("x", 0);
              }),
                requestAnimationFrame(function () {
                  o(e);
                });
            });
        },
      };
    }
    ((edgtf.modules.textMarquee = e).edgtfTextMarquee = n),
      (e.edgtfOnDocumentReady = t),
      a(document).ready(t),
      a(window).on("load", function () {
        a(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_text_marquee.default",
            function () {
              n();
            }
          );
        });
      });
  })(jQuery),
  (function (r) {
    "use strict";
    var e = {};
    function t() {
      n();
    }
    function n() {
      var d,
        i = r(".edgtf-vertical-split-slider"),
        s = !0;
      i.length &&
        (edgtf.body.hasClass("edgtf-vss-initialized") &&
          (edgtf.body.removeClass("edgtf-vss-initialized"),
          r.fn.multiscroll.destroy()),
        i.height(edgtf.windowHeight).animate({ opacity: 1 }, 300),
        (d = ""),
        edgtf.body.hasClass("edgtf-light-header")
          ? (d = "light")
          : edgtf.body.hasClass("edgtf-dark-header") && (d = "dark"),
        i.multiscroll({
          scrollingSpeed: 700,
          easing: "easeInOutQuart",
          navigation: !0,
          useAnchorsOnLoad: !1,
          sectionSelector: ".edgtf-vss-ms-section",
          leftSelector: ".edgtf-vss-ms-left",
          rightSelector: ".edgtf-vss-ms-right",
          afterRender: function () {
            l(
              r(".edgtf-vss-ms-left .edgtf-vss-ms-section:first-child").data(
                "header-style"
              ),
              d
            ),
              edgtf.body.addClass("edgtf-vss-initialized");
            var e = r("div.wpcf7 > form");
            e.length &&
              e.each(function () {
                var t = r(this);
                t.find(".wpcf7-submit")
                  .off()
                  .on("click", function (e) {
                    e.preventDefault(), wpcf7.submit(t);
                  });
              });
            var t = r('<div class="edgtf-vss-responsive"></div>'),
              n = i.find(".edgtf-vss-ms-left > div"),
              o = i.find(".edgtf-vss-ms-right > div");
            i.after(t);
            for (var a = 0; a < n.length; a++)
              t.append(r(n[a]).clone(!0)),
                t.append(r(o[n.length - 1 - a]).clone(!0));
            e = r(".edgtf-vss-responsive .edgtf-google-map");
            e.length &&
              e.each(function () {
                var e = r(this);
                e.empty();
                var t = Math.floor(1e5 * Math.random() + 1);
                e.attr("id", "edgtf-map-" + t), e.data("unique-id", t);
              }),
              "function" ==
                typeof edgtf.modules.animationHolder.edgtfInitAnimationHolder &&
                edgtf.modules.animationHolder.edgtfInitAnimationHolder(),
              "function" == typeof edgtf.modules.button.edgtfButton &&
                edgtf.modules.button.edgtfButton().init(),
              "function" ==
                typeof edgtf.modules.elementsHolder
                  .edgtfInitElementsHolderResponsiveStyle &&
                edgtf.modules.elementsHolder.edgtfInitElementsHolderResponsiveStyle(),
              "function" == typeof edgtf.modules.googleMap.edgtfShowGoogleMap &&
                edgtf.modules.googleMap.edgtfShowGoogleMap(),
              "function" == typeof edgtf.modules.icon.edgtfIcon &&
                edgtf.modules.icon.edgtfIcon().init(),
              s &&
                "function" ==
                  typeof edgtf.modules.progressBar.edgtfInitProgressBars &&
                (r(".edgtf-vss-ms-left .edgtf-vss-ms-section.active").find(
                  ".edgtf-progress-bar"
                ).length ||
                  r(".edgtf-vss-ms-right .edgtf-vss-ms-section.active").find(
                    ".edgtf-progress-bar"
                  ).length) &&
                (edgtf.modules.progressBar.edgtfInitProgressBars(), (s = !1));
          },
          onLeave: function (e, t) {
            var n, o;
            s &&
              "function" ==
                typeof edgtf.modules.progressBar.edgtfInitProgressBars &&
              (r(".edgtf-vss-ms-left .edgtf-vss-ms-section.active").find(
                ".edgtf-progress-bar"
              ).length ||
                r(".edgtf-vss-ms-right .edgtf-vss-ms-section.active").find(
                  ".edgtf-progress-bar"
                ).length) &&
              (setTimeout(function () {
                edgtf.modules.progressBar.edgtfInitProgressBars();
              }, 700),
              (s = !1)),
              (o = t),
              (n = i).hasClass("edgtf-vss-scrolling-animation") &&
                (1 < o && !n.hasClass("edgtf-vss-scrolled")
                  ? n.addClass("edgtf-vss-scrolled")
                  : 1 === o &&
                    n.hasClass("edgtf-vss-scrolled") &&
                    n.removeClass("edgtf-vss-scrolled")),
              l(
                r(r(".edgtf-vss-ms-left .edgtf-vss-ms-section")[t - 1]).data(
                  "header-style"
                ),
                d
              );
          },
        }),
        edgtf.windowWidth <= 1024
          ? r.fn.multiscroll.destroy()
          : r.fn.multiscroll.build(),
        r(window).resize(function () {
          edgtf.windowWidth <= 1024
            ? r.fn.multiscroll.destroy()
            : r.fn.multiscroll.build();
        }));
    }
    function l(e, t) {
      void 0 !== e && "" !== e
        ? edgtf.body
            .removeClass("edgtf-light-header edgtf-dark-header")
            .addClass("edgtf-" + e + "-header")
        : "" !== t
        ? edgtf.body
            .removeClass("edgtf-light-header edgtf-dark-header")
            .addClass("edgtf-" + t + "-header")
        : edgtf.body.removeClass("edgtf-light-header edgtf-dark-header");
    }
    ((edgtf.modules.verticalSplitSlider = e).edgtfInitVerticalSplitSlider = n),
      (e.edgtfOnDocumentReady = t),
      r(document).ready(t),
      r(window).on("load", function () {
        r(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_vertical_split_slider.default",
            function () {
              n();
            }
          );
        });
      });
  })(jQuery),
  (function (u) {
    "use strict";
    var e = {};
    function t() {
      o(),
        m().init(),
        h().init(),
        a().init(),
        d().init(),
        u(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_portfolio_list.default",
            function () {
              o(), m().init(), h().init(), a().init(), d().init();
            }
          );
        });
    }
    function n() {
      a().scroll();
    }
    function m() {
      function e() {
        t.each(function () {
          var n,
            e = u(this).children(".edgtf-pl-inner").find("article");
          e.each(function (e) {
            var t = u(this);
            (n = e % 5),
              t.css("transition-delay", 100 * n + "ms"),
              t
                .addClass("edgtf-item-show")
                .on(edgtf.transitionEnd, function (e) {
                  "transform" == e.originalEvent.propertyName &&
                    t.addClass("edgtf-item-shown");
                });
          });
        });
      }
      var t = u(".edgtf-portfolio-list-holder.edgtf-pl-has-animation");
      return {
        init: function () {
          if (t.length && !Modernizr.touch) {
            if (u("#edgtf-manon-loading-title").length)
              return u(document).on("edgtfTitleDone", e), !1;
            e();
          }
        },
        show: function () {
          e();
        },
      };
    }
    function o() {
      var e = u(".edgtf-portfolio-list-holder .edgtf-pl-filter-holder");
      e.length &&
        e.each(function () {
          var a = u(this),
            d = a.closest(".edgtf-portfolio-list-holder"),
            i = d.find(".edgtf-pl-inner"),
            s = !!d.hasClass("edgtf-pl-pag-load-more");
          a.find(".edgtf-pl-filter:first").addClass("edgtf-pl-current"),
            d.hasClass("edgtf-pl-gallery") && i.isotope(),
            a.find(".edgtf-pl-filter").on("click", function () {
              var e = u(this),
                t = e.attr("data-filter"),
                n = t.length ? t.substring(1) : "",
                o = !!i.children().hasClass(n);
              e
                .parent()
                .children(".edgtf-pl-filter")
                .removeClass("edgtf-pl-current"),
                e.addClass("edgtf-pl-current"),
                s && !o && t.length
                  ? (function n(e, t, o) {
                      var a = e,
                        d = a.find(".edgtf-pl-inner"),
                        i = t,
                        s = o,
                        t = 0;
                      void 0 !== a.data("max-num-pages") &&
                        !1 !== a.data("max-num-pages") &&
                        (t = a.data("max-num-pages"));
                      var o = edgtf.modules.common.getLoadMoreData(a),
                        r = o.nextPage,
                        o = edgtf.modules.common.setLoadMoreAjaxData(
                          o,
                          "manon_core_portfolio_ajax_load_more"
                        ),
                        l = a.find(".edgtf-pl-loading");
                      r <= t &&
                        (l.addClass("edgtf-showing edgtf-filter-trigger"),
                        d.css("opacity", "0"),
                        u.ajax({
                          type: "POST",
                          data: o,
                          url: edgtfGlobalVars.vars.edgtfAjaxUrl,
                          success: function (e) {
                            r++, a.data("next-page", r);
                            var e = u.parseJSON(e),
                              t = e.html;
                            a.waitForImages(function () {
                              d.append(t)
                                .isotope("reloadItems")
                                .isotope({ sortBy: "original-order" });
                              var e = !!d.children().hasClass(s);
                              e
                                ? setTimeout(function () {
                                    edgtf.modules.common.setFixedImageProportionSize(
                                      a,
                                      d.find("article"),
                                      d
                                        .find(".edgtf-masonry-grid-sizer")
                                        .width(),
                                      !0
                                    ),
                                      d
                                        .isotope("layout")
                                        .isotope({ filter: i }),
                                      l.removeClass(
                                        "edgtf-showing edgtf-filter-trigger"
                                      ),
                                      setTimeout(function () {
                                        d.css("opacity", "1"),
                                          m().show(),
                                          h().init(),
                                          edgtf.modules.common.edgtfInitParallax();
                                      }, 150);
                                  }, 400)
                                : (l.removeClass(
                                    "edgtf-showing edgtf-filter-trigger"
                                  ),
                                  n(a, i, s));
                            });
                          },
                        }));
                    })(d, t, n)
                  : ((t = 0 === t.length ? "*" : t),
                    a
                      .parent()
                      .children(".edgtf-pl-inner")
                      .isotope({ filter: t }),
                    edgtf.modules.common.edgtfInitParallax());
            });
        });
    }
    function a() {
      function a(e) {
        var t =
          e.outerHeight() +
          e.offset().top -
          edgtfGlobalVars.vars.edgtfAddForAdminBar;
        !e.hasClass("edgtf-pl-infinite-scroll-started") &&
          edgtf.scroll + edgtf.windowHeight > t &&
          d(e);
      }
      var e = u(".edgtf-portfolio-list-holder"),
        d = function (n, o) {
          var a,
            d = n.find(".edgtf-pl-inner");
          void 0 !== n.data("max-num-pages") &&
            !1 !== n.data("max-num-pages") &&
            (a = n.data("max-num-pages")),
            n.hasClass("edgtf-pl-pag-standard") && n.data("next-page", o),
            n.hasClass("edgtf-pl-pag-infinite-scroll") &&
              n.addClass("edgtf-pl-infinite-scroll-started");
          var i,
            e = edgtf.modules.common.getLoadMoreData(n),
            s = n.find(".edgtf-pl-loading");
          ((i = e.nextPage) <= a || 0 === a) &&
            (n.hasClass("edgtf-pl-pag-standard")
              ? (s.addClass("edgtf-showing edgtf-standard-pag-trigger"),
                n.addClass("edgtf-pl-pag-standard-animate"))
              : s.addClass("edgtf-showing"),
            (e = edgtf.modules.common.setLoadMoreAjaxData(
              e,
              "manon_core_portfolio_ajax_load_more"
            )),
            u.ajax({
              type: "POST",
              data: e,
              url: edgtfGlobalVars.vars.edgtfAjaxUrl,
              success: function (e) {
                n.hasClass("edgtf-pl-pag-standard") || i++,
                  n.data("next-page", i);
                var t = u.parseJSON(e).html;
                n.hasClass("edgtf-pl-pag-standard")
                  ? (r(n, a, i),
                    n.waitForImages(function () {
                      (n.hasClass("edgtf-pl-masonry") ||
                        (n.hasClass("edgtf-pl-gallery") &&
                          n.hasClass("edgtf-pl-has-filter"))
                        ? l
                        : f)(n, d, s, t);
                    }))
                  : n.waitForImages(function () {
                      n.hasClass("edgtf-pl-masonry")
                        ? (1 === o ? l : g)(n, d, s, t)
                        : n.hasClass("edgtf-pl-gallery") &&
                          n.hasClass("edgtf-pl-has-filter") &&
                          1 !== o
                        ? g(n, d, s, t)
                        : 1 === o
                        ? f(n, d, s, t)
                        : c(d, s, t);
                    }),
                  n.hasClass("edgtf-pl-infinite-scroll-started") &&
                    n.removeClass("edgtf-pl-infinite-scroll-started");
              },
            })),
            i === a && n.find(".edgtf-pl-load-more-holder").hide();
        },
        r = function (e, t, n) {
          var o = e.find(".edgtf-pl-standard-pagination"),
            a = o.find("li.edgtf-pag-number"),
            e = o.find("li.edgtf-pag-prev a"),
            o = o.find("li.edgtf-pag-next a");
          a.removeClass("edgtf-pag-active"),
            a.eq(n - 1).addClass("edgtf-pag-active"),
            e.data("paged", n - 1),
            o.data("paged", n + 1),
            1 < n ? e.css({ opacity: "1" }) : e.css({ opacity: "0" }),
            n === t ? o.css({ opacity: "0" }) : o.css({ opacity: "1" });
        },
        l = function (e, t, n, o) {
          t.find("article").remove(),
            t.append(o),
            edgtf.modules.common.setFixedImageProportionSize(
              e,
              t.find("article"),
              t.find(".edgtf-masonry-grid-sizer").width(),
              !0
            ),
            t.isotope("reloadItems").isotope({ sortBy: "original-order" }),
            n.removeClass("edgtf-showing edgtf-standard-pag-trigger"),
            e.removeClass("edgtf-pl-pag-standard-animate"),
            setTimeout(function () {
              t.isotope("layout"),
                m().show(),
                h().init(),
                edgtf.modules.common.edgtfInitParallax(),
                edgtf.modules.common.edgtfPrettyPhoto();
            }, 600);
        },
        f = function (e, t, n, o) {
          n.removeClass("edgtf-showing edgtf-standard-pag-trigger"),
            e.removeClass("edgtf-pl-pag-standard-animate"),
            t.html(o),
            m().show(),
            h().init(),
            edgtf.modules.common.edgtfInitParallax(),
            edgtf.modules.common.edgtfPrettyPhoto();
        },
        g = function (e, t, n, o) {
          t.append(o),
            edgtf.modules.common.setFixedImageProportionSize(
              e,
              t.find("article"),
              t.find(".edgtf-masonry-grid-sizer").width(),
              !0
            ),
            t.isotope("reloadItems").isotope({ sortBy: "original-order" }),
            n.removeClass("edgtf-showing"),
            setTimeout(function () {
              t.isotope("layout"),
                m().show(),
                h().init(),
                edgtf.modules.common.edgtfInitParallax(),
                edgtf.modules.common.edgtfPrettyPhoto();
            }, 600);
        },
        c = function (e, t, n) {
          t.removeClass("edgtf-showing"),
            e.append(n),
            m().show(),
            h().init(),
            edgtf.modules.common.edgtfInitParallax(),
            edgtf.modules.common.edgtfPrettyPhoto();
        };
      return {
        init: function () {
          e.length &&
            e.each(function () {
              var o,
                e,
                t,
                n = u(this);
              n.hasClass("edgtf-pl-pag-standard") &&
                (e = (o = n).find(".edgtf-pl-standard-pagination li")).length &&
                e.each(function () {
                  var t = u(this).children("a"),
                    n = 1;
                  t.on("click", function (e) {
                    e.preventDefault(),
                      e.stopPropagation(),
                      void 0 !== t.data("paged") &&
                        !1 !== t.data("paged") &&
                        (n = t.data("paged")),
                      d(o, n);
                  });
                }),
                n.hasClass("edgtf-pl-pag-load-more") &&
                  (t = n)
                    .find(".edgtf-pl-load-more a")
                    .on("click", function (e) {
                      e.preventDefault(), e.stopPropagation(), d(t);
                    }),
                n.hasClass("edgtf-pl-pag-infinite-scroll") && a(n);
            });
        },
        scroll: function () {
          e.length &&
            e.each(function () {
              var e = u(this);
              e.hasClass("edgtf-pl-pag-infinite-scroll") && a(e);
            });
        },
        getMainPagFunction: function (e, t) {
          d(e, t);
        },
      };
    }
    function d() {
      function e() {
        t.each(function () {
          var e,
            t,
            n,
            o,
            a,
            d,
            i,
            s,
            r,
            l,
            f,
            g = u(this);
          (t = (e = g).children("span")),
            (e = e.parent().height()),
            (n = t.length),
            (o = n % 2 ? 1 : 0),
            (a = (100 * Math.round(e / n)) / e),
            t.each(function (e) {
              u(this).css({
                position: "absolute",
                top: e * a + "%",
                left: 2 * (e < n / 2 - o ? e * a : (n - o - e) * a) + "%",
              });
            }),
            Modernizr.touch ||
              ((i = (d = g).closest("article")),
              (s = null),
              (l = r = 0),
              (f = function () {
                if (s == Math.round(window.pageYOffset))
                  return requestAnimationFrame(f), !1;
                s = Math.round(window.pageYOffset);
                var e = window.outerHeight,
                  t = i.offset().top,
                  n = i.height();
                t < s + e &&
                  s < t + n &&
                  ((n =
                    100 * (0.5 - (Math.abs(s + e - t) / (e + n)).toFixed(4))),
                  (l += n - r),
                  d.css("transform", "translate3d(0," + l + "%, 0)"),
                  (r = n)),
                  requestAnimationFrame(f);
              }),
              requestAnimationFrame(f),
              g.children("span").appear(function () {
                u(this).addClass("edgtf-show");
              }));
        });
      }
      var t = u(".edgtf-pli-aux-title");
      return {
        init: function () {
          t.length && e();
        },
      };
    }
    function h() {
      function o() {
        return a.filter(function () {
          return (
            (e = u(this)),
            (t = 100),
            window.scrollY + window.innerHeight > e.offset().top - t &&
              window.scrollY < e.offset().top + e.outerHeight()
          );
          var e, t;
        });
      }
      function e() {
        var t = edgtf.body.hasClass("edgtf-ms-explorer") ? -100 : 0,
          n = 20;
        !(function e() {
          if (t == window.pageYOffset) return requestAnimationFrame(e), !1;
          (t = window.pageYOffset) <= 0
            ? a.css("transform", "translate3d(0, 0, 0)")
            : o().each(function () {
                var e = u(this),
                  t =
                    (
                      (e.offset().top - window.scrollY) /
                      window.innerHeight
                    ).toFixed(1) - 0.5;
                e.css("transform", "translate3d(0, " + t * n + "%, 0)");
              }),
            requestAnimationFrame(e);
        })(),
          o().each(function () {
            u(this).css("transform", "translate3d(0, 0, 0)");
          });
      }
      var a = u(".edgtf-pl-has-parallax .edgtf-pl-item-inner");
      return {
        init: function () {
          a.length && !Modernizr.touch && e();
        },
      };
    }
    ((edgtf.modules.portfolioList = e).edgtfOnWindowLoad = t),
      (e.edgtfOnWindowScroll = n),
      u(window).on("load", t),
      u(window).scroll(n);
  })(jQuery),
  (function (l) {
    "use strict";
    var e = {};
    function t() {
      o().init(),
        l(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_portfolio_list_horizontal.default",
            function () {
              o().init();
            }
          );
        });
    }
    function n() {
      o().resize();
    }
    function o() {
      var n = l(".edgtf-portfolio-list-horizontal-holder");
      n.length &&
        ((n.inner = l(".edgtf-portfolio-list-horizontal-inner")),
        (n.static = l(".edgtf-ptfh-static")),
        (n.area = -n.inner.outerWidth() + n.width()),
        (n.step = 50),
        (n.coeff = 0.55),
        (n.deltaX = 0),
        (n.dX = 0),
        (n.clickedX = !1),
        (n.x = 0),
        (n.buffer = 0),
        (n.locked = !1));
      function e() {
        var e = Math.max(n.static.outerHeight(), 0),
          t =
            1 == l(".edgtf-page-content-holder > .vc_row").length
              ? n.offset().top
              : 0;
        edgtf.body.hasClass("elementor-page") &&
          (t =
            1 == l(".edgtf-page-content-holder > .elementor").length
              ? n.offset().top
              : 0),
          n.inner.css({ height: edgtf.windowHeight - e - t });
      }
      function t() {
        var e = n.find(".edgtf-plh-item"),
          t = 0;
        e.each(function () {
          t += Math.ceil(l(this).outerWidth(!0));
        }),
          n.inner.css({ width: t + parseInt(n.inner.css("paddingLeft")) }),
          (n.area = -n.inner.outerWidth() + n.width());
      }
      function o() {
        var e;
        (n.dX +=
          n.deltaX < 0
            ? Math.min(n.deltaX * n.coeff, -n.step)
            : Math.max(n.deltaX * n.coeff, n.step)),
          (n.dX = Math.min(Math.max(n.area, n.dX), 0)),
          (e = n.dX),
          n.inner.css({ transform: "translate3d(" + e + "px, 0px, 0px)" }),
          (n.buffer = e);
      }
      function a() {
        edgtf.modules.common.edgtfDisableScroll(),
          edgtf.html.animate(
            {
              scrollTop:
                n.offset().top + n.height() / 2 - edgtf.windowHeight / 2,
            },
            600,
            "easeOutQuint",
            function () {
              (n.locked = !0),
                n.locked &&
                  n.inner.on(edgtf.transitionEnd, function () {
                    (0 != n.buffer && n.buffer != n.area) ||
                      ((n.locked = !1),
                      edgtf.modules.common.edgtfEnableScroll(),
                      l(window).one("wheel", function () {
                        return !1;
                      }));
                  });
            }
          );
      }
      function d(e) {
        (n.deltaX = -e.deltaY),
          n.hasClass("edgtf-fullscreen")
            ? requestAnimationFrame(function () {
                o();
              })
            : (a(),
              n.locked &&
                requestAnimationFrame(function () {
                  o();
                }));
      }
      function i(e) {
        n.clickedX = parseInt(e.changedTouches[0].clientX);
      }
      function s(e) {
        n.clickedX &&
          (Modernizr.touch || n.inner.css("pointer-events", "none"),
          (n.deltaX = parseInt(e.changedTouches[0].clientX) - n.clickedX),
          requestAnimationFrame(function () {
            o();
          }));
      }
      function r() {
        (n.x = n.buffer),
          n.inner.css("pointer-events", "auto"),
          (n.clickedX = !1);
      }
      return {
        init: function () {
          n.length &&
            (n.hasClass("edgtf-fullscreen") && e(),
            n.hasClass("edgtf-fullscreen") &&
              document.documentElement.classList.add("edgtf-overflow"),
            t(),
            n.addClass("edgtf-loaded"),
            n.mouseenter(function () {
              Modernizr.touch || n[0].addEventListener("wheel", d);
            }),
            n.mouseleave(function () {
              edgtf.html.stop(!0, !0),
                n[0].removeEventListener("wheel", d),
                (n.locked = !1),
                edgtf.modules.common.edgtfEnableScroll(),
                l(window).one("wheel", function () {
                  return !1;
                });
            }),
            Modernizr.touch &&
              (n[0].addEventListener("touchstart", i),
              n[0].addEventListener("touchmove", s),
              n[0].addEventListener("touchend", r)));
        },
        resize: function () {
          n.length &&
            (n.hasClass("edgtf-fullscreen") && e(),
            t(),
            (n.deltaX = 0),
            (n.dX = 0),
            (n.clickedX = !1),
            (n.x = 0),
            (n.buffer = 0));
        },
      };
    }
    ((edgtf.modules.ptfListHorizontal = e).edgtfOnWindowLoad = t),
      (e.edgtfOnWindowResize = n),
      l(window).on("load", t),
      l(window).resize(n);
  })(jQuery),
  (function (g) {
    "use strict";
    var e = {};
    function t() {
      o().init(),
        g(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_portfolio_list_stacked.default",
            function () {
              o().init();
            }
          );
        });
    }
    function n() {
      o().resize();
    }
    function o() {
      var a = g("#edgtf-portfolio-list-stacked");
      a.length &&
        ((a.items = a.find(".edgtf-pls-item")),
        (a.total = a.items.length),
        (a.textItems = a.find(".edgtf-pls-text-item")),
        (a.imgs = a.find("img")),
        (a.info = g("#edgtf-pls-info")),
        (a.endOfScrollVisible = !1),
        (a.endOfScroll = a.find(".edgtf-pls-end-of-scroll")),
        (a.activeIndex = 0),
        (a.activeText = a.textItems.first()),
        (a.direction = null),
        (a.deltaY = 0),
        (a.tilt = 30),
        (a.tX = 0),
        (a.tY = 0),
        a.items.each(function () {
          g(this).data("move", 0), g(this).data("buffer", 0);
        }));
      function e() {
        var o = 1;
        edgtf.windowWidth <= 1440 && 1024 < edgtf.windowWidth && (o = 0.65),
          edgtf.windowWidth <= 1024 && 768 < edgtf.windowWidth && (o = 0.5),
          edgtf.windowWidth <= 768 && 414 < edgtf.windowWidth && (o = 0.4),
          edgtf.windowWidth <= 414 && 320 < edgtf.windowWidth && (o = 0.25),
          edgtf.windowWidth <= 320 && (o = 0.2),
          a.items.each(function () {
            var e = g(this),
              t = (
                (e.find("img")[0].naturalWidth /
                  Math.min(edgtf.windowWidth, 1920)) *
                100
              ).toFixed(2),
              n = (
                (e.find("img")[0].naturalHeight /
                  Math.min(edgtf.windowHeight, 1080)) *
                100
              ).toFixed(2),
              n = { width: t * o + "%", height: n * o + "%" };
            e.css(n);
          });
      }
      function t() {
        a.items.each(function () {
          var e = g(this),
            t = e.find(".edgtf-pls-item-inner"),
            n =
              1200 <= edgtf.windowWidth
                ? parseInt(e.data("x"))
                : 0.88 * parseInt(e.data("x")),
            o = 1024 < edgtf.windowWidth ? parseInt(e.data("y")) : void 0;
          e.css({ top: (o || 50) + "%", left: (n || 50) + "%" }),
            t.css(
              "transform",
              "translateX(" +
                parseInt(isNaN(n) ? -50 : 0) +
                "%) translateY(" +
                parseInt(isNaN(o) ? -50 : 0) +
                "%)"
            );
        });
      }
      function n() {
        return (
          a.items.removeClass("edgtf-active"),
          a.items.filter(function () {
            return g(this).data("index") == a.activeIndex;
          })
        );
      }
      function o() {
        var e,
          t = a.items.filter(function () {
            return g(this).data("index") == a.activeIndex;
          });
        "next" == a.direction &&
        (e = t.find("img")).offset().top <= 0.97 * -e.height()
          ? (a.activeIndex++,
            a.activeIndex == a.total && (a.deltaY = 0),
            (a.activeIndex = Math.min(a.activeIndex, a.total - 1)),
            (t = n()))
          : "prev" == a.direction &&
            0 == t.data("move") &&
            (a.endOfScrollVisible &&
              ((a.endOfScrollVisible = !1),
              a.endOfScroll.removeClass("edgtf-visible"),
              a.removeClass("edgtf-eos")),
            a.activeIndex--,
            (a.activeIndex = Math.max(a.activeIndex, 0)),
            (t = n())),
          !a.endOfScrollVisible &&
            "next" == a.direction &&
            a.activeIndex == a.total - 1 &&
            Math.abs(t.data("move")) > 0.1 * t.find("img").height() &&
            ((a.endOfScrollVisible = !0),
            a.endOfScroll.addClass("edgtf-visible"),
            a.addClass("edgtf-eos")),
          a.activeText.data("index") !== a.activeIndex &&
            (a.textItems.removeClass("edgtf-active"),
            (a.activeText = a.textItems
              .filter(function () {
                return g(this).data("index") == a.activeIndex;
              })
              .addClass("edgtf-active"))),
          t
            .addClass("edgtf-active")
            .data("move", Math.min(t.data("move") + a.deltaY, 0))
            .css(
              "transform",
              "translate3d(0," +
                Math.round(t.data("move") - 0.2 * t.data("buffer")) +
                "px,0)"
            )
            .data("buffer", Math.abs(t.data("move")));
      }
      function d() {
        a.items.each(function (e) {
          var t = g(this).find("img"),
            n = Math.round(a.tX * a.tilt * (e + 1)),
            e = Math.round(a.tY * a.tilt * (e + 1));
          t.css("transform", "translateX(" + n + "px) translateY(" + e + "px)");
        });
      }
      function i(e) {
        (a.direction = -e.deltaY < 0 ? "next" : "prev"),
          (a.deltaY = -e.deltaY),
          3 == Math.abs(a.deltaY) && (a.deltaY = 10 * a.deltaY),
          requestAnimationFrame(o);
      }
      function s(e) {
        (a.tX = 0.5 - e.screenX / edgtf.windowWidth),
          (a.tY = 0.5 - e.screenY / edgtf.windowHeight),
          requestAnimationFrame(d);
      }
      function r(e) {
        a.data("y-start", parseInt(e.changedTouches[0].clientY));
      }
      function l(e) {
        a.data("y-end", parseInt(e.changedTouches[0].clientY)),
          (a.deltaY = a.data("y-end") - a.data("y-start")),
          (a.direction = a.deltaY < 0 ? "next" : "prev"),
          (a.deltaY = Math.min(Math.max(a.deltaY, -20), 100)),
          requestAnimationFrame(o);
      }
      function f(e) {
        a.on("mousemove", function (e) {
          var t = e.clientX,
            n = e.clientY;
          requestAnimationFrame(function () {
            a.info.css({
              transform: "translate3d(" + t + "px, " + n + "px, 0)",
            });
          });
        }),
          a.on("mousemove", "img", function (e) {
            var t,
              n = g(e.currentTarget).closest(a.items).data("index");
            a.info.data("active") !== n &&
              ((e = (t = a.textItems.filter(function () {
                return g(this).data("index") == n;
              }))
                .find(".edgtf-pls-title-holder")
                .html()),
              (t = t.find(".edgtf-pli-category-holder").html()),
              a.info.data("active", n).addClass("edgtf-show"),
              a.info.find(".edgtf-pls-title-holder").html(e),
              a.info.find(".edgtf-pls-category-holder").html(t)),
              g(".edgtf-page-header").css("pointer-events", "none");
          }),
          a.on("mouseleave", "img", function (e) {
            a.info.data("active", null).removeClass("edgtf-show"),
              g(".edgtf-page-header").css("pointer-events", "auto");
          });
      }
      return {
        init: function () {
          a.length &&
            (edgtf.htmlEl.addClass("edgtf-overflow"),
            a.items.first().addClass("edgtf-active"),
            a.textItems.first().addClass("edgtf-active"),
            e(),
            t(),
            a.items.each(function () {
              var e = g(this);
              e.css({ "z-index": a.total - e.data("index") });
            }),
            a.waitForImages(function () {
              a.addClass("edgtf-loaded"),
                Modernizr.touch ||
                  (document.body.addEventListener("wheel", i),
                  document.body.addEventListener("mousemove", s),
                  f()),
                Modernizr.touch &&
                  (a[0].addEventListener("touchstart", r),
                  a[0].addEventListener("touchmove", l));
            }));
        },
        resize: function () {
          a.length && (t(), e());
        },
      };
    }
    ((edgtf.modules.ptfListStacked = e).edgtfOnWindowLoad = t),
      (e.edgtfOnWindowResize = n),
      g(window).on("load", t),
      g(window).resize(n);
  })(jQuery),
  (function (a) {
    "use strict";
    var e = {};
    function t() {
      n(),
        o(),
        a(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_portfolio_slider.default",
            function () {
              edgtf.modules.common.edgtfOwlSlider(), n(), o();
            }
          );
        });
    }
    function n() {
      var e = a(".edgtf-portfolio-slider-holder");
      e.length &&
        e.each(function () {
          var e = a(this),
            t = e.find(".edgtf-portfolio-list-holder").data("enable-scroll"),
            n = e.find(".edgtf-owl-slider"),
            o = !0;
          "yes" === t &&
            (n.on("translate.owl.carousel", function () {
              o = !1;
            }),
            n.on("translated.owl.carousel", function () {
              o = !0;
            }),
            n.on("mousewheel", ".owl-stage", function (e) {
              o &&
                (0 < e.deltaY ? n.trigger("prev.owl") : n.trigger("next.owl"),
                e.preventDefault());
            }));
        });
    }
    function o() {
      var e = a(".edgtf-portfolio-slider-holder.edgtf-pfs-fullscreen");
      e.length &&
        e.each(function () {
          var o,
            e = a(this),
            t = 0,
            n = 0;
          a(".edgtf-pfs-bottom-area").length &&
            (n += a(".edgtf-pfs-bottom-area").outerHeight(!0));
          (t = (
            1024 < edgtf.windowWidth
              ? a(".edgtf-page-header")
              : a(".edgtf-mobile-header")
          ).outerHeight(!0)),
            edgtf.body.hasClass("admin-bar") &&
              (a("html").css("height", "auto"),
              (t += a("#wpadminbar").outerHeight())),
            e
              .find(".edgtf-portfolio-list-holder")
              .hasClass("edgtf-pag-below-slider") &&
              (n += a(".owl-nav").outerHeight(!0)),
            (o = edgtf.windowHeight - t - n),
            e.find(".owl-item").each(function () {
              var e = a(this),
                t = a(".edgtf-pli-text-holder").outerHeight(!0),
                n = e.find(".edgtf-pli-image");
              e.css({ height: o }), n.css({ height: o - t });
            }),
            e.addClass("edgtf-loaded");
        });
    }
    ((edgtf.modules.portfolioSlider = e).edgtfOnWindowLoad = t),
      a(window).on("load", t),
      a(window).on("resize", function () {
        o();
      });
  })(jQuery),
  (function (f) {
    "use strict";
    var e = {};
    function t() {
      n();
    }
    function n() {
      var e = f(".edgtf-portfolio-vertical-loop-holder");
      e.length &&
        e.each(function () {
          var o,
            a = f(this),
            e = f(".edgtf-page-header"),
            d = f(".edgtf-mobile-header"),
            e = e.outerHeight(),
            i = edgtf.body.hasClass("edgtf-paspartu-enabled")
              ? parseInt(
                  f(".edgtf-paspartu-enabled .edgtf-wrapper").css(
                    "padding-left"
                  )
                )
              : 0,
            s = edgtf.body.hasClass("edgtf-content-is-behind-header") ? 0 : e,
            r = !0,
            l = f(".edgtf-pvl-inner");
          f(edgtf.body).on(
            "click",
            ".edgtf-pvli-content-holder .edgtf-pvli-content-link",
            function (e) {
              if ((e.preventDefault(), !r)) return !1;
              r = !1;
              var t = f(this);
              o = edgtf.windowWidth < 1e3 ? d.outerHeight() : s;
              (e = edgtf.window.scrollTop()),
                (e = t.closest("article").offset().top - e - o - i);
              l.find("article:eq(0)").addClass("fade-out"),
                t
                  .closest("article")
                  .addClass("move-up")
                  .removeClass("next-item")
                  .css("transform", "translateY(-" + e + "px)"),
                setTimeout(function () {
                  edgtf.window.scrollTop(0),
                    l.find("article:eq(0)").remove(),
                    t
                      .closest("article")
                      .removeAttr("style")
                      .removeClass("move-up");
                }, 450);
              var n,
                e = edgtf.modules.common.getLoadMoreData(a),
                e = edgtf.modules.common.setLoadMoreAjaxData(
                  e,
                  "manon_core_portfolio_vertical_loop_ajax_load_more"
                );
              f.ajax({
                type: "POST",
                data: e,
                url: edgtfGlobalVars.vars.edgtfAjaxUrl,
                success: function (e) {
                  var t = f.parseJSON(e),
                    e = t.html,
                    t = t.next_item_id;
                  a.data("next-item-id", t);
                  e = f(e)
                    .find(".edgtf-pvl-item-inner")
                    .parent()
                    .addClass("next-item")
                    .fadeIn(400);
                  l.append(e), (r = !0);
                },
              }),
                (n = (e = a).find(".edgtf-pvl-navigation-holder")).find(
                  ".edgtf-pvl-navigation"
                ),
                (e = edgtf.modules.common.getLoadMoreData(n)),
                (e = edgtf.modules.common.setLoadMoreAjaxData(
                  e,
                  "manon_core_portfolio_vertical_loop_ajax_load_more_navigation"
                )),
                f.ajax({
                  type: "POST",
                  data: e,
                  url: edgtfGlobalVars.vars.edgtfAjaxUrl,
                  success: function (e) {
                    var t = f.parseJSON(e),
                      e = t.html,
                      t = t.next_item_id;
                    n.data("next-item-id", t), n.html(e);
                  },
                });
            }
          ),
            (function (n, o) {
              var e = n.find(".edgtf-pvl-navigation-holder");
              e.find(".edgtf-pvl-navigation");
              {
                var t;
                void 0 !== e.data("id") &&
                  !1 !== e.data("id") &&
                  (t = e.data("id"));
              }
              void 0 !== e.data("next-item-id") &&
                !1 !== e.data("next-item-id") &&
                (a = e.data("next-item-id"));
              (void 0 !== n.data("id") && !1 === n.data("id")) ||
                n.data("id", t);
              (void 0 !== n.data("next-item-id") &&
                0 != n.data("next-item-id")) ||
                n.data("next-item-id", a);
              var a = edgtf.modules.common.getLoadMoreData(n),
                a = edgtf.modules.common.setLoadMoreAjaxData(
                  a,
                  "manon_core_portfolio_vertical_loop_ajax_load_more"
                );
              f.ajax({
                type: "POST",
                data: a,
                url: edgtfGlobalVars.vars.edgtfAjaxUrl,
                success: function (e) {
                  var t = f.parseJSON(e),
                    e = t.html,
                    t = t.next_item_id;
                  n.data("next-item-id", t);
                  e = f(e)
                    .find(".edgtf-pvl-item-inner")
                    .parent()
                    .addClass("next-item")
                    .fadeIn(400);
                  o.append(e);
                },
              });
            })(a, l);
        });
    }
    ((edgtf.modules.portfolioVerticalLoop = e).edgtfOnDocumentReady = t),
      f(document).ready(t),
      f(window).on("load", function () {
        f(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_portfolio_vertical_loop.default",
            function () {
              n();
            }
          );
        });
      });
  })(jQuery),
  (function (f) {
    "use strict";
    var e = {};
    function t() {
      n(),
        f(window).on("elementor/frontend/init", function () {
          elementorFrontend.hooks.addAction(
            "frontend/element_ready/edgtf_testimonials.default",
            function () {
              n(), edgtf.modules.common.edgtfOwlSlider();
            }
          );
        });
    }
    function n() {
      var e = f(".edgtf-testimonials-holder.edgtf-testimonials-carousel");
      e.length &&
        e.each(function () {
          var n,
            o,
            e = f(this),
            t = e.find(".edgtf-testimonials-main"),
            a = e.children(".edgtf-testimonial-image-nav"),
            d = !0,
            i = !0,
            s = 5e3,
            r = 600,
            l = !1;
          "no" === t.data("enable-loop") && (d = !1),
            "no" === t.data("enable-autoplay") && (i = !1),
            void 0 !== t.data("slider-speed") &&
              !1 !== t.data("slider-speed") &&
              (s = t.data("slider-speed")),
            void 0 !== t.data("slider-speed-animation") &&
              !1 !== t.data("slider-speed-animation") &&
              (r = t.data("slider-speed-animation")),
            edgtf.windowWidth < 680 && (l = !0),
            t.length &&
              a.length &&
              ((n = t.owlCarousel({
                items: 1,
                loop: d,
                autoplay: i,
                autoplayTimeout: s,
                smartSpeed: r,
                autoplayHoverPause: !1,
                dots: !1,
                nav: !1,
                mouseDrag: !1,
                touchDrag: l,
                onInitialize: function () {
                  t.css("visibility", "visible");
                },
              })),
              (o = a.owlCarousel({
                loop: d,
                autoplay: i,
                autoplayTimeout: s,
                smartSpeed: r,
                autoplayHoverPause: !1,
                center: !0,
                dots: !1,
                nav: !1,
                mouseDrag: !1,
                touchDrag: !1,
                responsive: { 1025: { items: 5 }, 0: { items: 3 } },
                onInitialize: function () {
                  a.css("visibility", "visible"), e.css("opacity", "1");
                },
              })),
              a.find(".owl-item").on("click touchpress", function (e) {
                e.preventDefault();
                var t = f(this).index(),
                  e = a.find(".owl-item.cloned").length,
                  t = 0 <= t - e / 2 ? t - e / 2 : t;
                o.trigger("to.owl.carousel", t),
                  n.trigger("to.owl.carousel", t);
              }));
        });
    }
    ((edgtf.modules.testimonialsCarousel = e).edgtfInitTestimonials = n),
      (e.edgtfOnWindowLoad = t),
      f(window).on("load", t);
  })(jQuery),
  (function (u) {
    "use strict";
    var e = {};
    function t() {
      var e;
      (e = u(".edgtf-testimonials-image-pagination-inner")).length &&
        e.each(function () {
          var e,
            t = u(this),
            n = t.children().length,
            o = !0,
            a = !0,
            d = 3500,
            i = 500,
            s = !1,
            r = !1,
            l = !1,
            f = !0,
            g = !1,
            c = t;
          "no" === c.data("enable-loop") && (o = !1),
            void 0 !== c.data("slider-speed") &&
              !1 !== c.data("slider-speed") &&
              (d = c.data("slider-speed")),
            void 0 !== c.data("slider-speed-animation") &&
              !1 !== c.data("slider-speed-animation") &&
              (i = c.data("slider-speed-animation")),
            "yes" === c.data("enable-auto-width") && (s = !0),
            void 0 !== c.data("slider-animate-in") &&
              !1 !== c.data("slider-animate-in") &&
              (r = c.data("slider-animate-in")),
            void 0 !== c.data("slider-animate-out") &&
              !1 !== c.data("slider-animate-out") &&
              (l = c.data("slider-animate-out")),
            "no" === c.data("enable-navigation") && (f = !1),
            "yes" === c.data("enable-pagination") && (g = !0),
            f && g && t.addClass("edgtf-slider-has-both-nav"),
            g &&
              ((e = "#edgtf-testimonial-pagination"),
              u(".edgtf-tsp-item").on("click", function () {
                t.trigger("to.owl.carousel", [u(this).index(), 300]);
              })),
            n <= 1 && (g = f = a = o = !1),
            t.waitForImages(function () {
              u(this).owlCarousel({
                items: 1,
                loop: o,
                autoplay: a,
                autoplayHoverPause: !1,
                autoplayTimeout: d,
                smartSpeed: i,
                margin: 0,
                stagePadding: 0,
                center: !1,
                autoWidth: s,
                animateIn: r,
                animateOut: l,
                dots: g,
                dotsContainer: e,
                nav: f,
                drag: !0,
                callbacks: !0,
                navText: [
                  '<span class="edgtf-prev-icon ion-chevron-left"></span>',
                  '<span class="edgtf-next-icon ion-chevron-right"></span>',
                ],
                onInitialize: function () {
                  t.css("visibility", "visible");
                },
                onDrag: function (e) {
                  edgtf.body.hasClass(
                    "edgtf-smooth-page-transitions-fadeout"
                  ) &&
                    0 < e.isTrigger &&
                    t.addClass("edgtf-slider-is-moving");
                },
                onDragged: function () {
                  edgtf.body.hasClass(
                    "edgtf-smooth-page-transitions-fadeout"
                  ) &&
                    t.hasClass("edgtf-slider-is-moving") &&
                    setTimeout(function () {
                      t.removeClass("edgtf-slider-is-moving");
                    }, 500);
                },
              });
            });
        });
    }
    ((edgtf.modules.testimonialsImagePagination = e).edgtfOnDocumentReady = t),
      u(document).ready(t);
  })(jQuery);
