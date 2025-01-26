'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, use } from "react";
import { Inspiration, Nunito_Sans, Padauk, Poppins, Raleway, Roboto, Wix_Madefor_Display } from 'next/font/google'
import { userAgent } from "next/server";
import { useRouter } from "next/router";




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

export default function AdminPage() {

    // useEffect(() => {
    //   setIsClient(true);
    // }, []);
    // const router = useRouter();

    // const goto =  () => {
    //   router.push('/login')
    // }


    //   const cr = useRef(null)


    //   const [c500, sc500] = useState(0)
    //   const [c100, sc100] = useState(0)
    //   const [v, sv] = useState(false)
    //   const r = useRef(null)

    //   const [s, sx] = useState(0)

    //   const [isOpen, setIsOpen] = useState(false);
    //   const dropdownRef = useRef(null);



    //   useEffect(() => {
    //     if (!cr.current) return

    //     const c = cr.current
    //     const p = []
    //     const np = 50
    //     const ps = 3
    //     const cz = c.offsetWidth;

    //     const radius = c.offsetWidth / 2
    //     const cenY = radius;
    //     const cenX = radius;


    //     function createParticle() {
    //       const p1 = document.createElement('div')
    //       p1.style.width = `${ps}px`
    //       p1.style.height = `${ps}px`
    //       p1.style.backgroundColor = `rgba(230, 199, 235, 1)`
    //       p1.style.borderRadius = "50%"
    //       p1.style.position = "absolute"

    //       let x, y, distance;

    //       do {
    //         x = Math.random() * c.offsetWidth;
    //         y = Math.random() * c.offsetHeight

    //         distance = Math.sqrt(Math.pow(x - cenX, 2) + Math.pow(y - cenY, 2))

    //       } while (distance + ps / 2 > radius)



    //       p1.style.top = `${x - ps / 2}px`
    //       p1.style.left = `${y - ps / 2}px`

    //       c.appendChild(p1)
    //       p.push({
    //         element: p1,
    //         velocityX: (Math.random() - .5) * 2,
    //         velocityY: (Math.random() - .5) * 2
    //       })
    //     }

    //     for (let i = 0; i < np; i++) {
    //       createParticle()
    //     }

    //     function animateParticle() {
    //       p.forEach((p1) => {
    //         const r = c.getBoundingClientRect()
    //         const el = p1.element
    //         const ct = parseFloat(el.style.top) + ps / 2
    //         const cl = parseFloat(el.style.left) + ps / 2

    //         let nt = ct + p1.velocityY
    //         let nl = cl + p1.velocityX

    //         const distance = Math.sqrt(Math.pow(nl - cenX, 2) + Math.pow(nt - cenY, 2));

    //         if (distance + ps / 2 > radius) {
    //           const angle = Math.atan2(nt - cenY, nl - cenX)
    //           p1.velocityX = -Math.cos(angle) * Math.abs(p1.velocityX)
    //           p1.velocityY = -Math.sin(angle) * Math.abs(p1.velocityY)
    //         } else {
    //           el.style.top = `${nt - ps / 2}px`
    //           el.style.left = `${nl - ps / 2}px`
    //         }

    //         // if(nt <= 0 || nt + ps >= r.height){
    //         //   p1.velocityY *= -1
    //         // }

    //         // if(nl <= 0 || nl + ps >= r.width) {
    //         //   p1.velocityX *= -1
    //         // }

    //       })

    //       requestAnimationFrame(animateParticle);
    //     }

    //     animateParticle()

    //     return () => {
    //       p.forEach((p1) => p1.element.remove())
    //     }
    //   }, [])

    //   useEffect(() => {
    //     const ob = new IntersectionObserver(
    //       ([entry]) => {
    //         if (entry.isIntersecting) {
    //           sv(true)
    //         }
    //       },
    //       { threshold: .5 }
    //     );

    //     if (r.current) {
    //       ob.observe(r.current)
    //     }

    //     return () => {
    //       if (r.current) {
    //         ob.unobserve(r.current)
    //       }
    //     }
    //   }, [])

    //   useEffect(() => {
    //     if (v) {
    //       if (c500 < 500) {
    //         let s = c500
    //         const d = 1000
    //         const i = Math.ceil(500 / (d / 16))

    //         const a = () => {
    //           s += i
    //           if (s > 500) s = 500;
    //           sc500(s)

    //           if (s < 500) {
    //             requestAnimationFrame(a)
    //           }
    //         };

    //         a();
    //       }

    //       if (c100 < 100) {
    //         let s = c100
    //         const d = 1000
    //         const i = Math.ceil(100 / (d / 16))

    //         const a = () => {
    //           s += i
    //           if (s > 100) s = 100;
    //           sc100(s)

    //           if (s < 100) {
    //             requestAnimationFrame(a)
    //           }
    //         };
    //         a();
    //       }
    //     }
    //   }, [v])




    //   useEffect(() => {
    //     const handleClickOutside = (event) => {
    //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //         setIsOpen(false);
    //       }
    //     };

    //     document.addEventListener("click", handleClickOutside);

    //     return () => {
    //       document.removeEventListener("click", handleClickOutside);
    //     };
    //   }, []);


    //   useEffect(() => {
    //     const hs = () => {
    //       sx(window.scrollY * .1)
    //     }

    //     window.addEventListener("scroll", hs);
    //     return () => window.removeEventListener("scroll", hs)
    //   }, [])

    //   useEffect(() => {
    //     const s = () => {
    //       const z = document.getElementById('zoom-bg');
    //       let sp = window.scrollY;

    //       if (sp <= window.innerHeight) {
    //         z.style.backgroundPosition = `center ${sp / 5}px `;
    //         z.style.backgroundSize = "100%";

    //       } else if (sp > window.innerHeight && sp <= 2 * window.innerHeight) {
    //         z.style.backgroundPosition = "center";
    //         z.style.backgroundSize = `${100 + (sp - window.innerHeight) / 45}%`;
    //       }

    //     };

    //     window.addEventListener("scroll", s);


    //     return () => {
    //       window.removeEventListener("scroll", s);
    //     };
    //   }, []);

    // function createnews() {
    //     window.location.href = '/admin/create-news'
    // }

    return (
        <>
            <nav className="bg-black shadow-md p-5 fixed z-[1000] top-0 left-0 w-full">
                <ul className="flex space-x-10">
                    <Image className="ml-16 w-[150px] h-16" src="/images/Logo_Gas.png" alt="Logo Gas" width={150} height={64} />

                    <div className="flex space-x-10 items-center ">


                        <li>
                            <Link href="/" className="ml-[620px] text-white hover:text-customPurple text-sm transition duration-500">Team</Link>
                        </li>
                        <li>
                            <Link href="/" className="text-white hover:text-customPurple text-sm transition duration-500">Service</Link>
                        </li>
                        <li>
                            <Link href="/" className="text-white hover:text-customPurple text-sm transition duration-500">News</Link>
                        </li>

                        <div className="flex items-center">
                            <img className="w-6 h-6 bg-customPurple rounded-3xl" src="/images/profile.png" alt="Profile" />
                            <div className="ml-5 text-customPurple text-base hover:text-purple-300 transition duration-500">Admin</div>
                        </div>


                    </div>
                </ul>
            </nav>


            <div className={wix.className}>
                <div className="w-full h-[100vh] mt-[150px] ">

                    {/* Remove Here MF */}
                    <Link href={'/admin/create-news'}>
                        <div className="w-full h-[50px] ">
                            <button className="ml-[120px] text-abuabu border border-[1px]  bg-black w-[200px] h-[50px] rounded-[5px] hover:bg-customPurple hover:text-black hover:border-none " style={{ transition: '.5s' }}>Buat Berita</button>
                        </div>
                    </Link>
                    {/* Remove Here MF */}


                    <div className="  w-full h-[100px] flex justify-center items-center ">
                        <p className="text-white text-[56px] ">Berita Terbaru</p>
                    </div>

                    {/* Berita */}
                    <div className="mt-[50px] flex items-center justify-center  w-full min-h-[250px]  ">
                        <div className="w-[80%] h-[250px] border-b-[1px] flex  border-abuabu ">
                            <div className="  w-[250px] h-[250px]  ">
                                <div className=" ">
                                    <div>
                                        <p className="text-[14px] text-abuabu ">14 Aug 2024</p>
                                    </div>
                                    <div>
                                        <p className="text-[26px] ">PRESS RELEASE - 14 AGUSTUS 2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[350px] ml-[50px] h-[250px] ">
                                <div>
                                    <p className="mt-[25px] text-abuabu text-[16px] ">Global Asia Sinergi Hosts Ngobar Webinar Series on 'Trifecta of Digital Resilience'</p>
                                </div>
                                <div className="mt-[80px]">
                                    <Link href={'/'} className="mt-[30px] text-[14px] text-customPurple  ">Read More</Link>
                                </div>
                            </div>

                            <div className="ml-[20px] flex justify-center w-[350px] h-[250px]  ">
                                <img src="/images/webinar.jpg" alt="Profile" className="mt-[30px]  w-[265px] h-[137px] bg-white"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
