// Generated from /run/media/jake/Windows/Users/madca/IdeaProjects/antlr-hisyeo/grammar/HisyeoWordParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import HisyeoWordParserListener from './HisyeoWordParserListener.js';
import HisyeoWordParserVisitor from './HisyeoWordParserVisitor.js';

const serializedATN = [4,1,886,25,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,5,0,0,6,0,2,
4,6,8,10,0,6,6,0,182,182,356,356,541,541,641,641,829,829,831,831,12,0,28,
28,37,37,51,51,107,107,349,349,506,506,545,545,752,752,765,765,773,773,776,
776,788,788,120,0,13,14,16,16,20,20,32,32,36,36,38,40,43,43,58,58,79,79,
85,85,87,87,97,97,108,108,117,117,120,120,134,134,140,140,147,148,151,151,
161,163,183,183,187,187,190,191,198,199,205,205,218,218,227,227,248,248,
250,250,254,254,257,257,259,259,281,281,283,283,288,288,290,290,303,303,
318,319,323,324,332,332,334,334,346,346,348,348,358,358,362,362,364,364,
366,368,371,372,377,378,380,380,382,382,391,391,393,393,395,395,397,397,
406,406,412,412,420,420,426,426,439,439,445,445,448,450,464,464,468,468,
478,478,482,482,487,487,489,492,498,498,501,501,504,504,508,508,512,513,
522,524,534,534,550,550,557,557,560,560,563,564,582,582,584,585,590,590,
592,594,598,598,608,608,616,616,618,618,634,634,637,637,651,651,659,659,
661,661,665,666,670,670,672,672,680,681,687,687,689,689,701,701,703,703,
727,727,743,743,745,745,770,770,780,780,792,792,797,797,799,799,802,804,
808,808,813,814,825,825,834,834,843,844,854,854,857,857,868,868,878,878,
884,884,886,886,210,0,15,15,18,19,22,22,24,25,29,30,41,42,44,46,49,49,52,
52,62,62,64,64,66,66,69,69,72,74,78,78,80,80,82,82,84,84,86,86,89,90,93,
93,96,96,99,99,101,101,104,104,106,106,110,112,116,116,124,126,128,128,130,
130,132,133,136,136,141,142,144,146,150,150,153,154,156,156,158,158,164,
164,167,168,170,172,174,175,188,189,192,192,196,196,201,202,209,211,215,
215,217,217,220,221,228,230,233,235,237,244,246,247,251,251,253,253,262,
262,267,267,270,272,274,277,280,280,282,282,284,284,289,289,291,296,300,
300,302,302,304,304,314,317,322,322,325,325,327,328,330,330,338,338,342,
342,345,345,351,352,354,354,359,361,365,365,369,369,374,374,381,381,383,
383,386,389,400,402,404,405,410,411,413,415,417,417,419,419,423,425,428,
432,434,434,438,438,440,440,443,444,447,447,455,455,458,458,461,461,465,
466,469,469,472,472,474,476,480,481,483,483,485,486,495,495,497,497,499,
500,505,505,507,507,509,509,511,511,517,518,520,520,526,529,532,533,536,
539,544,544,546,546,549,549,551,551,553,553,555,556,559,559,561,562,565,
565,567,568,571,573,583,583,586,587,589,589,595,595,597,597,599,599,601,
602,606,606,614,614,617,617,620,620,626,626,629,632,635,635,640,640,643,
644,646,646,648,648,652,653,656,656,664,664,668,668,673,676,678,678,682,
682,684,685,688,688,693,693,695,696,698,699,708,708,711,711,713,714,716,
717,719,721,726,726,728,728,730,731,733,733,736,736,739,739,744,744,746,
749,751,751,753,754,756,758,767,767,771,772,778,779,782,782,784,784,786,
787,791,791,794,796,798,798,801,801,805,806,809,809,811,811,816,821,824,
824,826,827,830,830,832,832,836,838,849,849,851,853,855,856,858,858,861,
861,864,864,866,867,871,871,873,873,875,875,877,877,880,881,885,885,192,
0,17,17,21,21,23,23,27,27,31,31,34,35,47,48,53,54,67,67,70,71,75,76,81,81,
83,83,88,88,94,95,98,98,100,100,102,103,105,105,113,115,118,118,121,123,
127,127,131,131,135,135,137,139,149,149,152,152,155,155,157,157,159,160,
165,166,169,169,173,173,176,176,178,181,185,186,193,195,197,197,200,200,
203,204,207,208,212,214,216,216,222,224,226,226,232,232,236,236,245,245,
249,249,252,252,255,256,258,258,260,261,263,265,268,269,273,273,278,279,
286,287,298,299,301,301,305,305,307,308,311,311,313,313,320,321,326,326,
329,329,331,331,333,333,335,337,339,341,343,344,350,350,353,353,355,355,
357,357,363,363,370,370,373,373,375,376,379,379,384,385,390,390,392,392,
394,394,396,396,398,399,403,403,408,409,416,416,418,418,422,422,427,427,
433,433,435,437,441,442,451,451,453,454,457,457,459,460,462,462,467,467,
470,471,473,473,477,477,479,479,488,488,493,494,496,496,510,510,514,514,
516,516,521,521,525,525,530,531,535,535,542,543,548,548,552,552,554,554,
558,558,569,570,574,578,580,581,588,588,591,591,596,596,604,605,607,607,
610,610,612,613,615,615,619,619,621,625,627,627,633,633,638,639,642,642,
647,647,649,650,654,655,657,658,660,660,662,663,669,669,671,671,677,677,
679,679,683,683,686,686,690,692,697,697,700,700,702,702,704,707,710,710,
715,715,718,718,722,725,729,729,734,735,737,737,740,742,755,755,759,764,
768,768,774,775,777,777,781,781,783,783,785,785,789,790,793,793,800,800,
807,807,810,810,812,812,815,815,822,823,833,833,835,835,839,841,846,848,
850,850,859,860,862,862,865,865,869,869,872,872,874,874,882,883,5,0,63,63,
119,119,611,611,842,842,870,870,18,0,12,1,0,0,0,2,14,1,0,0,0,4,16,1,0,0,
0,6,18,1,0,0,0,8,20,1,0,0,0,10,22,1,0,0,0,12,13,7,0,0,0,13,1,1,0,0,0,14,
15,7,1,0,0,15,3,1,0,0,0,16,17,7,2,0,0,17,5,1,0,0,0,18,19,7,3,0,0,19,7,1,
0,0,0,20,21,7,4,0,0,21,9,1,0,0,0,22,23,7,5,0,0,23,11,1,0,0,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class HisyeoWordParser extends antlr4.Parser {

    static grammarFileName = "HisyeoWordParser.g4";
    static literalNames = [ null, null, "'oiyo'", null, null, null, "','", 
                            null, null, "'\\u00BF'", "'?'", null, null, 
                            "'o\\u00FBt\\u00F4'", "'ok\\u00FBlo'", "'o\\u00FBd\\u00EE'", 
                            "'ok\\u00F4t'", "'oks\\u00EE\\u00F4s'", "'oklumun'", 
                            "'oks\\u00FBn'", "'ogolol'", "'ogog\\u00EA'", 
                            "'oc\\u00FBo'", "'ot\\u00F4s'", "'okoxu'", "'ostok'", 
                            "'odigon'", "'osyen'", "'oz\\u00FBul'", "'obok\\u00EE'", 
                            "'ob\\u00F4'", "'obunyun'", "'ob\\u00FBl\\u00FB'", 
                            "'ofek'", "'of\\u00EEn\\u00EA'", "'om\\u00FBlto'", 
                            "'onk\\u00FBol'", "'on\\u00F4'", "'onkonu'", 
                            "'onc\\u00EAmon'", "'ondo'", "'ong\\u00F4l\\u00F4'", 
                            "'\\u00F4h\\u00EAl'", "'\\u00F4\\u00EEtun'", 
                            "'onwon\\u00EE'", "'\\u00F4ts\\u00F4tot'", "'onf\\u00EEb\\u00EE'", 
                            "'\\u00F4s\\u00F4l\\u00EA'", "'olt\\u00FB'", 
                            "'\\u00F4st\\u00EE'", "'oldis'", "'\\u00F4fo'", 
                            "'\\u00F4z\\u00EEl'", "'\\u00F4don'", "'\\u00F4bok'", 
                            "'\\u00F4n\\u00EE'", "'et'", "'eson'", "'\\u00F4nt\\u00F4n'", 
                            "'\\u00F4nsu'", "'eswen'", "'\\u00F4l\\u00EA'", 
                            "'eloi'", "'en'", "'elek\\u00EA'", "'\\u00EAo'", 
                            "'\\u00EAts\\u00F4'", "'elent\\u00EAt'", "'elf\\u00FB'", 
                            "'\\u00EAb\\u00F4l'", "'\\u00EAm\\u00EA'", "'\\u00EAfun'", 
                            "'itihos'", "'\\u00EAnbukun'", "'\\u00EAnk\\u00F4m\\u00F4n'", 
                            "'\\u00EAl\\u00EAo'", "'isbulyol'", "'\\u00EAto'", 
                            "'\\u00EEc\\u00EEw\\u00FB'", "'\\u00EEcwon'", 
                            "'istihol'", "'iwot\\u00EA'", "'\\u00EEs\\u00EAns\\u00F4'", 
                            "'infult\\u00EEn'", "'\\u00EEsb\\u00F4nxu'", 
                            "'\\u00EEsk\\u00F4'", "'\\u00EEx\\u00F4l\\u00F4'", 
                            "'\\u00EEmon'", "'\\u00EEb\\u00FBd\\u00FB'", 
                            "'\\u00EEs\\u00EEb\\u00F4'", "'\\u00EEb\\u00FBw\\u00EA'", 
                            "'ilik'", "'\\u00EEn'", "'\\u00EEbol\\u00EA'", 
                            "'uklo'", "'us\\u00FBndul'", "'\\u00EEnbol\\u00EE'", 
                            "'usk\\u00EEfo'", "'ub\\u00F4lni'", "'\\u00EEl\\u00EA'", 
                            "'\\u00EElx\\u00EEzuk'", "'umo'", "'ub\\u00EAnus'", 
                            "'uf\\u00FBl\\u00EEt'", "'undof\\u00F4l'", "'unbol'", 
                            "'uyo'", "'uly\\u00F4'", "'unon'", "'\\u00FB'", 
                            "'unb\\u00FB'", "'\\u00FBs\\u00EAn'", "'\\u00FBc\\u00FBm\\u00EE'", 
                            "'\\u00FBsowo'", "'\\u00FBtok'", "'\\u00FBmom\\u00EE'", 
                            "'\\u00FBsmon'", "'\\u00FBsl\\u00EAk'", "'\\u00FBn\\u00EEd\\u00FB'", 
                            "'\\u00FBn'", "'\\u00FBnhilun'", "'\\u00FBnco\\u00EE'", 
                            "'\\u00FBlk\\u00EAf\\u00EE'", "'\\u00FBlg\\u00FBk\\u00EEn'", 
                            "'\\u00FBlonf\\u00FB'", "'\\u00FBl\\u00F4gun'", 
                            "'\\u00FBnf\\u00FBn\\u00F4'", "'hok\\u00EEk\\u00EE'", 
                            "'\\u00FBlzo'", "'ho\\u00EE'", "'hok\\u00F4l\\u00EE'", 
                            "'hok\\u00FBxi'", "'hoso\\u00FBn'", "'hoxob\\u00EA'", 
                            "'hob\\u00EEy\\u00F4'", "'hom\\u00FBs'", "'hondon'", 
                            "'ho\\u00F4s'", "'hos\\u00EEn'", "'hond\\u00F4t'", 
                            "'hofo'", "'h\\u00F4ktun'", "'h\\u00F4fez\\u00EE'", 
                            "'h\\u00F4n'", "'h\\u00F4nc\\u00F4\\u00FB'", 
                            "'h\\u00F4l\\u00FBk'", "'h\\u00F4lmo'", "'h\\u00F4d\\u00F4k\\u00FB'", 
                            "'h\\u00EAf\\u00EEn'", "'henond\\u00EA'", "'h\\u00F4nyo'", 
                            "'helgo'", "'h\\u00EAlxun'", "'h\\u00EAn\\u00EAl\\u00F4'", 
                            "'hitsu'", "'h\\u00EEtn\\u00F4d\\u00EAt'", "'h\\u00EEsmo'", 
                            "'h\\u00EEzon'", "'hunz\\u00EEd\\u00FB'", "'hul\\u00FBk\\u00F4'", 
                            "'h\\u00FBunhu'", "'h\\u00FBk\\u00EA'", "'h\\u00FBkun'", 
                            "'h\\u00FBsku'", "'h\\u00FBstun'", "'h\\u00FBdul'", 
                            "'h\\u00FBnsik'", "'h\\u00FBzon'", "'h\\u00FBns\\u00FBon'", 
                            "'h\\u00EEy\\u00F4l\\u00EE'", "'h\\u00FBwuncul'", 
                            "'h\\u00FBwu'", "'h\\u00EEsk\\u00FBnco'", "'hiklihos'", 
                            "'h\\u00FBlod\\u00EAk'", "'h\\u00FBl\\u00FB'", 
                            "'kocko'", "'kon'", "'kotilmok'", "'kob\\u00FBt'", 
                            "'kotonhon'", "'konxo'", "'ko'", "'kontol'", 
                            "'k\\u00F4\\u00EE'", "'konbokbo'", "'konwo'", 
                            "'k\\u00F4to'", "'kolowu'", "'k\\u00F4kok\\u00FB'", 
                            "'k\\u00F4s'", "'k\\u00F4son'", "'k\\u00F4tf\\u00FBsu'", 
                            "'k\\u00F4xent\\u00EA'", "'k\\u00F4t\\u00EEk\\u00F4l'", 
                            "'k\\u00F4n\\u00EAn'", "'k\\u00F4m\\u00FB'", 
                            "'k\\u00F4dus'", "'k\\u00F4ndod\\u00FB'", "'k\\u00F4nt\\u00EAsto'", 
                            "'k\\u00F4ndons\\u00EA'", "'k\\u00F4lm\\u00FBdul'", 
                            "'k\\u00F4sm\\u00F4'", "'k\\u00F4ny\\u00EAc'", 
                            "'k\\u00F4nbo'", "'kelo'", "'ke'", "'k\\u00EAsk\\u00EEn'", 
                            "'k\\u00EAx\\u00EEk'", "'k\\u00EAl\\u00F4s'", 
                            "'k\\u00EE\\u00FBng\\u00F4'", "'kistos\\u00EA'", 
                            "'k\\u00EEk\\u00F4l\\u00F4'", "'k\\u00EE\\u00F4s\\u00F4'", 
                            "'kiluk\\u00FB'", "'k\\u00EEsk\\u00F4'", "'k\\u00EEn\\u00F4x\\u00EE'", 
                            "'k\\u00EEno'", "'k\\u00EEso'", "'k\\u00EEns\\u00EA'", 
                            "'ku\\u00FBnm\\u00EA'", "'k\\u00EEnyosel'", 
                            "'k\\u00EEnlik'", "'k\\u00EEldo'", "'k\\u00EEy\\u00F4'", 
                            "'kut'", "'kutin'", "'kud\\u00FBdo'", "'kukwon'", 
                            "'k\\u00FBon'", "'k\\u00FB\\u00F4cyo'", "'k\\u00FBu'", 
                            "'k\\u00FBonl\\u00F4n'", "'k\\u00FBkmut'", "'k\\u00FBsow\\u00EE'", 
                            "'k\\u00FBnont\\u00EE'", "'k\\u00FBzo\\u00FB'", 
                            "'k\\u00FBdu'", "'k\\u00FBmun'", "'k\\u00FB\\u00F4xi'", 
                            "'k\\u00FBnh\\u00EEun'", "'k\\u00FBnc\\u00EEen'", 
                            "'k\\u00FBng\\u00EEyo'", "'k\\u00FBnb\\u00EE'", 
                            "'k\\u00FBld\\u00FB'", "'gos\\u00EEl'", "'gos'", 
                            "'k\\u00FBl\\u00FBnun'", "'gom\\u00EE'", "'k\\u00FBy\\u00F4'", 
                            "'gon\\u00EEso'", "'gonbu'", "'gonz\\u00EEl'", 
                            "'gongox\\u00EE'", "'golo'", "'golfon'", "'golbin\\u00FBs'", 
                            "'golun'", "'g\\u00F4'", "'g\\u00F4c\\u00EEdon'", 
                            "'g\\u00F4nyumon'", "'g\\u00F4wo'", "'g\\u00F4yu'", 
                            "'gemolen'", "'g\\u00F4l\\u00FBo'", "'gelmis'", 
                            "'gitno'", "'g\\u00EAk\\u00F4'", "'g\\u00EE\\u00F4n'", 
                            "'g\\u00EEk'", "'g\\u00EEto'", "'gubuyo'", "'g\\u00EEsg\\u00FBl'", 
                            "'gufis'", "'g\\u00FB\\u00EAy\\u00FB'", "'g\\u00FBexo'", 
                            "'gundol\\u00EA'", "'g\\u00FBdol\\u00F4'", "'g\\u00FBso'", 
                            "'g\\u00FBnokol'", "'g\\u00FBm\\u00EE'", "'g\\u00FBwolo'", 
                            "'g\\u00FBfox\\u00EA'", "'g\\u00FBf\\u00EE\\u00F4'", 
                            "'g\\u00FBl\\u00FB'", "'to\\u00FB'", "'g\\u00FBlob\\u00EE'", 
                            "'totsi'", "'to\\u00FByen'", "'tohil\\u00F4k'", 
                            "'tosw\\u00EEl'", "'toliyo'", "'tow\\u00EA'", 
                            "'tonbokcut'", "'tol\\u00EAn'", "'tol\\u00EEko'", 
                            "'tolx\\u00EAto'", "'t\\u00F4'", "'t\\u00F4c\\u00EEt'", 
                            "'t\\u00F4nco\\u00EE'", "'t\\u00F4m\\u00F4s'", 
                            "'t\\u00F4lk\\u00EE'", "'t\\u00F4x\\u00FBtsi'", 
                            "'tenk\\u00EEn'", "'tet\\u00EAk'", "'tigoyo'", 
                            "'tel\\u00F4'", "'tif\\u00FBlci'", "'t\\u00F4nk\\u00F4'", 
                            "'t\\u00EE\\u00FB'", "'til'", "'t\\u00EEk\\u00FB'", 
                            "'tukwos'", "'t\\u00EEk\\u00EAl'", "'t\\u00EEx\\u00F4'", 
                            "'tub\\u00F4'", "'t\\u00EEton'", "'t\\u00EEm\\u00EEok'", 
                            "'tuluti'", "'t\\u00FBek'", "'tulkolyun'", "'t\\u00FBt'", 
                            "'t\\u00FBnd\\u00FB'", "'t\\u00FBu'", "'t\\u00FBlokon'", 
                            "'t\\u00FBl\\u00F4no'", "'cok'", "'comen'", 
                            "'cokwoli'", "'cokyen'", "'con\\u00F4\\u00EE'", 
                            "'cosn\\u00EE'", "'conw\\u00EAbo'", "'colot'", 
                            "'c\\u00F4\\u00FBfon'", "'conzodo'", "'c\\u00F4t'", 
                            "'c\\u00F4\\u00FBnton'", "'c\\u00F4cko'", "'c\\u00F4m\\u00EAl'", 
                            "'c\\u00F4nk\\u00F4k'", "'centik'", "'c\\u00EA\\u00F4'", 
                            "'cenc\\u00EE'", "'c\\u00EAnb\\u00F4'", "'c\\u00EAn'", 
                            "'cix\\u00EEn'", "'cih\\u00F4\\u00FB'", "'cif\\u00FB'", 
                            "'ciz\\u00EE'", "'cifulo'", "'cino'", "'cing\\u00EE'", 
                            "'cin\\u00F4bu'", "'ciw\\u00EEnd\\u00EE'", "'c\\u00EEes'", 
                            "'c\\u00EE'", "'c\\u00EEenx\\u00EEn'", "'c\\u00EEhun'", 
                            "'c\\u00EEk\\u00EEn\\u00EEl'", "'c\\u00EEbon'", 
                            "'c\\u00EEg\\u00EElsu'", "'c\\u00EEts\\u00EA'", 
                            "'c\\u00EEnzon'", "'c\\u00EEnl\\u00EE'", "'cusk\\u00EEd\\u00F4'", 
                            "'cukto'", "'cunl\\u00EE\\u00FB'", "'cunc\\u00EEon'", 
                            "'c\\u00FBonwun'", "'cuny\\u00FB'", "'cutn\\u00EA'", 
                            "'culono'", "'c\\u00FBt\\u00EE'", "'c\\u00FB\\u00EE'", 
                            "'c\\u00FBb\\u00FB'", "'c\\u00FBx\\u00EEen'", 
                            "'c\\u00FBdo'", "'c\\u00FBfo'", "'c\\u00FBnf\\u00FB'", 
                            "'c\\u00FBngo'", "'c\\u00FBnd\\u00F4l'", "'c\\u00FBlosun'", 
                            "'sokof\\u00FB'", "'soho\\u00FB'", "'sokol'", 
                            "'c\\u00FBlc\\u00EE'", "'sotn\\u00EEn'", "'c\\u00FBl\\u00FBl'", 
                            "'soden'", "'sodolun'", "'socok'", "'sodil\\u00FB'", 
                            "'sob\\u00F4l\\u00EA'", "'sob\\u00FBn\\u00EE'", 
                            "'sobis'", "'sonkon'", "'somo'", "'sof\\u00EEn'", 
                            "'sont\\u00EE'", "'sol\\u00EElo'", "'solw\\u00F4c'", 
                            "'s\\u00F4t\\u00FBn'", "'s\\u00F4ns\\u00FBs'", 
                            "'s\\u00F4ho\\u00FBk'", "'s\\u00F4bo'", "'s\\u00F4l\\u00FB'", 
                            "'ses'", "'s\\u00F4ndon\\u00F4s'", "'s\\u00F4lt\\u00FBstik'", 
                            "'senwic'", "'s\\u00EAk\\u00EE'", "'sel\\u00F4h\\u00F4'", 
                            "'s\\u00EAdu'", "'s\\u00EAmoi'", "'s\\u00EAk\\u00EEton'", 
                            "'s\\u00EAlb\\u00F4'", "'siskin'", "'s\\u00EAnz\\u00F4'", 
                            "'s\\u00EAl'", "'sityo'", "'s\\u00EE'", "'s\\u00EEokb\\u00EE'", 
                            "'s\\u00EE\\u00EAt\\u00F4'", "'sins\\u00EE'", 
                            "'s\\u00EEkot'", "'s\\u00EE\\u00FBfo'", "'s\\u00EEn\\u00EAx\\u00EEs'", 
                            "'s\\u00EEntokmo'", "'s\\u00EEk\\u00EEn'", "'suhot'", 
                            "'sukyunik'", "'sufo\\u00FBn'", "'sumon'", "'sund\\u00EEbot'", 
                            "'sunb\\u00FBlno'", "'sunyotn\\u00EE'", "'s\\u00FB\\u00EEt'", 
                            "'s\\u00FBt\\u00FB\\u00F4'", "'s\\u00FB\\u00F4xic'", 
                            "'s\\u00FBs\\u00F4n'", "'xo\\u00EEnbo'", "'s\\u00FBb\\u00F4l'", 
                            "'xohofec'", "'s\\u00FBnb\\u00EEd\\u00FB'", 
                            "'s\\u00FBko'", "'s\\u00FBn'", "'xof\\u00F4'", 
                            "'xok\\u00FBl\\u00FB'", "'xobo'", "'xont\\u00FBn'", 
                            "'xob\\u00EAk'", "'xok\\u00F4n'", "'xonluk'", 
                            "'x\\u00F4bo\\u00EE'", "'x\\u00F4m\\u00FBtl\\u00F4'", 
                            "'xe'", "'xowos\\u00EA'", "'xolu'", "'xec\\u00EEnoc'", 
                            "'xolx\\u00EEl\\u00EE'", "'xem\\u00EAtsen'", 
                            "'x\\u00F4n'", "'x\\u00EAt\\u00EE'", "'xef\\u00EEzec'", 
                            "'xing\\u00F4'", "'xifon'", "'x\\u00EAnt\\u00EEl'", 
                            "'x\\u00EE\\u00FBf\\u00FB'", "'x\\u00EE\\u00FBlo'", 
                            "'x\\u00EEk\\u00F4'", "'x\\u00EEd\\u00EAtl\\u00EE'", 
                            "'x\\u00EExulko'", "'x\\u00EEs\\u00FB'", "'x\\u00EEmol'", 
                            "'x\\u00EEnc\\u00FBon'", "'x\\u00EEmu'", "'xulmindo'", 
                            "'x\\u00EEwon'", "'x\\u00EEy\\u00F4c\\u00FB'", 
                            "'x\\u00FBto'", "'x\\u00FBk'", "'x\\u00FBsten'", 
                            "'do\\u00EE'", "'x\\u00FBnyu'", "'x\\u00FBxok'", 
                            "'do\\u00EEnb\\u00EE'", "'doho'", "'doh\\u00EEl'", 
                            "'do\\u00EEc\\u00EAl'", "'dokdogo'", "'dod\\u00F4\\u00FB'", 
                            "'dokn\\u00FB'", "'dondun'", "'d\\u00F4kcon'", 
                            "'d\\u00F4n\\u00FBs'", "'dod\\u00EA'", "'d\\u00F4cu\\u00EE'", 
                            "'d\\u00F4stoc'", "'d\\u00F4n\\u00FBxin'", "'deku'", 
                            "'d\\u00EAko'", "'d\\u00EAs'", "'d\\u00EAn'", 
                            "'d\\u00EE'", "'dibo'", "'d\\u00EEzel'", "'d\\u00EAto\\u00EE'", 
                            "'d\\u00EAn\\u00EAm\\u00EAk'", "'d\\u00EEnc\\u00EE'", 
                            "'d\\u00EEd\\u00F4z\\u00FB'", "'d\\u00EEnzo\\u00FB'", 
                            "'d\\u00EEyond\\u00EA'", "'du\\u00FBhon'", "'d\\u00EEl\\u00EA'", 
                            "'dus'", "'dukw\\u00EAlit'", "'dumoko'", "'duw\\u00F4n\\u00EE'", 
                            "'d\\u00FB\\u00EE'", "'d\\u00FBunc\\u00EEt'", 
                            "'d\\u00FBsul'", "'d\\u00FBbono'", "'d\\u00FBstu'", 
                            "'d\\u00FBngo'", "'d\\u00FBndon'", "'zoso'", 
                            "'zomo'", "'zoston'", "'zom\\u00EE'", "'zon\\u00FBb\\u00EE'", 
                            "'zom\\u00FBn\\u00EE'", "'zonwul'", "'zowo'", 
                            "'zoh\\u00EEt'", "'z\\u00F4\\u00EE'", "'zolon\\u00EE'", 
                            "'z\\u00F4h\\u00FBn'", "'zol\\u00EE'", "'z\\u00F4goc'", 
                            "'z\\u00F4t\\u00EAst\\u00F4'", "'ze'", "'zelen'", 
                            "'z\\u00EAns\\u00EE'", "'z\\u00EAsto'", "'zik'", 
                            "'zizime'", "'ziy\\u00F4n'", "'z\\u00EEg\\u00EEl'", 
                            "'zinkon'", "'z\\u00EEco\\u00FB'", "'z\\u00EEx\\u00EEt\\u00FB'", 
                            "'z\\u00EEngu'", "'z\\u00EEz\\u00EEyo'", "'z\\u00EEwit'", 
                            "'zuko'", "'zusbot'", "'zuwob\\u00FB'", "'z\\u00EElyo\\u00EEs'", 
                            "'z\\u00FBng\\u00F4'", "'z\\u00FBt\\u00F4'", 
                            "'z\\u00FBnt\\u00FBlu'", "'z\\u00FBhu'", "'z\\u00FByi'", 
                            "'bo\\u00EEf\\u00F4n'", "'z\\u00FBnlo'", "'boit'", 
                            "'boholon'", "'bog\\u00F4'", "'botuk'", "'bod\\u00EE'", 
                            "'bostof\\u00EEs'", "'box\\u00F4'", "'bob\\u00F4un'", 
                            "'bono'", "'botyoto'", "'bon\\u00F4xo'", "'bol\\u00EEmot'", 
                            "'bong\\u00F4s\\u00EE'", "'bole'", "'boyok'", 
                            "'bomoge'", "'b\\u00F4k\\u00F4foc'", "'bolce'", 
                            "'b\\u00F4kl\\u00F4n'", "'b\\u00F4sol'", "'b\\u00F4nti'", 
                            "'b\\u00F4kb\\u00FBn'", "'bolut\\u00EA'", "'b\\u00F4lf\\u00EAl\\u00EA'", 
                            "'bet\\u00EEdo'", "'bel\\u00EEs\\u00EEs'", "'besol'", 
                            "'bel\\u00EAxu'", "'b\\u00EA\\u00FBdo'", "'b\\u00EA\\u00EEku'", 
                            "'b\\u00EAsu'", "'b\\u00EAl\\u00EAt\\u00EA'", 
                            "'b\\u00EAsn\\u00EAhot'", "'bind\\u00FB'", "'bi'", 
                            "'binl\\u00EA\\u00F4'", "'bit\\u00FBn'", "'b\\u00EEol\\u00EE'", 
                            "'bil\\u00EEt'", "'b\\u00EEkont\\u00EA'", "'b\\u00EE\\u00F4mu'", 
                            "'b\\u00EEc\\u00FBon'", "'b\\u00EEek'", "'b\\u00EEt'", 
                            "'b\\u00EEs\\u00FB'", "'b\\u00EEn\\u00EA'", 
                            "'b\\u00EEb\\u00F4k'", "'b\\u00EEnh\\u00FBn'", 
                            "'b\\u00EEnton'", "'buk\\u00FB'", "'bucono'", 
                            "'busw\\u00EAlin'", "'buswen'", "'bunxin'", 
                            "'buyencok'", "'bundu'", "'b\\u00FBgot'", "'b\\u00FB\\u00EEh\\u00EE'", 
                            "'b\\u00FBsin'", "'b\\u00FBsl\\u00FB'", "'b\\u00FBdogo'", 
                            "'b\\u00FBd\\u00EEk\\u00F4'", "'b\\u00FBz\\u00F4k'", 
                            "'b\\u00FBm\\u00EE'", "'b\\u00FBnt\\u00FBt'", 
                            "'b\\u00FBnd\\u00FBk\\u00EE'", "'fo\\u00FBt'", 
                            "'b\\u00FBlo'", "'fohoso'", "'b\\u00FBl\\u00FBs\\u00EE'", 
                            "'fos'", "'b\\u00EAmon'", "'b\\u00EEl\\u00FBs'", 
                            "'but'", "'fonolon'", "'foxo'", "'fonmot'", 
                            "'fonx\\u00EEn'", "'folo'", "'foko'", "'f\\u00F4hon'", 
                            "'f\\u00F4g\\u00EEc\\u00EEn'", "'f\\u00F4doloc'", 
                            "'f\\u00F4ln\\u00EE'", "'fonf\\u00FBk'", "'f\\u00F4lun'", 
                            "'fecko'", "'fikwun'", "'f\\u00EAlkon\\u00F4'", 
                            "'f\\u00EAlc\\u00EEn'", "'fen\\u00FBo'", "'fildonbun'", 
                            "'f\\u00EEectu'", "'fisun'", "'f\\u00EEt\\u00EEk\\u00F4s'", 
                            "'fiy\\u00FBx\\u00EEt'", "'f\\u00EEm\\u00F4sy\\u00F4s'", 
                            "'f\\u00EEcwo'", "'f\\u00EElo'", "'f\\u00EEz\\u00EE'", 
                            "'fu\\u00EE'", "'f\\u00EEy\\u00EAn'", "'fun'", 
                            "'funs\\u00FBt'", "'fulk\\u00F4\\u00EE'", "'funl\\u00EEt'", 
                            "'f\\u00FBts\\u00FBn'", "'f\\u00FBongok'", "'f\\u00FBk\\u00FBxi'", 
                            "'f\\u00FBus'", "'f\\u00FBx\\u00FBb\\u00EEn'", 
                            "'f\\u00FBnb\\u00EAtsi'", "'f\\u00FBnl\\u00F4k'", 
                            "'f\\u00EEk\\u00EE'", "'mokon'", "'f\\u00FBnb\\u00F4'", 
                            "'mot\\u00FBo'", "'mosk\\u00FBl'", "'mocko'", 
                            "'mozulis'", "'moz\\u00EEk\\u00F4'", "'motsi'", 
                            "'moz\\u00FBn'", "'monodo'", "'momok\\u00EE'", 
                            "'moxo'", "'mont\\u00FBksol'", "'mong\\u00F4'", 
                            "'m\\u00F4\\u00EE'", "'m\\u00F4k\\u00F4fo'", 
                            "'m\\u00F4t\\u00F4'", "'m\\u00F4kwon'", "'m\\u00F4towo'", 
                            "'m\\u00F4t\\u00EEf\\u00F4'", "'m\\u00F4c\\u00EEbo'", 
                            "'m\\u00F4tsil\\u00EA'", "'m\\u00F4f\\u00EE'", 
                            "'m\\u00F4n\\u00EEso'", "'mef\\u00FBs'", "'m\\u00EAtl\\u00EE\\u00F4s'", 
                            "'m\\u00EAd\\u00FBson'", "'m\\u00F4nbili'", 
                            "'m\\u00EAny\\u00FBu'", "'m\\u00EAn\\u00FBs'", 
                            "'mixofo'", "'m\\u00EAloc'", "'misli'", "'minyoto'", 
                            "'miny\\u00F4'", "'m\\u00EEo\\u00FB'", "'m\\u00EEkdol'", 
                            "'m\\u00EE\\u00EAbil'", "'m\\u00EEtet\\u00EAn'", 
                            "'m\\u00EEtmo'", "'m\\u00EEc\\u00EEn'", "'m\\u00EEencok'", 
                            "'m\\u00EEle'", "'m\\u00EEh\\u00FBon'", "'mu\\u00EEl\\u00F4'", 
                            "'m\\u00EEstu'", "'mun\\u00EE'", "'munyufo'", 
                            "'mutyu'", "'m\\u00FBun'", "'m\\u00FB\\u00EAs\\u00EE'", 
                            "'m\\u00FBk\\u00F4nun'", "'m\\u00FBt'", "'m\\u00FBhoyon'", 
                            "'m\\u00FBkno'", "'m\\u00FBstok\\u00EEn'", "'m\\u00FBx\\u00EE'", 
                            "'m\\u00FBf\\u00EA\\u00FB'", "'no\\u00EE'", 
                            "'no\\u00F4'", "'m\\u00FBl\\u00FB'", "'nokdo'", 
                            "'m\\u00FBnc\\u00FB'", "'m\\u00FBncot\\u00EE'", 
                            "'no\\u00FBku'", "'noc\\u00EEdo'", "'noz\\u00EE'", 
                            "'non'", "'nom\\u00FB'", "'nos\\u00F4'", "'nonk\\u00FB'", 
                            "'nodu'", "'noyo'", "'nonto'", "'ne\\u00EEgin'", 
                            "'n\\u00F4'", "'n\\u00F4kso'", "'n\\u00F4\\u00EElu'", 
                            "'nec'", "'nex\\u00EA'", "'nebu'", "'nendol'", 
                            "'n\\u00EAx\\u00F4d\\u00EE'", "'n\\u00EA\\u00F4s'", 
                            "'n\\u00EAl\\u00F4'", "'ni'", "'n\\u00EAnko'", 
                            "'nicu'", "'nikf\\u00FBl'", "'nisw\\u00EE'", 
                            "'niwos'", "'nix\\u00EEn'", "'nilol'", "'n\\u00EEo'", 
                            "'n\\u00EE\\u00F4k'", "'n\\u00EEecni'", "'n\\u00EEm\\u00FB'", 
                            "'nubuso'", "'nucoto'", "'nukul\\u00F4'", "'n\\u00EElt\\u00FBgu'", 
                            "'nungo'", "'num\\u00FBno'", "'nulto'", "'nul\\u00FBhu'", 
                            "'woh\\u00EE'", "'n\\u00FByo'", "'wok\\u00FBt'", 
                            "'n\\u00FBs'", "'nulun'", "'wod\\u00EEno'", 
                            "'wokto'", "'wofok'", "'wonk\\u00FBk'", "'wob\\u00EE'", 
                            "'woy\\u00FB'", "'woloko'", "'wedo'", "'wowo\\u00EA'", 
                            "'w\\u00EA\\u00EElun'", "'welt\\u00F4'", "'w\\u00F4lik'", 
                            "'w\\u00EAko'", "'w\\u00EAtod\\u00FB'", "'w\\u00EAk\\u00EAso'", 
                            "'w\\u00EAx\\u00F4n'", "'wikse'", "'win\\u00EEt'", 
                            "'w\\u00EAt\\u00FB'", "'wixon\\u00FB'", "'w\\u00EEx\\u00EAs'", 
                            "'w\\u00EEbolo'", "'w\\u00EEl\\u00EE'", "'w\\u00EAloi'", 
                            "'wu\\u00EEts\\u00EE'", "'wuktom\\u00FB'", "'wuto'", 
                            "'wutun'", "'w\\u00EEk'", "'w\\u00EEl\\u00FBwo'", 
                            "'wulus'", "'w\\u00FB\\u00F4t'", "'losol'", 
                            "'lohot'", "'loz\\u00EEd\\u00F4'", "'lobot\\u00F4l'", 
                            "'longi'", "'loz\\u00F4'", "'lon'", "'l\\u00F4\\u00EEc\\u00F4k'", 
                            "'lono'", "'l\\u00F4tfen'", "'lol\\u00FB'", 
                            "'londuluk'", "'l\\u00F4z\\u00EEc'", "'l\\u00F4c'", 
                            "'l\\u00F4nkin'", "'leknek'", "'lexetko'", "'leg\\u00EAf\\u00FB'", 
                            "'l\\u00EAf\\u00F4tol'", "'l\\u00EEonx\\u00EEn'", 
                            "'l\\u00EAkin'", "'l\\u00EEun'", "'l\\u00EE\\u00FBb\\u00EEt'", 
                            "'li'", "'l\\u00EE\\u00FBl\\u00EA'", "'l\\u00EEs'", 
                            "'l\\u00EEt\\u00F4'", "'l\\u00EEb\\u00FB'", 
                            "'l\\u00EEtiwe'", "'l\\u00EEsto'", "'luh\\u00FB'", 
                            "'l\\u00EEm\\u00EEen'", "'lufono'", "'l\\u00EEsmu'", 
                            "'l\\u00FB\\u00EEc\\u00FB'", "'lunsol'", "'l\\u00FBok'", 
                            "'l\\u00FBko'", "'l\\u00FBcik'", "'l\\u00FBcku'", 
                            "'yo\\u00FBmok'", "'yo\\u00FBt\\u00EE'", "'yok\\u00FBnt\\u00EEk'", 
                            "'l\\u00FBnt\\u00EE'", "'yosk\\u00EEnyo'", "'yog\\u00F4'", 
                            "'yosten'", "'yob\\u00EA'", "'yodo'", "'yof\\u00FBk'", 
                            "'y\\u00F4\\u00FBl\\u00EE'", "'yold\\u00FBn'", 
                            "'yonl\\u00FBs'", "'y\\u00F4\\u00FBx\\u00EEn'", 
                            "'y\\u00F4k'", "'y\\u00F4cno'", "'y\\u00F4n'", 
                            "'y\\u00EA'", "'y\\u00F4n\\u00EA'", "'yiny\\u00FBnc\\u00EE'", 
                            "'yins\\u00FBk'", "'yumon'", "'yund\\u00F4\\u00FB'", 
                            "'y\\u00FBkwo\\u00EE'", "'y\\u00FBnl\\u00F4n'" ];
    static symbolicNames = [ null, "WS", "Oiyo", "ProperNoun", "RationalNumber", 
                             "WholeNumber", "Comma", "Colon", "Period", 
                             "QuestionStart", "QuestionEnd", "QuotationStart", 
                             "QuotationEnd", "Outo", "Okulo", "Oudi", "Okot", 
                             "Oksios", "Oklumun", "Oksun", "Ogolol", "Ogoge", 
                             "Ocuo", "Otos", "Okoxu", "Ostok", "Odigon", 
                             "Osyen", "Ozuul", "Oboki", "Obo", "Obunyun", 
                             "Obulu", "Ofek", "Ofine", "Omulto", "Onkuol", 
                             "Ono", "Onkonu", "Oncemon", "Ondo", "Ongolo", 
                             "Ohel", "Oitun", "Onwoni", "Otsotot", "Onfibi", 
                             "Osole", "Oltu", "Osti", "Oldis", "Ofo", "Ozil", 
                             "Odon", "Obok", "Oni", "Et", "Eson", "Onton", 
                             "Onsu", "Eswen", "Ole", "Eloi", "En", "Eleke", 
                             "Eo", "Etso", "Elentet", "Elfu", "Ebol", "Eme", 
                             "Efun", "Itihos", "Enbukun", "Enkomon", "Eleo", 
                             "Isbulyol", "Eto", "Iciwu", "Icwon", "Istihol", 
                             "Iwote", "Isenso", "Infultin", "Isbonxu", "Isko", 
                             "Ixolo", "Imon", "Ibudu", "Isibo", "Ibuwe", 
                             "Ilik", "In", "Ibole", "Uklo", "Usundul", "Inboli", 
                             "Uskifo", "Ubolni", "Ile", "Ilxizuk", "Umo", 
                             "Ubenus", "Ufulit", "Undofol", "Unbol", "Uyo", 
                             "Ulyo", "Unon", "U", "Unbu", "Usen", "Ucumi", 
                             "Usowo", "Utok", "Umomi", "Usmon", "Uslek", 
                             "Unidu", "Un", "Unhilun", "Uncoi", "Ulkefi", 
                             "Ulgukin", "Ulonfu", "Ulogun", "Unfuno", "Hokiki", 
                             "Ulzo", "Hoi", "Hokoli", "Hokuxi", "Hosoun", 
                             "Hoxobe", "Hobiyo", "Homus", "Hondon", "Hoos", 
                             "Hosin", "Hondot", "Hofo", "Hoktun", "Hofezi", 
                             "Hon", "Honcou", "Holuk", "Holmo", "Hodoku", 
                             "Hefin", "Henonde", "Honyo", "Helgo", "Helxun", 
                             "Henelo", "Hitsu", "Hitnodet", "Hismo", "Hizon", 
                             "Hunzidu", "Huluko", "Huunhu", "Huke", "Hukun", 
                             "Husku", "Hustun", "Hudul", "Hunsik", "Huzon", 
                             "Hunsuon", "Hiyoli", "Huwuncul", "Huwu", "Hiskunco", 
                             "Hiklihos", "Hulodek", "Hulu", "Kocko", "Kon", 
                             "Kotilmok", "Kobut", "Kotonhon", "Konxo", "Ko", 
                             "Kontol", "Koi", "Konbokbo", "Konwo", "Koto", 
                             "Kolowu", "Kokoku", "Kos", "Koson", "Kotfusu", 
                             "Koxente", "Kotikol", "Konen", "Komu", "Kodus", 
                             "Kondodu", "Kontesto", "Kondonse", "Kolmudul", 
                             "Kosmo", "Konyec", "Konbo", "Kelo", "Ke", "Keskin", 
                             "Kexik", "Kelos", "Kiungo", "Kistose", "Kikolo", 
                             "Kioso", "Kiluku", "Kisko", "Kinoxi", "Kino", 
                             "Kiso", "Kinse", "Kuunme", "Kinyosel", "Kinlik", 
                             "Kildo", "Kiyo", "Kut", "Kutin", "Kududo", 
                             "Kukwon", "Kuon", "Kuocyo", "Kuu", "Kuonlon", 
                             "Kukmut", "Kusowi", "Kunonti", "Kuzou", "Kudu", 
                             "Kumun", "Kuoxi", "Kunhiun", "Kuncien", "Kungiyo", 
                             "Kunbi", "Kuldu", "Gosil", "Gos", "Kulunun", 
                             "Gomi", "Kuyo", "Goniso", "Gonbu", "Gonzil", 
                             "Gongoxi", "Golo", "Golfon", "Golbinus", "Golun", 
                             "Go", "Gocidon", "Gonyumon", "Gowo", "Goyu", 
                             "Gemolen", "Goluo", "Gelmis", "Gitno", "Geko", 
                             "Gion", "Gik", "Gito", "Gubuyo", "Gisgul", 
                             "Gufis", "Gueyu", "Guexo", "Gundole", "Gudolo", 
                             "Guso", "Gunokol", "Gumi", "Guwolo", "Gufoxe", 
                             "Gufio", "Gulu", "Tou", "Gulobi", "Totsi", 
                             "Touyen", "Tohilok", "Toswil", "Toliyo", "Towe", 
                             "Tonbokcut", "Tolen", "Toliko", "Tolxeto", 
                             "To", "Tocit", "Toncoi", "Tomos", "Tolki", 
                             "Toxutsi", "Tenkin", "Tetek", "Tigoyo", "Telo", 
                             "Tifulci", "Tonko", "Tiu", "Til", "Tiku", "Tukwos", 
                             "Tikel", "Tixo", "Tubo", "Titon", "Timiok", 
                             "Tuluti", "Tuek", "Tulkolyun", "Tut", "Tundu", 
                             "Tuu", "Tulokon", "Tulono", "Cok", "Comen", 
                             "Cokwoli", "Cokyen", "Conoi", "Cosni", "Conwebo", 
                             "Colot", "Coufon", "Conzodo", "Cot", "Counton", 
                             "Cocko", "Comel", "Conkok", "Centik", "Ceo", 
                             "Cenci", "Cenbo", "Cen", "Cixin", "Cihou", 
                             "Cifu", "Cizi", "Cifulo", "Cino", "Cingi", 
                             "Cinobu", "Ciwindi", "Cies", "Ci", "Cienxin", 
                             "Cihun", "Cikinil", "Cibon", "Cigilsu", "Citse", 
                             "Cinzon", "Cinli", "Cuskido", "Cukto", "Cunliu", 
                             "Cuncion", "Cuonwun", "Cunyu", "Cutne", "Culono", 
                             "Cuti", "Cui", "Cubu", "Cuxien", "Cudo", "Cufo", 
                             "Cunfu", "Cungo", "Cundol", "Culosun", "Sokofu", 
                             "Sohou", "Sokol", "Culci", "Sotnin", "Culul", 
                             "Soden", "Sodolun", "Socok", "Sodilu", "Sobole", 
                             "Sobuni", "Sobis", "Sonkon", "Somo", "Sofin", 
                             "Sonti", "Solilo", "Solwoc", "Sotun", "Sonsus", 
                             "Sohouk", "Sobo", "Solu", "Ses", "Sondonos", 
                             "Soltustik", "Senwic", "Seki", "Seloho", "Sedu", 
                             "Semoi", "Sekiton", "Selbo", "Siskin", "Senzo", 
                             "Sel", "Sityo", "Si", "Siokbi", "Sieto", "Sinsi", 
                             "Sikot", "Siufo", "Sinexis", "Sintokmo", "Sikin", 
                             "Suhot", "Sukyunik", "Sufoun", "Sumon", "Sundibot", 
                             "Sunbulno", "Sunyotni", "Suit", "Sutuo", "Suoxic", 
                             "Suson", "Xoinbo", "Subol", "Xohofec", "Sunbidu", 
                             "Suko", "Sun", "Xofo", "Xokulu", "Xobo", "Xontun", 
                             "Xobek", "Xokon", "Xonluk", "Xoboi", "Xomutlo", 
                             "Xe", "Xowose", "Xolu", "Xecinoc", "Xolxili", 
                             "Xemetsen", "Xon", "Xeti", "Xefizec", "Xingo", 
                             "Xifon", "Xentil", "Xiufu", "Xiulo", "Xiko", 
                             "Xidetli", "Xixulko", "Xisu", "Ximol", "Xincuon", 
                             "Ximu", "Xulmindo", "Xiwon", "Xiyocu", "Xuto", 
                             "Xuk", "Xusten", "Doi", "Xunyu", "Xuxok", "Doinbi", 
                             "Doho", "Dohil", "Doicel", "Dokdogo", "Dodou", 
                             "Doknu", "Dondun", "Dokcon", "Donus", "Dode", 
                             "Docui", "Dostoc", "Donuxin", "Deku", "Deko", 
                             "Des", "Den", "Di", "Dibo", "Dizel", "Detoi", 
                             "Denemek", "Dinci", "Didozu", "Dinzou", "Diyonde", 
                             "Duuhon", "Dile", "Dus", "Dukwelit", "Dumoko", 
                             "Duwoni", "Dui", "Duuncit", "Dusul", "Dubono", 
                             "Dustu", "Dungo", "Dundon", "Zoso", "Zomo", 
                             "Zoston", "Zomi", "Zonubi", "Zomuni", "Zonwul", 
                             "Zowo", "Zohit", "Zoi", "Zoloni", "Zohun", 
                             "Zoli", "Zogoc", "Zotesto", "Ze", "Zelen", 
                             "Zensi", "Zesto", "Zik", "Zizime", "Ziyon", 
                             "Zigil", "Zinkon", "Zicou", "Zixitu", "Zingu", 
                             "Ziziyo", "Ziwit", "Zuko", "Zusbot", "Zuwobu", 
                             "Zilyois", "Zungo", "Zuto", "Zuntulu", "Zuhu", 
                             "Zuyi", "Boifon", "Zunlo", "Boit", "Boholon", 
                             "Bogo", "Botuk", "Bodi", "Bostofis", "Boxo", 
                             "Boboun", "Bono", "Botyoto", "Bonoxo", "Bolimot", 
                             "Bongosi", "Bole", "Boyok", "Bomoge", "Bokofoc", 
                             "Bolce", "Boklon", "Bosol", "Bonti", "Bokbun", 
                             "Bolute", "Bolfele", "Betido", "Belisis", "Besol", 
                             "Belexu", "Beudo", "Beiku", "Besu", "Belete", 
                             "Besnehot", "Bindu", "Bi", "Binleo", "Bitun", 
                             "Bioli", "Bilit", "Bikonte", "Biomu", "Bicuon", 
                             "Biek", "Bit", "Bisu", "Bine", "Bibok", "Binhun", 
                             "Binton", "Buku", "Bucono", "Buswelin", "Buswen", 
                             "Bunxin", "Buyencok", "Bundu", "Bugot", "Buihi", 
                             "Busin", "Buslu", "Budogo", "Budiko", "Buzok", 
                             "Bumi", "Buntut", "Bunduki", "Fout", "Bulo", 
                             "Fohoso", "Bulusi", "Fos", "Bemon", "Bilus", 
                             "But", "Fonolon", "Foxo", "Fonmot", "Fonxin", 
                             "Folo", "Foko", "Fohon", "Fogicin", "Fodoloc", 
                             "Folni", "Fonfuk", "Folun", "Fecko", "Fikwun", 
                             "Felkono", "Felcin", "Fenuo", "Fildonbun", 
                             "Fiectu", "Fisun", "Fitikos", "Fiyuxit", "Fimosyos", 
                             "Ficwo", "Filo", "Fizi", "Fui", "Fiyen", "Fun", 
                             "Funsut", "Fulkoi", "Funlit", "Futsun", "Fuongok", 
                             "Fukuxi", "Fuus", "Fuxubin", "Funbetsi", "Funlok", 
                             "Fiki", "Mokon", "Funbo", "Motuo", "Moskul", 
                             "Mocko", "Mozulis", "Moziko", "Motsi", "Mozun", 
                             "Monodo", "Momoki", "Moxo", "Montuksol", "Mongo", 
                             "Moi", "Mokofo", "Moto", "Mokwon", "Motowo", 
                             "Motifo", "Mocibo", "Motsile", "Mofi", "Moniso", 
                             "Mefus", "Metlios", "Meduson", "Monbili", "Menyuu", 
                             "Menus", "Mixofo", "Meloc", "Misli", "Minyoto", 
                             "Minyo", "Miou", "Mikdol", "Miebil", "Miteten", 
                             "Mitmo", "Micin", "Miencok", "Mile", "Mihuon", 
                             "Muilo", "Mistu", "Muni", "Munyufo", "Mutyu", 
                             "Muun", "Muesi", "Mukonun", "Mut", "Muhoyon", 
                             "Mukno", "Mustokin", "Muxi", "Mufeu", "Noi", 
                             "Noo", "Mulu", "Nokdo", "Muncu", "Muncoti", 
                             "Nouku", "Nocido", "Nozi", "Non", "Nomu", "Noso", 
                             "Nonku", "Nodu", "Noyo", "Nonto", "Neigin", 
                             "No", "Nokso", "Noilu", "Nec", "Nexe", "Nebu", 
                             "Nendol", "Nexodi", "Neos", "Nelo", "Ni", "Nenko", 
                             "Nicu", "Nikful", "Niswi", "Niwos", "Nixin", 
                             "Nilol", "Nio", "Niok", "Niecni", "Nimu", "Nubuso", 
                             "Nucoto", "Nukulo", "Niltugu", "Nungo", "Numuno", 
                             "Nulto", "Nuluhu", "Wohi", "Nuyo", "Wokut", 
                             "Nus", "Nulun", "Wodino", "Wokto", "Wofok", 
                             "Wonkuk", "Wobi", "Woyu", "Woloko", "Wedo", 
                             "Wowoe", "Weilun", "Welto", "Wolik", "Weko", 
                             "Wetodu", "Wekeso", "Wexon", "Wikse", "Winit", 
                             "Wetu", "Wixonu", "Wixes", "Wibolo", "Wili", 
                             "Weloi", "Wuitsi", "Wuktomu", "Wuto", "Wutun", 
                             "Wik", "Wiluwo", "Wulus", "Wuot", "Losol", 
                             "Lohot", "Lozido", "Lobotol", "Longi", "Lozo", 
                             "Lon", "Loicok", "Lono", "Lotfen", "Lolu", 
                             "Londuluk", "Lozic", "Loc", "Lonkin", "Leknek", 
                             "Lexetko", "Legefu", "Lefotol", "Lionxin", 
                             "Lekin", "Liun", "Liubit", "Li", "Liule", "Lis", 
                             "Lito", "Libu", "Litiwe", "Listo", "Luhu", 
                             "Limien", "Lufono", "Lismu", "Luicu", "Lunsol", 
                             "Luok", "Luko", "Lucik", "Lucku", "Youmok", 
                             "Youti", "Yokuntik", "Lunti", "Yoskinyo", "Yogo", 
                             "Yosten", "Yobe", "Yodo", "Yofuk", "Youli", 
                             "Yoldun", "Yonlus", "Youxin", "Yok", "Yocno", 
                             "Yon", "Ye", "Yone", "Yinyunci", "Yinsuk", 
                             "Yumon", "Yundou", "Yukwoi", "Yunlon" ];
    static ruleNames = [ "postposition", "pronoun", "rawVerbs", "rawNouns", 
                         "rawModifiers", "connector" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = HisyeoWordParser.ruleNames;
        this.literalNames = HisyeoWordParser.literalNames;
        this.symbolicNames = HisyeoWordParser.symbolicNames;
    }



	postposition() {
	    let localctx = new PostpositionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, HisyeoWordParser.RULE_postposition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        _la = this._input.LA(1);
	        if(!(_la===182 || _la===356 || _la===541 || _la===641 || _la===829 || _la===831)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pronoun() {
	    let localctx = new PronounContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, HisyeoWordParser.RULE_pronoun);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        _la = this._input.LA(1);
	        if(!(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 8389121) !== 0) || _la===107 || _la===349 || _la===506 || _la===545 || ((((_la - 752)) & ~0x1f) === 0 && ((1 << (_la - 752)) & 18882561) !== 0) || _la===788)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rawVerbs() {
	    let localctx = new RawVerbsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, HisyeoWordParser.RULE_rawVerbs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        _la = this._input.LA(1);
	        if(!(((((_la - 13)) & ~0x1f) === 0 && ((1 << (_la - 13)) & 1317535883) !== 0) || ((((_la - 58)) & ~0x1f) === 0 && ((1 << (_la - 58)) & 673185793) !== 0) || ((((_la - 97)) & ~0x1f) === 0 && ((1 << (_la - 97)) & 9439233) !== 0) || ((((_la - 134)) & ~0x1f) === 0 && ((1 << (_la - 134)) & 939679809) !== 0) || ((((_la - 183)) & ~0x1f) === 0 && ((1 << (_la - 183)) & 4293009) !== 0) || ((((_la - 218)) & ~0x1f) === 0 && ((1 << (_la - 218)) & 1073742337) !== 0) || ((((_la - 250)) & ~0x1f) === 0 && ((1 << (_la - 250)) & 2147484305) !== 0) || ((((_la - 283)) & ~0x1f) === 0 && ((1 << (_la - 283)) & 1048737) !== 0) || ((((_la - 318)) & ~0x1f) === 0 && ((1 << (_la - 318)) & 1342259299) !== 0) || ((((_la - 358)) & ~0x1f) === 0 && ((1 << (_la - 358)) & 22570833) !== 0) || ((((_la - 391)) & ~0x1f) === 0 && ((1 << (_la - 391)) & 539000917) !== 0) || ((((_la - 426)) & ~0x1f) === 0 && ((1 << (_la - 426)) & 29892609) !== 0) || ((((_la - 464)) & ~0x1f) === 0 && ((1 << (_la - 464)) & 511983633) !== 0) || ((((_la - 498)) & ~0x1f) === 0 && ((1 << (_la - 498)) & 117490761) !== 0) || ((((_la - 534)) & ~0x1f) === 0 && ((1 << (_la - 534)) & 1686175745) !== 0) || ((((_la - 582)) & ~0x1f) === 0 && ((1 << (_la - 582)) & 67181837) !== 0) || ((((_la - 616)) & ~0x1f) === 0 && ((1 << (_la - 616)) & 2359301) !== 0) || ((((_la - 651)) & ~0x1f) === 0 && ((1 << (_la - 651)) & 1613284609) !== 0) || ((((_la - 687)) & ~0x1f) === 0 && ((1 << (_la - 687)) & 81925) !== 0) || ((((_la - 727)) & ~0x1f) === 0 && ((1 << (_la - 727)) & 327681) !== 0) || ((((_la - 770)) & ~0x1f) === 0 && ((1 << (_la - 770)) & 675283969) !== 0) || ((((_la - 802)) & ~0x1f) === 0 && ((1 << (_la - 802)) & 8394823) !== 0) || ((((_la - 834)) & ~0x1f) === 0 && ((1 << (_la - 834)) & 9438721) !== 0) || ((((_la - 868)) & ~0x1f) === 0 && ((1 << (_la - 868)) & 328705) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rawNouns() {
	    let localctx = new RawNounsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, HisyeoWordParser.RULE_rawNouns);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        _la = this._input.LA(1);
	        if(!(((((_la - 15)) & ~0x1f) === 0 && ((1 << (_la - 15)) & 3959473817) !== 0) || ((((_la - 49)) & ~0x1f) === 0 && ((1 << (_la - 49)) & 2744295433) !== 0) || ((((_la - 82)) & ~0x1f) === 0 && ((1 << (_la - 82)) & 1900693909) !== 0) || ((((_la - 116)) & ~0x1f) === 0 && ((1 << (_la - 116)) & 1980978945) !== 0) || ((((_la - 150)) & ~0x1f) === 0 && ((1 << (_la - 150)) & 58081625) !== 0) || ((((_la - 188)) & ~0x1f) === 0 && ((1 << (_la - 188)) & 685793555) !== 0) || ((((_la - 220)) & ~0x1f) === 0 && ((1 << (_la - 220)) & 2382292739) !== 0) || ((((_la - 253)) & ~0x1f) === 0 && ((1 << (_la - 253)) & 2850963969) !== 0) || ((((_la - 289)) & ~0x1f) === 0 && ((1 << (_la - 289)) & 503359741) !== 0) || ((((_la - 322)) & ~0x1f) === 0 && ((1 << (_la - 322)) & 1620115817) !== 0) || ((((_la - 354)) & ~0x1f) === 0 && ((1 << (_la - 354)) & 672172257) !== 0) || ((((_la - 386)) & ~0x1f) === 0 && ((1 << (_la - 386)) & 3138240527) !== 0) || ((((_la - 419)) & ~0x1f) === 0 && ((1 << (_la - 419)) & 321437297) !== 0) || ((((_la - 455)) & ~0x1f) === 0 && ((1 << (_la - 455)) & 3594144841) !== 0) || ((((_la - 495)) & ~0x1f) === 0 && ((1 << (_la - 495)) & 2193708085) !== 0) || ((((_la - 527)) & ~0x1f) === 0 && ((1 << (_la - 527)) & 894049895) !== 0) || ((((_la - 559)) & ~0x1f) === 0 && ((1 << (_la - 559)) & 1493201741) !== 0) || ((((_la - 595)) & ~0x1f) === 0 && ((1 << (_la - 595)) & 2185758933) !== 0) || ((((_la - 629)) & ~0x1f) === 0 && ((1 << (_la - 629)) & 160090191) !== 0) || ((((_la - 664)) & ~0x1f) === 0 && ((1 << (_la - 664)) & 2704563729) !== 0) || ((((_la - 696)) & ~0x1f) === 0 && ((1 << (_la - 696)) & 1136037901) !== 0) || ((((_la - 728)) & ~0x1f) === 0 && ((1 << (_la - 728)) & 1992100141) !== 0) || ((((_la - 767)) & ~0x1f) === 0 && ((1 << (_la - 767)) & 3105527857) !== 0) || ((((_la - 801)) & ~0x1f) === 0 && ((1 << (_la - 801)) & 2795472177) !== 0) || ((((_la - 836)) & ~0x1f) === 0 && ((1 << (_la - 836)) & 3529220103) !== 0) || ((((_la - 871)) & ~0x1f) === 0 && ((1 << (_la - 871)) & 18005) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rawModifiers() {
	    let localctx = new RawModifiersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, HisyeoWordParser.RULE_rawModifiers);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        _la = this._input.LA(1);
	        if(!(((((_la - 17)) & ~0x1f) === 0 && ((1 << (_la - 17)) & 3221636177) !== 0) || ((((_la - 53)) & ~0x1f) === 0 && ((1 << (_la - 53)) & 1355169795) !== 0) || ((((_la - 88)) & ~0x1f) === 0 && ((1 << (_la - 88)) & 1308808385) !== 0) || ((((_la - 121)) & ~0x1f) === 0 && ((1 << (_la - 121)) & 2416395335) !== 0) || ((((_la - 155)) & ~0x1f) === 0 && ((1 << (_la - 155)) & 3349433397) !== 0) || ((((_la - 193)) & ~0x1f) === 0 && ((1 << (_la - 193)) & 3770207383) !== 0) || ((((_la - 226)) & ~0x1f) === 0 && ((1 << (_la - 226)) & 1686635585) !== 0) || ((((_la - 258)) & ~0x1f) === 0 && ((1 << (_la - 258)) & 808488173) !== 0) || ((((_la - 298)) & ~0x1f) === 0 && ((1 << (_la - 298)) & 2428544651) !== 0) || ((((_la - 331)) & ~0x1f) === 0 && ((1 << (_la - 331)) & 88618869) !== 0) || ((((_la - 363)) & ~0x1f) === 0 && ((1 << (_la - 363)) & 2824942721) !== 0) || ((((_la - 396)) & ~0x1f) === 0 && ((1 << (_la - 396)) & 2219847821) !== 0) || ((((_la - 433)) & ~0x1f) === 0 && ((1 << (_la - 433)) & 758383389) !== 0) || ((((_la - 467)) & ~0x1f) === 0 && ((1 << (_la - 467)) & 740299865) !== 0) || ((((_la - 510)) & ~0x1f) === 0 && ((1 << (_la - 510)) & 36735057) !== 0) || ((((_la - 542)) & ~0x1f) === 0 && ((1 << (_la - 542)) & 402723907) !== 0) || ((((_la - 574)) & ~0x1f) === 0 && ((1 << (_la - 574)) & 3225567455) !== 0) || ((((_la - 607)) & ~0x1f) === 0 && ((1 << (_la - 607)) & 2216153449) !== 0) || ((((_la - 639)) & ~0x1f) === 0 && ((1 << (_la - 639)) & 1101892873) !== 0) || ((((_la - 671)) & ~0x1f) === 0 && ((1 << (_la - 671)) & 2755170625) !== 0) || ((((_la - 704)) & ~0x1f) === 0 && ((1 << (_la - 704)) & 3258730575) !== 0) || ((((_la - 737)) & ~0x1f) === 0 && ((1 << (_la - 737)) & 2411987001) !== 0) || ((((_la - 774)) & ~0x1f) === 0 && ((1 << (_la - 774)) & 67734155) !== 0) || ((((_la - 807)) & ~0x1f) === 0 && ((1 << (_la - 807)) & 335642921) !== 0) || ((((_la - 839)) & ~0x1f) === 0 && ((1 << (_la - 839)) & 1152387975) !== 0) || ((((_la - 872)) & ~0x1f) === 0 && ((1 << (_la - 872)) & 3077) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	connector() {
	    let localctx = new ConnectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, HisyeoWordParser.RULE_connector);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        _la = this._input.LA(1);
	        if(!(_la===63 || _la===119 || _la===611 || _la===842 || _la===870)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

HisyeoWordParser.EOF = antlr4.Token.EOF;
HisyeoWordParser.WS = 1;
HisyeoWordParser.Oiyo = 2;
HisyeoWordParser.ProperNoun = 3;
HisyeoWordParser.RationalNumber = 4;
HisyeoWordParser.WholeNumber = 5;
HisyeoWordParser.Comma = 6;
HisyeoWordParser.Colon = 7;
HisyeoWordParser.Period = 8;
HisyeoWordParser.QuestionStart = 9;
HisyeoWordParser.QuestionEnd = 10;
HisyeoWordParser.QuotationStart = 11;
HisyeoWordParser.QuotationEnd = 12;
HisyeoWordParser.Outo = 13;
HisyeoWordParser.Okulo = 14;
HisyeoWordParser.Oudi = 15;
HisyeoWordParser.Okot = 16;
HisyeoWordParser.Oksios = 17;
HisyeoWordParser.Oklumun = 18;
HisyeoWordParser.Oksun = 19;
HisyeoWordParser.Ogolol = 20;
HisyeoWordParser.Ogoge = 21;
HisyeoWordParser.Ocuo = 22;
HisyeoWordParser.Otos = 23;
HisyeoWordParser.Okoxu = 24;
HisyeoWordParser.Ostok = 25;
HisyeoWordParser.Odigon = 26;
HisyeoWordParser.Osyen = 27;
HisyeoWordParser.Ozuul = 28;
HisyeoWordParser.Oboki = 29;
HisyeoWordParser.Obo = 30;
HisyeoWordParser.Obunyun = 31;
HisyeoWordParser.Obulu = 32;
HisyeoWordParser.Ofek = 33;
HisyeoWordParser.Ofine = 34;
HisyeoWordParser.Omulto = 35;
HisyeoWordParser.Onkuol = 36;
HisyeoWordParser.Ono = 37;
HisyeoWordParser.Onkonu = 38;
HisyeoWordParser.Oncemon = 39;
HisyeoWordParser.Ondo = 40;
HisyeoWordParser.Ongolo = 41;
HisyeoWordParser.Ohel = 42;
HisyeoWordParser.Oitun = 43;
HisyeoWordParser.Onwoni = 44;
HisyeoWordParser.Otsotot = 45;
HisyeoWordParser.Onfibi = 46;
HisyeoWordParser.Osole = 47;
HisyeoWordParser.Oltu = 48;
HisyeoWordParser.Osti = 49;
HisyeoWordParser.Oldis = 50;
HisyeoWordParser.Ofo = 51;
HisyeoWordParser.Ozil = 52;
HisyeoWordParser.Odon = 53;
HisyeoWordParser.Obok = 54;
HisyeoWordParser.Oni = 55;
HisyeoWordParser.Et = 56;
HisyeoWordParser.Eson = 57;
HisyeoWordParser.Onton = 58;
HisyeoWordParser.Onsu = 59;
HisyeoWordParser.Eswen = 60;
HisyeoWordParser.Ole = 61;
HisyeoWordParser.Eloi = 62;
HisyeoWordParser.En = 63;
HisyeoWordParser.Eleke = 64;
HisyeoWordParser.Eo = 65;
HisyeoWordParser.Etso = 66;
HisyeoWordParser.Elentet = 67;
HisyeoWordParser.Elfu = 68;
HisyeoWordParser.Ebol = 69;
HisyeoWordParser.Eme = 70;
HisyeoWordParser.Efun = 71;
HisyeoWordParser.Itihos = 72;
HisyeoWordParser.Enbukun = 73;
HisyeoWordParser.Enkomon = 74;
HisyeoWordParser.Eleo = 75;
HisyeoWordParser.Isbulyol = 76;
HisyeoWordParser.Eto = 77;
HisyeoWordParser.Iciwu = 78;
HisyeoWordParser.Icwon = 79;
HisyeoWordParser.Istihol = 80;
HisyeoWordParser.Iwote = 81;
HisyeoWordParser.Isenso = 82;
HisyeoWordParser.Infultin = 83;
HisyeoWordParser.Isbonxu = 84;
HisyeoWordParser.Isko = 85;
HisyeoWordParser.Ixolo = 86;
HisyeoWordParser.Imon = 87;
HisyeoWordParser.Ibudu = 88;
HisyeoWordParser.Isibo = 89;
HisyeoWordParser.Ibuwe = 90;
HisyeoWordParser.Ilik = 91;
HisyeoWordParser.In = 92;
HisyeoWordParser.Ibole = 93;
HisyeoWordParser.Uklo = 94;
HisyeoWordParser.Usundul = 95;
HisyeoWordParser.Inboli = 96;
HisyeoWordParser.Uskifo = 97;
HisyeoWordParser.Ubolni = 98;
HisyeoWordParser.Ile = 99;
HisyeoWordParser.Ilxizuk = 100;
HisyeoWordParser.Umo = 101;
HisyeoWordParser.Ubenus = 102;
HisyeoWordParser.Ufulit = 103;
HisyeoWordParser.Undofol = 104;
HisyeoWordParser.Unbol = 105;
HisyeoWordParser.Uyo = 106;
HisyeoWordParser.Ulyo = 107;
HisyeoWordParser.Unon = 108;
HisyeoWordParser.U = 109;
HisyeoWordParser.Unbu = 110;
HisyeoWordParser.Usen = 111;
HisyeoWordParser.Ucumi = 112;
HisyeoWordParser.Usowo = 113;
HisyeoWordParser.Utok = 114;
HisyeoWordParser.Umomi = 115;
HisyeoWordParser.Usmon = 116;
HisyeoWordParser.Uslek = 117;
HisyeoWordParser.Unidu = 118;
HisyeoWordParser.Un = 119;
HisyeoWordParser.Unhilun = 120;
HisyeoWordParser.Uncoi = 121;
HisyeoWordParser.Ulkefi = 122;
HisyeoWordParser.Ulgukin = 123;
HisyeoWordParser.Ulonfu = 124;
HisyeoWordParser.Ulogun = 125;
HisyeoWordParser.Unfuno = 126;
HisyeoWordParser.Hokiki = 127;
HisyeoWordParser.Ulzo = 128;
HisyeoWordParser.Hoi = 129;
HisyeoWordParser.Hokoli = 130;
HisyeoWordParser.Hokuxi = 131;
HisyeoWordParser.Hosoun = 132;
HisyeoWordParser.Hoxobe = 133;
HisyeoWordParser.Hobiyo = 134;
HisyeoWordParser.Homus = 135;
HisyeoWordParser.Hondon = 136;
HisyeoWordParser.Hoos = 137;
HisyeoWordParser.Hosin = 138;
HisyeoWordParser.Hondot = 139;
HisyeoWordParser.Hofo = 140;
HisyeoWordParser.Hoktun = 141;
HisyeoWordParser.Hofezi = 142;
HisyeoWordParser.Hon = 143;
HisyeoWordParser.Honcou = 144;
HisyeoWordParser.Holuk = 145;
HisyeoWordParser.Holmo = 146;
HisyeoWordParser.Hodoku = 147;
HisyeoWordParser.Hefin = 148;
HisyeoWordParser.Henonde = 149;
HisyeoWordParser.Honyo = 150;
HisyeoWordParser.Helgo = 151;
HisyeoWordParser.Helxun = 152;
HisyeoWordParser.Henelo = 153;
HisyeoWordParser.Hitsu = 154;
HisyeoWordParser.Hitnodet = 155;
HisyeoWordParser.Hismo = 156;
HisyeoWordParser.Hizon = 157;
HisyeoWordParser.Hunzidu = 158;
HisyeoWordParser.Huluko = 159;
HisyeoWordParser.Huunhu = 160;
HisyeoWordParser.Huke = 161;
HisyeoWordParser.Hukun = 162;
HisyeoWordParser.Husku = 163;
HisyeoWordParser.Hustun = 164;
HisyeoWordParser.Hudul = 165;
HisyeoWordParser.Hunsik = 166;
HisyeoWordParser.Huzon = 167;
HisyeoWordParser.Hunsuon = 168;
HisyeoWordParser.Hiyoli = 169;
HisyeoWordParser.Huwuncul = 170;
HisyeoWordParser.Huwu = 171;
HisyeoWordParser.Hiskunco = 172;
HisyeoWordParser.Hiklihos = 173;
HisyeoWordParser.Hulodek = 174;
HisyeoWordParser.Hulu = 175;
HisyeoWordParser.Kocko = 176;
HisyeoWordParser.Kon = 177;
HisyeoWordParser.Kotilmok = 178;
HisyeoWordParser.Kobut = 179;
HisyeoWordParser.Kotonhon = 180;
HisyeoWordParser.Konxo = 181;
HisyeoWordParser.Ko = 182;
HisyeoWordParser.Kontol = 183;
HisyeoWordParser.Koi = 184;
HisyeoWordParser.Konbokbo = 185;
HisyeoWordParser.Konwo = 186;
HisyeoWordParser.Koto = 187;
HisyeoWordParser.Kolowu = 188;
HisyeoWordParser.Kokoku = 189;
HisyeoWordParser.Kos = 190;
HisyeoWordParser.Koson = 191;
HisyeoWordParser.Kotfusu = 192;
HisyeoWordParser.Koxente = 193;
HisyeoWordParser.Kotikol = 194;
HisyeoWordParser.Konen = 195;
HisyeoWordParser.Komu = 196;
HisyeoWordParser.Kodus = 197;
HisyeoWordParser.Kondodu = 198;
HisyeoWordParser.Kontesto = 199;
HisyeoWordParser.Kondonse = 200;
HisyeoWordParser.Kolmudul = 201;
HisyeoWordParser.Kosmo = 202;
HisyeoWordParser.Konyec = 203;
HisyeoWordParser.Konbo = 204;
HisyeoWordParser.Kelo = 205;
HisyeoWordParser.Ke = 206;
HisyeoWordParser.Keskin = 207;
HisyeoWordParser.Kexik = 208;
HisyeoWordParser.Kelos = 209;
HisyeoWordParser.Kiungo = 210;
HisyeoWordParser.Kistose = 211;
HisyeoWordParser.Kikolo = 212;
HisyeoWordParser.Kioso = 213;
HisyeoWordParser.Kiluku = 214;
HisyeoWordParser.Kisko = 215;
HisyeoWordParser.Kinoxi = 216;
HisyeoWordParser.Kino = 217;
HisyeoWordParser.Kiso = 218;
HisyeoWordParser.Kinse = 219;
HisyeoWordParser.Kuunme = 220;
HisyeoWordParser.Kinyosel = 221;
HisyeoWordParser.Kinlik = 222;
HisyeoWordParser.Kildo = 223;
HisyeoWordParser.Kiyo = 224;
HisyeoWordParser.Kut = 225;
HisyeoWordParser.Kutin = 226;
HisyeoWordParser.Kududo = 227;
HisyeoWordParser.Kukwon = 228;
HisyeoWordParser.Kuon = 229;
HisyeoWordParser.Kuocyo = 230;
HisyeoWordParser.Kuu = 231;
HisyeoWordParser.Kuonlon = 232;
HisyeoWordParser.Kukmut = 233;
HisyeoWordParser.Kusowi = 234;
HisyeoWordParser.Kunonti = 235;
HisyeoWordParser.Kuzou = 236;
HisyeoWordParser.Kudu = 237;
HisyeoWordParser.Kumun = 238;
HisyeoWordParser.Kuoxi = 239;
HisyeoWordParser.Kunhiun = 240;
HisyeoWordParser.Kuncien = 241;
HisyeoWordParser.Kungiyo = 242;
HisyeoWordParser.Kunbi = 243;
HisyeoWordParser.Kuldu = 244;
HisyeoWordParser.Gosil = 245;
HisyeoWordParser.Gos = 246;
HisyeoWordParser.Kulunun = 247;
HisyeoWordParser.Gomi = 248;
HisyeoWordParser.Kuyo = 249;
HisyeoWordParser.Goniso = 250;
HisyeoWordParser.Gonbu = 251;
HisyeoWordParser.Gonzil = 252;
HisyeoWordParser.Gongoxi = 253;
HisyeoWordParser.Golo = 254;
HisyeoWordParser.Golfon = 255;
HisyeoWordParser.Golbinus = 256;
HisyeoWordParser.Golun = 257;
HisyeoWordParser.Go = 258;
HisyeoWordParser.Gocidon = 259;
HisyeoWordParser.Gonyumon = 260;
HisyeoWordParser.Gowo = 261;
HisyeoWordParser.Goyu = 262;
HisyeoWordParser.Gemolen = 263;
HisyeoWordParser.Goluo = 264;
HisyeoWordParser.Gelmis = 265;
HisyeoWordParser.Gitno = 266;
HisyeoWordParser.Geko = 267;
HisyeoWordParser.Gion = 268;
HisyeoWordParser.Gik = 269;
HisyeoWordParser.Gito = 270;
HisyeoWordParser.Gubuyo = 271;
HisyeoWordParser.Gisgul = 272;
HisyeoWordParser.Gufis = 273;
HisyeoWordParser.Gueyu = 274;
HisyeoWordParser.Guexo = 275;
HisyeoWordParser.Gundole = 276;
HisyeoWordParser.Gudolo = 277;
HisyeoWordParser.Guso = 278;
HisyeoWordParser.Gunokol = 279;
HisyeoWordParser.Gumi = 280;
HisyeoWordParser.Guwolo = 281;
HisyeoWordParser.Gufoxe = 282;
HisyeoWordParser.Gufio = 283;
HisyeoWordParser.Gulu = 284;
HisyeoWordParser.Tou = 285;
HisyeoWordParser.Gulobi = 286;
HisyeoWordParser.Totsi = 287;
HisyeoWordParser.Touyen = 288;
HisyeoWordParser.Tohilok = 289;
HisyeoWordParser.Toswil = 290;
HisyeoWordParser.Toliyo = 291;
HisyeoWordParser.Towe = 292;
HisyeoWordParser.Tonbokcut = 293;
HisyeoWordParser.Tolen = 294;
HisyeoWordParser.Toliko = 295;
HisyeoWordParser.Tolxeto = 296;
HisyeoWordParser.To = 297;
HisyeoWordParser.Tocit = 298;
HisyeoWordParser.Toncoi = 299;
HisyeoWordParser.Tomos = 300;
HisyeoWordParser.Tolki = 301;
HisyeoWordParser.Toxutsi = 302;
HisyeoWordParser.Tenkin = 303;
HisyeoWordParser.Tetek = 304;
HisyeoWordParser.Tigoyo = 305;
HisyeoWordParser.Telo = 306;
HisyeoWordParser.Tifulci = 307;
HisyeoWordParser.Tonko = 308;
HisyeoWordParser.Tiu = 309;
HisyeoWordParser.Til = 310;
HisyeoWordParser.Tiku = 311;
HisyeoWordParser.Tukwos = 312;
HisyeoWordParser.Tikel = 313;
HisyeoWordParser.Tixo = 314;
HisyeoWordParser.Tubo = 315;
HisyeoWordParser.Titon = 316;
HisyeoWordParser.Timiok = 317;
HisyeoWordParser.Tuluti = 318;
HisyeoWordParser.Tuek = 319;
HisyeoWordParser.Tulkolyun = 320;
HisyeoWordParser.Tut = 321;
HisyeoWordParser.Tundu = 322;
HisyeoWordParser.Tuu = 323;
HisyeoWordParser.Tulokon = 324;
HisyeoWordParser.Tulono = 325;
HisyeoWordParser.Cok = 326;
HisyeoWordParser.Comen = 327;
HisyeoWordParser.Cokwoli = 328;
HisyeoWordParser.Cokyen = 329;
HisyeoWordParser.Conoi = 330;
HisyeoWordParser.Cosni = 331;
HisyeoWordParser.Conwebo = 332;
HisyeoWordParser.Colot = 333;
HisyeoWordParser.Coufon = 334;
HisyeoWordParser.Conzodo = 335;
HisyeoWordParser.Cot = 336;
HisyeoWordParser.Counton = 337;
HisyeoWordParser.Cocko = 338;
HisyeoWordParser.Comel = 339;
HisyeoWordParser.Conkok = 340;
HisyeoWordParser.Centik = 341;
HisyeoWordParser.Ceo = 342;
HisyeoWordParser.Cenci = 343;
HisyeoWordParser.Cenbo = 344;
HisyeoWordParser.Cen = 345;
HisyeoWordParser.Cixin = 346;
HisyeoWordParser.Cihou = 347;
HisyeoWordParser.Cifu = 348;
HisyeoWordParser.Cizi = 349;
HisyeoWordParser.Cifulo = 350;
HisyeoWordParser.Cino = 351;
HisyeoWordParser.Cingi = 352;
HisyeoWordParser.Cinobu = 353;
HisyeoWordParser.Ciwindi = 354;
HisyeoWordParser.Cies = 355;
HisyeoWordParser.Ci = 356;
HisyeoWordParser.Cienxin = 357;
HisyeoWordParser.Cihun = 358;
HisyeoWordParser.Cikinil = 359;
HisyeoWordParser.Cibon = 360;
HisyeoWordParser.Cigilsu = 361;
HisyeoWordParser.Citse = 362;
HisyeoWordParser.Cinzon = 363;
HisyeoWordParser.Cinli = 364;
HisyeoWordParser.Cuskido = 365;
HisyeoWordParser.Cukto = 366;
HisyeoWordParser.Cunliu = 367;
HisyeoWordParser.Cuncion = 368;
HisyeoWordParser.Cuonwun = 369;
HisyeoWordParser.Cunyu = 370;
HisyeoWordParser.Cutne = 371;
HisyeoWordParser.Culono = 372;
HisyeoWordParser.Cuti = 373;
HisyeoWordParser.Cui = 374;
HisyeoWordParser.Cubu = 375;
HisyeoWordParser.Cuxien = 376;
HisyeoWordParser.Cudo = 377;
HisyeoWordParser.Cufo = 378;
HisyeoWordParser.Cunfu = 379;
HisyeoWordParser.Cungo = 380;
HisyeoWordParser.Cundol = 381;
HisyeoWordParser.Culosun = 382;
HisyeoWordParser.Sokofu = 383;
HisyeoWordParser.Sohou = 384;
HisyeoWordParser.Sokol = 385;
HisyeoWordParser.Culci = 386;
HisyeoWordParser.Sotnin = 387;
HisyeoWordParser.Culul = 388;
HisyeoWordParser.Soden = 389;
HisyeoWordParser.Sodolun = 390;
HisyeoWordParser.Socok = 391;
HisyeoWordParser.Sodilu = 392;
HisyeoWordParser.Sobole = 393;
HisyeoWordParser.Sobuni = 394;
HisyeoWordParser.Sobis = 395;
HisyeoWordParser.Sonkon = 396;
HisyeoWordParser.Somo = 397;
HisyeoWordParser.Sofin = 398;
HisyeoWordParser.Sonti = 399;
HisyeoWordParser.Solilo = 400;
HisyeoWordParser.Solwoc = 401;
HisyeoWordParser.Sotun = 402;
HisyeoWordParser.Sonsus = 403;
HisyeoWordParser.Sohouk = 404;
HisyeoWordParser.Sobo = 405;
HisyeoWordParser.Solu = 406;
HisyeoWordParser.Ses = 407;
HisyeoWordParser.Sondonos = 408;
HisyeoWordParser.Soltustik = 409;
HisyeoWordParser.Senwic = 410;
HisyeoWordParser.Seki = 411;
HisyeoWordParser.Seloho = 412;
HisyeoWordParser.Sedu = 413;
HisyeoWordParser.Semoi = 414;
HisyeoWordParser.Sekiton = 415;
HisyeoWordParser.Selbo = 416;
HisyeoWordParser.Siskin = 417;
HisyeoWordParser.Senzo = 418;
HisyeoWordParser.Sel = 419;
HisyeoWordParser.Sityo = 420;
HisyeoWordParser.Si = 421;
HisyeoWordParser.Siokbi = 422;
HisyeoWordParser.Sieto = 423;
HisyeoWordParser.Sinsi = 424;
HisyeoWordParser.Sikot = 425;
HisyeoWordParser.Siufo = 426;
HisyeoWordParser.Sinexis = 427;
HisyeoWordParser.Sintokmo = 428;
HisyeoWordParser.Sikin = 429;
HisyeoWordParser.Suhot = 430;
HisyeoWordParser.Sukyunik = 431;
HisyeoWordParser.Sufoun = 432;
HisyeoWordParser.Sumon = 433;
HisyeoWordParser.Sundibot = 434;
HisyeoWordParser.Sunbulno = 435;
HisyeoWordParser.Sunyotni = 436;
HisyeoWordParser.Suit = 437;
HisyeoWordParser.Sutuo = 438;
HisyeoWordParser.Suoxic = 439;
HisyeoWordParser.Suson = 440;
HisyeoWordParser.Xoinbo = 441;
HisyeoWordParser.Subol = 442;
HisyeoWordParser.Xohofec = 443;
HisyeoWordParser.Sunbidu = 444;
HisyeoWordParser.Suko = 445;
HisyeoWordParser.Sun = 446;
HisyeoWordParser.Xofo = 447;
HisyeoWordParser.Xokulu = 448;
HisyeoWordParser.Xobo = 449;
HisyeoWordParser.Xontun = 450;
HisyeoWordParser.Xobek = 451;
HisyeoWordParser.Xokon = 452;
HisyeoWordParser.Xonluk = 453;
HisyeoWordParser.Xoboi = 454;
HisyeoWordParser.Xomutlo = 455;
HisyeoWordParser.Xe = 456;
HisyeoWordParser.Xowose = 457;
HisyeoWordParser.Xolu = 458;
HisyeoWordParser.Xecinoc = 459;
HisyeoWordParser.Xolxili = 460;
HisyeoWordParser.Xemetsen = 461;
HisyeoWordParser.Xon = 462;
HisyeoWordParser.Xeti = 463;
HisyeoWordParser.Xefizec = 464;
HisyeoWordParser.Xingo = 465;
HisyeoWordParser.Xifon = 466;
HisyeoWordParser.Xentil = 467;
HisyeoWordParser.Xiufu = 468;
HisyeoWordParser.Xiulo = 469;
HisyeoWordParser.Xiko = 470;
HisyeoWordParser.Xidetli = 471;
HisyeoWordParser.Xixulko = 472;
HisyeoWordParser.Xisu = 473;
HisyeoWordParser.Ximol = 474;
HisyeoWordParser.Xincuon = 475;
HisyeoWordParser.Ximu = 476;
HisyeoWordParser.Xulmindo = 477;
HisyeoWordParser.Xiwon = 478;
HisyeoWordParser.Xiyocu = 479;
HisyeoWordParser.Xuto = 480;
HisyeoWordParser.Xuk = 481;
HisyeoWordParser.Xusten = 482;
HisyeoWordParser.Doi = 483;
HisyeoWordParser.Xunyu = 484;
HisyeoWordParser.Xuxok = 485;
HisyeoWordParser.Doinbi = 486;
HisyeoWordParser.Doho = 487;
HisyeoWordParser.Dohil = 488;
HisyeoWordParser.Doicel = 489;
HisyeoWordParser.Dokdogo = 490;
HisyeoWordParser.Dodou = 491;
HisyeoWordParser.Doknu = 492;
HisyeoWordParser.Dondun = 493;
HisyeoWordParser.Dokcon = 494;
HisyeoWordParser.Donus = 495;
HisyeoWordParser.Dode = 496;
HisyeoWordParser.Docui = 497;
HisyeoWordParser.Dostoc = 498;
HisyeoWordParser.Donuxin = 499;
HisyeoWordParser.Deku = 500;
HisyeoWordParser.Deko = 501;
HisyeoWordParser.Des = 502;
HisyeoWordParser.Den = 503;
HisyeoWordParser.Di = 504;
HisyeoWordParser.Dibo = 505;
HisyeoWordParser.Dizel = 506;
HisyeoWordParser.Detoi = 507;
HisyeoWordParser.Denemek = 508;
HisyeoWordParser.Dinci = 509;
HisyeoWordParser.Didozu = 510;
HisyeoWordParser.Dinzou = 511;
HisyeoWordParser.Diyonde = 512;
HisyeoWordParser.Duuhon = 513;
HisyeoWordParser.Dile = 514;
HisyeoWordParser.Dus = 515;
HisyeoWordParser.Dukwelit = 516;
HisyeoWordParser.Dumoko = 517;
HisyeoWordParser.Duwoni = 518;
HisyeoWordParser.Dui = 519;
HisyeoWordParser.Duuncit = 520;
HisyeoWordParser.Dusul = 521;
HisyeoWordParser.Dubono = 522;
HisyeoWordParser.Dustu = 523;
HisyeoWordParser.Dungo = 524;
HisyeoWordParser.Dundon = 525;
HisyeoWordParser.Zoso = 526;
HisyeoWordParser.Zomo = 527;
HisyeoWordParser.Zoston = 528;
HisyeoWordParser.Zomi = 529;
HisyeoWordParser.Zonubi = 530;
HisyeoWordParser.Zomuni = 531;
HisyeoWordParser.Zonwul = 532;
HisyeoWordParser.Zowo = 533;
HisyeoWordParser.Zohit = 534;
HisyeoWordParser.Zoi = 535;
HisyeoWordParser.Zoloni = 536;
HisyeoWordParser.Zohun = 537;
HisyeoWordParser.Zoli = 538;
HisyeoWordParser.Zogoc = 539;
HisyeoWordParser.Zotesto = 540;
HisyeoWordParser.Ze = 541;
HisyeoWordParser.Zelen = 542;
HisyeoWordParser.Zensi = 543;
HisyeoWordParser.Zesto = 544;
HisyeoWordParser.Zik = 545;
HisyeoWordParser.Zizime = 546;
HisyeoWordParser.Ziyon = 547;
HisyeoWordParser.Zigil = 548;
HisyeoWordParser.Zinkon = 549;
HisyeoWordParser.Zicou = 550;
HisyeoWordParser.Zixitu = 551;
HisyeoWordParser.Zingu = 552;
HisyeoWordParser.Ziziyo = 553;
HisyeoWordParser.Ziwit = 554;
HisyeoWordParser.Zuko = 555;
HisyeoWordParser.Zusbot = 556;
HisyeoWordParser.Zuwobu = 557;
HisyeoWordParser.Zilyois = 558;
HisyeoWordParser.Zungo = 559;
HisyeoWordParser.Zuto = 560;
HisyeoWordParser.Zuntulu = 561;
HisyeoWordParser.Zuhu = 562;
HisyeoWordParser.Zuyi = 563;
HisyeoWordParser.Boifon = 564;
HisyeoWordParser.Zunlo = 565;
HisyeoWordParser.Boit = 566;
HisyeoWordParser.Boholon = 567;
HisyeoWordParser.Bogo = 568;
HisyeoWordParser.Botuk = 569;
HisyeoWordParser.Bodi = 570;
HisyeoWordParser.Bostofis = 571;
HisyeoWordParser.Boxo = 572;
HisyeoWordParser.Boboun = 573;
HisyeoWordParser.Bono = 574;
HisyeoWordParser.Botyoto = 575;
HisyeoWordParser.Bonoxo = 576;
HisyeoWordParser.Bolimot = 577;
HisyeoWordParser.Bongosi = 578;
HisyeoWordParser.Bole = 579;
HisyeoWordParser.Boyok = 580;
HisyeoWordParser.Bomoge = 581;
HisyeoWordParser.Bokofoc = 582;
HisyeoWordParser.Bolce = 583;
HisyeoWordParser.Boklon = 584;
HisyeoWordParser.Bosol = 585;
HisyeoWordParser.Bonti = 586;
HisyeoWordParser.Bokbun = 587;
HisyeoWordParser.Bolute = 588;
HisyeoWordParser.Bolfele = 589;
HisyeoWordParser.Betido = 590;
HisyeoWordParser.Belisis = 591;
HisyeoWordParser.Besol = 592;
HisyeoWordParser.Belexu = 593;
HisyeoWordParser.Beudo = 594;
HisyeoWordParser.Beiku = 595;
HisyeoWordParser.Besu = 596;
HisyeoWordParser.Belete = 597;
HisyeoWordParser.Besnehot = 598;
HisyeoWordParser.Bindu = 599;
HisyeoWordParser.Bi = 600;
HisyeoWordParser.Binleo = 601;
HisyeoWordParser.Bitun = 602;
HisyeoWordParser.Bioli = 603;
HisyeoWordParser.Bilit = 604;
HisyeoWordParser.Bikonte = 605;
HisyeoWordParser.Biomu = 606;
HisyeoWordParser.Bicuon = 607;
HisyeoWordParser.Biek = 608;
HisyeoWordParser.Bit = 609;
HisyeoWordParser.Bisu = 610;
HisyeoWordParser.Bine = 611;
HisyeoWordParser.Bibok = 612;
HisyeoWordParser.Binhun = 613;
HisyeoWordParser.Binton = 614;
HisyeoWordParser.Buku = 615;
HisyeoWordParser.Bucono = 616;
HisyeoWordParser.Buswelin = 617;
HisyeoWordParser.Buswen = 618;
HisyeoWordParser.Bunxin = 619;
HisyeoWordParser.Buyencok = 620;
HisyeoWordParser.Bundu = 621;
HisyeoWordParser.Bugot = 622;
HisyeoWordParser.Buihi = 623;
HisyeoWordParser.Busin = 624;
HisyeoWordParser.Buslu = 625;
HisyeoWordParser.Budogo = 626;
HisyeoWordParser.Budiko = 627;
HisyeoWordParser.Buzok = 628;
HisyeoWordParser.Bumi = 629;
HisyeoWordParser.Buntut = 630;
HisyeoWordParser.Bunduki = 631;
HisyeoWordParser.Fout = 632;
HisyeoWordParser.Bulo = 633;
HisyeoWordParser.Fohoso = 634;
HisyeoWordParser.Bulusi = 635;
HisyeoWordParser.Fos = 636;
HisyeoWordParser.Bemon = 637;
HisyeoWordParser.Bilus = 638;
HisyeoWordParser.But = 639;
HisyeoWordParser.Fonolon = 640;
HisyeoWordParser.Foxo = 641;
HisyeoWordParser.Fonmot = 642;
HisyeoWordParser.Fonxin = 643;
HisyeoWordParser.Folo = 644;
HisyeoWordParser.Foko = 645;
HisyeoWordParser.Fohon = 646;
HisyeoWordParser.Fogicin = 647;
HisyeoWordParser.Fodoloc = 648;
HisyeoWordParser.Folni = 649;
HisyeoWordParser.Fonfuk = 650;
HisyeoWordParser.Folun = 651;
HisyeoWordParser.Fecko = 652;
HisyeoWordParser.Fikwun = 653;
HisyeoWordParser.Felkono = 654;
HisyeoWordParser.Felcin = 655;
HisyeoWordParser.Fenuo = 656;
HisyeoWordParser.Fildonbun = 657;
HisyeoWordParser.Fiectu = 658;
HisyeoWordParser.Fisun = 659;
HisyeoWordParser.Fitikos = 660;
HisyeoWordParser.Fiyuxit = 661;
HisyeoWordParser.Fimosyos = 662;
HisyeoWordParser.Ficwo = 663;
HisyeoWordParser.Filo = 664;
HisyeoWordParser.Fizi = 665;
HisyeoWordParser.Fui = 666;
HisyeoWordParser.Fiyen = 667;
HisyeoWordParser.Fun = 668;
HisyeoWordParser.Funsut = 669;
HisyeoWordParser.Fulkoi = 670;
HisyeoWordParser.Funlit = 671;
HisyeoWordParser.Futsun = 672;
HisyeoWordParser.Fuongok = 673;
HisyeoWordParser.Fukuxi = 674;
HisyeoWordParser.Fuus = 675;
HisyeoWordParser.Fuxubin = 676;
HisyeoWordParser.Funbetsi = 677;
HisyeoWordParser.Funlok = 678;
HisyeoWordParser.Fiki = 679;
HisyeoWordParser.Mokon = 680;
HisyeoWordParser.Funbo = 681;
HisyeoWordParser.Motuo = 682;
HisyeoWordParser.Moskul = 683;
HisyeoWordParser.Mocko = 684;
HisyeoWordParser.Mozulis = 685;
HisyeoWordParser.Moziko = 686;
HisyeoWordParser.Motsi = 687;
HisyeoWordParser.Mozun = 688;
HisyeoWordParser.Monodo = 689;
HisyeoWordParser.Momoki = 690;
HisyeoWordParser.Moxo = 691;
HisyeoWordParser.Montuksol = 692;
HisyeoWordParser.Mongo = 693;
HisyeoWordParser.Moi = 694;
HisyeoWordParser.Mokofo = 695;
HisyeoWordParser.Moto = 696;
HisyeoWordParser.Mokwon = 697;
HisyeoWordParser.Motowo = 698;
HisyeoWordParser.Motifo = 699;
HisyeoWordParser.Mocibo = 700;
HisyeoWordParser.Motsile = 701;
HisyeoWordParser.Mofi = 702;
HisyeoWordParser.Moniso = 703;
HisyeoWordParser.Mefus = 704;
HisyeoWordParser.Metlios = 705;
HisyeoWordParser.Meduson = 706;
HisyeoWordParser.Monbili = 707;
HisyeoWordParser.Menyuu = 708;
HisyeoWordParser.Menus = 709;
HisyeoWordParser.Mixofo = 710;
HisyeoWordParser.Meloc = 711;
HisyeoWordParser.Misli = 712;
HisyeoWordParser.Minyoto = 713;
HisyeoWordParser.Minyo = 714;
HisyeoWordParser.Miou = 715;
HisyeoWordParser.Mikdol = 716;
HisyeoWordParser.Miebil = 717;
HisyeoWordParser.Miteten = 718;
HisyeoWordParser.Mitmo = 719;
HisyeoWordParser.Micin = 720;
HisyeoWordParser.Miencok = 721;
HisyeoWordParser.Mile = 722;
HisyeoWordParser.Mihuon = 723;
HisyeoWordParser.Muilo = 724;
HisyeoWordParser.Mistu = 725;
HisyeoWordParser.Muni = 726;
HisyeoWordParser.Munyufo = 727;
HisyeoWordParser.Mutyu = 728;
HisyeoWordParser.Muun = 729;
HisyeoWordParser.Muesi = 730;
HisyeoWordParser.Mukonun = 731;
HisyeoWordParser.Mut = 732;
HisyeoWordParser.Muhoyon = 733;
HisyeoWordParser.Mukno = 734;
HisyeoWordParser.Mustokin = 735;
HisyeoWordParser.Muxi = 736;
HisyeoWordParser.Mufeu = 737;
HisyeoWordParser.Noi = 738;
HisyeoWordParser.Noo = 739;
HisyeoWordParser.Mulu = 740;
HisyeoWordParser.Nokdo = 741;
HisyeoWordParser.Muncu = 742;
HisyeoWordParser.Muncoti = 743;
HisyeoWordParser.Nouku = 744;
HisyeoWordParser.Nocido = 745;
HisyeoWordParser.Nozi = 746;
HisyeoWordParser.Non = 747;
HisyeoWordParser.Nomu = 748;
HisyeoWordParser.Noso = 749;
HisyeoWordParser.Nonku = 750;
HisyeoWordParser.Nodu = 751;
HisyeoWordParser.Noyo = 752;
HisyeoWordParser.Nonto = 753;
HisyeoWordParser.Neigin = 754;
HisyeoWordParser.No = 755;
HisyeoWordParser.Nokso = 756;
HisyeoWordParser.Noilu = 757;
HisyeoWordParser.Nec = 758;
HisyeoWordParser.Nexe = 759;
HisyeoWordParser.Nebu = 760;
HisyeoWordParser.Nendol = 761;
HisyeoWordParser.Nexodi = 762;
HisyeoWordParser.Neos = 763;
HisyeoWordParser.Nelo = 764;
HisyeoWordParser.Ni = 765;
HisyeoWordParser.Nenko = 766;
HisyeoWordParser.Nicu = 767;
HisyeoWordParser.Nikful = 768;
HisyeoWordParser.Niswi = 769;
HisyeoWordParser.Niwos = 770;
HisyeoWordParser.Nixin = 771;
HisyeoWordParser.Nilol = 772;
HisyeoWordParser.Nio = 773;
HisyeoWordParser.Niok = 774;
HisyeoWordParser.Niecni = 775;
HisyeoWordParser.Nimu = 776;
HisyeoWordParser.Nubuso = 777;
HisyeoWordParser.Nucoto = 778;
HisyeoWordParser.Nukulo = 779;
HisyeoWordParser.Niltugu = 780;
HisyeoWordParser.Nungo = 781;
HisyeoWordParser.Numuno = 782;
HisyeoWordParser.Nulto = 783;
HisyeoWordParser.Nuluhu = 784;
HisyeoWordParser.Wohi = 785;
HisyeoWordParser.Nuyo = 786;
HisyeoWordParser.Wokut = 787;
HisyeoWordParser.Nus = 788;
HisyeoWordParser.Nulun = 789;
HisyeoWordParser.Wodino = 790;
HisyeoWordParser.Wokto = 791;
HisyeoWordParser.Wofok = 792;
HisyeoWordParser.Wonkuk = 793;
HisyeoWordParser.Wobi = 794;
HisyeoWordParser.Woyu = 795;
HisyeoWordParser.Woloko = 796;
HisyeoWordParser.Wedo = 797;
HisyeoWordParser.Wowoe = 798;
HisyeoWordParser.Weilun = 799;
HisyeoWordParser.Welto = 800;
HisyeoWordParser.Wolik = 801;
HisyeoWordParser.Weko = 802;
HisyeoWordParser.Wetodu = 803;
HisyeoWordParser.Wekeso = 804;
HisyeoWordParser.Wexon = 805;
HisyeoWordParser.Wikse = 806;
HisyeoWordParser.Winit = 807;
HisyeoWordParser.Wetu = 808;
HisyeoWordParser.Wixonu = 809;
HisyeoWordParser.Wixes = 810;
HisyeoWordParser.Wibolo = 811;
HisyeoWordParser.Wili = 812;
HisyeoWordParser.Weloi = 813;
HisyeoWordParser.Wuitsi = 814;
HisyeoWordParser.Wuktomu = 815;
HisyeoWordParser.Wuto = 816;
HisyeoWordParser.Wutun = 817;
HisyeoWordParser.Wik = 818;
HisyeoWordParser.Wiluwo = 819;
HisyeoWordParser.Wulus = 820;
HisyeoWordParser.Wuot = 821;
HisyeoWordParser.Losol = 822;
HisyeoWordParser.Lohot = 823;
HisyeoWordParser.Lozido = 824;
HisyeoWordParser.Lobotol = 825;
HisyeoWordParser.Longi = 826;
HisyeoWordParser.Lozo = 827;
HisyeoWordParser.Lon = 828;
HisyeoWordParser.Loicok = 829;
HisyeoWordParser.Lono = 830;
HisyeoWordParser.Lotfen = 831;
HisyeoWordParser.Lolu = 832;
HisyeoWordParser.Londuluk = 833;
HisyeoWordParser.Lozic = 834;
HisyeoWordParser.Loc = 835;
HisyeoWordParser.Lonkin = 836;
HisyeoWordParser.Leknek = 837;
HisyeoWordParser.Lexetko = 838;
HisyeoWordParser.Legefu = 839;
HisyeoWordParser.Lefotol = 840;
HisyeoWordParser.Lionxin = 841;
HisyeoWordParser.Lekin = 842;
HisyeoWordParser.Liun = 843;
HisyeoWordParser.Liubit = 844;
HisyeoWordParser.Li = 845;
HisyeoWordParser.Liule = 846;
HisyeoWordParser.Lis = 847;
HisyeoWordParser.Lito = 848;
HisyeoWordParser.Libu = 849;
HisyeoWordParser.Litiwe = 850;
HisyeoWordParser.Listo = 851;
HisyeoWordParser.Luhu = 852;
HisyeoWordParser.Limien = 853;
HisyeoWordParser.Lufono = 854;
HisyeoWordParser.Lismu = 855;
HisyeoWordParser.Luicu = 856;
HisyeoWordParser.Lunsol = 857;
HisyeoWordParser.Luok = 858;
HisyeoWordParser.Luko = 859;
HisyeoWordParser.Lucik = 860;
HisyeoWordParser.Lucku = 861;
HisyeoWordParser.Youmok = 862;
HisyeoWordParser.Youti = 863;
HisyeoWordParser.Yokuntik = 864;
HisyeoWordParser.Lunti = 865;
HisyeoWordParser.Yoskinyo = 866;
HisyeoWordParser.Yogo = 867;
HisyeoWordParser.Yosten = 868;
HisyeoWordParser.Yobe = 869;
HisyeoWordParser.Yodo = 870;
HisyeoWordParser.Yofuk = 871;
HisyeoWordParser.Youli = 872;
HisyeoWordParser.Yoldun = 873;
HisyeoWordParser.Yonlus = 874;
HisyeoWordParser.Youxin = 875;
HisyeoWordParser.Yok = 876;
HisyeoWordParser.Yocno = 877;
HisyeoWordParser.Yon = 878;
HisyeoWordParser.Ye = 879;
HisyeoWordParser.Yone = 880;
HisyeoWordParser.Yinyunci = 881;
HisyeoWordParser.Yinsuk = 882;
HisyeoWordParser.Yumon = 883;
HisyeoWordParser.Yundou = 884;
HisyeoWordParser.Yukwoi = 885;
HisyeoWordParser.Yunlon = 886;

HisyeoWordParser.RULE_postposition = 0;
HisyeoWordParser.RULE_pronoun = 1;
HisyeoWordParser.RULE_rawVerbs = 2;
HisyeoWordParser.RULE_rawNouns = 3;
HisyeoWordParser.RULE_rawModifiers = 4;
HisyeoWordParser.RULE_connector = 5;

class PostpositionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HisyeoWordParser.RULE_postposition;
    }

	Ko() {
	    return this.getToken(HisyeoWordParser.Ko, 0);
	};

	Ci() {
	    return this.getToken(HisyeoWordParser.Ci, 0);
	};

	Ze() {
	    return this.getToken(HisyeoWordParser.Ze, 0);
	};

	Foxo() {
	    return this.getToken(HisyeoWordParser.Foxo, 0);
	};

	Lotfen() {
	    return this.getToken(HisyeoWordParser.Lotfen, 0);
	};

	Loicok() {
	    return this.getToken(HisyeoWordParser.Loicok, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HisyeoWordParserListener ) {
	        listener.enterPostposition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HisyeoWordParserListener ) {
	        listener.exitPostposition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HisyeoWordParserVisitor ) {
	        return visitor.visitPostposition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PronounContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HisyeoWordParser.RULE_pronoun;
    }

	Ozuul() {
	    return this.getToken(HisyeoWordParser.Ozuul, 0);
	};

	Ono() {
	    return this.getToken(HisyeoWordParser.Ono, 0);
	};

	Ofo() {
	    return this.getToken(HisyeoWordParser.Ofo, 0);
	};

	Ulyo() {
	    return this.getToken(HisyeoWordParser.Ulyo, 0);
	};

	Cizi() {
	    return this.getToken(HisyeoWordParser.Cizi, 0);
	};

	Dizel() {
	    return this.getToken(HisyeoWordParser.Dizel, 0);
	};

	Zik() {
	    return this.getToken(HisyeoWordParser.Zik, 0);
	};

	Noyo() {
	    return this.getToken(HisyeoWordParser.Noyo, 0);
	};

	Ni() {
	    return this.getToken(HisyeoWordParser.Ni, 0);
	};

	Nio() {
	    return this.getToken(HisyeoWordParser.Nio, 0);
	};

	Nimu() {
	    return this.getToken(HisyeoWordParser.Nimu, 0);
	};

	Nus() {
	    return this.getToken(HisyeoWordParser.Nus, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HisyeoWordParserListener ) {
	        listener.enterPronoun(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HisyeoWordParserListener ) {
	        listener.exitPronoun(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HisyeoWordParserVisitor ) {
	        return visitor.visitPronoun(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RawVerbsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HisyeoWordParser.RULE_rawVerbs;
    }

	Outo() {
	    return this.getToken(HisyeoWordParser.Outo, 0);
	};

	Okot() {
	    return this.getToken(HisyeoWordParser.Okot, 0);
	};

	Okulo() {
	    return this.getToken(HisyeoWordParser.Okulo, 0);
	};

	Ogolol() {
	    return this.getToken(HisyeoWordParser.Ogolol, 0);
	};

	Obulu() {
	    return this.getToken(HisyeoWordParser.Obulu, 0);
	};

	Onkonu() {
	    return this.getToken(HisyeoWordParser.Onkonu, 0);
	};

	Onkuol() {
	    return this.getToken(HisyeoWordParser.Onkuol, 0);
	};

	Oncemon() {
	    return this.getToken(HisyeoWordParser.Oncemon, 0);
	};

	Ondo() {
	    return this.getToken(HisyeoWordParser.Ondo, 0);
	};

	Oitun() {
	    return this.getToken(HisyeoWordParser.Oitun, 0);
	};

	Onton() {
	    return this.getToken(HisyeoWordParser.Onton, 0);
	};

	Isko() {
	    return this.getToken(HisyeoWordParser.Isko, 0);
	};

	Imon() {
	    return this.getToken(HisyeoWordParser.Imon, 0);
	};

	Icwon() {
	    return this.getToken(HisyeoWordParser.Icwon, 0);
	};

	Uskifo() {
	    return this.getToken(HisyeoWordParser.Uskifo, 0);
	};

	Unon() {
	    return this.getToken(HisyeoWordParser.Unon, 0);
	};

	Uslek() {
	    return this.getToken(HisyeoWordParser.Uslek, 0);
	};

	Unhilun() {
	    return this.getToken(HisyeoWordParser.Unhilun, 0);
	};

	Hobiyo() {
	    return this.getToken(HisyeoWordParser.Hobiyo, 0);
	};

	Hofo() {
	    return this.getToken(HisyeoWordParser.Hofo, 0);
	};

	Hodoku() {
	    return this.getToken(HisyeoWordParser.Hodoku, 0);
	};

	Hefin() {
	    return this.getToken(HisyeoWordParser.Hefin, 0);
	};

	Helgo() {
	    return this.getToken(HisyeoWordParser.Helgo, 0);
	};

	Huke() {
	    return this.getToken(HisyeoWordParser.Huke, 0);
	};

	Hukun() {
	    return this.getToken(HisyeoWordParser.Hukun, 0);
	};

	Husku() {
	    return this.getToken(HisyeoWordParser.Husku, 0);
	};

	Kontol() {
	    return this.getToken(HisyeoWordParser.Kontol, 0);
	};

	Koto() {
	    return this.getToken(HisyeoWordParser.Koto, 0);
	};

	Kos() {
	    return this.getToken(HisyeoWordParser.Kos, 0);
	};

	Koson() {
	    return this.getToken(HisyeoWordParser.Koson, 0);
	};

	Kontesto() {
	    return this.getToken(HisyeoWordParser.Kontesto, 0);
	};

	Kondodu() {
	    return this.getToken(HisyeoWordParser.Kondodu, 0);
	};

	Kelo() {
	    return this.getToken(HisyeoWordParser.Kelo, 0);
	};

	Kiso() {
	    return this.getToken(HisyeoWordParser.Kiso, 0);
	};

	Kududo() {
	    return this.getToken(HisyeoWordParser.Kududo, 0);
	};

	Gomi() {
	    return this.getToken(HisyeoWordParser.Gomi, 0);
	};

	Goniso() {
	    return this.getToken(HisyeoWordParser.Goniso, 0);
	};

	Golun() {
	    return this.getToken(HisyeoWordParser.Golun, 0);
	};

	Golo() {
	    return this.getToken(HisyeoWordParser.Golo, 0);
	};

	Gocidon() {
	    return this.getToken(HisyeoWordParser.Gocidon, 0);
	};

	Gufio() {
	    return this.getToken(HisyeoWordParser.Gufio, 0);
	};

	Guwolo() {
	    return this.getToken(HisyeoWordParser.Guwolo, 0);
	};

	Toswil() {
	    return this.getToken(HisyeoWordParser.Toswil, 0);
	};

	Touyen() {
	    return this.getToken(HisyeoWordParser.Touyen, 0);
	};

	Tenkin() {
	    return this.getToken(HisyeoWordParser.Tenkin, 0);
	};

	Tuluti() {
	    return this.getToken(HisyeoWordParser.Tuluti, 0);
	};

	Tuek() {
	    return this.getToken(HisyeoWordParser.Tuek, 0);
	};

	Tuu() {
	    return this.getToken(HisyeoWordParser.Tuu, 0);
	};

	Tulokon() {
	    return this.getToken(HisyeoWordParser.Tulokon, 0);
	};

	Conwebo() {
	    return this.getToken(HisyeoWordParser.Conwebo, 0);
	};

	Coufon() {
	    return this.getToken(HisyeoWordParser.Coufon, 0);
	};

	Cixin() {
	    return this.getToken(HisyeoWordParser.Cixin, 0);
	};

	Cifu() {
	    return this.getToken(HisyeoWordParser.Cifu, 0);
	};

	Cihun() {
	    return this.getToken(HisyeoWordParser.Cihun, 0);
	};

	Citse() {
	    return this.getToken(HisyeoWordParser.Citse, 0);
	};

	Cukto() {
	    return this.getToken(HisyeoWordParser.Cukto, 0);
	};

	Cinli() {
	    return this.getToken(HisyeoWordParser.Cinli, 0);
	};

	Cutne() {
	    return this.getToken(HisyeoWordParser.Cutne, 0);
	};

	Cuncion() {
	    return this.getToken(HisyeoWordParser.Cuncion, 0);
	};

	Cunliu() {
	    return this.getToken(HisyeoWordParser.Cunliu, 0);
	};

	Culono() {
	    return this.getToken(HisyeoWordParser.Culono, 0);
	};

	Cudo() {
	    return this.getToken(HisyeoWordParser.Cudo, 0);
	};

	Cufo() {
	    return this.getToken(HisyeoWordParser.Cufo, 0);
	};

	Cungo() {
	    return this.getToken(HisyeoWordParser.Cungo, 0);
	};

	Culosun() {
	    return this.getToken(HisyeoWordParser.Culosun, 0);
	};

	Socok() {
	    return this.getToken(HisyeoWordParser.Socok, 0);
	};

	Sobole() {
	    return this.getToken(HisyeoWordParser.Sobole, 0);
	};

	Somo() {
	    return this.getToken(HisyeoWordParser.Somo, 0);
	};

	Sobis() {
	    return this.getToken(HisyeoWordParser.Sobis, 0);
	};

	Solu() {
	    return this.getToken(HisyeoWordParser.Solu, 0);
	};

	Seloho() {
	    return this.getToken(HisyeoWordParser.Seloho, 0);
	};

	Sityo() {
	    return this.getToken(HisyeoWordParser.Sityo, 0);
	};

	Siufo() {
	    return this.getToken(HisyeoWordParser.Siufo, 0);
	};

	Suoxic() {
	    return this.getToken(HisyeoWordParser.Suoxic, 0);
	};

	Suko() {
	    return this.getToken(HisyeoWordParser.Suko, 0);
	};

	Xokulu() {
	    return this.getToken(HisyeoWordParser.Xokulu, 0);
	};

	Xobo() {
	    return this.getToken(HisyeoWordParser.Xobo, 0);
	};

	Xontun() {
	    return this.getToken(HisyeoWordParser.Xontun, 0);
	};

	Xefizec() {
	    return this.getToken(HisyeoWordParser.Xefizec, 0);
	};

	Xiufu() {
	    return this.getToken(HisyeoWordParser.Xiufu, 0);
	};

	Xiwon() {
	    return this.getToken(HisyeoWordParser.Xiwon, 0);
	};

	Xusten() {
	    return this.getToken(HisyeoWordParser.Xusten, 0);
	};

	Doho() {
	    return this.getToken(HisyeoWordParser.Doho, 0);
	};

	Doicel() {
	    return this.getToken(HisyeoWordParser.Doicel, 0);
	};

	Dokdogo() {
	    return this.getToken(HisyeoWordParser.Dokdogo, 0);
	};

	Doknu() {
	    return this.getToken(HisyeoWordParser.Doknu, 0);
	};

	Dodou() {
	    return this.getToken(HisyeoWordParser.Dodou, 0);
	};

	Dostoc() {
	    return this.getToken(HisyeoWordParser.Dostoc, 0);
	};

	Deko() {
	    return this.getToken(HisyeoWordParser.Deko, 0);
	};

	Denemek() {
	    return this.getToken(HisyeoWordParser.Denemek, 0);
	};

	Di() {
	    return this.getToken(HisyeoWordParser.Di, 0);
	};

	Diyonde() {
	    return this.getToken(HisyeoWordParser.Diyonde, 0);
	};

	Duuhon() {
	    return this.getToken(HisyeoWordParser.Duuhon, 0);
	};

	Dustu() {
	    return this.getToken(HisyeoWordParser.Dustu, 0);
	};

	Dungo() {
	    return this.getToken(HisyeoWordParser.Dungo, 0);
	};

	Dubono() {
	    return this.getToken(HisyeoWordParser.Dubono, 0);
	};

	Zohit() {
	    return this.getToken(HisyeoWordParser.Zohit, 0);
	};

	Zicou() {
	    return this.getToken(HisyeoWordParser.Zicou, 0);
	};

	Zuwobu() {
	    return this.getToken(HisyeoWordParser.Zuwobu, 0);
	};

	Zuto() {
	    return this.getToken(HisyeoWordParser.Zuto, 0);
	};

	Zuyi() {
	    return this.getToken(HisyeoWordParser.Zuyi, 0);
	};

	Boifon() {
	    return this.getToken(HisyeoWordParser.Boifon, 0);
	};

	Bokofoc() {
	    return this.getToken(HisyeoWordParser.Bokofoc, 0);
	};

	Bosol() {
	    return this.getToken(HisyeoWordParser.Bosol, 0);
	};

	Boklon() {
	    return this.getToken(HisyeoWordParser.Boklon, 0);
	};

	Betido() {
	    return this.getToken(HisyeoWordParser.Betido, 0);
	};

	Besol() {
	    return this.getToken(HisyeoWordParser.Besol, 0);
	};

	Belexu() {
	    return this.getToken(HisyeoWordParser.Belexu, 0);
	};

	Besnehot() {
	    return this.getToken(HisyeoWordParser.Besnehot, 0);
	};

	Beudo() {
	    return this.getToken(HisyeoWordParser.Beudo, 0);
	};

	Bemon() {
	    return this.getToken(HisyeoWordParser.Bemon, 0);
	};

	Biek() {
	    return this.getToken(HisyeoWordParser.Biek, 0);
	};

	Bucono() {
	    return this.getToken(HisyeoWordParser.Bucono, 0);
	};

	Buswen() {
	    return this.getToken(HisyeoWordParser.Buswen, 0);
	};

	Fohoso() {
	    return this.getToken(HisyeoWordParser.Fohoso, 0);
	};

	Folun() {
	    return this.getToken(HisyeoWordParser.Folun, 0);
	};

	Fisun() {
	    return this.getToken(HisyeoWordParser.Fisun, 0);
	};

	Fiyuxit() {
	    return this.getToken(HisyeoWordParser.Fiyuxit, 0);
	};

	Fizi() {
	    return this.getToken(HisyeoWordParser.Fizi, 0);
	};

	Fui() {
	    return this.getToken(HisyeoWordParser.Fui, 0);
	};

	Fulkoi() {
	    return this.getToken(HisyeoWordParser.Fulkoi, 0);
	};

	Futsun() {
	    return this.getToken(HisyeoWordParser.Futsun, 0);
	};

	Funbo() {
	    return this.getToken(HisyeoWordParser.Funbo, 0);
	};

	Mokon() {
	    return this.getToken(HisyeoWordParser.Mokon, 0);
	};

	Motsi() {
	    return this.getToken(HisyeoWordParser.Motsi, 0);
	};

	Monodo() {
	    return this.getToken(HisyeoWordParser.Monodo, 0);
	};

	Motsile() {
	    return this.getToken(HisyeoWordParser.Motsile, 0);
	};

	Moniso() {
	    return this.getToken(HisyeoWordParser.Moniso, 0);
	};

	Muncoti() {
	    return this.getToken(HisyeoWordParser.Muncoti, 0);
	};

	Nocido() {
	    return this.getToken(HisyeoWordParser.Nocido, 0);
	};

	Munyufo() {
	    return this.getToken(HisyeoWordParser.Munyufo, 0);
	};

	Niltugu() {
	    return this.getToken(HisyeoWordParser.Niltugu, 0);
	};

	Niwos() {
	    return this.getToken(HisyeoWordParser.Niwos, 0);
	};

	Wofok() {
	    return this.getToken(HisyeoWordParser.Wofok, 0);
	};

	Wedo() {
	    return this.getToken(HisyeoWordParser.Wedo, 0);
	};

	Weilun() {
	    return this.getToken(HisyeoWordParser.Weilun, 0);
	};

	Wekeso() {
	    return this.getToken(HisyeoWordParser.Wekeso, 0);
	};

	Wetodu() {
	    return this.getToken(HisyeoWordParser.Wetodu, 0);
	};

	Wetu() {
	    return this.getToken(HisyeoWordParser.Wetu, 0);
	};

	Weko() {
	    return this.getToken(HisyeoWordParser.Weko, 0);
	};

	Weloi() {
	    return this.getToken(HisyeoWordParser.Weloi, 0);
	};

	Wuitsi() {
	    return this.getToken(HisyeoWordParser.Wuitsi, 0);
	};

	Lobotol() {
	    return this.getToken(HisyeoWordParser.Lobotol, 0);
	};

	Lozic() {
	    return this.getToken(HisyeoWordParser.Lozic, 0);
	};

	Liun() {
	    return this.getToken(HisyeoWordParser.Liun, 0);
	};

	Liubit() {
	    return this.getToken(HisyeoWordParser.Liubit, 0);
	};

	Lufono() {
	    return this.getToken(HisyeoWordParser.Lufono, 0);
	};

	Lunsol() {
	    return this.getToken(HisyeoWordParser.Lunsol, 0);
	};

	Yosten() {
	    return this.getToken(HisyeoWordParser.Yosten, 0);
	};

	Yon() {
	    return this.getToken(HisyeoWordParser.Yon, 0);
	};

	Yundou() {
	    return this.getToken(HisyeoWordParser.Yundou, 0);
	};

	Yunlon() {
	    return this.getToken(HisyeoWordParser.Yunlon, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HisyeoWordParserListener ) {
	        listener.enterRawVerbs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HisyeoWordParserListener ) {
	        listener.exitRawVerbs(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HisyeoWordParserVisitor ) {
	        return visitor.visitRawVerbs(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RawNounsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HisyeoWordParser.RULE_rawNouns;
    }

	Oudi() {
	    return this.getToken(HisyeoWordParser.Oudi, 0);
	};

	Okoxu() {
	    return this.getToken(HisyeoWordParser.Okoxu, 0);
	};

	Oksun() {
	    return this.getToken(HisyeoWordParser.Oksun, 0);
	};

	Oklumun() {
	    return this.getToken(HisyeoWordParser.Oklumun, 0);
	};

	Ostok() {
	    return this.getToken(HisyeoWordParser.Ostok, 0);
	};

	Ocuo() {
	    return this.getToken(HisyeoWordParser.Ocuo, 0);
	};

	Oboki() {
	    return this.getToken(HisyeoWordParser.Oboki, 0);
	};

	Obo() {
	    return this.getToken(HisyeoWordParser.Obo, 0);
	};

	Ongolo() {
	    return this.getToken(HisyeoWordParser.Ongolo, 0);
	};

	Onfibi() {
	    return this.getToken(HisyeoWordParser.Onfibi, 0);
	};

	Onwoni() {
	    return this.getToken(HisyeoWordParser.Onwoni, 0);
	};

	Osti() {
	    return this.getToken(HisyeoWordParser.Osti, 0);
	};

	Ozil() {
	    return this.getToken(HisyeoWordParser.Ozil, 0);
	};

	Eloi() {
	    return this.getToken(HisyeoWordParser.Eloi, 0);
	};

	Eleke() {
	    return this.getToken(HisyeoWordParser.Eleke, 0);
	};

	Otsotot() {
	    return this.getToken(HisyeoWordParser.Otsotot, 0);
	};

	Etso() {
	    return this.getToken(HisyeoWordParser.Etso, 0);
	};

	Ebol() {
	    return this.getToken(HisyeoWordParser.Ebol, 0);
	};

	Enkomon() {
	    return this.getToken(HisyeoWordParser.Enkomon, 0);
	};

	Ohel() {
	    return this.getToken(HisyeoWordParser.Ohel, 0);
	};

	Itihos() {
	    return this.getToken(HisyeoWordParser.Itihos, 0);
	};

	Enbukun() {
	    return this.getToken(HisyeoWordParser.Enbukun, 0);
	};

	Istihol() {
	    return this.getToken(HisyeoWordParser.Istihol, 0);
	};

	Isibo() {
	    return this.getToken(HisyeoWordParser.Isibo, 0);
	};

	Isenso() {
	    return this.getToken(HisyeoWordParser.Isenso, 0);
	};

	Isbonxu() {
	    return this.getToken(HisyeoWordParser.Isbonxu, 0);
	};

	Ixolo() {
	    return this.getToken(HisyeoWordParser.Ixolo, 0);
	};

	Ibuwe() {
	    return this.getToken(HisyeoWordParser.Ibuwe, 0);
	};

	Ibole() {
	    return this.getToken(HisyeoWordParser.Ibole, 0);
	};

	Iciwu() {
	    return this.getToken(HisyeoWordParser.Iciwu, 0);
	};

	Ile() {
	    return this.getToken(HisyeoWordParser.Ile, 0);
	};

	Inboli() {
	    return this.getToken(HisyeoWordParser.Inboli, 0);
	};

	Umo() {
	    return this.getToken(HisyeoWordParser.Umo, 0);
	};

	Undofol() {
	    return this.getToken(HisyeoWordParser.Undofol, 0);
	};

	Unbu() {
	    return this.getToken(HisyeoWordParser.Unbu, 0);
	};

	Uyo() {
	    return this.getToken(HisyeoWordParser.Uyo, 0);
	};

	Ucumi() {
	    return this.getToken(HisyeoWordParser.Ucumi, 0);
	};

	Usmon() {
	    return this.getToken(HisyeoWordParser.Usmon, 0);
	};

	Usen() {
	    return this.getToken(HisyeoWordParser.Usen, 0);
	};

	Unfuno() {
	    return this.getToken(HisyeoWordParser.Unfuno, 0);
	};

	Ulonfu() {
	    return this.getToken(HisyeoWordParser.Ulonfu, 0);
	};

	Ulogun() {
	    return this.getToken(HisyeoWordParser.Ulogun, 0);
	};

	Ulzo() {
	    return this.getToken(HisyeoWordParser.Ulzo, 0);
	};

	Hokoli() {
	    return this.getToken(HisyeoWordParser.Hokoli, 0);
	};

	Hoxobe() {
	    return this.getToken(HisyeoWordParser.Hoxobe, 0);
	};

	Hosoun() {
	    return this.getToken(HisyeoWordParser.Hosoun, 0);
	};

	Hondon() {
	    return this.getToken(HisyeoWordParser.Hondon, 0);
	};

	Hoktun() {
	    return this.getToken(HisyeoWordParser.Hoktun, 0);
	};

	Honyo() {
	    return this.getToken(HisyeoWordParser.Honyo, 0);
	};

	Hofezi() {
	    return this.getToken(HisyeoWordParser.Hofezi, 0);
	};

	Holuk() {
	    return this.getToken(HisyeoWordParser.Holuk, 0);
	};

	Holmo() {
	    return this.getToken(HisyeoWordParser.Holmo, 0);
	};

	Henelo() {
	    return this.getToken(HisyeoWordParser.Henelo, 0);
	};

	Hitsu() {
	    return this.getToken(HisyeoWordParser.Hitsu, 0);
	};

	Hismo() {
	    return this.getToken(HisyeoWordParser.Hismo, 0);
	};

	Honcou() {
	    return this.getToken(HisyeoWordParser.Honcou, 0);
	};

	Hiskunco() {
	    return this.getToken(HisyeoWordParser.Hiskunco, 0);
	};

	Hunzidu() {
	    return this.getToken(HisyeoWordParser.Hunzidu, 0);
	};

	Hustun() {
	    return this.getToken(HisyeoWordParser.Hustun, 0);
	};

	Hunsuon() {
	    return this.getToken(HisyeoWordParser.Hunsuon, 0);
	};

	Hulodek() {
	    return this.getToken(HisyeoWordParser.Hulodek, 0);
	};

	Huwu() {
	    return this.getToken(HisyeoWordParser.Huwu, 0);
	};

	Hulu() {
	    return this.getToken(HisyeoWordParser.Hulu, 0);
	};

	Huwuncul() {
	    return this.getToken(HisyeoWordParser.Huwuncul, 0);
	};

	Kolowu() {
	    return this.getToken(HisyeoWordParser.Kolowu, 0);
	};

	Kokoku() {
	    return this.getToken(HisyeoWordParser.Kokoku, 0);
	};

	Kotfusu() {
	    return this.getToken(HisyeoWordParser.Kotfusu, 0);
	};

	Huzon() {
	    return this.getToken(HisyeoWordParser.Huzon, 0);
	};

	Kosmo() {
	    return this.getToken(HisyeoWordParser.Kosmo, 0);
	};

	Komu() {
	    return this.getToken(HisyeoWordParser.Komu, 0);
	};

	Kolmudul() {
	    return this.getToken(HisyeoWordParser.Kolmudul, 0);
	};

	Kistose() {
	    return this.getToken(HisyeoWordParser.Kistose, 0);
	};

	Kiungo() {
	    return this.getToken(HisyeoWordParser.Kiungo, 0);
	};

	Kisko() {
	    return this.getToken(HisyeoWordParser.Kisko, 0);
	};

	Kelos() {
	    return this.getToken(HisyeoWordParser.Kelos, 0);
	};

	Kino() {
	    return this.getToken(HisyeoWordParser.Kino, 0);
	};

	Kinyosel() {
	    return this.getToken(HisyeoWordParser.Kinyosel, 0);
	};

	Kukwon() {
	    return this.getToken(HisyeoWordParser.Kukwon, 0);
	};

	Kuunme() {
	    return this.getToken(HisyeoWordParser.Kuunme, 0);
	};

	Kuon() {
	    return this.getToken(HisyeoWordParser.Kuon, 0);
	};

	Kuocyo() {
	    return this.getToken(HisyeoWordParser.Kuocyo, 0);
	};

	Kuoxi() {
	    return this.getToken(HisyeoWordParser.Kuoxi, 0);
	};

	Kukmut() {
	    return this.getToken(HisyeoWordParser.Kukmut, 0);
	};

	Kusowi() {
	    return this.getToken(HisyeoWordParser.Kusowi, 0);
	};

	Kudu() {
	    return this.getToken(HisyeoWordParser.Kudu, 0);
	};

	Kunonti() {
	    return this.getToken(HisyeoWordParser.Kunonti, 0);
	};

	Kumun() {
	    return this.getToken(HisyeoWordParser.Kumun, 0);
	};

	Kunhiun() {
	    return this.getToken(HisyeoWordParser.Kunhiun, 0);
	};

	Kuncien() {
	    return this.getToken(HisyeoWordParser.Kuncien, 0);
	};

	Kunbi() {
	    return this.getToken(HisyeoWordParser.Kunbi, 0);
	};

	Kuldu() {
	    return this.getToken(HisyeoWordParser.Kuldu, 0);
	};

	Gos() {
	    return this.getToken(HisyeoWordParser.Gos, 0);
	};

	Kulunun() {
	    return this.getToken(HisyeoWordParser.Kulunun, 0);
	};

	Gongoxi() {
	    return this.getToken(HisyeoWordParser.Gongoxi, 0);
	};

	Gonbu() {
	    return this.getToken(HisyeoWordParser.Gonbu, 0);
	};

	Kungiyo() {
	    return this.getToken(HisyeoWordParser.Kungiyo, 0);
	};

	Goyu() {
	    return this.getToken(HisyeoWordParser.Goyu, 0);
	};

	Geko() {
	    return this.getToken(HisyeoWordParser.Geko, 0);
	};

	Gito() {
	    return this.getToken(HisyeoWordParser.Gito, 0);
	};

	Gisgul() {
	    return this.getToken(HisyeoWordParser.Gisgul, 0);
	};

	Gubuyo() {
	    return this.getToken(HisyeoWordParser.Gubuyo, 0);
	};

	Guexo() {
	    return this.getToken(HisyeoWordParser.Guexo, 0);
	};

	Gundole() {
	    return this.getToken(HisyeoWordParser.Gundole, 0);
	};

	Gufoxe() {
	    return this.getToken(HisyeoWordParser.Gufoxe, 0);
	};

	Gudolo() {
	    return this.getToken(HisyeoWordParser.Gudolo, 0);
	};

	Gueyu() {
	    return this.getToken(HisyeoWordParser.Gueyu, 0);
	};

	Gumi() {
	    return this.getToken(HisyeoWordParser.Gumi, 0);
	};

	Gulu() {
	    return this.getToken(HisyeoWordParser.Gulu, 0);
	};

	Tohilok() {
	    return this.getToken(HisyeoWordParser.Tohilok, 0);
	};

	Towe() {
	    return this.getToken(HisyeoWordParser.Towe, 0);
	};

	Tonbokcut() {
	    return this.getToken(HisyeoWordParser.Tonbokcut, 0);
	};

	Toliyo() {
	    return this.getToken(HisyeoWordParser.Toliyo, 0);
	};

	Tolen() {
	    return this.getToken(HisyeoWordParser.Tolen, 0);
	};

	Toliko() {
	    return this.getToken(HisyeoWordParser.Toliko, 0);
	};

	Tolxeto() {
	    return this.getToken(HisyeoWordParser.Tolxeto, 0);
	};

	Tomos() {
	    return this.getToken(HisyeoWordParser.Tomos, 0);
	};

	Toxutsi() {
	    return this.getToken(HisyeoWordParser.Toxutsi, 0);
	};

	Tetek() {
	    return this.getToken(HisyeoWordParser.Tetek, 0);
	};

	Titon() {
	    return this.getToken(HisyeoWordParser.Titon, 0);
	};

	Tixo() {
	    return this.getToken(HisyeoWordParser.Tixo, 0);
	};

	Timiok() {
	    return this.getToken(HisyeoWordParser.Timiok, 0);
	};

	Tubo() {
	    return this.getToken(HisyeoWordParser.Tubo, 0);
	};

	Tundu() {
	    return this.getToken(HisyeoWordParser.Tundu, 0);
	};

	Tulono() {
	    return this.getToken(HisyeoWordParser.Tulono, 0);
	};

	Cokwoli() {
	    return this.getToken(HisyeoWordParser.Cokwoli, 0);
	};

	Comen() {
	    return this.getToken(HisyeoWordParser.Comen, 0);
	};

	Conoi() {
	    return this.getToken(HisyeoWordParser.Conoi, 0);
	};

	Cocko() {
	    return this.getToken(HisyeoWordParser.Cocko, 0);
	};

	Ceo() {
	    return this.getToken(HisyeoWordParser.Ceo, 0);
	};

	Cen() {
	    return this.getToken(HisyeoWordParser.Cen, 0);
	};

	Cino() {
	    return this.getToken(HisyeoWordParser.Cino, 0);
	};

	Cingi() {
	    return this.getToken(HisyeoWordParser.Cingi, 0);
	};

	Ciwindi() {
	    return this.getToken(HisyeoWordParser.Ciwindi, 0);
	};

	Cikinil() {
	    return this.getToken(HisyeoWordParser.Cikinil, 0);
	};

	Cigilsu() {
	    return this.getToken(HisyeoWordParser.Cigilsu, 0);
	};

	Cibon() {
	    return this.getToken(HisyeoWordParser.Cibon, 0);
	};

	Cuskido() {
	    return this.getToken(HisyeoWordParser.Cuskido, 0);
	};

	Cuonwun() {
	    return this.getToken(HisyeoWordParser.Cuonwun, 0);
	};

	Cui() {
	    return this.getToken(HisyeoWordParser.Cui, 0);
	};

	Cundol() {
	    return this.getToken(HisyeoWordParser.Cundol, 0);
	};

	Culci() {
	    return this.getToken(HisyeoWordParser.Culci, 0);
	};

	Culul() {
	    return this.getToken(HisyeoWordParser.Culul, 0);
	};

	Sotnin() {
	    return this.getToken(HisyeoWordParser.Sotnin, 0);
	};

	Sokofu() {
	    return this.getToken(HisyeoWordParser.Sokofu, 0);
	};

	Soden() {
	    return this.getToken(HisyeoWordParser.Soden, 0);
	};

	Solilo() {
	    return this.getToken(HisyeoWordParser.Solilo, 0);
	};

	Sohouk() {
	    return this.getToken(HisyeoWordParser.Sohouk, 0);
	};

	Solwoc() {
	    return this.getToken(HisyeoWordParser.Solwoc, 0);
	};

	Sotun() {
	    return this.getToken(HisyeoWordParser.Sotun, 0);
	};

	Sobo() {
	    return this.getToken(HisyeoWordParser.Sobo, 0);
	};

	Senwic() {
	    return this.getToken(HisyeoWordParser.Senwic, 0);
	};

	Seki() {
	    return this.getToken(HisyeoWordParser.Seki, 0);
	};

	Sekiton() {
	    return this.getToken(HisyeoWordParser.Sekiton, 0);
	};

	Sedu() {
	    return this.getToken(HisyeoWordParser.Sedu, 0);
	};

	Sel() {
	    return this.getToken(HisyeoWordParser.Sel, 0);
	};

	Semoi() {
	    return this.getToken(HisyeoWordParser.Semoi, 0);
	};

	Siskin() {
	    return this.getToken(HisyeoWordParser.Siskin, 0);
	};

	Sinsi() {
	    return this.getToken(HisyeoWordParser.Sinsi, 0);
	};

	Sieto() {
	    return this.getToken(HisyeoWordParser.Sieto, 0);
	};

	Sikin() {
	    return this.getToken(HisyeoWordParser.Sikin, 0);
	};

	Sikot() {
	    return this.getToken(HisyeoWordParser.Sikot, 0);
	};

	Sintokmo() {
	    return this.getToken(HisyeoWordParser.Sintokmo, 0);
	};

	Suhot() {
	    return this.getToken(HisyeoWordParser.Suhot, 0);
	};

	Sukyunik() {
	    return this.getToken(HisyeoWordParser.Sukyunik, 0);
	};

	Sufoun() {
	    return this.getToken(HisyeoWordParser.Sufoun, 0);
	};

	Sundibot() {
	    return this.getToken(HisyeoWordParser.Sundibot, 0);
	};

	Sutuo() {
	    return this.getToken(HisyeoWordParser.Sutuo, 0);
	};

	Suson() {
	    return this.getToken(HisyeoWordParser.Suson, 0);
	};

	Xohofec() {
	    return this.getToken(HisyeoWordParser.Xohofec, 0);
	};

	Sunbidu() {
	    return this.getToken(HisyeoWordParser.Sunbidu, 0);
	};

	Xofo() {
	    return this.getToken(HisyeoWordParser.Xofo, 0);
	};

	Xolu() {
	    return this.getToken(HisyeoWordParser.Xolu, 0);
	};

	Xomutlo() {
	    return this.getToken(HisyeoWordParser.Xomutlo, 0);
	};

	Xifon() {
	    return this.getToken(HisyeoWordParser.Xifon, 0);
	};

	Xemetsen() {
	    return this.getToken(HisyeoWordParser.Xemetsen, 0);
	};

	Xingo() {
	    return this.getToken(HisyeoWordParser.Xingo, 0);
	};

	Xiulo() {
	    return this.getToken(HisyeoWordParser.Xiulo, 0);
	};

	Xixulko() {
	    return this.getToken(HisyeoWordParser.Xixulko, 0);
	};

	Ximu() {
	    return this.getToken(HisyeoWordParser.Ximu, 0);
	};

	Ximol() {
	    return this.getToken(HisyeoWordParser.Ximol, 0);
	};

	Xincuon() {
	    return this.getToken(HisyeoWordParser.Xincuon, 0);
	};

	Xuto() {
	    return this.getToken(HisyeoWordParser.Xuto, 0);
	};

	Xuk() {
	    return this.getToken(HisyeoWordParser.Xuk, 0);
	};

	Xuxok() {
	    return this.getToken(HisyeoWordParser.Xuxok, 0);
	};

	Doi() {
	    return this.getToken(HisyeoWordParser.Doi, 0);
	};

	Doinbi() {
	    return this.getToken(HisyeoWordParser.Doinbi, 0);
	};

	Docui() {
	    return this.getToken(HisyeoWordParser.Docui, 0);
	};

	Donuxin() {
	    return this.getToken(HisyeoWordParser.Donuxin, 0);
	};

	Donus() {
	    return this.getToken(HisyeoWordParser.Donus, 0);
	};

	Deku() {
	    return this.getToken(HisyeoWordParser.Deku, 0);
	};

	Detoi() {
	    return this.getToken(HisyeoWordParser.Detoi, 0);
	};

	Dibo() {
	    return this.getToken(HisyeoWordParser.Dibo, 0);
	};

	Dinci() {
	    return this.getToken(HisyeoWordParser.Dinci, 0);
	};

	Dinzou() {
	    return this.getToken(HisyeoWordParser.Dinzou, 0);
	};

	Dumoko() {
	    return this.getToken(HisyeoWordParser.Dumoko, 0);
	};

	Duuncit() {
	    return this.getToken(HisyeoWordParser.Duuncit, 0);
	};

	Duwoni() {
	    return this.getToken(HisyeoWordParser.Duwoni, 0);
	};

	Zoso() {
	    return this.getToken(HisyeoWordParser.Zoso, 0);
	};

	Zoston() {
	    return this.getToken(HisyeoWordParser.Zoston, 0);
	};

	Zomo() {
	    return this.getToken(HisyeoWordParser.Zomo, 0);
	};

	Zomi() {
	    return this.getToken(HisyeoWordParser.Zomi, 0);
	};

	Zonwul() {
	    return this.getToken(HisyeoWordParser.Zonwul, 0);
	};

	Zowo() {
	    return this.getToken(HisyeoWordParser.Zowo, 0);
	};

	Zoloni() {
	    return this.getToken(HisyeoWordParser.Zoloni, 0);
	};

	Zoli() {
	    return this.getToken(HisyeoWordParser.Zoli, 0);
	};

	Zohun() {
	    return this.getToken(HisyeoWordParser.Zohun, 0);
	};

	Zogoc() {
	    return this.getToken(HisyeoWordParser.Zogoc, 0);
	};

	Zesto() {
	    return this.getToken(HisyeoWordParser.Zesto, 0);
	};

	Zizime() {
	    return this.getToken(HisyeoWordParser.Zizime, 0);
	};

	Zinkon() {
	    return this.getToken(HisyeoWordParser.Zinkon, 0);
	};

	Zixitu() {
	    return this.getToken(HisyeoWordParser.Zixitu, 0);
	};

	Ziziyo() {
	    return this.getToken(HisyeoWordParser.Ziziyo, 0);
	};

	Zuko() {
	    return this.getToken(HisyeoWordParser.Zuko, 0);
	};

	Zusbot() {
	    return this.getToken(HisyeoWordParser.Zusbot, 0);
	};

	Zuhu() {
	    return this.getToken(HisyeoWordParser.Zuhu, 0);
	};

	Zungo() {
	    return this.getToken(HisyeoWordParser.Zungo, 0);
	};

	Zuntulu() {
	    return this.getToken(HisyeoWordParser.Zuntulu, 0);
	};

	Zunlo() {
	    return this.getToken(HisyeoWordParser.Zunlo, 0);
	};

	Boholon() {
	    return this.getToken(HisyeoWordParser.Boholon, 0);
	};

	Bogo() {
	    return this.getToken(HisyeoWordParser.Bogo, 0);
	};

	Bostofis() {
	    return this.getToken(HisyeoWordParser.Bostofis, 0);
	};

	Boxo() {
	    return this.getToken(HisyeoWordParser.Boxo, 0);
	};

	Boboun() {
	    return this.getToken(HisyeoWordParser.Boboun, 0);
	};

	Bolce() {
	    return this.getToken(HisyeoWordParser.Bolce, 0);
	};

	Bokbun() {
	    return this.getToken(HisyeoWordParser.Bokbun, 0);
	};

	Bolfele() {
	    return this.getToken(HisyeoWordParser.Bolfele, 0);
	};

	Bonti() {
	    return this.getToken(HisyeoWordParser.Bonti, 0);
	};

	Beiku() {
	    return this.getToken(HisyeoWordParser.Beiku, 0);
	};

	Belete() {
	    return this.getToken(HisyeoWordParser.Belete, 0);
	};

	Bitun() {
	    return this.getToken(HisyeoWordParser.Bitun, 0);
	};

	Binleo() {
	    return this.getToken(HisyeoWordParser.Binleo, 0);
	};

	Biomu() {
	    return this.getToken(HisyeoWordParser.Biomu, 0);
	};

	Bindu() {
	    return this.getToken(HisyeoWordParser.Bindu, 0);
	};

	Binton() {
	    return this.getToken(HisyeoWordParser.Binton, 0);
	};

	Buswelin() {
	    return this.getToken(HisyeoWordParser.Buswelin, 0);
	};

	Buyencok() {
	    return this.getToken(HisyeoWordParser.Buyencok, 0);
	};

	Budogo() {
	    return this.getToken(HisyeoWordParser.Budogo, 0);
	};

	Bumi() {
	    return this.getToken(HisyeoWordParser.Bumi, 0);
	};

	Buntut() {
	    return this.getToken(HisyeoWordParser.Buntut, 0);
	};

	Bunduki() {
	    return this.getToken(HisyeoWordParser.Bunduki, 0);
	};

	Bulusi() {
	    return this.getToken(HisyeoWordParser.Bulusi, 0);
	};

	Fout() {
	    return this.getToken(HisyeoWordParser.Fout, 0);
	};

	Fonxin() {
	    return this.getToken(HisyeoWordParser.Fonxin, 0);
	};

	Fonolon() {
	    return this.getToken(HisyeoWordParser.Fonolon, 0);
	};

	Folo() {
	    return this.getToken(HisyeoWordParser.Folo, 0);
	};

	Fohon() {
	    return this.getToken(HisyeoWordParser.Fohon, 0);
	};

	Fodoloc() {
	    return this.getToken(HisyeoWordParser.Fodoloc, 0);
	};

	Fecko() {
	    return this.getToken(HisyeoWordParser.Fecko, 0);
	};

	Fenuo() {
	    return this.getToken(HisyeoWordParser.Fenuo, 0);
	};

	Fikwun() {
	    return this.getToken(HisyeoWordParser.Fikwun, 0);
	};

	Filo() {
	    return this.getToken(HisyeoWordParser.Filo, 0);
	};

	Fun() {
	    return this.getToken(HisyeoWordParser.Fun, 0);
	};

	Fuus() {
	    return this.getToken(HisyeoWordParser.Fuus, 0);
	};

	Fukuxi() {
	    return this.getToken(HisyeoWordParser.Fukuxi, 0);
	};

	Fuongok() {
	    return this.getToken(HisyeoWordParser.Fuongok, 0);
	};

	Fuxubin() {
	    return this.getToken(HisyeoWordParser.Fuxubin, 0);
	};

	Motuo() {
	    return this.getToken(HisyeoWordParser.Motuo, 0);
	};

	Mocko() {
	    return this.getToken(HisyeoWordParser.Mocko, 0);
	};

	Funlok() {
	    return this.getToken(HisyeoWordParser.Funlok, 0);
	};

	Mozulis() {
	    return this.getToken(HisyeoWordParser.Mozulis, 0);
	};

	Mozun() {
	    return this.getToken(HisyeoWordParser.Mozun, 0);
	};

	Mongo() {
	    return this.getToken(HisyeoWordParser.Mongo, 0);
	};

	Mokofo() {
	    return this.getToken(HisyeoWordParser.Mokofo, 0);
	};

	Motowo() {
	    return this.getToken(HisyeoWordParser.Motowo, 0);
	};

	Moto() {
	    return this.getToken(HisyeoWordParser.Moto, 0);
	};

	Motifo() {
	    return this.getToken(HisyeoWordParser.Motifo, 0);
	};

	Menyuu() {
	    return this.getToken(HisyeoWordParser.Menyuu, 0);
	};

	Meloc() {
	    return this.getToken(HisyeoWordParser.Meloc, 0);
	};

	Minyo() {
	    return this.getToken(HisyeoWordParser.Minyo, 0);
	};

	Miebil() {
	    return this.getToken(HisyeoWordParser.Miebil, 0);
	};

	Miencok() {
	    return this.getToken(HisyeoWordParser.Miencok, 0);
	};

	Mikdol() {
	    return this.getToken(HisyeoWordParser.Mikdol, 0);
	};

	Mitmo() {
	    return this.getToken(HisyeoWordParser.Mitmo, 0);
	};

	Micin() {
	    return this.getToken(HisyeoWordParser.Micin, 0);
	};

	Mutyu() {
	    return this.getToken(HisyeoWordParser.Mutyu, 0);
	};

	Minyoto() {
	    return this.getToken(HisyeoWordParser.Minyoto, 0);
	};

	Muni() {
	    return this.getToken(HisyeoWordParser.Muni, 0);
	};

	Muesi() {
	    return this.getToken(HisyeoWordParser.Muesi, 0);
	};

	Mukonun() {
	    return this.getToken(HisyeoWordParser.Mukonun, 0);
	};

	Muhoyon() {
	    return this.getToken(HisyeoWordParser.Muhoyon, 0);
	};

	Noo() {
	    return this.getToken(HisyeoWordParser.Noo, 0);
	};

	Nouku() {
	    return this.getToken(HisyeoWordParser.Nouku, 0);
	};

	Noso() {
	    return this.getToken(HisyeoWordParser.Noso, 0);
	};

	Nodu() {
	    return this.getToken(HisyeoWordParser.Nodu, 0);
	};

	Nozi() {
	    return this.getToken(HisyeoWordParser.Nozi, 0);
	};

	Nomu() {
	    return this.getToken(HisyeoWordParser.Nomu, 0);
	};

	Non() {
	    return this.getToken(HisyeoWordParser.Non, 0);
	};

	Nonto() {
	    return this.getToken(HisyeoWordParser.Nonto, 0);
	};

	Noilu() {
	    return this.getToken(HisyeoWordParser.Noilu, 0);
	};

	Muxi() {
	    return this.getToken(HisyeoWordParser.Muxi, 0);
	};

	Neigin() {
	    return this.getToken(HisyeoWordParser.Neigin, 0);
	};

	Nec() {
	    return this.getToken(HisyeoWordParser.Nec, 0);
	};

	Nokso() {
	    return this.getToken(HisyeoWordParser.Nokso, 0);
	};

	Nicu() {
	    return this.getToken(HisyeoWordParser.Nicu, 0);
	};

	Nixin() {
	    return this.getToken(HisyeoWordParser.Nixin, 0);
	};

	Nilol() {
	    return this.getToken(HisyeoWordParser.Nilol, 0);
	};

	Nukulo() {
	    return this.getToken(HisyeoWordParser.Nukulo, 0);
	};

	Nucoto() {
	    return this.getToken(HisyeoWordParser.Nucoto, 0);
	};

	Numuno() {
	    return this.getToken(HisyeoWordParser.Numuno, 0);
	};

	Nuluhu() {
	    return this.getToken(HisyeoWordParser.Nuluhu, 0);
	};

	Wokto() {
	    return this.getToken(HisyeoWordParser.Wokto, 0);
	};

	Wobi() {
	    return this.getToken(HisyeoWordParser.Wobi, 0);
	};

	Wokut() {
	    return this.getToken(HisyeoWordParser.Wokut, 0);
	};

	Nuyo() {
	    return this.getToken(HisyeoWordParser.Nuyo, 0);
	};

	Woloko() {
	    return this.getToken(HisyeoWordParser.Woloko, 0);
	};

	Wowoe() {
	    return this.getToken(HisyeoWordParser.Wowoe, 0);
	};

	Woyu() {
	    return this.getToken(HisyeoWordParser.Woyu, 0);
	};

	Wolik() {
	    return this.getToken(HisyeoWordParser.Wolik, 0);
	};

	Wexon() {
	    return this.getToken(HisyeoWordParser.Wexon, 0);
	};

	Wikse() {
	    return this.getToken(HisyeoWordParser.Wikse, 0);
	};

	Wixonu() {
	    return this.getToken(HisyeoWordParser.Wixonu, 0);
	};

	Wik() {
	    return this.getToken(HisyeoWordParser.Wik, 0);
	};

	Wiluwo() {
	    return this.getToken(HisyeoWordParser.Wiluwo, 0);
	};

	Wuto() {
	    return this.getToken(HisyeoWordParser.Wuto, 0);
	};

	Wibolo() {
	    return this.getToken(HisyeoWordParser.Wibolo, 0);
	};

	Wulus() {
	    return this.getToken(HisyeoWordParser.Wulus, 0);
	};

	Wutun() {
	    return this.getToken(HisyeoWordParser.Wutun, 0);
	};

	Wuot() {
	    return this.getToken(HisyeoWordParser.Wuot, 0);
	};

	Lozido() {
	    return this.getToken(HisyeoWordParser.Lozido, 0);
	};

	Lozo() {
	    return this.getToken(HisyeoWordParser.Lozo, 0);
	};

	Lono() {
	    return this.getToken(HisyeoWordParser.Lono, 0);
	};

	Longi() {
	    return this.getToken(HisyeoWordParser.Longi, 0);
	};

	Lolu() {
	    return this.getToken(HisyeoWordParser.Lolu, 0);
	};

	Leknek() {
	    return this.getToken(HisyeoWordParser.Leknek, 0);
	};

	Lonkin() {
	    return this.getToken(HisyeoWordParser.Lonkin, 0);
	};

	Lexetko() {
	    return this.getToken(HisyeoWordParser.Lexetko, 0);
	};

	Lismu() {
	    return this.getToken(HisyeoWordParser.Lismu, 0);
	};

	Listo() {
	    return this.getToken(HisyeoWordParser.Listo, 0);
	};

	Limien() {
	    return this.getToken(HisyeoWordParser.Limien, 0);
	};

	Libu() {
	    return this.getToken(HisyeoWordParser.Libu, 0);
	};

	Luhu() {
	    return this.getToken(HisyeoWordParser.Luhu, 0);
	};

	Luok() {
	    return this.getToken(HisyeoWordParser.Luok, 0);
	};

	Luicu() {
	    return this.getToken(HisyeoWordParser.Luicu, 0);
	};

	Lucku() {
	    return this.getToken(HisyeoWordParser.Lucku, 0);
	};

	Yokuntik() {
	    return this.getToken(HisyeoWordParser.Yokuntik, 0);
	};

	Yogo() {
	    return this.getToken(HisyeoWordParser.Yogo, 0);
	};

	Yoskinyo() {
	    return this.getToken(HisyeoWordParser.Yoskinyo, 0);
	};

	Yoldun() {
	    return this.getToken(HisyeoWordParser.Yoldun, 0);
	};

	Youxin() {
	    return this.getToken(HisyeoWordParser.Youxin, 0);
	};

	Yocno() {
	    return this.getToken(HisyeoWordParser.Yocno, 0);
	};

	Yone() {
	    return this.getToken(HisyeoWordParser.Yone, 0);
	};

	Yinyunci() {
	    return this.getToken(HisyeoWordParser.Yinyunci, 0);
	};

	Yofuk() {
	    return this.getToken(HisyeoWordParser.Yofuk, 0);
	};

	Yukwoi() {
	    return this.getToken(HisyeoWordParser.Yukwoi, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HisyeoWordParserListener ) {
	        listener.enterRawNouns(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HisyeoWordParserListener ) {
	        listener.exitRawNouns(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HisyeoWordParserVisitor ) {
	        return visitor.visitRawNouns(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RawModifiersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HisyeoWordParser.RULE_rawModifiers;
    }

	Oksios() {
	    return this.getToken(HisyeoWordParser.Oksios, 0);
	};

	Ogoge() {
	    return this.getToken(HisyeoWordParser.Ogoge, 0);
	};

	Osyen() {
	    return this.getToken(HisyeoWordParser.Osyen, 0);
	};

	Otos() {
	    return this.getToken(HisyeoWordParser.Otos, 0);
	};

	Obunyun() {
	    return this.getToken(HisyeoWordParser.Obunyun, 0);
	};

	Ofine() {
	    return this.getToken(HisyeoWordParser.Ofine, 0);
	};

	Omulto() {
	    return this.getToken(HisyeoWordParser.Omulto, 0);
	};

	Oltu() {
	    return this.getToken(HisyeoWordParser.Oltu, 0);
	};

	Osole() {
	    return this.getToken(HisyeoWordParser.Osole, 0);
	};

	Odon() {
	    return this.getToken(HisyeoWordParser.Odon, 0);
	};

	Obok() {
	    return this.getToken(HisyeoWordParser.Obok, 0);
	};

	Elentet() {
	    return this.getToken(HisyeoWordParser.Elentet, 0);
	};

	Efun() {
	    return this.getToken(HisyeoWordParser.Efun, 0);
	};

	Eme() {
	    return this.getToken(HisyeoWordParser.Eme, 0);
	};

	Eleo() {
	    return this.getToken(HisyeoWordParser.Eleo, 0);
	};

	Isbulyol() {
	    return this.getToken(HisyeoWordParser.Isbulyol, 0);
	};

	Infultin() {
	    return this.getToken(HisyeoWordParser.Infultin, 0);
	};

	Ibudu() {
	    return this.getToken(HisyeoWordParser.Ibudu, 0);
	};

	Iwote() {
	    return this.getToken(HisyeoWordParser.Iwote, 0);
	};

	Usundul() {
	    return this.getToken(HisyeoWordParser.Usundul, 0);
	};

	Ilxizuk() {
	    return this.getToken(HisyeoWordParser.Ilxizuk, 0);
	};

	Uklo() {
	    return this.getToken(HisyeoWordParser.Uklo, 0);
	};

	Ubenus() {
	    return this.getToken(HisyeoWordParser.Ubenus, 0);
	};

	Ubolni() {
	    return this.getToken(HisyeoWordParser.Ubolni, 0);
	};

	Ufulit() {
	    return this.getToken(HisyeoWordParser.Ufulit, 0);
	};

	Unbol() {
	    return this.getToken(HisyeoWordParser.Unbol, 0);
	};

	Utok() {
	    return this.getToken(HisyeoWordParser.Utok, 0);
	};

	Usowo() {
	    return this.getToken(HisyeoWordParser.Usowo, 0);
	};

	Umomi() {
	    return this.getToken(HisyeoWordParser.Umomi, 0);
	};

	Uncoi() {
	    return this.getToken(HisyeoWordParser.Uncoi, 0);
	};

	Unidu() {
	    return this.getToken(HisyeoWordParser.Unidu, 0);
	};

	Ulkefi() {
	    return this.getToken(HisyeoWordParser.Ulkefi, 0);
	};

	Hoos() {
	    return this.getToken(HisyeoWordParser.Hoos, 0);
	};

	Ulgukin() {
	    return this.getToken(HisyeoWordParser.Ulgukin, 0);
	};

	Hokuxi() {
	    return this.getToken(HisyeoWordParser.Hokuxi, 0);
	};

	Hokiki() {
	    return this.getToken(HisyeoWordParser.Hokiki, 0);
	};

	Hosin() {
	    return this.getToken(HisyeoWordParser.Hosin, 0);
	};

	Homus() {
	    return this.getToken(HisyeoWordParser.Homus, 0);
	};

	Hondot() {
	    return this.getToken(HisyeoWordParser.Hondot, 0);
	};

	Henonde() {
	    return this.getToken(HisyeoWordParser.Henonde, 0);
	};

	Hiklihos() {
	    return this.getToken(HisyeoWordParser.Hiklihos, 0);
	};

	Helxun() {
	    return this.getToken(HisyeoWordParser.Helxun, 0);
	};

	Hitnodet() {
	    return this.getToken(HisyeoWordParser.Hitnodet, 0);
	};

	Hiyoli() {
	    return this.getToken(HisyeoWordParser.Hiyoli, 0);
	};

	Hizon() {
	    return this.getToken(HisyeoWordParser.Hizon, 0);
	};

	Huunhu() {
	    return this.getToken(HisyeoWordParser.Huunhu, 0);
	};

	Huluko() {
	    return this.getToken(HisyeoWordParser.Huluko, 0);
	};

	Hunsik() {
	    return this.getToken(HisyeoWordParser.Hunsik, 0);
	};

	Hudul() {
	    return this.getToken(HisyeoWordParser.Hudul, 0);
	};

	Kotonhon() {
	    return this.getToken(HisyeoWordParser.Kotonhon, 0);
	};

	Kocko() {
	    return this.getToken(HisyeoWordParser.Kocko, 0);
	};

	Kotilmok() {
	    return this.getToken(HisyeoWordParser.Kotilmok, 0);
	};

	Kobut() {
	    return this.getToken(HisyeoWordParser.Kobut, 0);
	};

	Konxo() {
	    return this.getToken(HisyeoWordParser.Konxo, 0);
	};

	Konwo() {
	    return this.getToken(HisyeoWordParser.Konwo, 0);
	};

	Konbokbo() {
	    return this.getToken(HisyeoWordParser.Konbokbo, 0);
	};

	Kotikol() {
	    return this.getToken(HisyeoWordParser.Kotikol, 0);
	};

	Koxente() {
	    return this.getToken(HisyeoWordParser.Koxente, 0);
	};

	Kodus() {
	    return this.getToken(HisyeoWordParser.Kodus, 0);
	};

	Konen() {
	    return this.getToken(HisyeoWordParser.Konen, 0);
	};

	Kondonse() {
	    return this.getToken(HisyeoWordParser.Kondonse, 0);
	};

	Konyec() {
	    return this.getToken(HisyeoWordParser.Konyec, 0);
	};

	Keskin() {
	    return this.getToken(HisyeoWordParser.Keskin, 0);
	};

	Kexik() {
	    return this.getToken(HisyeoWordParser.Kexik, 0);
	};

	Kiluku() {
	    return this.getToken(HisyeoWordParser.Kiluku, 0);
	};

	Konbo() {
	    return this.getToken(HisyeoWordParser.Konbo, 0);
	};

	Kioso() {
	    return this.getToken(HisyeoWordParser.Kioso, 0);
	};

	Kikolo() {
	    return this.getToken(HisyeoWordParser.Kikolo, 0);
	};

	Kinoxi() {
	    return this.getToken(HisyeoWordParser.Kinoxi, 0);
	};

	Kildo() {
	    return this.getToken(HisyeoWordParser.Kildo, 0);
	};

	Kiyo() {
	    return this.getToken(HisyeoWordParser.Kiyo, 0);
	};

	Kutin() {
	    return this.getToken(HisyeoWordParser.Kutin, 0);
	};

	Kinlik() {
	    return this.getToken(HisyeoWordParser.Kinlik, 0);
	};

	Kuonlon() {
	    return this.getToken(HisyeoWordParser.Kuonlon, 0);
	};

	Kuzou() {
	    return this.getToken(HisyeoWordParser.Kuzou, 0);
	};

	Gosil() {
	    return this.getToken(HisyeoWordParser.Gosil, 0);
	};

	Kuyo() {
	    return this.getToken(HisyeoWordParser.Kuyo, 0);
	};

	Gonzil() {
	    return this.getToken(HisyeoWordParser.Gonzil, 0);
	};

	Golbinus() {
	    return this.getToken(HisyeoWordParser.Golbinus, 0);
	};

	Golfon() {
	    return this.getToken(HisyeoWordParser.Golfon, 0);
	};

	Go() {
	    return this.getToken(HisyeoWordParser.Go, 0);
	};

	Gonyumon() {
	    return this.getToken(HisyeoWordParser.Gonyumon, 0);
	};

	Goluo() {
	    return this.getToken(HisyeoWordParser.Goluo, 0);
	};

	Gowo() {
	    return this.getToken(HisyeoWordParser.Gowo, 0);
	};

	Gemolen() {
	    return this.getToken(HisyeoWordParser.Gemolen, 0);
	};

	Gelmis() {
	    return this.getToken(HisyeoWordParser.Gelmis, 0);
	};

	Gik() {
	    return this.getToken(HisyeoWordParser.Gik, 0);
	};

	Gion() {
	    return this.getToken(HisyeoWordParser.Gion, 0);
	};

	Gufis() {
	    return this.getToken(HisyeoWordParser.Gufis, 0);
	};

	Guso() {
	    return this.getToken(HisyeoWordParser.Guso, 0);
	};

	Gunokol() {
	    return this.getToken(HisyeoWordParser.Gunokol, 0);
	};

	Gulobi() {
	    return this.getToken(HisyeoWordParser.Gulobi, 0);
	};

	Totsi() {
	    return this.getToken(HisyeoWordParser.Totsi, 0);
	};

	Tocit() {
	    return this.getToken(HisyeoWordParser.Tocit, 0);
	};

	Toncoi() {
	    return this.getToken(HisyeoWordParser.Toncoi, 0);
	};

	Tonko() {
	    return this.getToken(HisyeoWordParser.Tonko, 0);
	};

	Tolki() {
	    return this.getToken(HisyeoWordParser.Tolki, 0);
	};

	Tigoyo() {
	    return this.getToken(HisyeoWordParser.Tigoyo, 0);
	};

	Tifulci() {
	    return this.getToken(HisyeoWordParser.Tifulci, 0);
	};

	Tiku() {
	    return this.getToken(HisyeoWordParser.Tiku, 0);
	};

	Tikel() {
	    return this.getToken(HisyeoWordParser.Tikel, 0);
	};

	Tulkolyun() {
	    return this.getToken(HisyeoWordParser.Tulkolyun, 0);
	};

	Tut() {
	    return this.getToken(HisyeoWordParser.Tut, 0);
	};

	Cok() {
	    return this.getToken(HisyeoWordParser.Cok, 0);
	};

	Cosni() {
	    return this.getToken(HisyeoWordParser.Cosni, 0);
	};

	Conzodo() {
	    return this.getToken(HisyeoWordParser.Conzodo, 0);
	};

	Colot() {
	    return this.getToken(HisyeoWordParser.Colot, 0);
	};

	Counton() {
	    return this.getToken(HisyeoWordParser.Counton, 0);
	};

	Cokyen() {
	    return this.getToken(HisyeoWordParser.Cokyen, 0);
	};

	Cot() {
	    return this.getToken(HisyeoWordParser.Cot, 0);
	};

	Comel() {
	    return this.getToken(HisyeoWordParser.Comel, 0);
	};

	Conkok() {
	    return this.getToken(HisyeoWordParser.Conkok, 0);
	};

	Centik() {
	    return this.getToken(HisyeoWordParser.Centik, 0);
	};

	Cenci() {
	    return this.getToken(HisyeoWordParser.Cenci, 0);
	};

	Cenbo() {
	    return this.getToken(HisyeoWordParser.Cenbo, 0);
	};

	Cifulo() {
	    return this.getToken(HisyeoWordParser.Cifulo, 0);
	};

	Cies() {
	    return this.getToken(HisyeoWordParser.Cies, 0);
	};

	Cienxin() {
	    return this.getToken(HisyeoWordParser.Cienxin, 0);
	};

	Cinobu() {
	    return this.getToken(HisyeoWordParser.Cinobu, 0);
	};

	Cinzon() {
	    return this.getToken(HisyeoWordParser.Cinzon, 0);
	};

	Cunyu() {
	    return this.getToken(HisyeoWordParser.Cunyu, 0);
	};

	Cuti() {
	    return this.getToken(HisyeoWordParser.Cuti, 0);
	};

	Cubu() {
	    return this.getToken(HisyeoWordParser.Cubu, 0);
	};

	Cuxien() {
	    return this.getToken(HisyeoWordParser.Cuxien, 0);
	};

	Cunfu() {
	    return this.getToken(HisyeoWordParser.Cunfu, 0);
	};

	Sohou() {
	    return this.getToken(HisyeoWordParser.Sohou, 0);
	};

	Sokol() {
	    return this.getToken(HisyeoWordParser.Sokol, 0);
	};

	Sodolun() {
	    return this.getToken(HisyeoWordParser.Sodolun, 0);
	};

	Sodilu() {
	    return this.getToken(HisyeoWordParser.Sodilu, 0);
	};

	Sobuni() {
	    return this.getToken(HisyeoWordParser.Sobuni, 0);
	};

	Sofin() {
	    return this.getToken(HisyeoWordParser.Sofin, 0);
	};

	Sonkon() {
	    return this.getToken(HisyeoWordParser.Sonkon, 0);
	};

	Sonti() {
	    return this.getToken(HisyeoWordParser.Sonti, 0);
	};

	Sonsus() {
	    return this.getToken(HisyeoWordParser.Sonsus, 0);
	};

	Soltustik() {
	    return this.getToken(HisyeoWordParser.Soltustik, 0);
	};

	Sondonos() {
	    return this.getToken(HisyeoWordParser.Sondonos, 0);
	};

	Selbo() {
	    return this.getToken(HisyeoWordParser.Selbo, 0);
	};

	Siokbi() {
	    return this.getToken(HisyeoWordParser.Siokbi, 0);
	};

	Senzo() {
	    return this.getToken(HisyeoWordParser.Senzo, 0);
	};

	Sinexis() {
	    return this.getToken(HisyeoWordParser.Sinexis, 0);
	};

	Sumon() {
	    return this.getToken(HisyeoWordParser.Sumon, 0);
	};

	Sunbulno() {
	    return this.getToken(HisyeoWordParser.Sunbulno, 0);
	};

	Sunyotni() {
	    return this.getToken(HisyeoWordParser.Sunyotni, 0);
	};

	Suit() {
	    return this.getToken(HisyeoWordParser.Suit, 0);
	};

	Xoinbo() {
	    return this.getToken(HisyeoWordParser.Xoinbo, 0);
	};

	Subol() {
	    return this.getToken(HisyeoWordParser.Subol, 0);
	};

	Xobek() {
	    return this.getToken(HisyeoWordParser.Xobek, 0);
	};

	Xonluk() {
	    return this.getToken(HisyeoWordParser.Xonluk, 0);
	};

	Xowose() {
	    return this.getToken(HisyeoWordParser.Xowose, 0);
	};

	Xolxili() {
	    return this.getToken(HisyeoWordParser.Xolxili, 0);
	};

	Xoboi() {
	    return this.getToken(HisyeoWordParser.Xoboi, 0);
	};

	Xon() {
	    return this.getToken(HisyeoWordParser.Xon, 0);
	};

	Xecinoc() {
	    return this.getToken(HisyeoWordParser.Xecinoc, 0);
	};

	Xentil() {
	    return this.getToken(HisyeoWordParser.Xentil, 0);
	};

	Xisu() {
	    return this.getToken(HisyeoWordParser.Xisu, 0);
	};

	Xiko() {
	    return this.getToken(HisyeoWordParser.Xiko, 0);
	};

	Xidetli() {
	    return this.getToken(HisyeoWordParser.Xidetli, 0);
	};

	Xulmindo() {
	    return this.getToken(HisyeoWordParser.Xulmindo, 0);
	};

	Xiyocu() {
	    return this.getToken(HisyeoWordParser.Xiyocu, 0);
	};

	Dohil() {
	    return this.getToken(HisyeoWordParser.Dohil, 0);
	};

	Dode() {
	    return this.getToken(HisyeoWordParser.Dode, 0);
	};

	Dondun() {
	    return this.getToken(HisyeoWordParser.Dondun, 0);
	};

	Dokcon() {
	    return this.getToken(HisyeoWordParser.Dokcon, 0);
	};

	Didozu() {
	    return this.getToken(HisyeoWordParser.Didozu, 0);
	};

	Dile() {
	    return this.getToken(HisyeoWordParser.Dile, 0);
	};

	Dukwelit() {
	    return this.getToken(HisyeoWordParser.Dukwelit, 0);
	};

	Dusul() {
	    return this.getToken(HisyeoWordParser.Dusul, 0);
	};

	Dundon() {
	    return this.getToken(HisyeoWordParser.Dundon, 0);
	};

	Zomuni() {
	    return this.getToken(HisyeoWordParser.Zomuni, 0);
	};

	Zonubi() {
	    return this.getToken(HisyeoWordParser.Zonubi, 0);
	};

	Zoi() {
	    return this.getToken(HisyeoWordParser.Zoi, 0);
	};

	Zelen() {
	    return this.getToken(HisyeoWordParser.Zelen, 0);
	};

	Zensi() {
	    return this.getToken(HisyeoWordParser.Zensi, 0);
	};

	Zigil() {
	    return this.getToken(HisyeoWordParser.Zigil, 0);
	};

	Ziwit() {
	    return this.getToken(HisyeoWordParser.Ziwit, 0);
	};

	Zingu() {
	    return this.getToken(HisyeoWordParser.Zingu, 0);
	};

	Zilyois() {
	    return this.getToken(HisyeoWordParser.Zilyois, 0);
	};

	Botyoto() {
	    return this.getToken(HisyeoWordParser.Botyoto, 0);
	};

	Botuk() {
	    return this.getToken(HisyeoWordParser.Botuk, 0);
	};

	Bodi() {
	    return this.getToken(HisyeoWordParser.Bodi, 0);
	};

	Bono() {
	    return this.getToken(HisyeoWordParser.Bono, 0);
	};

	Bomoge() {
	    return this.getToken(HisyeoWordParser.Bomoge, 0);
	};

	Bongosi() {
	    return this.getToken(HisyeoWordParser.Bongosi, 0);
	};

	Bonoxo() {
	    return this.getToken(HisyeoWordParser.Bonoxo, 0);
	};

	Bolute() {
	    return this.getToken(HisyeoWordParser.Bolute, 0);
	};

	Bolimot() {
	    return this.getToken(HisyeoWordParser.Bolimot, 0);
	};

	Boyok() {
	    return this.getToken(HisyeoWordParser.Boyok, 0);
	};

	Belisis() {
	    return this.getToken(HisyeoWordParser.Belisis, 0);
	};

	Besu() {
	    return this.getToken(HisyeoWordParser.Besu, 0);
	};

	Bilit() {
	    return this.getToken(HisyeoWordParser.Bilit, 0);
	};

	Bikonte() {
	    return this.getToken(HisyeoWordParser.Bikonte, 0);
	};

	Bicuon() {
	    return this.getToken(HisyeoWordParser.Bicuon, 0);
	};

	Bibok() {
	    return this.getToken(HisyeoWordParser.Bibok, 0);
	};

	Bisu() {
	    return this.getToken(HisyeoWordParser.Bisu, 0);
	};

	Binhun() {
	    return this.getToken(HisyeoWordParser.Binhun, 0);
	};

	Bilus() {
	    return this.getToken(HisyeoWordParser.Bilus, 0);
	};

	But() {
	    return this.getToken(HisyeoWordParser.But, 0);
	};

	Buku() {
	    return this.getToken(HisyeoWordParser.Buku, 0);
	};

	Bunxin() {
	    return this.getToken(HisyeoWordParser.Bunxin, 0);
	};

	Bundu() {
	    return this.getToken(HisyeoWordParser.Bundu, 0);
	};

	Bugot() {
	    return this.getToken(HisyeoWordParser.Bugot, 0);
	};

	Busin() {
	    return this.getToken(HisyeoWordParser.Busin, 0);
	};

	Buihi() {
	    return this.getToken(HisyeoWordParser.Buihi, 0);
	};

	Budiko() {
	    return this.getToken(HisyeoWordParser.Budiko, 0);
	};

	Bulo() {
	    return this.getToken(HisyeoWordParser.Bulo, 0);
	};

	Buslu() {
	    return this.getToken(HisyeoWordParser.Buslu, 0);
	};

	Fonfuk() {
	    return this.getToken(HisyeoWordParser.Fonfuk, 0);
	};

	Fonmot() {
	    return this.getToken(HisyeoWordParser.Fonmot, 0);
	};

	Fogicin() {
	    return this.getToken(HisyeoWordParser.Fogicin, 0);
	};

	Felkono() {
	    return this.getToken(HisyeoWordParser.Felkono, 0);
	};

	Folni() {
	    return this.getToken(HisyeoWordParser.Folni, 0);
	};

	Felcin() {
	    return this.getToken(HisyeoWordParser.Felcin, 0);
	};

	Fildonbun() {
	    return this.getToken(HisyeoWordParser.Fildonbun, 0);
	};

	Fiectu() {
	    return this.getToken(HisyeoWordParser.Fiectu, 0);
	};

	Fiki() {
	    return this.getToken(HisyeoWordParser.Fiki, 0);
	};

	Ficwo() {
	    return this.getToken(HisyeoWordParser.Ficwo, 0);
	};

	Fimosyos() {
	    return this.getToken(HisyeoWordParser.Fimosyos, 0);
	};

	Fitikos() {
	    return this.getToken(HisyeoWordParser.Fitikos, 0);
	};

	Funsut() {
	    return this.getToken(HisyeoWordParser.Funsut, 0);
	};

	Funlit() {
	    return this.getToken(HisyeoWordParser.Funlit, 0);
	};

	Funbetsi() {
	    return this.getToken(HisyeoWordParser.Funbetsi, 0);
	};

	Moskul() {
	    return this.getToken(HisyeoWordParser.Moskul, 0);
	};

	Moziko() {
	    return this.getToken(HisyeoWordParser.Moziko, 0);
	};

	Moxo() {
	    return this.getToken(HisyeoWordParser.Moxo, 0);
	};

	Momoki() {
	    return this.getToken(HisyeoWordParser.Momoki, 0);
	};

	Montuksol() {
	    return this.getToken(HisyeoWordParser.Montuksol, 0);
	};

	Mokwon() {
	    return this.getToken(HisyeoWordParser.Mokwon, 0);
	};

	Mocibo() {
	    return this.getToken(HisyeoWordParser.Mocibo, 0);
	};

	Mefus() {
	    return this.getToken(HisyeoWordParser.Mefus, 0);
	};

	Mofi() {
	    return this.getToken(HisyeoWordParser.Mofi, 0);
	};

	Metlios() {
	    return this.getToken(HisyeoWordParser.Metlios, 0);
	};

	Monbili() {
	    return this.getToken(HisyeoWordParser.Monbili, 0);
	};

	Meduson() {
	    return this.getToken(HisyeoWordParser.Meduson, 0);
	};

	Miou() {
	    return this.getToken(HisyeoWordParser.Miou, 0);
	};

	Mihuon() {
	    return this.getToken(HisyeoWordParser.Mihuon, 0);
	};

	Miteten() {
	    return this.getToken(HisyeoWordParser.Miteten, 0);
	};

	Mistu() {
	    return this.getToken(HisyeoWordParser.Mistu, 0);
	};

	Mile() {
	    return this.getToken(HisyeoWordParser.Mile, 0);
	};

	Muilo() {
	    return this.getToken(HisyeoWordParser.Muilo, 0);
	};

	Mixofo() {
	    return this.getToken(HisyeoWordParser.Mixofo, 0);
	};

	Muun() {
	    return this.getToken(HisyeoWordParser.Muun, 0);
	};

	Mukno() {
	    return this.getToken(HisyeoWordParser.Mukno, 0);
	};

	Mustokin() {
	    return this.getToken(HisyeoWordParser.Mustokin, 0);
	};

	Muncu() {
	    return this.getToken(HisyeoWordParser.Muncu, 0);
	};

	Mulu() {
	    return this.getToken(HisyeoWordParser.Mulu, 0);
	};

	Nokdo() {
	    return this.getToken(HisyeoWordParser.Nokdo, 0);
	};

	Mufeu() {
	    return this.getToken(HisyeoWordParser.Mufeu, 0);
	};

	No() {
	    return this.getToken(HisyeoWordParser.No, 0);
	};

	Nexe() {
	    return this.getToken(HisyeoWordParser.Nexe, 0);
	};

	Nebu() {
	    return this.getToken(HisyeoWordParser.Nebu, 0);
	};

	Nendol() {
	    return this.getToken(HisyeoWordParser.Nendol, 0);
	};

	Neos() {
	    return this.getToken(HisyeoWordParser.Neos, 0);
	};

	Nexodi() {
	    return this.getToken(HisyeoWordParser.Nexodi, 0);
	};

	Nelo() {
	    return this.getToken(HisyeoWordParser.Nelo, 0);
	};

	Nikful() {
	    return this.getToken(HisyeoWordParser.Nikful, 0);
	};

	Niok() {
	    return this.getToken(HisyeoWordParser.Niok, 0);
	};

	Niecni() {
	    return this.getToken(HisyeoWordParser.Niecni, 0);
	};

	Nungo() {
	    return this.getToken(HisyeoWordParser.Nungo, 0);
	};

	Nulto() {
	    return this.getToken(HisyeoWordParser.Nulto, 0);
	};

	Nubuso() {
	    return this.getToken(HisyeoWordParser.Nubuso, 0);
	};

	Nulun() {
	    return this.getToken(HisyeoWordParser.Nulun, 0);
	};

	Wohi() {
	    return this.getToken(HisyeoWordParser.Wohi, 0);
	};

	Wodino() {
	    return this.getToken(HisyeoWordParser.Wodino, 0);
	};

	Wonkuk() {
	    return this.getToken(HisyeoWordParser.Wonkuk, 0);
	};

	Welto() {
	    return this.getToken(HisyeoWordParser.Welto, 0);
	};

	Winit() {
	    return this.getToken(HisyeoWordParser.Winit, 0);
	};

	Wixes() {
	    return this.getToken(HisyeoWordParser.Wixes, 0);
	};

	Wuktomu() {
	    return this.getToken(HisyeoWordParser.Wuktomu, 0);
	};

	Wili() {
	    return this.getToken(HisyeoWordParser.Wili, 0);
	};

	Lohot() {
	    return this.getToken(HisyeoWordParser.Lohot, 0);
	};

	Losol() {
	    return this.getToken(HisyeoWordParser.Losol, 0);
	};

	Londuluk() {
	    return this.getToken(HisyeoWordParser.Londuluk, 0);
	};

	Loc() {
	    return this.getToken(HisyeoWordParser.Loc, 0);
	};

	Legefu() {
	    return this.getToken(HisyeoWordParser.Legefu, 0);
	};

	Lefotol() {
	    return this.getToken(HisyeoWordParser.Lefotol, 0);
	};

	Lionxin() {
	    return this.getToken(HisyeoWordParser.Lionxin, 0);
	};

	Liule() {
	    return this.getToken(HisyeoWordParser.Liule, 0);
	};

	Litiwe() {
	    return this.getToken(HisyeoWordParser.Litiwe, 0);
	};

	Lis() {
	    return this.getToken(HisyeoWordParser.Lis, 0);
	};

	Lito() {
	    return this.getToken(HisyeoWordParser.Lito, 0);
	};

	Luko() {
	    return this.getToken(HisyeoWordParser.Luko, 0);
	};

	Lucik() {
	    return this.getToken(HisyeoWordParser.Lucik, 0);
	};

	Lunti() {
	    return this.getToken(HisyeoWordParser.Lunti, 0);
	};

	Youmok() {
	    return this.getToken(HisyeoWordParser.Youmok, 0);
	};

	Yobe() {
	    return this.getToken(HisyeoWordParser.Yobe, 0);
	};

	Yonlus() {
	    return this.getToken(HisyeoWordParser.Yonlus, 0);
	};

	Youli() {
	    return this.getToken(HisyeoWordParser.Youli, 0);
	};

	Yumon() {
	    return this.getToken(HisyeoWordParser.Yumon, 0);
	};

	Yinsuk() {
	    return this.getToken(HisyeoWordParser.Yinsuk, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HisyeoWordParserListener ) {
	        listener.enterRawModifiers(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HisyeoWordParserListener ) {
	        listener.exitRawModifiers(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HisyeoWordParserVisitor ) {
	        return visitor.visitRawModifiers(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConnectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HisyeoWordParser.RULE_connector;
    }

	En() {
	    return this.getToken(HisyeoWordParser.En, 0);
	};

	Un() {
	    return this.getToken(HisyeoWordParser.Un, 0);
	};

	Bine() {
	    return this.getToken(HisyeoWordParser.Bine, 0);
	};

	Lekin() {
	    return this.getToken(HisyeoWordParser.Lekin, 0);
	};

	Yodo() {
	    return this.getToken(HisyeoWordParser.Yodo, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HisyeoWordParserListener ) {
	        listener.enterConnector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HisyeoWordParserListener ) {
	        listener.exitConnector(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HisyeoWordParserVisitor ) {
	        return visitor.visitConnector(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




HisyeoWordParser.PostpositionContext = PostpositionContext; 
HisyeoWordParser.PronounContext = PronounContext; 
HisyeoWordParser.RawVerbsContext = RawVerbsContext; 
HisyeoWordParser.RawNounsContext = RawNounsContext; 
HisyeoWordParser.RawModifiersContext = RawModifiersContext; 
HisyeoWordParser.ConnectorContext = ConnectorContext; 
