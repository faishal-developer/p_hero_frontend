'use client'
import React, { useState } from 'react'
import CVBreadcrumb from './partial/CVBreadcrumb'
import { useDeleteCategoryMutation, useGetAllCategoriesQuery } from '@/redux/category/categoryApi';
import Table, { ColumnsType } from 'antd/es/table';
import { ICategory } from './utils/categoryInterface';
import { ENUM_CATEGORY_STATUS } from './utils/categoryConstant';
import { Button, Card, Col, Modal, Row, Space, Spin, Typography } from 'antd';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useRouter } from "next/navigation";

const { Text } = Typography;
const { confirm } = Modal;

const ViewCategory = () => {

    // global
    const router = useRouter();

    // states
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentLimit, setCurrentLimit] = useState<number>(10);
    const [currentSortOrder, setCurrentSortOrder] = useState<"desc" | "asc">("asc");

    /*//** RTK calling of category data getting */
    const { data: categoryData, isLoading }: { data?: any; isLoading: boolean } = useGetAllCategoriesQuery({
        limit: currentLimit,
        page: currentPage,
        // product_status: "active",
        sortOrder: currentSortOrder,
    });
    const [deleteCategory, { data: deleteResponse, error: deleteError, isLoading: deleteIsLoading }] = useDeleteCategoryMutation();

    // data columns
    const columns: ColumnsType<ICategory> = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Status",
            key: "status",
            dataIndex: "status",
            render: (_, { status }) => (
                <Text
                    className={
                        status === ENUM_CATEGORY_STATUS.INACTIVE
                            ? "bg-warning"
                            : status === ENUM_CATEGORY_STATUS.ACTIVE
                                ? "bg-success"
                                : "bg-error"
                    }
                    style={{
                        textAlign: "center",
                        padding: "4px 15px",
                        borderRadius: "25px",
                        color: "white",
                        textTransform: "capitalize",
                    }}
                >
                    {status}
                </Text>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (_, { _id }) => (
                <Space size="middle">
                    <Button
                        type="primary"
                        icon={<EditOutlined />}
                        onClick={() => router.push(`/category/update/${_id}`)}
                    >
                        Edit
                    </Button>
                    <Button
                        icon={<DeleteOutlined />}
                        onClick={() => showConfirm(_id)}
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    // **delete action
    const handleDeleteCategory = (_id: string | undefined) => {
        Modal.destroyAll();
        deleteCategory(_id);
    };

    // confirm modal
    const showConfirm = (_id: string | undefined) => {
        confirm({
            icon: <ExclamationCircleOutlined />,
            content: (
                <div>
                    <Button onClick={() => handleDeleteCategory(_id)}>
                        Delete Category
                    </Button>
                    <p>Are you sure to delete this category?</p>
                </div>
            ),
            centered: true,
            okButtonProps: { style: { display: "none" } }, // Hide the OK button
            onCancel() {
                console.log("Cancel");
            },
        });
    };


    return (
        <>
            <CVBreadcrumb link="category/add-category" title='Create Category' />

            <Row gutter={{ xs: 8, sm: 16, md: 24 }} style={{ marginTop: '20px' }}>
                <Col className="gutter-row" span={24}>
                    <Card bordered>

                        {/* //**product table */}
                        <Table
                            columns={columns}
                            dataSource={categoryData?.data}
                            rowKey="_id"
                            scroll={{ x: true }}
                            pagination={{
                                current: currentPage,
                                pageSize: currentLimit,
                                total: categoryData?.meta?.total,
                                onChange: (page, pageSize) => {
                                    setCurrentPage(page);
                                    setCurrentLimit(pageSize);
                                },
                            }}
                            loading={isLoading && { indicator: <Spin /> }}
                        />
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default ViewCategory