//=============================================================================
// MOG_TitleLayers.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc (v1.2)MOG标题多图层
 * @author Moghunter
 * @url https://mogplugins.wordpress.com
 *
 * @param -> Main <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *  
 * @param Fit Screen Resolution
 * @text 屏幕相同分辨率
 * @desc 使图像具有与屏幕相同的分辨率
 * @default true
 * @type boolean 
 * @parent -> Main <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param Screen Movement
 * @text 激活屏幕动画
 * @desc 激活屏幕动作动画
 * @default false
 * @type boolean 
 * @parent -> Main <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Screen Move Speed
 * @text 移动速度
 * @desc 运动的速度
 * @default 1
 * @parent -> Main <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Screen Move Duration
 * @text 转变方向
 * @desc 是时候转变方向
 * @default 160
 * @parent -> Main <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param -> Title Text <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param Title Text Visible
 * @text 可见的标题文本
 * @desc 激活游戏的标题图片
 * @default true
 * @type boolean 
 * @parent -> Title Text <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Title Text File Name
 * @text 文件名的定义
 * @desc 文件名的定义
 * @default Title
 * @type file
 * @dir img/titles2/ 
 * @parent -> Title Text <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Title Text X-Axis
 * @text 标题文字X位置
 * @desc Posição X-Axis da imagem.
 * @default 0
 * @parent -> Title Text <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Title Text Y-Axis
 * @text 标题文字Y位置
 * @desc Posição Y-Axis da imagem.
 * @default 0
 * @parent -> Title Text <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Title Text Zoom Animation
 * @text 标题文本缩放动画
 * @desc Ativar a animação do Zoom.
 * @default true
 * @type boolean 
 * @parent -> Title Text <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Title Text Zoom Value
 * @text 缩放值设置
 * @desc 缩放值设置
 * @default 1.50
 * @parent -> Title Text <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param -> Layer 1 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 * 
 * @param L1 Visible
 * @text l1可见
 * @desc Ativar Camada.
 * @default true
 * @type boolean 
 * @parent -> Layer 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L1 File Name
 * @text l1文件
 * @desc Definição do nome do arquivo.
 * @default Layer1
 * @type file
 * @dir img/titles1/
 * @parent -> Layer 1 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L1 X-axis / Scroll
 * @desc 模式0 - 滚动X模式1 - 定位X轴。
 * @default -2
 * @parent -> Layer 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L1 Y-axis / Scroll
 * @desc Mode 0 - Scroll Y    Mode 1 - Position Y-Axis.
 * @default -1
 * @parent -> Layer 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L1 Blend Mode
 * @text 混合定义
 * @desc 混合的定义
 * 0 - Normal    1- Add    2 - Substract
 * @default 0
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1 
 * @option Substract
 * @value 2
 * @parent -> Layer 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L1 Transition Time
 * @desc Definição de tempo de transição.
 * @default 0
 * @parent -> Layer 1 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L1 Animated
 * @desc Ativar animação de frames.
 * @default false
 * @type boolean 
 * @parent -> Layer 1 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L1 Frames
 * @desc Numero de frames de animação.
 * @default 4
 * @parent -> Layer 1 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L1 Animation Speed
 * @desc Velocidade de animação.
 * @default 20
 * @parent -> Layer 1 <<<<<<<<<<<<<<<<<<<<<<< 
 * 
 * @param -> Layer 2 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc 
 *
 * @param L2 Visible
 * @desc Ativar Camada.
 * @default true
 * @type boolean 
 * @parent -> Layer 2 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L2 File Name
 * @desc Definição do nome do arquivo.
 * @default Layer2
 * @type file
 * @dir img/titles1/ 
 * @parent -> Layer 2 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L2 X-axis / Scroll
 * @desc Mode 0 - Scroll X    Mode 1 - Position X-Axis.
 * @default 2
 * @parent -> Layer 2 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L2 Y-axis / Scroll
 * @desc Mode 0 - Scroll Y    Mode 1 - Position Y-Axis.
 * @default 0
 * @parent -> Layer 2 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L2 Blend Mode
 * @desc Definição de blend. 
 * 0 - Normal    1- Add    2 - Substract
 * @default 0
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1 
 * @option Substract
 * @value 2
 * @parent -> Layer 2 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L2 Transition Time
 * @desc Definição de tempo de transição.
 * @default 0
 * @parent -> Layer 2 <<<<<<<<<<<<<<<<<<<<<<<  
 *
 * @param L2 Animated
 * @desc Ativar animação de frames.
 * @default false
 * @type boolean 
 * @parent -> Layer 2 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L2 Frames
 * @desc Numero de frames de animação.
 * @default 4
 * @parent -> Layer 2 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L2 Animation Speed
 * @desc Velocidade de animação.
 * @default 20
 * @parent -> Layer 2 <<<<<<<<<<<<<<<<<<<<<<< 
 * 
 * @param -> Layer 3 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc 
 *
 * @param L3 Visible
 * @desc Ativar Camada.
 * @default true
 * @type boolean
 * @parent -> Layer 3 <<<<<<<<<<<<<<<<<<<<<<< 
 *
 * @param L3 File Name
 * @desc Definição do nome do arquivo.
 * @default Layer3
 * @type file
 * @dir img/titles1/ 
 * @parent -> Layer 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L3 X-axis / Scroll
 * @desc Mode 0 - Scroll X    Mode 1 - Position X-Axis.
 * @default 0
 * @parent -> Layer 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L3 Y-axis / Scroll
 * @desc Mode 0 - Scroll Y    Mode 1 - Position Y-Axis.
 * @default 0
 * @parent -> Layer 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L3 Blend Mode
 * @desc Definição de blend. 
 * 0 - Normal    1- Add    2 - Substract
 * @default 0
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1 
 * @option Substract
 * @value 2
 * @parent -> Layer 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L3 Transition Time
 * @desc Definição de tempo de transição.
 * @default 0
 * @parent -> Layer 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L3 Animated
 * @text 激活帧动画
 * @desc 激活帧动画
 * @default false
 * @type boolean
 * @parent -> Layer 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L3 Frames
 * @desc Numero de frames de animação.
 * @default 4
 * @parent -> Layer 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L3 Animation Speed
 * @desc Velocidade de animação.
 * @default 20
 * @parent -> Layer 3 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param -> Layer 4 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc 
 *
 * @param L4 Visible
 * @desc Ativar Camada.
 * @default true
 * @type boolean
 * @parent -> Layer 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L4 File Name
 * @desc Definição do nome do arquivo.
 * @default Layer4
 * @type file
 * @dir img/titles1/ 
 * @parent -> Layer 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L4 X-axis / Scroll
 * @desc Mode 0 - Scroll X    Mode 1 - Position X-Axis.
 * @default 3
 * @parent -> Layer 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L4 Y-axis / Scroll
 * @desc Mode 0 - Scroll Y    Mode 1 - Position Y-Axis.
 * @default 0
 * @parent -> Layer 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L4 Blend Mode
 * @desc Definição de blend. 
 * 0 - Normal    1- Add    2 - Substract
 * @default 0
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1 
 * @option Substract
 * @value 2
 * @parent -> Layer 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L4 Transition Time
 * @desc Definição de tempo de transição.
 * @default 0
 * @parent -> Layer 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L4 Animated
 * @desc Ativar animação de frames.
 * @default false
 * @type boolean
 * @parent -> Layer 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L4 Frames
 * @desc Numero de frames de animação.
 * @default 4
 * @parent -> Layer 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L4 Animation Speed
 * @desc Velocidade de animação.
 * @default 20
 * @parent -> Layer 4 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param -> Layer 5 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc 
 *
 * @param L5 Visible
 * @desc Ativar Camada.
 * @default false
 * @type boolean
 * @parent -> Layer 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L5 File Name
 * @desc Definição do nome do arquivo.
 * @default Layer5
 * @type file
 * @dir img/titles1/ 
 * @parent -> Layer 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L5 X-axis / Scroll
 * @desc Mode 0 - Scroll X    Mode 1 - Position X-Axis.
 * @default 1.1
 * @parent -> Layer 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L5 Y-axis / Scroll
 * @desc Mode 0 - Scroll Y    Mode 1 - Position Y-Axis.
 * @default 0
 * @parent -> Layer 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L5 Blend Mode
 * @desc Definição de blend. 
 * 0 - Normal    1- Add    2 - Substract
 * @default 0
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1 
 * @option Substract
 * @value 2
 * @parent -> Layer 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L5 Transition Time
 * @desc Definição de tempo de transição.
 * @default 0
 * @parent -> Layer 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L5 Animated
 * @desc Ativar animação de frames.
 * @default false
 * @type boolean
 * @parent -> Layer 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L5 Frames
 * @desc Numero de frames de animação.
 * @default 4
 * @parent -> Layer 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L5 Animation Speed
 * @desc Velocidade de animação.
 * @default 20
 * @parent -> Layer 5 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param -> Layer 6 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc 
 *
 * @param L6 Visible
 * @desc Ativar Camada.
 * @default false
 * @type boolean
 * @parent -> Layer 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L6 File Name
 * @desc Definição do nome do arquivo.
 * @default Layer6
 * @type file
 * @dir img/titles1/ 
 * @parent -> Layer 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L6 X-axis / Scroll
 * @desc Mode 0 - Scroll X    Mode 1 - Position X-Axis.
 * @default 1.3
 * @parent -> Layer 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L6 Y-axis / Scroll
 * @desc Mode 0 - Scroll Y    Mode 1 - Position Y-Axis.
 * @default 0
 * @parent -> Layer 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L6 Blend Mode
 * @desc Definição de blend. 
 * 0 - Normal    1- Add    2 - Substract
 * @default 0
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1 
 * @option Substract
 * @value 2
 * @parent -> Layer 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L6 Transition Time
 * @desc Definição de tempo de transição.
 * @default 0
 * @parent -> Layer 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L6 Animated
 * @desc Ativar animação de frames.
 * @default false
 * @type boolean
 * @parent -> Layer 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L6 Frames
 * @desc Numero de frames de animação.
 * @default 4
 * @parent -> Layer 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L6 Animation Speed
 * @desc Velocidade de animação.
 * @default 20
 * @parent -> Layer 6 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param -> Layer 7 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc 
 *
 * @param L7 Visible
 * @desc Ativar Camada.
 * @default false
 * @type boolean
 * @parent -> Layer 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L7 File Name
 * @desc Definição do nome do arquivo.
 * @default Layer7
 * @type file
 * @dir img/titles1/ 
 * @parent -> Layer 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L7 X-axis / Scroll
 * @desc Mode 0 - Scroll X    Mode 1 - Position X-Axis.
 * @default 1.5
 * @parent -> Layer 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L7 Y-axis / Scroll
 * @desc Mode 0 - Scroll Y    Mode 1 - Position Y-Axis.
 * @default 0
 * @parent -> Layer 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L7 Blend Mode
 * @desc Definição de blend. 
 * 0 - Normal    1- Add    2 - Substract
 * @default 0
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1 
 * @option Substract
 * @value 2
 * @parent -> Layer 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L7 Transition Time
 * @desc Definição de tempo de transição.
 * @default 0
 * @parent -> Layer 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L7 Animated
 * @desc Ativar animação de frames.
 * @default false
 * @type boolean
 * @parent -> Layer 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L7 Frames
 * @desc Numero de frames de animação.
 * @default 4
 * @parent -> Layer 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L7 Animation Speed
 * @desc Velocidade de animação.
 * @default 20
 * @parent -> Layer 7 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param -> Layer 8 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc 
 *
 * @param L8 Visible
 * @desc Ativar Camada.
 * @default false
 * @type boolean
 * @parent -> Layer 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L8 File Name
 * @desc Definição do nome do arquivo.
 * @default Layer8
 * @type file
 * @dir img/titles1/ 
 * @parent -> Layer 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L8 X-axis / Scroll
 * @desc Mode 0 - Scroll X    Mode 1 - Position X-Axis.
 * @default 1.7
 * @parent -> Layer 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L8 Y-axis / Scroll
 * @desc Mode 0 - Scroll Y    Mode 1 - Position Y-Axis.
 * @default 0
 * @parent -> Layer 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L8 Blend Mode
 * @desc Definição de blend. 
 * 0 - Normal    1- Add    2 - Substract
 * @default 0
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1 
 * @option Substract
 * @value 2
 * @parent -> Layer 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L8 Transition Time
 * @desc Definição de tempo de transição.
 * @default 0
 * @parent -> Layer 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L8 Animated
 * @desc Ativar animação de frames.
 * @default false
 * @type boolean
 * @parent -> Layer 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L8 Frames
 * @desc Numero de frames de animação.
 * @default 4
 * @parent -> Layer 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L8 Animation Speed
 * @desc Velocidade de animação.
 * @default 20
 * @parent -> Layer 8 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param -> Layer 9 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc 
 *
 * @param L9 Visible
 * @desc Ativar Camada.
 * @default false
 * @type boolean
 * @parent -> Layer 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L9 File Name
 * @desc Definição do nome do arquivo.
 * @default Layer9
 * @type file
 * @dir img/titles1/ 
 * @parent -> Layer 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L9 X-axis / Scroll
 * @desc Mode 0 - Scroll X    Mode 1 - Position X-Axis.
 * @default 1.9
 * @parent -> Layer 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L9 Y-axis / Scroll
 * @desc Mode 0 - Scroll Y    Mode 1 - Position Y-Axis.
 * @default 0
 * @parent -> Layer 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L9 Blend Mode
 * @desc Definição de blend. 
 * 0 - Normal    1- Add    2 - Substract
 * @default 0
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1 
 * @option Substract
 * @value 2
 * @parent -> Layer 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L9 Transition Time
 * @desc Definição de tempo de transição.
 * @default 0
 * @parent -> Layer 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L9 Animated
 * @desc Ativar animação de frames.
 * @default false
 * @type boolean
 * @parent -> Layer 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L9 Frames
 * @desc Numero de frames de animação.
 * @default 4
 * @parent -> Layer 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L9 Animation Speed
 * @desc Velocidade de animação.
 * @default 20
 * @parent -> Layer 9 <<<<<<<<<<<<<<<<<<<<<<<
 * 
 * @param -> Layer 10 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc 
 *
 * @param L10 Visible
 * @desc Ativar Camada.
 * @default false
 * @type boolean
 * @parent -> Layer 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L10 File Name
 * @desc Definição do nome do arquivo.
 * @default Layer10
 * @type file
 * @dir img/titles1/ 
 * @parent -> Layer 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L10 X-axis / Scroll
 * @desc Mode 0 - Scroll X    Mode 1 - Position X-Axis.
 * @default 2.1
 * @parent -> Layer 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L10 Y-axis / Scroll
 * @desc Mode 0 - Scroll Y    Mode 1 - Position Y-Axis.
 * @default 0
 * @parent -> Layer 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L10 Blend Mode
 * @desc Definição de blend. 
 * 0 - Normal    1- Add    2 - Substract
 * @default 0
 * @type select
 * @option Normal
 * @value 0
 * @option Add
 * @value 1 
 * @option Substract
 * @value 2
 * @parent -> Layer 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L10 Transition Time
 * @desc Definição de tempo de transição.
 * @default 0
 * @parent -> Layer 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L10 Animated
 * @desc Ativar animação de frames.
 * @default false
 * @type boolean 
 * @parent -> Layer 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L10 Frames
 * @desc Numero de frames de animação.
 * @default 4
 * @parent -> Layer 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param L10 Animation Speed
 * @desc Velocidade de animação.
 * @default 20
 * @parent -> Layer 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @help  
 * =============================================================================
 * +++ MOG - Title Layers (v1.2) +++
 * By Moghunter 
 * https://mogplugins.wordpress.com
 * =============================================================================
 * Adiciona multiplas camadas na tela de título.
 *
 * =============================================================================
 * UTILIZAÇÃO
 * =============================================================================
 * Graves as images na pasta /img/titles1/
 *
 * =============================================================================
 * A说明
 * =============================================================================
 * 要激活帧动画功能，请激活插件参数
 *
 * LX动画
 * 
 * 帧图像必须遵循以下标准。
 *
 * FILE_NAME + _ID.png
 *
 * Exemplo
 *
 * Layer0.png
 * Layer1.png
 * Layer2.png
 * Layer3.png
 * ...
 *
 * =============================================================================
 * 历史
 * =============================================================================
 * (v1.2) - Correção na função sort relativo a codificação.   
 * (v1.1) - Melhoria no plugin parameter na seleção de arquivos.
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
    var Imported = Imported || {};
    Imported.MOG_TitleLayers = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_TitleLayers');
    Moghunter.titleBackFitScreen = String(Moghunter.parameters['Fit Screen Resolution'] || "true");	
	Moghunter.titleText = String(Moghunter.parameters['Title Text Visible'] || "true");
	Moghunter.titleText_F = String(Moghunter.parameters["Title Text File Name"] || "Title"); 
	Moghunter.titleText_X = Number(Moghunter.parameters['Title Text X-Axis'] || 0);
	Moghunter.titleText_Y = Number(Moghunter.parameters['Title Text Y-Axis'] || 0);
	Moghunter.titleText_Zoom = String(Moghunter.parameters['Title Text Zoom Animation'] || "true");
	Moghunter.titleText_ZoomValue = Number(Moghunter.parameters['Title Text Zoom Value'] || 1.50);	
	Moghunter.titleBackM = 10;	
	Moghunter.titleBackV = [];	Moghunter.titleBackN = [];
	Moghunter.titleBackX = [];	Moghunter.titleBackY = [];
	Moghunter.titleBackZ = [];	Moghunter.titleBackT = [];
	Moghunter.titleBackAN = [];	Moghunter.titleBackAF = [];
	Moghunter.titleBackAS = [];	Moghunter.titleBackMode = [];
	Moghunter.titleBackB = [];
	Moghunter.titleBackW = String(Moghunter.parameters['Screen Movement'] || "false"); 	
	Moghunter.titleBackWS = Number(Moghunter.parameters['Screen Move Speed'] || 1);
	Moghunter.titleBackWD = Number(Moghunter.parameters['Screen Move Duration'] || 160);
	for (var i = 0; i < Moghunter.titleBackM; i++) {	
	    Moghunter.titleBackV[i] = String(Moghunter.parameters['L' + String(i + 1) + " Visible"] || "false"); 	
		Moghunter.titleBackN[i] = String(Moghunter.parameters['L' + String(i + 1) + " File Name"] || "Layer"); 
        Moghunter.titleBackMode[i] = Number(Moghunter.parameters['L' + String(i + 1) + " Mode"] || 0);
		Moghunter.titleBackZ[i] = Number(Moghunter.parameters['L' + String(i + 1) + " Z Index"] || 0); 
		Moghunter.titleBackX[i] = Number(Moghunter.parameters['L' + String(i + 1) + " X-axis / Scroll"] || 1);
		Moghunter.titleBackY[i] = Number(Moghunter.parameters['L' + String(i + 1) + " Y-axis / Scroll"] || 1);
		Moghunter.titleBackT[i] = Number(Moghunter.parameters['L' + String(i + 1) + " Transition Time"] || 0);
		Moghunter.titleBackAN[i] = String(Moghunter.parameters['L' + String(i + 1) + " Animated"] || "false");
		Moghunter.titleBackAF[i] = Number(Moghunter.parameters['L' + String(i + 1) + " Frames"] || 4);
		Moghunter.titleBackAS[i] = Number(Moghunter.parameters['L' + String(i + 1) + " Animation Speed"] || 20);
		Moghunter.titleBackB[i] = Number(Moghunter.parameters['L' + String(i + 1) + " Blend Mode"] || 0);
	};

//=============================================================================
// ■■■ Scene Title ■■■
//=============================================================================	

//==============================
// ♦ ALIAS ♦  Create
//==============================
var _mog_backtitle_create = Scene_Title.prototype.create;
Scene_Title.prototype.create = function() {
	_mog_backtitle_create.call(this);
	if (this._titleField1) {this._titleField1.children.sort((a, b) => a.z - b.z)};
	if (this._titleField3) {this._titleField3.children.sort((a, b) => a.z - b.z)}
};

//==============================
// ♦ ALIAS ♦  Create Background
//==============================
var _mog_title_background_effects_createBackground = Scene_Title.prototype.createBackground
Scene_Title.prototype.createBackground = function() {
	_mog_title_background_effects_createBackground.call(this);
    this._backSprite1.visible = false;
    this._backSprite2.visible = false;    
	if (!this._titleField1) {this.createTitleField1()};
	this.createBackgroundEX();
};

//================================
// ♦ ALIAS ♦  createCommandWindow
//================================
var _mog_title_background_effects_createCommandWindow = Scene_Title.prototype.createCommandWindow;
Scene_Title.prototype.createCommandWindow = function() {
	_mog_title_background_effects_createCommandWindow.call(this);
	if (!this._titleField3) {this.createTitleField3()};
    this.createTitleText();
};
  
//==============================
// ♦ ALIAS ♦  Update
//==============================
var _mog_title_background_update = Scene_Title.prototype.update;
Scene_Title.prototype.update = function() {
	_mog_title_background_update.call(this);
	this.updateTitlebackground()
};

//==============================
// * update Title background
//==============================
Scene_Title.prototype.updateTitlebackground = function() {
    if (this._titleTextSprite) {this.updateTitleText()};
    if (this._backgroundEX && this._backWave) {this.updateBackWave()};
}; 

//==============================
// * Create Title Field
//==============================
Scene_Title.prototype.createTitleField1 = function() {
    this._titleField1 = new Sprite();
	this._titleField1.z = 1;
	this._titleField1.setFrame(0, 0, Graphics.width, Graphics.height);
    this.addChild(this._titleField1);
};  

//==============================
// * Create Title Field 3
//==============================
Scene_Title.prototype.createTitleField3 = function() {
    this._titleField3 = new Sprite();
	this._titleField3.z = 200;
    this.addChild(this._titleField3);
};

//==============================
// * create Title Text
//==============================
Scene_Title.prototype.createTitleText = function() {
	var fileName = String(Moghunter.titleText_F);
    this._titleTextSprite = new Sprite(ImageManager.loadTitle2(fileName));
	this._titleTextSprite.z = 320;
    this._titleTextSprite.anchor.x = 0.5;
    this._titleTextSprite.anchor.y = 0.5;
	this._titleTextSprite.opacity = 0;
	this._titleTextSprite.fadeSpeed = 6;
	if (Moghunter.titleText_Zoom == "true") {
    	this._titleTextSprite.scale.x = Moghunter.titleText_ZoomValue;
	    this._titleTextSprite.fadeSpeed = 3;
	};
	this._titleField3.addChild(this._titleTextSprite);
};

//==============================
// * update Title Text
//==============================
Scene_Title.prototype.updateTitleText = function() {
	if (!this._titleTextSprite.cw) {
		if (this._titleTextSprite.bitmap.isReady()) {this.titleTextgetData()}
	    return
	 ;}
     this._titleTextSprite.opacity += this._titleTextSprite.fadeSpeed;
	 if (this._titleTextSprite.scale.x > 1.00) {
		 this._titleTextSprite.scale.x -= 0.01;
		 if (this._titleTextSprite.scale.x < 1.00) {
		     this._titleTextSprite.scale.x = 1.00;	
		 };
	 };
	 this._titleTextSprite.scale.y = this._titleTextSprite.scale.x;
};

//==============================
// * titleTextgetData
//==============================
Scene_Title.prototype.titleTextgetData = function() {
    this._titleTextSprite.cw = this._titleTextSprite.bitmap.width;
	this._titleTextSprite.ch = this._titleTextSprite.bitmap.height;
	var fx = (Graphics.width - 816) / 2; 
	var fy = (Graphics.height - 624) / 2;
	this._titleTextSprite.x = Moghunter.titleText_X + (this._titleTextSprite.cw / 2) + fx;
	this._titleTextSprite.y = Moghunter.titleText_Y + (this._titleTextSprite.ch / 2) + fy;
};   

//==============================
// * Create BackgroundEX
//==============================
Scene_Title.prototype.createBackgroundEX = function() {
    this._backgroundEX = [];
	this._backData = []
	this._backData[0] = Graphics.width * 10 / 100;
	this._backData[1] = Graphics.height * 10 / 100;
	this._backData[2] = Graphics.width + (this._backData[0] * 2);
	this._backData[3] = Graphics.height + (this._backData[1] * 2);
	for (var i = 0; i < Moghunter.titleBackM; i++) {
		 this._backgroundEX[i] = new TitleBackground(i,this._backData);
		 this._backgroundEX[i].zIndex = i;
		 this._titleField1.addChild(this._backgroundEX[i]);
    };
	this._ba = [0,0,0,0];
	this._backWave = String(Moghunter.titleBackW) == "true" ? true : false;
	this._backWaveSpd = Number(Moghunter.titleBackWS);
	this._backWaveDur = Number(Moghunter.titleBackWD);
};

//==============================
// * xl1
//==============================
Scene_Title.prototype.xl1 = function() {
    return -this._backData[0];
};

//==============================
// * xl2
//==============================
Scene_Title.prototype.xl2 = function() {
    return this._backData[0];
};

//==============================
// * yl1
//==============================
Scene_Title.prototype.yl1 = function() {
    return -this._backData[1];
};

//==============================
// * yl2
//==============================
Scene_Title.prototype.yl2 = function() {
    return this._backData[1];
};

//==============================
// * Refresh TFL
//==============================
Scene_Title.prototype.refreshTfl = function() {
     this._ba[2] = this._backWaveDur;
	 var s1 = this._backWaveSpd * 0.01;
	 var s2 = this._backWaveSpd * 0.1;
	 var r = Math.randomInt(2);
	 var x = s1 + Math.random() * s2;
	 this._ba[0] = r === 0 ? x : -x;
	 var r = Math.randomInt(2);
	 var y = s1 + Math.random() * s2;
	 this._ba[1] = r === 0 ? y : -y;	 
};

//==============================
// * Update Back Wave
//==============================
Scene_Title.prototype.updateBackWave = function() {
	  this._titleField1.x += this._ba[0];
	  this._titleField1.y += this._ba[1];
	  this._ba[2]--;
	  if (this.needRefreshTfl()) {this.refreshTfl()};
	  this.checkTfl();
};

//==============================
// * need Refresh T
//==============================
Scene_Title.prototype.needRefreshTfl = function() {
	  if (this._ba[2] <= 0) {return true};
	  return false
};

//==============================
// * Check Tfl
//==============================
Scene_Title.prototype.checkTfl = function() {
	  if (this._titleField1.x < this.xl1()) {this.refreshTfl();this._titleField1.x = this.xl1()}; 
	  if (this._titleField1.x > this.xl2()) {this.refreshTfl();this._titleField1.x = this.xl2()};
	  if (this._titleField1.y < this.yl1()) {this.refreshTfl();this._titleField1.y = this.yl1()}; 
	  if (this._titleField1.y > this.yl2()) {this.refreshTfl();this._titleField1.y = this.yl2()};	
};

//=============================================================================
// ■ Title Background ■
//=============================================================================
function TitleBackground() {
    this.initialize.apply(this, arguments);
};

TitleBackground.prototype = Object.create(Sprite.prototype);
TitleBackground.prototype.constructor = TitleBackground;

//==============================
// * Initialize
//==============================
TitleBackground.prototype.initialize = function(index,data) {
    Sprite.prototype.initialize.call(this);
	this._index = index;
	this._enable = String(Moghunter.titleBackV[this._index]) === "true" ? true : false;
	if (this._enable) {
		this._data = data;
		this._wave = String(Moghunter.titleBackW) == "true" ? true : false;
		this._mode = Number(Moghunter.titleBackX[this._index]) == 0 && Number(Moghunter.titleBackY[this._index]) == 0 ? 1 : 0;
		this.createSprite();
	};
};

//==============================
// * Screen Width
//==============================
TitleBackground.prototype.screenWidth = function() {
    return this._data[2] + 4;
};

//==============================
// * Screen Height
//==============================
TitleBackground.prototype.screenHeight = function() {
    return this._data[3] + 4;
};

//==============================
// * Is Animated
//==============================
TitleBackground.prototype.isAnimated = function() {
    return this._anime[0];
};

//==============================
// * Frame Index
//==============================
TitleBackground.prototype.frameIndex = function() {
    return this._anime[1];
};

//==============================
// * max Frames
//==============================
TitleBackground.prototype.maxframes = function() {
    return this._anime[2];
};

//==============================
// * Frame Speed
//==============================
TitleBackground.prototype.frameSpeed = function() {
    return this._anime[3];
};

//==============================
// * Update Frames
//==============================
TitleBackground.prototype.updateFrames = function() {
    this._anime[4]++;
	if (this._anime[4] < this.frameSpeed()) {return};
	this._anime[4] = 0;
	this.refreshFrames();
};

//==============================
// * refresh Frames
//==============================
TitleBackground.prototype.refreshFrames = function() {
	this._anime[1]++;
	if (this._anime[1] >= this.maxframes()) {this._anime[1] = 0};	
    this.setBitmap()
};

//==============================
// * Load Bitmap
//==============================
TitleBackground.prototype.loadBitmap = function() {
	this._anime = [];
	this._anime[0] = String(Moghunter.titleBackAN[this._index]) === "true" ? true : false;
	this._anime[1] = 0;
	this._anime[2] = this._anime[0] ? Moghunter.titleBackAF[this._index] : 1;
	this._anime[3] = Moghunter.titleBackAS[this._index];
	this._anime[4] = 0;
	this._imgs = [];
	if (!this.isAnimated()) {
		   var name = String(Moghunter.titleBackN[this._index]);
		   this._imgs[0] = ImageManager.loadTitle1(name);
	} else {
		for (var i = 0; i < Moghunter.titleBackAF[this._index]; i++) {
		   var name = String(Moghunter.titleBackN[this._index]) + "_" + i;
		   this._imgs[i] = ImageManager.loadTitle1(name);
		};	   
	};
};

//==============================
// * Set Bitmap
//==============================
TitleBackground.prototype.setBitmap = function() {
	 this._back.bitmap = this._imgs[this.frameIndex()];
};

//==============================
// * Create Sprite
//==============================
TitleBackground.prototype.createSprite = function() {	
	this.loadBitmap();
	if (this._mode == 0) {
	    this._back = new TilingSprite();
		this.setBitmap();
		this._back.move(0,0,Graphics.width,Graphics.height);
	} else {
		this._back = new Sprite();
		if (this._wave) {
		    this._back.anchor.x = 0.5;
		    this._back.anchor.y = 0.5;
		};
	};
	this.setBitmap();
	this._back._start = false;
	this._back.org = [0,0];
	this._back.sx = Number(Moghunter.titleBackX[this._index]);
	this._back.sy = Number(Moghunter.titleBackY[this._index]);
	this._back.rt = 0;
	this._back.t = Number(Moghunter.titleBackT[this._index]);
	this._back.opacity = this._back.t > 0 ? 0 : 255;
	this._back.blendMode = Moghunter.titleBackB[this._index];
	this.addChild(this._back);
};

//==============================
// * load Bitmap B
//==============================
TitleBackground.prototype.getData = function() {
	this._back._start = true;
    this.setCenter();
	if (this.needFitScreen()) {	this.fitScreen()};
};

//==============================
// * needFitScreen
//==============================
TitleBackground.prototype.needFitScreen = function() {
	if (Moghunter.titleBackFitScreen != "true") {return false};
	return true;
};

//==============================
// * Set Center
//==============================
TitleBackground.prototype.setCenter = function() {
	this._back._start = true;
	if (this._wave) {
		this.setWave()
	} else {;
		if (this._mode === 0) {
			this._back.move(0,0,Graphics.width,Graphics.height );
		} else {
			this._back.x = this._back.sx;
			this._back.y = this._back.sy;	
		};
	};
	this._back.org = [this._back.x,this._back.y];
};

//==============================
// * Set Center
//==============================
TitleBackground.prototype.setWave = function() {
     this.fitScreen();
	 this.setWaveCenter();
};

//==============================
// * set Wave Center
//==============================
TitleBackground.prototype.setWaveCenter = function() {
	if (this._mode === 0) {
		var w = this.screenWidth();
		var h = this.screenHeight();
		var x = (this.screenWidth() - Graphics.width) / 2;
		var y = (this.screenHeight() - Graphics.height) / 2;
		this._back.move(-x,-y,w,h);
	} else {
      this._back.x = Graphics.width / 2;
      this._back.y = Graphics.height / 2;
	};
};

//==============================
// * Fit Screen
//==============================
TitleBackground.prototype.fitScreen = function() {
	if (this._back.bitmap.width < Graphics.width) {
    	this._back.scale.x = Graphics.width / this._back.bitmap.width;
	};
	if (this._back.bitmap.height < Graphics.height) {
	    this._back.scale.y = Graphics.height / this._back.bitmap.height;
	};
};

//==============================
// * Update Scroll
//==============================
TitleBackground.prototype.updateScroll = function() {
	this._back.origin.x += this._back.sx; 
	this._back.origin.y += this._back.sy;
};

//==============================
// * Update Wave
//==============================
TitleBackground.prototype.updateWave = function() {
    this._back.x = this._back.org[0];
	this._back.y = this._back.org[1];
};

//==============================
// * Update Background
//==============================
TitleBackground.prototype.updateBackground = function() {
	if (this._back.t > 0) {this._back.t--;return};
	this._back.opacity += 2;
    if (this._mode == 0) {
		this.updateScroll();
	} else {
	    if (this._wave) {this.updateWave()};	
	};
	if (this.isAnimated()) {this.updateFrames()};
};

//==============================
// * Update
//==============================
TitleBackground.prototype.update = function() {
    Sprite.prototype.update.call(this);
	if (this._enable) {
		if (!this._back._start) {
			if (this._back.bitmap.isReady()) {this.getData()};
		} else {
			this.updateBackground();
		};
	};
};