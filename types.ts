export interface Banner {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  banner: Banner;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

type SegmentParams<T extends Record<string, any> = any> = {
  [K in keyof T]: T[K] extends string ? string | string[] | undefined : never;
};

export interface PageProps {
  params?: SegmentParams;
  searchParams?: any;
}
