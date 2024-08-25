"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var rewayatclub_1 = __importDefault(require("./arabic/rewayatclub"));
var _69shu_1 = __importDefault(require("./chinese/69shu"));
var _69xinshu_1 = __importDefault(require("./chinese/69xinshu"));
var linovelib_1 = __importDefault(require("./chinese/linovelib"));
var LibRead_1 = __importDefault(require("./english/LibRead"));
var NovelOnline_1 = __importDefault(require("./english/NovelOnline"));
var StorySeedling_1 = __importDefault(require("./english/StorySeedling"));
var allnovelfull_1 = __importDefault(require("./english/allnovelfull"));
var ao3_1 = __importDefault(require("./english/ao3"));
var bestlightnovel_1 = __importDefault(require("./english/bestlightnovel"));
var divinedaolibrary_1 = __importDefault(require("./english/divinedaolibrary"));
var dreambigtl_1 = __importDefault(require("./english/dreambigtl"));
var earlynovel_1 = __importDefault(require("./english/earlynovel"));
var faqwikius_1 = __importDefault(require("./english/faqwikius"));
var foxteller_1 = __importDefault(require("./english/foxteller"));
var freewebnovel_1 = __importDefault(require("./english/freewebnovel"));
var genesis_1 = __importDefault(require("./english/genesis"));
var lightnovelpub_1 = __importDefault(require("./english/lightnovelpub"));
var lnmtl_1 = __importDefault(require("./english/lnmtl"));
var mtlreader_1 = __importDefault(require("./english/mtlreader"));
var novelbin_1 = __importDefault(require("./english/novelbin"));
var novelbuddy_1 = __importDefault(require("./english/novelbuddy"));
var novelfire_1 = __importDefault(require("./english/novelfire"));
var novelfull_1 = __importDefault(require("./english/novelfull"));
var novelhall_1 = __importDefault(require("./english/novelhall"));
var novelupdates_1 = __importDefault(require("./english/novelupdates"));
var pawread_1 = __importDefault(require("./english/pawread"));
var rainofsnow_1 = __importDefault(require("./english/rainofsnow"));
var ranobes_1 = __importDefault(require("./english/ranobes"));
var readlitenovel_1 = __importDefault(require("./english/readlitenovel"));
var relibrary_1 = __importDefault(require("./english/relibrary"));
var royalroad_1 = __importDefault(require("./english/royalroad"));
var scribblehub_1 = __importDefault(require("./english/scribblehub"));
var vynovel_1 = __importDefault(require("./english/vynovel"));
var webnovel_1 = __importDefault(require("./english/webnovel"));
var wtrlab_1 = __importDefault(require("./english/wtrlab"));
var wuxiaworld_1 = __importDefault(require("./english/wuxiaworld"));
var chireads_1 = __importDefault(require("./french/chireads"));
var harkeneliwood_1 = __importDefault(require("./french/harkeneliwood"));
var kisswood_1 = __importDefault(require("./french/kisswood"));
var noveldeglace_1 = __importDefault(require("./french/noveldeglace"));
var novhell_1 = __importDefault(require("./french/novhell"));
var phenixscans_1 = __importDefault(require("./french/phenixscans"));
var warriorlegendtrad_1 = __importDefault(require("./french/warriorlegendtrad"));
var wuxialnscantrad_1 = __importDefault(require("./french/wuxialnscantrad"));
var xiaowaz_1 = __importDefault(require("./french/xiaowaz"));
var indowebnovel_1 = __importDefault(require("./indonesian/indowebnovel"));
var novelringan_1 = __importDefault(require("./indonesian/novelringan"));
var sakuranovel_1 = __importDefault(require("./indonesian/sakuranovel"));
var Syosetu_1 = __importDefault(require("./japanese/Syosetu"));
var Agitoon_1 = __importDefault(require("./korean/Agitoon"));
var novelki_1 = __importDefault(require("./polish/novelki"));
var novelmania_1 = __importDefault(require("./portuguese/novelmania"));
var tsundoku_1 = __importDefault(require("./portuguese/tsundoku"));
var LitSpace_1 = __importDefault(require("./russian/LitSpace"));
var authortoday_1 = __importDefault(require("./russian/authortoday"));
var bookriver_1 = __importDefault(require("./russian/bookriver"));
var ficbook_1 = __importDefault(require("./russian/ficbook"));
var jaomix_1 = __importDefault(require("./russian/jaomix"));
var neobook_1 = __importDefault(require("./russian/neobook"));
var novelOvh_1 = __importDefault(require("./russian/novelOvh"));
var novelTL_1 = __importDefault(require("./russian/novelTL"));
var ranobehub_1 = __importDefault(require("./russian/ranobehub"));
var ranobelib_1 = __importDefault(require("./russian/ranobelib"));
var ranoberf_1 = __importDefault(require("./russian/ranoberf"));
var renovels_1 = __importDefault(require("./russian/renovels"));
var ruvers_1 = __importDefault(require("./russian/ruvers"));
var topliba_1 = __importDefault(require("./russian/topliba"));
var zelluloza_1 = __importDefault(require("./russian/zelluloza"));
var hasutl_1 = __importDefault(require("./spanish/hasutl"));
var novelasligera_1 = __importDefault(require("./spanish/novelasligera"));
var novelawuxia_1 = __importDefault(require("./spanish/novelawuxia"));
var oasistranslations_1 = __importDefault(require("./spanish/oasistranslations"));
var skynovels_1 = __importDefault(require("./spanish/skynovels"));
var tunovelaligera_1 = __importDefault(require("./spanish/tunovelaligera"));
var yukitls_1 = __importDefault(require("./spanish/yukitls"));
var epiknovel_1 = __importDefault(require("./turkish/epiknovel"));
var smakolykytl_1 = __importDefault(require("./ukrainian/smakolykytl"));
var LNHako_1 = __importDefault(require("./vietnamese/LNHako"));
var Truyenconect_1 = __importDefault(require("./vietnamese/Truyenconect"));
var lightnovelvn_1 = __importDefault(require("./vietnamese/lightnovelvn"));
var nettruyen_1 = __importDefault(require("./vietnamese/nettruyen"));
var truyenchu_1 = __importDefault(require("./vietnamese/truyenchu"));
var truyenfull_1 = __importDefault(require("./vietnamese/truyenfull"));
var PLUGINS = [rewayatclub_1.default, _69shu_1.default, _69xinshu_1.default, linovelib_1.default, LibRead_1.default, NovelOnline_1.default, StorySeedling_1.default, allnovelfull_1.default, ao3_1.default, bestlightnovel_1.default, divinedaolibrary_1.default, dreambigtl_1.default, earlynovel_1.default, faqwikius_1.default, foxteller_1.default, freewebnovel_1.default, genesis_1.default, lightnovelpub_1.default, lnmtl_1.default, mtlreader_1.default, novelbin_1.default, novelbuddy_1.default, novelfire_1.default, novelfull_1.default, novelhall_1.default, novelupdates_1.default, pawread_1.default, rainofsnow_1.default, ranobes_1.default, readlitenovel_1.default, relibrary_1.default, royalroad_1.default, scribblehub_1.default, vynovel_1.default, webnovel_1.default, wtrlab_1.default, wuxiaworld_1.default, chireads_1.default, harkeneliwood_1.default, kisswood_1.default, noveldeglace_1.default, novhell_1.default, phenixscans_1.default, warriorlegendtrad_1.default, wuxialnscantrad_1.default, xiaowaz_1.default, indowebnovel_1.default, novelringan_1.default, sakuranovel_1.default, Syosetu_1.default, Agitoon_1.default, novelki_1.default, novelmania_1.default, tsundoku_1.default, LitSpace_1.default, authortoday_1.default, bookriver_1.default, ficbook_1.default, jaomix_1.default, neobook_1.default, novelOvh_1.default, novelTL_1.default, ranobehub_1.default, ranobelib_1.default, ranoberf_1.default, renovels_1.default, ruvers_1.default, topliba_1.default, zelluloza_1.default, hasutl_1.default, novelasligera_1.default, novelawuxia_1.default, oasistranslations_1.default, skynovels_1.default, tunovelaligera_1.default, yukitls_1.default, epiknovel_1.default, smakolykytl_1.default, LNHako_1.default, Truyenconect_1.default, lightnovelvn_1.default, nettruyen_1.default, truyenchu_1.default, truyenfull_1.default];
exports.default = PLUGINS;
