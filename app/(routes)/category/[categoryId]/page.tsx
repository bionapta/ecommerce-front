import getCategory from '@/actions/get-category';
import getProducts from '@/actions/get-products';
import Banner from '@/components/banner';
import Container from '@/components/ui/container';
import NoResults from '@/components/ui/no-results';
import ProductCard from '@/components/ui/product-card';
import { Product } from '@/types';

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const categoryId = params.categoryId;

  // Mengambil data produk dan kategori
  const products: Product[] = await getProducts({ categoryId });
  const category = await getCategory(categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Banner data={category.banner} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            {products.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((item: Product) => (
                <ProductCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
