'use client'

import UpdateCategory from "@/components/category/UpdateCategory";

const page = ({ params }: { params: { categoryId: string } }) => {
    return <>
        <UpdateCategory categoryId={params.categoryId} />
    </>;
};

export default page;