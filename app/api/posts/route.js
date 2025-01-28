import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
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
    } = await req.json();

    console.log("Received data:", req.body);

    const newPost = await prisma.news.create({
      data: {
        tanggal,
        title,
        deskripsi,
        gambar: Buffer.from(gambar.split(',')[1], 'base64'), 
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
    });

    console.log("Created new post:", newPost);

    return new Response(JSON.stringify({ success: true, data: newPost }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}
