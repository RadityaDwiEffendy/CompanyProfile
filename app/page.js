'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Inspiration, Nunito_Sans, Padauk, Poppins, Raleway, Roboto, Wix_Madefor_Display } from 'next/font/google'

import { userAgent } from "next/server";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})
const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
})

const rail = Raleway({
  weight: "600",
  subsets: ['latin'],
})

const NunitoSans = Nunito_Sans({
  weight: "600",
  subsets: ['latin'],
})

const wix = Wix_Madefor_Display({
  weight: "600",
  subsets: ['latin'],
})
const wix4 = Wix_Madefor_Display({
  weight: "400",
  subsets: ['latin'],
})




// const lato = Lato({
//   weight: '700',
//   subsets: ['latin'],
// })

export default function Navbar() {

  const cr = useRef(null)


  const [c500, sc500] = useState(0)
  const [c100, sc100] = useState(0)
  const [v, sv] = useState(false)
  const r = useRef(null)

  const [s, sx] = useState(0)

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!cr.current) return

    const c = cr.current
    const p = []
    const np = 50
    const ps = 3
    const cz = c.offsetWidth;

    const radius = c.offsetWidth / 2
    const cenY = radius;
    const cenX = radius;


    function createParticle() {
      const p1 = document.createElement('div')
      p1.style.width = `${ps}px`
      p1.style.height = `${ps}px`
      p1.style.backgroundColor = `rgba(230, 199, 235, 1)`
      p1.style.borderRadius = "50%"
      p1.style.position = "absolute"

      let x, y, distance;

      do {
        x = Math.random() * c.offsetWidth;
        y = Math.random() * c.offsetHeight

        distance = Math.sqrt(Math.pow(x - cenX, 2) + Math.pow(y - cenY, 2))

      } while (distance + ps / 2 > radius)



      p1.style.top = `${x - ps / 2}px`
      p1.style.left = `${y - ps / 2}px`

      c.appendChild(p1)
      p.push({
        element: p1,
        velocityX: (Math.random() - .5) * 2,
        velocityY: (Math.random() - .5) * 2
      })
    }

    for (let i = 0; i < np; i++) {
      createParticle()
    }

    function animateParticle() {
      p.forEach((p1) => {
        const r = c.getBoundingClientRect()
        const el = p1.element
        const ct = parseFloat(el.style.top) + ps / 2
        const cl = parseFloat(el.style.left) + ps / 2

        let nt = ct + p1.velocityY
        let nl = cl + p1.velocityX

        const distance = Math.sqrt(Math.pow(nl - cenX, 2) + Math.pow(nt - cenY, 2));

        if (distance + ps / 2 > radius) {
          const angle = Math.atan2(nt - cenY, nl - cenX)
          p1.velocityX = -Math.cos(angle) * Math.abs(p1.velocityX)
          p1.velocityY = -Math.sin(angle) * Math.abs(p1.velocityY)
        } else {
          el.style.top = `${nt - ps / 2}px`
          el.style.left = `${nl - ps / 2}px`
        }

        // if(nt <= 0 || nt + ps >= r.height){
        //   p1.velocityY *= -1
        // }

        // if(nl <= 0 || nl + ps >= r.width) {
        //   p1.velocityX *= -1
        // }

      })

      requestAnimationFrame(animateParticle);
    }

    animateParticle()

    return () => {
      p.forEach((p1) => p1.element.remove())
    }
  }, [])

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sv(true)
        }
      },
      { threshold: .5 }
    );

    if (r.current) {
      ob.observe(r.current)
    }

    return () => {
      if (r.current) {
        ob.unobserve(r.current)
      }
    }
  }, [])

  useEffect(() => {
    if (v) {
      if (c500 < 500) {
        let s = c500
        const d = 1000
        const i = Math.ceil(500 / (d / 16))

        const a = () => {
          s += i
          if (s > 500) s = 500;
          sc500(s)

          if (s < 500) {
            requestAnimationFrame(a)
          }
        };

        a();
      }

      if (c100 < 100) {
        let s = c100
        const d = 1000
        const i = Math.ceil(100 / (d / 16))

        const a = () => {
          s += i
          if (s > 100) s = 100;
          sc100(s)

          if (s < 100) {
            requestAnimationFrame(a)
          }
        };
        a();
      }
    }
  }, [v])




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
    const hs = () => {
      sx(window.scrollY * .1)
    }

    window.addEventListener("scroll", hs);
    return () => window.removeEventListener("scroll", hs)
  }, [])

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
              <Link href="/" className="ml-[400px] text-white hover:text-customPurple text-sm transition duration-500">Service</Link>
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
              <Link href="/" className="text-white hover:text-customPurple text-sm transition duration-500">News</Link>
            </li>



            <div>
              <button
                onClick={toggleDropdown}
                className={`ml-5 w-24 h-10 border border-white ${isOpen ? "border-b-0" : ""}`}>ID
              </button>
              {isOpen && (
                <div className="flex items-center justify-center ml-5 absolute w-24 h-10 border-l border-r border-b border-white">
                  <Link href="/" className="block">EN</Link>
                </div>
              )}
            </div>
          </div>
        </ul>
      </nav>


      <div className={wix.className}> 
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
                      <div className="w-[50px] h-[50px] ml-[20px] mt-[15px] rounded-[50%] flex items-center justify-center bg-abumuda">
                        <svg className="w-[50px] h-[50px] bg-cover bg-center " preserveAspectRatio="xMidYMid meet" data-bbox="27 27.5 146 145" viewBox="27 27.5 146 145" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                          <g>
                            <path d="M99.6 27.5C59.7 27.5 27 60.1 27 99.8c0 40.1 32.7 72.7 73 72.7s73-32.6 73-72.7c-.4-39.7-33.1-72.3-73.4-72.3zM100 53c3.4 0 6.4 3 6.4 6.4V98c0 3.4-3 6.4-6.4 6.4-3.4 0-6.4-3-6.4-6.4V59.3c0-3.3 3-6.3 6.4-6.3zm41.8 47.9c.368 23.097-17.3 41.2-39.9 42H100c-21.8 0-39.9-16.9-41.8-38.6v-2.2c0-9.4 3-18.4 8.7-25.9 2.3-2.6 6-3.4 9-1.1 2.6 2.2 3.4 6 1.1 9-4.1 5.2-6 12-6 18.7.8 15.7 14.3 28.1 30.5 27.4 15.8-.7 28.2-13.9 27.8-30-.4-5.6-2.3-10.9-5.3-15.4-1.9-3-1.5-6.7 1.5-9 3-1.9 6.8-1.5 9 1.5 4.5 6 7.18 16.073 7.3 23.6z" fill="#E6C7EB" data-color="1"></path>
                          </g>
                        </svg>

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
                        <svg className="w-[40px] h-[40px] bg-cover bg-center " preserveAspectRatio="xMidYMid meet" data-bbox="20.532 45.947 158.928 108.107" viewBox="20.532 45.947 158.928 108.107" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                          <g>
                            <path d="M82.935 75.852l44.836 20.692a4.833 4.833 0 0 0 4.048 0l44.836-20.692a4.828 4.828 0 0 0 0-8.768l-44.836-20.692a4.826 4.826 0 0 0-4.047 0L82.935 67.083a4.828 4.828 0 0 0 0 8.769zm46.86-19.759l33.312 15.374-33.312 15.374-33.312-15.374 33.312-15.374z" fill="#E6C7EB"></path>
                            <path d="M172.608 95.616l-42.813 19.758-42.813-19.758a4.83 4.83 0 0 0-4.047 8.769l44.836 20.692a4.833 4.833 0 0 0 4.048 0l44.836-20.692a4.83 4.83 0 0 0-4.047-8.769z" fill="#E6C7EB"></path>
                            <path d="M172.608 124.149l-42.813 19.758-42.813-19.758a4.828 4.828 0 1 0-4.047 8.769l44.836 20.692a4.833 4.833 0 0 0 4.048 0l44.836-20.692a4.83 4.83 0 0 0-4.047-8.769z" fill="#E6C7EB"></path>
                            <path d="M65.095 95.171H25.368a4.829 4.829 0 1 0 0 9.658h39.727a4.829 4.829 0 1 0 0-9.658z" fill="#E6C7EB"></path>
                            <path d="M65.095 76.446H37.44a4.829 4.829 0 1 0 0 9.658h27.655a4.829 4.829 0 1 0 0-9.658z" fill="#E6C7EB"></path>
                            <path d="M65.095 113.897H49.512a4.829 4.829 0 1 0 0 9.658h15.583a4.829 4.829 0 1 0 0-9.658z" fill="#E6C7EB"></path>
                          </g>
                        </svg>


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
                        <svg className="w-[40px] h-[40px] bg-cover bg-center " preserveAspectRatio="xMidYMid meet" data-bbox="20 45 160 110" viewBox="20 45 160 110" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
                          <g>
                            <path d="M122 116.8v30.4h-14.7v-30.4H122z" fill="#E6C7EB" data-color="1"></path>
                            <path d="M180 45v87.4H49.4V45H180z" fill="#E6C7EB" data-color="2"></path>
                            <path d="M175 52.6v75H54.4v-75H175z" fill="#404040" data-color="1"></path>
                            <path d="M180 139.5v8.1H49.4v-8.1H180z" fill="#E6C7EB" data-color="2"></path>
                            <path d="M169.2 101.1V155h-33.6v-53.9h33.6z" fill="#E6C7EB" data-color="2"></path>
                            <path d="M166.6 104.4v42.3h-28.5v-42.3h28.5z" fill="#404040" data-color="1"></path>
                            <path d="M73.4 72.6V155H20V72.6h53.4z" fill="#E6C7EB" data-color="2"></path>
                            <path d="M69.5 77.1v70H23.7v-70h45.8z" fill="#404040" data-color="1"></path>
                            <path d="M154 148.9v3.2h-3.2v-3.2h3.2z" fill="#E6C7EB" data-color="1"></path>
                            <path d="M48.3 148.9v3.2h-3.2v-3.2h3.2z" fill="#E6C7EB" data-color="1"></path>
                            <path d="M116.3 46.9v3.2h-3.2v-3.2h3.2z" fill="#E6C7EB" data-color="1"></path>
                          </g>
                        </svg>

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
                        <svg className="w-[40px] h-[40px] bg-cover bg-center " preserveAspectRatio="xMidYMid meet" data-bbox="40.5 28 119 144" viewBox="40.5 28 119 144" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs><style></style></defs>
                          <g>
                            <path d="M74 73.3l5 5 1.4 8 19.3 10.4L119 86.4l1.4-8 5.1-5 1.3-9.1-1.4-4.2.7-9.6-3-14.9-16-7.4-6.3-.2h-2.4l-6.2.2-15.8 7.4-3 14.9.7 9.6-1.4 4.1 1.3 9.1zm25.7 18.8L84 83.7l-1.2-6.9.3.1 2 5.4 13.4 4.4 1.7.1 13.9-4.5 2.1-5.4.4-.1-1.2 6.9-15.7 8.4zM77.5 50.8L80 38.5l13.2-6.2 6.4-.2 6.6.2 13.4 6.2 2.5 12.3-.7 9.9 1.4 4-1 6.8-4.6 4.5-1.1-3.2-3 1-2.1 5.4-11.4 3.7-11.3-3.7-2-5.4-2.9-1-1.1 3.2-4.5-4.5-1-6.8 1.3-4-.6-9.9z" fill="#E6C7EB" data-color="1"></path>
                            <path d="M100.8 115.5h-2.6l-6.7 5.1-11.3-2.3 4.4 32.4 13.6 9.2h2.4l13.8-9.2 4.5-32.4-11.4 2.3-6.7-5.1zm9.9 32.9l-11.3 7.5-11.1-7.5-3.3-24.9 7.5 1.5 6.9-5.4 7.1 5.4 7.6-1.5-3.4 24.9z" fill="#E6C7EB" data-color="1"></path>
                            <path fill="#E6C7EB" d="M84.5 60.1l-.2-7.6 6.4-3.3 8.9-.2 9 .2 6.5 3.3-.2 7.6 3.5 3.1 2.7-3-2.1-1.8.2-8.3-9.6-4.9-10-.2h-.1l-9.9.2-9.4 4.9.2 8.3-2 1.8 2.7 3 3.4-3.1z" data-color="1"></path>
                            <path d="M155 123.3l-8.4-13.8-22.9-9.1-4.8-8.8-9.1 6.5-8.9 2.1h-2.8l-8.8-2.1-9-6.6-4.7 8.8-22.5 9.1-8.1 13.9-4.5 41 57.1 7.7h3.7l58.2-7.7-4.5-41zM101 168h-3l-53.1-7.1 3.9-36.2 7.1-11.9 22.6-9.2 3.2-6 5.9 4.3 9.8 2.3 3.7.1 10.4-2.4 6-4.3 3.3 6 22.9 9.2 7.2 11.9 4 36.2L101 168z" fill="#E6C7EB" data-color="1"></path>
                          </g>
                        </svg>
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
            <div className="flex items-center justify-center w-[100%] h-[200vh] border-r border-b border-solid border-whit bg-left bg-center bg-no-repeat" style={{ backgroundImage: " url('/images/BG.jpg" }}>
              <div className="w-[75%] ">
                <div className="w-full">
                  <p className="text-3xl text-medium">Digitalisasi & Perlindungan Operasi TI</p>
                </div>

              </div>
            </div>
            <div className="w-full flex justify-center ">
              <div className="w-[85%]  mt-[150px]">
                <div className="text-abuabu text-[16px] ">
                  <p className={wix4.className}>Dalam lanskap teknologi yang berkembang pesat saat ini, transformasi digital sangat penting untuk keberhasilan dan keamanan operasi TI. Proses ini melibatkan penerapan teknologi dan praktik canggih untuk menyederhanakan operasi, meningkatkan produktivitas, dan melindungi aset digital.</p>
                </div>
                <div className="text-abuabu mt-5">
                  <p className={wix4.className}>Strategi Utama untuk Digitalisasi Operasi TI:</p>
                </div>
                <div className="text-abuabu mt-5 ml-10 text-[16px] ">
                  <ol style={{ listStyle: "decimal" }} className={wix4.className}>
                    <li className="font-semibold">Otomatisasi : <span className="font-normal">Mengintegrasikan proses otomatis untuk mengurangi intervensi manual, sehingga meminimalkan kesalahan dan meningkatkan efisiensi.</span></li>
                    <li className="mt-2 font-semibold">Komputasi Awan : <span className="font-normal">Memanfaatkan layanan cloud untuk menyediakan sumber daya yang dapat diskalakan, meningkatkan kolaborasi, dan mengurangi biaya infrastruktur.</span> </li>
                    <li className="mt-2 font-semibold">Analitik Data : <span className="font-normal">Menggunakan big data dan analitik untuk membuat keputusan yang tepat, memprediksi tren, dan mengoptimalkan kinerja.</span> </li>
                  </ol>
                </div>
                <div className="text-abuabu mt-5 text-[16px] ">
                  <p className={wix4.className}>Langkah Penting untuk Melindungi Operasi TI:</p>
                </div>
                <div className="text-abuabu mt-5 ml-10 text-[16px] ">
                  <ol className={wix4.className} style={{ listStyle: "decimal" }}>
                    <li className="font-semibold">Keamanan Siber : <span className="font-normal">Menerapkan protokol keamanan yang kuat, termasuk firewall, enkripsi, dan sistem deteksi intrusi untuk melindungi dari ancaman siber.</span></li>
                    <li className="mt-2 font-semibold">Kepatuhan : <span className="font-normal">Memastikan kepatuhan terhadap standar dan regulasi industri untuk menjaga integritas data dan menghindari sanksi hukum.</span> </li>
                    <li className="mt-2 font-semibold">Kontrol Akses : <span className="font-normal">Memberlakukan langkah-langkah kontrol akses yang ketat untuk mencegah akses yang tidak sah ke informasi sensitif.</span> </li>
                  </ol>
                </div>
                <div className="text-abuabu mt-5 text-[16px] ">
                  <p className={wix4.className}>Dengan berfokus pada strategi dan langkah-langkah ini, organisasi dapat secara efektif mendigitalisasi operasi TI mereka sambil menjaga tingkat keamanan yang tinggi dan ketahanan terhadap ancaman potensial.</p>
                </div>

                <button className="w-[150px] h-[40px] rounded bg-customPurple text-black font-normal mt-10">Lanjut</button>
              </div>
            </div>

          </div>
        </div>

        <div className="w-full h-[120vh] bg-bottom" style={{ backgroundImage: "url('/images/night.jpg')", backgroundPosition: `${-s}px center`, transition: "background-position .1s linear" }}>
          <div className={roboto.className}>
            <div className="w-full flex justify-center ">
              <div className={wix.className}>
                <p style={{ lineHeight: "normal", textAlign: "center" }} className="mt-[150px] text-[30px] ">Kami Bangga dengan Hasil Kami</p>
              </div>

            </div>

            <div className="w-full mt-[150px] h-[130px] space-x-10 flex justify-center ">
              <div className="w-[170px]   ">
                <div className="text-customPurple flex justify-center w-full">
                  <p className="text-[50px] ">13</p>
                </div>
                <div className="text-abuabu flex justify-center w-full mt-[30px] ">
                  <p className="text-[14px] ">Tahun Pengalaman</p>
                </div>
                <div className="w-full h-[4px] bg-abuMuda rounded-[5px] mt-[10px] ">

                </div>
              </div>
              <div className="w-[170px]   ">
                <div ref={r} className="text-customPurple flex justify-center w-full">
                  <p className="text-[50px] ">{Math.round(c100)}+</p>
                </div>
                <div className="text-abuabu flex justify-center w-full mt-[30px] ">
                  <p className="text-[14px] ">Pelanggan Bisnis</p>
                </div>
                <div className="w-full h-[4px] bg-abuMuda rounded-[5px] mt-[10px] ">

                </div>
              </div>
              <div className="w-[170px]   ">
                <div ref={r} className="text-customPurple flex justify-center w-full">
                  <p className="text-[50px] ">{Math.round(c500)}k</p>
                </div>
                <div className="text-abuabu flex justify-center w-full mt-[30px] ">
                  <p className="text-[14px] ">Perangkat Dikelola</p>
                </div>
                <div className="w-full h-[4px] bg-abuMuda rounded-[5px] mt-[10px] ">

                </div>
              </div>
              <div className="w-[170px]   ">
                <div className="text-customPurple flex justify-center w-full">
                  <p className="text-[50px] ">95 %</p>
                </div>
                <div className="text-abuabu flex justify-center w-full mt-[30px] ">
                  <p className="text-[14px] ">ROI Dalam 3-6 bulan</p>
                </div>
                <div className="w-full h-[4px] bg-abuMuda rounded-[5px] mt-[10px] ">

                </div>
              </div>
              <div className="w-[170px]   ">
                <div className="text-customPurple flex justify-center w-full">
                  <p className="text-[50px] ">97 %</p>
                </div>
                <div className="text-abuabu flex justify-center w-full mt-[30px] ">
                  <p className="text-[14px] ">Peringkat Memuaskan</p>
                </div>
                <div className="w-full h-[4px] bg-abuMuda rounded-[5px] mt-[10px] ">

                </div>
              </div>

            </div>
          </div>
        </div>



        <div className="w-full h-[180vh] bg-abu2 bg-center" style={{ backgroundImage: " url('/images/.jpg" }}>
          <div className=" w-full flex justify-center">
            <div className={wix.className}>
              <p className="text-[30px] mt-[100px] ">Mitra Kami</p>
            </div>



          </div>
          <div className=" mt-10 w-full flex justify-center">
            <div className="w-[90%] bg-abuMuda flex b justify-center  space-x-[1px] pl-[2px] pr-[2px] pt-[1px]">
              <div className="flex items-center justify-center w-[300px] h-[180px] bg-black" >
                <img className="w-[145px] h-[77px] " src="/images/logo_partner/1kaseya_logo1_edited.avif"></img>
              </div>
              <div className="flex items-center justify-center w-[300px] h-[180px] bg-black" >
                <img className="w-[155px] h-[32px] " src="/images/logo_partner/2soti_logo_edited.avif"></img>
              </div>
              <div className="flex items-center justify-center w-[300px] h-[180px] bg-black" >
                <img className="w-[164px] h-[71] " src="/images/logo_partner/3invgate_edited.avif"></img>
              </div>
              <div className="flex items-center justify-center w-[300px] h-[180px] bg-black" >
                <img className="w-[238px] h-[82px] " src="/images/logo_partner/4barracuda_logo_edited.avif"></img>
              </div>
            </div>



          </div>
          <div className=" w-full flex justify-center">
            <div className="w-[90%] bg-abuMuda flex b justify-center  space-x-[1px] pl-[2px] pr-[2px] pt-[1px]">
              <div className="flex items-center justify-center w-[300px] h-[180px] bg-black" >
                <img className="w-[164px] h-[71px] " src="/images/logo_partner/5akamai_edited.avif"></img>
              </div>
              <div className="flex items-center justify-center w-[300px] h-[180px] bg-black" >
                <img className="w-[200px] h-[45px] " src="/images/logo_partner/6miniOrange-logo_0_edited.avif"></img>
              </div>
              <div className="flex items-center justify-center w-[300px] h-[180px] bg-black" >
                <img className="w-[244px] h-[50px] " src="/images/logo_partner/FIRST-WATCH-Logo-scaled-1-modified.png"></img>
              </div>
              <div className="flex items-center justify-center w-[300px] h-[180px] bg-black" >
                <img className="w-[145px] h-[48px] " src="/images/logo_partner/8UILA LOGO_edited.avif"></img>
              </div>
            </div>



          </div>
          <div className=" w-full flex justify-center">
            <div className="w-[90%] bg-abuMuda flex b justify-center  space-x-[1px] pl-[2px] pb-[1px] pr-[2px] pt-[1px]">
              <div className="flex items-center justify-center w-[300px] h-[180px] bg-black" >
                <img className="w-[155px] h-[89px] " src="/images/logo_partner/9169187-1513012882_edited.avif"></img>
              </div>
              <div className="flex items-center justify-center w-[300px] h-[180px] bg-black" >
                <img className="w-[244px] h-[64px] " src="/images/logo_partner/10Josys_-logo-en_edited.avif"></img>
              </div>
              <div className="flex items-center justify-center w-[300px] h-[180px] bg-black" >
                <img className="w-[275px] h-[45px] " src="/images/logo_partner/11ThreatLocker_Logo-320x202_edited.avif"></img>
              </div>
              <div className="flex items-center justify-center w-[300px] h-[180px] bg-black" >
                <img className="w-[229px] h-[32px] " src="/images/logo_partner/Zimper.png"></img>
              </div>
            </div>



          </div>


        </div>

        <div className=" flex justify-center w-full h-[140vh] bg-abu2">


          <div className="flex w-[85%] h-[100vh] bg-blue-500 border border-solid border-white  ">
            <div className="flex items-center justify-center w-[100%] h-[100vh] border-r border-b border-solid bg-black t">
              <div ref={cr} className="w-[500px] h-[500px] border-[1px] rounded-[50%] overflow-hidden absolute z-[1]">
                <canvas></canvas>
              </div>
              <div className="w-[70%] relative z-[10]">
                <div className="w-full flex justify-center">
                  <p className="text-3xl text-medium">Apakah Anda Siap</p>
                </div>
                <div className="w-full flex justify-center ">
                  <p className="text-3xl text-medium"> Mempercepat Bisnis Anda?</p>
                </div>

              </div>
            </div>
            <div className="w-[70%] bg-black flex justify-center ">
              <div className="w-[85%]  mt-[150px]">
                <div className={wix4.className}>
                  <p className="text-[16px] text-abuabu ">Di Global Asia Sinergi, kami berkomitmen untuk memberdayakan bisnis Anda dengan pengelolaan dan pengoperasian layanan TI yang efisien. Bermitralah dengan kami untuk membuka potensi sebenarnya dari organisasi Anda.  Dengan rekam jejak yang terbukti dan pendekatan yang berpusat pada klien, Global Asia Sinergi adalah mitra tepercaya untuk meningkatkan kemampuan TI bisnis Anda dan memastikan operasi yang lancar di pasar yang dinamis.</p>
                </div>
                <button className="w-[150px] h-[40px] rounded bg-customPurple text-black font-normal mt-10">Lanjut</button>
              </div>
            </div>

          </div>
        </div>

        <div className="w-full h-[160vh] flex justify-center ">
          <div className="w-[80%] ">
            <div className="mt-[50px] ">
              <p className="text-[30px] ">Klient kami</p>
            </div>
            <div className="w-full flex justify-center mt-[20px] mb-[20px] "> 
                <p className="text-[35px] ">Bekerja Dengan Yang Terbaik</p>
            </div>

            <div className="flex justify-center gap-[10px] ">
              <div className="w-[315px] bg-abu2 h-[300px] flex items-center justify-center">
                <img className="w-[200px] h-[200px] " src="/images/logo_partner/brilogo.avif"></img>
              </div>
              <div className="w-[315px] bg-abu2 h-[300px] flex items-center justify-center">
                <img  className="w-[200px] h-[200px] " src="/images/logo_partner/krakataw.avif"></img>
              </div>
              <div className="w-[315px] bg-abu2 h-[300px] flex items-center justify-center">
                <img  className="w-[200px] h-[200px] " src="/images/logo_partner/pertamino.avif"></img>
              </div>

            </div>
            <div className="flex justify-center gap-[10px] mt-[10px] ">
              <div className="w-[315px] bg-abu2 h-[300px] flex items-center justify-center">
                <img className="w-[200px] h-[200px] " src="/images/logo_partner/bankbni.avif"></img>
              </div>
              <div className="w-[315px] bg-abu2 h-[300px] flex items-center justify-center">
                <img  className="w-[200px] h-[200px] " src="/images/logo_partner/bpjs.avif"></img>
              </div>
              <div className="w-[315px] bg-abu2 h-[300px] flex items-center justify-center">
                <img  className="w-[200px] h-[200px] " src="/images/logo_partner/damanon.avif"></img>
              </div>

            </div>
          </div>
        </div>
        <div className="bg-abu2 w-full h-[100vh] ">

        </div>
      </div>
    </>
  );
}
