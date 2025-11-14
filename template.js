//=============================================================================
// Plugin: YourPluginName
// Author: YourName (Handle)
// Version: 1.0.0
//=============================================================================

/*:
 * @target MV MZ
 * @plugindesc v1.0.0 Short one-line summary for the Plugin Manager.
 * @author YourName
 * @url https://example.com/your-plugin-homepage
 * @help
 * ============================================================================
 *  YourPluginName v1.0.0
 * ============================================================================
 *  Overview:
 *    - What this plugin changes/adds.
 *
 *  Usage:
 *    - How to turn it on / configure it.
 *    - Where to find settings in the database.
 *
 *  Notetags:
 *    <YourTag: x>
 *      - Explain what it does.
 *
 *  Script Calls:
 *    YourPlugin.doThing(args);
 *      - Explain args.
 *
 *  Plugin Commands (MZ):
 *    See the Plugin Command list in this header.
 *
 *  Compatibility:
 *    - Tested with RPG Maker MV 1.x / MZ 1.x.
 *    - Load order notes, if any.
 *
 *  Terms of Use:
 *    - Free for commercial and non-commercial use.
 *    - Credit: "YourName".
 *
 *  Changelog:
 *    v1.0.0 - Initial release.
 * ============================================================================
 *
 * // Dependency hints (fill in or delete if not used)
 * // @base YourCorePlugin
 * // @orderAfter Some_Other_Plugin
 * // @orderBefore Another_Plugin
 *
 * // Prevent deploy from stripping assets used only via code:
 * // @requiredAssets img/pictures/example_1
 * // @requiredAssets img/system/example_2
 *
 * @param ExampleNumber
 * @text Example Number
 * @desc Example numeric parameter.
 * @type number
 * @min 0
 * @default 10
 *
 * @param ExampleToggle
 * @text Example Toggle
 * @desc Example boolean parameter.
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @default true
 *
 * @param ExampleStructList
 * @text Example Struct List
 * @desc Example list of structured entries.
 * @type struct<ExampleStruct>[]
 * @default []
 *
 * @command ExampleCommand
 * @text Example Command
 * @desc Example plugin command that does something.
 *
 * @arg ExampleArg
 * @text Example Arg
 * @desc Example command argument.
 * @type number
 * @default 0
 */

/*~struct~ExampleStruct:
 * @param Id
 * @text ID
 * @desc Identifier.
 * @type number
 * @default 1
 *
 * @param Name
 * @text Name
 * @desc Display name.
 * @type string
 * @default ""
 */

/*:ja
 * @target MZ
 * @plugindesc v1.0.0 日本語での概要（必要なら）
 * @author YourName
 * @url https://example.com/your-plugin-homepage
 * @help
 * ここに日本語ヘルプ。必要なければ、このブロックごと削除。
 */
 
/*
 * License:
 *   (MIT / custom terms here – keep the full license text
 *   in this separate block, not inside the @help section.)
 */
