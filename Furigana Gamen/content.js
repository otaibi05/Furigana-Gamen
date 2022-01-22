var kanjiArray = ["亜", "唖", "娃", "阿", "哀", "愛", "挨", "逢", "葵", "茜", "悪", "握", "渥", "旭", "葦", "芦", "鯵", "梓", "圧", "斡", "扱", "宛", "姐", "虻", "飴", "絢", "綾", "鮎", "或", "粟", "袷", "安", "庵", "按", "暗", "案", "闇", "鞍", "杏", "以", "伊", "位", "依", "偉", "囲", "夷", "委", "威", "尉", "惟", "意", "慰", "易", "椅", "為", "畏", "異", "移", "維", "緯", "胃", "萎", "衣", "謂", "違", "遺", "医", "井", "亥", "域", "育", "郁", "磯", "一", "壱", "溢", "逸", "稲", "茨", "芋", "鰯", "允", "印", "咽", "員", "因", "姻", "引", "飲", "淫", "胤", "蔭", "院", "陰", "隠", "韻", "吋", "右", "宇", "烏", "羽", "迂", "雨", "卯", "鵜", "窺", "丑", "碓", "臼", "渦", "嘘", "唄", "欝", "蔚", "鰻", "姥", "厩", "浦", "瓜", "閏", "噂", "云", "運", "雲", "荏", "餌", "叡", "営", "嬰", "影", "映", "曳", "栄", "永", "泳", "洩", "瑛", "盈", "穎", "英", "衛", "詠", "鋭", "液", "疫", "益", "駅", "悦", "謁", "越", "閲", "榎", "厭", "円", "園", "堰", "奄", "宴", "延", "怨", "掩", "援", "沿", "演", "炎", "焔", "煙", "燕", "猿", "縁", "艶", "苑", "遠", "鉛", "鴛", "塩", "於", "汚", "甥", "凹", "央", "奥", "往", "対", "押", "旺", "横", "欧", "殴", "王", "翁", "襖", "鴬", "鴎", "黄", "岡", "沖", "荻", "億", "屋", "憶", "臆", "桶", "牡", "乙", "俺", "卸", "恩", "温", "穏", "音", "下", "化", "仮", "何", "伽", "価", "佳", "加", "可", "嘉", "夏", "嫁", "家", "寡", "科", "暇", "果", "架", "歌", "河", "火", "珂", "禍", "禾", "稼", "箇", "花", "苛", "茄", "荷", "華", "菓", "蝦", "課", "嘩", "貨", "迦", "過", "霞", "蚊", "俄", "峨", "我", "牙", "画", "臥", "芽", "蛾", "賀", "雅", "餓", "駕", "介", "会", "解", "回", "塊", "壊", "廻", "快", "怪", "悔", "恢", "懐", "戒", "拐", "改", "魁", "晦", "械", "海", "灰", "界", "皆", "絵", "芥", "蟹", "開", "階", "貝", "凱", "劾", "外", "咳", "害", "崖", "慨", "概", "涯", "碍", "蓋", "街", "該", "鎧", "骸", "浬", "馨", "蛙", "垣", "柿", "蛎", "鈎", "劃", "嚇", "各", "廓", "拡", "撹", "格", "核", "殻", "獲", "確", "穫", "覚", "角", "赫", "較", "郭", "閣", "隔", "革", "学", "岳", "楽", "額", "顎", "掛", "笠", "樫", "橿", "梶", "鰍", "潟", "割", "喝", "恰", "括", "活", "渇", "滑", "葛", "褐", "轄", "且", "鰹", "叶", "樺", "鞄", "株", "兜", "竃", "蒲", "釜", "鎌", "噛", "鴨", "茅", "萱", "粥", "刈", "苅", "瓦", "乾", "侃", "冠", "寒", "刊", "勘", "勧", "巻", "喚", "堪", "姦", "完", "官", "寛", "干", "幹", "患", "感", "慣", "憾", "換", "敢", "柑", "桓", "棺", "款", "歓", "汗", "漢", "澗", "潅", "環", "甘", "監", "看", "竿", "管", "簡", "緩", "缶", "翰", "肝", "艦", "莞", "観", "諌", "貫", "還", "鑑", "間", "閑", "関", "陥", "韓", "館", "舘", "丸", "含", "岸", "巌", "玩", "癌", "眼", "岩", "翫", "贋", "雁", "頑", "顔", "願", "企", "伎", "危", "喜", "器", "基", "奇", "嬉", "寄", "岐", "希", "幾", "忌", "揮", "机", "旗", "既", "期", "棋", "棄", "機", "帰", "毅", "口", "気", "汽", "畿", "祈", "季", "稀", "紀", "徽", "規", "記", "貴", "起", "軌", "輝", "飢", "騎", "鬼", "亀", "偽", "儀", "妓", "宜", "戯", "技", "擬", "欺", "犠", "疑", "祇", "義", "蟻", "誼", "議", "掬", "菊", "鞠", "吉", "吃", "喫", "桔", "橘", "詰", "砧", "杵", "黍", "却", "客", "脚", "虐", "逆", "丘", "久", "仇", "休", "及", "吸", "宮", "弓", "急", "救", "朽", "求", "汲", "泣", "灸", "球", "究", "窮", "笈", "級", "糾", "給", "旧", "牛", "去", "居", "巨", "拒", "拠", "挙", "渠", "虚", "許", "距", "鋸", "漁", "禦", "魚", "亨", "享", "京", "供", "侠", "僑", "兇", "競", "共", "凶", "協", "匡", "卿", "叫", "喬", "境", "峡", "強", "彊", "怯", "恐", "恭", "挟", "教", "橋", "況", "狂", "狭", "矯", "胸", "脅", "興", "蕎", "郷", "鏡", "響", "饗", "驚", "仰", "凝", "尭", "暁", "業", "局", "曲", "極", "玉", "桐", "粁", "僅", "勤", "均", "巾", "錦", "斤", "欣", "欽", "琴", "禁", "禽", "筋", "緊", "芹", "菌", "衿", "襟", "謹", "近", "金", "吟", "銀", "九", "倶", "句", "区", "狗", "玖", "矩", "苦", "躯", "駆", "駈", "駒", "具", "愚", "虞", "喰", "空", "偶", "寓", "遇", "隅", "串", "櫛", "釧", "屑", "屈", "掘", "窟", "沓", "靴", "轡", "窪", "熊", "隈", "栗", "繰", "桑", "鍬", "勲", "君", "薫", "訓", "群", "軍", "郡", "卦", "袈", "係", "傾", "刑", "兄", "啓", "圭", "珪", "型", "契", "形", "径", "恵", "慶", "慧", "憩", "掲", "携", "敬", "景", "桂", "渓", "畦", "稽", "系", "経", "継", "繋", "罫", "茎", "荊", "蛍", "計", "詣", "警", "軽", "頚", "鶏", "芸", "迎", "鯨", "劇", "戟", "撃", "激", "隙", "桁", "傑", "欠", "決", "潔", "穴", "結", "血", "訣", "月", "件", "倹", "倦", "健", "兼", "券", "剣", "喧", "圏", "堅", "嫌", "建", "憲", "懸", "拳", "捲", "検", "権", "牽", "犬", "献", "研", "硯", "絹", "県", "肩", "見", "謙", "賢", "軒", "遣", "鍵", "険", "顕", "験", "鹸", "元", "原", "厳", "幻", "弦", "減", "源", "玄", "現", "絃", "舷", "言", "諺", "限", "乎", "個", "古", "呼", "固", "姑", "孤", "己", "庫", "弧", "戸", "故", "枯", "湖", "狐", "糊", "袴", "股", "胡", "菰", "虎", "誇", "跨", "鈷", "雇", "顧", "鼓", "五", "互", "伍", "午", "呉", "吾", "娯", "後", "御", "悟", "梧", "檎", "瑚", "碁", "語", "誤", "護", "醐", "乞", "鯉", "交", "佼", "侯", "候", "倖", "光", "公", "功", "効", "勾", "厚", "人", "向", "后", "喉", "坑", "垢", "好", "孔", "孝", "宏", "工", "巧", "巷", "幸", "広", "庚", "康", "弘", "恒", "慌", "抗", "拘", "控", "攻", "昂", "晃", "更", "杭", "校", "梗", "構", "江", "洪", "浩", "港", "溝", "甲", "皇", "硬", "稿", "糠", "紅", "紘", "絞", "綱", "耕", "考", "肯", "肱", "腔", "膏", "航", "荒", "行", "衡", "講", "貢", "購", "郊", "酵", "鉱", "鋼", "閤", "降", "項", "香", "高", "鴻", "剛", "劫", "号", "合", "壕", "拷", "濠", "豪", "轟", "麹", "克", "刻", "告", "国", "穀", "酷", "鵠", "黒", "獄", "漉", "腰", "甑", "忽", "惚", "骨", "狛", "込", "此", "頃", "今", "困", "坤", "墾", "婚", "恨", "懇", "昏", "昆", "根", "梱", "混", "痕", "紺", "艮", "魂", "些", "佐", "叉", "唆", "嵯", "左", "差", "査", "沙", "瑳", "砂", "詐", "鎖", "裟", "坐", "座", "挫", "債", "催", "再", "最", "哉", "塞", "妻", "宰", "彩", "才", "採", "栽", "歳", "済", "災", "采", "犀", "砕", "砦", "祭", "斎", "細", "菜", "裁", "載", "際", "剤", "在", "材", "罪", "財", "冴", "坂", "阪", "堺", "榊", "肴", "咲", "崎", "埼", "碕", "鷺", "作", "削", "搾", "昨", "朔", "柵", "窄", "策", "索", "錯", "桜", "鮭", "笹", "匙", "冊", "刷", "察", "拶", "撮", "擦", "札", "殺", "薩", "雑", "皐", "鯖", "捌", "錆", "鮫", "皿", "晒", "三", "傘", "参", "山", "惨", "撒", "散", "桟", "燦", "珊", "産", "算", "纂", "蚕", "讃", "賛", "酸", "餐", "斬", "暫", "残", "仕", "仔", "伺", "使", "刺", "司", "史", "嗣", "四", "士", "始", "姉", "姿", "子", "屍", "市", "師", "志", "思", "指", "支", "孜", "斯", "施", "旨", "枝", "止", "死", "氏", "獅", "祉", "私", "糸", "紙", "紫", "肢", "脂", "至", "視", "詞", "詩", "試", "誌", "諮", "資", "賜", "雌", "飼", "歯", "事", "似", "侍", "児", "字", "寺", "慈", "持", "時", "次", "滋", "治", "爾", "璽", "痔", "磁", "示", "而", "耳", "自", "蒔", "辞", "汐", "鹿", "式", "識", "鴫", "竺", "軸", "宍", "雫", "七", "叱", "執", "失", "嫉", "室", "悉", "湿", "漆", "疾", "質", "実", "蔀", "篠", "偲", "柴", "芝", "屡", "蕊", "縞", "舎", "写", "射", "捨", "赦", "斜", "煮", "社", "紗", "者", "謝", "車", "遮", "蛇", "邪", "借", "勺", "尺", "杓", "灼", "爵", "酌", "釈", "錫", "若", "寂", "弱", "惹", "主", "取", "守", "手", "朱", "殊", "狩", "珠", "種", "腫", "趣", "酒", "首", "儒", "受", "呪", "寿", "授", "樹", "綬", "需", "囚", "収", "周", "宗", "就", "州", "修", "愁", "拾", "洲", "秀", "秋", "終", "繍", "習", "臭", "舟", "蒐", "衆", "襲", "讐", "蹴", "輯", "週", "酋", "酬", "集", "醜", "什", "住", "充", "十", "従", "戎", "柔", "汁", "渋", "獣", "縦", "重", "銃", "叔", "夙", "宿", "淑", "祝", "縮", "粛", "塾", "熟", "出", "術", "述", "俊", "峻", "春", "瞬", "竣", "駿", "准", "循", "旬", "楯", "殉", "淳", "準", "潤", "盾", "純", "巡", "遵", "醇", "順", "処", "初", "所", "暑", "曙", "渚", "庶", "緒", "署", "書", "薯", "藷", "諸", "助", "叙", "女", "序", "徐", "恕", "鋤", "除", "傷", "償", "勝", "匠", "升", "召", "哨", "商", "唱", "嘗", "奨", "妾", "娼", "宵", "将", "小", "少", "尚", "庄", "床", "廠", "彰", "承", "抄", "招", "掌", "捷", "昇", "昌", "昭", "晶", "松", "梢", "樟", "樵", "沼", "消", "渉", "湘", "焼", "焦", "照", "症", "省", "硝", "礁", "祥", "称", "章", "笑", "粧", "紹", "肖", "菖", "蕉", "衝", "裳", "訟", "証", "詔", "詳", "象", "賞", "醤", "鉦", "鍾", "鐘", "障", "鞘", "上", "丈", "丞", "乗", "冗", "剰", "城", "場", "壌", "嬢", "常", "情", "擾", "条", "杖", "浄", "状", "畳", "穣", "蒸", "譲", "醸", "錠", "嘱", "埴", "飾", "拭", "植", "殖", "燭", "織", "職", "色", "触", "食", "蝕", "辱", "尻", "伸", "信", "侵", "唇", "娠", "寝", "審", "心", "慎", "振", "新", "晋", "森", "榛", "浸", "深", "申", "疹", "真", "神", "秦", "紳", "臣", "芯", "薪", "親", "診", "身", "辛", "進", "針", "震", "仁", "刃", "塵", "壬", "尋", "甚", "尽", "腎", "訊", "迅", "陣", "靭", "笥", "須", "酢", "図", "厨", "逗", "吹", "垂", "帥", "推", "水", "炊", "睡", "粋", "翠", "衰", "遂", "酔", "錐", "錘", "随", "瑞", "髄", "崇", "嵩", "数", "枢", "趨", "雛", "据", "杉", "椙", "菅", "頗", "雀", "裾", "澄", "摺", "寸", "世", "瀬", "畝", "是", "凄", "制", "勢", "姓", "征", "性", "成", "政", "整", "星", "晴", "棲", "栖", "正", "清", "牲", "生", "盛", "精", "聖", "声", "製", "西", "誠", "誓", "請", "逝", "醒", "青", "静", "斉", "税", "脆", "隻", "席", "惜", "戚", "斥", "昔", "析", "石", "積", "籍", "績", "脊", "責", "赤", "跡", "蹟", "碩", "切", "拙", "接", "摂", "折", "設", "窃", "節", "説", "雪", "絶", "舌", "蝉", "仙", "先", "千", "占", "宣", "専", "尖", "川", "戦", "扇", "撰", "栓", "栴", "泉", "浅", "洗", "染", "潜", "煎", "煽", "旋", "穿", "箭", "線", "繊", "羨", "腺", "舛", "船", "薦", "詮", "賎", "践", "選", "遷", "銭", "銑", "閃", "鮮", "前", "善", "漸", "然", "全", "禅", "繕", "膳", "糎", "噌", "塑", "岨", "措", "曾", "曽", "楚", "狙", "疏", "疎", "礎", "祖", "租", "粗", "素", "組", "蘇", "訴", "阻", "遡", "鼠", "僧", "創", "双", "叢", "倉", "喪", "壮", "奏", "爽", "宋", "層", "惣", "想", "捜", "掃", "挿", "掻", "操", "早", "曹", "巣", "槍", "槽", "漕", "燥", "争", "痩", "相", "窓", "糟", "総", "綜", "聡", "草", "荘", "葬", "蒼", "藻", "装", "走", "送", "遭", "鎗", "霜", "騒", "像", "増", "憎", "臓", "蔵", "贈", "造", "促", "側", "則", "即", "息", "捉", "束", "測", "足", "速", "俗", "属", "賊", "族", "続", "卒", "袖", "其", "揃", "存", "孫", "尊", "損", "村", "遜", "他", "多", "太", "汰", "唾", "堕", "妥", "惰", "打", "舵", "楕", "陀", "駄", "騨", "体", "堆", "応", "耐", "帯", "待", "怠", "態", "戴", "替", "泰", "滞", "胎", "腿", "苔", "袋", "貸", "退", "逮", "隊", "黛", "鯛", "代", "台", "大", "第", "醍", "題", "鷹", "滝", "瀧", "卓", "啄", "宅", "托", "択", "拓", "沢", "濯", "琢", "託", "鐸", "濁", "諾", "茸", "凧", "蛸", "只", "叩", "但", "達", "辰", "奪", "脱", "巽", "竪", "辿", "棚", "谷", "狸", "鱈", "樽", "誰", "丹", "単", "嘆", "坦", "担", "探", "旦", "歎", "淡", "湛", "炭", "短", "端", "箪", "綻", "耽", "胆", "蛋", "誕", "鍛", "団", "壇", "弾", "断", "暖", "檀", "段", "男", "談", "値", "知", "地", "弛", "恥", "智", "池", "痴", "稚", "置", "致", "蜘", "遅", "馳", "築", "畜", "竹", "筑", "蓄", "逐", "秩", "窒", "茶", "嫡", "着", "中", "仲", "宙", "忠", "抽", "昼", "柱", "注", "虫", "衷", "註", "酎", "鋳", "駐", "樗", "瀦", "猪", "苧", "著", "貯", "丁", "兆", "凋", "喋", "寵", "帖", "帳", "庁", "弔", "張", "彫", "徴", "懲", "挑", "暢", "朝", "潮", "牒", "町", "眺", "聴", "脹", "腸", "蝶", "調", "諜", "超", "跳", "銚", "長", "頂", "鳥", "勅", "捗", "直", "朕", "沈", "珍", "賃", "鎮", "陳", "津", "墜", "椎", "槌", "追", "鎚", "痛", "通", "塚", "栂", "掴", "槻", "佃", "漬", "柘", "辻", "蔦", "綴", "鍔", "椿", "潰", "坪", "壷", "嬬", "紬", "爪", "吊", "釣", "鶴", "亭", "低", "停", "偵", "剃", "貞", "呈", "堤", "定", "帝", "底", "庭", "廷", "弟", "悌", "抵", "挺", "提", "梯", "汀", "碇", "禎", "程", "締", "艇", "訂", "諦", "蹄", "逓", "邸", "鄭", "釘", "鼎", "泥", "摘", "擢", "敵", "滴", "的", "笛", "適", "鏑", "溺", "哲", "徹", "撤", "轍", "迭", "鉄", "典", "填", "天", "展", "店", "添", "纏", "甜", "貼", "転", "顛", "点", "伝", "殿", "澱", "田", "電", "兎", "吐", "堵", "塗", "妬", "屠", "徒", "斗", "杜", "渡", "登", "菟", "賭", "途", "都", "鍍", "砥", "努", "度", "土", "奴", "怒", "倒", "党", "冬", "凍", "刀", "唐", "塔", "套", "島", "嶋", "悼", "投", "搭", "東", "桃", "棟", "盗", "淘", "湯", "涛", "灯", "燈", "当", "痘", "祷", "等", "答", "筒", "糖", "統", "到", "董", "蕩", "藤", "討", "謄", "豆", "踏", "逃", "透", "鐙", "陶", "頭", "騰", "闘", "働", "動", "同", "堂", "導", "憧", "撞", "洞", "瞳", "童", "胴", "萄", "道", "銅", "峠", "鴇", "匿", "得", "徳", "涜", "特", "督", "禿", "篤", "毒", "独", "読", "栃", "橡", "凸", "突", "椴", "届", "鳶", "苫", "寅", "酉", "瀞", "噸", "屯", "惇", "敦", "沌", "豚", "遁", "頓", "呑", "曇", "鈍", "奈", "那", "日", "乍", "凪", "薙", "謎", "灘", "捺", "鍋", "楢", "馴", "縄", "畷", "南", "楠", "軟", "難", "汝", "二", "尼", "弐", "匂", "賑", "肉", "虹", "廿", "内", "乳", "入", "如", "尿", "韮", "任", "妊", "忍", "認", "濡", "禰", "祢", "寧", "葱", "猫", "熱", "年", "念", "捻", "撚", "燃", "粘", "乃", "廼", "之", "埜", "嚢", "悩", "濃", "納", "能", "脳", "膿", "農", "覗", "蚤", "巴", "把", "播", "覇", "杷", "波", "派", "琶", "破", "婆", "罵", "芭", "馬", "俳", "廃", "拝", "排", "敗", "杯", "盃", "牌", "背", "肺", "輩", "配", "倍", "培", "媒", "梅", "楳", "煤", "狽", "買", "売", "賠", "陪", "這", "蝿", "秤", "矧", "萩", "伯", "剥", "博", "拍", "柏", "泊", "白", "箔", "粕", "舶", "薄", "迫", "曝", "漠", "爆", "縛", "莫", "駁", "麦", "函", "箱", "箸", "肇", "筈", "櫨", "幡", "肌", "畑", "畠", "八", "鉢", "溌", "発", "醗", "髪", "伐", "罰", "抜", "筏", "閥", "鳩", "噺", "蛤", "隼", "伴", "判", "半", "反", "叛", "帆", "搬", "斑", "板", "氾", "汎", "版", "犯", "班", "畔", "繁", "般", "藩", "販", "範", "釆", "煩", "頒", "飯", "挽", "晩", "番", "盤", "磐", "蕃", "蛮", "匪", "卑", "否", "妃", "庇", "彼", "悲", "扉", "批", "披", "斐", "比", "泌", "疲", "皮", "碑", "秘", "緋", "罷", "肥", "被", "誹", "費", "避", "非", "飛", "樋", "備", "尾", "微", "枇", "毘", "琵", "眉", "美", "鼻", "柊", "稗", "匹", "疋", "髭", "彦", "膝", "菱", "肘", "弼", "必", "畢", "筆", "逼", "桧", "姫", "媛", "紐", "百", "謬", "俵", "標", "氷", "漂", "瓢", "票", "表", "評", "豹", "廟", "描", "病", "秒", "苗", "錨", "鋲", "蒜", "蛭", "鰭", "品", "彬", "浜", "瀕", "貧", "賓", "頻", "敏", "瓶", "不", "付", "埠", "夫", "婦", "富", "冨", "布", "府", "怖", "扶", "敷", "斧", "普", "浮", "父", "符", "腐", "膚", "芙", "譜", "負", "賦", "赴", "阜", "附", "侮", "撫", "武", "舞", "葡", "蕪", "部", "封", "楓", "風", "葺", "蕗", "伏", "副", "復", "幅", "服", "福", "腹", "複", "覆", "淵", "弗", "払", "沸", "仏", "物", "鮒", "分", "吻", "噴", "墳", "憤", "扮", "焚", "奮", "粉", "糞", "紛", "雰", "本", "聞", "丙", "併", "兵", "塀", "幣", "平", "弊", "柄", "並", "蔽", "閉", "陛", "米", "頁", "僻", "壁", "癖", "碧", "別", "瞥", "蔑", "箆", "偏", "変", "片", "篇", "編", "辺", "返", "遍", "便", "勉", "娩", "弁", "鞭", "保", "舗", "鋪", "圃", "捕", "歩", "甫", "補", "輔", "穂", "募", "墓", "慕", "戊", "暮", "母", "簿", "菩", "倣", "俸", "包", "呆", "報", "奉", "宝", "峰", "峯", "崩", "庖", "抱", "捧", "放", "方", "朋", "法", "泡", "烹", "砲", "縫", "胞", "芳", "萌", "蓬", "蜂", "褒", "訪", "豊", "邦", "鋒", "飽", "鳳", "鵬", "乏", "亡", "傍", "剖", "坊", "妨", "帽", "忘", "忙", "房", "暴", "望", "某", "棒", "冒", "紡", "肪", "膨", "謀", "貌", "貿", "鉾", "防", "吠", "頬", "北", "僕", "卜", "墨", "撲", "朴", "牧", "睦", "穆", "釦", "勃", "没", "殆", "堀", "幌", "奔", "文", "翻", "凡", "盆", "摩", "磨", "魔", "麻", "埋", "妹", "昧", "枚", "毎", "哩", "槙", "幕", "膜", "枕", "鮪", "柾", "鱒", "桝", "亦", "俣", "又", "抹", "末", "沫", "迄", "侭", "繭", "麿", "万", "慢", "満", "漫", "蔓", "味", "未", "魅", "巳", "箕", "岬", "密", "蜜", "湊", "蓑", "稔", "脈", "妙", "粍", "民", "眠", "務", "夢", "無", "牟", "矛", "霧", "鵡", "椋", "婿", "娘", "冥", "名", "命", "明", "盟", "迷", "銘", "鳴", "姪", "牝", "滅", "免", "棉", "綿", "緬", "面", "麺", "摸", "模", "茂", "妄", "孟", "毛", "猛", "盲", "網", "耗", "蒙", "儲", "木", "黙", "目", "杢", "勿", "餅", "尤", "戻", "籾", "貰", "問", "悶", "紋", "門", "匁", "也", "冶", "夜", "爺", "耶", "野", "弥", "矢", "厄", "役", "約", "薬", "訳", "躍", "靖", "柳", "薮", "鑓", "愉", "愈", "油", "癒", "諭", "輸", "唯", "佑", "優", "勇", "友", "宥", "幽", "悠", "憂", "揖", "有", "柚", "湧", "涌", "猶", "由", "祐", "裕", "誘", "遊", "邑", "郵", "雄", "融", "夕", "予", "余", "与", "誉", "輿", "預", "傭", "幼", "妖", "容", "庸", "揚", "揺", "擁", "曜", "楊", "様", "洋", "溶", "熔", "用", "窯", "羊", "耀", "葉", "蓉", "要", "謡", "踊", "遥", "陽", "養", "慾", "抑", "欲", "沃", "浴", "翌", "翼", "淀", "羅", "螺", "裸", "来", "莱", "頼", "雷", "洛", "絡", "落", "酪", "乱", "卵", "嵐", "欄", "濫", "藍", "蘭", "覧", "利", "吏", "履", "李", "梨", "理", "璃", "痢", "裏", "裡", "里", "離", "陸", "律", "率", "立", "葎", "掠", "略", "流", "溜", "琉", "留", "硫", "粒", "隆", "竜", "龍", "侶", "慮", "旅", "虜", "了", "亮", "僚", "両", "凌", "寮", "料", "梁", "涼", "猟", "療", "瞭", "稜", "糧", "良", "諒", "遼", "量", "陵", "領", "力", "緑", "倫", "厘", "林", "淋", "燐", "琳", "臨", "輪", "隣", "鱗", "麟", "瑠", "塁", "涙", "累", "類", "令", "伶", "例", "冷", "励", "嶺", "怜", "玲", "礼", "苓", "鈴", "隷", "零", "霊", "麗", "齢", "暦", "歴", "列", "劣", "烈", "裂", "廉", "恋", "憐", "漣", "煉", "簾", "練", "聯", "蓮", "連", "錬", "呂", "魯", "櫓", "炉", "賂", "路", "露", "労", "婁", "廊", "弄", "朗", "楼", "榔", "浪", "漏", "牢", "狼", "篭", "老", "聾", "蝋", "郎", "六", "麓", "禄", "肋", "録", "論", "倭", "和", "話", "歪", "賄", "脇", "惑", "枠", "鷲", "亙", "亘", "鰐", "詫", "藁", "蕨", "椀", "湾", "碗", "腕", "弌", "丐", "个", "丼", "乖", "乘", "亂", "于", "亞", "亢", "亳", "仍", "仄", "仆", "仗", "仞", "仭", "仟", "伉", "佚", "估", "佛", "佝", "佗", "佇", "侈", "侏", "侘", "佻", "佩", "佰", "侑", "佯", "來", "儘", "俟", "俎", "俘", "俑", "俚", "俐", "俤", "俥", "倚", "倨", "倔", "倪", "倥", "倅", "伜", "倡", "倩", "俯", "倆", "偃", "假", "會", "偕", "偈", "做", "偖", "偬", "偸", "傀", "傚", "傅", "傴", "傲", "僊", "傳", "僂", "僥", "僭", "僣", "僮", "價", "僵", "儁", "儂", "儕", "儔", "儚", "儡", "儺", "儷", "儼", "儻", "兀", "兌", "兔", "兢", "冀", "冂", "册", "冉", "冏", "冑", "冕", "冖", "冤", "冦", "冢", "冪", "冱", "冲", "冰", "况", "冽", "凉", "凛", "几", "處", "凩", "凭", "凰", "凾", "刎", "刪", "刮", "刳", "刹", "剄", "剋", "剌", "剔", "剪", "剴", "剿", "剽", "劍", "劒", "劈", "辨", "勁", "勞", "勦", "飭", "匆", "匈", "甸", "匍", "匐", "匏", "匕", "匚", "匣", "匸", "區", "卆", "卅", "卉", "卍", "卩", "卮", "厂", "厖", "厠", "厥", "參", "簒", "雙", "叟", "曼", "叮", "叭", "叺", "吽", "吭", "吼", "吮", "吶", "吝", "咏", "呵", "咎", "呟", "呱", "呷", "咒", "呻", "咀", "呶", "咄", "咆", "哇", "咸", "咥", "咬", "哄", "哈", "咨", "咫", "咤", "哥", "哮", "哭", "哺", "啀", "啣", "啜", "啖", "唸", "唳", "喙", "喀", "喊", "喟", "啻", "啾", "喘", "喞", "單", "啼", "喃", "喩", "喇", "喨", "嗚", "嗅", "嗟", "嗄", "嗜", "嗤", "嗔", "嘔", "嘖", "嗾", "嗽", "嘛", "嗹", "噎", "嘴", "嘶", "嘲", "嘸", "噫", "噤", "嘯", "噬", "噪", "嚆", "嚀", "嚊", "嚠", "嚔", "嚏", "嚥", "嚮", "囂", "嚼", "囁", "囃", "囀", "囈", "囑", "囓", "囗", "囮", "國", "圓", "團", "圖", "嗇", "坎", "址", "坏", "坩", "坡", "垓", "垤", "埃", "埆", "埔", "埒", "埓", "堊", "堋", "堙", "堝", "堡", "塋", "毀", "塒", "塹", "墅", "墟", "墺", "墻", "壅", "壑", "壜", "壟", "壺", "壹", "壻", "壼", "壽", "夊", "夥", "夭", "夾", "奕", "奐", "奎", "奚", "奢", "奠", "奧", "奸", "妁", "佞", "侫", "妣", "姆", "姨", "姜", "妍", "姙", "娟", "娑", "娜", "婀", "婬", "婉", "娵", "娶", "婢", "婪", "媚", "媼", "媾", "嫋", "嫂", "媽", "嫣", "嫗", "嫩", "嬌", "嬋", "嬲", "嬪", "嬶", "嬾", "孃", "孀", "孑", "孕", "孩", "孰", "孳", "孵", "學", "孺", "宀", "宦", "宸", "寃", "寇", "寔", "寐", "實", "寞", "寥", "寶", "寳", "將", "專", "尠", "尢", "尨", "尸", "尹", "屁", "屆", "屎", "屓", "屏", "屬", "屹", "岌", "峙", "峽", "峭", "崗", "崛", "嵌", "嵬", "嶄", "嶮", "嶽", "嶼", "巉", "巍", "巓", "巖", "巛", "巫", "已", "巵", "帚", "帙", "帑", "帛", "帶", "帷", "幄", "幀", "幔", "幟", "幢", "幇", "并", "幺", "广", "庠", "廂", "廈", "廐", "廏", "廣", "廚", "廢", "廨", "廩", "廬", "廴", "弉", "彝", "弋", "弑", "弖", "弩", "弭", "彌", "彎", "弯", "彑", "彗", "彙", "彡", "彭", "彳", "彷", "彿", "徊", "從", "徘", "徨", "徭", "忖", "忻", "忸", "忝", "忿", "怡", "怙", "怩", "怱", "怫", "怏", "怺", "恚", "恪", "恟", "恍", "恣", "恃", "恤", "恬", "恫", "恙", "悍", "惧", "悚", "悄", "悛", "悖", "悒", "悧", "悋", "惡", "悸", "悴", "忰", "悽", "惘", "愕", "惶", "惷", "惻", "惱", "愍", "愎", "慇", "愾", "愧", "慊", "愴", "慂", "慄", "慳", "慷", "慙", "慚", "慫", "慴", "慥", "慟", "憖", "憬", "憔", "憚", "憊", "憑", "憫", "憮", "懊", "應", "懷", "懈", "懃", "憺", "罹", "懦", "懣", "懶", "懺", "懼", "懾", "戀", "戈", "戍", "戌", "戛", "戞", "截", "戮", "戰", "戲", "扁", "扞", "扣", "扛", "扠", "扨", "扼", "抉", "抒", "抓", "抃", "抔", "拗", "拏", "拿", "拆", "拈", "拜", "拌", "拇", "抛", "拉", "挌", "拮", "拱", "挂", "拵", "捐", "挾", "捍", "捏", "掖", "掣", "掏", "掉", "掟", "捩", "揆", "揣", "揉", "插", "揶", "揄", "搦", "搶", "搗", "搨", "搏", "摧", "摯", "攪", "撓", "撥", "撩", "撈", "撼", "據", "擒", "擅", "撻", "擘", "擂", "擱", "擠", "擡", "擯", "攬", "擲", "攀", "擽", "攘", "攣", "攫", "攴", "攵", "攷", "敲", "數", "斂", "斃", "變", "斛", "斟", "斫", "斷", "旆", "旁", "旌", "旒", "旛", "无", "旱", "杳", "昵", "昴", "晏", "晝", "晤", "晧", "晨", "晰", "暈", "暉", "暝", "暹", "曉", "曖", "曚", "曠", "曩", "曰", "朦", "朧", "朮", "朶", "杆", "杞", "杠", "杙", "枉", "杼", "杪", "枋", "枡", "枷", "柯", "柬", "枳", "柩", "枸", "柞", "柝", "柢", "柮", "枹", "檜", "栞", "框", "栩", "栲", "桎", "梳", "桙", "桷", "桿", "梟", "梏", "梭", "梔", "條", "梛", "梃", "檮", "桴", "梵", "梠", "梺", "椏", "棊", "椈", "棘", "棍", "棧", "棕", "椶", "椒", "棗", "棣", "棹", "棠", "椨", "椪", "椚", "椣", "楷", "楸", "楫", "楔", "楾", "楮", "椹", "椽", "椰", "楡", "楞", "楝", "楪", "榮", "槐", "槁", "槓", "榾", "寨", "榻", "槃", "榧", "榑", "榠", "榜", "榕", "榴", "槨", "樂", "槿", "權", "槲", "槧", "樅", "榱", "槭", "樒", "樣", "樓", "橄", "橇", "橢", "橙", "橈", "樸", "檐", "檍", "檄", "檣", "檗", "蘗", "檻", "櫃", "櫂", "檸", "檳", "檬", "櫞", "櫑", "櫟", "櫚", "櫪", "櫻", "欅", "蘖", "櫺", "欒", "欖", "鬱", "欷", "盜", "欹", "飮", "歇", "歉", "歔", "歸", "歹", "歿", "殄", "殃", "殪", "殯", "殲", "殱", "殳", "殷", "殼", "毋", "毟", "毬", "毫", "毳", "毯", "麾", "氈", "氓", "氣", "汞", "汪", "沁", "沛", "沒", "沐", "泄", "沽", "泝", "沮", "沱", "沾", "泛", "泪", "洟", "衍", "洸", "洵", "洒", "浣", "涓", "浚", "浙", "涎", "涕", "濤", "涅", "淹", "渕", "渊", "涵", "淦", "涸", "淆", "淬", "淺", "淙", "淪", "淮", "湮", "渙", "湲", "渾", "渣", "湫", "渫", "湍", "渟", "湃", "渺", "滿", "游", "溂", "溪", "溘", "溷", "滓", "溽", "溯", "滄", "溲", "滔", "滂", "溟", "漑", "灌", "滸", "滾", "漿", "滲", "漱", "漲", "滌", "漓", "滷", "澆", "潺", "澁", "潛", "濳", "潭", "潘", "澎", "澳", "澤", "澹", "澪", "濟", "濘", "濛", "瀉", "濺", "瀑", "瀏", "濾", "瀛", "瀚", "瀝", "瀘", "瀟", "瀰", "瀾", "灑", "灣", "炙", "炒", "炯", "烱", "炬", "炸", "炮", "烟", "烝", "烙", "焉", "烽", "焜", "焙", "煥", "煕", "煢", "煌", "煖", "熏", "燻", "熄", "熕", "熨", "熬", "燗", "熾", "燒", "燔", "燎", "燠", "燬", "燧", "燵", "燼", "燹", "燿", "爛", "爨", "爬", "爰", "爲", "爻", "爼", "爿", "牀", "牆", "牘", "牴", "牾", "犂", "犇", "犒", "犢", "狆", "狄", "狎", "狒", "狢", "狡", "狷", "猊", "猜", "猖", "猴", "猩", "猥", "猾", "獏", "獗", "獪", "獨", "獰", "獸", "獺", "珈", "玳", "珎", "玻", "珀", "珥", "珮", "珞", "瑯", "琥", "琲", "琺", "瑕", "琿", "瑟", "瑙", "瑁", "瑜", "瑣", "瑪", "瑶", "瑾", "璞", "璧", "瓊", "瓏", "瓔", "瓠", "瓣", "瓩", "瓮", "瓲", "甃", "甌", "甍", "甕", "甞", "甦", "畚", "畸", "當", "疆", "疇", "疊", "疔", "疚", "疝", "疥", "疣", "痂", "疳", "疵", "疽", "疸", "疼", "疱", "痍", "痒", "痙", "痣", "痞", "痾", "痼", "瘁", "痰", "痺", "痲", "痳", "瘋", "瘍", "瘧", "瘠", "瘡", "瘢", "瘤", "瘴", "瘰", "瘻", "癇", "癈", "癆", "癜", "癘", "癡", "癢", "癩", "癪", "癧", "癬", "癰", "癲", "癶", "癸", "發", "皀", "皎", "皓", "皙", "皰", "皴", "皸", "皹", "皺", "盂", "盒", "盞", "盡", "盥", "盧", "盪", "眈", "眇", "眄", "眩", "眞", "眥", "眦", "眛", "眷", "眸", "睇", "睨", "睫", "睛", "睥", "睿", "睾", "瞋", "瞑", "瞠", "瞞", "瞰", "瞿", "瞼", "瞽", "瞻", "矇", "矍", "矜", "矮", "砌", "砒", "礦", "硅", "硴", "硼", "碌", "碣", "碯", "磑", "磋", "磔", "碾", "碼", "磊", "磬", "磧", "磚", "磽", "礒", "礑", "礙", "礬", "礫", "祀", "祠", "祗", "祟", "祚", "祓", "祿", "禊", "禪", "禮", "禹", "秕", "秧", "秡", "秣", "稈", "稍", "稠", "稟", "禀", "稻", "稷", "穗", "穡", "穢", "穰", "穹", "穽", "窈", "窗", "窕", "窘", "窖", "窩", "竈", "窶", "竅", "竄", "窿", "邃", "竏", "站", "竦", "竭", "笏", "笊", "笆", "笙", "笞", "笨", "筐", "筺", "笄", "筍", "笋", "筌", "筅", "筵", "筥", "筧", "筬", "筮", "箝", "箍", "箜", "箚", "箋", "箒", "箏", "筝", "箙", "篋", "篁", "篌", "篏", "箴", "篆", "篝", "篩", "簑", "簔", "篦", "篥", "籠", "簀", "簇", "簓", "篳", "篷", "簗", "篶", "簣", "簧", "簪", "簟", "簷", "簫", "簽", "籌", "籃", "籀", "籐", "籟", "籤", "籖", "籥", "籬", "籵", "粃", "粤", "粳", "粲", "粱", "粮", "粽", "糀", "糂", "糒", "糜", "糢", "鬻", "糯", "糲", "糴", "糶", "糺", "紆", "紕", "紊", "紮", "紲", "絆", "絖", "絎", "絲", "絨", "絮", "絏", "絣", "經", "綉", "絛", "綏", "絽", "綛", "綺", "綮", "綵", "緇", "綽", "綫", "總", "綢", "綯", "緜", "綸", "綟", "綰", "緘", "緝", "緞", "緻", "緲", "緡", "縅", "縊", "縣", "縡", "縒", "縟", "縉", "縋", "縢", "繆", "繦", "縻", "縵", "縹", "繃", "縷", "縲", "縺", "繧", "繝", "繖", "繞", "繙", "繚", "繹", "繩", "繻", "繽", "辮", "纈", "纒", "纐", "纓", "纔", "纎", "纛", "纜", "缺", "罅", "罌", "罍", "罎", "罐", "罔", "罠", "罨", "罩", "羂", "羆", "羃", "羈", "羇", "羌", "羔", "羞", "羝", "羚", "羯", "羹", "羮", "羶", "羸", "翅", "翕", "翔", "翡", "翩", "翳", "翹", "飜", "耆", "耄", "耒", "耘", "耜", "耨", "耻", "聊", "聆", "聘", "聚", "聟", "聢", "聳", "聲", "聰", "聽", "聿", "肆", "肛", "肓", "肚", "肭", "胛", "胥", "胙", "胝", "胄", "胚", "胖", "脉", "胯", "胱", "脛", "脩", "脣", "腋", "隋", "脾", "腓", "腑", "胼", "腱", "腮", "腥", "腦", "腴", "膃", "膈", "膊", "膀", "膂", "膠", "膕", "膣", "腟", "膩", "膰", "膵", "膾", "臀", "臂", "膺", "臍", "臑", "臙", "臘", "臈", "臚", "臟", "臠", "臧", "臺", "臾", "舁", "舂", "舅", "與", "舊", "舍", "舐", "舩", "舫", "舸", "舳", "艀", "艙", "艘", "艟", "艤", "艨", "艪", "艫", "艱", "艷", "艸", "艾", "芍", "芒", "芫", "芟", "芻", "芬", "苣", "苟", "苒", "苴", "苳", "苺", "莓", "苹", "苞", "苜", "茉", "茵", "茴", "茲", "茱", "茹", "茯", "茫", "茗", "茘", "莚", "莪", "莟", "莢", "莖", "茣", "莎", "荼", "荳", "荵", "莉", "莨", "菴", "菫", "菎", "菽", "萃", "菘", "菁", "菠", "菲", "萍", "萠", "莽", "萸", "葭", "萼", "蒄", "葷", "葫", "蒭", "蒂", "葩", "萬", "葯", "葹", "萵", "蓊", "蒿", "蒟", "蓙", "蓍", "蒻", "蓚", "蓐", "蓆", "蓖", "蒡", "蓿", "蓴", "蔗", "蔘", "蔬", "蔟", "蔕", "蔔", "蓼", "蕈", "蕁", "蘂", "蕋", "薀", "薤", "薈", "薑", "薊", "薨", "蕭", "薔", "藪", "薇", "蕷", "蕾", "薐", "藉", "薺", "藏", "薹", "藐", "藕", "藝", "藥", "藜", "藹", "蘊", "藺", "蘆", "蘚", "蘿", "虔", "號", "虧", "虱", "蚓", "蚣", "蚩", "蚪", "蚋", "蚌", "蚶", "蚯", "蛄", "蛆", "蚰", "蛉", "蠣", "蚫", "蛔", "蛞", "蛩", "蛬", "蛟", "蛛", "蛯", "蜒", "蜆", "蜈", "蜀", "蜃", "蛻", "蜑", "蜉", "蜍", "蛹", "蜊", "蜴", "蜿", "蜷", "蜻", "蜥", "蜩", "蜚", "蝠", "蝟", "蝸", "蝌", "蝎", "蝴", "蝗", "蝨", "蝮", "蝙", "蝓", "蝣", "蠅", "螢", "螟", "螂", "螯", "蟋", "螽", "蟀", "蟐", "雖", "螫", "蟄", "螳", "蟇", "蟆", "螻", "蟯", "蟲", "蟠", "蠏", "蠍", "蟾", "蟶", "蟷", "蠎", "蟒", "蠑", "蠖", "蠕", "蠢", "蠱", "蠶", "蠧", "衄", "衒", "衙", "衢", "衫", "衾", "袞", "衵", "衽", "袵", "袂", "袗", "袒", "袙", "袢", "袍", "袤", "袿", "袱", "裃", "裄", "裔", "裘", "裙", "裝", "裹", "裨", "裲", "褄", "褌", "褊", "褓", "褞", "褥", "褪", "襁", "褻", "褶", "褸", "襠", "襞", "襦", "襤", "襯", "襴", "襷", "覈", "覊", "覘", "覡", "覯", "覲", "覺", "覽", "覿", "觀", "觚", "觜", "觝", "觴", "訃", "訌", "訛", "訝", "訥", "訶", "詁", "詛", "詈", "詭", "詢", "誅", "誂", "誨", "誡", "誑", "誦", "誣", "諄", "諍", "諂", "諚", "諫", "諳", "諧", "諤", "諱", "謔", "諠", "諢", "諷", "諛", "謚", "諡", "謖", "謐", "謗", "謳", "鞫", "謦", "謫", "謨", "譁", "譏", "譎", "證", "譚", "譫", "譟", "譬", "譴", "讀", "讌", "讎", "讒", "讓", "讖", "讚", "谺", "豁", "谿", "豈", "豌", "豎", "豕", "豬", "豸", "豺", "貂", "貉", "貅", "貍", "豼", "貘", "貪", "貽", "貳", "貮", "貶", "賤", "賣", "賚", "賽", "賺", "贄", "贅", "贏", "贍", "贐", "齎", "贓", "賍", "贔", "贖", "赧", "赭", "跂", "趾", "趺", "跏", "跚", "跌", "跛", "跋", "跪", "跫", "跟", "跣", "跼", "踉", "踝", "踞", "踐", "蹂", "踵", "踰", "蹊", "蹇", "蹉", "蹌", "蹈", "蹙", "蹤", "蹠", "踪", "蹣", "蹕", "蹶", "蹲", "蹼", "躁", "躇", "躅", "躄", "躊", "躓", "躑", "躙", "躪", "躡", "躬", "躰", "躱", "躾", "軈", "軋", "軛", "軻", "軫", "輊", "輒", "輓", "輜", "輛", "輌", "輦", "輳", "輻", "轅", "轂", "輾", "轌", "轉", "轆", "轗", "轢", "轤", "辜", "辟", "辣", "辭", "辯", "辷", "迚", "迪", "迯", "邇", "逅", "迹", "迺", "逑", "逕", "逡", "逍", "逞", "逹", "迸", "遏", "遑", "遉", "遖", "遯", "隨", "遲", "邂", "遽", "邁", "邀", "邊", "邏", "邯", "扈", "鄙", "鄲", "鄰", "酊", "酖", "酣", "酥", "酩", "醋", "醂", "醢", "醪", "醵", "醴", "醺", "釁", "釉", "釋", "釐", "釵", "鈞", "釿", "鈔", "鈕", "鈑", "鉞", "鉗", "鉉", "鉤", "鉈", "鈿", "鉋", "銜", "銓", "銛", "鋏", "銹", "銷", "鋩", "錏", "鋺", "錮", "錢", "錚", "錣", "錺", "錻", "鍼", "鍮", "鎬", "鎔", "鎹", "鏖", "鏗", "鏨", "鏘", "鏃", "鏝", "鏈", "鏤", "鐚", "鐔", "鐶", "鐫", "鐵", "鐺", "鑒", "鑄", "鑛", "鑠", "鑢", "鑞", "鑰", "鑵", "鑷", "鑽", "鑚", "鑼", "鑿", "閂", "閇", "閊", "閔", "閘", "閨", "閭", "閼", "閻", "閹", "閾", "闊", "濶", "闃", "闍", "闌", "闕", "闔", "闖", "關", "闡", "闥", "闢", "阡", "阨", "阮", "陌", "陋", "陞", "陝", "陟", "陬", "隍", "隘", "隕", "隗", "隧", "隱", "隴", "隹", "雎", "雋", "雉", "雍", "霍", "雕", "雹", "霄", "霆", "霓", "霑", "霏", "霖", "霙", "霰", "霹", "霽", "霾", "靄", "靆", "靂", "靉", "靜", "靠", "靨", "勒", "靫", "靱", "鞅", "靼", "靺", "鞆", "鞋", "鞏", "鞐", "鞜", "鞨", "鞦", "鞣", "鞳", "鞴", "韃", "韆", "韋", "韜", "韭", "韲", "竟", "頏", "頌", "頸", "頤", "頡", "頷", "頽", "顆", "顏", "顋", "顫", "顰", "顱", "顴", "顳", "颪", "颯", "颱", "颶", "飄", "飩", "餃", "餉", "餒", "餘", "餡", "餝", "餞", "餤", "餠", "餬", "餮", "餾", "饂", "饉", "饅", "饐", "饋", "饑", "饒", "饌", "饕", "馗", "馘", "馥", "馭", "馮", "駟", "駝", "駘", "駑", "駭", "駮", "駱", "駻", "駸", "騏", "騙", "騷", "驀", "騾", "驕", "驍", "驛", "驟", "驢", "驥", "驩", "骭", "骰", "骼", "髀", "髏", "髑", "體", "髢", "髣", "髯", "髮", "髴", "髱", "髷", "髻", "鬆", "鬘", "鬚", "鬟", "鬢", "鬣", "鬥", "鬧", "鬨", "鬩", "鬮", "鬲", "魄", "魃", "魏", "魍", "魎", "魑", "魘", "魴", "鮓", "鮃", "鮑", "鮗", "鮟", "鮠", "鮨", "鮴", "鯊", "鮹", "鯏", "鯑", "鯒", "鯣", "鯢", "鯤", "鯔", "鯡", "鰺", "鯱", "鯰", "鰕", "鰉", "鰓", "鰌", "鰆", "鰈", "鰒", "鰊", "鰮", "鰥", "鰤", "鰡", "鰰", "鱇", "鰾", "鱚", "鱠", "鱧", "鱶", "鱸", "鳧", "鳰", "鴉", "鴈", "鴃", "鴆", "鴦", "鶯", "鴣", "鴟", "鵄", "鴕", "鴒", "鴿", "鴾", "鵆", "鵝", "鵞", "鵤", "鵑", "鵐", "鵙", "鵲", "鶉", "鶇", "鶫", "鵯", "鵺", "鶚", "鶩", "鶲", "鷄", "鶻", "鶸", "鶺", "鷂", "鷓", "鷸", "鷦", "鷭", "鷯", "鷽", "鸚", "鸛", "鸞", "鹵", "鹹", "鹽", "麁", "麈", "麋", "麒", "麕", "麝", "麥", "麩", "麸", "麪", "麭", "靡", "黌", "黎", "黏", "黐", "黔", "黜", "點", "黝", "黠", "黥", "黯", "黴", "黶", "黽", "鼈", "鼕", "鼡", "鼬", "鼾", "齊", "齒", "齣", "齟", "齡", "齦", "齧", "齬", "齪", "齷", "齲", "齶", "龕", "龜", "槇", "遙", "凜", "熙", "乀", "乄", "你", "俏", "俠", "倘", "倜", "偓", "儞", "划", "刖", "剕", "剗", "劓", "匜", "厴", "呍", "咖", "咜", "唎", "啞", "嗉", "嗩", "嘈", "噁", "噯", "嚙", "嚬", "囉", "囊", "坅", "坷", "垜", "埵", "塌", "塡", "塤", "墝", "墩", "壎", "夔", "姧", "媳", "嬥", "孁", "孒", "孽", "屢", "巋", "弽", "徉", "徜", "忉", "惸", "愒", "慠", "拼", "挍", "挘", "挵", "捥", "搔", "搢", "摑", "擤", "攩", "杮", "枘", "枻", "柹", "柃", "柲", "桛", "桫", "梂", "梘", "梣", "梲", "梻", "棈", "楂", "楣", "楤", "楲", "榀", "榨", "槵", "樏", "樝", "橅", "橉", "檉", "檝", "檞", "檫", "櫧", "欏", "殭", "毮", "氐", "泫", "洱", "涔", "潑", "瀆", "炷", "煆", "煠", "熇", "熳", "牖", "狳", "猨", "獦", "獱", "璆", "璫", "瓤", "瓫", "痀", "痎", "痤", "瘙", "瘦", "瘭", "癋", "癤", "癭", "皁", "眴", "睺", "瞟", "矠", "砑", "砰", "硨", "确", "碰", "磈", "磤", "磲", "禱", "秈", "秭", "稃", "稭", "窠", "竽", "筯", "箶", "篊", "簎", "簳", "簶", "籙", "籡", "籹", "粏", "粔", "糕", "糗", "糝", "糫", "糵", "紇", "絁", "縑", "繡", "繫", "纍", "羗", "耦", "胭", "腅", "腭", "芇", "芎", "芷", "苾", "茛", "莧", "菀", "菝", "葈", "葜", "蒅", "蒴", "蔤", "蕓", "蕙", "蕤", "蕺", "藋", "藦", "藿", "蘞", "虬", "虯", "蚜", "蛁", "蛑", "蛺", "蜓", "蜱", "蜾", "蝀", "蝃", "蝤", "蝥", "蝱", "蝲", "螈", "螠", "螭", "蟎", "蟖", "蟟", "蠁", "蠃", "蠆", "蠊", "蠔", "蠟", "袘", "裑", "襅", "誷", "譃", "豇", "豉", "貛", "趯", "跆", "跑", "踠", "蹋", "軀", "辦", "辵", "辶", "逬", "邈", "邌", "酛", "醨", "醬", "醶", "鈹", "鉏", "鉸", "鋙", "鍰", "鎺", "鑣", "閦", "閩", "闋", "靛", "鞺", "韘", "韛", "頰", "顇", "顖", "顚", "顦", "顬", "飳", "餛", "餢", "餻", "駃", "騠", "騸", "驎", "骶", "魛", "魞", "魣", "魨", "魬", "魳", "魹", "鮄", "鮐", "鮞", "鮬", "鮱", "鮸", "鯁", "鯎", "鯝", "鯥", "鯧", "鯯", "鯸", "鯺", "鯽", "鰖", "鰙", "鰞", "鰣", "鰧", "鰩", "鰱", "鰶", "鰷", "鱏", "鱓", "鱘", "鱛", "鱝", "鱟", "鱪", "鱜", "鱫", "鱨", "鱮", "鱰", "鱲", "鱵", "鳲", "鴴", "鵂", "鵟", "鵷", "鵼", "鶍", "鶵", "鷉", "鷗", "鷴", "鸊", "鹼", "麇", "麞", "麨", "麬", "麵", "黿", "鼉", "鼯", "鼹", "鼺", "龗", "𠮟", "𤭯", "𥝱", "𩸽", "𩺊", "么", "俱", "剝", "吞", "噓", "摹", "攲", "毗", "涮", "炻", "焮", "犰", "簞", "蟬", "錄", "魶"];
var instance = new Mark(document.querySelector("body"));
var wordsArray;
var sortedWordsArray;
var charPattern;
var wordPattern;
var kanjiOutput;
var furiganaOutput;
var wordCheck;
var duplicateCheckArray;
var rtElements;
var furiganaColor;
var furiganaPreview;
var htmlBody = document.body.innerHTML;
$.getJSON(chrome.runtime.getURL("kanjiapi_words.json"), function (json) {
  for (let j = 0; j < kanjiArray.length; j++) {
    setTimeout(function () {
      charPattern = new RegExp(kanjiArray[j] + "(?!((?!<ruby data-markjs=\"true\" class=\"ignore\">).)*<\/ruby>)(?!((?!=\").)*\")(?!((?!<script>).)*<\/script>)(?!((?!<!--)[\\s\\S])*-->)(?!((?!\/\\*)[\\s\\S])*\\*\/)", "");
      if (charPattern.test(htmlBody)) {
        wordsArray = [];
        sortedWordsArray = [];
        for (let z = 0; z < json.words[kanjiArray[j]].length; z++) {
          for (let y = 0; y < json.words[kanjiArray[j]][z].variants.length; y++) {
            if (json.words[kanjiArray[j]][z].variants[y].written.includes(kanjiArray[j])) {
              wordsArray.push([json.words[kanjiArray[j]][z].variants[y].written, json.words[kanjiArray[j]][z].variants[y].pronounced]);
            }
          }
        }
        sortedWordsArray = wordsArray.sort((a, b) => b[0].length - a[0].length);
        wordCheck = true;
        duplicateCheckArray = [];
        while (charPattern.test(htmlBody) && wordCheck == true) {
          for (let i = 0; i < sortedWordsArray.length; i++) {
            wordPattern = new RegExp(sortedWordsArray[i][0] + "(?!((?!<ruby data-markjs=\"true\" class=\"ignore\">).)*<\/ruby>)(?!((?!=\").)*\")(?!((?!<script>).)*<\/script>)(?!((?!<!--)[\\s\\S])*-->)(?!((?!\/\\*)[\\s\\S])*\\*\/)", "");
            if (wordPattern.test(htmlBody) && !duplicateCheckArray.includes(sortedWordsArray[i][0])) {
              kanjiOutput = sortedWordsArray[i][0];
              furiganaOutput = sortedWordsArray[i][1];
              duplicateCheckArray.push(sortedWordsArray[i][0]);
              wordCheck = true;
              break;
            }
            else {
              wordCheck = false;
            }
          }
          // console.log("RegEx: " + wordPattern);
          if (wordCheck == true) {
            // console.log("Kanji: " + kanjiOutput + " Furigana: " + furiganaOutput);
            instance.mark(kanjiOutput, { "exclude": [".ignore"], "className": "ignore", "furigana": furiganaOutput });
            htmlBody = document.body.innerHTML;
          }
        }
      }
    }, 0);
  }
  setTimeout(function () {
    rtElements = document.getElementsByTagName("rt");
    chrome.storage.sync.get("theColor", function (result) {
      furiganaColor = result.theColor;
      chrome.storage.sync.get("theRange", function (result) {
        furiganaPreview = result.theRange;
        for (let s = 0; s < rtElements.length; s++) {
          document.getElementsByTagName("rt")[s].style.color = furiganaColor + "";
          document.getElementsByTagName("rt")[s].style.fontSize = furiganaPreview + "";
        }
      });
    });
    chrome.runtime.sendMessage({ check: "yes" }, function (response) { });
  }, 0);
});