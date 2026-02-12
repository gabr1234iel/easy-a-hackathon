# 🦀 Clawpump - Base Hackathon Starter Kit

## 🛠 1. 配置專案

### 獲取 WalletConnect Project ID
1. 前往 [WalletConnect Cloud](https://cloud.walletconnect.com/) 免費註冊。
2. 建立新專案並複製 **Project ID**。

### 填入配置
打開 `frontend/config/wagmi.ts`，將你的 Project ID 填入：

```typescript
// frontend/config/wagmi.ts
export const config = getDefaultConfig({
  appName: 'Clawpump',
  projectId: '你的_PROJECT_ID_填在這裡', 
  chains: [base, baseSepolia],
  ssr: true,
});
```

---

## 🚀 2. 啟動項目

### 前端 (Frontend)
```bash
cd frontend
npm install
npm run dev
```
訪問：`http://localhost:3000`

### 後端 (Backend)
```bash
cd backend
npm install
npm run dev
```
訪問：`http://localhost:3001` (預設)

---

## 📂 目錄結構
- `/frontend`: Next.js 應用 (錢包連接、UI)
- `/backend`: Express 代理伺服器
