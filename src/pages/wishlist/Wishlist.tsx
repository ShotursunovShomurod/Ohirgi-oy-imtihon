import { FC } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";

const Wishlist: FC = () => {
  const data = useSelector((state: any) => state.wishlistSlice.items);

  return (
    <div>
      {data
        ?.filter((item: any) => typeof item === "object")
        .map((item: any) => (
          <ProductCard
            product={item}
            isInWishlist={true}
            key={item.id}
            viewMode="list"
          />
        ))}
    </div>
  );
};

export default Wishlist;
