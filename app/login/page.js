"use client";
import { Wix_Madefor_Display } from "next/font/google"
import { use, useState } from "react"


const wix = Wix_Madefor_Display({
    weight: "600",
    subsets: ['latin'],
})
const wix4 = Wix_Madefor_Display({
    weight: "400",
    subsets: ['latin'],
})



export default function login() {
    // const [formData, setForm] = useState({
    //     email: '',
    //     password: '',
    //     role: ''
    // })

    // const [responseMessage, setResponse] = useState('')


    // const handleChange = (e) => {
    //     setForm({
    //         ...formData,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()


    //     try {
    //         const response = await fetch('/api/users', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(formData),
    //         })
    //         const result = await response.text()

    //         if (!response.ok) {
    //             throw new Error(result.message || `Error HTTP! Status: ${response.status}`);
    //         }

    //         let JsonResult;

    //         try {
    //             JsonResult = JSON.parse(result)
    //         }catch(error) {
    //             console.error('Error parsing JSON:', error);
    //             setResponse('Server returned an invalid response');
    //             return;
    //         }

    //         setResponse('User Succes Registered ')

    //     } catch (error) {
    //         console.error('Error:', error)
    //         setResponse('Failed to connect server')
    //     }
    // }


        const [n, sn] = useState('')
        const [p, sp] = useState('')
        const [e, se] = useState('')
        const [be, sbe] = useState('')
        
        const handleSubmit = (e) => {

            sbe({
                nama: '',
                password: ''
            })

            e.preventDefault();

            if(n === 'admin' && p === 'P@ssw0rd'){
                window.location.href = '/admin'

            }else{
                se('Username atau password salah')
                sbe({
                    nama:'2px solid red',
                    password: '2px solid red'
                })
            }
        }

        
    


    return (
        <>
            <div className={wix.className}>
                <div className=" w-full h-[100vh] flex justify-center ">
                    <div className="w-[27%]  flex items-center ">
                        <form onSubmit={handleSubmit}>
                            <div className="w-full h-[70vh]      ">
                                <div className="w-full h-[50px] flex items-center justify-center  ">
                                    <p className="text-[48px] ">Login</p>
                                </div>
                                <div className="w-full h-[50px] flex items-center justify-center   ">
                                    <p className="text-[18px] ">Belum menjadi anggota?<span className="text-customPurple"> Register</span></p>
                                </div>
                                <div className="w-full h-[80px] flex items-center justify-center   ">
                                    <div className="w-full">
                                        <div className="w-full">
                                            <p className="text[16px]">Nama</p>
                                        </div>
                                        <div className="">
                                            <input  id="nama" style={{ border: be.nama }} value={n} onChange={(e) => sn(e.target.value)} required className=" w-full h-[35px] bg-transparent border-b-[1px] border-abu2 focus:outline-none focus:border-b-[1px] focus:border-customPurple hover:border-b hover hover:border-customPurple "></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-[80px] flex items-center justify-center   ">
                                    <div className="w-full">
                                        <div className="w-full">
                                            <p className="text[16px]">Kata Sandi</p>
                                        </div>
                                        <div className="">
                                            <input id="password" style={{ border: be.password }} value={p} onChange={(e) => sp(e.target.value)} required  type="password"  className="w-full h-[35px] bg-transparent border-b-[1px] border-abu2 inline focus:outline-none focus:border-b-[1px] focus:border-customPurple hover:border-b hover hover:border-customPurple "></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-[80px] flex items-center justify-center  mt-[20px]  ">
                                    <button  type="submit" className="w-full h-[50px] bg-customPurple text-black">
                                        Masuk
                                    </button>
                                </div>

                                <div className="w-full h-[30px] items-center mt-[25px] gap-[20px] flex justify-center">
                                    <div className="w-[18%] h-[1px] bg-abu2  mr-auto ">

                                    </div>
                                    <div className="w-[70%]">
                                        <p className="text-[14px] ">atau mendaftar dengan</p>
                                    </div>
                                    <div className="w-[18%] h-[1px] bg-abu2 ml-auto">

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}