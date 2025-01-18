import getBanners from '@/actions/get-banner';
import getProducts from '@/actions/get-products';
import Banner from '@/components/banner';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const banner = await getBanners('646c8c42-0a3f-41ce-b3b2-b57684ed85a2');

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Banner data={banner} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Top Items" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
