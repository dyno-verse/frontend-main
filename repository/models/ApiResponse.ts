export interface IBusinessInfo {
    id: string;
    name: string;
    slug: string;
    tag: string;
    primaryColor: string;
    phoneNumber: string;
    address: string;
    city: string;
    country: string;
    logoUrl: string;
    bannerUrl: string,
    createdAt: string;
    updatedAt: string;
    branches: Branch[];
}

interface Branch {
    id: string;
    name: string;
    address: string;
    city: string;
    country: string;
    phoneNumber: string;
    businessId: string;
    createdAt: string;
    updatedAt: string;
    menu: Menu[];
}

interface Menu {
    id: string;
}

export interface IMenuCategory {
    id: string
    name: string
    description: string
}

export interface IMenu {
    name: string
    description: string
    price: number
    ingredients: string[]
    imageUrl: string
}

export interface IMenuDetail {
    id: string;
    name: string;
    description: string;
    branchId: string;
    createdAt: string;
    updatedAt: string;
    items: IItem[];
    categories: Category[];
}

interface Category {
    id: string;
    name: string;
    description: string;
    parentId?: any;
    createdAt: string;
    updatedAt: string;
    items: Item2[];
    children: any[];
}

interface Item2 {
    id: string;
    name: string;
    description: string;
    price: number;
    ingredients: string[];
    createdAt: string;
    updatedAt: string;
}

export interface IItem {
    id: string;
    name: string;
    description: string;
    color?: string;
    price: number;
    quantity?: number;
    imageUrl?: string;
    ingredients: string[];
}

export interface IOrders {
    id: string
    branchId: string
    businessId: string
    orderItems: OrderItem[]
    paymentType: any
    paymentStatus: string
    kitchenStatus: string
    orderNumber: number
    kitchenNote: string
    tableNumber: number
    subTotal: number
    feeItems: any[]
    total: number
}

export interface OrderItem {
    item: IItem
    quantity: number
    total: number
}

export interface IOrder {
    businessId: string
    branchId: string
    kitchenNote: string
    tableNumber: number
    serviceType: string
    orderItems: IOrderItems[]
}

interface IOrderItems {
    itemId: string
    quantity: number
}
