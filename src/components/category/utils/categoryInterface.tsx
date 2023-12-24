export type ICategoryStatus = 'active' | 'inactive';

export type ICategory = {
    _id?: string;
    id?: string;
    name: string;
    desc?: string;
    status: ICategoryStatus;
};