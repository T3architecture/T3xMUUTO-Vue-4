(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"backgroundColorRatios":[0],"buttonToggleFullscreen":"this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","class":"Player","gap":10,"definitions": [{"class":"IconButton","data":{"name":"IconButton GYRO"},"width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"paddingLeft":0,"horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"pressedIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed.png","id":"IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","transparencyActive":true,"verticalAlign":"middle","paddingRight":0,"height":60,"pressedRollOverIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed_rollover.png","toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464.png","borderRadius":0,"maxHeight":60,"maxWidth":60,"mode":"toggle","borderSize":0,"minWidth":60,"shadow":false,"minHeight":60},{"class":"Container","data":{"name":"-button set"},"gap":3,"width":85,"backgroundOpacity":0,"children":["this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","this.IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137"],"paddingTop":0,"paddingLeft":0,"horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"overflow":"scroll","id":"Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F","scrollBarMargin":2,"verticalAlign":"top","top":"14.6%","height":320,"paddingRight":0,"toolTipHorizontalAlign":"center","layout":"vertical","contentOpaque":false,"scrollBarOpacity":0.5,"scrollBarWidth":10,"scrollBarVisible":"rollOver","borderRadius":0,"maxHeight":320,"scrollBarColor":"#000000","maxWidth":60,"creationPolicy":"inAdvance","borderSize":0,"right":"0%","minWidth":60,"shadow":false,"minHeight":320},{"class":"IconButton","data":{"name":"IconButton FULLSCREEN"},"width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"paddingLeft":0,"horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"pressedIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed.png","id":"IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","transparencyActive":true,"verticalAlign":"middle","paddingRight":0,"height":60,"pressedRollOverIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed_rollover.png","toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF.png","borderRadius":0,"maxHeight":60,"maxWidth":60,"mode":"toggle","borderSize":0,"minWidth":60,"shadow":false,"minHeight":60},{"class":"IconButton","data":{"name":"IconButton FB"},"width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"paddingLeft":0,"horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"transparencyActive":true,"id":"IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137","verticalAlign":"middle","paddingRight":0,"height":60,"toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137.png","click":"this.openLink(this.translate('LinkBehaviour_A99CB470_BF24_034B_41D8_32775ADC450A.source'), '_blank')","rollOverIconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137_rollover.png","borderRadius":0,"maxHeight":60,"maxWidth":60,"mode":"push","borderSize":0,"minWidth":60,"shadow":false,"minHeight":1},{"class":"IconButton","data":{"name":"image button menu"},"width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"paddingLeft":0,"horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"pressedIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed.png","id":"IconButton_AC819C46_BF7C_0354_415E_028207B038AC","transparencyActive":true,"verticalAlign":"middle","top":"6.78%","height":60,"paddingRight":0,"toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC.png","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, null, false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, null, false)}.bind(this); if(!this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F.get('visible')){ visibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) } else { invisibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) }","maxHeight":60,"maxWidth":60,"pressedRollOverIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed_rollover.png","borderRadius":0,"mode":"toggle","borderSize":0,"right":"0.05%","minWidth":60,"shadow":false,"minHeight":60},{"items":[{"camera":"this.panorama_FB559648_ECEA_EF6D_41EC_08A810280D85_camera","media":"this.panorama_FB559648_ECEA_EF6D_41EC_08A810280D85","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"shadow":false,"playbackBarHeadShadowOpacity":0.7,"class":"ViewerArea","toolTipFontFamily":"Arial","playbackBarHeadBorderSize":0,"displayTooltipInSurfaceSelection":true,"subtitlesVerticalAlign":"bottom","toolTipBorderRadius":3,"toolTipShadowOpacity":1,"vrPointerColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0,1],"paddingLeft":0,"subtitlesTextShadowVerticalLength":1,"playbackBarProgressBackgroundColorDirection":"vertical","id":"MainViewer","data":{"name":"Main Viewer"},"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarBorderColor":"#AAAAAA","playbackBarHeadBorderColor":"#000000","toolTipBackgroundColor":"#999999","progressBackgroundColorRatios":[0,1],"playbackBarBorderSize":2,"toolTipFontSize":12,"subtitlesFontWeight":"normal","paddingRight":0,"toolTipTextShadowColor":"#666666","progressRight":10,"subtitlesFontFamily":"Arial","toolTipBorderColor":"#767676","playbackBarOpacity":1,"transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressOpacity":1,"progressBarBorderColor":"#000000","playbackBarHeadShadowHorizontalLength":0,"toolTipHorizontalAlign":"center","playbackBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0,1],"subtitlesTop":0,"translationTransitionDuration":1000,"progressBackgroundColorDirection":"vertical","subtitlesGap":0,"playbackBarRight":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","playbackBarHeight":20,"playbackBarHeadShadow":true,"toolTipPaddingLeft":6,"playbackBarHeadBackgroundColor":["#111111","#666666"],"displayTooltipInTouchScreens":true,"progressBackgroundOpacity":1,"progressBarBackgroundColor":["#222222","#444444"],"progressBorderColor":"#AAAAAA","doubleClickAction":"toggle_fullscreen","subtitlesFontColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"subtitlesPaddingLeft":5,"progressBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarBorderRadius":4,"progressBarOpacity":1,"playbackBarProgressBorderColor":"#000000","progressBottom":1,"subtitlesHorizontalAlign":"center","borderSize":0,"subtitlesTextShadowBlurRadius":0,"subtitlesBorderColor":"#FFFFFF","minWidth":100,"toolTipPaddingRight":6,"progressHeight":20,"minHeight":50,"subtitlesPaddingBottom":5,"toolTipTextShadowOpacity":0,"subtitlesTextDecoration":"none","playbackBarBackgroundOpacity":1,"playbackBarHeadOpacity":1,"toolTipShadowSpread":0,"toolTipShadowVerticalLength":0,"toolTipFontStyle":"normal","progressBorderSize":2,"paddingTop":0,"progressBarBorderRadius":4,"subtitlesTextShadowHorizontalLength":1,"transitionDuration":500,"toolTipFontColor":"#606060","toolTipTextShadowBlurRadius":3,"paddingBottom":0,"propagateClick":false,"playbackBarLeft":0,"toolTipPaddingBottom":4,"progressBorderRadius":4,"subtitlesOpacity":1,"progressBarBorderSize":0,"firstTransitionDuration":0,"toolTipShadowHorizontalLength":0,"playbackBarProgressBackgroundColor":["#222222","#444444"],"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":30,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontWeight":"normal","surfaceReticleColor":"#FFFFFF","vrPointerSelectionTime":1500,"subtitlesBorderSize":0,"bottom":0,"subtitlesBottom":50,"top":0,"toolTipShadowColor":"#333333","surfaceReticleSelectionColor":"#FFFFFF","progressLeft":10,"playbackBarProgressBorderRadius":0,"subtitlesPaddingRight":5,"playbackBarHeadShadowVerticalLength":0,"toolTipBorderSize":1,"subtitlesShadow":false,"toolTipPaddingTop":4,"vrPointerSelectionColor":"#FF0000","playbackBarHeadBorderRadius":0,"toolTipDisplayTime":600,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowOpacity":1,"surfaceReticleOpacity":0.6,"toolTipOpacity":0.5,"playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","borderRadius":0,"toolTipShadowBlurRadius":3,"subtitlesPaddingTop":5,"playbackBarProgressOpacity":1,"playbackBarBottom":10,"left":0,"playbackBarHeadWidth":6,"subtitlesEnabled":true,"playbackBarProgressBorderSize":0,"right":0},{"thumbnailUrl":"media/panorama_FB559648_ECEA_EF6D_41EC_08A810280D85_t.jpg","id":"panorama_FB559648_ECEA_EF6D_41EC_08A810280D85","hfovMax":130,"class":"Panorama","hfov":360,"hfovMin":"135%","label":trans('panorama_FB559648_ECEA_EF6D_41EC_08A810280D85.label'),"frames":[{"stereoCube":{"levels":[{"width":24576,"rowCount":4,"colCount":48,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","url":"media/panorama_FB559648_ECEA_EF6D_41EC_08A810280D85_0/0/{row}_{column}.jpg"},{"width":12288,"rowCount":2,"colCount":24,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","url":"media/panorama_FB559648_ECEA_EF6D_41EC_08A810280D85_0/1/{row}_{column}.jpg"},{"width":24576,"rowCount":1,"colCount":12,"class":"TiledImageResourceLevel","height":2048,"tags":"mobilevr2gen","url":"media/panorama_FB559648_ECEA_EF6D_41EC_08A810280D85_0/vr2gen/{column}.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_FB559648_ECEA_EF6D_41EC_08A810280D85_t.jpg"}],"partial":false,"pitch":0,"data":{"label":"03_238xMUUTO_img3"},"vfov":180},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","id":"panorama_FB559648_ECEA_EF6D_41EC_08A810280D85_camera"},{"fontWeight":"bold","class":"Label","data":{"name":"Label28174"},"textDecoration":"none","width":250,"backgroundOpacity":0,"paddingTop":0,"paddingLeft":0,"fontFamily":"Arial","horizontalAlign":"center","paddingBottom":0,"propagateClick":false,"id":"label4056","verticalAlign":"middle","top":17,"fontColor":"#FFFFFF","height":50,"paddingRight":0,"toolTipHorizontalAlign":"center","text":trans('label4056.text'),"fontSize":30,"borderRadius":0,"maxHeight":50,"maxWidth":250,"fontStyle":"normal","borderSize":0,"right":"0.47%","minWidth":250,"shadow":false,"minHeight":50},{"class":"IconButton","data":{"name":"IconButton VR"},"width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"paddingLeft":0,"horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"transparencyActive":true,"id":"IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","verticalAlign":"middle","paddingRight":0,"height":60,"toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89.png","rollOverIconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89_rollover.png","borderRadius":0,"maxHeight":60,"maxWidth":60,"mode":"push","borderSize":0,"minWidth":60,"shadow":false,"minHeight":60},{"class":"Image","data":{"name":"Image4995"},"width":80,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"url":"skin/Image_A15825F1_AD39_D33D_41CD_0C70008BA88C.png","paddingLeft":0,"horizontalAlign":"left","paddingBottom":0,"propagateClick":true,"id":"Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","verticalAlign":"top","top":21.17,"height":85,"paddingRight":0,"toolTipHorizontalAlign":"center","click":"this.openLink(this.translate('LinkBehaviour_A4D1DCCC_BF24_0354_41BC_7B57F239723C.source'), '_blank')","maxHeight":80,"maxWidth":80,"borderRadius":0,"left":26.3,"borderSize":0,"minWidth":80,"shadow":false,"minHeight":80,"scaleMode":"fill"},{"displayPlaybackBar":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","buttonCardboardView":"this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","zoomEnabled":true,"buttonToggleGyroscope":"this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","mouseControlMode":"drag_rotation","arrowKeysAction":"translate","touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"aaEnabled":true,"buttonToggleHotspots":"this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","gyroscopeEnabled":true,"surfaceSelectionEnabled":false,"id":"MainViewerPanoramaPlayer"},{"class":"IconButton","data":{"name":"IconButton HS "},"width":60,"backgroundOpacity":0,"cursor":"hand","paddingTop":0,"paddingLeft":0,"horizontalAlign":"center","paddingBottom":0,"propagateClick":true,"pressedIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed.png","id":"IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","transparencyActive":true,"verticalAlign":"middle","paddingRight":0,"height":60,"pressedRollOverIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed_rollover.png","toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628.png","borderRadius":0,"maxHeight":60,"maxWidth":60,"mode":"toggle","borderSize":0,"minWidth":60,"shadow":false,"minHeight":60}],"backgroundColorDirection":"vertical","mediaActivationMode":"window","backgroundOpacity":1,"vrPolyfillScale":1,"paddingTop":0,"paddingLeft":0,"mouseWheelEnabled":true,"horizontalAlign":"left","paddingBottom":0,"propagateClick":false,"overflow":"hidden","width":"100%","id":"rootPlayer","scrollBarMargin":2,"verticalAlign":"top","defaultVRPointer":"gaze","desktopMipmappingEnabled":false,"mobileMipmappingEnabled":false,"children":["this.MainViewer","this.label4056","this.Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","this.IconButton_AC819C46_BF7C_0354_415E_028207B038AC","this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F"],"contentOpaque":false,"paddingRight":0,"toolTipHorizontalAlign":"center","layout":"absolute","height":"100%","scrollBarOpacity":0.5,"backgroundColor":["#000000"],"scrollBarVisible":"rollOver","backgroundPreloadEnabled":true,"scrollBarWidth":10,"borderRadius":0,"scrollBarColor":"#000000","scripts":{"initAnalytics":TDV.Tour.Script.initAnalytics,"translate":TDV.Tour.Script.translate,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"mixObject":TDV.Tour.Script.mixObject,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getKey":TDV.Tour.Script.getKey,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"historyGoBack":TDV.Tour.Script.historyGoBack,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"clone":TDV.Tour.Script.clone,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"openLink":TDV.Tour.Script.openLink,"init":TDV.Tour.Script.init,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"existsKey":TDV.Tour.Script.existsKey,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getOverlays":TDV.Tour.Script.getOverlays,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMainViewer":TDV.Tour.Script.getMainViewer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"resumePlayers":TDV.Tour.Script.resumePlayers,"unregisterKey":TDV.Tour.Script.unregisterKey,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"downloadFile":TDV.Tour.Script.downloadFile,"shareSocial":TDV.Tour.Script.shareSocial,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"initQuiz":TDV.Tour.Script.initQuiz,"playAudioList":TDV.Tour.Script.playAudioList,"isPanorama":TDV.Tour.Script.isPanorama,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"textToSpeech":TDV.Tour.Script.textToSpeech,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaByName":TDV.Tour.Script.getMediaByName,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPixels":TDV.Tour.Script.getPixels,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setLocale":TDV.Tour.Script.setLocale,"quizStart":TDV.Tour.Script.quizStart,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getComponentByName":TDV.Tour.Script.getComponentByName,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setValue":TDV.Tour.Script.setValue,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showWindow":TDV.Tour.Script.showWindow,"registerKey":TDV.Tour.Script.registerKey,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"cloneCamera":TDV.Tour.Script.cloneCamera,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"quizFinish":TDV.Tour.Script.quizFinish,"keepCompVisible":TDV.Tour.Script.keepCompVisible},"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89,this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464], 'cardboardAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF].forEach(function(component) { component.set('visible', false); }) }","downloadEnabled":false,"creationPolicy":"inAdvance","borderSize":0,"minWidth":20,"shadow":false,"minHeight":20,"data":{"name":"Player28156","defaultLocale":"fr","locales":{"fr":"locale/fr.txt"},"initialScale":0.65,"textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"speechOnQuizQuestion":false,"pitch":1,"rate":1}}};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Thu Jun 6 2024