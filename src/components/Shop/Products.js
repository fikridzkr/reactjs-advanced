import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'Clean Code',
    description: 'Code Clean For developers',
  },
  {
    id: 'p2',
    price: 5,
    title: 'Javascript Dasar',
    description: 'Javascript Dasar For developers',
  },
  {
    id: 'p3',
    price: 4,
    title: 'PHP Dasar',
    description: 'PHP Dasar For developers',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
