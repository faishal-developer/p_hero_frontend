'use client'
import React, { useEffect, useState } from 'react';
import style from './exam.module.css';
import useExam from './useExam.logic';
import { Quiz } from '@/types/commonTypes';
import { Button } from 'antd';

export type Iresponse={
    data:{
        title:string;
        Quiz:Quiz[]
    }
}
type Iparams={ params: { quiz_id: string } };
const StartExamPage = ({params}:Iparams) => {
    const [new_options,setNew_options]=useState<string[]>([]);

    const {isSubmitted,loading,data, isLoading,navigate,current,breakString,chooseRandomly,onRadioChange ,trackAns,SubmitHandler} = useExam({id:params.quiz_id});

    const originData=(data as Iresponse)?.data;
    const currentData=originData?.Quiz?.[current];
    useEffect(()=>{
        setNew_options(chooseRandomly(currentData?.options as string || ''));
    },[currentData?.options])
    return (
        <div className={style.container}>
            {isLoading?'loading...':(
                isSubmitted!==null?(
                    <h2>{loading?'Loading...':"Your Marks: "+ isSubmitted}</h2>
                ):(
                    <div>
                    <h3 className={style.h3}>Your Exam started</h3>
                    <h4>Exam Name: {originData.title}</h4>
                    <div>
                        <h6 className={style.h6}>Question: {currentData?.title}</h6>
                        <p>Description: {currentData?.description}</p>
                        <figure className={style.image}>
                            {currentData?.image?.trim()?
                                <img src={currentData?.image} alt='quiz'/>
                            :''}
                        </figure>
                        <div className={style.option_container}>
                            {new_options.map((item,i)=>(
                                <div className={style.options} key={i}>
                                    <input checked={item===trackAns[currentData?.title]} onChange={onRadioChange} type="radio" name={currentData?.title} id={i.toString()} value={item}/>
                                    <label className={style.radio_label} htmlFor={i.toString()}>{item}</label>
                                </div>
                            ))}
                            <div className={style.buttons}>
                                <Button disabled={current===0} onClick={()=>navigate(-1)}>Prev</Button>
                                {
                                    current===originData?.Quiz?.length-1?(
                                        <Button loading={loading} onClick={SubmitHandler}>Submit</Button>
                                    ):(
                                        <Button disabled={current===originData?.Quiz?.length-1} onClick={()=>navigate(1)}>Next</Button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                )
            )}
        </div>
    );
};

export default React.memo(StartExamPage);