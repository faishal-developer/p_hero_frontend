'use client'
import React,{useState,useEffect} from 'react';
import { IoManSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { paths } from '@/paths/paths';
import { jwtDecode } from "jwt-decode";


const SideBarItems = () => {
    const [role,setRole]=useState('user');
    
    useEffect(()=>{
        const token:string=localStorage.getItem('accessToken') || '';
        const decoded:{role:string} = jwtDecode(token as string);
        setRole(decoded.role);
    },[])

    const sidebarData = [
      {
        title: "Profile",
        icon: <IoMdSettings />,
        links: [{ label: "Profile", href: "/profile" }],
      },
      {
        title: "Quiz",
        icon: <IoManSharp />,
        links: [
          { label: "Quizes", href: paths.employees },
        ],
      },

    ];
    const sidebarDataForAdmin = [
      {
        title: "Profile",
        icon: <IoMdSettings />,
        links: [{ label: "Profile", href: "/profile" }],
      },
      {
        title: "Quiz",
        icon: <IoManSharp />,
        links: [
          { label: "Quizes", href: paths.employees },
          { label: "Add Quize", href: paths.addEmploye },
        ],
      },

    ];

    if(role==='admin'){
        return sidebarDataForAdmin;
    }else return sidebarData;
};

export default SideBarItems;