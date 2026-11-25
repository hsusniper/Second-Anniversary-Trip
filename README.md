# 兩週年東京北海道之旅

純靜態網站（HTML + JS），不需要安裝或建置。

## 發佈到 GitHub Pages

1. 到 GitHub 建立新 repository（Public），例如 `japan-trip`。
2. 點 **Add file → Upload files**，把 `index.html`、`data.js`、`README.md` 拖進去，按 **Commit changes**。
3. 進入 **Settings → Pages**，Source 選 **Deploy from a branch**，Branch 選 `main`、資料夾 `/ (root)`，按 Save。
4. 約 1–2 分鐘後，網址會是 `https://你的帳號.github.io/japan-trip/`。

## 之後怎麼修改

只需要改 `data.js`：在 GitHub 網頁點開該檔案 → 右上角鉛筆圖示 → 修改 → Commit，網站會自動更新。

- 新增景點：在該天的 `items` 加一行 `"景點名稱"`，或 `{ t: "名稱", time: "14:00", note: "備註" }`。
- 景點名稱會自動連到 Google 地圖；想指定連結就加 `map: "https://..."`。
- 美食清單改 `foods`。

## 公開網站的隱私提醒

這是公開網站，任何人都能看到出國日期與住宿名稱。若在意，可刪除 `hotels` 與各天的 `hotel`，或把 repository 設為 Private（GitHub Pages 私人網站需付費方案）。
