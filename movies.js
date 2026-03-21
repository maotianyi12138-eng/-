const movieData = [
  {
    "title": "红胡子 / 赤ひげ",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2215875666.jpg",
    "rating": 5,
    "genres": [
      "三船敏郎",
      "加山雄三",
      "山崎努",
      "团令子",
      "桑野美雪",
      "香川京子",
      "江原达怡",
      "二木照美",
      "根岸明美",
      "头师佳孝",
      "日本",
      "黑泽明",
      "红胡子",
      "剧情",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "攻壳机动队 / 攻殻機動隊",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2921045013.jpg",
    "rating": 5,
    "genres": [
      "田中敦子",
      "大塚明夫",
      "山寺宏一",
      "大木民夫",
      "家弓家正",
      "玄田哲章",
      "山内雅人",
      "小川真司",
      "山路和弘",
      "日本",
      "押井守",
      "动作",
      "科幻",
      "动画",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "萤火之森 / 蛍火の杜へ",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1675053073.jpg",
    "rating": 5,
    "genres": [
      "佐仓绫音",
      "内山昂辉",
      "辻亲八",
      "山本兼平",
      "后藤弘树",
      "今井麻美",
      "田谷隼",
      "日本",
      "大森贵弘",
      "萤火之森",
      "剧情",
      "爱情",
      "动画",
      "奇幻",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "奔腾年代 / Seabiscuit",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p845519371.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "奔腾年代",
      "剧情",
      "历史",
      "运动",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "芝加哥 / Chicago",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2454020352.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "德国",
      "芝加哥",
      "喜剧",
      "歌舞",
      "犯罪",
      "英语",
      "匈牙利语"
    ],
    "type": "电影"
  },
  {
    "title": "训练日 / Training Day",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1350561397.jpg",
    "rating": 5,
    "genres": [
      "德瑞博士",
      "美国",
      "训练日",
      "犯罪",
      "剧情",
      "惊悚",
      "英语",
      "俄语",
      "西班牙语",
      "韩语",
      "希腊语"
    ],
    "type": "电影"
  },
  {
    "title": "穆赫兰道 / Mulholland Dr.",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792248233.jpg",
    "rating": 3,
    "genres": [
      "安·米勒",
      "法国",
      "美国",
      "穆赫兰道",
      "剧情",
      "悬疑",
      "惊悚",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "弗里达 / Frida",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p729625029.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "墨西哥",
      "加拿大",
      "弗里达",
      "传记",
      "剧情",
      "爱情",
      "英语",
      "法语",
      "俄语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "永不妥协 / Erin Brockovich",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1221456067.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "永不妥协",
      "剧情",
      "传记",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "告别有情天 / The Remains of the Day",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1056237302.jpg",
    "rating": 4,
    "genres": [
      "英国",
      "美国",
      "剧情",
      "爱情",
      "英语",
      "德语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "无言的山丘 / 無言的山丘",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522310203.jpg",
    "rating": 5,
    "genres": [
      "杨贵媚",
      "黄品源",
      "澎恰恰",
      "文英",
      "陈仙梅",
      "陈博正",
      "陆弈静",
      "许杰辉",
      "任长彬",
      "中国台湾",
      "王童",
      "剧情",
      "历史",
      "闽南语",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "热带鱼 / 熱帶魚",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1148607609.jpg",
    "rating": 5,
    "genres": [
      "林嘉宏",
      "文英",
      "林正盛",
      "郎祖筠",
      "阿匹婆",
      "陈慕义",
      "赵正平",
      "席敬伦",
      "连碧东",
      "范筱梵",
      "中国台湾",
      "陈玉勋",
      "热带鱼",
      "喜剧",
      "剧情",
      "闽南语"
    ],
    "type": "电影"
  },
  {
    "title": "走到尽头 / 끝까지 간다",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2183957412.jpg",
    "rating": 5,
    "genres": [
      "李善均",
      "赵震雄",
      "申正根",
      "郑满植",
      "申东美",
      "金东英",
      "周锡泰",
      "许廷恩",
      "朴宝剑",
      "李才元",
      "韩国",
      "金成勋",
      "走到尽头",
      "动作",
      "犯罪",
      "惊悚",
      "韩语"
    ],
    "type": "电影"
  },
  {
    "title": "四个婚礼和一个葬礼 / Four Weddings and a Funeral",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2423672584.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "喜剧",
      "爱情",
      "剧情",
      "英语",
      "英国手语"
    ],
    "type": "电影"
  },
  {
    "title": "理智与情感 / Sense and Sensibility",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1107322461.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "英国",
      "李安",
      "剧情",
      "爱情",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "莫里斯 / Maurice",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2455549510.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "莫里斯",
      "剧情",
      "爱情",
      "同性",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "诺丁山 / Notting Hill",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p480943589.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "美国",
      "诺丁山",
      "喜剧",
      "爱情",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "面纱 / The Painted Veil",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p480551279.jpg",
    "rating": 4,
    "genres": [
      "黄秋生",
      "美国",
      "中国大陆",
      "加拿大",
      "面纱",
      "剧情",
      "爱情",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "普罗旺斯的夏天 / Avis de mistral",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2176944875.jpg",
    "rating": 4,
    "genres": [
      "让·雷诺",
      "法国",
      "剧情",
      "喜剧",
      "家庭",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "托斯卡纳艳阳下 / Under the Tuscan Sun",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1361589750.jpg",
    "rating": 5,
    "genres": [
      "吴珊卓",
      "美国",
      "意大利",
      "喜剧",
      "剧情",
      "爱情",
      "英语",
      "意大利语",
      "波兰语",
      "法语",
      "西班牙语",
      "德语"
    ],
    "type": "电影"
  },
  {
    "title": "小森林 夏秋篇 / リトル・フォレスト 夏・秋",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2232317770.jpg",
    "rating": 5,
    "genres": [
      "桥本爱",
      "三浦贵大",
      "松冈茉优",
      "温水洋一",
      "桐岛加恋",
      "筱川桃音",
      "日本",
      "森淳一",
      "剧情",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "魔鬼代言人 / The Devil's Advocate",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1695005982.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "剧情",
      "悬疑",
      "惊悚",
      "英语",
      "德语",
      "意大利语",
      "粤语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "洛城机密 / L.A. Confidential",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2268612953.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "洛城机密",
      "剧情",
      "犯罪",
      "悬疑",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "白日焰火",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2174645340.jpg",
    "rating": 3,
    "genres": [
      "廖凡",
      "桂纶镁",
      "王学兵",
      "王景春",
      "余皑磊",
      "倪景阳",
      "常凯宁",
      "彭龙",
      "王英涛",
      "李彩霞",
      "中国大陆",
      "刁亦男",
      "剧情",
      "犯罪",
      "悬疑"
    ],
    "type": "电影"
  },
  {
    "title": "死神来了：血脉诅咒 / Final Destination: Bloodlines",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2924000768.jpg",
    "rating": 5,
    "genres": [
      "丁波·李",
      "美国",
      "惊悚",
      "恐怖",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "捕风追影",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2924069675.jpg",
    "rating": 5,
    "genres": [
      "成龙",
      "张子枫",
      "梁家辉",
      "此沙",
      "文俊辉",
      "周政杰",
      "王杍逸",
      "郎月婷",
      "林秋楠",
      "王振威",
      "中国大陆",
      "中国香港",
      "杨子",
      "剧情",
      "动作",
      "犯罪"
    ],
    "type": "电影"
  },
  {
    "title": "新闻编辑室 第三季 / The Newsroom Season 3",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2204331432.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "剧情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "新闻编辑室 第二季 / The Newsroom Season 2",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2048679488.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "剧情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "新闻编辑室 第一季 / The Newsroom Season 1",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2221554146.jpg",
    "rating": 5,
    "genres": [
      "简·方达",
      "美国",
      "剧情",
      "英语",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "广告狂人 第一季 / Mad Men Season 1",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1384330832.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "广告狂人",
      "广告狂人",
      "剧情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "继承之战 第四季 / Succession Season 4",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2888728568.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "继承之战",
      "继承之战",
      "剧情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "继承之战 第三季 / Succession Season 3",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2778291358.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "阎羽茜",
      "继承之战",
      "继承之战",
      "剧情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "无名之辈",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.jpg",
    "rating": 3,
    "genres": [
      "陈建斌",
      "任素汐",
      "潘斌龙",
      "章宇",
      "王砚辉",
      "九孔",
      "马吟吟",
      "程怡",
      "宁桓宇",
      "邓恩熙",
      "中国大陆",
      "饶晓志",
      "剧情",
      "喜剧",
      "贵州方言"
    ],
    "type": "电影"
  },
  {
    "title": "奎迪：英雄再起 / Creed II",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2544510053.jpg",
    "rating": 3,
    "genres": [
      "美国",
      "剧情",
      "运动",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "奎迪 / Creed",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2321788979.jpg",
    "rating": 3,
    "genres": [
      "美国",
      "奎迪",
      "剧情",
      "运动",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "香火",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2599941387.jpg",
    "rating": 5,
    "genres": [
      "李强",
      "中国大陆",
      "宁浩",
      "剧情"
    ],
    "type": "电影"
  },
  {
    "title": "油炸绿番茄 / Fried Green Tomatoes",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1452662468.jpg",
    "rating": 4,
    "genres": [
      "斯坦·肖",
      "美国",
      "剧情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "心灵驿站 / The Station Agent",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p831480141.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "心灵驿站",
      "剧情",
      "喜剧",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "黑镜 第七季 / Black Mirror Season 7",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2920242376.jpg",
    "rating": 4,
    "genres": [
      "伊萨·雷",
      "奥卡菲娜",
      "美国",
      "王昊鹭",
      "黑镜",
      "黑镜",
      "剧情",
      "科幻",
      "犯罪",
      "悬疑",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "继承之战 第一季 / Succession Season 1",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2522419119.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "继承之战",
      "继承之战",
      "剧情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "继承之战 第二季 / Succession Season 2",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2562172411.jpg",
    "rating": 5,
    "genres": [
      "杨罗布",
      "美国",
      "继承之战",
      "继承之战",
      "剧情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "完美的日子 / Perfect Days",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2914293980.jpg",
    "rating": 5,
    "genres": [
      "役所广司",
      "柄本时生",
      "中野有纱",
      "山田葵",
      "麻生祐未",
      "三浦友和",
      "田中泯",
      "茂吕师冈",
      "县森鱼",
      "日本",
      "德国",
      "剧情",
      "日语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "切腹",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2151748293.jpg",
    "rating": 5,
    "genres": [
      "仲代达矢",
      "石浜朗",
      "岩下志麻",
      "丹波哲郎",
      "三岛雅夫",
      "中谷一郎",
      "佐藤庆",
      "稻叶义男",
      "武内亨",
      "日本",
      "小林正树",
      "剧情",
      "动作",
      "悬疑",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "驴得水",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2393044761.jpg",
    "rating": 5,
    "genres": [
      "任素汐",
      "大力",
      "刘帅良",
      "裴魁山",
      "阿如那",
      "韩彦博",
      "卜冠今",
      "王堃",
      "高阳",
      "苏千越",
      "中国大陆",
      "周申",
      "刘露",
      "剧情",
      "喜剧"
    ],
    "type": "电影"
  },
  {
    "title": "大空头 / The Big Short",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2283531871.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "大空头",
      "剧情",
      "传记",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "点球成金 / Moneyball",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2910924796.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "site",
      "点球成金",
      "剧情",
      "传记",
      "运动",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "十二猴子 / Twelve Monkeys",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p627041570.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "十二猴子",
      "科幻",
      "悬疑",
      "惊悚",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "子弹列车 / Bullet Train",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2873950053.jpg",
    "rating": 5,
    "genres": [
      "乔伊·金",
      "真田广之",
      "坏痞兔",
      "美国",
      "日本",
      "子弹列车",
      "喜剧",
      "动作",
      "惊悚",
      "英语",
      "日语",
      "西班牙语",
      "俄语"
    ],
    "type": "电影"
  },
  {
    "title": "F1：狂飙飞车 / F1: The Movie",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2922238175.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "剧情",
      "动作",
      "运动",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "史密斯夫妇 / Mr. & Mrs. Smith",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1677402144.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "喜剧",
      "动作",
      "爱情",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "燃情岁月 / Legends of the Fall",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1023654037.jpg",
    "rating": 3,
    "genres": [
      "美国",
      "燃情岁月",
      "剧情",
      "爱情",
      "战争",
      "西部",
      "英语",
      "科尼什语"
    ],
    "type": "电影"
  },
  {
    "title": "碟中谍8：最终清算 / Mission: Impossible - The Final Reckoning",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2921570919.jpg",
    "rating": 1,
    "genres": [
      "美国",
      "动作",
      "惊悚",
      "冒险",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "星际宝贝史迪奇 / Lilo & Stitch",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2920693527.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "喜剧",
      "动作",
      "科幻",
      "奇幻",
      "冒险",
      "英语",
      "夏威夷语"
    ],
    "type": "电影"
  },
  {
    "title": "幽灵公主 / もののけ姫",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2920895053.jpg",
    "rating": 5,
    "genres": [
      "松田洋治",
      "田中裕子",
      "小林薰",
      "西村雅彦",
      "上条恒彦",
      "岛本须美",
      "渡边哲",
      "佐藤允",
      "名古屋章",
      "日本",
      "宫崎骏",
      "幽灵公主",
      "动画",
      "奇幻",
      "冒险",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "达拉斯买家俱乐部 / Dallas Buyers Club",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2166160837.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "剧情",
      "传记",
      "同性",
      "英语",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "初步举证 / National Theatre Live: Prima Facie",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2918386473.jpg",
    "rating": 4,
    "genres": [
      "英国",
      "初步举证",
      "剧情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "兄弟连 / Band of Brothers",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1714777727.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "英国",
      "托尼·杜",
      "兄弟连",
      "剧情",
      "动作",
      "历史",
      "战争",
      "英语",
      "荷兰语",
      "法语",
      "德语",
      "立陶宛语"
    ],
    "type": "电影"
  },
  {
    "title": "后天 / The Day After Tomorrow",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2209602029.jpg",
    "rating": 4,
    "genres": [
      "富田谭玲",
      "美国",
      "后天",
      "科幻",
      "灾难",
      "英语",
      "日语",
      "法语",
      "阿拉伯语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "新桥恋人 / Les amants du Pont-Neuf",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p581792602.jpg",
    "rating": 5,
    "genres": [
      "法国",
      "新桥恋人",
      "剧情",
      "爱情",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "坏血 / Mauvais sang",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2904762850.jpg",
    "rating": 5,
    "genres": [
      "瑞士",
      "法国",
      "坏血",
      "剧情",
      "爱情",
      "犯罪",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "猜火车 / Trainspotting",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p513567548.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "猜火车",
      "剧情",
      "犯罪",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "阿尔法围棋 / AlphaGo",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2515332442.jpg",
    "rating": 5,
    "genres": [
      "李世石",
      "李飞飞",
      "哈萨比斯",
      "美国",
      "纪录片",
      "英语",
      "韩语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "蜗牛回忆录 / Memoir of a Snail",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2924886534.jpg",
    "rating": 5,
    "genres": [
      "澳大利亚",
      "剧情",
      "动画",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "爱情万岁 / 愛情萬歲",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2868503722.jpg",
    "rating": 4,
    "genres": [
      "杨贵媚",
      "李康生",
      "陈昭荣",
      "陆弈静",
      "中国台湾",
      "蔡明亮",
      "爱情万岁",
      "剧情",
      "同性"
    ],
    "type": "电影"
  },
  {
    "title": "还有明天 / C'è ancora domani",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2918279456.jpg",
    "rating": 5,
    "genres": [
      "意大利",
      "还有明天",
      "剧情",
      "喜剧",
      "历史",
      "意大利语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "首尔之春 / 서울의 봄",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2905141611.jpg",
    "rating": 4,
    "genres": [
      "黄政民",
      "郑雨盛",
      "李星民",
      "朴解浚",
      "金成畇",
      "朴勋",
      "安世镐",
      "郑栋焕",
      "金义城",
      "徐光载",
      "韩国",
      "金性洙",
      "首尔之春",
      "剧情",
      "韩语"
    ],
    "type": "电影"
  },
  {
    "title": "因果报应 / Maharaja",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2915350868.jpg",
    "rating": 5,
    "genres": [
      "阿比拉米",
      "阿鲁多斯",
      "印度",
      "因果报应",
      "动作",
      "犯罪",
      "悬疑",
      "泰米尔语"
    ],
    "type": "电影"
  },
  {
    "title": "好东西",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2915454411.jpg",
    "rating": 5,
    "genres": [
      "宋佳",
      "钟楚曦",
      "曾慕梅",
      "章宇",
      "赵又廷",
      "任彬",
      "张弛",
      "周野芒",
      "王菊",
      "孔连顺",
      "中国大陆",
      "邵艺辉",
      "剧情",
      "爱情"
    ],
    "type": "电影"
  },
  {
    "title": "海边的曼彻斯特 / Manchester by the Sea",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2421855655.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "剧情",
      "家庭",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "可可西里",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2363208684.jpg",
    "rating": 5,
    "genres": [
      "多布杰",
      "张垒",
      "奇道",
      "赵雪莹",
      "马占林",
      "赵一穗",
      "更松永措",
      "中国大陆",
      "中国香港",
      "陆川",
      "剧情",
      "犯罪",
      "藏语"
    ],
    "type": "电影"
  },
  {
    "title": "心迷宫",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2926020289.jpg",
    "rating": 5,
    "genres": [
      "霍卫民",
      "王笑天",
      "罗芸",
      "杨瑜珍",
      "孙黎",
      "邵胜杰",
      "曹西安",
      "贾致钢",
      "朱自清",
      "王梓尘",
      "中国大陆",
      "忻钰坤",
      "剧情",
      "犯罪",
      "悬疑"
    ],
    "type": "电影"
  },
  {
    "title": "阳光普照 / 陽光普照",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2570235120.jpg",
    "rating": 5,
    "genres": [
      "陈以文",
      "柯淑勤",
      "巫建和",
      "刘冠廷",
      "许光汉",
      "尹馨",
      "温贞菱",
      "吴岱凌",
      "林志儒",
      "龙劭华",
      "中国台湾",
      "钟孟宏",
      "阳光普照",
      "剧情",
      "犯罪",
      "家庭",
      "闽南语"
    ],
    "type": "电影"
  },
  {
    "title": "怪物",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2913062136.jpg",
    "rating": 4,
    "genres": [
      "安藤樱",
      "永山瑛太",
      "黑川想矢",
      "柊木阳太",
      "角田晃广",
      "黑田大辅",
      "森冈龙",
      "北浦爱",
      "片山萌美",
      "野吕佳代",
      "日本",
      "是枝裕和",
      "怪物",
      "剧情",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "梦 / 夢",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2215880880.jpg",
    "rating": 4,
    "genres": [
      "寺尾聪",
      "根岸季衣",
      "伊崎充则",
      "头师佳孝",
      "碇矢长介",
      "笠智众",
      "日本",
      "美国",
      "黑泽明",
      "梦",
      "剧情",
      "奇幻",
      "日语",
      "法语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "大菩萨岭 / 大菩薩峠",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2187846310.jpg",
    "rating": 5,
    "genres": [
      "仲代达矢",
      "加山雄三",
      "内藤洋子",
      "中丸忠雄",
      "佐藤庆",
      "西村晃",
      "中谷一郎",
      "田中邦卫",
      "三船敏郎",
      "日本",
      "冈本喜八",
      "大菩萨岭",
      "剧情",
      "动作",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "姥姥的外孙 / หลานม่า",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2911511570.jpg",
    "rating": 5,
    "genres": [
      "泰国",
      "剧情",
      "泰语",
      "潮州话"
    ],
    "type": "电影"
  },
  {
    "title": "绝命毒师  第五季 / Breaking Bad Season 5",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1579021082.jpg",
    "rating": 4,
    "genres": [
      "安娜·冈",
      "美国",
      "绝命毒师",
      "绝命毒师",
      "剧情",
      "犯罪",
      "英语",
      "西班牙语",
      "德语"
    ],
    "type": "电影"
  },
  {
    "title": "绝命毒师  第三季 / Breaking Bad Season 3",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1674838460.jpg",
    "rating": 0,
    "genres": [
      "安娜·冈",
      "美国",
      "绝命毒师",
      "绝命毒师",
      "犯罪",
      "剧情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "绝命毒师  第二季 / Breaking Bad Season 2",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2872295944.jpg",
    "rating": 0,
    "genres": [
      "安娜·冈",
      "美国",
      "绝命毒师",
      "绝命毒师",
      "犯罪",
      "剧情",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "绝命毒师 第一季 / Breaking Bad Season 1",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2886443948.jpg",
    "rating": 0,
    "genres": [
      "安娜·冈",
      "美国",
      "绝命毒师",
      "绝命毒师",
      "犯罪",
      "剧情",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "绝命毒师  第四季 / Breaking Bad Season 4",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2016506391.jpg",
    "rating": 5,
    "genres": [
      "安娜·冈",
      "美国",
      "绝命毒师",
      "绝命毒师",
      "犯罪",
      "剧情",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "一级恐惧 / Primal Fear",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1150407027.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "一级恐惧",
      "剧情",
      "犯罪",
      "悬疑",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "美国X档案 / American History X",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792437057.jpg",
    "rating": 5,
    "genres": [
      "盖·托利",
      "美国",
      "",
      "犯罪",
      "剧情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "角斗士 / Gladiator",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1601948450.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "英国",
      "马耳他",
      "摩洛哥",
      "角斗士",
      "剧情",
      "动作",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "好家伙 / GoodFellas",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1403069323.jpg",
    "rating": 4,
    "genres": [
      "乔·佩西",
      "查克·洛",
      "美国",
      "好家伙",
      "剧情",
      "传记",
      "犯罪",
      "英语",
      "意大利语"
    ],
    "type": "电影"
  },
  {
    "title": "年少日记 / 年少日記",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2906644236.jpg",
    "rating": 4,
    "genres": [
      "卢镇业",
      "郑中基",
      "黄梓乐",
      "韦罗莎",
      "陈汉娜",
      "何珀廉",
      "戴玉麒",
      "归绰峣",
      "周汉宁",
      "吴冰",
      "中国香港",
      "卓亦谦",
      "年少日记",
      "剧情",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "机器人之梦 / Robot Dreams",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2928203369.jpg",
    "rating": 5,
    "genres": [
      "西班牙",
      "法国",
      "剧情",
      "动画",
      "音乐",
      "无对白"
    ],
    "type": "电影"
  },
  {
    "title": "风骚律师 第五季 / Better Call Saul Season 5",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2638316334.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "风骚律师",
      "风骚律师",
      "剧情",
      "犯罪",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "风骚律师 第四季 / Better Call Saul Season 4",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2638316637.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "风骚律师",
      "风骚律师",
      "剧情",
      "犯罪",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "风骚律师 第三季 / Better Call Saul Season 3",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2442801582.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "风骚律师",
      "风骚律师",
      "剧情",
      "犯罪",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "风骚律师 第二季 / Better Call Saul Season 2",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2560535645.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "风骚律师",
      "风骚律师",
      "剧情",
      "犯罪",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "风骚律师 第六季 / Better Call Saul Season 6",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2869521768.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "风骚律师",
      "风骚律师",
      "剧情",
      "犯罪",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "风骚律师 第一季 / Better Call Saul Season 1",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2218944919.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "风骚律师",
      "风骚律师",
      "剧情",
      "喜剧",
      "犯罪",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "菊次郎的夏天 / 菊次郎の夏",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2620392435.jpg",
    "rating": 5,
    "genres": [
      "北野武",
      "关口雄介",
      "吉行和子",
      "细川典江",
      "磨赤儿",
      "铃木忠幸",
      "井手博士",
      "今村鼠",
      "日本",
      "北野武",
      "剧情",
      "喜剧",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "法外之徒 / Bande à part",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2161319925.jpg",
    "rating": 4,
    "genres": [
      "法国",
      "法外之徒",
      "犯罪",
      "剧情",
      "法语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "脸庞，村庄 / Visages villages",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2459499263.jpg",
    "rating": 5,
    "genres": [
      "让·热内",
      "法国",
      "让·热内",
      "纪录片",
      "JR",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "四百击 / Les quatre cents coups",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2191743027.jpg",
    "rating": 4,
    "genres": [
      "法国",
      "四百击",
      "犯罪",
      "剧情",
      "法语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "大红灯笼高高挂",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1254404823.jpg",
    "rating": 5,
    "genres": [
      "巩俐",
      "马精武",
      "何赛飞",
      "曹翠芬",
      "周琦",
      "孔琳",
      "金淑媛",
      "丁惟敏",
      "初晓",
      "崔志刚",
      "中国大陆",
      "中国香港",
      "中国台湾",
      "张艺谋",
      "剧情"
    ],
    "type": "电影"
  },
  {
    "title": "弱点 / The Blind Side",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2577248102.jpg",
    "rating": 4,
    "genres": [
      "杰·海德",
      "美国",
      "弱点",
      "剧情",
      "家庭",
      "传记",
      "运动",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "牯岭街少年杀人事件 / 牯嶺街少年殺人事件",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p848381236.jpg",
    "rating": 5,
    "genres": [
      "张震",
      "杨静怡",
      "张国柱",
      "王启赞",
      "林鸿铭",
      "金燕玲",
      "王琄",
      "张翰",
      "姜秀琼",
      "赖梵耘",
      "中国台湾",
      "杨德昌",
      "剧情",
      "犯罪",
      "闽南语",
      "上海话",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "末路狂花 / Thelma & Louise",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1910924635.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "英国",
      "法国",
      "末路狂花",
      "犯罪",
      "剧情",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "白日梦想家 / The Secret Life of Walter Mitty",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2893896472.jpg",
    "rating": 4,
    "genres": [
      "西恩·潘",
      "美国",
      "英国",
      "剧情",
      "喜剧",
      "冒险",
      "英语",
      "西班牙语",
      "冰岛语"
    ],
    "type": "电影"
  },
  {
    "title": "雨人 / Rain Man",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2353324612.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "雨人",
      "剧情",
      "英语",
      "意大利语"
    ],
    "type": "电影"
  },
  {
    "title": "金的音像店 / Kim's Video",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2905882313.jpg",
    "rating": 5,
    "genres": [
      "金勇满",
      "美国",
      "意大利",
      "纪录片",
      "英语",
      "意大利语",
      "韩语"
    ],
    "type": "电影"
  },
  {
    "title": "芭比 / Barbie",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2890207440.jpg",
    "rating": 5,
    "genres": [
      "伊萨·雷",
      "美国",
      "英国",
      "芭比",
      "喜剧",
      "奇幻",
      "冒险",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "银河护卫队3 / Guardians of the Galaxy Vol. 3",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2887888463.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "喜剧",
      "动作",
      "科幻",
      "惊悚",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "长安三万里",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2893820209.jpg",
    "rating": 5,
    "genres": [
      "杨天翔",
      "凌振赫",
      "吴俊全",
      "宣晓鸣",
      "卢力峰",
      "孙路路",
      "刘校妤",
      "路熙然",
      "李诗萌",
      "胡亚捷",
      "中国大陆",
      "谢君伟",
      "邹靖",
      "历史",
      "动画"
    ],
    "type": "电影"
  },
  {
    "title": "坠落的审判 / Anatomie d'une chute",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2896940977.jpg",
    "rating": 5,
    "genres": [
      "梅西",
      "法国",
      "剧情",
      "家庭",
      "法语",
      "英语",
      "德语"
    ],
    "type": "电影"
  },
  {
    "title": "你想活出怎样的人生 / 君たちはどう生きるか",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2906527755.jpg",
    "rating": 1,
    "genres": [
      "山时聪真",
      "菅田将晖",
      "柴崎幸",
      "爱缪",
      "木村佳乃",
      "木村拓哉",
      "竹下景子",
      "风吹淳",
      "大竹忍",
      "日本",
      "宫崎骏",
      "动画",
      "奇幻",
      "冒险",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "白日之下",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2904961420.jpg",
    "rating": 4,
    "genres": [
      "姜大卫",
      "余香凝",
      "林保怡",
      "梁仲恒",
      "陈湛文",
      "周汉宁",
      "梁雍婷",
      "龚慈恩",
      "宝珮如",
      "朱柏谦",
      "中国香港",
      "简君晋",
      "剧情",
      "犯罪",
      "李卓风",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "背靠背，脸对脸",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2505048077.jpg",
    "rating": 5,
    "genres": [
      "牛振华",
      "雷恪生",
      "李强",
      "句号",
      "王劲松",
      "戈治均",
      "佘南南",
      "张嘉益",
      "刘国祥",
      "徐学政",
      "中国大陆",
      "中国香港",
      "黄建新",
      "杨亚洲",
      "剧情"
    ],
    "type": "电视"
  },
  {
    "title": "枪火 / 鎗火",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1538646661.jpg",
    "rating": 5,
    "genres": [
      "吴镇宇",
      "任达华",
      "黄秋生",
      "吕颂贤",
      "张耀扬",
      "林雪",
      "王天林",
      "施绮莲",
      "高雄",
      "罗永昌",
      "中国香港",
      "杜琪峰",
      "枪火",
      "剧情",
      "动作",
      "犯罪",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "老无所依 / No Country for Old Men",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p551171670.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "老无所依",
      "犯罪",
      "剧情",
      "惊悚",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "美国丽人 / American Beauty",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1309847196.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "ab",
      "",
      "美国丽人",
      "剧情",
      "爱情",
      "家庭",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "沙丘2 / Dune: Part Two",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2902227445.jpg",
    "rating": 4,
    "genres": [
      "赞达亚",
      "美国",
      "加拿大",
      "剧情",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "春天不是读书天 / Ferris Bueller's Day Off",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1382118133.jpg",
    "rating": 5,
    "genres": [
      "查理·辛",
      "本·斯坦",
      "美国",
      "喜剧",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "周处除三害 / 周處除三害",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2905021483.jpg",
    "rating": 5,
    "genres": [
      "阮经天",
      "袁富华",
      "陈以文",
      "王净",
      "谢琼煖",
      "李李仁",
      "刘子铨",
      "曾珮瑜",
      "陈秉佑",
      "游安顺",
      "中国台湾",
      "黄精甫",
      "动作",
      "犯罪",
      "闽南语",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "天才瑞普利 / The Talented Mr. Ripley",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1915065575.jpg",
    "rating": 5,
    "genres": [
      "裘德·洛",
      "美国",
      "剧情",
      "犯罪",
      "惊悚",
      "英语",
      "意大利语"
    ],
    "type": "电影"
  },
  {
    "title": "十二宫 / Zodiac",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p470486287.jpg",
    "rating": 3,
    "genres": [
      "美国",
      "十二宫",
      "剧情",
      "传记",
      "犯罪",
      "悬疑",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "时空恋旅人 / About Time",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2070153774.jpg",
    "rating": 4,
    "genres": [
      "英国",
      "美国",
      "喜剧",
      "爱情",
      "奇幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "秘密特工 / The Man from U.N.C.L.E.",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2251290212.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "英国",
      "盖·里奇",
      "秘密特工",
      "喜剧",
      "动作",
      "冒险",
      "英语",
      "俄语",
      "德语",
      "意大利语"
    ],
    "type": "电影"
  },
  {
    "title": "百万美元宝贝 / Million Dollar Baby",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1734930026.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "剧情",
      "运动",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "年会不能停！",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2901057189.jpg",
    "rating": 5,
    "genres": [
      "大鹏",
      "白客",
      "庄达菲",
      "王迅",
      "孙艺洲",
      "李乃文",
      "欧阳奋强",
      "童漠男",
      "大木",
      "晃晃",
      "中国大陆",
      "董润年",
      "剧情",
      "喜剧"
    ],
    "type": "电影"
  },
  {
    "title": "奥本海默 / Oppenheimer",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2876555451.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "英国",
      "奥本海默",
      "剧情",
      "传记",
      "历史",
      "英语",
      "德语",
      "荷兰语",
      "意大利语",
      "意第绪语"
    ],
    "type": "电影"
  },
  {
    "title": "小鬼当家 / Home Alone",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1529668801.jpg",
    "rating": 4,
    "genres": [
      "乔·佩西",
      "美国",
      "小鬼当家",
      "喜剧",
      "犯罪",
      "家庭",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "Hello！树先生",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1271999126.jpg",
    "rating": 5,
    "genres": [
      "王宝强",
      "谭卓",
      "何洁",
      "白培将",
      "王大治",
      "王亚彬",
      "李京怡",
      "邱士鉴",
      "中国大陆",
      "韩杰",
      "剧情"
    ],
    "type": "电影"
  },
  {
    "title": "蜘蛛侠：纵横宇宙 / Spider-Man: Across the Spider-Verse",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2892315297.jpg",
    "rating": 5,
    "genres": [
      "伊萨·雷",
      "美国",
      "喜剧",
      "动作",
      "科幻",
      "动画",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "芙蓉镇",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2575337180.jpg",
    "rating": 5,
    "genres": [
      "刘晓庆",
      "姜文",
      "郑在石",
      "张光北",
      "徐松子",
      "祝士彬",
      "刘利年",
      "徐宁",
      "麦文燕",
      "姜友石",
      "中国大陆",
      "谢晋",
      "剧情",
      "爱情"
    ],
    "type": "电影"
  },
  {
    "title": "宇宙探索编辑部",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2889865405.jpg",
    "rating": 5,
    "genres": [
      "杨皓宇",
      "艾丽娅",
      "王一通",
      "蒋奇明",
      "盛晨晨",
      "郭帆",
      "龚格尔",
      "洛翼云",
      "罗娟",
      "关云桐",
      "中国大陆",
      "孔大山",
      "喜剧",
      "科幻"
    ],
    "type": "电影"
  },
  {
    "title": "达·芬奇密码 / The Da Vinci Code",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1809231182.jpg",
    "rating": 0,
    "genres": [
      "让·雷诺",
      "美国",
      "马耳他",
      "法国",
      "英国",
      "",
      "悬疑",
      "惊悚",
      "英语",
      "法语",
      "拉丁语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "魔兽 / Warcraft",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2345947329.jpg",
    "rating": 0,
    "genres": [
      "吴彦祖",
      "美国",
      "中国大陆",
      "加拿大",
      "日本",
      "魔兽",
      "动作",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "完美的世界 / A Perfect World",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2190556408.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "剧情",
      "犯罪",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "神奇四侠 / Fantastic Four",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2180195792.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "德国",
      "神奇四侠",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "神奇四侠2 / Fantastic 4: Rise of the Silver Surfer",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2171178735.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "德国",
      "英国",
      "动作",
      "科幻",
      "冒险",
      "英语",
      "日语",
      "阿拉伯语"
    ],
    "type": "电影"
  },
  {
    "title": "安德的游戏 / Ender's Game",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2164556643.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "铁甲钢拳 / Real Steel",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1031075041.jpg",
    "rating": 0,
    "genres": [
      "天海祐希",
      "美国",
      "印度",
      "铁甲钢拳",
      "剧情",
      "动作",
      "科幻",
      "运动",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "超人 / Superman",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p726824081.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "英国",
      "加拿大",
      "超人",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "终结者：黑暗命运 / Terminator: Dark Fate",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2571762536.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "西班牙",
      "匈牙利",
      "动作",
      "科幻",
      "冒险",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "越狱特别篇：最后一越 / Prison Break: The Final Break",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2201756672.jpg",
    "rating": 0,
    "genres": [
      "金·寇兹",
      "美国",
      "动作",
      "剧情",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "荒野大镖客 / Per un pugno di dollari",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2178157710.jpg",
    "rating": 0,
    "genres": [
      "意大利",
      "西班牙",
      "西德",
      "动作",
      "西部",
      "意大利语",
      "西班牙语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "终结者2018 / Terminator Salvation",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1769708758.jpg",
    "rating": 0,
    "genres": [
      "科曼",
      "美国",
      "德国",
      "英国",
      "意大利",
      "动作",
      "冒险",
      "科幻",
      "惊悚",
      "英语",
      "意大利语"
    ],
    "type": "电影"
  },
  {
    "title": "黄昏双镖客 / Per qualche dollaro in più",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2191195219.jpg",
    "rating": 0,
    "genres": [
      "意大利",
      "西班牙",
      "西德",
      "西部",
      "意大利语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "X战警：黑凤凰 / Dark Phoenix",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2555886490.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "加拿大",
      "动作",
      "科幻",
      "冒险",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "金刚狼3：殊死一战 / Logan",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2445529009.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "剧情",
      "动作",
      "科幻",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "X战警：天启 / X-Men: Apocalypse",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2352321614.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动作",
      "科幻",
      "奇幻",
      "冒险",
      "英语",
      "德语",
      "阿拉伯语",
      "波兰语",
      "古埃及语"
    ],
    "type": "电影"
  },
  {
    "title": "X战警：逆转未来 / X-Men: Days of Future Past",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2209721954.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "英国",
      "剧情",
      "动作",
      "科幻",
      "冒险",
      "英语",
      "越南语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "X战警：第一战 / X-Men: First Class",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p959856833.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "英国",
      "",
      "动作",
      "剧情",
      "科幻",
      "英语",
      "德语",
      "法语",
      "西班牙语",
      "俄语"
    ],
    "type": "电影"
  },
  {
    "title": "X战警3：背水一战 / X-Men: The Last Stand",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2532019363.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "加拿大",
      "英国",
      "动作",
      "科幻",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "X战警2 / X2",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1349307666.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "加拿大",
      "动作",
      "科幻",
      "惊悚",
      "英语",
      "德语",
      "意大利语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "X战警 / X-Men",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2446530060.jpg",
    "rating": 0,
    "genres": [
      "雷·帕克",
      "美国",
      "加拿大",
      "X战警",
      "动作",
      "科幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "金刚狼2 / The Wolverine",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2151837507.jpg",
    "rating": 0,
    "genres": [
      "冈本多绪",
      "福岛莉拉",
      "真田广之",
      "山内春彦",
      "李威尹",
      "美国",
      "英国",
      "动作",
      "科幻",
      "英语",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "黄金三镖客 / Il buono, il brutto, il cattivo",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2178150710.jpg",
    "rating": 0,
    "genres": [
      "意大利",
      "西班牙",
      "西德",
      "冒险",
      "西部",
      "意大利语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "海洋 / Océans",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2559581324.jpg",
    "rating": 0,
    "genres": [
      "宫泽理惠",
      "阿尔多",
      "姜文",
      "法国",
      "瑞士",
      "西班牙",
      "美国",
      "阿联酋",
      "摩纳哥",
      "海洋",
      "纪录片",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "侏罗纪公园3 / Jurassic Park III",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2249341027.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动作",
      "冒险",
      "科幻",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "侏罗纪公园 / Jurassic Park",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2076443176.jpg",
    "rating": 0,
    "genres": [
      "黄荣亮",
      "美国",
      "科幻",
      "惊悚",
      "冒险",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "绝杀慕尼黑 / Движение вверх",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2556883031.jpg",
    "rating": 0,
    "genres": [
      "俄罗斯",
      "剧情",
      "运动",
      "俄语",
      "英语",
      "立陶宛语"
    ],
    "type": "电影"
  },
  {
    "title": "变形金刚5：最后的骑士 / Transformers: The Last Knight",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2462475058.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "中国大陆",
      "加拿大",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "金刚狼 / X-Men Origins: Wolverine",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2063167557.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "英国",
      "金刚狼",
      "动作",
      "科幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "蜘蛛侠2 / Spider-Man 2",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1617867110.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动作",
      "科幻",
      "冒险",
      "英语",
      "俄语"
    ],
    "type": "电影"
  },
  {
    "title": "姚明年 / The Year of the Yao",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1910910408.jpg",
    "rating": 0,
    "genres": [
      "姚明",
      "美国",
      "姚明年",
      "纪录片",
      "运动",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "扎克·施奈德版正义联盟 / Zack Snyder's Justice League",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2634360592.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动作",
      "科幻",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "华尔街之狼 / The Wolf of Wall Street",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2160254162.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "剧情",
      "传记",
      "犯罪",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "我是传奇 / I Am Legend",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p574158935.jpg",
    "rating": 0,
    "genres": [
      "艾比",
      "科娜",
      "美国",
      "我是传奇",
      "剧情",
      "动作",
      "惊悚",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "终结者3 / Terminator 3: Rise of the Machines",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p818710721.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "德国",
      "英国",
      "动作",
      "科幻",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "星际旅行7：斗转星移 / Star Trek: Generations",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2209408643.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动作",
      "悬疑",
      "科幻",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "回到未来2 / Back to the Future Part II",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2906001665.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "喜剧",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "我，机器人 / I, Robot",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p691069814.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "德国",
      "动作",
      "悬疑",
      "科幻",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "速度与激情9 / F9: The Fast Saga",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2640611704.jpg",
    "rating": 0,
    "genres": [
      "姜成镐",
      "美国",
      "林诣彬",
      "动作",
      "犯罪",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "速度与激情8 / The Fate of the Furious",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2444256500.jpg",
    "rating": 0,
    "genres": [
      "中国大陆",
      "美国",
      "日本",
      "动作",
      "犯罪",
      "英语",
      "俄语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "速度与激情6 / Furious 6",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2024579845.jpg",
    "rating": 0,
    "genres": [
      "姜成镐",
      "美国",
      "林诣彬",
      "动作",
      "犯罪",
      "英语",
      "俄语",
      "西班牙语",
      "丹麦语",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "速度与激情7 / Furious 7",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2919524094.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "中国大陆",
      "日本",
      "温子仁",
      "动作",
      "犯罪",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "速度与激情5 / Fast Five",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p898634801.jpg",
    "rating": 0,
    "genres": [
      "姜成镐",
      "美国",
      "林诣彬",
      "动作",
      "犯罪",
      "英语",
      "葡萄牙语",
      "西班牙语",
      "意大利语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "速度与激情3：东京漂移 / The Fast and the Furious: Tokyo Drift",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1035097366.jpg",
    "rating": 0,
    "genres": [
      "姜成镐",
      "鲍沃",
      "千叶真一",
      "北川景子",
      "美国",
      "德国",
      "日本",
      "林诣彬",
      "动作",
      "犯罪",
      "英语",
      "日语",
      "葡萄牙语"
    ],
    "type": "电影"
  },
  {
    "title": "速度与激情2 / 2 Fast 2 Furious",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2234440406.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "德国",
      "动作",
      "犯罪",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "速度与激情4 / Fast & Furious",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2230413708.jpg",
    "rating": 0,
    "genres": [
      "姜成镐",
      "美国",
      "林诣彬",
      "动作",
      "犯罪",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "十二怒汉（电视版） / Studio One: Twelve Angry Men",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2689773446.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "十二怒汉",
      "剧情",
      "犯罪",
      "悬疑",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "第九区 / District 9",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1086352249.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "新西兰",
      "加拿大",
      "南非",
      "第九区",
      "动作",
      "剧情",
      "科幻",
      "惊悚",
      "英语",
      "尼扬贾语",
      "祖鲁语",
      "科萨语",
      "塞索托语"
    ],
    "type": "电影"
  },
  {
    "title": "天使爱美丽 / Le Fabuleux destin d'Amélie Poulain",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2447590313.jpg",
    "rating": 3,
    "genres": [
      "吕菲斯",
      "法国",
      "德国",
      "剧情",
      "喜剧",
      "爱情",
      "法语",
      "俄语"
    ],
    "type": "电影"
  },
  {
    "title": "流浪地球2",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2916835424.jpg",
    "rating": 3,
    "genres": [
      "吴京",
      "刘德华",
      "李雪健",
      "沙溢",
      "宁理",
      "王智",
      "朱颜曼滋",
      "安地",
      "王若熹",
      "佟丽娅",
      "中国大陆",
      "郭帆",
      "科幻",
      "冒险",
      "灾难",
      "俄语",
      "英语",
      "印地语",
      "法语",
      "葡萄牙语",
      "日语",
      "韩语",
      "泰语"
    ],
    "type": "电影"
  },
  {
    "title": "勇士 / Warrior",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1145536386.jpg",
    "rating": 5,
    "genres": [
      "钱佛南",
      "美国",
      "",
      "勇士",
      "剧情",
      "运动",
      "家庭",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "终结者2：审判日 / Terminator 2: Judgment Day",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1910909085.jpg",
    "rating": 4,
    "genres": [
      "乔·莫顿",
      "美国",
      "法国",
      "动作",
      "科幻",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "无名",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2923651715.jpg",
    "rating": 5,
    "genres": [
      "梁朝伟",
      "王一博",
      "周迅",
      "黄磊",
      "森博之",
      "大鹏",
      "王传君",
      "江疏影",
      "张婧仪",
      "周生昊",
      "中国大陆",
      "程耳",
      "剧情",
      "历史",
      "悬疑",
      "沪语",
      "粤语",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "金陵十三钗",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1322247572.jpg",
    "rating": 5,
    "genres": [
      "倪妮",
      "张歆怡",
      "黄天元",
      "韩熙庭",
      "张逗逗",
      "佟大为",
      "曹可凡",
      "渡部笃郎",
      "黄海波",
      "中国大陆",
      "张艺谋",
      "剧情",
      "历史",
      "战争",
      "英语",
      "日语",
      "南京话",
      "上海话"
    ],
    "type": "电影"
  },
  {
    "title": "满江红",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2887555071.jpg",
    "rating": 5,
    "genres": [
      "沈腾",
      "易烊千玺",
      "张译",
      "雷佳音",
      "岳云鹏",
      "王佳怡",
      "潘斌龙",
      "余皑磊",
      "郭京飞",
      "欧豪",
      "中国大陆",
      "张艺谋",
      "剧情",
      "喜剧",
      "悬疑",
      "古装",
      "中国手语"
    ],
    "type": "电影"
  },
  {
    "title": "终结者 / The Terminator",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p511430453.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "英国",
      "终结者",
      "动作",
      "科幻",
      "惊悚",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "人工智能 / A.I. Artificial Intelligence",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792257137.jpg",
    "rating": 5,
    "genres": [
      "裘德·洛",
      "梁振邦",
      "美国",
      "人工智能",
      "剧情",
      "科幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "憨豆先生 / Mr. Bean",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521404713.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "憨豆先生",
      "憨豆先生",
      "喜剧",
      "家庭",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "去他*的世界 第一季 / The End of the F***ing World Season 1",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2507719850.jpg",
    "rating": 3,
    "genres": [
      "英国",
      "剧情",
      "喜剧",
      "爱情",
      "犯罪",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "神探夏洛克 第一季 / Sherlock Season 1",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1461954452.jpg",
    "rating": 5,
    "genres": [
      "嘉玛·陈",
      "英国",
      "剧情",
      "悬疑",
      "犯罪",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "电锯惊魂 / Saw",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p726839485.jpg",
    "rating": 4,
    "genres": [
      "梁振邦",
      "美国",
      "温子仁",
      "电锯惊魂",
      "悬疑",
      "惊悚",
      "恐怖",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "万里归途",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2880793132.jpg",
    "rating": 3,
    "genres": [
      "张译",
      "王俊凯",
      "殷桃",
      "成泰燊",
      "张子贤",
      "陈昊宇",
      "王迅",
      "万茜",
      "李雪健",
      "李晨",
      "中国大陆",
      "饶晓志",
      "剧情",
      "战争",
      "阿拉伯语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "人生大事",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2874262709.jpg",
    "rating": 4,
    "genres": [
      "朱一龙",
      "杨恩又",
      "王戈",
      "刘陆",
      "罗京民",
      "吴倩",
      "郑卫莉",
      "陈创",
      "李春嫒",
      "钟宇升",
      "中国大陆",
      "中国香港",
      "刘江江",
      "剧情",
      "家庭",
      "武汉方言",
      "四川方言"
    ],
    "type": "电影"
  },
  {
    "title": "奇迹·笨小孩",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2842327103.jpg",
    "rating": 4,
    "genres": [
      "易烊千玺",
      "田雨",
      "陈哈琳",
      "齐溪",
      "公磊",
      "许君聪",
      "王宁",
      "黄尧",
      "巩金国",
      "田壮壮",
      "中国大陆",
      "文牧野",
      "剧情",
      "韩晓邯"
    ],
    "type": "电影"
  },
  {
    "title": "阿凡达：水之道 / Avatar: The Way of Water",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2882772634.jpg",
    "rating": 5,
    "genres": [
      "希·庞德",
      "美国",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "指环王3：王者无敌 / The Lord of the Rings: The Return of the King",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2642829472.jpg",
    "rating": 4,
    "genres": [
      "肖恩·宾",
      "美国",
      "新西兰",
      "",
      "剧情",
      "动作",
      "奇幻",
      "冒险",
      "英语",
      "昆雅语",
      "古英语",
      "辛达林语"
    ],
    "type": "电影"
  },
  {
    "title": "指环王2：双塔奇兵 / The Lord of the Rings: The Two Towers",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2640236255.jpg",
    "rating": 3,
    "genres": [
      "美国",
      "新西兰",
      "剧情",
      "动作",
      "奇幻",
      "冒险",
      "英语",
      "辛达林语",
      "古代英语"
    ],
    "type": "电影"
  },
  {
    "title": "指环王1：护戒使者 / The Lord of the Rings: The Fellowship of the Ring",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2197698335.jpg",
    "rating": 4,
    "genres": [
      "新西兰",
      "美国",
      "英国",
      "剧情",
      "动作",
      "奇幻",
      "冒险",
      "英语",
      "辛达林语"
    ],
    "type": "电影"
  },
  {
    "title": "王者 / 더 킹",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2413029060.jpg",
    "rating": 5,
    "genres": [
      "赵寅成",
      "郑雨盛",
      "裴晟祐",
      "金雅中",
      "柳俊烈",
      "金义城",
      "金敏载",
      "郑恩彩",
      "金素辰",
      "黄胜妍",
      "韩国",
      "韩在林",
      "王者",
      "剧情",
      "动作",
      "犯罪",
      "韩语"
    ],
    "type": "电影"
  },
  {
    "title": "我是山姆 / I Am Sam",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p652417775.jpg",
    "rating": 4,
    "genres": [
      "西恩·潘",
      "美国",
      "我是山姆",
      "剧情",
      "家庭",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "加勒比海盗2：亡灵的宝藏 / Pirates of the Caribbean: Dead Man's Chest",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1076822803.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "动作",
      "冒险",
      "奇幻",
      "英语",
      "土耳其语",
      "希腊语"
    ],
    "type": "电影"
  },
  {
    "title": "傲慢与偏见 / Pride & Prejudice",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2016401659.jpg",
    "rating": 5,
    "genres": [
      "裴淳华",
      "法国",
      "英国",
      "美国",
      "乔·赖特",
      "剧情",
      "爱情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "上帝之城 / Cidade de Deus",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p455677490.jpg",
    "rating": 5,
    "genres": [
      "巴西",
      "法国",
      "上帝之城",
      "犯罪",
      "剧情",
      "葡萄牙语"
    ],
    "type": "电影"
  },
  {
    "title": "疯狂的麦克斯4：狂暴之路 / Mad Max: Fury Road",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2236181653.jpg",
    "rating": 5,
    "genres": [
      "阿比·丽",
      "澳大利亚",
      "美国",
      "动作",
      "科幻",
      "冒险",
      "英语",
      "俄语"
    ],
    "type": "电影"
  },
  {
    "title": "绿巨人浩克 / Hulk",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2407903929.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "李安",
      "剧情",
      "动作",
      "科幻",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "哪吒闹海",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2532803206.jpg",
    "rating": 3,
    "genres": [
      "梁正晖",
      "邱岳峰",
      "毕克",
      "富润生",
      "尚华",
      "于鼎",
      "若本规夫",
      "野泽雅子",
      "永井一郎",
      "银河万丈",
      "中国大陆",
      "王树忱",
      "严定宪",
      "徐景达",
      "冒险",
      "动画",
      "奇幻"
    ],
    "type": "电影"
  },
  {
    "title": "卢旺达饭店 / Hotel Rwanda",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p470419493.jpg",
    "rating": 4,
    "genres": [
      "英国",
      "南非",
      "意大利",
      "美国",
      "ua",
      "剧情",
      "传记",
      "历史",
      "战争",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "阳光姐妹淘 / 써니",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1374786017.jpg",
    "rating": 4,
    "genres": [
      "沈恩敬",
      "闵孝琳",
      "姜素拉",
      "南宝拉",
      "陈熙琼",
      "金时厚",
      "柳好贞",
      "朴真珠",
      "李妍京",
      "金甫美",
      "韩国",
      "姜炯哲",
      "剧情",
      "喜剧",
      "韩语"
    ],
    "type": "电影"
  },
  {
    "title": "断背山 / Brokeback Mountain",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2169104127.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "加拿大",
      "李安",
      "断背山",
      "剧情",
      "爱情",
      "同性",
      "家庭",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "红辣椒 / パプリカ",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2794776839.jpg",
    "rating": 5,
    "genres": [
      "林原惠美",
      "江守彻",
      "堀胜之祐",
      "古谷彻",
      "大塚明夫",
      "山寺宏一",
      "田中秀幸",
      "兴梠里美",
      "岩田光央",
      "日本",
      "今敏",
      "红辣椒",
      "动画",
      "悬疑",
      "科幻",
      "惊悚",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "大闹天宫",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2184505167.jpg",
    "rating": 3,
    "genres": [
      "邱岳峰",
      "富润生",
      "毕克",
      "尚华",
      "于鼎",
      "李梓",
      "刘广宁",
      "中国大陆",
      "万籁鸣",
      "剧情",
      "动画",
      "奇幻",
      "古装"
    ],
    "type": "电影"
  },
  {
    "title": "赌神 / 賭神",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1986001156.jpg",
    "rating": 5,
    "genres": [
      "周润发",
      "刘德华",
      "王祖贤",
      "张敏",
      "向华强",
      "龙方",
      "吴孟达",
      "成奎安",
      "王晶",
      "中国香港",
      "王晶",
      "赌神",
      "喜剧",
      "剧情",
      "粤语",
      "日语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "蝙蝠侠：黑暗骑士崛起 / The Dark Knight Rises",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1706428744.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "英国",
      "剧情",
      "动作",
      "科幻",
      "犯罪",
      "惊悚",
      "英语",
      "阿拉伯语"
    ],
    "type": "电影"
  },
  {
    "title": "7号房的礼物 / 7번방의 선물",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1816276065.jpg",
    "rating": 5,
    "genres": [
      "柳承龙",
      "朴信惠",
      "郑镇荣",
      "金正泰",
      "吴达洙",
      "朴元尚",
      "郑满植",
      "葛素媛",
      "郑涵妃",
      "赵在允",
      "韩国",
      "李焕京",
      "剧情",
      "喜剧",
      "家庭",
      "韩语"
    ],
    "type": "电影"
  },
  {
    "title": "银河护卫队：假日特辑 / The Guardians of the Galaxy Holiday Special",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2882398484.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "",
      "喜剧",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "天空之城 / 天空の城ラピュタ",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2892409201.jpg",
    "rating": 5,
    "genres": [
      "田中真弓",
      "横泽启子",
      "初井言荣",
      "寺田农",
      "永井一郎",
      "糸博",
      "神山卓三",
      "安原义人",
      "日本",
      "宫崎骏",
      "天空之城",
      "动画",
      "奇幻",
      "冒险",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "看见恶魔 / 악마를 보았다",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p555826078.jpg",
    "rating": 5,
    "genres": [
      "李炳宪",
      "崔岷植",
      "金诗云",
      "千虎珍",
      "李浚赫",
      "南宝拉",
      "吴山荷",
      "尹彩英",
      "金甲洙",
      "崔武成",
      "韩国",
      "金知云",
      "看见恶魔",
      "剧情",
      "犯罪",
      "惊悚",
      "韩语"
    ],
    "type": "电影"
  },
  {
    "title": "黄海 / 황해",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1075586949.jpg",
    "rating": 4,
    "genres": [
      "河正宇",
      "金伦奭",
      "郑满植",
      "李哲民",
      "李艾",
      "刘河福",
      "赵在允",
      "卓成恩",
      "林艺媛",
      "李熙俊",
      "韩国",
      "美国",
      "中国香港",
      "罗泓轸",
      "黄海",
      "剧情",
      "动作",
      "犯罪",
      "韩语"
    ],
    "type": "电影"
  },
  {
    "title": "情书 / Love Letter",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2648230660.jpg",
    "rating": 0,
    "genres": [
      "中山美穗",
      "丰川悦司",
      "酒井美纪",
      "柏原崇",
      "范文雀",
      "篠原胜之",
      "铃木庆一",
      "田口智朗",
      "光石研",
      "日本",
      "岩井俊二",
      "情书",
      "剧情",
      "爱情",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "何以为家 / كفرناحوم",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2875749222.jpg",
    "rating": 0,
    "genres": [
      "黎巴嫩",
      "美国",
      "法国",
      "塞浦路斯",
      "卡塔尔",
      "英国",
      "何以为家",
      "剧情",
      "阿拉伯语"
    ],
    "type": "电影"
  },
  {
    "title": "还是觉得你最好 / 飯戲攻心",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2903115602.jpg",
    "rating": 5,
    "genres": [
      "黄子华",
      "邓丽欣",
      "张继聪",
      "王菀之",
      "林明祯",
      "陈湛文",
      "廖子妤",
      "古天乐",
      "王丹妮",
      "余香凝",
      "中国香港",
      "陈咏燊",
      "喜剧",
      "爱情",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "烈日灼心",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2262236348.jpg",
    "rating": 5,
    "genres": [
      "邓超",
      "段奕宏",
      "郭涛",
      "王珞丹",
      "吕颂贤",
      "高虎",
      "白柳汐",
      "杜志国",
      "王砚辉",
      "李晓川",
      "中国大陆",
      "曹保平",
      "剧情",
      "犯罪",
      "悬疑"
    ],
    "type": "电影"
  },
  {
    "title": "小黄人大眼萌：神偷奶爸前传 / Minions: The Rise of Gru",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2877522569.jpg",
    "rating": 5,
    "genres": [
      "杨紫琼",
      "美国",
      "喜剧",
      "科幻",
      "犯罪",
      "动画",
      "冒险",
      "英语",
      "越南语"
    ],
    "type": "电影"
  },
  {
    "title": "银行大劫案 / The Bank Job",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1060994552.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "美国",
      "澳大利亚",
      "犯罪",
      "剧情",
      "惊悚",
      "英语",
      "拉丁语"
    ],
    "type": "电影"
  },
  {
    "title": "孤儿怨 / Orphan",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1592298962.jpg",
    "rating": 4,
    "genres": [
      "希·庞德",
      "杰米·杨",
      "美国",
      "加拿大",
      "德国",
      "法国",
      "孤儿怨",
      "悬疑",
      "惊悚",
      "恐怖",
      "英语",
      "美国手语"
    ],
    "type": "电影"
  },
  {
    "title": "无间道风云 / The Departed",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1471403480.jpg",
    "rating": 5,
    "genres": [
      "马丁·辛",
      "美国",
      "中国香港",
      "剧情",
      "犯罪",
      "惊悚",
      "英语",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "性爱自修室 第三季 / Sex Education Season 3",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2677963424.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "本·泰勒",
      "剧情",
      "喜剧",
      "爱情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "性爱自修室 第二季 / Sex Education Season 2",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2580105745.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "本·泰勒",
      "剧情",
      "喜剧",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "性爱自修室 第一季 / Sex Education Season 1",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2548341065.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "本·泰勒",
      "剧情",
      "喜剧",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "断·桥",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2877186437.jpg",
    "rating": 5,
    "genres": [
      "马思纯",
      "王俊凯",
      "范伟",
      "曾美慧孜",
      "李晓川",
      "赵润南",
      "龚蓓苾",
      "黄璐",
      "莫西子诗",
      "曾慕梅",
      "中国大陆",
      "李玉",
      "剧情",
      "犯罪"
    ],
    "type": "电影"
  },
  {
    "title": "自杀小队 / Suicide Squad",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2363084076.jpg",
    "rating": 3,
    "genres": [
      "美国",
      "",
      "自杀小队",
      "动作",
      "犯罪",
      "奇幻",
      "英语",
      "日语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "毒液2 / Venom: Let There Be Carnage",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2675102928.jpg",
    "rating": 4,
    "genres": [
      "佩吉·陆",
      "美国",
      "中国大陆",
      "动作",
      "科幻",
      "惊悚",
      "英语",
      "西班牙语",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "黑客帝国：矩阵重启 / The Matrix Resurrections",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2844387600.jpg",
    "rating": 3,
    "genres": [
      "美国",
      "动作",
      "科幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "蜘蛛侠：英雄无归 / Spider-Man: No Way Home",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2730024046.jpg",
    "rating": 4,
    "genres": [
      "赞达亚",
      "王汉斌",
      "美国",
      "动作",
      "科幻",
      "奇幻",
      "冒险",
      "英语",
      "他加禄语"
    ],
    "type": "电影"
  },
  {
    "title": "流感 / 감기",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2029391129.jpg",
    "rating": 4,
    "genres": [
      "张赫",
      "秀爱",
      "朴敏荷",
      "柳海真",
      "李熙俊",
      "金基贤",
      "李相烨",
      "朴孝朱",
      "朴正民",
      "崔炳模",
      "韩国",
      "金性洙",
      "流感",
      "剧情",
      "动作",
      "冒险",
      "韩语",
      "英语",
      "菲律宾语"
    ],
    "type": "电影"
  },
  {
    "title": "瞬息全宇宙 / Everything Everywhere All at Once",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2869765076.jpg",
    "rating": 4,
    "genres": [
      "杨紫琼",
      "许玮伦",
      "关继威",
      "吴汉章",
      "岑勇康",
      "黎唯",
      "美国",
      "关家永",
      "喜剧",
      "奇幻",
      "冒险",
      "英语",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "血观音 / 血觀音",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2505008756.jpg",
    "rating": 5,
    "genres": [
      "惠英红",
      "吴可熙",
      "文淇",
      "柯佳嬿",
      "陈莎莉",
      "丁强",
      "刘尚谦",
      "林志儒",
      "王月",
      "温贞菱",
      "中国台湾",
      "杨雅喆",
      "血观音",
      "剧情",
      "悬疑",
      "粤语",
      "闽南语",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "变脸 / Face/Off",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2173855883.jpg",
    "rating": 5,
    "genres": [
      "琼·艾伦",
      "美国",
      "吴宇森",
      "变脸",
      "动作",
      "科幻",
      "犯罪",
      "惊悚",
      "英语",
      "拉丁语"
    ],
    "type": "电影"
  },
  {
    "title": "天下无贼",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2191934463.jpg",
    "rating": 5,
    "genres": [
      "刘德华",
      "刘若英",
      "王宝强",
      "李冰冰",
      "葛优",
      "张涵予",
      "尤勇智",
      "徐帆",
      "傅彪",
      "范伟",
      "中国大陆",
      "中国香港",
      "冯小刚",
      "动作",
      "犯罪",
      "剧情"
    ],
    "type": "电影"
  },
  {
    "title": "湄公河行动",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2380677316.jpg",
    "rating": 5,
    "genres": [
      "张涵予",
      "彭于晏",
      "孙淳",
      "陈宝国",
      "冯文娟",
      "刘显达",
      "赵健",
      "吴旭东",
      "吴嘉龙",
      "卢惠光",
      "中国大陆",
      "中国香港",
      "林超贤",
      "剧情",
      "动作",
      "犯罪",
      "粤语",
      "泰语",
      "缅甸语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "穿普拉达的女王 / The Devil Wears Prada",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p735379215.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "法国",
      "剧情",
      "喜剧",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "喜欢你",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2455926001.jpg",
    "rating": 5,
    "genres": [
      "金城武",
      "周冬雨",
      "孙艺洲",
      "奚梦瑶",
      "杨祐宁",
      "张国柱",
      "高晓松",
      "林志玲",
      "赵英俊",
      "权桐",
      "中国大陆",
      "中国香港",
      "许宏宇",
      "喜剧",
      "爱情"
    ],
    "type": "电影"
  },
  {
    "title": "怪兽大学 / Monsters University",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1896375401.jpg",
    "rating": 5,
    "genres": [
      "彼得·孙",
      "查理·戴",
      "美国",
      "怪兽大学",
      "喜剧",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "坏蛋联盟 / The Bad Guys",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2870318303.jpg",
    "rating": 5,
    "genres": [
      "奥卡菲娜",
      "美国",
      "坏蛋联盟",
      "喜剧",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "守望者 / Watchmen",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1663601927.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "守望者",
      "动作",
      "科幻",
      "悬疑",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "环太平洋 / Pacific Rim",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2043625972.jpg",
    "rating": 5,
    "genres": [
      "菊地凛子",
      "查理·戴",
      "芦田爱菜",
      "美国",
      "环太平洋",
      "动作",
      "科幻",
      "冒险",
      "英语",
      "日语",
      "粤语",
      "俄语"
    ],
    "type": "电影"
  },
  {
    "title": "影",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2530513100.jpg",
    "rating": 5,
    "genres": [
      "邓超",
      "孙俪",
      "郑恺",
      "王千源",
      "王景春",
      "胡军",
      "关晓彤",
      "吴磊",
      "封柏",
      "罗嘉孟",
      "中国大陆",
      "中国香港",
      "张艺谋",
      "剧情",
      "动作",
      "武侠",
      "古装"
    ],
    "type": "电影"
  },
  {
    "title": "英雄",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1774548839.jpg",
    "rating": 5,
    "genres": [
      "香港)",
      "李连杰",
      "梁朝伟",
      "张曼玉",
      "章子怡",
      "陈道明",
      "甄子丹",
      "刘仲元",
      "郑天庸",
      "秦焰",
      "常晓阳",
      "中国大陆",
      "中国香港",
      "张艺谋",
      "剧情",
      "动作",
      "武侠",
      "古装"
    ],
    "type": "电影"
  },
  {
    "title": "彗星来的那一夜 / Coherence",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2187896734.jpg",
    "rating": 1,
    "genres": [
      "美国",
      "英国",
      "科幻",
      "悬疑",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "死侍2：我爱我家 / Deadpool 2",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2545479945.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "喜剧",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "死侍 / Deadpool",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2309264212.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "加拿大",
      "死侍",
      "喜剧",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "黑衣人：异形入侵 / Men in Black Alien Attack",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2513526771.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "动作",
      "科幻",
      "短片",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "独立日 / Independence Day",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p453518655.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "独立日",
      "动作",
      "科幻",
      "冒险",
      "灾难",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "卓别林 / Chaplin",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p860172116.jpg",
    "rating": 5,
    "genres": [
      "约翰·肖",
      "英国",
      "美国",
      "法国",
      "意大利",
      "卓别林",
      "剧情",
      "传记",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "烈火英雄",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2563657747.jpg",
    "rating": 3,
    "genres": [
      "黄晓明",
      "杜江",
      "谭卓",
      "杨紫",
      "欧豪",
      "侯勇",
      "谷嘉诚",
      "印小天",
      "高戈",
      "许文广",
      "中国大陆",
      "陈国辉",
      "剧情",
      "灾难",
      "于勇敢"
    ],
    "type": "电影"
  },
  {
    "title": "唐山大地震",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p545837150.jpg",
    "rating": 4,
    "genres": [
      "徐帆",
      "张静初",
      "李晨",
      "陈道明",
      "张子枫",
      "张家骏",
      "王子文",
      "陈瑾",
      "陆毅",
      "张国强",
      "中国大陆",
      "冯小刚",
      "剧情",
      "历史",
      "灾难",
      "唐山话"
    ],
    "type": "电影"
  },
  {
    "title": "中国机长",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2568258113.jpg",
    "rating": 3,
    "genres": [
      "张涵予",
      "欧豪",
      "杜江",
      "袁泉",
      "张天爱",
      "李沁",
      "张雅玫",
      "杨祺如",
      "高戈",
      "黄志忠",
      "中国大陆",
      "刘伟强",
      "剧情",
      "传记",
      "灾难",
      "藏语",
      "英语",
      "四川话"
    ],
    "type": "电影"
  },
  {
    "title": "四海",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2867433563.jpg",
    "rating": 2,
    "genres": [
      "刘昊然",
      "刘浩存",
      "沈腾",
      "尹正",
      "乔杉",
      "周奇",
      "张宥浩",
      "冯绍峰",
      "黄晓明",
      "王彦霖",
      "中国大陆",
      "韩寒",
      "喜剧",
      "动作",
      "爱情"
    ],
    "type": "电影"
  },
  {
    "title": "长津湖之水门桥",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2846021991.jpg",
    "rating": 4,
    "genres": [
      "吴京",
      "易烊千玺",
      "朱亚文",
      "李晨",
      "韩东君",
      "张涵予",
      "耿乐",
      "杜淳",
      "段奕宏",
      "胡军",
      "中国大陆",
      "中国香港",
      "徐克",
      "黄建新",
      "朴柱天",
      "剧情",
      "历史",
      "战争"
    ],
    "type": "电影"
  },
  {
    "title": "你丫闭嘴！ / Tais-toi!",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2173579470.jpg",
    "rating": 5,
    "genres": [
      "让·雷诺",
      "法国",
      "意大利",
      "喜剧",
      "犯罪",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "暖暖内含光 / Eternal Sunshine of the Spotless Mind",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p479565065.jpg",
    "rating": 5,
    "genres": [
      "金·凯瑞",
      "美国",
      "剧情",
      "爱情",
      "科幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "少年的你",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2572166063.jpg",
    "rating": 5,
    "genres": [
      "周冬雨",
      "易烊千玺",
      "尹昉",
      "周也",
      "吴越",
      "黄觉",
      "张艺凡",
      "张耀",
      "张歆怡",
      "赵润南",
      "中国大陆",
      "中国香港",
      "曾国祥",
      "剧情",
      "爱情",
      "犯罪"
    ],
    "type": "电影"
  },
  {
    "title": "百鸟朝凤",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2332714135.jpg",
    "rating": 5,
    "genres": [
      "陶泽如",
      "李岷城",
      "嵇波",
      "胡先煦",
      "郑伟",
      "迟蓬",
      "袁中方",
      "墨阳",
      "张喜前",
      "谭群",
      "中国大陆",
      "吴天明",
      "剧情",
      "音乐"
    ],
    "type": "电影"
  },
  {
    "title": "天才枪手 / ฉลาดเกมส์โกง",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2930253139.jpg",
    "rating": 5,
    "genres": [
      "泰国",
      "天才枪手",
      "剧情",
      "犯罪",
      "悬疑",
      "泰语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "网络谜踪 / Searching",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2542848758.jpg",
    "rating": 5,
    "genres": [
      "约翰·赵",
      "刘玥辰",
      "刘卡雅",
      "美国",
      "俄罗斯",
      "网络谜踪",
      "剧情",
      "犯罪",
      "悬疑",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "蜘蛛侠：平行宇宙 / Spider-Man: Into the Spider-Verse",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2535851348.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "动作",
      "科幻",
      "动画",
      "冒险",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "调音师 / Andhadhun",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551995207.jpg",
    "rating": 5,
    "genres": [
      "塔布",
      "印度",
      "调音师",
      "喜剧",
      "犯罪",
      "悬疑",
      "惊悚",
      "印地语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "信条 / Tenet",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2612061299.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "英国",
      "信条",
      "剧情",
      "动作",
      "科幻",
      "英语",
      "俄语",
      "乌克兰语",
      "印地语",
      "挪威语"
    ],
    "type": "电影"
  },
  {
    "title": "小妇人 / Little Women",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2572928166.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "",
      "小妇人",
      "剧情",
      "爱情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "芬奇 / Finch",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2721066869.jpg",
    "rating": 5,
    "genres": [
      "希默斯",
      "美国",
      "芬奇",
      "剧情",
      "科幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "亡命救护车 / Ambulance",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2871800734.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "动作",
      "犯罪",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "权力的游戏 第一季 / Game of Thrones Season 1",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p896064368.jpg",
    "rating": 5,
    "genres": [
      "肖恩·宾",
      "美国",
      "英国",
      "剧情",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "破产姐妹 第一季 / 2 Broke Girls Season 1",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2554478122.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "破产姐妹",
      "破产姐妹",
      "喜剧",
      "英语",
      "西班牙语",
      "日语",
      "希伯来语",
      "韩语"
    ],
    "type": "电影"
  },
  {
    "title": "越狱 第一季 / Prison Break Season 1",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2187172566.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "越狱",
      "越狱",
      "动作",
      "犯罪",
      "剧情",
      "惊悚",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "生活大爆炸 第十二季 / The Big Bang Theory Season 12",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2535085957.jpg",
    "rating": 0,
    "genres": [
      "卡尔·潘",
      "美国",
      "喜剧",
      "爱情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "生活大爆炸 第十一季 / The Big Bang Theory Season 11",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2562676631.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "喜剧",
      "爱情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "生活大爆炸 第十季 / The Big Bang Theory Season 10",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2376308621.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "喜剧",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "生活大爆炸 第九季 / The Big Bang Theory Season 9",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2559504518.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "",
      "喜剧",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "生活大爆炸 第八季 / The Big Bang Theory Season 8",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2201798471.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "",
      "喜剧",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "生活大爆炸 第七季 / The Big Bang Theory Season 7",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2016948076.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "",
      "喜剧",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "生活大爆炸 第六季 / The Big Bang Theory Season 6",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2557870269.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "",
      "喜剧",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "生活大爆炸  第五季 / The Big Bang Theory Season 5",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1169720986.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "",
      "喜剧",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "生活大爆炸  第四季 / The Big Bang Theory Season 4",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p607743654.jpg",
    "rating": 0,
    "genres": [
      "武井乔治",
      "美国",
      "喜剧",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "生活大爆炸  第三季 / The Big Bang Theory Season 3",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1864616471.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "",
      "喜剧",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "生活大爆炸  第二季 / The Big Bang Theory Season 2",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2557622277.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "",
      "喜剧",
      "英语",
      "北印度语"
    ],
    "type": "电影"
  },
  {
    "title": "生活大爆炸  第一季 / The Big Bang Theory Season 1",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2553281898.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "",
      "喜剧",
      "英语",
      "意大利语"
    ],
    "type": "电影"
  },
  {
    "title": "误杀瞒天记 / Drishyam",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2870295964.jpg",
    "rating": 5,
    "genres": [
      "塔布",
      "印度",
      "剧情",
      "犯罪",
      "悬疑",
      "印地语"
    ],
    "type": "电影"
  },
  {
    "title": "绿里奇迹 / The Green Mile",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p767586451.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "绿里奇迹",
      "犯罪",
      "剧情",
      "奇幻",
      "悬疑",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "再次出发之纽约遇见你 / Begin Again",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2250287733.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "喜剧",
      "爱情",
      "音乐",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "机器管家 / Bicentennial Man",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2195410751.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "德国",
      "机器管家",
      "剧情",
      "喜剧",
      "科幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "控方证人 / Witness for the Prosecution",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2367853261.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "英国",
      "控方证人",
      "剧情",
      "犯罪",
      "悬疑",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "十二怒汉 / 12 Angry Men",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2337734157.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "十二怒汉",
      "剧情",
      "犯罪",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "密室逃生 / Escape Room",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2543631842.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "南非",
      "密室逃生",
      "悬疑",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "卧虎藏龙 / 臥虎藏龍",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2908175252.jpg",
    "rating": 5,
    "genres": [
      "周润发",
      "杨紫琼",
      "章子怡",
      "张震",
      "郎雄",
      "郑佩佩",
      "李法曾",
      "高西安",
      "海燕",
      "王德明",
      "中国台湾",
      "中国香港",
      "美国",
      "中国大陆",
      "李安",
      "卧虎藏龙",
      "剧情",
      "爱情",
      "武侠"
    ],
    "type": "电影"
  },
  {
    "title": "新蝙蝠侠 / The Batman",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2868425292.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "新蝙蝠侠",
      "剧情",
      "动作",
      "犯罪",
      "悬疑",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "师父",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2353686155.jpg",
    "rating": 5,
    "genres": [
      "廖凡",
      "宋佳",
      "蒋雯丽",
      "金士杰",
      "宋洋",
      "黄觉",
      "麦迪娜",
      "张傲月",
      "马君",
      "陈观泰",
      "中国大陆",
      "徐浩峰",
      "剧情",
      "动作",
      "武侠"
    ],
    "type": "电影"
  },
  {
    "title": "尚气与十环传奇 / Shang-Chi and the Legend of the Ten Rings",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2674321872.jpg",
    "rating": 2,
    "genres": [
      "刘思慕",
      "梁朝伟",
      "奥卡菲娜",
      "张梦儿",
      "陈法拉",
      "杨紫琼",
      "元华",
      "王汉斌",
      "黎明",
      "美国",
      "澳大利亚",
      "动作",
      "科幻",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "神秘海域 / Uncharted",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2869751944.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "神秘海域",
      "动作",
      "冒险",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "花束般的恋爱 / 花束みたいな恋をした",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2868462052.jpg",
    "rating": 5,
    "genres": [
      "菅田将晖",
      "有村架纯",
      "清原果耶",
      "小田切让",
      "押井守",
      "户田惠子",
      "岩松了",
      "小林薰",
      "韩英惠",
      "日本",
      "土井裕泰",
      "剧情",
      "爱情",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "一代宗师 / 一代宗師",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2217557172.jpg",
    "rating": 5,
    "genres": [
      "梁朝伟",
      "章子怡",
      "张震",
      "宋慧乔",
      "赵本山",
      "小沈阳",
      "王庆祥",
      "张晋",
      "卢海鹏",
      "冯克安",
      "中国大陆",
      "中国香港",
      "王家卫",
      "一代宗师",
      "剧情",
      "传记",
      "动作",
      "爱情",
      "粤语",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "追逐繁星的孩子 / 星を追う子ども",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1957577564.jpg",
    "rating": 4,
    "genres": [
      "金元寿子",
      "入野自由",
      "井上和彦",
      "岛本须美",
      "竹内顺子",
      "大木民夫",
      "金田晶",
      "洞内爱",
      "日本",
      "新海诚",
      "动画",
      "奇幻",
      "冒险",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "纽约的一个雨天 / A Rainy Day in New York",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2868674760.jpg",
    "rating": 5,
    "genres": [
      "裘德·洛",
      "美国",
      "喜剧",
      "爱情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "心灵奇旅 / Soul",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2595591069.jpg",
    "rating": 5,
    "genres": [
      "蒂娜·菲",
      "美国",
      "心灵奇旅",
      "动画",
      "奇幻",
      "音乐",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "雄狮少年",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2702755317.jpg",
    "rating": 5,
    "genres": [
      "李昕",
      "陈业雄",
      "郭皓",
      "李盟",
      "李佳思",
      "蔡壮壮",
      "马语非",
      "熊陈捷",
      "巴赫",
      "大澄子",
      "中国大陆",
      "孙海鹏",
      "剧情",
      "喜剧",
      "动画",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "千钧一发 / Gattaca",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792423963.jpg",
    "rating": 5,
    "genres": [
      "裘德·洛",
      "美国",
      "千钧一发",
      "剧情",
      "科幻",
      "惊悚",
      "英语",
      "世界语"
    ],
    "type": "电影"
  },
  {
    "title": "初恋这件小事 / สิ่งเล็กเล็กที่เรียกว่า...รัก",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1505312273.jpg",
    "rating": 5,
    "genres": [
      "路知行",
      "泰国",
      "",
      "剧情",
      "喜剧",
      "爱情",
      "泰语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "爱在日落黄昏时 / Before Sunset",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2191788134.jpg",
    "rating": 5,
    "genres": [
      "迪亚博洛",
      "美国",
      "法国",
      "剧情",
      "爱情",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "爱在午夜降临前 / Before Midnight",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2074715729.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "希腊",
      "",
      "剧情",
      "爱情",
      "英语",
      "希腊语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "爱在黎明破晓前 / Before Sunrise",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2555762374.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "奥地利",
      "瑞士",
      "剧情",
      "爱情",
      "英语",
      "德语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "第六感 / The Sixth Sense",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2220184425.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "第六感",
      "剧情",
      "悬疑",
      "惊悚",
      "英语",
      "拉丁语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "狩猎 / Jagten",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1546987967.jpg",
    "rating": 5,
    "genres": [
      "丹麦",
      "瑞典",
      "狩猎",
      "剧情",
      "丹麦语",
      "英语",
      "波兰语"
    ],
    "type": "电影"
  },
  {
    "title": "加勒比海盗 / Pirates of the Caribbean: The Curse of the Black Pearl",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1596085504.jpg",
    "rating": 5,
    "genres": [
      "陆建艺",
      "王磊",
      "美国",
      "动作",
      "冒险",
      "奇幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "致命ID / Identity",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2558364386.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "致命ID",
      "剧情",
      "悬疑",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "小鞋子 / بچه های آسمان",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2165511465.jpg",
    "rating": 4,
    "genres": [
      "少爷占",
      "伊朗",
      "小鞋子",
      "剧情",
      "儿童",
      "家庭",
      "波斯语"
    ],
    "type": "电影"
  },
  {
    "title": "本杰明·巴顿奇事 / The Curious Case of Benjamin Button",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2192535722.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "剧情",
      "爱情",
      "奇幻",
      "英语",
      "俄语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "素媛 / 소원",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2118532944.jpg",
    "rating": 4,
    "genres": [
      "薛景求",
      "严志媛",
      "李来",
      "金海淑",
      "金相镐",
      "罗美兰",
      "杨真诚",
      "权泰元",
      "赵福来",
      "徐现宇",
      "韩国",
      "李濬益",
      "素媛",
      "剧情",
      "韩语"
    ],
    "type": "电影"
  },
  {
    "title": "爱情神话",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2914207920.jpg",
    "rating": 5,
    "genres": [
      "徐峥",
      "马伊琍",
      "吴越",
      "倪虹洁",
      "周野芒",
      "黄明昊",
      "王影璐",
      "宁理",
      "张芝华",
      "吴冕",
      "中国大陆",
      "邵艺辉",
      "剧情",
      "喜剧",
      "爱情",
      "沪语"
    ],
    "type": "电影"
  },
  {
    "title": "海蒂和爷爷 / Heidi",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2554525534.jpg",
    "rating": 5,
    "genres": [
      "德国",
      "瑞士",
      "de",
      "剧情",
      "冒险",
      "家庭",
      "南非语",
      "德语",
      "瑞士德语"
    ],
    "type": "电影"
  },
  {
    "title": "穿条纹睡衣的男孩 / The Boy in the Striped Pajamas",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1473670352.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "美国",
      "剧情",
      "战争",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "天书奇谭",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2700138245.jpg",
    "rating": 5,
    "genres": [
      "丁建华",
      "毕克",
      "苏秀",
      "程晓桦",
      "施融",
      "于鼎",
      "杨成纯",
      "孙渝烽",
      "胡庆汉",
      "尚华",
      "中国大陆",
      "王树忱",
      "钱运达",
      "动画",
      "奇幻"
    ],
    "type": "电影"
  },
  {
    "title": "入殓师 / おくりびと",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2707581855.jpg",
    "rating": 5,
    "genres": [
      "本木雅弘",
      "广末凉子",
      "山崎努",
      "吉行和子",
      "笹野高史",
      "余贵美子",
      "杉本哲太",
      "小越勇辉",
      "橘由加莉",
      "峰岸彻",
      "日本",
      "入殓师",
      "剧情",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "007：无暇赴死 / No Time to Die",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2707553644.jpg",
    "rating": 5,
    "genres": [
      "本·卫肖",
      "英国",
      "美国",
      "动作",
      "惊悚",
      "冒险",
      "英语",
      "法语",
      "意大利语",
      "俄语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "少年派的奇幻漂流 / Life of Pi",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1784592701.jpg",
    "rating": 4,
    "genres": [
      "塔布",
      "阿彦·汗",
      "美国",
      "中国台湾",
      "英国",
      "加拿大",
      "李安",
      "剧情",
      "奇幻",
      "冒险",
      "英语",
      "泰米尔语",
      "法语",
      "日语",
      "印地语"
    ],
    "type": "电影"
  },
  {
    "title": "沙丘 / Dune",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2687443734.jpg",
    "rating": 5,
    "genres": [
      "赞达亚",
      "美国",
      "沙丘",
      "剧情",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "我和我的父辈",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2683055011.jpg",
    "rating": 4,
    "genres": [
      "吴京",
      "章子怡",
      "徐峥",
      "沈腾",
      "吴磊",
      "黄轩",
      "袁近辉",
      "任思诺",
      "韩昊霖",
      "宋佳",
      "中国大陆",
      "吴京",
      "章子怡",
      "徐峥",
      "沈腾",
      "剧情"
    ],
    "type": "电影"
  },
  {
    "title": "长津湖",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2681329386.jpg",
    "rating": 5,
    "genres": [
      "吴京",
      "易烊千玺",
      "段奕宏",
      "朱亚文",
      "李晨",
      "韩东君",
      "胡军",
      "张涵予",
      "黄轩",
      "欧豪",
      "中国大陆",
      "中国香港",
      "陈凯歌",
      "徐克",
      "林超贤",
      "宁海强",
      "剧情",
      "历史",
      "战争",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "小丑 / Joker",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2567198874.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "加拿大",
      "小丑",
      "剧情",
      "犯罪",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "王牌对王牌 / The Negotiator",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1971419890.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "德国",
      "动作",
      "犯罪",
      "剧情",
      "悬疑",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "大佛普拉斯",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2505928032.jpg",
    "rating": 5,
    "genres": [
      "庄益增",
      "陈竹升",
      "戴立忍",
      "张少怀",
      "陈以文",
      "纳豆",
      "丁国琳",
      "李永丰",
      "朱约信",
      "雷婕熙",
      "中国台湾",
      "黄信尧",
      "剧情",
      "喜剧",
      "闽南语"
    ],
    "type": "电影"
  },
  {
    "title": "辩护人 / 변호인",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2158166535.jpg",
    "rating": 5,
    "genres": [
      "宋康昊",
      "金迎爱",
      "吴达洙",
      "郭度沅",
      "任时完",
      "宋永彰",
      "郑元中",
      "赵敏基",
      "李杭娜",
      "李星民",
      "韩国",
      "杨宇硕",
      "辩护人",
      "剧情",
      "韩语"
    ],
    "type": "电影"
  },
  {
    "title": "洞 / Le trou",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2497389079.jpg",
    "rating": 5,
    "genres": [
      "法国",
      "意大利",
      "洞",
      "犯罪",
      "剧情",
      "惊悚",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "钢的琴",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p511447359.jpg",
    "rating": 5,
    "genres": [
      "王千源",
      "秦海璐",
      "张申英",
      "刘谦",
      "罗二羊",
      "国永振",
      "周逵",
      "田雨",
      "张亚希",
      "项燕",
      "中国大陆",
      "张猛",
      "剧情",
      "喜剧",
      "俄语"
    ],
    "type": "电影"
  },
  {
    "title": "蜘蛛侠：英雄远征 / Spider-Man: Far from Home",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2558293106.jpg",
    "rating": 0,
    "genres": [
      "赞达亚",
      "美国",
      "",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "惊奇队长 / Captain Marvel",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2546360443.jpg",
    "rating": 0,
    "genres": [
      "裘德·洛",
      "嘉玛·陈",
      "李·佩斯",
      "美国",
      "澳大利亚",
      "",
      "惊奇队长",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "复仇者联盟4：终局之战 / Avengers: Endgame",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550755859.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "乔·罗素",
      "剧情",
      "动作",
      "科幻",
      "奇幻",
      "冒险",
      "英语",
      "日语",
      "科萨语"
    ],
    "type": "电影"
  },
  {
    "title": "红海行动",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514119443.jpg",
    "rating": 4,
    "genres": [
      "张译",
      "黄景瑜",
      "海清",
      "杜江",
      "蒋璐霞",
      "尹昉",
      "王强",
      "郭家豪",
      "王雨甜",
      "麦亨利",
      "中国大陆",
      "中国香港",
      "林超贤",
      "动作",
      "战争",
      "阿拉伯语",
      "英语",
      "索马里语",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "一一",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2924629258.jpg",
    "rating": 4,
    "genres": [
      "李凯莉",
      "金燕玲",
      "张洋洋",
      "萧淑慎",
      "尾形一成",
      "陈希圣",
      "林孟瑾",
      "陈以文",
      "柯宇纶",
      "张育邦",
      "中国台湾",
      "日本",
      "杨德昌",
      "剧情",
      "爱情",
      "家庭",
      "闽南语",
      "英语",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "大话西游之大圣娶亲 / 西遊記大結局之仙履奇緣",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2455050536.jpg",
    "rating": 5,
    "genres": [
      "周星驰",
      "吴孟达",
      "朱茵",
      "蔡少芬",
      "蓝洁瑛",
      "莫文蔚",
      "罗家英",
      "刘镇伟",
      "陆树铭",
      "李健仁",
      "中国香港",
      "中国大陆",
      "刘镇伟",
      "喜剧",
      "爱情",
      "奇幻",
      "古装",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "哈尔的移动城堡 / ハウルの動く城",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2907583906.jpg",
    "rating": 4,
    "genres": [
      "木村拓哉",
      "美轮明宏",
      "伊崎充则",
      "大泉洋",
      "大塚明夫",
      "加藤治子",
      "日本",
      "宫崎骏",
      "爱情",
      "动画",
      "奇幻",
      "冒险",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "小谢尔顿 第四季 / Young Sheldon Season 4",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2569867115.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "小谢尔顿",
      "小谢尔顿",
      "喜剧",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "小谢尔顿 第三季 / Young Sheldon Season 3",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2567488952.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "小谢尔顿",
      "小谢尔顿",
      "喜剧",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "小谢尔顿 第二季 / Young Sheldon Season 2",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2627603750.jpg",
    "rating": 5,
    "genres": [
      "瑞安·方",
      "美国",
      "小谢尔顿",
      "小谢尔顿",
      "喜剧",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "小谢尔顿 第一季 / Young Sheldon Season 1",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2929712034.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "小谢尔顿",
      "小谢尔顿",
      "喜剧",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "浴血黑帮 第四季 / Peaky Blinders Season 4",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2507850485.jpg",
    "rating": 5,
    "genres": [
      "乔·科尔",
      "英国",
      "浴血黑帮",
      "浴血黑帮",
      "剧情",
      "犯罪",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "浴血黑帮 第三季 / Peaky Blinders Season 3",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2359677955.jpg",
    "rating": 5,
    "genres": [
      "乔·科尔",
      "英国",
      "浴血黑帮",
      "浴血黑帮",
      "剧情",
      "犯罪",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "浴血黑帮 第二季 / Peaky Blinders Season 2",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2344714378.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "浴血黑帮",
      "浴血黑帮",
      "剧情",
      "犯罪",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "浴血黑帮 第一季 / Peaky Blinders Season 1",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2172607927.jpg",
    "rating": 5,
    "genres": [
      "乔·科尔",
      "英国",
      "浴血黑帮",
      "浴血黑帮",
      "剧情",
      "犯罪",
      "意大利语",
      "意第绪语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "忠奸人 / Donnie Brasco",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2212201036.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "忠奸人",
      "剧情",
      "传记",
      "犯罪",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "未麻的部屋 / Perfect Blue",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1351050722.jpg",
    "rating": 4,
    "genres": [
      "岩男润子",
      "松本梨香",
      "辻亲八",
      "大仓正章",
      "秋元羊介",
      "盐屋翼",
      "堀秀行",
      "筱原惠美",
      "江原正士",
      "梁田清之",
      "日本",
      "今敏",
      "剧情",
      "犯罪",
      "动画",
      "悬疑",
      "惊悚",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "天堂电影院 / Nuovo Cinema Paradiso",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2653054340.jpg",
    "rating": 5,
    "genres": [
      "意大利",
      "法国",
      "剧情",
      "爱情",
      "意大利语"
    ],
    "type": "电影"
  },
  {
    "title": "荒岛余生 / Cast Away",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2893896497.jpg",
    "rating": 4,
    "genres": [
      "南·马丁",
      "美国",
      "荒岛余生",
      "冒险",
      "剧情",
      "英语",
      "俄语"
    ],
    "type": "电影"
  },
  {
    "title": "怒火·重案 / 怒火",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2673412189.jpg",
    "rating": 4,
    "genres": [
      "甄子丹",
      "谢霆锋",
      "秦岚",
      "谭耀文",
      "黄德斌",
      "吴浩康",
      "何珮瑜",
      "杨天宇",
      "汤君慈",
      "麦亨利",
      "中国香港",
      "中国大陆",
      "陈木胜",
      "动作",
      "犯罪",
      "凌伟骏",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "哈利·波特与死亡圣器(下) / Harry Potter and the Deathly Hallows: Part 2",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2913457020.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "英国",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "哈利·波特与死亡圣器(上) / Harry Potter and the Deathly Hallows: Part 1",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2913456984.jpg",
    "rating": 0,
    "genres": [
      "英国",
      "美国",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "哈利·波特与混血王子 / Harry Potter and the Half-Blood Prince",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2913456964.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "美国",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "哈利·波特与凤凰社 / Harry Potter and the Order of the Phoenix",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2913456924.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "美国",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "哈利·波特与火焰杯 / Harry Potter and the Goblet of Fire",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2913456904.jpg",
    "rating": 5,
    "genres": [
      "梁佩诗",
      "英国",
      "美国",
      "悬疑",
      "奇幻",
      "冒险",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "哈利·波特与阿兹卡班的囚徒 / Harry Potter and the Prisoner of Azkaban",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2913456870.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "美国",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "哈利·波特与密室 / Harry Potter and the Chamber of Secrets",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2913781951.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "美国",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "香水 / Perfume: The Story of a Murderer",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2571500223.jpg",
    "rating": 5,
    "genres": [
      "本·卫肖",
      "德国",
      "法国",
      "西班牙",
      "美国",
      "比利时",
      "香水",
      "剧情",
      "犯罪",
      "奇幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "无间道3：终极无间 / 無間道III 終極無間",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2527603461.jpg",
    "rating": 5,
    "genres": [
      "梁朝伟",
      "刘德华",
      "黎明",
      "陈道明",
      "陈慧琳",
      "黄秋生",
      "曾志伟",
      "郑秀文",
      "刘嘉玲",
      "陈冠希",
      "中国大陆",
      "中国香港",
      "刘伟强",
      "麦兆辉",
      "剧情",
      "犯罪",
      "惊悚",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "无间道2 / 無間道II",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p958008320.jpg",
    "rating": 5,
    "genres": [
      "陈冠希",
      "余文乐",
      "曾志伟",
      "黄秋生",
      "吴镇宇",
      "刘嘉玲",
      "胡军",
      "张耀扬",
      "连凯",
      "惠英红",
      "中国香港",
      "刘伟强",
      "麦兆辉",
      "剧情",
      "犯罪",
      "惊悚",
      "粤语",
      "英语",
      "泰语"
    ],
    "type": "电影"
  },
  {
    "title": "血钻 / Blood Diamond",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1244017073.jpg",
    "rating": 5,
    "genres": [
      "麦克·辛",
      "美国",
      "德国",
      "英国",
      "血钻",
      "剧情",
      "惊悚",
      "冒险",
      "英语",
      "门德语",
      "南非语"
    ],
    "type": "电影"
  },
  {
    "title": "无敌破坏王 / Wreck-It Ralph",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1735642656.jpg",
    "rating": 5,
    "genres": [
      "简·林奇",
      "美国",
      "喜剧",
      "动画",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "小偷家族 / 万引き家族",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2530599636.jpg",
    "rating": 5,
    "genres": [
      "中川雅也",
      "安藤樱",
      "松冈茉优",
      "城桧吏",
      "树木希林",
      "绪形直人",
      "池松壮亮",
      "森口瑶子",
      "山田裕贵",
      "日本",
      "",
      "是枝裕和",
      "小偷家族",
      "剧情",
      "犯罪",
      "家庭",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "生化危机 / Resident Evil",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2174120073.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "德国",
      "法国",
      "美国",
      "加拿大",
      "生化危机",
      "动作",
      "科幻",
      "恐怖",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "惊魂记 / Psycho",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1021883305.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "惊魂记",
      "悬疑",
      "惊悚",
      "恐怖",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "你的名字。 / 君の名は。",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2910701461.jpg",
    "rating": 5,
    "genres": [
      "长泽雅美",
      "市原悦子",
      "成田凌",
      "悠木碧",
      "岛崎信长",
      "石川界人",
      "谷花音",
      "寺杣昌纪",
      "日本",
      "新海诚",
      "剧情",
      "爱情",
      "动画",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "新世界 / 신세계",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1903379979.jpg",
    "rating": 5,
    "genres": [
      "李政宰",
      "崔岷植",
      "黄政民",
      "宋智孝",
      "朴成雄",
      "金秉玉",
      "金胤成",
      "崔禹亨",
      "李熙硕",
      "咸真圣",
      "韩国",
      "朴勋政",
      "新世界",
      "剧情",
      "犯罪",
      "韩语"
    ],
    "type": "电影"
  },
  {
    "title": "釜山行 / 부산행",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2360940399.jpg",
    "rating": 5,
    "genres": [
      "孔刘",
      "郑裕美",
      "马东锡",
      "金秀安",
      "金义城",
      "崔宇植",
      "安昭熙",
      "崔奎华",
      "郑锡勇",
      "芮秀贞",
      "韩国",
      "延尚昊",
      "釜山行",
      "动作",
      "惊悚",
      "灾难",
      "韩语"
    ],
    "type": "电影"
  },
  {
    "title": "甜蜜蜜",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2223011274.jpg",
    "rating": 0,
    "genres": [
      "黎明",
      "张曼玉",
      "杨恭如",
      "曾志伟",
      "杜可风",
      "张同祖",
      "诸慧荷",
      "丁羽",
      "关信辉",
      "中国香港",
      "陈可辛",
      "剧情",
      "爱情",
      "粤语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "请以你的名字呼唤我 / Call Me by Your Name",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2505525050.jpg",
    "rating": 5,
    "genres": [
      "意大利",
      "法国",
      "巴西",
      "美国",
      "剧情",
      "爱情",
      "同性",
      "英语",
      "意大利语",
      "法语",
      "德语",
      "希伯来语"
    ],
    "type": "电影"
  },
  {
    "title": "西西里的美丽传说 / Malèna",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2441988159.jpg",
    "rating": 5,
    "genres": [
      "意大利",
      "美国",
      "剧情",
      "战争",
      "情色",
      "意大利语",
      "英语",
      "拉丁语",
      "古希腊语"
    ],
    "type": "电影"
  },
  {
    "title": "熔炉 / 도가니",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1363250216.jpg",
    "rating": 4,
    "genres": [
      "孔刘",
      "郑裕美",
      "金贤秀",
      "郑仁絮",
      "白承焕",
      "张矿",
      "金民尚",
      "林贤成",
      "金周灵",
      "严孝燮",
      "韩国",
      "黄东赫",
      "熔炉",
      "剧情",
      "韩语"
    ],
    "type": "电影"
  },
  {
    "title": "犬之岛 / Isle of Dogs",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2499734013.jpg",
    "rating": 5,
    "genres": [
      "野村训市",
      "德国",
      "日本",
      "美国",
      "英国",
      "犬之岛",
      "喜剧",
      "动画",
      "冒险",
      "英语",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "哈利·波特与魔法石 / Harry Potter and the Sorcerer's Stone",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2913781448.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "英国",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "恐怖直播 / 더 테러 라이브",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2016930906.jpg",
    "rating": 5,
    "genres": [
      "河正宇",
      "李璟荣",
      "全慧珍",
      "李大卫",
      "金弘波",
      "崔正贤",
      "崔大勋",
      "姜信哲",
      "韩成天",
      "孙成灿",
      "韩国",
      "金秉祐",
      "恐怖直播",
      "剧情",
      "犯罪",
      "悬疑",
      "韩语"
    ],
    "type": "电影"
  },
  {
    "title": "觉醒年代",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2631873666.jpg",
    "rating": 5,
    "genres": [
      "于和伟",
      "张桐",
      "张晚意",
      "马启越",
      "马少骅",
      "朱刚日尧",
      "曹磊",
      "夏德俊",
      "周显欣",
      "杨景天",
      "中国大陆",
      "张永新",
      "剧情",
      "历史"
    ],
    "type": "电影"
  },
  {
    "title": "革命者",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2666303410.jpg",
    "rating": 3,
    "genres": [
      "张颂文",
      "李易峰",
      "佟丽娅",
      "成泰燊",
      "彭昱畅",
      "李九霄",
      "韩庚",
      "梁静",
      "马少骅",
      "白客",
      "中国大陆",
      "徐展雄",
      "剧情",
      "历史"
    ],
    "type": "电影"
  },
  {
    "title": "恐怖游轮 / Triangle",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p462470694.jpg",
    "rating": 5,
    "genres": [
      "艾玛·朗",
      "英国",
      "澳大利亚",
      "恐怖游轮",
      "科幻",
      "悬疑",
      "奇幻",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "黑客帝国3：矩阵革命 / The Matrix Revolutions",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p443461818.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "动作",
      "科幻",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "黑客帝国2：重装上阵 / The Matrix Reloaded",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p443461390.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "动作",
      "科幻",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "爆裂鼓手 / Whiplash",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2915975989.jpg",
    "rating": 4,
    "genres": [
      "内特·朗",
      "美国",
      "爆裂鼓手",
      "剧情",
      "音乐",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "波西米亚狂想曲 / Bohemian Rhapsody",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549558913.jpg",
    "rating": 5,
    "genres": [
      "本·哈迪",
      "英国",
      "美国",
      "剧情",
      "传记",
      "同性",
      "音乐",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "沉默的羔羊 / The Silence of the Lambs",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1593414327.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "剧情",
      "犯罪",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "2001太空漫游 / 2001: A Space Odyssey",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2920238790.jpg",
    "rating": 4,
    "genres": [
      "英国",
      "美国",
      "科幻",
      "惊悚",
      "冒险",
      "英语",
      "俄语"
    ],
    "type": "电影"
  },
  {
    "title": "完美陌生人 / Perfetti sconosciuti",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2522331945.jpg",
    "rating": 5,
    "genres": [
      "意大利",
      "剧情",
      "喜剧",
      "意大利语"
    ],
    "type": "电影"
  },
  {
    "title": "寄生虫 / 기생충",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2561439800.jpg",
    "rating": 5,
    "genres": [
      "宋康昊",
      "李善均",
      "赵汝贞",
      "崔宇植",
      "朴素丹",
      "李姃垠",
      "张慧珍",
      "郑知晓",
      "朴明勋",
      "朴叙俊",
      "韩国",
      "奉俊昊",
      "寄生虫",
      "剧情",
      "韩语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "杀人回忆 / 살인의 추억",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1633113220.jpg",
    "rating": 5,
    "genres": [
      "宋康昊",
      "金相庆",
      "金雷夏",
      "宋在浩",
      "边希峰",
      "高瑞熙",
      "柳泰浩",
      "朴努植",
      "朴海日",
      "全美善",
      "韩国",
      "奉俊昊",
      "杀人回忆",
      "剧情",
      "动作",
      "犯罪",
      "悬疑",
      "惊悚",
      "韩语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "战争之王 / Lord of War",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p792282381.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "德国",
      "战争之王",
      "剧情",
      "犯罪",
      "英语",
      "乌克兰语",
      "德语",
      "西班牙语",
      "俄语",
      "法语",
      "阿拉伯语",
      "土耳其语"
    ],
    "type": "电影"
  },
  {
    "title": "兵临城下 / Enemy at the Gates",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1591033712.jpg",
    "rating": 5,
    "genres": [
      "裘德·洛",
      "爱尔兰",
      "英国",
      "法国",
      "德国",
      "美国",
      "兵临城下",
      "剧情",
      "历史",
      "战争",
      "英语",
      "德语",
      "俄语"
    ],
    "type": "电影"
  },
  {
    "title": "爱，死亡和机器人 第二季 / Love, Death & Robots Season 2",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2641221021.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "肉食部门",
      "吕寅荣",
      "喜剧",
      "科幻",
      "动画",
      "奇幻",
      "恐怖",
      "短片",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "黑客帝国 / The Matrix",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p451926968.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "黑客帝国",
      "动作",
      "科幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "回到未来 / Back to the Future",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2924754155.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "回到未来",
      "喜剧",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "银翼杀手2049 / Blade Runner 2049",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2501864539.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "英国",
      "加拿大",
      "西班牙",
      "剧情",
      "动作",
      "科幻",
      "悬疑",
      "惊悚",
      "英语",
      "芬兰语",
      "日语",
      "匈牙利语",
      "俄语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "消失的爱人 / Gone Girl",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2221768894.jpg",
    "rating": 5,
    "genres": [
      "裴淳华",
      "美国",
      "剧情",
      "犯罪",
      "悬疑",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "功夫",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2219011938.jpg",
    "rating": 5,
    "genres": [
      "周星驰",
      "元秋",
      "元华",
      "黄圣依",
      "梁小龙",
      "陈国坤",
      "田启文",
      "林子聪",
      "林雪",
      "冯克安",
      "中国大陆",
      "中国香港",
      "周星驰",
      "动作",
      "喜剧",
      "犯罪",
      "奇幻",
      "粤语",
      "手语"
    ],
    "type": "电影"
  },
  {
    "title": "喜剧之王 / 喜劇之王",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2917778954.jpg",
    "rating": 5,
    "genres": [
      "周星驰",
      "张柏芝",
      "莫文蔚",
      "吴孟达",
      "林子善",
      "田启文",
      "李兆基",
      "成龙",
      "李思捷",
      "郑文辉",
      "中国香港",
      "周星驰",
      "李力持",
      "喜剧之王",
      "喜剧",
      "剧情",
      "爱情",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "飞行家 / The Aviator",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2215458280.jpg",
    "rating": 0,
    "genres": [
      "裘德·洛",
      "美国",
      "德国",
      "飞行家",
      "剧情",
      "传记",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "烈火战车 / Chariots of Fire",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1588317576.jpg",
    "rating": 0,
    "genres": [
      "英国",
      "烈火战车",
      "剧情",
      "历史",
      "运动",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "大独裁者 / The Great Dictator",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1960167314.jpg",
    "rating": 0,
    "genres": [
      "邱岳峰",
      "美国",
      "大独裁者",
      "喜剧",
      "剧情",
      "战争",
      "英语",
      "世界语"
    ],
    "type": "电影"
  },
  {
    "title": "超脱 / Detachment",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1305562621.jpg",
    "rating": 0,
    "genres": [
      "刘玉玲",
      "美国",
      "超脱",
      "剧情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "心灵捕手 / Good Will Hunting",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p480965695.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "心灵捕手",
      "剧情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "钢琴家 / The Pianist",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1381339291.jpg",
    "rating": 0,
    "genres": [
      "英国",
      "法国",
      "波兰",
      "德国",
      "美国",
      "钢琴家",
      "剧情",
      "传记",
      "战争",
      "音乐",
      "英语",
      "德语",
      "俄语"
    ],
    "type": "电影"
  },
  {
    "title": "无主之地 / Ničija zemlja",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2192940679.jpg",
    "rating": 0,
    "genres": [
      "波黑",
      "意大利",
      "法国",
      "英国",
      "比利时",
      "无主之地",
      "剧情",
      "战争",
      "英语",
      "法语",
      "德语"
    ],
    "type": "电影"
  },
  {
    "title": "十二怒汉 / 12 Angry Men",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2173577632.jpg",
    "rating": 0,
    "genres": [
      "李·科布",
      "美国",
      "十二怒汉",
      "剧情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "阳光灿烂的日子",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2582946597.jpg",
    "rating": 5,
    "genres": [
      "夏雨",
      "宁静",
      "陶虹",
      "耿乐",
      "斯琴高娃",
      "冯小刚",
      "刘小宁",
      "姜文",
      "王学圻",
      "王朔",
      "中国大陆",
      "中国香港",
      "姜文",
      "剧情",
      "爱情"
    ],
    "type": "电影"
  },
  {
    "title": "鬼子来了",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p776573640.jpg",
    "rating": 5,
    "genres": [
      "姜文",
      "香川照之",
      "袁丁",
      "姜宏波",
      "丛志军",
      "李丛喜",
      "泽田谦也",
      "李海滨",
      "蔡卫东",
      "陈述",
      "中国大陆",
      "姜文",
      "剧情",
      "喜剧",
      "日语",
      "唐山话"
    ],
    "type": "电影"
  },
  {
    "title": "十一罗汉 / Ocean's Eleven",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1973370351.jpg",
    "rating": 4,
    "genres": [
      "秦少波",
      "美国",
      "十一罗汉",
      "犯罪",
      "惊悚",
      "英语",
      "意大利语",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "血战钢锯岭 / Hacksaw Ridge",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2398141939.jpg",
    "rating": 5,
    "genres": [
      "澳大利亚",
      "美国",
      "",
      "剧情",
      "传记",
      "历史",
      "战争",
      "英语",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "美丽心灵 / A Beautiful Mind",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1665997400.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "美丽心灵",
      "传记",
      "剧情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "至暗时刻 / Darkest Hour",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2504277551.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "美国",
      "乔·赖特",
      "至暗时刻",
      "剧情",
      "传记",
      "历史",
      "战争",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "窃听风暴 / Das Leben der Anderen",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1808872109.jpg",
    "rating": 0,
    "genres": [
      "德国",
      "窃听风暴",
      "剧情",
      "悬疑",
      "德语"
    ],
    "type": "电影"
  },
  {
    "title": "活着",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2597919477.jpg",
    "rating": 0,
    "genres": [
      "葛优",
      "巩俐",
      "姜武",
      "牛犇",
      "郭涛",
      "张璐",
      "倪大红",
      "肖聪",
      "董飞",
      "刘天池",
      "中国大陆",
      "中国香港",
      "张艺谋",
      "剧情",
      "历史",
      "家庭"
    ],
    "type": "电影"
  },
  {
    "title": "教父2 / The Godfather: Part II",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2194138787.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "剧情",
      "犯罪",
      "英语",
      "意大利语",
      "西班牙语",
      "拉丁语",
      "西西里语"
    ],
    "type": "电影"
  },
  {
    "title": "死亡诗社 / Dead Poets Society",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2575465690.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "死亡诗社",
      "剧情",
      "英语",
      "拉丁语"
    ],
    "type": "电影"
  },
  {
    "title": "教父 / The Godfather",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p616779645.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "教父",
      "剧情",
      "犯罪",
      "英语",
      "意大利语",
      "拉丁语"
    ],
    "type": "电影"
  },
  {
    "title": "七武士 / 七人の侍",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2215886505.jpg",
    "rating": 0,
    "genres": [
      "三船敏郎",
      "志村乔",
      "津岛惠子",
      "岛崎雪子",
      "藤原釜足",
      "加东大介",
      "木村功",
      "千秋实",
      "宫口精二",
      "小杉义男",
      "日本",
      "黑泽明",
      "七武士",
      "动作",
      "冒险",
      "剧情",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "迷魂记 / Vertigo",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1275162115.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "迷魂记",
      "爱情",
      "悬疑",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "莫斯科不相信眼泪 / Москва слезам не верит",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2542279117.jpg",
    "rating": 5,
    "genres": [
      "苏联",
      "喜剧",
      "剧情",
      "爱情",
      "俄语"
    ],
    "type": "电影"
  },
  {
    "title": "魂断蓝桥 / Waterloo Bridge",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2351134499.jpg",
    "rating": 5,
    "genres": [
      "费雯·丽",
      "美国",
      "伍经纬",
      "魂断蓝桥",
      "剧情",
      "爱情",
      "战争",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "发条橙 / A Clockwork Orange",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p529908155.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "美国",
      "发条橙",
      "犯罪",
      "剧情",
      "科幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "战场上的快乐圣诞 / Merry Christmas Mr. Lawrence",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2630100110.jpg",
    "rating": 5,
    "genres": [
      "坂本龙一",
      "北野武",
      "内田裕也",
      "英国",
      "新西兰",
      "日本",
      "大岛渚",
      "剧情",
      "战争",
      "同性",
      "英语",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "疯狂的石头",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p712241453.jpg",
    "rating": 5,
    "genres": [
      "郭涛",
      "刘桦",
      "连晋",
      "黄渤",
      "徐峥",
      "岳小军",
      "罗兰",
      "王迅",
      "宁浩",
      "杜杰",
      "中国大陆",
      "中国香港",
      "宁浩",
      "喜剧",
      "犯罪",
      "重庆话"
    ],
    "type": "电影"
  },
  {
    "title": "寻子遇仙记 / The Kid",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2506524685.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "剧情",
      "喜剧",
      "家庭",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "雨中曲 / Singin' in the Rain",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1612355875.jpg",
    "rating": 5,
    "genres": [
      "简·哈根",
      "美国",
      "雨中曲",
      "喜剧",
      "歌舞",
      "爱情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "遗愿清单 / The Bucket List",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2676812053.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "遗愿清单",
      "冒险",
      "喜剧",
      "剧情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "一个叫欧维的男人决定去死 / En man som heter Ove",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2406624993.jpg",
    "rating": 4,
    "genres": [
      "瑞典",
      "剧情",
      "瑞典语",
      "波斯语"
    ],
    "type": "电影"
  },
  {
    "title": "饮食男女 / 飲食男女",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1910899751.jpg",
    "rating": 5,
    "genres": [
      "郎雄",
      "杨贵媚",
      "吴倩莲",
      "王渝文",
      "张艾嘉",
      "归亚蕾",
      "赵文瑄",
      "陈昭荣",
      "陈捷文",
      "卢金城",
      "中国台湾",
      "美国",
      "李安",
      "饮食男女",
      "剧情",
      "家庭",
      "闽南语",
      "湖南话"
    ],
    "type": "电影"
  },
  {
    "title": "喜宴 / 囍宴",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2249048907.jpg",
    "rating": 5,
    "genres": [
      "赵文瑄",
      "归亚蕾",
      "郎雄",
      "金素梅",
      "许永德",
      "李淳",
      "中国台湾",
      "美国",
      "李安",
      "喜宴",
      "剧情",
      "喜剧",
      "爱情",
      "同性",
      "家庭",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "荒蛮故事 / Relatos salvajes",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2919686972.jpg",
    "rating": 5,
    "genres": [
      "阿根廷",
      "西班牙",
      "荒蛮故事",
      "剧情",
      "喜剧",
      "犯罪",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "当哈利遇到莎莉 / When Harry Met Sally...",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2172960925.jpg",
    "rating": 3,
    "genres": [
      "美国",
      "喜剧",
      "剧情",
      "爱情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "好莱坞往事 / Once Upon a Time... in Hollywood",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551119672.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "英国",
      "中国大陆",
      "剧情",
      "喜剧",
      "英语",
      "意大利语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "天生一对 / The Parent Trap",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2564488418.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "天生一对",
      "儿童",
      "喜剧",
      "爱情",
      "家庭",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "被嫌弃的松子的一生 / 嫌われ松子の一生",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p884763596.jpg",
    "rating": 3,
    "genres": [
      "中谷美纪",
      "永山瑛太",
      "香川照之",
      "柄本明",
      "荒川良良",
      "柴崎幸",
      "土屋安娜",
      "日本",
      "中岛哲也",
      "剧情",
      "歌舞",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "哪吒之魔童降世",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2563780504.jpg",
    "rating": 5,
    "genres": [
      "吕艳婷",
      "囧森瑟夫",
      "瀚墨",
      "陈浩",
      "绿绮",
      "张珈铭",
      "杨卫",
      "何禹祥",
      "任俊鹏",
      "大海",
      "中国大陆",
      "饺子",
      "剧情",
      "喜剧",
      "动画",
      "奇幻"
    ],
    "type": "电影"
  },
  {
    "title": "让子弹飞",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1512562287.jpg",
    "rating": 5,
    "genres": [
      "姜文",
      "葛优",
      "周润发",
      "刘嘉玲",
      "陈坤",
      "张默",
      "姜武",
      "周韵",
      "廖凡",
      "姚橹",
      "中国大陆",
      "中国香港",
      "姜文",
      "剧情",
      "喜剧",
      "动作",
      "西部",
      "四川话",
      "山西话"
    ],
    "type": "电影"
  },
  {
    "title": "流浪地球",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2545472803.jpg",
    "rating": 5,
    "genres": [
      "吴京",
      "屈楚萧",
      "李光洁",
      "吴孟达",
      "赵今麦",
      "隋凯",
      "屈菁菁",
      "张亦驰",
      "杨皓宇",
      "中国大陆",
      "郭帆",
      "科幻",
      "冒险",
      "灾难",
      "英语",
      "俄语",
      "法语",
      "日语",
      "韩语",
      "印尼语"
    ],
    "type": "电影"
  },
  {
    "title": "我不是药神",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2561305376.jpg",
    "rating": 5,
    "genres": [
      "徐峥",
      "王传君",
      "周一围",
      "谭卓",
      "章宇",
      "杨新鸣",
      "王砚辉",
      "王佳佳",
      "贾弘逍",
      "龚蓓苾",
      "中国大陆",
      "文牧野",
      "剧情",
      "喜剧",
      "英语",
      "上海话",
      "印地语"
    ],
    "type": "电影"
  },
  {
    "title": "后窗 / Rear Window",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p998913501.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "后窗",
      "悬疑",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "闪灵 / The Shining",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2928985187.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "美国",
      "闪灵",
      "恐怖",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "金刚不坏 / Death Proof",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p948510953.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "金刚不坏",
      "动作",
      "犯罪",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "神探夏洛克：可恶的新娘 / Sherlock: The Abominable Bride",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2299823043.jpg",
    "rating": 4,
    "genres": [
      "英国",
      "剧情",
      "犯罪",
      "悬疑",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "赎罪 / Atonement",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2174553771.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "法国",
      "乔·赖特",
      "赎罪",
      "剧情",
      "悬疑",
      "爱情",
      "战争",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "为奴十二年 / 12 Years a Slave",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2167964789.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "英国",
      "剧情",
      "传记",
      "历史",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "杀死比尔2 / Kill Bill: Vol. 2",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910897532.jpg",
    "rating": 5,
    "genres": [
      "刘家辉",
      "刘玉玲",
      "美国",
      "动作",
      "犯罪",
      "惊悚",
      "英语",
      "粤语",
      "日语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "杀死比尔 / Kill Bill: Vol. 1",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2493495946.jpg",
    "rating": 5,
    "genres": [
      "刘玉玲",
      "栗山千明",
      "千叶真一",
      "刘家辉",
      "美国",
      "杀死比尔",
      "动作",
      "犯罪",
      "惊悚",
      "英语",
      "日语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "八恶人 / The Hateful Eight",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2287491621.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "八恶人",
      "剧情",
      "犯罪",
      "西部",
      "英语",
      "法语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "落水狗 / Reservoir Dogs",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1851340431.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "落水狗",
      "惊悚",
      "犯罪",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "无耻混蛋 / Inglourious Basterds",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2575043939.jpg",
    "rating": 5,
    "genres": [
      "德国",
      "美国",
      "无耻混蛋",
      "剧情",
      "犯罪",
      "英语",
      "德语",
      "法语",
      "意大利语"
    ],
    "type": "电影"
  },
  {
    "title": "被解救的姜戈 / Django Unchained",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1800813767.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "剧情",
      "动作",
      "西部",
      "冒险",
      "英语",
      "法语",
      "德语"
    ],
    "type": "电影"
  },
  {
    "title": "记忆碎片 / Memento",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p641688453.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "记忆碎片",
      "犯罪",
      "剧情",
      "悬疑",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "花样年华 / 花樣年華",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2918312477.jpg",
    "rating": 4,
    "genres": [
      "张曼玉",
      "梁朝伟",
      "潘迪华",
      "雷震",
      "萧炳林",
      "陈万雷",
      "张同祖",
      "钱似莺",
      "顾锦华",
      "张耀扬",
      "中国香港",
      "王家卫",
      "花样年华",
      "剧情",
      "爱情",
      "粤语",
      "沪语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "星球大战前传1：幽灵的威胁 / Star Wars: Episode I - The Phantom Menace",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2308392633.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "黑天鹅 / Black Swan",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2549648344.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "黑天鹅",
      "剧情",
      "惊悚",
      "英语",
      "法语",
      "意大利语"
    ],
    "type": "电影"
  },
  {
    "title": "真爱至上 / Love Actually",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p475600770.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "美国",
      "法国",
      "真爱至上",
      "喜剧",
      "剧情",
      "爱情",
      "英语",
      "葡萄牙语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "城市之光 / City Lights",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2170238828.jpg",
    "rating": 5,
    "genres": [
      "珍·哈露",
      "汉克·曼",
      "美国",
      "城市之光",
      "喜剧",
      "剧情",
      "爱情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "色，戒",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p453716305.jpg",
    "rating": 4,
    "genres": [
      "梁朝伟",
      "汤唯",
      "陈冲",
      "王力宏",
      "庹宗华",
      "朱芷莹",
      "高英轩",
      "柯宇纶",
      "阮德锵",
      "钱嘉乐",
      "中国台湾",
      "中国大陆",
      "美国",
      "中国香港",
      "李安",
      "剧情",
      "爱情",
      "情色",
      "上海话",
      "英语",
      "粤语",
      "日语",
      "印地语"
    ],
    "type": "电影"
  },
  {
    "title": "英雄本色2",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2597917153.jpg",
    "rating": 5,
    "genres": [
      "狄龙",
      "张国荣",
      "周润发",
      "石天",
      "关山",
      "朱宝意",
      "曾江",
      "成奎安",
      "吴孟达",
      "王正方",
      "中国香港",
      "吴宇森",
      "剧情",
      "动作",
      "犯罪",
      "粤语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "淘金记 / The Gold Rush",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2923052952.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "淘金记",
      "喜剧",
      "爱情",
      "西部",
      "冒险",
      "英语",
      "无对白"
    ],
    "type": "电影"
  },
  {
    "title": "全金属外壳 / Full Metal Jacket",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2904461408.jpg",
    "rating": 4,
    "genres": [
      "李·厄米",
      "英国",
      "美国",
      "剧情",
      "战争",
      "英语",
      "越南语"
    ],
    "type": "电影"
  },
  {
    "title": "末代皇帝 / The Last Emperor",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p452089833.jpg",
    "rating": 5,
    "genres": [
      "尊龙",
      "陈冲",
      "邬君梅",
      "英若诚",
      "吴涛",
      "黄自强",
      "坂本龙一",
      "马吉·汉",
      "英国",
      "意大利",
      "中国大陆",
      "法国",
      "末代皇帝",
      "剧情",
      "传记",
      "历史",
      "英语",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "莫扎特传 / Amadeus",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p595764767.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "法国",
      "莫扎特传",
      "剧情",
      "传记",
      "音乐",
      "英语",
      "意大利语",
      "拉丁语",
      "德语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "金枝玉叶 / 金枝玉葉",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2167118411.jpg",
    "rating": 4,
    "genres": [
      "袁咏仪",
      "张国荣",
      "刘嘉玲",
      "陈小春",
      "曾志伟",
      "罗家英",
      "林晓峰",
      "郑丹瑞",
      "张之亮",
      "张同祖",
      "中国香港",
      "陈可辛",
      "金枝玉叶",
      "喜剧",
      "爱情",
      "同性",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "贫民窟的百万富翁 / Slumdog Millionaire",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2434249040.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "",
      "剧情",
      "爱情",
      "英语",
      "印地语",
      "法语",
      "德语"
    ],
    "type": "电影"
  },
  {
    "title": "纵横四海 / 縱橫四海",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2597918718.jpg",
    "rating": 5,
    "genres": [
      "周润发",
      "张国荣",
      "钟楚红",
      "朱江",
      "曾江",
      "胡枫",
      "唐宁",
      "邓一君",
      "蔡国强",
      "何锦满",
      "中国香港",
      "吴宇森",
      "纵横四海",
      "剧情",
      "喜剧",
      "动作",
      "犯罪",
      "粤语",
      "客家话",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "胭脂扣",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2205476838.jpg",
    "rating": 5,
    "genres": [
      "梅艳芳",
      "张国荣",
      "万梓良",
      "朱宝意",
      "温碧霞",
      "谭倩红",
      "汪禹",
      "刘家荣",
      "惠英红",
      "谢贤",
      "中国香港",
      "关锦鹏",
      "剧情",
      "爱情",
      "奇幻",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "枪王 / 鎗王",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1934400144.jpg",
    "rating": 4,
    "genres": [
      "张国荣",
      "方中信",
      "黄卓玲",
      "陈法蓉",
      "谷德昭",
      "陈望华",
      "张旭燊",
      "黎志伟",
      "戚务振",
      "方平",
      "中国香港",
      "罗志良",
      "枪王",
      "动作",
      "犯罪",
      "李厚颀",
      "杨展鸿",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "幸福终点站 / The Terminal",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2181698213.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "喜剧",
      "剧情",
      "爱情",
      "英语",
      "西班牙语",
      "俄语",
      "德语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "搏击俱乐部 / Fight Club",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910931622.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "剧情",
      "动作",
      "悬疑",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "飞越疯人院 / One Flew Over the Cuckoo's Nest",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792238287.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "剧情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "罗生门 / 羅生門",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1598883511.jpg",
    "rating": 4,
    "genres": [
      "三船敏郎",
      "京町子",
      "森雅之",
      "志村乔",
      "千秋实",
      "本间文子",
      "加东大介",
      "日本",
      "黑泽明",
      "罗生门",
      "剧情",
      "犯罪",
      "悬疑",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "七宗罪 / Se7en",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2219586434.jpg",
    "rating": 5,
    "genres": [
      "李·厄米",
      "美国",
      "七宗罪",
      "剧情",
      "犯罪",
      "悬疑",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "两杆大烟枪 / Lock, Stock and Two Smoking Barrels",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p792443418.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "盖·里奇",
      "剧情",
      "喜剧",
      "犯罪",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "控方证人 / Witness for the Prosecution",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2927451337.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "控方证人",
      "剧情",
      "犯罪",
      "悬疑",
      "惊悚",
      "英语",
      "德语"
    ],
    "type": "电影"
  },
  {
    "title": "触不可及 / Intouchables",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1454261925.jpg",
    "rating": 5,
    "genres": [
      "奥玛·希",
      "法国",
      "触不可及",
      "剧情",
      "喜剧",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "无间道 / 無間道",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2597979873.jpg",
    "rating": 5,
    "genres": [
      "刘德华",
      "梁朝伟",
      "黄秋生",
      "曾志伟",
      "陈慧琳",
      "郑秀文",
      "陈冠希",
      "余文乐",
      "萧亚轩",
      "林家栋",
      "中国香港",
      "刘伟强",
      "麦兆辉",
      "无间道",
      "剧情",
      "犯罪",
      "惊悚",
      "麦兆辉",
      "庄文强",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "社交网络 / The Social Network",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2553756806.jpg",
    "rating": 4,
    "genres": [
      "美国",
      "社交网络",
      "剧情",
      "传记",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "地心引力 / Gravity",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2159078612.jpg",
    "rating": 4,
    "genres": [
      "英国",
      "美国",
      "墨西哥",
      "地心引力",
      "科幻",
      "惊悚",
      "灾难",
      "英语",
      "格陵兰语"
    ],
    "type": "电影"
  },
  {
    "title": "战马 / War Horse",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1248524406.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "印度",
      "战马",
      "剧情",
      "战争",
      "英语",
      "德语"
    ],
    "type": "电影"
  },
  {
    "title": "猫鼠游戏 / Catch Me If You Can",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p453924541.jpg",
    "rating": 5,
    "genres": [
      "马丁·辛",
      "美国",
      "加拿大",
      "猫鼠游戏",
      "传记",
      "犯罪",
      "剧情",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "听风者",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1400056430.jpg",
    "rating": 3,
    "genres": [
      "梁朝伟",
      "周迅",
      "范晓萱",
      "王学兵",
      "董勇",
      "甘婷婷",
      "单立文",
      "吴家丽",
      "张之亮",
      "唐群",
      "中国大陆",
      "中国香港",
      "麦兆辉",
      "庄文强",
      "剧情",
      "悬疑",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "家有喜事 / 家有囍事",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p940263436.jpg",
    "rating": 5,
    "genres": [
      "张国荣",
      "周星驰",
      "张曼玉",
      "吴君如",
      "黄百鸣",
      "陈淑兰",
      "毛舜筠",
      "李香琴",
      "关海山",
      "高志森",
      "中国香港",
      "高志森",
      "家有喜事",
      "剧情",
      "喜剧",
      "爱情",
      "家庭",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "2046",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2359293069.jpg",
    "rating": 4,
    "genres": [
      "梁朝伟",
      "章子怡",
      "王菲",
      "木村拓哉",
      "巩俐",
      "刘嘉玲",
      "张震",
      "张曼玉",
      "董洁",
      "中国香港",
      "中国大陆",
      "法国",
      "意大利",
      "德国",
      "",
      "王家卫",
      "剧情",
      "爱情",
      "奇幻",
      "粤语",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "看不见的客人 / Contratiempo",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2498971355.jpg",
    "rating": 5,
    "genres": [
      "西班牙",
      "剧情",
      "犯罪",
      "悬疑",
      "惊悚",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "当幸福来敲门 / The Pursuit of Happyness",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1312700628.jpg",
    "rating": 5,
    "genres": [
      "乔治·张",
      "美国",
      "剧情",
      "传记",
      "家庭",
      "英语",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "美丽人生 / La vita è bella",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2578474613.jpg",
    "rating": 5,
    "genres": [
      "意大利",
      "美丽人生",
      "剧情",
      "喜剧",
      "爱情",
      "战争",
      "意大利语",
      "德语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "奇迹男孩 / Wonder",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2507709428.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "中国香港",
      "奇迹男孩",
      "剧情",
      "儿童",
      "家庭",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "变相怪杰 / The Mask",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2043441362.jpg",
    "rating": 5,
    "genres": [
      "金·凯瑞",
      "Max",
      "美国",
      "变相怪杰",
      "喜剧",
      "奇幻",
      "英语",
      "瑞典语"
    ],
    "type": "电影"
  },
  {
    "title": "绿皮书 / Green Book",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2531065411.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "中国大陆",
      "绿皮书",
      "剧情",
      "喜剧",
      "传记",
      "音乐",
      "英语",
      "意大利语",
      "俄语",
      "德语"
    ],
    "type": "电影"
  },
  {
    "title": "虎口脱险 / La grande vadrouille",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2399597512.jpg",
    "rating": 5,
    "genres": [
      "布尔维尔",
      "法国",
      "英国",
      "虎口脱险",
      "喜剧",
      "战争",
      "法语",
      "英语",
      "德语"
    ],
    "type": "电影"
  },
  {
    "title": "敦刻尔克 / Dunkirk",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2404817208.jpg",
    "rating": 5,
    "genres": [
      "英国",
      "法国",
      "美国",
      "荷兰",
      "敦刻尔克",
      "剧情",
      "历史",
      "战争",
      "英语",
      "法语",
      "德语"
    ],
    "type": "电影"
  },
  {
    "title": "罗马假日 / Roman Holiday",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2189265085.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "罗马假日",
      "喜剧",
      "剧情",
      "爱情",
      "英语",
      "意大利语",
      "德语"
    ],
    "type": "电影"
  },
  {
    "title": "侏罗纪公园2：失落的世界 / The Lost World: Jurassic Park",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1259571118.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动作",
      "冒险",
      "科幻",
      "惊悚",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "变形金刚2 / Transformers: Revenge of the Fallen",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2149534782.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动作",
      "科幻",
      "冒险",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "惊天魔盗团 / Now You See Me",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2151336415.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "法国",
      "剧情",
      "犯罪",
      "悬疑",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "惊天魔盗团2 / Now You See Me 2",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2355440566.jpg",
    "rating": 0,
    "genres": [
      "周杰伦",
      "美国",
      "",
      "朱浩伟",
      "剧情",
      "犯罪",
      "悬疑",
      "英语",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "金蝉脱壳 / Escape Plan",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2155236151.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "金蝉脱壳",
      "动作",
      "惊悚",
      "英语",
      "德语",
      "阿拉伯语"
    ],
    "type": "电影"
  },
  {
    "title": "变形金刚 / Transformers",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2184739474.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "变形金刚",
      "动作",
      "科幻",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "憨豆特工2 / Johnny English Reborn",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2209714613.jpg",
    "rating": 0,
    "genres": [
      "裴淳华",
      "伊川东吾",
      "美国",
      "法国",
      "英国",
      "喜剧",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "移动迷宫2 / Maze Runner: The Scorch Trials",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2276189752.jpg",
    "rating": 0,
    "genres": [
      "李起弘",
      "美国",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "通缉令 / Wanted",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p947402638.jpg",
    "rating": 0,
    "genres": [
      "科曼",
      "美国",
      "德国",
      "通缉令",
      "动作",
      "犯罪",
      "奇幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "变形金刚4：绝迹重生 / Transformers: Age of Extinction",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2187231762.jpg",
    "rating": 0,
    "genres": [
      "李冰冰",
      "美国",
      "中国大陆",
      "中国香港",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "古墓丽影2 / Lara Croft Tomb Raider: The Cradle of Life",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1678090020.jpg",
    "rating": 0,
    "genres": [
      "任达华",
      "尹子维",
      "美国",
      "德国",
      "日本",
      "英国",
      "中国香港",
      "动作",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "古墓丽影：源起之战 / Tomb Raider",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2512717509.jpg",
    "rating": 0,
    "genres": [
      "吴彦祖",
      "美国",
      "动作",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "古墓丽影 / Lara Croft: Tomb Raider",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p743262532.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "英国",
      "日本",
      "德国",
      "古墓丽影",
      "动作",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "敢死队 / The Expendables",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p547574189.jpg",
    "rating": 0,
    "genres": [
      "李连杰",
      "美国",
      "保加利亚",
      "西班牙",
      "德国",
      "敢死队",
      "动作",
      "冒险",
      "惊悚",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "敢死队2 / The Expendables 2",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1604065274.jpg",
    "rating": 0,
    "genres": [
      "李连杰",
      "美国",
      "德国",
      "保加利亚",
      "中国大陆",
      "动作",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "敢死队3 / The Expendables 3",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2196328516.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "法国",
      "动作",
      "惊悚",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "生死狙击 / Shooter",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p878948712.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "生死狙击",
      "剧情",
      "动作",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "谍影重重5 / Jason Bourne",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2379032162.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "中国大陆",
      "西班牙",
      "动作",
      "悬疑",
      "惊悚",
      "英语",
      "希腊语",
      "德语",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "谍影重重3 / The Bourne Ultimatum",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792223507.jpg",
    "rating": 0,
    "genres": [
      "琼·艾伦",
      "美国",
      "德国",
      "法国",
      "英国",
      "动作",
      "悬疑",
      "惊悚",
      "英语",
      "法语",
      "阿拉伯语",
      "俄语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "谍影重重 / The Bourne Identity",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1597183981.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "德国",
      "捷克",
      "谍影重重",
      "动作",
      "悬疑",
      "惊悚",
      "英语",
      "法语",
      "德语",
      "荷兰语",
      "意大利语"
    ],
    "type": "电影"
  },
  {
    "title": "谍影重重2 / The Bourne Supremacy",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p667644866.jpg",
    "rating": 0,
    "genres": [
      "琼·艾伦",
      "美国",
      "德国",
      "动作",
      "悬疑",
      "惊悚",
      "英语",
      "俄语",
      "德语",
      "意大利语"
    ],
    "type": "电影"
  },
  {
    "title": "谍影重重4 / The Bourne Legacy",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1706819167.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "日本",
      "动作",
      "悬疑",
      "惊悚",
      "英语",
      "俄语",
      "菲律宾语",
      "乌克兰语"
    ],
    "type": "电影"
  },
  {
    "title": "像素大战 / Pixels",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2262297012.jpg",
    "rating": 0,
    "genres": [
      "肖恩·宾",
      "美国",
      "中国大陆",
      "site",
      "",
      "像素大战",
      "喜剧",
      "动作",
      "科幻",
      "英语",
      "印地语",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "碟中谍6：全面瓦解 / Mission: Impossible - Fallout",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "中国大陆",
      "法国",
      "挪威",
      "英国",
      "动作",
      "惊悚",
      "冒险",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "碟中谍4 / Mission: Impossible - Ghost Protocol",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1382432968.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动作",
      "惊悚",
      "冒险",
      "英语",
      "俄语",
      "法语",
      "阿拉伯语",
      "瑞典语"
    ],
    "type": "电影"
  },
  {
    "title": "碟中谍2 / Mission: Impossible II",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2197697182.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "德国",
      "吴宇森",
      "动作",
      "惊悚",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "碟中谍 / Mission: Impossible",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1660124103.jpg",
    "rating": 0,
    "genres": [
      "让·雷诺",
      "美国",
      "碟中谍",
      "动作",
      "冒险",
      "惊悚",
      "英语",
      "捷克语",
      "乌克兰语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "碟中谍3 / Mission: Impossible III",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1660207008.jpg",
    "rating": 0,
    "genres": [
      "李美琪",
      "美国",
      "德国",
      "中国大陆",
      "意大利",
      "动作",
      "冒险",
      "惊悚",
      "英语",
      "意大利语",
      "粤语",
      "德语",
      "捷克语"
    ],
    "type": "电影"
  },
  {
    "title": "画皮 / 畫皮",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p462058001.jpg",
    "rating": 0,
    "genres": [
      "周迅",
      "陈坤",
      "甄子丹",
      "孙俪",
      "戚玉武",
      "晋松",
      "梁家豪",
      "柳岩",
      "肖聪",
      "中国大陆",
      "中国香港",
      "新加坡",
      "陈嘉上",
      "钱永强",
      "高林豹",
      "画皮",
      "剧情",
      "爱情",
      "奇幻",
      "惊悚"
    ],
    "type": "电影"
  },
  {
    "title": "憨豆特工 / Johnny English",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521404612.jpg",
    "rating": 0,
    "genres": [
      "本·米勒",
      "妮娜·扬",
      "英国",
      "法国",
      "美国",
      "憨豆特工",
      "动作",
      "冒险",
      "喜剧",
      "英语",
      "法语",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "了不起的盖茨比 / The Great Gatsby",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2091221628.jpg",
    "rating": 0,
    "genres": [
      "澳大利亚",
      "美国",
      "",
      "剧情",
      "爱情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "移动迷宫 / The Maze Runner",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2201485029.jpg",
    "rating": 0,
    "genres": [
      "李起弘",
      "美国",
      "英国",
      "移动迷宫",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "加勒比海盗3：世界的尽头 / Pirates of the Caribbean: At World's End",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2407916208.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动作",
      "冒险",
      "奇幻",
      "英语",
      "荷兰语"
    ],
    "type": "电影"
  },
  {
    "title": "勇敢者的游戏 / Jumanji",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2493837209.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动作",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "黑衣人3 / Men in Black III",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1731774258.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动作",
      "喜剧",
      "科幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "黑衣人 / Men in Black",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p453512941.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "黑衣人",
      "动作",
      "喜剧",
      "科幻",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "黑衣人2 / Men in Black II",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p453515660.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动作",
      "喜剧",
      "科幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "超人归来 / Superman Returns",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1185280647.jpg",
    "rating": 0,
    "genres": [
      "卡尔·潘",
      "姜广涛",
      "美国",
      "澳大利亚",
      "超人归来",
      "动作",
      "科幻",
      "冒险",
      "英语",
      "德语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "宝贝计划 / 寶貝計劃",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p946770581.jpg",
    "rating": 0,
    "genres": [
      "成龙",
      "古天乐",
      "蔡志强",
      "许冠文",
      "蔡卓妍",
      "高圆圆",
      "陈宝国",
      "元彪",
      "余安安",
      "吴彦祖",
      "中国香港",
      "中国大陆",
      "陈木胜",
      "宝贝计划",
      "动作",
      "喜剧",
      "剧情",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "十二生肖",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1826580562.jpg",
    "rating": 0,
    "genres": [
      "成龙",
      "权相佑",
      "廖凡",
      "姚星彤",
      "张蓝心",
      "白露娜",
      "刘承俊",
      "吴彦祖",
      "舒淇",
      "李宗盛",
      "中国大陆",
      "中国香港",
      "成龙",
      "喜剧",
      "动作",
      "冒险",
      "英语",
      "粤语",
      "法语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "家有喜事2009",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2011742281.jpg",
    "rating": 0,
    "genres": [
      "古天乐",
      "吴君如",
      "黄百鸣",
      "郑中基",
      "姚晨",
      "郭涛",
      "沈丽君",
      "潘杰宁",
      "陈子聪",
      "郑文辉",
      "中国香港",
      "谷德昭",
      "喜剧",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "爱乐之城 / La La Land",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2929224846.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "爱乐之城",
      "剧情",
      "爱情",
      "歌舞",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "超体 / Lucy",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2201909284.jpg",
    "rating": 0,
    "genres": [
      "崔岷植",
      "法国",
      "德国",
      "中国台湾",
      "加拿大",
      "美国",
      "英国",
      "超体",
      "动作",
      "科幻",
      "英语",
      "法语",
      "意大利语",
      "德语",
      "西班牙语",
      "韩语"
    ],
    "type": "电影"
  },
  {
    "title": "西游降魔篇",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1856385532.jpg",
    "rating": 0,
    "genres": [
      "文章",
      "舒淇",
      "黄渤",
      "罗志祥",
      "李尚正",
      "陈炳强",
      "赵志凌",
      "周秀娜",
      "杨迪",
      "释彦能",
      "中国大陆",
      "中国香港",
      "周星驰",
      "郭子健",
      "喜剧",
      "奇幻",
      "冒险",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "碟中谍5：神秘国度 / Mission: Impossible - Rogue Nation",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2263582212.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "中国大陆",
      "奥地利",
      "英国",
      "摩洛哥",
      "动作",
      "惊悚",
      "冒险",
      "英语",
      "瑞典语",
      "德语"
    ],
    "type": "电影"
  },
  {
    "title": "超凡蜘蛛侠 / The Amazing Spider-Man",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1619928534.jpg",
    "rating": 0,
    "genres": [
      "马丁·辛",
      "美国",
      "动作",
      "科幻",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "智取威虎山",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2215164906.jpg",
    "rating": 0,
    "genres": [
      "张涵予",
      "梁家辉",
      "林更新",
      "余男",
      "佟丽娅",
      "韩庚",
      "陈晓",
      "谢苗",
      "吴旭东",
      "杜奕衡",
      "中国大陆",
      "中国香港",
      "徐克",
      "剧情",
      "动作",
      "战争",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "重返20岁",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2216353367.jpg",
    "rating": 0,
    "genres": [
      "杨子姗",
      "归亚蕾",
      "陈柏霖",
      "鹿晗",
      "王德顺",
      "赵立新",
      "李宜娟",
      "尹航",
      "夏星",
      "林丛",
      "中国大陆",
      "韩国",
      "陈正道",
      "喜剧",
      "爱情",
      "奇幻"
    ],
    "type": "电影"
  },
  {
    "title": "神秘巨星 / Secret Superstar",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2508925590.jpg",
    "rating": 0,
    "genres": [
      "梅·维贾",
      "印度",
      "神秘巨星",
      "剧情",
      "音乐",
      "印地语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "分手大师",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2188112867.jpg",
    "rating": 0,
    "genres": [
      "邓超",
      "杨幂",
      "古力娜扎",
      "栾元晖",
      "秦越",
      "许可嘉",
      "梁超",
      "赵曼竹",
      "孙俪",
      "柳岩",
      "中国大陆",
      "俞白眉",
      "邓超",
      "喜剧",
      "爱情",
      "英语",
      "日语",
      "上海话"
    ],
    "type": "电影"
  },
  {
    "title": "蜘蛛侠3 / Spider-Man 3",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1344979481.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "帕丁顿熊2 / Paddington 2",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2506466229.jpg",
    "rating": 0,
    "genres": [
      "本·卫肖",
      "英国",
      "法国",
      "美国",
      "home",
      "保罗·金",
      "喜剧",
      "动画",
      "家庭",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "头号玩家 / Ready Player One",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2516578307.jpg",
    "rating": 0,
    "genres": [
      "森崎温",
      "赵家正",
      "美国",
      "头号玩家",
      "动作",
      "科幻",
      "冒险",
      "英语",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "查理和巧克力工厂 / Charlie and the Chocolate Factory",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p453925617.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "英国",
      "澳大利亚",
      "喜剧",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "三块广告牌 / Three Billboards Outside Ebbing, Missouri",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2502943384.jpg",
    "rating": 0,
    "genres": [
      "英国",
      "美国",
      "剧情",
      "犯罪",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "猩球崛起2：黎明之战 / Dawn of the Planet of the Apes",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2182621899.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "剧情",
      "动作",
      "科幻",
      "英语",
      "美国手语"
    ],
    "type": "电影"
  },
  {
    "title": "猩球崛起3：终极之战 / War for the Planet of the Apes",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2494096554.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "剧情",
      "动作",
      "科幻",
      "英语",
      "美国手语"
    ],
    "type": "电影"
  },
  {
    "title": "憨豆的黄金周 / Mr. Bean's Holiday",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2191830473.jpg",
    "rating": 0,
    "genres": [
      "英国",
      "法国",
      "德国",
      "喜剧",
      "英语",
      "法语",
      "西班牙语",
      "俄语"
    ],
    "type": "电影"
  },
  {
    "title": "蜘蛛侠 / Spider-Man",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p457050361.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "蜘蛛侠",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "她 / Her",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2166850749.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "她",
      "剧情",
      "爱情",
      "科幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "煎饼侠",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2253038483.jpg",
    "rating": 0,
    "genres": [
      "大鹏",
      "袁姗姗",
      "柳岩",
      "吴君如",
      "曾志伟",
      "岳云鹏",
      "衣云鹤",
      "梁超",
      "潘斌龙",
      "崔志佳",
      "中国大陆",
      "大鹏",
      "喜剧",
      "英语",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "港囧",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2266145079.jpg",
    "rating": 0,
    "genres": [
      "徐峥",
      "包贝尔",
      "杜鹃",
      "葛民辉",
      "李灿森",
      "潘虹",
      "赵有亮",
      "朱媛媛",
      "王迅",
      "冯勉恒",
      "中国大陆",
      "徐峥",
      "阮惟新",
      "喜剧",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "驯龙骑士 / Justin y la Espada del Valor",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2174081190.jpg",
    "rating": 0,
    "genres": [
      "西班牙",
      "驯龙骑士",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "摔跤吧！爸爸 / Dangal",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2401676338.jpg",
    "rating": 0,
    "genres": [
      "印度",
      "剧情",
      "传记",
      "运动",
      "家庭",
      "印地语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "心花路放",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2221061003.jpg",
    "rating": 0,
    "genres": [
      "黄渤",
      "徐峥",
      "袁泉",
      "周冬雨",
      "陶慧",
      "岳小军",
      "沈腾",
      "张俪",
      "马苏",
      "刘美含",
      "中国大陆",
      "宁浩",
      "喜剧",
      "爱情",
      "粤语",
      "云南方言"
    ],
    "type": "电影"
  },
  {
    "title": "蓝精灵2 / The Smurfs 2",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2089514860.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "喜剧",
      "动画",
      "奇幻",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "超人总动员2 / Incredibles 2",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2538297752.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "喜剧",
      "动作",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "鬼马小精灵 / Casper",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2649312862.jpg",
    "rating": 0,
    "genres": [
      "本·斯坦",
      "美国",
      "喜剧",
      "奇幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "乐高大电影2 / The Lego Movie 2: The Second Part",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2549353234.jpg",
    "rating": 0,
    "genres": [
      "查理·戴",
      "美国",
      "澳大利亚",
      "挪威",
      "丹麦",
      "喜剧",
      "动画",
      "冒险",
      "歌舞",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "乐高大电影 / The Lego Movie",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2158676090.jpg",
    "rating": 0,
    "genres": [
      "查理·戴",
      "美国",
      "澳大利亚",
      "丹麦",
      "喜剧",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "博物馆奇妙夜 / Night at the Museum",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2155462073.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "英国",
      "动作",
      "冒险",
      "喜剧",
      "家庭",
      "奇幻",
      "英语",
      "意大利语",
      "希伯来语",
      "匈奴语",
      "阿拉伯语"
    ],
    "type": "电影"
  },
  {
    "title": "飞机总动员 / Planes",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1918782319.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "",
      "喜剧",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "极速蜗牛 / Turbo",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2121756712.jpg",
    "rating": 0,
    "genres": [
      "郑肯",
      "美国",
      "极速蜗牛",
      "喜剧",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "怪兽屋 / Monster House",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p621350618.jpg",
    "rating": 0,
    "genres": [
      "杰森·李",
      "美国",
      "怪兽屋",
      "动画",
      "悬疑",
      "奇幻",
      "惊悚",
      "恐怖",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "里约大冒险2 / Rio 2",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2177142678.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "喜剧",
      "动画",
      "冒险",
      "英语",
      "葡萄牙语"
    ],
    "type": "电影"
  },
  {
    "title": "星际宝贝 / Lilo & Stitch",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510798502.jpg",
    "rating": 0,
    "genres": [
      "李截",
      "美国",
      "星际宝贝",
      "喜剧",
      "科幻",
      "动画",
      "冒险",
      "家庭",
      "英语",
      "夏威夷语"
    ],
    "type": "电影"
  },
  {
    "title": "蜜蜂总动员 / Bee Movie",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p866034413.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动画",
      "冒险",
      "喜剧",
      "家庭",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "模仿游戏 / The Imitation Game",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2922986728.jpg",
    "rating": 0,
    "genres": [
      "英国",
      "美国",
      "模仿游戏",
      "剧情",
      "传记",
      "战争",
      "同性",
      "英语",
      "德语"
    ],
    "type": "电影"
  },
  {
    "title": "泰山 / Tarzan",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1833041570.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "泰山",
      "动画",
      "冒险",
      "剧情",
      "家庭",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "怪物史瑞克4 / Shrek Forever After",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p595196020.jpg",
    "rating": 0,
    "genres": [
      "简·林奇",
      "美国",
      "喜剧",
      "动作",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "怪物史瑞克3 / Shrek the Third",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2221540858.jpg",
    "rating": 0,
    "genres": [
      "拉里·金",
      "美国",
      "许诚毅",
      "动画",
      "冒险",
      "喜剧",
      "家庭",
      "奇幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "怪物史瑞克2 / Shrek 2",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1910896984.jpg",
    "rating": 0,
    "genres": [
      "藤原纪香",
      "美国",
      "动画",
      "冒险",
      "喜剧",
      "家庭",
      "奇幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "布达佩斯大饭店 / The Grand Budapest Hotel",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2183539003.jpg",
    "rating": 0,
    "genres": [
      "裘德·洛",
      "美国",
      "德国",
      "英国",
      "剧情",
      "喜剧",
      "冒险",
      "英语",
      "法语",
      "德语"
    ],
    "type": "电影"
  },
  {
    "title": "寻梦环游记 / Coco",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2505426431.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "喜剧",
      "动画",
      "奇幻",
      "音乐",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "人再囧途之泰囧",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1793720172.jpg",
    "rating": 0,
    "genres": [
      "徐峥",
      "王宝强",
      "黄渤",
      "陶虹",
      "谢楠",
      "范冰冰",
      "Rose",
      "尹思勰",
      "陈祉希",
      "中国大陆",
      "徐峥",
      "喜剧",
      "英语",
      "泰语"
    ],
    "type": "电影"
  },
  {
    "title": "我的个神啊 / PK",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2243803873.jpg",
    "rating": 0,
    "genres": [
      "印度",
      "喜剧",
      "奇幻",
      "印地语",
      "英语",
      "乌尔都语"
    ],
    "type": "电影"
  },
  {
    "title": "闪电狗 / Bolt",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p775039123.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "闪电狗",
      "剧情",
      "喜剧",
      "动画",
      "冒险",
      "家庭",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "美人鱼",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2316177058.jpg",
    "rating": 0,
    "genres": [
      "邓超",
      "罗志祥",
      "张雨绮",
      "林允",
      "徐克",
      "李尚正",
      "卢正雨",
      "白客",
      "孔连顺",
      "田启文",
      "中国大陆",
      "中国香港",
      "周星驰",
      "喜剧",
      "爱情",
      "奇幻",
      "英语",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "功夫熊猫感恩节特辑 / Kung Fu Panda Holiday",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2239569164.jpg",
    "rating": 0,
    "genres": [
      "刘玉玲",
      "吴汉章",
      "丹·福勒",
      "成龙",
      "美国",
      "喜剧",
      "动作",
      "动画",
      "短片",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "毒液：致命守护者 / Venom",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2537158013.jpg",
    "rating": 0,
    "genres": [
      "佩吉·陆",
      "美国",
      "中国大陆",
      "site",
      "",
      "动作",
      "科幻",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "蚁人2：黄蜂女现身 / Ant-Man and the Wasp",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2529389608.jpg",
    "rating": 0,
    "genres": [
      "T.I.",
      "美国",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "复仇者联盟3：无限战争 / Avengers: Infinity War",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2516481762.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "乔·罗素",
      "动作",
      "科幻",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "黑豹 / Black Panther",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2512123434.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "南非",
      "黑豹",
      "动作",
      "科幻",
      "冒险",
      "英语",
      "科萨语",
      "韩语"
    ],
    "type": "电影"
  },
  {
    "title": "蜘蛛侠：英雄归来 / Spider-Man: Homecoming",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2497756471.jpg",
    "rating": 0,
    "genres": [
      "赞达亚",
      "美国",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "雷神3：诸神黄昏 / Thor: Ragnarok",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2493777430.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动作",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "银河护卫队2 / Guardians of the Galaxy Vol. 2",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2440935591.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "奇异博士 / Doctor Strange",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2368783674.jpg",
    "rating": 0,
    "genres": [
      "王汉斌",
      "美国",
      "奇异博士",
      "动作",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "美国队长3 / Captain America: Civil War",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2324472359.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "乔·罗素",
      "动作",
      "科幻",
      "英语",
      "德语",
      "科萨语",
      "俄语"
    ],
    "type": "电影"
  },
  {
    "title": "复仇者联盟2：奥创纪元 / Avengers: Age of Ultron",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2229594647.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动作",
      "科幻",
      "奇幻",
      "冒险",
      "英语",
      "韩语"
    ],
    "type": "电影"
  },
  {
    "title": "美国队长2 / Captain America: The Winter Soldier",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2169912867.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "乔·罗素",
      "动作",
      "科幻",
      "惊悚",
      "冒险",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "钢铁侠3 / Iron Man 3",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1955027201.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "中国大陆",
      "动作",
      "科幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "雷神2：黑暗世界 / Thor: The Dark World",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2109235216.jpg",
    "rating": 0,
    "genres": [
      "浅野忠信",
      "美国",
      "thor",
      "动作",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "复仇者联盟 / The Avengers",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1469137689.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动作",
      "科幻",
      "奇幻",
      "冒险",
      "英语",
      "俄语"
    ],
    "type": "电影"
  },
  {
    "title": "美国队长 / Captain America: The First Avenger",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1182659238.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "美国队长",
      "动作",
      "科幻",
      "冒险",
      "英语",
      "挪威语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "雷神 / Thor",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2159068249.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "雷神",
      "动作",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "钢铁侠2 / Iron Man 2",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1441141314.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动作",
      "冒险",
      "科幻",
      "英语",
      "法语",
      "俄语"
    ],
    "type": "电影"
  },
  {
    "title": "无敌浩克 / The Incredible Hulk",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p916263375.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "无敌浩克",
      "动作",
      "科幻",
      "惊悚",
      "英语",
      "葡萄牙语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "钢铁侠 / Iron Man",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2196695849.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "钢铁侠",
      "动作",
      "冒险",
      "科幻",
      "惊悚",
      "英语",
      "波斯语",
      "乌尔都语",
      "阿拉伯语"
    ],
    "type": "电影"
  },
  {
    "title": "蚁人 / Ant-Man",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2242302551.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "蚁人",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "侏罗纪世界 / Jurassic World",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2246217861.jpg",
    "rating": 0,
    "genres": [
      "奥玛·希",
      "黄荣亮",
      "美国",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "帕丁顿熊 / Paddington",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2231740424.jpg",
    "rating": 0,
    "genres": [
      "本·卫肖",
      "英国",
      "法国",
      "保罗·金",
      "帕丁顿熊",
      "喜剧",
      "动画",
      "家庭",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "猩球崛起 / Rise of the Planet of the Apes",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1281402537.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "猩球崛起",
      "剧情",
      "动作",
      "科幻",
      "英语",
      "美国手语"
    ],
    "type": "电影"
  },
  {
    "title": "怪物史瑞克 / Shrek",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1910896706.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动画",
      "冒险",
      "喜剧",
      "家庭",
      "奇幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "火星救援 / The Martian",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2264592493.jpg",
    "rating": 0,
    "genres": [
      "肖恩·宾",
      "英国",
      "美国",
      "匈牙利",
      "约旦",
      "火星救援",
      "剧情",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "天降美食 / Cloudy with a Chance of Meatballs",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p501492695.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "天降美食",
      "喜剧",
      "动画",
      "奇幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "捉妖记",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2257944916.jpg",
    "rating": 0,
    "genres": [
      "白百何",
      "井柏然",
      "姜武",
      "金燕玲",
      "钟汉良",
      "曾志伟",
      "吴君如",
      "汤唯",
      "姚晨",
      "闫妮",
      "中国大陆",
      "中国香港",
      "许诚毅",
      "喜剧",
      "奇幻",
      "古装"
    ],
    "type": "电影"
  },
  {
    "title": "穿靴子的猫：萌猫三剑客 / Puss in Boots: The Three Diablos",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2191713625.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "许诚毅",
      "动画",
      "短片",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "海底总动员2：多莉去哪儿 / Finding Dory",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2324329096.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "喜剧",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "精灵旅社 / Hotel Transylvania",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2155072056.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "精灵旅社",
      "喜剧",
      "动画",
      "奇幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "赛车总动员2 / Cars 2",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p960984759.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "喜剧",
      "动画",
      "冒险",
      "英语",
      "日语",
      "意大利语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "超人总动员 / The Incredibles",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2167017148.jpg",
    "rating": 0,
    "genres": [
      "杰森·李",
      "姜文",
      "陈佩斯",
      "徐熙娣",
      "徐帆",
      "美国",
      "喜剧",
      "动作",
      "动画",
      "冒险",
      "英语",
      "西班牙语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "银河护卫队 / Guardians of the Galaxy",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2183582386.jpg",
    "rating": 0,
    "genres": [
      "李·佩斯",
      "美国",
      "动作",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "精灵旅社2 / Hotel Transylvania 2",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2276842218.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "加拿大",
      "喜剧",
      "动画",
      "奇幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "马达加斯加2：逃往非洲 / Madagascar: Escape 2 Africa",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p456772973.jpg",
    "rating": 0,
    "genres": [
      "玉木宏",
      "何炅",
      "美国",
      "动画",
      "动作",
      "冒险",
      "喜剧",
      "家庭",
      "英语",
      "意大利语"
    ],
    "type": "电影"
  },
  {
    "title": "马达加斯加 / Madagascar",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1971268235.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "动画",
      "冒险",
      "喜剧",
      "家庭",
      "英语",
      "葡萄牙语",
      "西班牙语",
      "德语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "马达加斯加3 / Madagascar 3: Europe's Most Wanted",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1503869385.jpg",
    "rating": 0,
    "genres": [
      "玉木宏",
      "美国",
      "喜剧",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "穿靴子的猫 / Puss in Boots",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p877184561.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "喜剧",
      "动画",
      "奇幻",
      "冒险",
      "家庭",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "小羊肖恩 / Shaun the Sheep Movie",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2249261202.jpg",
    "rating": 0,
    "genres": [
      "英国",
      "法国",
      "小羊肖恩",
      "喜剧",
      "动画",
      "冒险",
      "无对白"
    ],
    "type": "电影"
  },
  {
    "title": "功夫熊猫2 / Kung Fu Panda 2",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p877183898.jpg",
    "rating": 0,
    "genres": [
      "成龙",
      "刘玉玲",
      "吴汉章",
      "杨紫琼",
      "美国",
      "吕寅荣",
      "喜剧",
      "动作",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "功夫熊猫3 / Kung Fu Panda 3",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2265177361.jpg",
    "rating": 0,
    "genres": [
      "成龙",
      "刘玉玲",
      "美国",
      "中国大陆",
      "吕寅荣",
      "喜剧",
      "动作",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "超级大坏蛋 / Megamind",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p639914227.jpg",
    "rating": 0,
    "genres": [
      "蒂娜·菲",
      "美国",
      "",
      "喜剧",
      "动作",
      "动画",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "美食总动员 / Ratatouille",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p465604496.jpg",
    "rating": 0,
    "genres": [
      "彼得·孙",
      "美国",
      "喜剧",
      "动画",
      "奇幻",
      "英语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "玩具总动员 / Toy Story",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2565956404.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "喜剧",
      "动画",
      "家庭",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "小黄人大眼萌 / Minions",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2265761240.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "喜剧",
      "动画",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "马达加斯加的企鹅 / Penguins of Madagascar",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2208592166.jpg",
    "rating": 0,
    "genres": [
      "郑肯",
      "美国",
      "喜剧",
      "动画",
      "冒险",
      "英语",
      "意大利语"
    ],
    "type": "电影"
  },
  {
    "title": "功夫熊猫 / Kung Fu Panda",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1597238857.jpg",
    "rating": 0,
    "genres": [
      "成龙",
      "刘玉玲",
      "吴汉章",
      "美国",
      "功夫熊猫",
      "喜剧",
      "动作",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "头脑特工队 / Inside Out",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2874927470.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "",
      "喜剧",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "神偷奶爸4 / Despicable Me 4",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2907916556.jpg",
    "rating": 0,
    "genres": [
      "乔伊·金",
      "美国",
      "喜剧",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "神偷奶爸3 / Despicable Me 3",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2469070974.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "喜剧",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "冰雪奇缘 / Frozen",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2151245053.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "",
      "冰雪奇缘",
      "喜剧",
      "动画",
      "奇幻",
      "歌舞",
      "英语",
      "冰岛语"
    ],
    "type": "电影"
  },
  {
    "title": "神偷奶爸2 / Despicable Me 2",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2164225595.jpg",
    "rating": 0,
    "genres": [
      "郑肯",
      "美国",
      "法国",
      "日本",
      "喜剧",
      "动画",
      "冒险",
      "英语",
      "乌克兰语"
    ],
    "type": "电影"
  },
  {
    "title": "人在囧途",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p500548437.jpg",
    "rating": 0,
    "genres": [
      "徐峥",
      "王宝强",
      "李曼",
      "李小璐",
      "左小青",
      "张歆艺",
      "黄小蕾",
      "马健",
      "邱林",
      "张超",
      "中国大陆",
      "叶伟民",
      "喜剧",
      "武汉话"
    ],
    "type": "电影"
  },
  {
    "title": "摩登时代 / Modern Times",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2263408369.jpg",
    "rating": 0,
    "genres": [
      "汉克·曼",
      "美国",
      "摩登时代",
      "剧情",
      "喜剧",
      "爱情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "我的野蛮女友 / 엽기적인 그녀",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p489336497.jpg",
    "rating": 0,
    "genres": [
      "车太贤",
      "全智贤",
      "金仁文",
      "宋钰宿",
      "韩振熙",
      "玄淑熙",
      "金一宇",
      "徐东元",
      "金敏载",
      "李在浩",
      "韩国",
      "郭在容",
      "剧情",
      "喜剧",
      "爱情",
      "韩语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "蝙蝠侠：侠影之谜 / Batman Begins",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1563566300.jpg",
    "rating": 0,
    "genres": [
      "渡边谦",
      "美国",
      "英国",
      "剧情",
      "动作",
      "科幻",
      "犯罪",
      "惊悚",
      "英语",
      "乌尔都语"
    ],
    "type": "电影"
  },
  {
    "title": "海底总动员 / Finding Nemo",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1755893801.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "澳大利亚",
      "喜剧",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "里约大冒险 / Rio",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2170811687.jpg",
    "rating": 0,
    "genres": [
      "朴宝英",
      "宋仲基",
      "美国",
      "喜剧",
      "动画",
      "冒险",
      "英语",
      "葡萄牙语"
    ],
    "type": "电影"
  },
  {
    "title": "疯狂动物城 / Zootopia",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2924128964.jpg",
    "rating": 0,
    "genres": [
      "唐·雷克",
      "汤米·钟",
      "美国",
      "喜剧",
      "动画",
      "冒险",
      "英语",
      "挪威语"
    ],
    "type": "电影"
  },
  {
    "title": "九品芝麻官",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p648370300.jpg",
    "rating": 0,
    "genres": [
      "周星驰",
      "吴孟达",
      "张敏",
      "徐锦江",
      "钟丽缇",
      "蔡少芬",
      "吴启华",
      "邹兆龙",
      "梁荣忠",
      "黄一飞",
      "中国香港",
      "王晶",
      "剧情",
      "喜剧",
      "古装",
      "[佚名]",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "超能陆战队 / Big Hero 6",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2224568669.jpg",
    "rating": 0,
    "genres": [
      "郑智麟",
      "美国",
      "唐·霍尔",
      "喜剧",
      "动作",
      "科幻",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "你看起来好像很好吃 / おまえうまそうだな",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p709670262.jpg",
    "rating": 0,
    "genres": [
      "山口胜平",
      "原田知世",
      "川岛得爱",
      "桐本拓哉",
      "别所哲也",
      "矢田稔",
      "日本",
      "藤森雅也",
      "剧情",
      "动画",
      "儿童",
      "日语",
      "原田知世",
      "山口勝平",
      "别所哲也"
    ],
    "type": "电影"
  },
  {
    "title": "星际穿越 / Interstellar",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2614988097.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "英国",
      "加拿大",
      "星际穿越",
      "剧情",
      "科幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "崖上的波妞 / 崖の上のポニョ",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2627847859.jpg",
    "rating": 0,
    "genres": [
      "土井洋辉",
      "山口智子",
      "长岛一茂",
      "天海祐希",
      "所乔治",
      "柊瑠美",
      "矢野显子",
      "吉行和子",
      "日本",
      "",
      "宫崎骏",
      "动画",
      "奇幻",
      "冒险",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "倩女幽魂2：人间道 / 倩女幽魂II 人間道",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2518212196.jpg",
    "rating": 0,
    "genres": [
      "张国荣",
      "王祖贤",
      "张学友",
      "午马",
      "李子雄",
      "李嘉欣",
      "刘洵",
      "刘兆铭",
      "谷峰",
      "伍国健",
      "中国香港",
      "程小东",
      "爱情",
      "奇幻",
      "武侠",
      "古装",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "国王的演讲 / The King's Speech",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p768879237.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "英国",
      "剧情",
      "传记",
      "历史",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "英雄本色",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504997087.jpg",
    "rating": 0,
    "genres": [
      "周润发",
      "狄龙",
      "张国荣",
      "朱宝意",
      "李子雄",
      "田丰",
      "吴宇森",
      "曾江",
      "成奎安",
      "徐克",
      "中国香港",
      "吴宇森",
      "剧情",
      "动作",
      "犯罪",
      "粤语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "那些年，我们一起追的女孩 / 那些年，我們一起追的女孩",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1348910586.jpg",
    "rating": 0,
    "genres": [
      "柯震东",
      "陈妍希",
      "敖犬",
      "郝劭文",
      "蔡昌宪",
      "侯彦西",
      "弯弯",
      "邱彦翔",
      "王彩桦",
      "柯义浤",
      "中国台湾",
      "九把刀",
      "剧情",
      "喜剧",
      "爱情"
    ],
    "type": "电影"
  },
  {
    "title": "玩具总动员3 / Toy Story 3",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1283675359.jpg",
    "rating": 0,
    "genres": [
      "高以翔",
      "唐泽寿明",
      "美国",
      "喜剧",
      "动画",
      "奇幻",
      "冒险",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "疯狂原始人 / The Croods",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1867084027.jpg",
    "rating": 0,
    "genres": [
      "梁家辉",
      "范晓萱",
      "美国",
      "喜剧",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "怪兽电力公司 / Monsters, Inc.",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2513247938.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "儿童",
      "喜剧",
      "动画",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "冰川时代 / Ice Age",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1910895719.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "冰川时代",
      "喜剧",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "源代码 / Source Code",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p988260245.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "加拿大",
      "源代码",
      "科幻",
      "悬疑",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "蝙蝠侠：黑暗骑士 / The Dark Knight",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p462657443.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "英国",
      "剧情",
      "动作",
      "科幻",
      "犯罪",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "致命魔术 / The Prestige",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p480383375.jpg",
    "rating": 0,
    "genres": [
      "英国",
      "美国",
      "致命魔术",
      "剧情",
      "悬疑",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "禁闭岛 / Shutter Island",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p450262388.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "禁闭岛",
      "剧情",
      "悬疑",
      "惊悚",
      "英语",
      "德语"
    ],
    "type": "电影"
  },
  {
    "title": "唐伯虎点秋香 / 唐伯虎點秋香",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2357915564.jpg",
    "rating": 0,
    "genres": [
      "周星驰",
      "巩俐",
      "陈百祥",
      "郑佩佩",
      "朱咪咪",
      "梁家仁",
      "苑琼丹",
      "梁荣忠",
      "黄一山",
      "黄霑",
      "中国香港",
      "李力持",
      "喜剧",
      "爱情",
      "古装",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "驯龙高手 / How to Train Your Dragon",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2210954024.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "",
      "驯龙高手",
      "动画",
      "奇幻",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "神偷奶爸 / Despicable Me",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p792776858.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "法国",
      "神偷奶爸",
      "喜剧",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "阿凡达 / Avatar",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2180085848.jpg",
    "rating": 0,
    "genres": [
      "希·庞德",
      "美国",
      "阿凡达",
      "动作",
      "科幻",
      "冒险",
      "英语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "龙猫 / となりのトトロ",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2540924496.jpg",
    "rating": 0,
    "genres": [
      "日高范子",
      "坂本千夏",
      "糸井重里",
      "岛本须美",
      "北林谷荣",
      "高木均",
      "雨笠利幸",
      "丸山裕子",
      "广濑正志",
      "日本",
      "宫崎骏",
      "龙猫",
      "动画",
      "奇幻",
      "冒险",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "倩女幽魂",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2918554634.jpg",
    "rating": 0,
    "genres": [
      "张国荣",
      "王祖贤",
      "午马",
      "刘兆铭",
      "林威",
      "薛芷伦",
      "王晶",
      "胡大为",
      "黄虾",
      "史美仪",
      "中国香港",
      "程小东",
      "爱情",
      "奇幻",
      "武侠",
      "古装",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "飞屋环游记 / Up",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2553594918.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "剧情",
      "喜剧",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "怦然心动 / Flipped",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p501177648.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "怦然心动",
      "剧情",
      "喜剧",
      "爱情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "蝴蝶效应 / The Butterfly Effect",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2209066019.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "加拿大",
      "蝴蝶效应",
      "剧情",
      "悬疑",
      "科幻",
      "惊悚",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "机器人总动员 / WALL·E",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1461851991.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "科幻",
      "动画",
      "冒险",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "大话西游之月光宝盒 / 西遊記第壹佰零壹回之月光寶盒",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561721372.jpg",
    "rating": 0,
    "genres": [
      "周星驰",
      "吴孟达",
      "罗家英",
      "蓝洁瑛",
      "莫文蔚",
      "江约诚",
      "陆树铭",
      "刘镇伟",
      "朱茵",
      "李健仁",
      "中国香港",
      "中国大陆",
      "刘镇伟",
      "喜剧",
      "爱情",
      "奇幻",
      "古装",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "阿飞正传 / 阿飛正傳",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2525770523.jpg",
    "rating": 0,
    "genres": [
      "张国荣",
      "张曼玉",
      "刘德华",
      "刘嘉玲",
      "潘迪华",
      "张学友",
      "梁朝伟",
      "中国香港",
      "王家卫",
      "阿飞正传",
      "犯罪",
      "剧情",
      "爱情",
      "粤语",
      "英语",
      "菲律宾语",
      "沪语"
    ],
    "type": "电影"
  },
  {
    "title": "盗梦空间 / Inception",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p513344864.jpg",
    "rating": 0,
    "genres": [
      "渡边谦",
      "美国",
      "英国",
      "盗梦空间",
      "剧情",
      "科幻",
      "悬疑",
      "冒险",
      "英语",
      "日语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "拯救大兵瑞恩 / Saving Private Ryan",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1014542496.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "剧情",
      "战争",
      "英语",
      "法语",
      "德语",
      "捷克语"
    ],
    "type": "电影"
  },
  {
    "title": "忠犬八公的故事 / Hachi: A Dog's Tale",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2587099240.jpg",
    "rating": 0,
    "genres": [
      "琼·艾伦",
      "田川洋行",
      "高岛彩",
      "美国",
      "英国",
      "剧情",
      "英语",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "千与千寻 / 千と千尋の神隠し",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2557573348.jpg",
    "rating": 0,
    "genres": [
      "柊瑠美",
      "入野自由",
      "夏木真理",
      "菅原文太",
      "中村彰男",
      "玉井夕海",
      "内藤刚志",
      "泽口靖子",
      "日本",
      "宫崎骏",
      "千与千寻",
      "剧情",
      "动画",
      "奇幻",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "三傻大闹宝莱坞 / 3 Idiots",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p579729551.jpg",
    "rating": 0,
    "genres": [
      "马达范",
      "印度",
      "剧情",
      "喜剧",
      "爱情",
      "歌舞",
      "印地语",
      "乌尔都语",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "低俗小说 / Pulp Fiction",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910902213.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "低俗小说",
      "剧情",
      "喜剧",
      "犯罪",
      "英语",
      "西班牙语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "泰坦尼克号 / Titanic",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p457760035.jpg",
    "rating": 5,
    "genres": [
      "美国",
      "剧情",
      "爱情",
      "灾难",
      "英语",
      "意大利语",
      "德语",
      "俄语"
    ],
    "type": "电影"
  },
  {
    "title": "闻香识女人 / Scent of a Woman",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550757929.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "剧情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "东邪西毒 / 東邪西毒",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1982176012.jpg",
    "rating": 0,
    "genres": [
      "张国荣",
      "林青霞",
      "梁朝伟",
      "张学友",
      "张曼玉",
      "刘嘉玲",
      "梁家辉",
      "杨采妮",
      "邹兆龙",
      "王祖贤",
      "中国香港",
      "中国台湾",
      "王家卫",
      "东邪西毒",
      "剧情",
      "动作",
      "爱情",
      "武侠",
      "古装",
      "粤语"
    ],
    "type": "电影"
  },
  {
    "title": "剪刀手爱德华 / Edward Scissorhands",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480956937.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "剧情",
      "爱情",
      "奇幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "楚门的世界 / The Truman Show",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p479682972.jpg",
    "rating": 0,
    "genres": [
      "金·凯瑞",
      "美国",
      "剧情",
      "科幻",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "放牛班的春天 / Les choristes",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2884280708.jpg",
    "rating": 0,
    "genres": [
      "法国",
      "瑞士",
      "德国",
      "剧情",
      "音乐",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "重庆森林 / 重慶森林",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p792381411.jpg",
    "rating": 0,
    "genres": [
      "林青霞",
      "金城武",
      "梁朝伟",
      "王菲",
      "周嘉玲",
      "黄志明",
      "左颂升",
      "关莉娜",
      "中国香港",
      "王家卫",
      "重庆森林",
      "剧情",
      "爱情",
      "粤语",
      "英语",
      "印地语",
      "日语"
    ],
    "type": "电影"
  },
  {
    "title": "辛德勒的名单 / Schindler's List",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p492406163.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "剧情",
      "历史",
      "战争",
      "英语",
      "希伯来语",
      "德语",
      "波兰语"
    ],
    "type": "电影"
  },
  {
    "title": "春光乍泄 / 春光乍洩",
    "poster": "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p465939041.jpg",
    "rating": 0,
    "genres": [
      "张国荣",
      "梁朝伟",
      "张震",
      "中国香港",
      "日本",
      "韩国",
      "王家卫",
      "春光乍泄",
      "剧情",
      "爱情",
      "同性",
      "粤语",
      "西班牙语"
    ],
    "type": "电影"
  },
  {
    "title": "海上钢琴师 / La leggenda del pianista sull'oceano",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2914698334.jpg",
    "rating": 0,
    "genres": [
      "意大利",
      "剧情",
      "音乐",
      "英语",
      "法语",
      "意大利语"
    ],
    "type": "电影"
  },
  {
    "title": "阿甘正传 / Forrest Gump",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2500944103.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "阿甘正传",
      "剧情",
      "爱情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "肖申克的救赎 / The Shawshank Redemption",
    "poster": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg",
    "rating": 0,
    "genres": [
      "美国",
      "犯罪",
      "剧情",
      "英语"
    ],
    "type": "电影"
  },
  {
    "title": "这个杀手不太冷 / Léon",
    "poster": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2913554676.jpg",
    "rating": 0,
    "genres": [
      "让·雷诺",
      "法国",
      "美国",
      "剧情",
      "动作",
      "犯罪",
      "英语",
      "意大利语",
      "法语"
    ],
    "type": "电影"
  },
  {
    "title": "霸王别姬",
    "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2911205318.jpg",
    "rating": 5,
    "genres": [
      "张国荣",
      "张丰毅",
      "巩俐",
      "葛优",
      "英达",
      "蒋雯丽",
      "吴大维",
      "吕齐",
      "雷汉",
      "尹治",
      "中国大陆",
      "中国香港",
      "陈凯歌",
      "剧情",
      "爱情",
      "同性"
    ],
    "type": "电影"
  }
];
