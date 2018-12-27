import {CGameLib} from "../hall/gamelib/CGameLib";
// import { update } from "../../../creator";
import {WeixinManager} from "../hall/weixin/WeixinManager";
import {TSCommon} from "TSCommon";
var HallResources = require("HallResources");
var Resources = require("Resources");

import {Domain} from "../hall/Domain";
var AladinSDK = require("../aladinSDK");
//大厅全局信息
var HallPlatformInfo = {
    extends: cc.Component,
    m_onWxGameLoginCallBack:null,
    properties: {
        gameBoxNode:{
            default: null,
            type: cc.Node,
        },
        m_gameListScrollView:{
            default:null,
            type:cc.ScrollView,
        },
        hallNode:{
            default:null,
            type:cc.Node,
        },
        gameRoomNode:{
            default:null,
            type:cc.Node,
        },
        inviteFriendLayerPrefab:{
            default:null,
            type:cc.Prefab,
        },
        dailyLayerPrefab:{
            default:null,
            type:cc.Prefab,
        },
        roomList:{
            default: null,
            type: cc.ScrollView,
        },
        rankListNode:{
            default: null,
            type: cc.Sprite,
        },
        rankChildrenNode:{
            default: null,
            type: cc.Sprite,
        },
        moneyNode:{
            default: null,
            type: cc.Node,
        },
        quickSatrtGameBtn:{
            default: null,
            type: cc.Button,
        },
        goldCount:{
            default: null,
            type: cc.Label,
        },
        diamondCount:{
            default: null,
            type: cc.Label,
        },
        playerId:{
            default: null,
            type: cc.Label,
        },
        playerName:{
            default: null,
            type: cc.Label,
        },
        playerIcon:{
            default: null,
            type: cc.Sprite,
        },
        commonTipsPrefab:{
            default: null,
            type: cc.Prefab,
        },
        huobaoGameBtnIcon:{
            default: null,
            type: cc.Sprite,
        },
        changwanGameBtnIcon:{
            default: null,
            type: cc.Sprite,
        },
        huobaoGameBtnLabel:{
            default: null,
            type: cc.Label,
        },
        changwanGameBtnLabel:{
            default: null,
            type: cc.Label,
        },

        collectBtn:{
            default: null,
            type: cc.Button,
        },
        dailyLoginRedPoint:{
            default: null,
            type: cc.Node,
        },
        collectionLoginRedPoint:{
            default: null,
            type: cc.Node,
        },
        loadingNode:{
            default: null,
            type: cc.Node,
        },
        commonTipsLabelNode:{
            default: null,
            type: cc.Node,
        },
        commonTipsLabel:{
            default: null,
            type: cc.Label,
        },
        commonTipsIcon:{
            default: null,
            type: cc.Sprite,
        },
        
        shrinkRank: {
            default: null,
            type: cc.Node,
        },
        extendedRank: {
            default: null,
            type: cc.Node,
        },
        groupdRank: {
            default: null,
            type: cc.Node,
        },

        bgMusic: {
            default: null,
            url: cc.AudioClip,
        },

        gameName: {
            default: null,
            type: cc.Sprite,
        },

        shadowNode: {
            default: null,
            type: cc.Node,
        },

        adNode: {
            default: null,
            type: cc.Node,
        },

        qualifyingBtn: {
            default: null,
            type: cc.Node,
        },

        // consecutiveVictoriesRewardNode: {
        //     default: null,
        //     type: cc.Node,
        // },

        consecutiveRedPoint:{
            default: null,
            type: cc.Node,
        },

        canSeasonLevelRewardBtn:{
            default: null,
            type: cc.Node,
        },

        userIconBtn:{
            default: null,
            type: cc.Node,
        },
        dailyLoginBtn:{
            default: null,
            type: cc.Node,
        },
        inviteOtherBtn:{
            default: null,
            type: cc.Node,
        },
        rankNode:{
            default: null,
            type: cc.Node,
        },
        
        moreGameListNodePrefab:{
            default: null,
            type: cc.Prefab,
        },
        rankExtendNode:{
            default: null,
            type: cc.Node,
        },
        getFreeDiamondBtn:{
            default: null,
            type: cc.Node,
        },
        goldChooseNode:{
            default: null,
            type: cc.Node,
        },
        hallBottomBg:{
            default: null,
            type: cc.Node,
        },
        hotGameBtn:{
            default: null,
            type: cc.Button,
        },
        cwGameBtn:{
            default: null,
            type: cc.Button,
        },
        moreGameBtn:{
            default: null,
            type: cc.Button,
        },
        versionLabel:{
            default: null,
            type: cc.Label,
        },
        gameListAtlas: {
            default: null,
            type: cc.SpriteAtlas,
        },
        moneyAtlas: {
            default: null,
            type: cc.SpriteAtlas,
        },
        jiugonggeNode:{
            default: null,
            type: cc.Node,
        },

        cainiaiwanNode:{
            default: null,
            type: cc.Node,
        },

        moreGmaeListBack:{
            default: null,
            type: cc.Node,
        },
        weiXinQuanBtn:{
            default: null,
            type: cc.Node,
        },

        friendBattleBtn:{
            default: null,
            type: cc.Node,
        },
        loadingProgress:{
            default: null,
            type: cc.Label,
        },
        hotGameEnName : "",
        cwGameEnName : "",
        divisionID: 1,
        videoAd:null,
    },
    
    // 加载大厅播放动画
    loadAct:function(){
        var self = this;
        cc.loader.loadResDir("texture/hallRes/dh_xueliuchenghe", function (err, assets) {
            var playNode = self.hotGameBtn.node.getChildByName("xueliu_act");
            playNode.active = true;
            var dragonDisplay = playNode.addComponent(dragonBones.ArmatureDisplay);
            for (var i in assets) {
                if (assets[i] instanceof dragonBones.DragonBonesAsset) {
                    dragonDisplay.dragonAsset = assets[i];
                }
                if (assets[i] instanceof dragonBones.DragonBonesAtlasAsset) {
                    dragonDisplay.dragonAtlasAsset = assets[i];
                }
            }
            dragonDisplay.armatureName = 'armatureName';
            dragonDisplay.playAnimation("xueliuchenghe");
            var callback = function () {
                dragonDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, callback, self);
            }

            dragonDisplay.addEventListener(dragonBones.EventObject.COMPLETE, callback, self)
        })

        cc.loader.loadResDir("animation/dragonBones/dh_zhujiemian_3ge", function (err, assets) {
            var playNode = self.hotGameBtn.node.getChildByName("xueliu1_act");
            playNode.active = true;
            var dragonDisplay = playNode.addComponent(dragonBones.ArmatureDisplay);
            for (var i in assets) {
                if (assets[i] instanceof dragonBones.DragonBonesAsset) {
                    dragonDisplay.dragonAsset = assets[i];
                }
                if (assets[i] instanceof dragonBones.DragonBonesAtlasAsset) {
                    dragonDisplay.dragonAtlasAsset = assets[i];
                }
            }
            dragonDisplay.armatureName = 'armatureName';
            dragonDisplay.playAnimation("xueliuchenghe_baiguang");
            var callback = function () {
                dragonDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, callback, self);
            }

            dragonDisplay.addEventListener(dragonBones.EventObject.COMPLETE, callback, self)
        })

        // 血流成河动画
        // var playNode = this.hotGameBtn.node.getChildByName("xueliu_act");
        // playNode.active = true;
        // var dragonDisplay = playNode.getComponent(dragonBones.ArmatureDisplay);
        // dragonDisplay.playAnimation("xueliuchenghe");
        // var callback = function () {
        //     dragonDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, callback, self);
        // }

        // dragonDisplay.addEventListener(dragonBones.EventObject.COMPLETE, callback, this)

        // var playNode = this.hotGameBtn.node.getChildByName("xueliu1_act");
        // playNode.active = true;
        // var dragonDisplay = playNode.getComponent(dragonBones.ArmatureDisplay);
        // dragonDisplay.playAnimation("xueliuchenghe_baiguang");
        // var callback = function () {
        //     dragonDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, callback, self);
        // }

        // dragonDisplay.addEventListener(dragonBones.EventObject.COMPLETE, callback, this)

        cc.loader.loadResDir("texture/hallRes/dh_xueliuchenghe", function (err, assets) {
            var playNode = self.cwGameBtn.node.getChildByName("xuezhan_act");
            playNode.active = true;
            var dragonDisplay = playNode.addComponent(dragonBones.ArmatureDisplay);
            for (var i in assets) {
                if (assets[i] instanceof dragonBones.DragonBonesAsset) {
                    dragonDisplay.dragonAsset = assets[i];
                }
                if (assets[i] instanceof dragonBones.DragonBonesAtlasAsset) {
                    dragonDisplay.dragonAtlasAsset = assets[i];
                }
            }
            dragonDisplay.armatureName = 'armatureName';
            dragonDisplay.playAnimation("xuezhandaodi");
            var callback = function () {
                dragonDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, callback, self);
            }

            dragonDisplay.addEventListener(dragonBones.EventObject.COMPLETE, callback, self)
        })

        cc.loader.loadResDir("animation/dragonBones/dh_zhujiemian_3ge", function (err, assets) {
            var playNode = self.cwGameBtn.node.getChildByName("xuezhan1_act");
            playNode.active = true;
            var dragonDisplay = playNode.addComponent(dragonBones.ArmatureDisplay);
            for (var i in assets) {
                if (assets[i] instanceof dragonBones.DragonBonesAsset) {
                    dragonDisplay.dragonAsset = assets[i];
                }
                if (assets[i] instanceof dragonBones.DragonBonesAtlasAsset) {
                    dragonDisplay.dragonAtlasAsset = assets[i];
                }
            }
            dragonDisplay.armatureName = 'armatureName';
            dragonDisplay.playAnimation("xuezhandaodi_baiguang");
            var callback = function () {
                dragonDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, callback, self);
            }

            dragonDisplay.addEventListener(dragonBones.EventObject.COMPLETE, callback, self)
        })

        // 血战到底动画
        // var playNode = this.cwGameBtn.node.getChildByName("xuezhan_act");
        // playNode.active = true;
        // var dragonDisplay = playNode.getComponent(dragonBones.ArmatureDisplay);
        // dragonDisplay.playAnimation("xuezhandaodi");
        // var callback = function () {
        //     dragonDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, callback, self);
        // }

        // dragonDisplay.addEventListener(dragonBones.EventObject.COMPLETE, callback, this)

        // var playNode = this.cwGameBtn.node.getChildByName("xuezhan1_act");
        // playNode.active = true;
        // var dragonDisplay = playNode.getComponent(dragonBones.ArmatureDisplay);
        // dragonDisplay.playAnimation("xuezhandaodi_baiguang");
        // var callback = function () {
        //     dragonDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, callback, self);
        // }

        // dragonDisplay.addEventListener(dragonBones.EventObject.COMPLETE, callback, this)

        cc.loader.loadResDir("animation/dragonBones/dh_zhujiemian_3ge", function (err, assets) {
            var playNode = self.qualifyingBtn.getChildByName("qualifying_act");
            playNode.active = true;
            var dragonDisplay = playNode.addComponent(dragonBones.ArmatureDisplay);
            for (var i in assets) {
                if (assets[i] instanceof dragonBones.DragonBonesAsset) {
                    dragonDisplay.dragonAsset = assets[i];
                }
                if (assets[i] instanceof dragonBones.DragonBonesAtlasAsset) {
                    dragonDisplay.dragonAtlasAsset = assets[i];
                }
            }
            dragonDisplay.armatureName = 'armatureName';
            dragonDisplay.playAnimation("chuangguanshengji");
            var callback = function () {
                dragonDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, callback, self);
            }

            dragonDisplay.addEventListener(dragonBones.EventObject.COMPLETE, callback, self)
        })

        cc.loader.loadResDir("animation/dragonBones/RR_BG1", function (err, assets) {
            var playNode = self.node.getChildByName("hall_bg").getChildByName("hallBg_act");
            playNode.active = true;
            var dragonDisplay = playNode.addComponent(dragonBones.ArmatureDisplay);
            for (var i in assets) {
                if (assets[i] instanceof dragonBones.DragonBonesAsset) {
                    dragonDisplay.dragonAsset = assets[i];
                }
                if (assets[i] instanceof dragonBones.DragonBonesAtlasAsset) {
                    dragonDisplay.dragonAtlasAsset = assets[i];
                }
            }
            dragonDisplay.armatureName = 'armatureName';
            dragonDisplay.playAnimation("newAnimation");
            var callback = function () {
                dragonDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, callback, self);
            }

            dragonDisplay.addEventListener(dragonBones.EventObject.COMPLETE, callback, self)
        })

        // 排位赛按钮动画
        // var playNode = this.qualifyingBtn.getChildByName("qualifying_act");
        // playNode.active = true;
        // var dragonDisplay = playNode.getComponent(dragonBones.ArmatureDisplay);
        // dragonDisplay.playAnimation("chuangguanshengji");
        // var callback = function () {
        //     dragonDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, callback, self);
        // }

        // dragonDisplay.addEventListener(dragonBones.EventObject.COMPLETE, callback, this)

        // 背景图动画
        // var playNode = this.node.getChildByName("hall_bg").getChildByName("hallBg_act");
        // var dragonDisplay = playNode.getComponent(dragonBones.ArmatureDisplay);
        // dragonDisplay.playAnimation("newAnimation");
        // var callback = function () {
        //     dragonDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, callback, self);
        // }

        // dragonDisplay.addEventListener(dragonBones.EventObject.COMPLETE, callback, this)
    },
    loadingAct: function (bIsPlaying) {
        var whosTurnNode = this.node.getChildByName("loading_act");
        if (bIsPlaying) {
            whosTurnNode.active = true;
            var dragonDisplay = whosTurnNode.addComponent(dragonBones.ArmatureDisplay);
            dragonDisplay.playAnimation('newAnimation');

            if (this.clickMatch){
                this.clickMatch = false;
                var self = this;
                
                // TSCommon.performWithDelay(this, function(){
                    // if (!G.cancelClickMatch){
                    //     // TSCommon.dispatchEvent(HallResources.onClearLoadingNode, true);
                    //     self.onClickMatchGame();
                    // }else{
                    //     G.cancelClickMatch = false;
                    // }
                // }, 3);

            }
        }
        else {
            whosTurnNode.active = false;
        }
    },

    // loadingAct: function (bIsPlaying) {
    //     var whosTurnNode = this.node.getChildByName("loading_act");
    //     if (bIsPlaying) {
    //         if (!this.loadingDragon){
    //             cc.loader.loadResDir("animation/dragonBones/jiazai_ske", function (err, assets) {
    //                 var dragonDisplay = whosTurnNode.addComponent(dragonBones.ArmatureDisplay);
    //                 for (var i in assets) {
    //                     if (assets[i] instanceof dragonBones.DragonBonesAsset) {
    //                         dragonDisplay.dragonAsset = assets[i];
    //                     }
    //                     if (assets[i] instanceof dragonBones.DragonBonesAtlasAsset) {
    //                         dragonDisplay.dragonAtlasAsset = assets[i];
    //                     }
    //                 }
    //                 dragonDisplay.armatureName = 'MovieClip';
    //                 dragonDisplay.playAnimation("newAnimation");
    //                 self.loadingDragon = true;
    //                 var callback = function () {
    //                     dragonDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, callback, self);
    //                 }
        
    //                 dragonDisplay.addEventListener(dragonBones.EventObject.COMPLETE, callback, self)
    //             })
    //         }
    //         whosTurnNode.active = true;
            
    //         // var dragonDisplay = whosTurnNode.addComponent(dragonBones.ArmatureDisplay);
    //         // dragonDisplay.playAnimation('newAnimation');

    //         TSCommon.performWithDelay(this, function(){
    //             TSCommon.dispatchEvent(HallResources.onClearLoadingNode, true);
    //         }, 10);
    //     }
    //     else {
    //         whosTurnNode.active = false;
    //     }
    // },
    addGameSceneResources:function(){
        var self = this;
        self.loadingProgress.node.active = true; 
        self.loadingProgress.string = "加载游戏内资源:0%"
        
        // this.loadingNode2.active = true; 
        // cc.loader.loadResDir("texture", function (completedCount, totalCount, item) {
        //     self.loadingProgress.string = "加载游戏资源:"+ completedCount +"/"+ totalCount;
        // }, 
        // function (err, assets) {
        //     console.log("加载完成大厅内的资源");
        //     self.loadingNode2.active = false; 
            cc.loader.loadResDir("game", function (completedCount, totalCount, item) {
                // self.loadingProgress.node.active = true; 
                self.loadingProgress.string = "加载游戏内资源:"+ parseInt(completedCount/totalCount * 100) + "%";
            }, 
                function (err, assets) {
                    cc.director.preloadScene("XueLiuGameScene");
                    G.gameSceneResourcesAddFinish = true;
                    console.log("加载完成游戏内的资源");
                    self.loadingProgress.string = "加载完成..."
                    
                    TSCommon.performWithDelay(self,function(){
                        self.loadingProgress.node.active = false; 
                        TSCommon.dispatchEvent(HallResources.onClearLoadingNode, true);
                    },1);
                    if(self.openMatchLayer){
                        console.log("进入匹配界面");
                        self.openMatchLayer();
                    }
                    
            });
        // });
    },

    onLoad:function(){
        var self = this;
        // this.scheduleOnce(function(){
            if(!G.loginGame){
                var frameRate = 35;
                cc.game.setFrameRate(frameRate); //游戏限帧
                TSCommon.addEvent(HallResources.changeLoadingShow, self.afterLoad,self);

                if(cc.sys.browserType == "mqqbrowser" || "wechatgame" == cc.sys.browserType){
                    wx.setPreferredFramesPerSecond(frameRate);//游戏限帧
                    //上报aladinSDK需要的相应参数
                    AladinSDK.reportWithAppId(Domain.WEIXIN_APPID, AladinSDK.ReportTypes.LOGIN, null);

                    AladinSDK.init(Domain.WEIXIN_APPID, '1.0.0',{
                        
                            //广点通相关
                            // gdt_left:100, //可选
                            // gdt_top:100, //可选
                            // gdt_right:100, //可选
                            // gdt_bottom:100, //可选
                            // gdt_widht:300, //可选
                            // // 猜你喜欢，更多好玩列表主题，有蓝色(AladinSDK.Theme.BLUE)、黄色(AladinSDK.Theme.YELLOW)、自定
                            // 义皮肤(AladinSDK.Theme.CUSTOM)，自定义皮肤必须穿themeurl参数
                            // theme : AladinSDK.Theme.BLUE, //可选，默认为蓝色,
                            // themeurl : 'https://ad-static.boomegg.cn/imgs/sdks/sprite_yh.png', //可选，自定义皮肤图片地
                            // 址，具体自定义文档请参考后面自定义皮肤文档
                            // }
                            // //广点通宽度默认为300 底部居中 同时传递 gdt_top gdt_bottom 按 gdt_top ， gdt_right gdt_left 按
                            // gdt_left
                            Orientation:AladinSDK.Orientation.landscape,
                            themeurl :HallResources.sdkImgUrl,
                    },function(){

                        
                    });
                    // if(require("HallUtils").isIPhoneX()){
                    //     this.jiuGongGeSwitchNode.x = 1540;
                    // }else{
                    //     this.jiuGongGeSwitchNode.x = 1252;
                    // }
                    // cc.game.addPersistRootNode(this.jiuGongGeSwitchNode);

                    cc.game.addPersistRootNode(self.gameBoxNode);
                    if(require("HallUtils").isIPhoneX())
                    {
                        self.gameBoxNode.x = 1490;
                    }
                }

                TSCommon.log("LoginButtonMenu.onLoad");
                if(!cc.sys.isNative && require("HallUtils").judeIsPhoneWXGameBrowser())    //在微信小游戏的环境
                {
                    var onWxGameLoginCallBack = function()
                    {
                        var weixinUserInfo = WeixinManager.getInstance().userInfo;
                        if(!weixinUserInfo)
                            return;
                        require('HallControl').getInstance().loginByIMEI(weixinUserInfo.openid,weixinUserInfo.nickName,weixinUserInfo.avatarUrl,Domain.WEIXIN_APPID,weixinUserInfo.openid);
                    }
                    self.m_onWxGameLoginCallBack = onWxGameLoginCallBack;
                    TSCommon.addEvent(TSCommon.onGeWXtUserInfoLogin, onWxGameLoginCallBack,self);

                    WeixinManager.getInstance().checkLogin(false);
                    var weixinUserInfo = WeixinManager.getInstance().userInfo;
                    if(!weixinUserInfo)
                        return;

                    require('HallControl').getInstance().loginByIMEI(weixinUserInfo.unionid,weixinUserInfo.nickname,weixinUserInfo.avatarUrl,"","");
                }
                else{

                    
                    var imei = null;
                    // var imei = "AfneS1YkaPCAf4zOMqtLhcPGIUm45"+cc.sys.localStorage.getItem("imei");
                    // var imei = "ofneS1YkaPCAf3zOMqtLhcPGIUm45BBBBBB"//cc.sys.localStorage.getItem("imei");
                    if(!imei){
                        var lastNumber = "";
                        for(var i = 0; i < 6; i++){
                            lastNumber += Math.floor(Math.random() * 10)
                        }

                        imei = "ofneS1YkaPCAf3zOMqtLhcPGIUm45"
                        imei += lastNumber;
                        cc.sys.localStorage.setItem("imei", imei);
                    }
                    require('HallControl').getInstance().loginByIMEI(imei,"游客","","","");
                }
            }
            else{
                self.afterLoad()
            }
        // },0)
    },
    afterLoad:function() {
        cc.audioEngine.stopAll();
        // this.addGameSceneResources();
       
        var self = this;
        // this.gameMatchLayer.active = false;
        this.clickHideBtnTimes = 0;
        this.versionLabel.string = Domain.Gversion || "";
        this.button = null;
        this.clickMatch = false;
        this.seasonData = new Array();
        this.continueWinData = new Array();
        this.moreGameListData = new Array();

        if(!this.moreGameListNode){
            this.moreGameListNode = cc.instantiate(this.moreGameListNodePrefab);
            this.node.addChild(this.moreGameListNode)
        }
        if(!this.dailyLayer){
            this.dailyLayer = cc.instantiate(this.dailyLayerPrefab);
            this.node.addChild(this.dailyLayer)
        }
        if(!this.inviteFriendLayer){
            this.inviteFriendLayer = cc.instantiate(this.inviteFriendLayerPrefab);
            this.node.addChild(this.inviteFriendLayer)
        }
        if(AladinSDK.IsShowDrawer()){
            console.log('显示九宫格按钮');
            self.jiugonggeNode.active = true;
            self.cainiaiwanNode.active = true;
            
        } else {
            console.log('隐藏九宫格按钮');
            self.jiugonggeNode.active = false;
            self.cainiaiwanNode.active = false;
        }

        if(require("HallUtils").isIPhoneX())
        { 
            if(!cc.sys.isNative && cc.sys.isMobile){
                var canvasFit = this.node.getComponent(cc.Canvas);
                canvasFit.fitHeight = true;
                canvasFit.fitWidth = false;
            }

            // cc.loader.loadRes("texture/hallRes/iphonex_bg", cc.SpriteFrame,function (error, spriteframe)
            // {
            //     var bgSp = self.node.getChildByName('hall_bg').getComponent(cc.Sprite);
            //     if (!error) {
            //         bgSp.spriteFrame = spriteframe;
                   
            //     }
            // });
            var bgSp = self.hallBottomBg.getChildByName('bgSprite').getComponent(cc.Sprite);
            bgSp.spriteFrame = self.moneyAtlas.getSpriteFrame("iphonex_hallBottomBg");
        // }
        // if(require("HallUtils").isRealIphoneX())
        // {   
            //调节界面图标坐标
            self.shadowNode.width = 2436;
            self.userIconBtn.setPositionX(-350);
            self.dailyLoginBtn.setPositionX(700);
            self.inviteOtherBtn.setPositionX(700);
            self.rankNode.setPositionX(-60);
            self.rankExtendNode.setPositionX(-60);
            self.collectBtn.node.setPositionX(480);
            // self.getFreeDiamondBtn.setPositionX(700);
            self.friendBattleBtn.setPositionX(700);
            self.goldChooseNode.setPositionX(-400);
            self.moreGameListNode.getComponent("MoreGameListLayer").moreGameUpNode.setPositionX(-400);
            self.moreGameListNode.getComponent("MoreGameListLayer").moreGameUpBg.setPositionX(-600);
            // self.moreGameUpNode.setPositionX(-400);
            // self.moreGameUpBg.setPositionX(-600);
           
            self.cainiaiwanNode.setPositionX(1480);
            self.moreGmaeListBack.setPositionX(-720)
            self.weiXinQuanBtn.setPositionX(-200)
            // console.log("设定x坐标")
        }

        if(cc.sys.os == cc.sys. OS_IOS){
            this.getFreeDiamondBtn.active = true;
            self.cainiaiwanNode.setPositionY(210);
        }
        else{
            self.cainiaiwanNode.setPositionY(210);
        }

        this.adNode.active = true;
        // this.moreGameNode.active = true;

        if(this.isWeChatPlatform()){
            

            // var AladinBannerNode = AladinSDK.getBannerNode();
            // if(!window.AladinBannerNode){

            //     this.adNode.addChild(AladinBannerNode);

            //     window.AladinBannerNode = AladinBannerNode;

                
            //     cc.game.addPersistRootNode(this.adNode);

            // }

            if(!window.AladinJiuGongGeNode){
                window.AladinJiuGongGeNode = this.jiugonggeNode;
                
                cc.game.addPersistRootNode(this.jiugonggeNode);

                if(cc.sys.os == cc.sys. OS_IOS){
        
                    if (self.jiugonggeNode)
                        self.jiugonggeNode.setPositionY(320);
                }
                else{
                    if (self.jiugonggeNode)
                        self.jiugonggeNode.setPositionY(320);
                }

                if(require("HallUtils").isIPhoneX())
                {
                    if (self.jiugonggeNode)
                        self.jiugonggeNode.setPositionX(1480);
                }
            }
            AladinSDK.GetDrawerNode().x = this.node.width/2;
            AladinSDK.GetDrawerNode().y = this.node.height/2;

            AladinSDK.hideFavoNode();

            // var AladinMoreNode = AladinSDK.GetDrawerNode()
            // if(!window.AladinMoreNode){

            //     this.moreGameNode.x = require("HallUtils").isIPhoneX() ? 1500: 1225;

            //     window.AladinMoreNode = AladinMoreNode;
            //     this.moreGameNode.addChild(AladinMoreNode);
            //     cc.game.addPersistRootNode(this.moreGameNode);

            // }
            // AladinSDK.ShowDrawer();

            // AladinSDK.ShowBanner();
        }
        
        TSCommon.addEvent(HallResources.onShowBannerAndMoreGame, this.showBannerAndMoreGame, this);
        TSCommon.addEvent(HallResources.onHideBannerAndMoreGame, this.hideBannerAndMoreGame, this);


        self.awardAmount = 0;
        self.totalAwardTimes = 0;
        self.bankruptAwardAmount = 0;
        self.curAwardTimes = 0;
        self.bClickCollectionBtn = false;
        self.shareTicket = "";
        //拉取用户头像
        var weixinUserInfo = WeixinManager.getInstance().userInfo;
        if(weixinUserInfo && weixinUserInfo.avatarUrl){
            var imgurl=weixinUserInfo.avatarUrl+"?aaa=aa.jpg";
            cc.loader.load(imgurl, function(err, texture){
                self.playerIcon.spriteFrame = new cc.SpriteFrame(texture);
                // self.playerIcon.node.setScale(0.45);
            
            });
        }
        //刷新用户金币数据
        var publicUserInfo = require("HallControl").getInstance().getPublicUserInfo();
        self.goldCount.string = this.formatGold(publicUserInfo.nGold,true);
        if(self.isWeChatPlatform()){
            this.refreshPlayerDiamondCount();
        }

        this.playerId.string = publicUserInfo.userDBID;
        this.playerName.string = publicUserInfo.nickName;
        //设置用户收藏按钮
        self.getCollectInfo();

        //破产事件监听
        var onMoneyNotEnough = function (event) {
            var showNoMoneyTips = function(bolOpenView){
                //首先判断好有帮助功能是否还有次数,有就进好有帮助界面，没有就进提示金币不足界面
                if (bolOpenView){
                    var collectLayer = cc.instantiate(self.commonTipsPrefab);
                    var data = [];
                    data.nAtlasType = 1;
                    data.titleIcon = "friendHelpTitle";
                    data.msg = "不好了！破产了！快点请求好友接济！分享给任意好友，立即领取"+self.bankruptAwardAmount+"金币！";
                    data.womenThink = "不好了，破产了！快点请求好友接济！\n分享给任意好友，立即领取" + self.bankruptAwardAmount +"金币！";
                    data.showIcon = "jinbi";
                    data.showIconLabel = "*"+self.bankruptAwardAmount;
                    data.buttonIcon2 = "mallBuyBtn";
                    data.button2Func = function(){
                        collectLayer.getComponent("commonTipsLayer").clickCloseBtn();
                        self.onClickMallBtn();
                    };
                    data.buttonIcon3 = "quickShareBtn";
                    data.button3Func = function(){
                        collectLayer.getComponent("commonTipsLayer").clickCloseBtn();
                        if(self.isWeChatPlatform()){
                            self.getBankruptReward();
                            //主动拉起分享接口
                            // var HallResources = require("HallResources");
                            wx.shareAppMessage({
                                title: "救命啊，我是全村人的希望！",
                                imageUrl: HallResources.rupShareImgUrl,
                                // success(res){
                                //     console.log("转发成功!!!")
                                //     self.getBankruptReward();
                                // },
                                // fail(res){
                                //     console.log("转发失败!!!")
                                // } 
                            })

                        }
                    };
                    data.otherText1 = "今日领取数：";
                    data.otherText2 = ""+(self.totalAwardTimes - self.curAwardTimes);
                    data.otherText3 = "/"+self.totalAwardTimes;
                    collectLayer.parent = self.node;
                    collectLayer.getComponent("commonTipsLayer").initData(data);   
                    collectLayer.setPosition(0,0); 
                }else{
                    var collectLayer = cc.instantiate(self.commonTipsPrefab);
                    var data = [];
                    data.nAtlasType = 1;
                    data.titleIcon = "coinNoEnoughTitle";
                    data.msg = "您的金币已不足以继续游戏，请前往商城购买。";
                    data.showIcon = "jinbi";
                    data.buttonIcon1 = "goToMallBtn";
                    data.button1Func = function(){
                        collectLayer.getComponent("commonTipsLayer").clickCloseBtn();
                        self.onClickMallBtn();
                    };
                    collectLayer.parent = self.node;
                    collectLayer.getComponent("commonTipsLayer").initData(data);   
                    collectLayer.setPosition(0,0); 
                }
            };
            self.getBankruptInfo(showNoMoneyTips);
        }
        this.onMoneyNotEnough = onMoneyNotEnough;
        TSCommon.addEvent(HallResources.onNoEnoughGold, onMoneyNotEnough, this);
        TSCommon.addEvent(HallResources.onGoldOrDiamondChanged, this.changMoney, this);    //金币改变
        TSCommon.addEvent(HallResources.onGetMoreDeskBg,this.onClickInviteBtn,this);

        this.loadAct();

        var showLoadingFunc = function()
        {
            self.loadingNode.active = true;  
            self.loadingAct(true);
        };
        this.showLoadingFunc = showLoadingFunc;
        TSCommon.addEvent(HallResources.onShowLoadingNode, showLoadingFunc, this);

        var clearLoadingFunc = function()
        {
            self.loadingNode.active = false;  
            self.loadingAct(false);
        };
        this.clearLoadingFunc = clearLoadingFunc;
        TSCommon.addEvent(HallResources.onClearLoadingNode, clearLoadingFunc, this);

        var clearDailyLoginRedPointFunc = function()
        {
            self.dailyLoginRedPoint.active = false;  
        };
        this.clearDailyLoginRedPointFunc = clearDailyLoginRedPointFunc;
        TSCommon.addEvent(HallResources.onClearDailyLoginRedPoint, clearDailyLoginRedPointFunc, this);

        var clearConsecutiveRedPointFunc = function()
        {
            self.consecutiveRedPoint.active = false;  
        };
        this.clearConsecutiveRedPointFunc = clearConsecutiveRedPointFunc;
        TSCommon.addEvent(HallResources.onClearConsecutiveRedPoint, clearConsecutiveRedPointFunc, this);
        
        var clearCollectionRedPointFunc = function()
        {
            self.collectionLoginRedPoint.active = false;  
        };
        this.clearCollectionRedPointFunc = clearCollectionRedPointFunc;

        var refreshHallSeasonLevelUp = function(event)
        {
            self.canSeasonLevelRewardBtn.active = event.data;  
        };
        this.refreshHallSeasonLevelUp = refreshHallSeasonLevelUp;
        TSCommon.addEvent(HallResources.onSeasonLevelUp, refreshHallSeasonLevelUp, this);
        TSCommon.addEvent(HallResources.onClearCollectionLoginRedPoint, clearCollectionRedPointFunc, this);
        TSCommon.addEvent(HallResources.onRefreshPlayerDiamondCount, this.refreshPlayerDiamondCount, this);
        TSCommon.addEvent(HallResources.openNewSeason, this.showNewSeasonLayer, this);
        TSCommon.addEvent(HallResources.onChangePlayerQualifyingScore, this.refreshPlayerQualifying, this);
        TSCommon.addEvent(HallResources.openSDKGameBox, this.openSDKGameBoxFunc, this);
        TSCommon.addEvent(HallResources.openSDKFav, this.openSDKFaveFunc, this);
        TSCommon.addEvent(HallResources.openAD, this.openADFunc, this);

        var showMsg = function(msg)
        {
            if (msg.data.length > 1){
                self.showMessage(msg.data[0],msg.data[1]);  
            }
            else
            {
                self.showMessage(msg.data[0]);  
            }
        };
        this.showMsg = showMsg;
        TSCommon.addEvent(HallResources.onShowFlyMessage, showMsg, this);

        //分享的事件监听
        if(self.isWeChatPlatform()){
            //发个请求获得分享的资源
            wx.request({
                url: 'https://mprogram.boomegg.cn/sprogram/ads/c/ad/get',
                method:'post',
                data: {
                id: '11111'// 本小程序id, 测试的时候用“11111”,正式上线请修改为本小程序的appid,并联系萌蛋的对接同学配置
                },
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                success: function (res) {
                    if(res.data.ret==0){
                        self.imgUrl = res.data.data.imgUrl;
                        // canvas.addEventListener('touchstart', ((e) => {
                        //     wx.previewImage({
                        //     urls: [imgUrl]
                        //     })
                        // }).bind(this))
                    }
                }
            });

            // 开启右上角的分享
            wx.showShareMenu();
            //监听右上角的分享调用 
            wx.onShareAppMessage(function(res){
                return {
                    title: "带你装逼带你飞，要跟我一起来赚钱吗？",
                    imageUrl: HallResources.shareImgUrl,
                }
            });
            //开启群分享
            wx.updateShareMenu({
                withShareTicket: true
            });

        }
        //刷新排行榜界面
        this.sendMsgToWXChildren();

        // TSCommon.performWithDelay(this,this.getDailyReward,2);
        //每日登陆奖励提示
        this.getDailyReward();

        //获得并设置天梯数据
        this.getPlayerQualifyingData();

        //刷新连胜奖励数据和小红点
        this.updateConsecutiveVictoriesData();
        

        TSCommon.addEvent(HallResources.openBgMusic, this.onPlayBgMusic, this);
        TSCommon.addEvent(HallResources.closeBgMusic, this.onCloseBgMusic, this);
        // TSCommon.addEvent(HallResources.onChangeShadow,this.setShadowNodeVis,this);

        if(!HallResources.ChangeOncePlayMusic){
            cc.sys.localStorage.setItem("bgMusic", 1);
            cc.sys.localStorage.setItem("voiceEffect", 1);
            HallResources.ChangeOncePlayMusic = true;
        }

        //播放背景音乐
        var bgMusicOpen = parseInt(cc.sys.localStorage.getItem("bgMusic") || 0);
        if (bgMusicOpen!= 0) {
            this.onPlayBgMusic();
        }
        this.initGamelinSink();
        // this.onSetPlayerCount();
        this.refreshMoreGmaeList();

        //显示广告
        // this.createBanner();

        require('HallWebRequest').getInstance().getPrivateRoomInfo();

        cc.game.on(cc.game.EVENT_HIDE, function () {
            // console.log("cc.audioEngine.pauseAll");
            cc.audioEngine.stopAll();
        });
        cc.game.on(cc.game.EVENT_SHOW, function () {
            // console.log("cc.audioEngine.rePlay");
            // cc.audioEngine.resumeAll();
            cc.audioEngine.stopAll();
            var bgMusicOpen = parseInt(cc.sys.localStorage.getItem("bgMusic") || 0);
            if (bgMusicOpen!= 0) {
                cc.audioEngine.play(self.bgMusic, true);
            }
        });
    },

    start:function(){
        if(G.matchGameReady){
            this.onClickMatchGame();
        }
        else if(G.goldGameReady == 36){

            //隐藏排行榜
            this.rankListNode.node.active = false;
            this.onClickButton("xueliu");
            
        }
        else if(G.goldGameReady == 44){

            //隐藏排行榜
            this.rankListNode.node.active = false;
            this.onClickButton("xuezhan");
        }
        else if(G.goldGameReady == 97){

            //隐藏排行榜
            this.rankListNode.node.active = false;
            this.onClickButton("gdmj");
        }
    },

     //展示广告和更多游戏选择
    showBannerAndMoreGame:function(){
        if(this.isWeChatPlatform()){
            AladinSDK.ShowMore();
    
            AladinSDK.ShowBanner();
        }
    },


    //隐藏广告和更多游戏选择
    hideBannerAndMoreGame:function(){
        if(this.isWeChatPlatform()){
            AladinSDK.HideMore();

            AladinSDK.HideBanner();
        }  
    },

    //刷新大厅的天梯排行内容
    refreshPlayerQualifying:function(){
        this.getPlayerQualifyingData();
    },

    // 是否到达指定段位（目前白银）
    getIsSilver:function(){
        if (this.divisionID > 3) {
            return true;
        }
        return false;
    },

    //设置赛季天梯相关界面
    getPlayerQualifyingData: function () {
        var self = this;
        //设置时间
        var callBackFunc = function (bolSuccess, data) {
            if (bolSuccess) {
                HallResources.getInstance().removeLoading();
                var jsonObject = JSON.parse(data)
                // console.log("-----------------xcxGetUserBalance.aspx返回数据----------------------------")
                // console.log(jsonObject)
                var seasonStartTime = jsonObject.SeasonStartTime; //赛季开始时间
                var seasonEndTime = jsonObject.SeasonEndTime; //赛季结束时间
                var score = jsonObject.Score;//玩家积分
                self.divisionID = jsonObject.DivisionID;//玩家天梯等级
                // 当玩家达到白银的时候，打开锁
                if(self.getIsSilver()){
                    self.hotGameBtn.node.getChildByName('lockBtn').active = false;
                    self.hotGameBtn.node.getChildByName('famous').active = true;
                    
                    self.cwGameBtn.node.getChildByName('lockBtn').active = false;
                    self.cwGameBtn.node.getChildByName('usually').active = true;
                }
                var qualifyingData = jsonObject.table;
                HallResources.getInstance().setQualifyingData(qualifyingData);
                require("HallControl").getInstance().getPublicUserInfo().nPlayerQualifyingScore = score;
                //刷新大厅的显示
                self.qualifyingBtn.getComponent("HallQualifying").changeRank(score);
                //刷新赛季界面的显示
                // var rankData = HallResources.getInstance().getDivisionData();
                self.seasonData.score = score;
                self.seasonData.seasonStartTime = seasonStartTime;
                self.seasonData.seasonEndTime = seasonEndTime;

                // self.seasonNode.getComponent("SeasonLayer").initData(score, rankData, seasonStartTime, seasonEndTime, self.divisionID)
                // self.newSeasonNode.getComponent("NewSeasonLayer").initData(seasonStartTime,seasonEndTime)
            }
        };
        require('HallWebRequest').getInstance().getDivisionGetInfo(callBackFunc);
    },

    //-----------------------------------------------广告功能----------------------------------------------------
    createBanner:function(){
        //获得当前基础库版本号 
        if(this.isCanShowAd()){
        //   require("aladinSDK").changeGDT(null,-300,null);
        //   require("aladinSDK").showBottomAd()
        
        this.videoAd = wx.createRewardedVideoAd({
            // adUnitId: 'adunit-XXX’
        })
        this.videoAd.onClose(res => {
            // 用户点击了【关闭广告】按钮
            // 小于 2.1.0 的基础库版本，res 是一个 undefined
            if (res && res.isEnded || res === undefined) {
              // 正常播放结束，可以下发游戏奖励
              console.log("播放视频广告完成")
            } else {
              // 播放中途退出，不下发游戏奖励
              console.log("播放视频广告中途移除")
            }
          })
        }
    },

    openADFunc: function(){
        var self = this;
        self.videoAd.show()
            .catch(err => {
                self.videoAd.load()
            .then(() => self.videoAd.show())
        })
    },
    
    // 点击两把锁
    onClickLockBtn: function(){
        HallResources.getInstance().playButtonEffect();
        TSCommon.dispatchEvent(HallResources.onShowFlyMessage, ["需在【闯关升级】中达到白银段位才能开启"]);
    },

    isCanShowAd: function(){
        var ret = false;
        if(cc.sys.platform === cc.sys.WECHAT_GAME){ 
            var current_version = wx.getSystemInfoSync().SDKVersion;
            if (this.compareVersion(current_version, "2.0.4") === -1){
                console.log('=====版本不够2.0.4，视频广告不能用')
            }else{
                ret = true;
            }
        }
        return ret;
    },

    //---------------------------------------------------------------------------------------------------
    //刷新界面UI，显示最热和常玩，顺便设置一下更多游戏的滑动列表
    refreshMoreGmaeList:function(){ 
        
        var self = this;
        //设置时间
        var callBackFunc = function(bolSuccess,data){
            if (bolSuccess) {
                HallResources.getInstance().removeLoading();
                var jsonObject = JSON.parse(data)
                // console.log("-----------------GetHotAndLastPlayGame.aspx返回数据----------------------------")
                // console.log(jsonObject.table)
                var table = jsonObject.table[0]; 
                // 返回值：
                //     HotGameID 火爆游戏ID
                //     LastPlayGameID 常玩游戏I
                // "HotGameID": 21,"HotGameName": "一脚癞油","LastPlayGameID": 97,"LastPlayGameName": "广东麻将"
                var gameList = require('HallControl').getInstance().getGameList();
                for (var i= 0;i<gameList.length;i++)
                {   
                    //设置两个按钮内容
                    if (gameList[i].m_iId == table.HotGameID) {
                        var s = "texture/gameList/"+gameList[i].m_sEn + "_hb_title"
                        self.huobaoGameBtnIcon.spriteFrame = self.gameListAtlas.getSpriteFrame(gameList[i].m_sEn + "_hb_title");
                        // cc.loader.loadRes("texture/gameList/"+gameList[i].m_sEn + "_hb_title", cc.SpriteFrame, function (err, spriteFrame) {
                        //     if (!err) {
                        //         self.huobaoGameBtnIcon.spriteFrame = spriteFrame;
                        //     }
                        // })
                        if (gameList[i].m_sEn == "gdmj"){
                            self.huobaoGameBtnLabel.string = "鸡平胡";
                        }else{
                            self.huobaoGameBtnLabel.string = "换三张";
                        }
                        self.hotGameEnName = gameList[i].m_sEn;
                    }
                    table.LastPlayGameID = 44;
                    if (gameList[i].m_iId == table.LastPlayGameID) {
                        var enName = gameList[i].m_sEn;
                        if (gameList[i].m_iId == 97){
                            enName = "qidai" 
                        }
                        self.changwanGameBtnIcon.spriteFrame = self.gameListAtlas.getSpriteFrame(enName + "_cw_title");
                        // cc.loader.loadRes("texture/gameList/"+enName + "_cw_title", cc.SpriteFrame, function (err, spriteFrame) {
                        //     if (!err) {
                        //         self.changwanGameBtnIcon.spriteFrame = spriteFrame;
                        //     }
                        // })
                        if (gameList[i].m_sEn == "gdmj"){
                            // self.changwanGameBtnLabel.string = "鸡平胡";
                            self.changwanGameBtnLabel.string = "";
                        }else{
                            self.changwanGameBtnLabel.string = "换三张";
                        }
                        self.cwGameEnName = gameList[i].m_sEn;
                    }
                }
                self.moreGameListData.gameList = gameList;
                self.moreGameListData.HotGameID = table.HotGameID;
                self.moreGameListData.LastPlayGameID = table.LastPlayGameID;
                // self.moreGameListNode.getComponent("MoreGameListLayer").initData(gameList,table.HotGameID,table.LastPlayGameID); 
            }
        };
        require('HallWebRequest').getInstance().getGetHotAndLastPlayGame(callBackFunc);

    },
    
    onClickMoreGameListBtn:function(){
        if(!this.getIsSilver()){
            this.onClickLockBtn();
            return;
        }
        if(!this.moreGameListData.gameList)
            this.refreshMoreGmaeList();
        HallResources.getInstance().playButtonEffect();
        var self = this;
        TSCommon.performWithDelay(self,function(){
            self.moreGameListNode.getComponent("MoreGameListLayer").initData(self.moreGameListData.gameList,self.moreGameListData.HotGameID,self.moreGameListData.LastPlayGameID); 
            self.rankListNode.node.active = false;
            self.moreGameListNode.active = true;
            self.moreGmaeListBack.active = true;
            self.hallNode.active = false;
        },0.2)
        
    },

    //初始化gamelibsink信息(主要是给排位赛使用)
    initGamelinSink:function(){    
        var gameList = require('HallControl').getInstance().getGameList();
        var gameInfo = null;
        for (var i = 0;i < gameList.length;i++)
        {
            if (gameList[i].m_iId === 36)
            {
                gameInfo = gameList[i];
                break;
            }
        }
        // if (gameInfo == null)
        //     return;
        require("GameEntrance").start(gameInfo.m_sServeIp,gameInfo.m_iPort,gameInfo.m_sWr);
    },

    //刷新玩家人数功能
    onSetPlayerCount:function(){
        var pRoomList1 =  HallResources.getInstance().getLianXiChangStation("yjly");
        var pRoomList2 =  HallResources.getInstance().getLianXiChangStation("cxz");
        var gameLibSink  =  require('GameLibSink').getInstance();
        var gameLib =  gameLibSink.getGameLib();
        var nPlayerCount1 = 0;
        var nPlayerCount2 = 0;
        for (var i = 0;i < pRoomList1.length;i++){
            nPlayerCount1 = nPlayerCount1 + gameLib.getStationOnlineCount(pRoomList1[i].dwStationID);
        }
        for (var i = 0;i < pRoomList1.length;i++){
            nPlayerCount2 = nPlayerCount2 +  gameLib.getStationOnlineCount(pRoomList2[i].dwStationID);
        }
        // console.log("一脚癞油玩家人数："+nPlayerCount1);
        // console.log("撮虾子玩家人数："+nPlayerCount2);
    },

    //------------------------大厅背景音乐--------------------
    onPlayBgMusic: function () {
        if (this.bgMusic) {
            this.m_bgMusicAudioID = cc.audioEngine.play(this.bgMusic, true);
        }
    },
    
    onCloseBgMusic: function () {
        if (this.m_bgMusicAudioID != undefined) {
            // cc.audioEngine.stop(this.m_bgMusicAudioID)
            cc.audioEngine.stopAll();
        }
    },
    //------------------------大厅背景音乐--------------------

    onDestroy:function(){
        // var HallResources = require("HallResources");
        this.onCloseBgMusic();
        // TSCommon.removeEvent(HallResources.onChangeShadow ,this.setShadowNodeVis,this);
        TSCommon.removeEvent(HallResources.changeLoadingShow, this.afterLoad,this);
        TSCommon.removeEvent(HallResources.onGoldOrDiamondChanged ,this.changMoney,this);
        TSCommon.removeEvent(HallResources.onNoEnoughGold,this.onMoneyNotEnough,this);
        TSCommon.removeEvent(HallResources.onShowLoadingNode,this.showLoadingFunc,this);
        TSCommon.removeEvent(HallResources.onClearLoadingNode,this.clearLoadingFunc,this);
        TSCommon.removeEvent(HallResources.onClearDailyLoginRedPoint,this.clearDailyLoginRedPointFunc,this);
        TSCommon.removeEvent(HallResources.onClearConsecutiveRedPoint,this.clearConsecutiveRedPointFunc,this);
        TSCommon.removeEvent(HallResources.onClearCollectionLoginRedPoint,this.clearCollectionRedPointFunc,this);
        TSCommon.removeEvent(HallResources.onShowFlyMessage,this.showMsg,this);
        TSCommon.removeEvent(HallResources.onGetMoreDeskBg,this.onClickInviteBtn,this);
        TSCommon.removeEvent(HallResources.openBgMusic, this.onPlayBgMusic, this);
        TSCommon.removeEvent(HallResources.closeBgMusic, this.onCloseBgMusic, this);
        TSCommon.removeEvent(HallResources.onRefreshPlayerDiamondCount, this.refreshPlayerDiamondCount, this);
        TSCommon.removeEvent(HallResources.onChangePlayerQualifyingScore, this.refreshPlayerQualifying, this);
        TSCommon.removeEvent(HallResources.onSeasonLevelUp, this.refreshHallSeasonLevelUp, this);
        TSCommon.removeEvent(HallResources.openNewSeason, this.showNewSeasonLayer, this);
        TSCommon.removeEvent(HallResources.openSDKGameBox, this.openSDKGameBoxFunc, this);
        TSCommon.removeEvent(HallResources.openSDKFav, this.openSDKFaveFunc, this);
        TSCommon.removeEvent(HallResources.openAD, this.openADFunc, this);
    },

    openSDKGameBoxFunc:function(){
        console.log("显示gamebox")
        if(!this.GetGameBoxNode){
            console.log("创建gamebox")
            this.GetGameBoxNode = AladinSDK.GetGameBoxNode();
            this.node.addChild(this.GetGameBoxNode,100);
        }
        AladinSDK.ShowGameBoxNode()
    },

    openSDKFaveFunc:function(){
        if(!this.FaveNode){
            var moveX  = 530;
            if(require("HallUtils").isIPhoneX())
                moveX = 730;
            this.FaveNode = AladinSDK.getFavoNode();
            this.node.addChild(this.FaveNode,100)
            AladinSDK.getFavoNode().scale = 0.4 //调整大小
            AladinSDK.setFavoPos({
                width:1200,
                y:-240,
                x:moveX
            });
            // AladinSDK.setFavoPos({
            //     width:1200
            //     });
        }
        if(G.showCainixihuan){
            AladinSDK.hideFavoNode();
            G.showCainixihuan = false;
        }
        else
        {
            G.showCainixihuan = true;
            AladinSDK.showFavoNode();
        }
    },
    

    //通用的设置阴影背景层的显示
    setShadowNodeVis:function(event)
    {
        var data = event.data;
        var self = this;
        if (!data){
            var action =cc.fadeOut(0.2);
            var action2 = cc.callFunc(function(){
                self.shadowNode.active = data;
            });
            var sequence = cc.sequence(action, action2);
            this.shadowNode.runAction(sequence);
        }else{
            var action =cc.fadeIn(0.01);
            this.shadowNode.active = data;
            this.shadowNode.runAction(action);
        }
        
    },

    //刷新钻石数据
    refreshPlayerDiamondCount:function(){
        var self = this;
        //设置时间
        var callBackFunc = function(bolSuccess,data){
            if (bolSuccess) {
                HallResources.getInstance().removeLoading();
                var jsonObject = JSON.parse(data)
                // console.log("-----------------xcxGetUserBalance.aspx返回数据----------------------------")
                // console.log(jsonObject)
                var RetCode = jsonObject.RetCode; //返回标记
                var myBalance = jsonObject.myBalance; //钻石数
                // RetCode(1=成功  0,255,-1=其他错误, 254=access_token错误, 253=openId错误, 252=offer_id错误, 251=session_key错误, 90010=登录失败, 90013=余额不足)
                if(RetCode == 1)
                {
                    self.diamondCount.string = myBalance;
                    require("HallControl").getInstance().getPublicUserInfo().nDiamond = myBalance;
                }
                else
                {
                    TSCommon.dispatchEvent(this.onShowFlyMessage,["获取钻石数目失败"]);
                }
            }
        };
        // console.log("告诉服务器，去微信请求获得钻石")
        var myData = WeixinManager.getInstance().userInfo
        // console.log(myData)
        var myOpenId = myData.openid;
        require('HallWebRequest').getInstance().getPlayerDiamondCount(myOpenId,callBackFunc);
    },

    //获得邀请好友的数据
    getInviteFriendData:function(){
        var self = this;
        //设置时间
        var callBackFunc = function(bolSuccess,data){
            if (bolSuccess) {
                if (bolSuccess) {
                    HallResources.getInstance().removeLoading();
                    var jsonObject = JSON.parse(data)
                    // console.log("-----------------WxInviteAwardGetActivityInfo.aspx返回数据----------------------------")
                    // console.log(jsonObject)
                    var activityData = [];
                    var startTime = jsonObject.StartTime; //活动开始时间  未配置返回空字符串
                    var endTime = jsonObject.EndTime; //活动结束时间  未配置返回空字符串
                    activityData.awardOne = jsonObject.AwardOne; //第一个奖励额度
                    activityData.awardTwo = jsonObject.AwardTwo; //第二个奖励额度
                    activityData.awardThree = jsonObject.AwardThree; //第三个奖励额度
                    activityData.startTime = self.timeFindMonthAndDay(startTime) + " ~";
                    activityData.endTime = self.timeFindMonthAndDay(endTime);
                    if (self.inviteFriendLayer){
                        self.inviteFriendLayer.getComponent("inviteFriendLayer").initData(activityData);
                    }
                }
            }
        };
        require('HallWebRequest').getInstance().getWxInviteActivityInfo(callBackFunc);
        //设置玩家信息
        if(self.isWeChatPlatform()){
            var callBackFunc = function(bolSuccess,data){
                if (bolSuccess) {
                    if (bolSuccess) {
                        HallResources.getInstance().removeLoading();
                        var jsonObject = JSON.parse(data)
                        // console.log("-----------------WxInviteAwardGetInfo.aspx返回数据----------------------------")
                        // console.log(jsonObject)
                        var activityData = [];
                        var friendData = jsonObject.table; 

                        var img = self.imgUrl;
                        if (self.inviteFriendLayer){
                            self.inviteFriendLayer.getComponent("inviteFriendLayer").initFriendData(friendData,img);
                        }
                    }
                }
            };
            if(WeixinManager.getInstance().userInfo)
            {
                var myOpenId = WeixinManager.getInstance().userInfo.openid;
                require('HallWebRequest').getInstance().getWxInviteAwardGetInfo(myOpenId,callBackFunc);
            }
           
        }
    },

    //获得破产奖励
    getBankruptReward:function(){
        var self = this;
        // var HallResources = require("HallResources");
        var callBackFunc = function(bolSuccess,data){
            // console.log(bolSuccess+"回调金币"+data)
            if (bolSuccess) {
                HallResources.getInstance().removeLoading();
                var jsonObject = JSON.parse(data)
                // console.log("-----------------WxBankruptAwardGetAward.aspx返回数据----------------------------")
                // console.log(jsonObject)
                var backMsg = jsonObject.RetCode;
                //(0=失败 1=领取成功 11=密码错误 12=已达到领取次数上限)
                if (backMsg == 0){
                    console.log("领取失败")
                }else if (backMsg == 1){
                    console.log("领取成功,获得金币："+self.bankruptAwardAmount)
                    var goldData = require("HallControl").getInstance().getPublicUserInfo().nGold
                    require("HallControl").getInstance().getPublicUserInfo().nGold = parseInt(self.bankruptAwardAmount) + parseInt(goldData);
                    self.collectBtn.node.active = false;
                    TSCommon.dispatchEvent(HallResources.onShowFlyMessage,["+3000","goldCoin"]);
                    TSCommon.dispatchEvent(HallResources.onGoldOrDiamondChanged,true);
                }else if (backMsg == 11){
                    console.log("密码错误")
                }else if (backMsg == 12){
                    console.log("已达到领取次数上限")
                }
                else if (backMsg == 13){
                    console.log("没有破产")
                }
            }
        };
        // console.log("破产之后微信分享回来，去领取金币")
        require('HallWebRequest').getInstance().getBankruptReward(callBackFunc);
    },

    //获得破产消息
    getBankruptInfo:function(func){
        var self = this;
        var callBackFunc = function(bolSuccess,data){
            if (bolSuccess) {
                HallResources.getInstance().removeLoading();
                var jsonObject = JSON.parse(data)
                // console.log("-----------------WxBankruptAwardGetInfo.aspx返回数据----------------------------")
                // console.log(jsonObject)
                self.totalAwardTimes = jsonObject.TotalAwardTimes;
                self.bankruptAwardAmount = jsonObject.AwardAmount;
                self.curAwardTimes = jsonObject.CurAwardTimes;
                // console.log("分享获得金币"+self.bankruptAwardAmount);
                func(self.curAwardTimes < self.totalAwardTimes);
            }
        };
        require('HallWebRequest').getInstance().getBankruptInfo(callBackFunc);
    },

    //设置是否显示用户收藏按钮
    getCollectInfo:function() {

        var self = this;
        var callBackFunc = function(bolSuccess,data){
            if (bolSuccess) {
                HallResources.getInstance().removeLoading();
                var jsonObject = JSON.parse(data)
                // console.log("-----------------WxFavAwardGetInfo.aspx返回数据----------------------------")
                // console.log(jsonObject)
                var isAward = jsonObject.IsAward;
                self.awardAmount = jsonObject.AwardAmount;
                self.collectBtn.node.active = (isAward == 0);
            }
        };
        require('HallWebRequest').getInstance().getCollectInfo(callBackFunc);
    },

    //发送数据到子域
    sendMsgToWXChildren:function()
    {
        var self = this;
        // console.log("发送数据到子域");
        if(self.isWeChatPlatform()){
            //这里检测是不是其他玩家分享链接进入
            // console.log("测试分享1"+wx.getLaunchOptionsSync()+ "   json="+JSON.stringify(wx.getLaunchOptionsSync()))
            // console.log("测试分享2"+wx.getLaunchOptionsSync().query.inviteOpenId)
            // console.log("测试分享2 inviteOpendId="+wx.getLaunchOptionsSync().query.inviteOpenId)
            // console.log("测试分享 json="+JSON.stringify(wx.getLaunchOptionsSync().query))
            // console.log("测试分享 shareTicket="+JSON.stringify(wx.getLaunchOptionsSync().shareTicket))
            var tbData = wx.getLaunchOptionsSync();
            if(tbData.shareTicket == "undefined" || tbData.shareTicket == null || tbData.shareTicket == "")
            {}
            else
            {
                console.log("这里给tbData.shareTicket赋值了，说明从群分享打开")
                self.shareTicket = tbData.shareTicket;
            }
            // wx.onshow(res => {
            //     if(res.query){
            //         // show pk UI
            //         console.log("测试分享2，获得query"+res.query)
            //     }
            // })
            this.updateWxRankData();
        }
    },

    //刷新子域微信排行
    updateWxRankData:function()
    {
        var self = this;
        var callBackFunc = function(bolSuccess,data){
            if (bolSuccess) {
                HallResources.getInstance().removeLoading();
                var jsonObject = JSON.parse(data)
                console.log("-----------------WxFriendsScoreRank.aspx返回数据----------------------------")
                console.log(jsonObject)
                var data = jsonObject.table[0]
                var playerRankNum = data.RankNum;
                var playerOpenID = data.OpenID
                // var playerUserId = data.UserID
                var playerScore = data.Score

                console.log("该玩家的openid："+playerOpenID);
                console.log("该玩家的排名："+playerRankNum);
                console.log("该玩家的分数："+playerScore);
                // 这里去将用户数据上报（排行榜要用）
                var kvDataList = new Array();
                kvDataList.push(
                {
                    key: "playerScore",
                    value:"" + playerScore
                });
                wx.setUserCloudStorage({
                    KVDataList: kvDataList
                })

                
                self._updateSubDomainCanvas();

            }
        };
        var myOpenId = WeixinManager.getInstance().userInfo.openid;
        require('HallWebRequest').getInstance().getPlayerData(myOpenId,callBackFunc);
    },

    //修改大厅金币显示
    changMoney:function()
    {
        var self = this;
        var publicUserInfo = require("HallControl").getInstance().getPublicUserInfo();
        self.goldCount.string = this.formatGold(publicUserInfo.nGold,true);
    },

    // //打开连胜奖励界面
    // openConsecutiveVictoriesReward:function(winCount)
    // {
    //     this.consecutiveVictoriesRewardNode.active = true;
    //     this.consecutiveVictoriesRewardNode.getComponent("ConsecutiveVictoriesRewardLayer").initData(winCount);
    // },

    //打开获得奖励界面，目前只有领取收藏奖励使用到了
    openGetReward:function(data)
    {
        var self = this;
        var openGetAwardLayer = function(){
            self.jinbiyuIsVis(true);
            var getRewardBack = function()
            {
                self.autoOpenInviteFriendLayer();
            }

            var callback = function()
            {
                self.getRewardLayer.active = true;
                self.getRewardLayer.getComponent("getRewardLayer").initData(data);
                self.getRewardLayer.getComponent("getRewardLayer").setCallBack(getRewardBack);
            }
            TSCommon.performWithDelay(self,callback,3);
        }
        if(!this.getRewardLayer){
            cc.loader.loadRes("/prefabs/layer_prefabs/get_reward_node", function (error, prefab) {
                if (!error) {
                    self.getRewardLayer = cc.instantiate(prefab);
                    self.node.addChild(self.getRewardLayer);
                    openGetAwardLayer();
                }
            })
        }else{
            openGetAwardLayer(); 
        }
    },

    jinbiyuIsVis: function (bIsPlaying) {
        var self = this;
        var playerNode = this.node.getChildByName("jinbiyu_node");
        var whosTurnNode = playerNode.getChildByName("jinbiyu_act");
        if (bIsPlaying) {
            Resources.playCommonEffect("jinbiyu.mp3");
            playerNode.active = true;
            var dragonDisplay = whosTurnNode.getComponent(dragonBones.ArmatureDisplay);
            var animState = dragonDisplay.playAnimation("jinbiyu",1);
            if(animState){
                animState.timeScale = 0.7;
            }

            var self = this;
            var callback = function () {
                self.jinbiyuIsVis(false);
                dragonDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, callback, self);
            }
    
            dragonDisplay.addEventListener(dragonBones.EventObject.COMPLETE, callback, this)


            // cc.loader.loadResDir("texture/hallRes/dh_jinbiyu", function (err, assets) {
            //     var dragonDisplay = whosTurnNode.addComponent(dragonBones.ArmatureDisplay);
            //     for (var i in assets) {
            //         if (assets[i] instanceof dragonBones.DragonBonesAsset) {
            //             dragonDisplay.dragonAsset = assets[i];
            //         }
            //         if (assets[i] instanceof dragonBones.DragonBonesAtlasAsset) {
            //             dragonDisplay.dragonAtlasAsset = assets[i];
            //         }
            //     }
            //     dragonDisplay.armatureName = 'armatureName';
            //     var animState = dragonDisplay.playAnimation("jinbiyu",1);
            //     if(animState){
            //         animState.timeScale = 0.7;
            //     }
            //     var callback = function () {
            //         self.jinbiyuIsVis(false);
            //         dragonDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, callback, self);
            //     }
    
            //     dragonDisplay.addEventListener(dragonBones.EventObject.COMPLETE, callback, self)
            // })
        }
        else {
            playerNode.active = false;
        }
    },

    // jinbiyuIsVis: function (bIsPlaying) {
    //     var playerNode = this.node.getChildByName("jinbiyu_node");
    //     var whosTurnNode = playerNode.getChildByName("jinbiyu_act");
    //     if (bIsPlaying) {
    //         Resources.playCommonEffect("jinbiyu.mp3");
    //         playerNode.active = true;
    //         var dragonDisplay = whosTurnNode.getComponent(dragonBones.ArmatureDisplay);
    //         var animState = dragonDisplay.playAnimation("jinbiyu",1);
    //         if(animState){
    //             animState.timeScale = 0.7;
    //         }

    //         var self = this;
    //         var callback = function () {
    //             self.jinbiyuIsVis(false);
    //             dragonDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, callback, self);
    //         }
    
    //         dragonDisplay.addEventListener(dragonBones.EventObject.COMPLETE, callback, this)
    //     }
    //     else {
    //         playerNode.active = false;
    //     }
    // },

    //点击更多游戏按钮
    onClickMoreGameBtn:function(){
       
        HallResources.getInstance().playButtonEffect();
        var self = this;
        //分享的事件监听
        if(self.isWeChatPlatform()){
            //发个请求获得分享的资源
            wx.request({
                url: 'https://mprogram.boomegg.cn/sprogram/ads/c/ad/get',
                method:'post',
                data: {
                id: Domain.WEIXIN_APPID// 本小程序id, 测试的时候用“11111”,正式上线请修改为本小程序的appid,并联系萌蛋的对接同学配置
                },
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                success: function (res) {
                    if(res.data.ret==0){
                        // self.moreGameNode.getComponent("MoreGameLayer").initData(res.data.data.imgUrl);
                        // self.moreGameNode.active = true;
                        var arr = Array();
                        arr.push(res.data.data.imgUrl);
                        wx.previewImage({
                            current: res.data.data.imgUrl, // 当前显示图片的http链接
                            urls: arr // 需要预览的图片http链接列表
                          })
                    }
                }
            });
        }
    },

    //点击快速游戏按钮
    onClickQuickStartButton:function()
    {
        HallResources.getInstance().playButtonEffect();
        var gameLibSink  =  require('GameLibSink').getInstance();
        var gameLib =  gameLibSink.getGameLib();
        var pRoomList = gameLib.getStationList();
        var size = pRoomList.length;
        if (size == 0) {
            return;
        }
        var server =  HallResources.getInstance().getEnterBestRoom(this.chooseGameType);
        if (server == null)
        {
            console.log("没有服务器或者金币不足");
            TSCommon.dispatchEvent(HallResources.onNoEnoughGold, true );
            return
        }
        gameLib.autoEnterGameRoom(server.szStationName);
        HallResources.getInstance().showLoading();
    },

    //点击大厅的游戏按钮进入游戏房间选择耳二级界面
    onClickGameBtn: function (event, data) {
        if(!G.gameSceneResourcesAddFinish){
            TSCommon.dispatchEvent(HallResources.onShowLoadingNode, true);
            this.addGameSceneResources();
        }

        this.onSetPlayerCount();
        if(!this.getIsSilver()){
            this.onClickLockBtn()
            return;
        }
        var self = this;
        var action1 = cc.moveBy(0.25, -30, 0);
        var runCallback = cc.callFunc(function () {
            //隐藏排行榜
            self.rankListNode.node.active = false;
            self.moreGameListNode.active = false;

            //记录日志
            HallResources.recordPlayerLogToServer(HallResources.recordList.choose_method);
            //预加载游戏场景界面
            if (data == 0){
                self.onClickButton("yjly");
            }
            else if(data == 36){
                // cc.director.preloadScene("XueLiuGameScene");
                self.onClickButton("xueliu");
                //记录日志
                HallResources.recordPlayerLogToServer(HallResources.recordList.click_xueliu);
            }
            else if(data == 44){
                // cc.director.preloadScene("XueLiuGameScene");
                self.onClickButton("xuezhan");
                //记录日志
                HallResources.recordPlayerLogToServer(HallResources.recordList.click_xuezhan);
            }
            else if(data == 97){
                self.onClickButton("gdmj");
            }
            else if(data == 101){
                self.onClickButton( "xueliu");
                //记录日志
                HallResources.recordPlayerLogToServer(HallResources.recordList.click_xueliu);
            }else if(data == 102){
                // cc.director.preloadScene("XueLiuGameScene");
                self.onClickButton("xuezhan");
                //记录日志
                HallResources.recordPlayerLogToServer(HallResources.recordList.click_xuezhan);
            }
        })
        var seq = cc.sequence(action1, runCallback)
        this.qualifyingBtn.runAction(seq)

        var action2 = cc.moveBy(0.25, 30, 0);
        this.hotGameBtn.node.runAction(action2)

        var action3 = cc.moveBy(0.25, 30, 0);
        this.cwGameBtn.node.runAction(action3)

        var action4 = cc.moveBy(0.25, 30, 0);
        this.moreGameBtn.node.runAction(action4)
    },

    changeMove: function () {

        var self = this;
        var runCallback = cc.callFunc(function () {
            self.qualifyingBtn.setPositionX(-271);
        })
        var action1 = cc.moveBy(0.25, 30, 0);
        var seq = cc.sequence(runCallback, action1)
        this.qualifyingBtn.runAction(seq)

        var runCallback2 = cc.callFunc(function () {
            self.hotGameBtn.node.setPositionX(248);
        })
        var action2 = cc.moveBy(0.25, -30, 0);

        var seq2 = cc.sequence(runCallback2, action2)
        this.hotGameBtn.node.runAction(seq2)

        var action3 = cc.moveBy(0.25, -30, 0);
        var runCallback3 = cc.callFunc(function () {
            self.cwGameBtn.node.setPositionX(176);
        })
        var seq3 = cc.sequence(runCallback3, action3)
        this.cwGameBtn.node.runAction(seq3)

        var action4 = cc.moveBy(0.25, -30, 0);
        var runCallback4 = cc.callFunc(function () {
            self.moreGameBtn.node.setPositionX(418);
        })
        this.moreGameBtn.node.runAction(cc.sequence(runCallback4, action4))
    },

     //显示二级界面
     onClickButton:function(gameName)
     {   
        if(this.button)
        {
            this.button.hide()
            this.button = null;
        }
        TSCommon.dispatchEvent(HallResources.onHideBannerAndMoreGame, null);
         HallResources.getInstance().playButtonEffect();
         this.chooseGameType = gameName;
         // var gameInfo = pSender.getObjectData();
         var gameList = require('HallControl').getInstance().getGameList();
        //  console.log("下面是游戏列表")
        //  console.log(gameList)
         var gameInfo = null;
         for (var i= 0;i<gameList.length;i++)
        {   
            //设置两个按钮内容
            if (gameList[i].m_sEn == gameName) {
                gameInfo = gameList[i];
            }
        }
        G.goldGameReady = gameInfo.m_iId;
         require("GameEntrance").start(gameInfo.m_iId,gameInfo.m_sServeIp,gameInfo.m_iPort,gameInfo.m_sWr);
         var pRoomList =  HallResources.getInstance().getLianXiChangStation(gameInfo.m_iId);
        //  console.log("下面是游戏房间"+gameInfo.m_iId)
        //  console.log(pRoomList)
         this.showGameRoom(pRoomList);
     },

    //通用的打开一个新的窗口界面，作用是让界面从小到大显示，必须在引擎编辑器里提前把相应的界面scale设置一下
    openAndChangeScaleAction(node,node_bg)
    {
        // var HallResources = require("HallResources");
        // TSCommon.dispatchEvent(HallResources.onChangeShadow,true);
        node.active = true;
        var action =cc.fadeIn(0.01);
        var action2 = cc.scaleTo(0.05, 1, 1);
        var sequence = cc.sequence(action, action2);
        node_bg.runAction(sequence);
    },

    //点击玩家头像
    onClickUserIcon:function(){
        var self = this;
        HallResources.getInstance().playButtonEffect();
        var clickFun = function(){
            if(!self.userInfoLayer){
                cc.loader.loadRes("/prefabs/layer_prefabs/user_info_layer_node", function (error, prefab) {
                    if (!error) {
                        self.userInfoLayer = cc.instantiate(prefab);
                        self.node.addChild(self.userInfoLayer);
                        self.openAndChangeScaleAction(self.userInfoLayer,self.userInfoLayer.getComponent("UserInfoLayer").bg);
                        var callBackFunc = function(bolSuccess,data){
                            if (bolSuccess) {
                                HallResources.getInstance().removeLoading();
                                var jsonObject = JSON.parse(data)
                                // console.log("-----------------WxGetWinStat.aspx返回数据----------------------------")
                                // console.log(jsonObject)
                                var tbData = jsonObject.table[0];
                                var totalCount = tbData.TotalCount;
                                var continueWinCount = tbData.ContinueWinCount;
                                var winRate = tbData.WinRate;
                                self.userInfoLayer.getComponent("UserInfoLayer").initData(totalCount,continueWinCount,winRate);
                            }
                        };
                        require('HallWebRequest').getInstance().getPlayerWinState(callBackFunc);
                    }
                });
            }
            else{
                self.openAndChangeScaleAction(self.userInfoLayer,self.userInfoLayer.getComponent("UserInfoLayer").bg);
                var callBackFunc = function(bolSuccess,data){
                    if (bolSuccess) {
                        HallResources.getInstance().removeLoading();
                        var jsonObject = JSON.parse(data)
                        // console.log("-----------------WxGetWinStat.aspx返回数据----------------------------")
                        // console.log(jsonObject)
                        var tbData = jsonObject.table[0];
                        var totalCount = tbData.TotalCount;
                        var continueWinCount = tbData.ContinueWinCount;
                        var winRate = tbData.WinRate;
                        self.userInfoLayer.getComponent("UserInfoLayer").initData(totalCount,continueWinCount,winRate);
                    }
                };
                require('HallWebRequest').getInstance().getPlayerWinState(callBackFunc);
            }
        }
        if(this.isWeChatPlatform()){
            this.bolWXAuthorize(clickFun);
        }else{
            clickFun();
        }
    },  

    //打开ios版本商店
    openIosPlatformShare() {
        var self = this;

        var openFreeDiamond = function()
        { 
            var callBackFunc = function (bolSuccess, data) {
                if (bolSuccess) {
                    HallResources.getInstance().removeLoading();
                    var jsonObject = JSON.parse(data)
                    // console.log("-----------------WxShareDiamondAwardGetInfo.aspx返回数据----------------------------")
                    // console.log(jsonObject)
                    var totalTimes = jsonObject.TotalTimes;
                    var curTimes = jsonObject.CurTimes;
                    var awardAmount = jsonObject.AwardAmount;
                    // --返回信息：TotalTimes --每日可领取次数CurTimes --今日已领取次数 AwardAmount --奖励额度
                    self.openAndChangeScaleAction(self.getFreeDiamondNode,self.getFreeDiamondNode.getComponent("freeDiamondLayer").bg);
                    self.getFreeDiamondNode.getComponent("freeDiamondLayer").initData(totalTimes, curTimes, awardAmount)
                }
            };
            require('HallWebRequest').getInstance().getWxShareDiamondAwardGetInfo(callBackFunc);
        }
        if(!this.getFreeDiamondNode){
            cc.loader.loadRes("/prefabs/layer_prefabs/free_diamond_node", function (error, prefab) {
                if (!error) {
                    self.getFreeDiamondNode = cc.instantiate(prefab);
                    self.node.addChild(self.getFreeDiamondNode);
                    openFreeDiamond();
                }
            })
        }else{
            openFreeDiamond(); 
        }
    },

    //打开商店界面
    onClickMallBtn:function(event,openType){
        HallResources.getInstance().playButtonEffect();
        var self = this;
           
        var openMall = function()
        { 
            if (openType && openType == 2){
                if(cc.sys.os == cc.sys. OS_IOS){
                    self.openIosPlatformShare();
                }
                else{
                    self.openAndChangeScaleAction(self.mallLayer,self.mallLayer.getComponent("MallLayer").bg);
                    self.mallLayer.getComponent("MallLayer").showDiamondNode(); 
                }
            }
            else
            {
                self.openAndChangeScaleAction(self.mallLayer,self.mallLayer.getComponent("MallLayer").bg);
                self.mallLayer.getComponent("MallLayer").showGoldNode();
            }
        }
        if(!this.mallLayer){
            TSCommon.dispatchEvent(HallResources.onShowLoadingNode, true);
            cc.loader.loadRes("/prefabs/layer_prefabs/mall_layer_node", function (error, prefab) {
                if (!error) {
                    TSCommon.dispatchEvent(HallResources.onClearLoadingNode, true);
                    self.mallLayer = cc.instantiate(prefab);
                    self.node.addChild(self.mallLayer);
                    openMall();
                }
            })
        }else{
            openMall(); 
        }
    },

    //领取每日登陆奖励
    getDailyReward:function(){
        //每天提醒可以领取登录奖励
        var self = this;
        var getRewardBack = function()
        {
            self.autoOpenInviteFriendLayer();
        }

        var callBackFunc = function(bolSuccess,data){
            if (bolSuccess) {
                HallResources.getInstance().removeLoading();
                var jsonObject = JSON.parse(data)
                // console.log("-----------------GetSignInfo.aspx返回数据----------------------------")
                // console.log(jsonObject)
                var itemData = jsonObject.table;
                var bolTodayIsClick = jsonObject.sc;
                var allData = [];
                for (var i = 0;i < itemData.length;i++){
                    var item = itemData[i];
                    var gameInfo = [];
                    gameInfo.days = item.Days;
                    gameInfo.amount = item.Amount;
                    gameInfo.hassign = item.HasSign;
                    gameInfo.icon = item.Icon;
                    allData.push(gameInfo);
                }
                if (bolTodayIsClick == 1){
                    // self.dailyLayer.active = true;
                    self.openAndChangeScaleAction(self.dailyLayer,self.dailyLayer.getComponent("dailyLoginLayer").bg);
                    self.dailyLoginRedPoint.active = true;
                    self.dailyLayer.getComponent("dailyLoginLayer").initData(allData,bolTodayIsClick);
                    self.dailyLayer.getComponent("dailyLoginLayer").setCloseCallBack(getRewardBack);
                }
                else{
                    self.autoOpenInviteFriendLayer();
                }
            }
        };
        require('HallWebRequest').getInstance().getDailyCheckInfo(callBackFunc);
    },

    autoOpenInviteFriendLayer:function()
    {
        var self = this;
        if (!G.autoOpenInivateFriendLayer)
        {
            G.autoOpenInivateFriendLayer = true;
            TSCommon.performWithDelay(this, function(){
                self.onClickInviteBtn();
            }, 1);
        }
    },

    //点击每日登陆奖励按钮
    onClickDailyBtn:function(){
        HallResources.getInstance().playButtonEffect();
        
        var self = this;
        var callBackFunc = function(bolSuccess,data){
            if (bolSuccess) {
                HallResources.getInstance().removeLoading();
                var jsonObject = JSON.parse(data)
                // console.log("-----------------GetSignInfo.aspx返回数据----------------------------")
                // console.log(jsonObject)
                var itemData = jsonObject.table;
                var bolTodayIsClick = jsonObject.sc;
                var allData = [];
                for (var i = 0;i < itemData.length;i++){
                    var item = itemData[i];
                    var gameInfo = [];
                    gameInfo.days = item.Days;
                    gameInfo.amount = item.Amount;
                    gameInfo.hassign = item.HasSign;
                    gameInfo.icon = item.Icon;
                    allData.push(gameInfo);
                }
                self.openAndChangeScaleAction( self.dailyLayer,self.dailyLayer.getComponent("dailyLoginLayer").bg);
                // self.dailyLayer.active = true;
                self.dailyLayer.getComponent("dailyLoginLayer").initData(allData,bolTodayIsClick);
            }
        };
        require('HallWebRequest').getInstance().getDailyCheckInfo(callBackFunc);
    },

    //领取收藏奖励
    getCollectReward:function() {
        var self = this;
        // var HallResources = require("HallResources");
        var callBackFunc = function(bolSuccess,data){
            if (bolSuccess) {
                HallResources.getInstance().removeLoading();
                var jsonObject = JSON.parse(data)
                // console.log("-----------------WxFavAwardGetAward.aspx返回数据----------------------------")
                // console.log(jsonObject)
                var backMsg = jsonObject.RetCode;
                //(0=失败 1=领取成功 11=密码错误 12=已经领过)
                if (backMsg == 0){
                    console.log("领取失败")
                }else if (backMsg == 1){
                    console.log("领取成功")
                    var goldData = require("HallControl").getInstance().getPublicUserInfo().nGold
                    require("HallControl").getInstance().getPublicUserInfo().nGold = parseInt(self.awardAmount) + parseInt(goldData);
                    self.collectBtn.node.active = false;
                    
                    var allData = [];
                    allData.moneytype = 7;
                    allData.wantamount = self.awardAmount;

                    self.openGetReward(allData);
                    TSCommon.dispatchEvent(HallResources.onClearCollectionLoginRedPoint,true);
                    TSCommon.dispatchEvent(HallResources.onGoldOrDiamondChanged,true);
                }else if (backMsg == 11){
                    console.log("密码错误")
                }else if (backMsg == 12){
                    console.log("已经领过")
                }
            }
        };
        require('HallWebRequest').getInstance().getCollectReward(callBackFunc);
    },

    //点击赛季问号按钮
    showSeasonLayer: function () {
        HallResources.getInstance().playButtonEffect();
        var self = this;
        var openSeason = function(){
            var rankData = HallResources.getInstance().getDivisionData();
            self.seasonNode.getComponent("SeasonLayer").initData(self.seasonData.score, rankData, self.seasonData.seasonStartTime, self.seasonData.seasonEndTime, self.divisionID)
            
            self.seasonNode.getComponent("SeasonLayer").updateGetRewardData();
            self.openAndChangeScaleAction(self.seasonNode,self.seasonNode.getComponent("SeasonLayer").bg);
        }
        if(!this.seasonNode){
            TSCommon.dispatchEvent(HallResources.onShowLoadingNode, true);
            cc.loader.loadRes("/prefabs/layer_prefabs/season_node", function (error, prefab) {
                if (!error) {
                    TSCommon.dispatchEvent(HallResources.onClearLoadingNode, true);
                    self.seasonNode = cc.instantiate(prefab);
                    self.node.addChild(self.seasonNode);
                    openSeason();
                }
            })
        }else{
            openSeason(); 
        }
    },

    //点击赛季详细按钮
    showNewSeasonLayer:function(){
        var self = this;
        var openNewSeason = function(){
            var openCallback = function(){
                HallResources.getInstance().playButtonEffect();
                self.newSeasonNode.getComponent("NewSeasonLayer").initData(self.seasonData.seasonStartTime,self.seasonData.seasonEndTime)
                self.openAndChangeScaleAction(self.newSeasonNode,self.newSeasonNode.getComponent("NewSeasonLayer").bg);
    
                if (self.seasonNode)
                    self.seasonNode.getComponent("SeasonLayer").clickCloseBtn(true);
            }
            TSCommon.performWithDelay(self, openCallback, 0.2);
        }
        if(!this.newSeasonNode){
            cc.loader.loadRes("/prefabs/layer_prefabs/new_season_node", function (error, prefab) {
                if (!error) {
                    self.newSeasonNode = cc.instantiate(prefab);
                    self.node.addChild(self.newSeasonNode);
                    openNewSeason();
                }
            })
        }else{
            openNewSeason(); 
        }
    },

    //点击连续奖励按钮
    onClickConsecutiveVictoriesBtn:function(){
        var self = this;
        HallResources.getInstance().playButtonEffect();
        if(!this.consecutiveVictoriesNode){
            TSCommon.dispatchEvent(HallResources.onShowLoadingNode, true);
            cc.loader.loadRes("/prefabs/layer_prefabs/consecutive_victories_node", function (error, prefab) {
                if (!error) {
                    TSCommon.dispatchEvent(HallResources.onClearLoadingNode, true);
                    self.consecutiveVictoriesNode = cc.instantiate(prefab);
                    self.node.addChild(self.consecutiveVictoriesNode);
                    self.openAndChangeScaleAction(self.consecutiveVictoriesNode,self.consecutiveVictoriesNode.getComponent("ConsecutiveVictoriesLayer").bg);
                    self.consecutiveVictoriesNode.getComponent("ConsecutiveVictoriesLayer").initData(self.continueWinData.data);
                }
            });
        }else{
            // TSCommon.dispatchEvent(HallResources.onShowFlyMessage,["暂未开放，敬请期待！"]);
            this.openAndChangeScaleAction(this.consecutiveVictoriesNode,this.consecutiveVictoriesNode.getComponent("ConsecutiveVictoriesLayer").bg);
            this.consecutiveVictoriesNode.getComponent("ConsecutiveVictoriesLayer").initData(this.continueWinData.data);
        }
    },

    //重置连胜相关信息
    updateConsecutiveVictoriesData:function(){ 
        
        var self = this;
        self.consecutiveRedPoint.active = false;
        var callBackFunc = function(bolSuccess,data){
            if (bolSuccess) {
                HallResources.getInstance().removeLoading();
                var jsonObject = JSON.parse(data)
                // console.log("-----------------ContinuityWinGetInfo.aspx返回数据----------------------------")
                // console.log(jsonObject)
                // self.consecutiveVictoriesNode.getComponent("ConsecutiveVictoriesLayer").initData(jsonObject.table);
                self.continueWinData.data = jsonObject.table;
                for(var i = 0;i < jsonObject.table.length;i++)
                {
                    if ((jsonObject.table[i].CanAward == 1)&&(jsonObject.table[i].IsGetAward == 0)){
                        self.consecutiveRedPoint.active = true;
                    }
                }
            }
        };
        require('HallWebRequest').getInstance().getContinuityWinGetInfo(callBackFunc);
    },

    //点击收藏按钮
    onClickCollectBtn:function(){
        HallResources.getInstance().playButtonEffect();
        var self = this;
        var openCollect = function(){
            var bolIsIPhoneX = require("HallUtils").isIPhoneX()
            var button1Func;
            if (self.bClickCollectionBtn)
            {
                button1Func = function(){
                    //第二次点击，关闭界面，直接领取
                    self.bClickCollectionBtn = false;
                    self.getCollectReward(); 
                };
            }
            else
            {
                button1Func = function(){
                    //第一次点击，关闭界面，设置状态为可以领取
                    self.bClickCollectionBtn = true;
                    self.collectionLoginRedPoint.active = true;
                };  

            }
            self.openAndChangeScaleAction(self.collectNode,self.collectNode.getComponent("collectLayer").bg);
            self.collectNode.getComponent("collectLayer").initData(bolIsIPhoneX,button1Func,self.bClickCollectionBtn)
        }
        if(!this.collectNode){
            cc.loader.loadRes("/prefabs/layer_prefabs/collect_node", function (error, prefab) {
                if (!error) {
                    self.collectNode = cc.instantiate(prefab);
                    self.node.addChild(self.collectNode);
                    openCollect();
                }
            })
        }else{
            openCollect(); 
        }
        
    },

    onClickWeiXinQuanBtn:function(){
        if(this.isWeChatPlatform()){
            wx.navigateToMiniProgram({
                appId: 'wx4233cc143076bfdc',
                path: 'pages/index/index',
                extraData:{
                    openid:WeixinManager.getInstance().userInfo.openid,
                    appid:Domain.WEIXIN_APPID,
                    Ads:'sdk',           //固定不变
                    AdsPos:'community',  //固定不变
                    to:"circle"          //固定不变
                },
                success(res) {
                // 打开成功
                }
        })
    }
      
    },
    //点击设置按钮
    onClickSetBtn:function(){
        HallResources.getInstance().playButtonEffect();
        var self = this;
        var openSetting = function(){
            self.openAndChangeScaleAction(self.setLayer,self.setLayer.getComponent("gameSetting").bg);
        }
        if(!this.setLayer){
            TSCommon.dispatchEvent(HallResources.onShowLoadingNode, true);
            cc.loader.loadRes("/prefabs/layer_prefabs/setting_layer", function (error, prefab) {
                if (!error) {
                    TSCommon.dispatchEvent(HallResources.onClearLoadingNode, true);
                    self.setLayer = cc.instantiate(prefab);
                    self.node.addChild(self.setLayer);
                    openSetting();
                }
            })
        }else{
            openSetting(); 
        }
        
    },

    //点击邀请按钮
    onClickInviteBtn:function(){
        HallResources.getInstance().playButtonEffect();
        this.getInviteFriendData();
        if (this.inviteFriendLayer){
            this.openAndChangeScaleAction( this.inviteFriendLayer,this.inviteFriendLayer.getComponent("inviteFriendLayer").bg);
            // this.inviteFriendLayer.active = true;
            var tableInfo = require("HallControl").getInstance().getPublicUserInfo().tableBoardInfo;
            for(var i = 0;i<tableInfo.length;i++){
                if(tableInfo[i].TableBoardNo == 1)
                {
                    this.inviteFriendLayer.getComponent("inviteFriendLayer").setHasGetDesk(tableInfo[i].IsGet == 1)
                }
            }
        }
        
    },

    //点击帮助按钮
    onClickHelpBtn:function(){
        HallResources.getInstance().playButtonEffect();
        var self = this;
        var openHelpLayer = function(){
            self.openAndChangeScaleAction(self.helpLayer,self.helpLayer.getComponent("gameRuleLayer").bg);
        }
        if(!this.helpLayer){
            TSCommon.dispatchEvent(HallResources.onShowLoadingNode, true);
            cc.loader.loadRes("/prefabs/layer_prefabs/game_help_layer", function (error, prefab) {
                if (!error) {
                    TSCommon.dispatchEvent(HallResources.onClearLoadingNode, true);
                    self.helpLayer = cc.instantiate(prefab);
                    self.node.addChild(self.helpLayer);
                    openHelpLayer();
                }
            })
        }else{
            openHelpLayer(); 
        }
    },
    
    //显示游戏房间列表
    showGameRoom:function(data){
        var self = this;
        this.hallNode.active = false;
        this.gameRoomNode.active = true;
        this.roomList.getComponent("RoomTypeList").showRoomList(data);
        var gameNameTexture = ""
        if (this.chooseGameType == "xueliu")
        {
            gameNameTexture = "xueliuGame"
        }
        else if (this.chooseGameType == "xuezhan")
        {
            gameNameTexture = "xuezhanGame"
        }
        else if (this.chooseGameType == "gdmj")
        {
            gameNameTexture = "gdmjGame"
        }
        else
        {
            gameNameTexture = "yjlyGame"
        }
        self.gameName.spriteFrame = self.gameListAtlas.getSpriteFrame(gameNameTexture);
        // cc.loader.loadRes(gameNameTexture,cc.SpriteFrame,function(err,spriteFrame){
        //     if(!err)
        //     {   
        //         self.gameName.spriteFrame = spriteFrame;
        //     }
        // });
        // this.moneyNode.x = this.moneyNode.x - 240; 
    },

    //显示公共飘飞提示
    showMessage:function(msg,img){
        var self = this;
        self.commonTipsLabelNode.active = true;
        self.commonTipsLabel.string = msg;
        if (img){
            // cc.loader.loadRes(img,cc.SpriteFrame,function(err,spriteFrame){
            //     if(!err)
            //     {   
            //         self.commonTipsIcon.spriteFrame = spriteFrame;
            //     }
            // });
            self.commonTipsIcon.spriteFrame = self.moneyAtlas.getSpriteFrame(img);
            self.commonTipsIcon.node.active = true;
            self.commonTipsIcon.node.setPositionX(-75-self.commonTipsLabel.node.width/2);
        }
        else
        {
            self.commonTipsIcon.node.active = false;
        }
        self.commonTipsLabelNode.stopAllActions();
        var moveTo = cc.moveTo(3, 0,160);
        var callback = cc.callFunc(function(){
            self.commonTipsLabelNode.active = false;
            self.commonTipsLabelNode.setPositionY(0);
        })
        var sequence = cc.sequence(moveTo, callback);
        self.commonTipsLabelNode.runAction(sequence);
    },

    //返回大厅
    backToHall:function(){
        var self = this;
        self.moreGmaeListBack.active = false;
        self.changeMove();
        HallResources.getInstance().playButtonEffect();
        
        self.hallNode.active = true;
        self.gameRoomNode.active = false;
        self.rankListNode.node.active = true;
        self.moreGameListNode.active = false;
        // this.moneyNode.x = this.moneyNode.x + 240; 
        TSCommon.dispatchEvent(HallResources.onShowBannerAndMoreGame, null);
    },

    //匹配赛按钮点击回调
    onClickMatchGame:function(){ 
        this.initGamelinSink();
        
        var self = this;
        var openMatchLayer = function(){
            self.clickMatch = true;
            if(self.button)
            {
                self.button.hide()
                self.button = null;
            }
            if (!G.gameSceneResourcesAddFinish){
                TSCommon.dispatchEvent(HallResources.onShowLoadingNode, true);
                return;
            }
            var nExt = "400001111";
            // 10000*nMenQing + 1000*nTianDiHu + 100*nDaiYaoJiu +10*nHuanSanZhang + 1 * 自摸加番
            var baseScore = 100;
            var callback = function(success, data){
                require('HallResources').getInstance().removeLoading();
                TSCommon.dispatchEvent(HallResources.onClearLoadingNode, true);
                if(success){
                    var jsonObject = JSON.parse(data)
                    if(parseInt(jsonObject.RetCode) == 1){
                        var gameMatchLayer = self.gameMatchLayer.getComponent("GameMatchLayer");
                        gameMatchLayer.setWaitID(jsonObject.RWaitId)
                        self.gameMatchLayer.active = true;
                        //记录日志
                        HallResources.recordPlayerLogToServer(HallResources.recordList.pipei_start);
                        TSCommon.dispatchEvent(HallResources.onHideBannerAndMoreGame, null);
                    }
                }
            }
            //记录日志
            HallResources.recordPlayerLogToServer(HallResources.recordList.click_paiweisai);
            require('HallWebRequest').getInstance().startMatchPlayer(nExt,baseScore, callback);
        }
        this.openMatchLayer = openMatchLayer;
        if(!G.gameSceneResourcesAddFinish){
            cc.loader.loadRes("/prefabs/layer_prefabs/game_match_layer", function (error, prefab) {
                if (!error) {
                    self.gameMatchLayer = cc.instantiate(prefab);
                    self.node.addChild(self.gameMatchLayer);
                    TSCommon.dispatchEvent(HallResources.onShowLoadingNode, true);
                    self.addGameSceneResources();
                }
            })
        }
        else{
            if(!this.gameMatchLayer){
                cc.loader.loadRes("/prefabs/layer_prefabs/game_match_layer", function (error, prefab) {
                    if (!error) {
                        self.gameMatchLayer = cc.instantiate(prefab);
                        self.node.addChild(self.gameMatchLayer);
                        openMatchLayer();
                    }
                })
            }else{
                openMatchLayer(); 
            }
        }
    },

    //缩进排行榜
    onClickExtendedBtn:function(){
        HallResources.getInstance().playButtonEffect();
        var self = this;
        this.shrinkRank.active = true;
        this.extendedRank.active = false;
        this.groupdRank.active = false;
        if(WeixinManager.getInstance().userInfo)
        {
            var myOpenId = WeixinManager.getInstance().userInfo.openid;
            wx.postMessage({
                message:'1',
                ticket:self.shareTicket,
                openid:myOpenId,
            });
        }
    },
    
    //授权成功后刷新大厅头像和排行榜
    refreshHeadAndRank:function(){
        //拉取用户头像
        var self = this;
        var weixinUserInfo = WeixinManager.getInstance().userInfo;
        if(weixinUserInfo && weixinUserInfo.avatarUrl){
            var imgurl=weixinUserInfo.avatarUrl+"?aaa=aa.jpg";
            cc.loader.load(imgurl, function(err, texture){
                self.playerIcon.spriteFrame = new cc.SpriteFrame(texture);
            });
        }

         //刷新排行榜界面
        this.sendMsgToWXChildren();
    },

    //请求授权
    getWXAuthorize:function(){
        var self = this;
        self.openid = WeixinManager.getInstance().userInfo.openid;
        self.uinionid = WeixinManager.getInstance().userInfo.uinionid;
        if(this.isWeChatPlatform()){
            wx.authorize({
                scope: 'scope.userInfo',
                success(res){
                    wx.getUserInfo({
                        openIdList: [WeixinManager.getInstance().userInfo.openid],
                        lang: 'zh_CN',
                        fail: function (res) {
                            self.hasAuthorize = true;
                        },
                        success: function (res) {
                            var rawData = res.rawData;
                            WeixinManager.getInstance().userInfo = res.userInfo;
                            WeixinManager.getInstance().userInfo.openid = self.openid;
                            WeixinManager.getInstance().userInfo.unionid = self.uinionid;
                            WeixinManager.getInstance().userInfo.gender = res.userInfo.gender;
                            TSCommon.log("微信授权回调wxUserinfo rawData="+rawData);
                            self.refreshHeadAndRank()
                        }
                    });
                }
            });
        }
    },

    //是否授权
    bolWXAuthorize:function(func){
        var self = this;
        wx.getSetting({
            success (res) {
                console.log("用户是否授权")
                console.log(res)
                
                if(res.authSetting['scope.userInfo'] == undefined)
                    self.getWXAuthorize()
                else{
                    if(res.authSetting['scope.userInfo'] == false){
                        var frameSize = cc.view.getFrameSize();
                        if (self.button){
                            return;
                        }
                        let button = wx.createOpenSettingButton({
                            type: 'text',
                            text: '头像授权',
                            style: {
                                left: frameSize.width *0.1,
                                top: frameSize.height*0.1,
                                width: 130,
                                height: 40,
                                lineHeight: 40,
                                backgroundColor: '#ff0000',
                                color: '#ffffff',
                                textAlign: 'center',
                                fontSize: 16,
                                borderRadius: 4
                            }
                        })
                        
                        button.show();
                        button.onTap(function(res){
                            self.getWXAuthorize()
                            button.hide();
                            self.button = null;
                        });
                        self.button = button;
                    }else
                    {
                        func();
                    }
                }
            },
            
            })
        

       
    },

    onClickFriendBattleBtn:function(){
        
    },

    //打开完整排行榜
    onClicShrinkBtn:function(){
        HallResources.getInstance().playButtonEffect();
        var self = this;
        this.shrinkRank.active = false;
        this.extendedRank.active = true;
        this.groupdRank.active = false;
        if(WeixinManager.getInstance().userInfo)
        {
            var myOpenId = WeixinManager.getInstance().userInfo.openid;
            wx.postMessage({
                message:'2',
                ticket:self.shareTicket,
                openid:myOpenId,
            });
        }
    },

    //点击打开群排行
    onClickOpenGroupBtn:function(){
        HallResources.getInstance().playButtonEffect();
        var self = this;
        // var HallResources = require("HallResources");
        if(self.isWeChatPlatform()){
            wx.shareAppMessage({
                title: "血流换三张，本群谁能与我一战！快查看你在群里的排行。",
                imageUrl: HallResources.groupShareImgUrl,
                success(res){
                    // console.log("转发成功!!!")
                    if(res.shareTickets == null || res.shareTickets == undefined || res.shareTickets == ""){ //没有群信息，说明分享的是个人
                        TSCommon.dispatchEvent(HallResources.onShowFlyMessage,["请分享到群聊"]);
                    }else{ //有群信息
                        // console.log("下面是群消息数据!!!")
                        // console.log(res);
                        if(res.shareTickets.length > 0){ 
                            self.shrinkRank.active = true;
                            self.extendedRank.active = false;
                            self.groupdRank.active = true;
                            if(WeixinManager.getInstance().userInfo)
                            {
                                var myOpenId = WeixinManager.getInstance().userInfo.openid;
                                wx.postMessage({
                                    message:'3',
                                    ticket:res.shareTickets[0],
                                    openid:myOpenId,
                                });
                            }
                        }
                    }
                },
                fail(res){
                    console.log("转发失败!!!")
                } 
            })
        }

    },

    // 点击客服按钮
    onClickCustomServiceBtn:function(){
        HallResources.getInstance().playButtonEffect();
        var self = this;
        var openKeFu = function(){
            self.openAndChangeScaleAction(self.kefuLayer,self.kefuLayer.getComponent("kefuLayer").bg);
        }
        if(!this.kefuLayer){
            TSCommon.dispatchEvent(HallResources.onShowLoadingNode, true);
            cc.loader.loadRes("/prefabs/layer_prefabs/kefu_layer", function (error, prefab) {
                if (!error) {
                    TSCommon.dispatchEvent(HallResources.onClearLoadingNode, true);
                    self.kefuLayer = cc.instantiate(prefab);
                    self.node.addChild(self.kefuLayer);
                    openKeFu();
                }
            })
        }else{
            openKeFu(); 
        }
    },
    // 点击小客服按钮
    onClickCustomServiceSmallBtn:function(){
        HallResources.getInstance().playButtonEffect();
        var self = this;
        var openKeFuSmall = function(){
            self.openAndChangeScaleAction(self.kefuSmallLayer,self.kefuSmallLayer.getComponent("kefuSmallLayer").bg);
        }
        if(!this.keFusmallLayer){
            cc.loader.loadRes("/prefabs/layer_prefabs/kefusmall_layer", function (error, prefab) {
                if (!error) {
                    self.keFusmallLayer = cc.instantiate(prefab);
                    self.node.addChild(self.keFusmallLayer);
                    openKeFuSmall();
                }
            })
        }else{
            openKeFuSmall(); 
        }
    },
    //子域画布获取和第一次赋值
    _updateSubDomainCanvas(){

        this.tex = new cc.Texture2D();
        var openDataContext = wx.getOpenDataContext();
        var sharedCanvas = openDataContext.canvas;
        //这个是子域模糊的解决办法，同时间需要修改子域的引擎代码
        if (sharedCanvas) {
            sharedCanvas.width = cc.game.canvas.width * 2;
            sharedCanvas.height = cc.game.canvas.height * 2;
        }
        this.tex.initWithElement(sharedCanvas);
        this.tex.handleLoadedTexture();
        this.rankChildrenNode.spriteFrame = new cc.SpriteFrame(this.tex);
        var self = this;
        if(WeixinManager.getInstance().userInfo)
        {
            var myOpenId = WeixinManager.getInstance().userInfo.openid;
            if(require("HallUtils").isIPhoneX())
            {   
                //为了适配iphoneX，增加了6
                wx.postMessage({
                    message:'6',
                    ticket:self.shareTicket,
                    openid:myOpenId,
                });
            }   
            else{
                wx.postMessage({
                    message:'4',
                    ticket:self.shareTicket,
                    openid:myOpenId,
                });
            }
        }
    },
    //格式化数字
    formatGold:function(gold, remaindot){
        if(Math.abs(gold) < 100000){
            return gold;
        }
    
        if(Math.abs(gold) >= 100000 && Math.abs(gold) < 100000000){
            if(remaindot){
                var leftNum = gold % 10000;
                if(leftNum == 0){
                    var retGold = Math.floor(gold / 10000) + "万";
                    return retGold;
                }
                else{
                    gold = gold / 10000
                    var retGold = Math.floor(gold*10)/10 + "万";
                    return retGold;
                }
            }
            else{
                gold = gold / 10000
                var retGold = Math.floor(gold*10)/10 + "万";
                return retGold;
            }
        }
        else if(Math.abs(gold) >= 100000000 && Math.abs(gold) <= 2000000000){
            if(remaindot){
                var leftNum = gold % 100000000;
                if(leftNum == 0){
                    var retGold = Math.floor(gold / 100000000) + "亿";
                    return retGold;
                }
                else{
                    gold = gold / 100000000
                    var retGold = Math.floor(gold*10)/10 + "万";
                    return retGold;
                }
            }
            else{
                gold = gold / 100000000
                var retGold = Math.floor(gold*10)/10 + "万";
                return retGold;
            }
        }
    
        if(Math.abs(gold) <= 100000000000){
            var retGold = Math.floor(gold / 100000000) + "亿";
        }
    
        if(remaindot){
            return "无限";
        }
    },

    //比较版本号
    compareVersion: function (v1, v2) {//比较版本
        v1 = v1.split('.');
        v2 = v2.split('.');
        var len = Math.max(v1.length, v2.length);
        while (v1.length < len) {
            v1.push('0');
        }
        while (v2.length < len) {
            v2.push('0');
        }
        for (var i = 0; i < len; i++) {
            var num1 = parseInt(v1[i]);
            var num2 = parseInt(v2[i]);
            if (num1 > num2) {
                return 1;
            } else if (num1 < num2) {
                return -1;
            }
        }
        return 0;
    },

    //判断微信小游戏登录
    isWeChatPlatform:function()
    {
        var ret = false;
        if(cc.sys.browserType == "mqqbrowser" || "wechatgame" == cc.sys.browserType){
            ret = true;
        }
        return ret;
    },

    //格式化时间,只能格式化1994-10-12这种格式
    timeFindMonthAndDay:function(str){
        var day = "";
        var month = "";
        var firstPos = str.indexOf("-",0);
        var nextPos = str.indexOf("-",firstPos+1);
        month = parseInt(str.slice(firstPos+1,nextPos));
        day = parseInt(str.substr(nextPos+1,2));
        return month+"."+day;
    },

    onClickHideVersionBtn:function(){
        this.clickHideBtnTimes = this.clickHideBtnTimes + 1;
        if (this.clickHideBtnTimes > 3)
            this.versionLabel.node.active = true;
    },

};


cc.Class(HallPlatformInfo);
