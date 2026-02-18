"use client"
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [keyword, setKeyword] =useState("")
  const router = useRouter()
    const menu = [
       {
            name:"About",
            url:"/about"
        }, 
        {
            name: "Sign In",
            url: "/login"
        }, 
    ]

    const searchFunc = (e) => {
      if(e.key === "Enter" && keyword.length >=3){
        router.push(`/search?keyword=${keyword}`);



      }
    }
  return (
    <div className="flex items-center gap-7 p-5">
     <div className="bg-amber-600 rounded-lg p-3 text-xl font-bold">MovieApp</div>
     <div className="flex flex-1 items-center gap-3 rounded-lg p-3 border border-gray-300">
        <input onKeyDown={searchFunc} onChange={e => setKeyword(e.target.value)}
        className="outline-none flex-1 bg-transparent"
     placeholder="Arama Yapınız!!!"
      type="text" />
      <BiSearch size={25}/>
      </div>
      <ThemeComp />
      {menu.map((mn,i)=>(
    <MenuItem mn={mn}key={i} />
          ))}
    </div>
  )
}

export default Header
