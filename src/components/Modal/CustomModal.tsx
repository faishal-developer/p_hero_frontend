import React, { useState } from 'react';
import { Button, Modal } from 'antd';
type Iprops={
    isModalOpen:boolean;
    setIsModalOpen:()=>{};
    showModal:()=>{};
    handleOk:()=>{};
    handleCancel:()=>{};
    title:string | React.ReactElement;
    children:string | React.ReactElement;

}
const CustomModal = (props:Iprops) => {
    const {isModalOpen,setIsModalOpen,showModal,handleOk,handleCancel,children,title}=props;
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleOk = () => {
//     setIsModalOpen(false);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

  return (
    <>
      <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {children}
      </Modal>
    </>
  );
};

export default CustomModal;