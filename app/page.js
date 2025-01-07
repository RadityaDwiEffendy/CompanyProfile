'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const s = () => {
      const z = document.getElementById('zoom-bg');
      let sp = window.scrollY;

      if (sp <= window.innerHeight) {
        z.style.backgroundPosition = `center ${sp / 5}px `;
        z.style.backgroundSize = "100%";

      } else if (sp > window.innerHeight && sp <= 2 * window.innerHeight) {
        z.style.backgroundPosition = "center";
        z.style.backgroundSize = `${100 + (sp - window.innerHeight) / 45}%`;
      }

    };

    window.addEventListener("scroll", s);


    return () => {
      window.removeEventListener("scroll", s);
    };
  }, []);

  return (
    <>
      <nav className="bg-black shadow-md p-5 fixed z-[1000] top-0 left-0 w-full">
        <ul className="flex space-x-10">
          <Image className="ml-16 w-[150px] h-16" src="/images/Logo_Gas.png" alt="Logo Gas" width={150} height={64} />

          <div className="flex space-x-10 items-center ">
            <li>
              <Link href="/" className="ml-[200px] text-white hover:text-customPurple text-sm transition duration-500">Service</Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:text-customPurple text-sm transition duration-500">Visi</Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:text-customPurple text-sm transition duration-500">Solusi</Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:text-customPurple text-sm transition duration-500">Team</Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:text-customPurple text-sm transition duration-500">Blog</Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:text-customPurple text-sm transition duration-500">Members</Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:text-customPurple text-sm transition duration-500">News</Link>
            </li>

            <div className="flex items-center">
              <img className="w-6 h-6 bg-customPurple rounded-3xl" src="/images/profile.png" alt="Profile" />
              <Link href="/" className="ml-5 text-customPurple text-base hover:text-purple-300 transition duration-500">Masuk</Link>
            </div>

            <div>
              <button
                onClick={toggleDropdown}
                className={`ml-10 w-24 h-10 border border-white ${isOpen ? "border-b-0" : ""}`}>ID
              </button>
              {isOpen && (
                <div className="flex items-center justify-center ml-10 absolute w-24 h-10 border-l border-r border-b border-white">
                  <Link href="/" className="block">EN</Link>
                </div>
              )}
            </div>
          </div>
        </ul>
      </nav>


      <div className="mt-[100px] w-full h-[210vh] bg-cover bg-center " id="zoom-bg" style={{ backgroundImage: "linear-gradient(to bottom, transparent 20%, black 110%), url('/images/peakpx.jpg')", backgroundAttachment: "fixed", transition: " background-position 0.3s ease, background-size 0.3s ease;" }}>

        <div className="absolute top-[50%] w-7/12 ml-20">
          <div>
            <p className="text-7xl leading-tight font-medium">Standar Baru</p>
            <p className="text-7xl leading-tight font-medium">dalam Manajemen</p>
            <p className="text-7xl leading-tight font-medium">Layanan & Operasi TI</p>
          </div>
          <div className="w-[50rem] mt-10">
            <p className="text-3xl">Memberikan Solusi TI yang inovatif dan efisien, memastikan bisnis Anda tetap terdepan di dunia digital yang bergerak cepat saat ini</p>
          </div>
          <button className="w-[150px] h-[40px] rounded bg-customPurple text-black font-normal mt-10">Lanjut</button>
        </div>
      </div>

      <div className=" flex justify-center w-full h-[280vh] bg-black">


        <div className="flex w-[85%] h-[220vh] border border-solid border-white ">
          <div className="flex justify-center w-[40%] h-[220vh] border-r border-solid border-whit bg-left bg-center bg-no-repeat" style={{ backgroundImage: " url('/images/peakpx.jpg" }}>
            <div className="w-[75%] ">
              <div className="w-full mt-[150px]">
                <p className="text-3xl text-medium">Berbagai macam ITSM & Solusi keamanan untuk merampingkan proses TI</p>
              </div>
              <div className="w-full mt-10 ">
                <p className="text-[17px] tracking-[1px] leading-loose text-abuabu" style={{}}>Dengan komitmen yang kuat terhadap keunggulan, kami telah memantapkan diri sebagai mitra yang dapat diandalkan untuk organisasi yang ingin mengoptimalkan proses TI mereka, meningkatkan efisiensi operasional, dan mencapai pertumbuhan yang berkelanjutan</p>
              </div>
            </div>
          </div>


          <div>
            <div className="flex">
              <div>
                <div className="w-[240px] h-[500px] bg-abu2 rounded-2xl ml-[80px] mt-[50px] ">
                  <div className="w-full pt-[.5px]">
                    <div className="w-[50px] h-[50px] ml-[20px] mt-[15px] rounded-[50%] flex items-center justify-center bg-customPurple">
                      <div className="w-[30px] h-[30px] bg-cover bg-center " style={{ backgroundImage: " url('/images/on-off-button.png" }}></div>
                    </div>
                    <div className="w-full flex justify-center">
                      <div className="w-[85%] ">
                        <div className="mt-[60px]">
                          <div className={poppins.className}>
                            <p className="text-[18px] font-semibold text-oren popin">Manajemen Layanan TI (ITSM)</p>
                          </div>
                        </div>
                        <div className="mt-[20px]">
                          <p className="text-[14px] text-abuabu popin">Solusi kami dirancang untuk merampingkan Layanan TI Anda, memastikan pengoperasian yang mulus dan meningkatkan kepuasan pengguna menggunakan praktik terbaik industri dan alat canggih</p>
                        </div>

                        <div className="w-full h-[4px] rounded-[10px] mt-[20px] bg-abuMuda">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="w-[240px] h-[500px] bg-abu2 rounded-2xl ml-[30px] mt-[120px] ">
                  <div className="w-full pt-[.5px]">
                    <div className="w-[50px] h-[50px] ml-[20px] mt-[15px] rounded-[50%] flex items-center justify-center bg-abu2">
                      <div className="w-[40px] h-[40px] bg-cover bg-center " style={{ backgroundImage: " url('/images/Service.png" }}></div>
                    </div>
                    <div className="w-full flex justify-center">
                      <div className="w-[85%] ">
                        <div className="mt-[60px]">
                          <div className={poppins.className}>
                            <p className="text-[18px] font-semibold text-oren popin">Layanan Awan & Optimasi</p>
                          </div>
                        </div>
                        <div className="mt-[20px]">
                          <p className="text-[14px] text-abuabu popin">Rangkullah kekuatan cloud dengan alat layanan pemantauan cloud yang komprehensif untuk membantu Anda memigrasikan, mengelola, dan mengoptimalkan infrastruktur pada platform cloud populer, memastikan skalabilitas, fleksibilitas, dan efektivitas biaya</p>
                        </div>

                        <div className="w-full h-[4px] rounded-[10px] mt-[20px] bg-abuMuda">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <div className="w-[240px] h-[500px] bg-abu2 rounded-2xl ml-[80px] mt-[50px] ">
                  <div className="w-full pt-[.5px]">
                    <div className="w-[50px] h-[50px] ml-[20px] mt-[15px]  flex items-center justify-center ">
                      <div className="w-[40px] h-[40px] bg-cover bg-center " style={{ backgroundImage: " url('/images/ITAM.png" }}></div>
                    </div>
                    <div className="w-full flex justify-center">
                      <div className="w-[85%] ">
                        <div className="mt-[60px]">
                          <div className={poppins.className}>
                            <p className="text-[18px] font-semibold text-oren popin">Manajemen Aset TI (ITAM)</p>
                          </div>
                        </div>
                        <div className="mt-[20px]">
                          <p className="text-[14px] text-abuabu popin">Manajemen Aset & operasi diarahkan untuk menjaga aset dan stabilitas kinerja Infrastruktur TI Anda, mulai dari pengelolaan, pemantauan, dan optimalisasi.</p>
                        </div>

                        <div className="w-full h-[4px] rounded-[10px] mt-[20px] bg-abuMuda">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="w-[240px] h-[500px] bg-abu2 rounded-2xl ml-[30px] mt-[120px] ">
                  <div className="w-full pt-[.5px]">
                    <div className="w-[50px] h-[50px] ml-[20px] mt-[15px] rounded-[50%] flex items-center justify-center bg-abu2">
                      <div className="w-[40px] h-[40px] bg-cover bg-center " style={{ backgroundImage: " url('/images/Keamanan.png" }}></div>
                    </div>
                    <div className="w-full flex justify-center">
                      <div className="w-[85%] ">
                        <div className="mt-[60px]">
                          <div className={poppins.className}>
                            <p className="text-[18px] font-semibold text-oren popin">Solusi Keamanan Siber</p>
                          </div>
                        </div>
                        <div className="mt-[20px]">
                          <p className="text-[14px] text-abuabu popin">Lindungi aset berharga Anda dari ancaman dunia maya dengan solusi keamanan dunia maya kami yang kuat. Kami menerapkan pendekatan berlapis untuk melindungi jaringan, aplikasi, dan data Anda, memastikan perlindungan maksimum terhadap potensi pelanggaran</p>
                        </div>

                        <div className="w-full h-[4px] rounded-[10px] mt-[20px] bg-abuMuda">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className=" flex justify-center w-full h-[230vh] bg-black">


        <div className="flex w-[85%] h-[200vh] border border-solid border-white ">
          <div className="flex items-center justify-center w-[100%] h-[200vh] border-r border-solid border-whit bg-left bg-center bg-no-repeat" style={{ backgroundImage: " url('/images/BG.jpg" }}>
            <div className="w-[75%] ">
              <div className="w-full">
                <p className="text-3xl text-medium">Digitalisasi & Perlindungan Operasi TI</p>
              </div>
              
            </div>
          </div>
          <div className="w-full flex justify-center ">
              <div className="w-[85%]  mt-[150px]">
                <div className="text-abuabu">
                  <p>Dalam lanskap teknologi yang berkembang pesat saat ini, transformasi digital sangat penting untuk keberhasilan dan keamanan operasi TI. Proses ini melibatkan penerapan teknologi dan praktik canggih untuk menyederhanakan operasi, meningkatkan produktivitas, dan melindungi aset digital.</p>
                </div>
                <div className="text-abuabu mt-5">
                  <p>Strategi Utama untuk Digitalisasi Operasi TI:</p>
                </div>
                <div className="text-abuabu mt-5 ml-10">
                  <ol style={{ listStyle: "decimal" }}>
                    <li className="font-semibold">Otomatisasi : <span className="font-normal">Mengintegrasikan proses otomatis untuk mengurangi intervensi manual, sehingga meminimalkan kesalahan dan meningkatkan efisiensi.</span></li>
                    <li className="mt-2 font-semibold">Komputasi Awan : <span className="font-normal">Memanfaatkan layanan cloud untuk menyediakan sumber daya yang dapat diskalakan, meningkatkan kolaborasi, dan mengurangi biaya infrastruktur.</span> </li>
                    <li className="mt-2 font-semibold">Analitik Data : <span className="font-normal">Menggunakan big data dan analitik untuk membuat keputusan yang tepat, memprediksi tren, dan mengoptimalkan kinerja.</span> </li>
                  </ol>
                </div>
                <div className="text-abuabu mt-5">
                  <p>Langkah Penting untuk Melindungi Operasi TI:</p>
                </div>
                <div className="text-abuabu mt-5 ml-10">
                  <ol style={{ listStyle: "decimal" }}>
                    <li className="font-semibold">Keamanan Siber : <span className="font-normal">Menerapkan protokol keamanan yang kuat, termasuk firewall, enkripsi, dan sistem deteksi intrusi untuk melindungi dari ancaman siber.</span></li>
                    <li className="mt-2 font-semibold">Kepatuhan : <span className="font-normal">Memastikan kepatuhan terhadap standar dan regulasi industri untuk menjaga integritas data dan menghindari sanksi hukum.</span> </li>
                    <li className="mt-2 font-semibold">Kontrol Akses : <span className="font-normal">Memberlakukan langkah-langkah kontrol akses yang ketat untuk mencegah akses yang tidak sah ke informasi sensitif.</span> </li>
                  </ol>
                </div>
                <div className="text-abuabu mt-5">
                  <p>Dengan berfokus pada strategi dan langkah-langkah ini, organisasi dapat secara efektif mendigitalisasi operasi TI mereka sambil menjaga tingkat keamanan yang tinggi dan ketahanan terhadap ancaman potensial.</p>
                </div>

                <button className="w-[150px] h-[40px] rounded bg-customPurple text-black font-normal mt-10">Lanjut</button>
              </div>
          </div>

        </div>
      </div>

    </>
  );
}
