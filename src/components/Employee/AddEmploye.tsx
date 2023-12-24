'use client'
import { Button, Input, Select } from "antd"
import style from "./AddEmploye.module.css"
import ueAddEmploye from "./AddEmploye.logic"


const AddEmploye = () => {
    const {trackEnterKey,formData,quiz,setformDataTitle,setQuizData,addNewOption,deleteOption,addQuiz_into_form,quizError,delete_form_quiz,saveToDatabase,isLoading} = ueAddEmploye();

    return (
        <div className={style.container}>
            <form onSubmit={addQuiz_into_form} className={style.form}>
                <h2 className={style.h2}>Create a new Form</h2>
                <div className={style.form_title}>
                    <label htmlFor="form_title">Form Title</label>
                    <Input value={formData.title} onChange={setformDataTitle} required={true} className={style.input} id="form_title" placeholder="type form title here" type="text" name="title"/>
                </div>

                <div className={style.question}>
                    <h4 className={style.h4}>Add New Question</h4>
                    <div className={style.flex}>
                        <div>
                            <label htmlFor="image">Image url</label>
                            <Input value={quiz.image} onChange={setQuizData} className={style.input} id="image" placeholder="type image here" type="text" name="image"/>
                        </div>
                        <div className={style.question}>
                            <label htmlFor="title">Question</label>
                            <Input value={quiz.title} onChange={setQuizData} required={true} className={style.input} id="title" placeholder="type question here" type="text" name="title"/>
                        </div>
                    </div>
                     <div className={style.flex}>
                        <div>
                            <label htmlFor="description">Question description</label>
                            <Input value={quiz.description} onChange={setQuizData} required={true} className={style.input} id="description" placeholder="type description here" type="text" name="description"/>
                        </div>
                        <div>
                            <label htmlFor="marks">Question Marks</label>
                            <Input value={quiz.marks} onChange={setQuizData} required={true} className={style.input} id="marks" placeholder="type marks here" type="number" name="marks"/>
                        </div>
                    </div>
                    <div className={style.flex}>
                        <div>
                            <label htmlFor="option">Option</label>
                            <Input 
                                value={quiz.option} 
                                onKeyDown={trackEnterKey} 
                                onChange={setQuizData} 
                                required={(quiz.options as string[]).length<=1} className={style.input} id="option" placeholder="type option and press enter" type="text" name="option"
                            />
                        </div>
                        <div className={style.m_15}><Button onClick={addNewOption}>Add New option</Button></div>
                    </div>
                    <div>{
                        (quiz.options as string[]).map((item:string,i:number)=>(
                            <div key={i} className={style.input_box_radio}>
                                <div>
                                    <input onChange={setQuizData} type="radio" name={'ans'} id={item} value={item}/>
                                    <label className={style.radio_label} htmlFor={item}>{item}</label>
                                </div>
                                <div onClick={()=>deleteOption(i)} className={style.delete}>delete</div>
                            </div>
                        ))
                    }</div>
                    {quizError?<p className={style.danger}>{quizError}</p>:''}
                    <div><Button htmlType="submit">Add this questions</Button></div>
                </div>
            </form>
            <div className={style.questions}>
                <h3 className={style.h3}>{
                    formData.quizes.length<1?"No question added":"Recently added question"
                }</h3>
                {formData.quizes.map((item,index)=>(
                    <div className={style.question} key={index}>
                        <h4 className={style.question_heading}>
                            {index+1}. Question: {item.title}
                            <span onClick={()=>delete_form_quiz(index)} className={style.delete}>delete</span>
                        </h4>
                        <p>Description:{item.description}</p>
                        <figure>
                            {item.image.trim() && <img className={style.image} src={item.image} alt="quiestion_img"/>}
                        </figure>

                        <div>{
                        (item.options as string[]).map((content:string,i:number)=>(
                            <div key={i} className={style.input_box_radio}>
                                <div>
                                    <input checked={content===item.ans} onChange={setQuizData} type="radio" name={index.toString()} id={content} value={content}/>
                                    <label className={style.radio_label} htmlFor={content}>{content}</label>
                                </div>
                            </div>
                        ))
                    }</div>

                    </div>
                ))}

                <div>
                    {
                        formData.quizes.length>=1?(
                            <Button loading={isLoading} onClick={saveToDatabase}>Save in database</Button>
                        ):''
                    }
                </div>
            </div>
        </div>
    )
}

export default AddEmploye