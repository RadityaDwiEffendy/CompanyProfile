'use client';
import { Wix_Madefor_Display } from "next/font/google";
import { useState, useEffect } from "react";

const wix = Wix_Madefor_Display({
  weight: "600",
  subsets: ['latin'],
});

const wix4 = Wix_Madefor_Display({
  weight: "400",
  subsets: ['latin'],
});

import dynamic from 'next/dynamic';

export default function NewsPage() {
  const [formData, setFormData] = useState({
    tanggal: '',
    title: '',
    deskripsi: '',
    gambar: '',
    paragraf1: '',
    paragraf2: '',
    paragraf3: '',
    paragraf4: '',
    paragraf5: '',
    paragraf6: '',
    paragraf7: '',
    paragraf8: '',
    paragraf9: '',
    paragraf10: '',
    point1: '',
    point2: '',
    point3: '',
    point4: '',
    point5: '',
  });

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      tanggal: new Date().toLocaleDateString(),
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          [name]: reader.result, 
        });
      };
      if (file) reader.readAsDataURL(file);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting data:', formData);
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      const data = await response.json();
      alert('Data berhasil ditambahkan');
    } catch (error) {
      console.error('Error:', error);
      alert(`Terjadi kesalahan: ${error.message}`);
    }
  };

  return (
    <>
      <div className={wix.className}>
        <div className="w-full h-[100vh] flex justify-center">
          <div className="w-[50%] flex items-center">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="w-full min-h-[70vh]">
                <div className="w-full h-[50px] flex items-center justify-center">
                  <p className="text-[48px]">Buat Berita</p>
                </div>

                <div className="mt-[20px] w-full h-[80px] flex items-center justify-center">
                  <div className="w-full">
                    <div className="w-full">
                      <p className="text[16px]">Tanggal</p>
                    </div>
                    <div className="">
                      <input
                        type="text"
                        name="tanggal"
                        value={formData.tanggal}
                        onChange={handleChange}
                        className="w-full h-[35px] bg-transparent border-b-[1px] border-abu2 focus:outline-none focus:border-b-[1px] focus:border-customPurple hover:border-b hover hover:border-customPurple"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full h-[80px] flex items-center justify-center">
                  <div className="w-full">
                    <div className="w-full">
                      <p className="text[16px]">Judul</p>
                    </div>
                    <div className="">
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full h-[35px] bg-transparent border-b-[1px] border-abu2 focus:outline-none focus:border-b-[1px] focus:border-customPurple hover:border-b hover hover:border-customPurple"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full h-[80px] flex items-center justify-center">
                  <div className="w-full">
                    <div className="w-full">
                      <p className="text[16px]">Deskripsi</p>
                    </div>
                    <div className="">
                      <input
                        type="text"
                        name="deskripsi"
                        value={formData.deskripsi}
                        onChange={handleChange}
                        className="w-full h-[35px] bg-transparent border-b-[1px] border-abu2 inline focus:outline-none focus:border-b-[1px] focus:border-customPurple hover:border-b hover hover:border-customPurple"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full h-[80px] flex items-center justify-center">
                  <div className="w-full">
                    <div className="w-full">
                      <p className="text[16px]">Gambar</p>
                    </div>
                    <div className="">
                      <input
                        type="file"
                        name="gambar"
                        onChange={handleChange}
                        className="w-full h-[35px] bg-transparent border-b-[1px] border-abu2 inline focus:outline-none focus:border-b-[1px] focus:border-customPurple hover:border-b hover hover:border-customPurple"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-[20%] h-[80px] flex items-center justify-center mt-[20px]">
                  <button type="submit" className="w-full h-[50px] bg-customPurple text-black">
                    Simpan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
