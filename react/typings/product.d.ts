export type Product = {
    productName: string;
    productId: string;
    items: {
        itemId: string
        images: {
            imageId: string;
            imageUrl: string;
        }[]
        sellers: {
            sellerId: string;
            commertialOffer: { Price: number };
        }[]
    }[]
};