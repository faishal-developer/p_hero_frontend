"use client";

import { Space, Input, Table, Tag, Select, DatePicker, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { DatePickerProps } from "antd";
import { CiSearch } from "react-icons/ci";

import style from "./order.module.css";
import { productItemSortPage } from "@/components/products/utils/productData";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Id",
    dataIndex: "name",
    key: "name",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => <Button type="primary">Details</Button>,
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const Orders = () => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className={style.container}>
      <div className={style.mainContent}>
        <div className={style.mainFilter}>
          <div className={style.filterOne}>
            <Input
              size="middle"
              placeholder="Search Orders"
              suffix={<CiSearch />}
              allowClear
              style={{ width: "100%" }}
            />
          </div>
          <div className={style.filterTwo}>
            <Select
              placeholder="Status"
              allowClear
              options={[
                { value: "active", label: "Active" },
                { value: "disabled", label: "Disabled" },
              ]}
            />
            <Select
              // onChange={handleStatusChange}
              style={{ width: "100px", textTransform: "capitalize" }}
              options={productItemSortPage}
              defaultValue={productItemSortPage[0]}
              // defaultValue={selectedStatus}
            />
          </div>
        </div>

        <Table columns={columns} dataSource={data} />
      </div>

      <div className={style.sideContent}>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>Filter by</p>
        <div className={style.sideItems}>
          <div>
            <p style={{ fontSize: 12 }}>Order Id</p>
            <Input placeholder="Type Here" size="middle" />
          </div>
          <div>
            <p style={{ fontSize: 12 }}>Customer</p>
            <Input placeholder="Type Here" size="middle" />
          </div>
          <div>
            <p style={{ fontSize: 12 }}>Order Status</p>
            <Select
              placeholder="Status"
              allowClear
              options={[
                { value: "ordered", label: "Ordered" },
                { value: "rejected", label: "Ordered" },
              ]}
              style={{ marginTop: 10 }}
            />
          </div>
          <div>
            <p style={{ fontSize: 12 }}>Date</p>
            <DatePicker
              onChange={onChange}
              picker="month"
              style={{ marginTop: 10 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
