/*:
@target MZ
@plugindesc 文本对话音效
@author TheoAllen
@url https://github.com/theoallen/RMMZ/tree/master/Plugins
@help 
♦ 关于:
使用显示文本事件命令时添加键入声音效果

♦ 插件命令
插件命令可用于在游戏过程中更改声音效果
以下命令可用：
- 在游戏过程中激活/停用打字声音
- 更改音效设置
- 重置音效设置

♦ 使用条款：
https://github.com/theoallen/RMMZ/blob/master/README.md
使用条款
作者署名：TheoAllen。
我的所有插件都可以免费用于商业和非商业项目。这包括带有任何奖品的游戏即兴活动。
我的所有插件都可以免费重新发布/编辑/重新发布编辑，只要它保持免费，并且如果它是您的，您就不会声称它。
我的所有插件都可以在私人委托作品中使用。
只要您不重新发布整个原始/编辑的代码（参考第三点），您就可以自由地向我的插件发布付费扩展
对于出售付费扩展或委托工作的第三方的任何问题，我不承担任何责任。
我对因重新发布而出现在互联网上的任何旧版本插件不承担任何责任。
如果您将我的插件用于商业目的（游戏/付费扩展），如果我感兴趣，我有权要求免费访问您的东西。*
存储在 MIT 文件夹中的插件除外，它使用 MIT 许可证。
我有权更改我认为合适的条款。

 @command activate
 @text 激活 SE
 @desc Activate Typing SE
 
 @command deactivate
 @text 停用 SE
 @desc Deactivate Typing SE

 @command reset
 @text 重置 SE
 @desc Reset Typing SE property to the default property you have set em up in the plugin parameter

 @command change
 @text 更改SE
 @desc Change the typing sound

 @arg name
 @type file
 @dir audio/se/
 @text 文件
 @desc Sound effect name
 @require 1
 @default Cursor1

 @arg vol
 @type number
 @min 0
 @max 100
 @default 100
 @text 音量
 @desc Volume of the sound

 @arg pitch
 @type number
 @min 1
 @max 150
 @default 100
 @text 音调
 @desc 声音的音高
 
 @arg var
 @type number
 @min 0
 @max 20
 @default 0
 @text 声高差
 @desc 声音的音高变化

 @param name
 @type file
 @dir audio/se/
 @text 文件
 @desc Sound effect name
 @require 1
 @default Cursor1

 @param vol
 @type number
 @min 0
 @max 100
 @default 100
 @text 音量
 @desc Volume of the sound

 @param pitch
 @type number
 @min 1
 @max 150
 @default 100
 @text 音调
 @desc Pitch of the sound
 
 @param var
 @type number
 @min 0
 @max 20
 @default 0
 @text 音高差
 @desc 声音的音高变化

 @param delay
 @type number
 @min 1
 @text 音效延迟
 @desc Sound effect delay
 @default 3
 */

var Theo = Theo || {}
Theo.TypingSound = function(){
    const $ = Theo.TypingSound
    const pluginName = document.currentScript.src.match(/.+\/(.+).js/)[1]
    $._params = PluginManager.parameters(pluginName)
    $._default = {
        name: $._params.name,
        volume: Number($._params.vol),
        pitch: Number($._params.pitch),
        variance: Number($._params.var),
        delay: Number($._params.delay)
    }
    $._delayTiming = 0

    Game_System.prototype._typingSe = Object.assign({}, $._default)
    Game_System.prototype._typingSeOn = true

    PluginManager.registerCommand(pluginName, "activate", () => {
        $gameSystem._typingSeOn = true;
    });

    PluginManager.registerCommand(pluginName, "deactivate", () => {
        $gameSystem._typingSeOn = false;
    });

    PluginManager.registerCommand(pluginName, "reset", () => {
        $gameSystem._typingSe = Object.assign({}, $._default)
    });

    PluginManager.registerCommand(pluginName, "change", (args) => {
        const o = $gameSystem._typingSe
        o.name = args.name
        o.volume = Number(args.vol)
        o.pitch = Number(args.pitch)
        o.variance = Number(args.var)
    });

    $.play = () => {
        if(!$gameSystem._typingSeOn){
            return
        }
        const variance = ((Math.random() >= 0.5 ? 1 : -1) * (Math.random() * $gameSystem._typingSe.variance))
        const se = {
            name: $gameSystem._typingSe.name,
            volume: $gameSystem._typingSe.volume,
            pitch: $gameSystem._typingSe.pitch + variance,
            pan: 0
        }
        AudioManager.playSe(se)
    }

    $.updateMsg = Window_Message.prototype.updateMessage
    Window_Message.prototype.updateMessage = function() {
        const updated = $.updateMsg.call(this)
        if(updated){
            if($._delayTiming-- <= 0){
                $.play()
                $._delayTiming = $gameSystem._typingSe.delay
            }
        }else{
            $._delayTiming = 0
        }
        return updated
    };
}
Theo.TypingSound()
