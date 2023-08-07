import express from "express";
const router = express.Router();

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


const categories = [
    {
        title: "Hoa lương",
        avatar: "https://cdn.tgdd.vn/Files/2021/07/23/1370241/cach-trong-va-y-nghia-dac-biet-it-ai-biet-cua-hoa-mao-luong-202206041227264849.jpg"
    },
    {
        title: "Hoa ban đêm",
        avatar: "https://vnanet.vn/Data/Articles/2021/01/26/5258958/vna_potal_ve_dep_quyen_ru_cua_hoa_bang_vuong_truong_sa_loai_hoa_no_trong_dem__stand.jpg"
    },
    {
        title: "Hoa ban ngày",
        avatar: "https://www.vietnambooking.com/wp-content/uploads/2020/02/hoa-ban-no-vao-mua-nao-1.jpg"
    },
    {
        title: "Hoa độc",
        avatar: "https://st.quantrimang.com/photos/image/2019/05/16/loai-hoa-co-doc-3.jpg"
    },
    {
        title: "Hoa lừa",
        avatar: "https://anh.eva.vn/upload/1-2017/images/2017-03-01/chiem-nguong-suc-sang-tao-khung-cua-thien-nhien-qua-nhung-loai-hoa-giong-het-hinh-nguoi-va-dong-vat-2673469_orig-1488333259-width500height340.jpg"
    }
]

router.use("/create-default-data", async (req, res) => {
    try {
        let messageString = 'Tạo dữ liệu thành công cho các bảng sau:';

        // create data categories
        await prisma.categories.createMany({
            data: categories,
            skipDuplicates: true,
        })
        messageString += "categories"
        return res.status(500).json(
            {
                message: messageString
            }
        )
    } catch (err) {
        return res.status(500).json(
            {
                message: "Lỗi cú pháp!"
            }
        )
    }

})

module.exports = router;