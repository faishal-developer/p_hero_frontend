/* eslint-disable @next/next/no-img-element */
"use client";
import useQuizList from "./useQuizList";
import style from "./list.module.css";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { paths } from "@/paths/paths";

interface DataType {
  title:string;
  id:string;
}

interface resType {data:DataType[]};
const EmployeePage = () => {
    const { data, isLoading,role } = useQuizList();
    const router=useRouter();
    const originData=(data as resType)?.data;
  return (
    <div className={style.container}>
      <h3>All Forms</h3>
      <div className={style.mainFilter}>
          {isLoading?'Loading...':(
           originData?.length<1?'No Data Found':
                originData?.map((item:DataType,i:number)=>(
                <div className={style.card} key={i}>
                  <p>{item.title}</p>
                  <Button 
                    onClick={role==='admin'?()=>{}:()=>router.push(paths.exam(item.id))}
                    className={role==='admin'?style.delete:''}
                  >
                    {role==='admin'?'DELETE':'START EXAM'}
                  </Button>
                </div>
              ))
            ) 
          }
      </div>
    </div>
  );
};

export default EmployeePage;
