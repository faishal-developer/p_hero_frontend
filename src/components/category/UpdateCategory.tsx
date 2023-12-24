import { useGetCategoryQuery } from '@/redux/category/categoryApi';
import React, { useState } from 'react'
import CVBreadcrumb from './partial/CVBreadcrumb';
import { Card, Row, Form, Button } from 'antd';
import UpdateForm from './partial/UpdateForm';

const UpdateCategory = ({ categoryId }: any) => {

    /*//** RTK calling of category data getting */
    const { data: categoryData, isLoading: catQueryLoading }: { data?: any; isLoading: boolean } = useGetCategoryQuery({ id: categoryId });

    // loading
    if (catQueryLoading) return <>Loading...</>

    return (
        <>
            <CVBreadcrumb link="/category" title='View Categories' />

            <Card title="Update Category" bordered style={{ marginTop: '20px' }}>
                <UpdateForm data={categoryData?.data} categoryId={categoryId} />
            </Card >
        </>
    )
}

export default UpdateCategory