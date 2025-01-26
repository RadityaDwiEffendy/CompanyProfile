import { AsyncCallbackSet } from "next/dist/server/lib/async-callback-set";

const { Prisma } = require("@prisma/client");

export default async function handler(req, res) {

    if (req.method === 'POST') {
        try 
        {
            const {
                tanggal,
                title,
                deskripsi,
                gambar,
                paragraf1,
                paragraf2,
                paragraf3,
                paragraf4,
                paragraf5,
                paragraf6,
                paragraf7,
                paragraf8,
                paragraf9,
                paragraf10,
                point1,
                point2,
                point3,
                point4,
                point5,
              } = req.body;
    
              const newPost = await Prisma.post.create({
                data: {
                    tanggal,
                    title,
                    deskripsi,
                    gambar,
                    paragraf1: paragraf1 || null,
                    paragraf2: paragraf2 || null,
                    paragraf3: paragraf3 || null,
                    paragraf4: paragraf4 || null,
                    paragraf5: paragraf5 || null,
                    paragraf6: paragraf6 || null,
                    paragraf7: paragraf7 || null,
                    paragraf8: paragraf8 || null,
                    paragraf9: paragraf9 || null,
                    paragraf10: paragraf10 || null,
                    point1: point1 || null,
                    point2: point2 || null,
                    point3: point3 || null,
                    point4: point4 || null,
                    point5: point5 || null,
                  },
              })
    
              res.status(201).json({success: true,data: newPost})
        }catch(error) {
            res.status(500).json({succes: false, message: error.message})
        }
    }else{
        res.status(405).json({succes: false, message: 'Method not allowed'})
    }

}