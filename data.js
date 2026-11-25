// ✏️ 要修改行程，只需要改這個檔案，存檔後 push 到 GitHub 即可。
// 地點名稱會自動變成 Google 地圖連結；想指定連結就加上 map: "https://..."
// 每個 item 可以是純文字，或 { t: "文字", time: "17:00", note: "備註", map: "網址" }

const TRIP = {
  title: "兩週年東京北海道之旅",
  subtitle: "2027/1/1 – 1/10　東京 · 札幌 · 小樽 · 富良野 · 鎌倉",

  hotels: [
    { name: "東橫INN 北朝霞站西口", dates: "1/1 – 1/2、1/6 – 1/10" },
    { name: "東急STAY札幌", dates: "1/2 – 1/6" }
  ],

  days: [
    {
      date: "1/1", wd: "五", city: "東京", title: "出發抵達",
      flights: [{ from: "TPE", to: "NRT", dep: "15:20", arr: "19:20" }],
      hotel: "東橫INN 北朝霞站西口",
      items: ["抵達成田後前往北朝霞入住"]
    },
    {
      date: "1/2", wd: "六", city: "札幌", title: "飛札幌・北海道大學",
      flights: [{ from: "羽田 HND", to: "札幌 CTS", dep: "10:00", arr: "11:35" }],
      hotel: "東急STAY札幌",
      items: [
        { t: "北海道大學", note: "校園散步" },
        { t: "GARAKU 湯咖哩", time: "17:00", note: "⭐ 必吃" },
        { t: "貍小路", note: "商店街" }
      ]
    },
    {
      date: "1/3", wd: "日", city: "札幌", title: "白色戀人・神宮",
      hotel: "東急STAY札幌",
      items: [
        "白色戀人工廠",
        "北海道神宮（圓山公園）",
        "六花亭／神宮茶屋：麻糬、霜淇淋"
      ]
    },
    {
      date: "1/4", wd: "一", city: "小樽", title: "小樽一日遊",
      hotel: "東急STAY札幌",
      items: ["小樽一日遊"]
    },
    {
      date: "1/5", wd: "二", city: "富良野・美瑛", title: "富良野美瑛一日遊",
      hotel: "東急STAY札幌",
      items: ["富良野美瑛一日遊"]
    },
    {
      date: "1/6", wd: "三", city: "札幌 → 東京", title: "回東京",
      flights: [{ from: "札幌 CTS", to: "羽田 HND", dep: "20:30", arr: "22:10" }],
      hotel: "東橫INN 北朝霞站西口",
      items: ["搭機返回東京，回北朝霞入住"]
    },
    {
      date: "1/7", wd: "四", city: "東京", title: "新宿御苑・悠閒日",
      hotel: "東橫INN 北朝霞站西口",
      items: ["新宿御苑野餐", "逛街", "悠閒的一天"]
    },
    {
      date: "1/8", wd: "五", city: "鎌倉", title: "鎌倉一日遊",
      hotel: "東橫INN 北朝霞站西口",
      items: ["鎌倉一日遊"]
    },
    {
      date: "1/9", wd: "六", city: "東京", title: "彈性安排",
      hotel: "東橫INN 北朝霞站西口",
      items: ["彈性安排"]
    },
    {
      date: "1/10", wd: "日", city: "東京", title: "彈性安排・回台灣",
      flights: [{ from: "NRT", to: "TPE", dep: "20:20", arr: "23:25" }],
      items: ["彈性安排", "前往成田機場"]
    }
  ],

  // 北海道待吃清單（網頁上可勾選，勾選狀態只存在各人瀏覽器）
  foods: [
    { name: "Pie doll（蘋果派）", note: "去 AEON 桑園店的路上", star: false },
    { name: "北菓樓泡芙" },
    { name: "White cosy（鬆餅 🥞）" },
    { name: "湯咖哩" },
    { name: "GARAKU", star: true, note: "1/2 17:00" },
    { name: "PICANTA", note: "據說有藥膳味" },
    { name: "奧芝商店" },
    { name: "なごやか亭 白石本通店", map: "https://goo.gl/maps/m5QETpcfgUwm94K8A" },
    { name: "回転寿司根室花まる JRタワーステラプレイス店", map: "https://goo.gl/maps/Mj5d74BEqevhJF1E7" },
    { name: "十勝豚丼" }
  ]
};
