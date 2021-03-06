
var dailyHasGetItem = cc.Class({
    extends: cc.Component,

    properties: {
        dayIcon: {
            default: null,
            type: cc.Sprite,
        },
        dayCount: {
            default: null,
            type: cc.Label,
        },
        loginAtlas: {
            default: null,
            type: cc.SpriteAtlas,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
    },

    initData:function(data){
        var self = this;
        this.dayCount.string = data.amount;

        this.dayIcon.spriteFrame = this.loginAtlas.getSpriteFrame("days"+data.days)
    },

});

module.exports = dailyHasGetItem;