## Dự án structure Express JS

## Thư viện DEV

1/Nodemon : npm i nodemon --save-dev

=> Giúp theo dõi file và reload lại file khi có sự thay đổi

## THư viện production

1/ express: npm i express

=> Tạo ra server express

2/dotenv: npm i dotenv

=> Đọc file .env

3/ BỘ thư viện babel: npm i @babel/cli @babel/core @babel/preset-env @babel/node

=> kích hoạt chuyển đổi version ES cao thành ES phù hợp với môi trường

=> Lưu ý: 
    +   phải có file .babelrc cùng cấp .env
    +   phải cài đặt đủ npm i @babel/cli @babel/core @babel/preset-env @babel/node
    +   trong lệnh chạy dự án thêm dev và pro