import { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import listIcon from "../../assets/Frame.png";
import gridIconActive from "../../assets/Frame (1).png";
import listIconActive from "../../assets/Frame (2).png";
import gridIcon from "../../assets/Frame (3).png";

const Wishlist: FC = () => {
  const data = useSelector((state: any) => state.wishlistSlice.items);
  const [viewMode, setViewMode] = useState<"list" | "grid">("grid");

  useEffect(() => {
    const savedViewMode = localStorage.getItem("viewMode");
    if (savedViewMode) {
      setViewMode(savedViewMode as "list" | "grid");
    }
  }, []);

  const handleViewModeChange = (mode: "list" | "grid") => {
    setViewMode(mode);
    localStorage.setItem("viewMode", mode);
  };

  return (
    <div className="bg-[#F6F6F6] pb-20 relative z-10">
      <div className="container mx-auto pl-[75px] pt-[68px]">
        <div className="flex justify-between items-center mb-[54px]">
          <div className="flex items-center gap-[21px]">
            <p className="text-[#161A1D] font-medium text-[30px]">
              Мой список желаемого
            </p>
          </div>
          <div className="flex items-center gap-[5px] pr-[75px]">
            <button onClick={() => handleViewModeChange("list")}>
              <img
                src={viewMode === "list" ? listIconActive : listIcon}
                alt="List view"
              />
            </button>
            <button onClick={() => handleViewModeChange("grid")}>
              <img
                src={viewMode === "grid" ? gridIconActive : gridIcon}
                alt="Grid view"
              />
            </button>
          </div>
        </div>

        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-3 gap-y-[52px]"
              : "flex flex-col gap-y-4 pr-[75px]"
          }
        >
          {data
            ?.filter((item: any) => typeof item === "object")
            .map((item: any) => (
              <ProductCard
                key={item.id}
                product={item}
                viewMode={viewMode}
                isInWishlist={true}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;