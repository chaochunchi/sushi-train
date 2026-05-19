# 🚄🍣 高鐵 × 迴轉壽司聯合列車官方網站

## 專案介紹

這是一個創新的旅程體驗網站，展示高鐵的速度與迴轉壽司美食的完美融合。提供完整的介紹頁面、線上訂票系統和故事廣告影片。

## 功能特性

✨ **介紹頁面**
- 吸引人的英雄區塊
- 詳細的服務介紹
- 列車特色展示
- 響應式設計

🎫 **訂票系統**
- 選擇出發城市和目的地
- 選擇出發日期
- 選擇乘客人數
- 座位等級選擇
- 套餐選擇
- 實時價格計算
- 表單驗證

🎬 **故事廣告影片**
- 旅客見證分享
- 主廚特訪影片
- 家庭冒險故事

## 文件結構

```
sushi-train/
├── index.html           # 主頁面
├── booking.html         # 訂票頁面
├── css/
│   └── style.css        # 樣式表
├── js/
│   └── script.js        # 互動腳本
└── README.md            # 本檔案
```

## 技術棧

- **HTML5** - 語義化標記
- **CSS3** - 現代化樣式和響應式設計
- **JavaScript** - 表單驗證和互動功能

## 如何使用

### 本地開發

1. 克隆此倉庫
   ```bash
   git clone https://github.com/chaochunchi/sushi-train.git
   cd sushi-train
   ```

2. 使用本地伺服器打開（例如 Python）
   ```bash
   python -m http.server 8000
   ```

3. 在瀏覽器中打開 `http://localhost:8000`

### GitHub Pages 部署

此網站已設置為通過 GitHub Pages 自動部署：

1. 進入倉庫設置
2. 找到 **Pages** 部分
3. 選擇 **main** 分支作為發佈源
4. 網站將自動發佈到 `https://chaochunchi.github.io/sushi-train`

## 功能說明

### 訂票系統

用戶可以：
- 選擇出發城市（東京、大阪、京都、廣島）
- 選擇目的地
- 選擇出發日期（不可選過去的日期）
- 選擇乘客人數（1-6人）
- 選擇座位等級：
  - 標準座位 ¥3,000
  - 高級座位 ¥5,000
  - 豪華套房 ¥8,000
- 選擇套餐計劃
- 輸入個人信息

**價格計算**：總價 = 座位價格 × 乘客人數

### 故事廣告影片

網站包含3個YouTube影片位置：
1. 旅客見證 - 第一次體驗
2. 主廚特訪 - 壽司製作
3. 家庭冒險 - 親子時光

*注：影片需要替換為實際的 YouTube 嵌入代碼*

## 自訂內容

### 替換影片

編輯 `index.html` 中的影片部分：
```html
<iframe width="100%" height="300" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

將 `YOUR_VIDEO_ID` 替換為實際的 YouTube 視頻ID。

### 修改城市選項

編輯 `booking.html` 中的城市選項。

### 調整價格

編輯 `js/script.js` 中的 `prices` 物件：
```javascript
const prices = {
    standard: 3000,
    premium: 5000,
    luxury: 8000
};
```

## 瀏覽器支持

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

## 響應式設計

網站完全響應式，支持：
- 桌面設備 (1024px+)
- 平板設備 (768px - 1023px)
- 手機設備 (< 768px)

## 許可證

Copyright © 2026 高鐵 × 迴轉壽司聯合列車。版權所有。

## 聯絡方式

如有問題或建議，請通過以下方式聯繫：
- GitHub Issues
- 電郵：[添加您的電郵]

---

**享受您的高鐵壽司列車之旅！🚄🍣**