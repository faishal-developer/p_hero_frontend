'use client'
import React,{ReactElement, useEffect, useState} from 'react';
import style from '../dashboard/static/dashboard.module.css';

type IProps={
    childrens:{body:ReactElement,label:string}[];
    labels:string[];
}
const Tab = (props:IProps) => {
    const {childrens,labels}=props;
    const [cLabel,setLabel] = useState(labels[0]);
    
    return (
        <div>
            <div className={style.labels}>
                {
                    labels.map((item:string)=>(
                        <span 
                            onClick={()=>setLabel(item)} 
                            key={item} 
                            className={`${style.tab_buttons} ${cLabel===item && style.active}` }
                        >
                          {item}
                        </span>
                    ))
                }
            </div>
            <div>
                {
                    childrens?.map(item=>(
                        item.label===cLabel && (
                            <>
                                {item.body}
                            </>
                        )
                    ))
                }
            </div>
        </div>
    );
};

export default Tab;