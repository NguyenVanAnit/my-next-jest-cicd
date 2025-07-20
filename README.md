# 🚀 Deployment Success Next.js + Jest + CI/CD

Dự án **Next.js + Jest Example** đã được triển khai thành công thông qua **GitHub Actions CI/CD pipeline**.

## ✅ Thông tin chi tiết

- **CI/CD**: Tự động kiểm tra (test), build, và deploy sau mỗi lần push.
- 🛠 **Tech Stack**:
  - Next.js
  - TypeScript
  - Jest (unit testing)
  - GitHub Actions
- 🌐 **Link production**:  
  👉 [https://nguyenvananit.github.io/my-next-jest-cicd/](https://nguyenvananit.github.io/my-next-jest-cicd/)

## 🔁 Quy trình CI/CD

1. Push code lên GitHub
2. GitHub Actions chạy:
   - `npm ci`
   - `npm run test` (Jest)
   - `npm run build`
   - `npx next export` để xuất ra static HTML
3. Deploy tự động lên GitHub Pages

## 📦 Output

Trang web đã được **build tĩnh hoàn toàn** (`output: 'export'`) và host trên GitHub Pages thông qua branch `gh-pages`.

---



