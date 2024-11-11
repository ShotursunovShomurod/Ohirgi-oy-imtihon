import { FormEvent, useState } from "react";
import { useCreateProductMutation } from "../../redux/api/product-api";
import Eye from "../../assets/Rectangle 82.png";

interface ItemData {
  name: string;
  cost: number;
  previousCost: number;
  description: string;
  score: number;
  type: string;
  shade: string;
  images: string[];
}

const CreateProduct = () => {
  const [submitProduct, { isLoading }] = useCreateProductMutation();
  const [message, setMessage] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState("Продажа");

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [previousCost, setPreviousCost] = useState("");
  const [description, setDescription] = useState("");
  const [score, setScore] = useState("");
  const [type, setType] = useState("");
  const [shade, setShade] = useState("");
  const [images, setImages] = useState("");

  const handleProductSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const productData: ItemData = {
      name,
      cost: parseFloat(cost),
      previousCost: parseFloat(previousCost),
      description,
      score: parseFloat(score),
      type,
      shade,
      images: images.split("\n").filter(Boolean),
    };

    try {
      await submitProduct(productData).unwrap();
      setMessage("Product successfully added!");

      setName("");
      setCost("");
      setPreviousCost("");
      setDescription("");
      setScore("");
      setType("");
      setShade("");
      setImages("");
    } catch (err) {
      console.error("Error adding product:", err);
    } finally {
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <div className="bg-[#F3F3F3] pt-[49px] pb-[86px]">
      <h2 className="text-[50px] text-center font-bold mb-10">
        Разместить объявление
      </h2>
      {message && (
        <div className="mb-4 p-3 text-green-700 bg-green-100 rounded">
          {message}
        </div>
      )}

      <div className="flex justify-center space-x-3">
        {["Продажа", "Аренда", "Сожительство"].map((tab) => (
          <button
            key={tab}
            className={`w-[250px] h-[144px] rounded-[15px] transition-all duration-300 transform ${
              selectedTab === tab
                ? "text-[#FCA311] bg-white scale-110"
                : "bg-[#EEEEEE] text-gray-500 scale-100"
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            <p className="text-lg font-bold">{tab}</p>
            <p>
              {tab === "Продажа"
                ? "Разместить объявление о продаже"
                : tab === "Аренда"
                ? "Разместить объявление об аренде"
                : "Разместить объявление о сожительстве"}
            </p>
          </button>
        ))}
      </div>

      <div className="bg-white p-6 mx-auto max-w-[1275px] rounded-lg shadow-lg">
        <form className="flex flex-wrap gap-x-5">
          <div className="flex flex-col w-[48%] space-y-[40px]">
            <select
              required
              className="w-[330px] h-[45px] py-2 rounded-[5px] outline-[#FCA311] pl-2 bg-[#F3F3F3]"
              name="type"
              value={type}
            >
              <option value="">В доме имеется</option>
              <option value="mens">Elevator</option>
              <option value="womens">Parking</option>
              <option value="girls">Security</option>
              <option value="kids">Playground</option>
            </select>
            <select
              required
              className="w-[330px] h-[45px] py-2 rounded-[5px] outline-[#FCA311] pl-2 bg-[#F3F3F3]"
              name="type"
              value={type}
            >
              <option value="">В доме имеется</option>
              <option value="mens">Elevator</option>
              <option value="womens">Parking</option>
              <option value="girls">Security</option>
              <option value="kids">Playground</option>
            </select>
            <select
              required
              className="w-[330px] h-[45px] py-2 rounded-[5px] outline-[#FCA311] pl-2 bg-[#F3F3F3]"
              name="type"
              value={type}
            >
              <option value="">В доме имеется</option>
              <option value="mens">Elevator</option>
              <option value="womens">Parking</option>
              <option value="girls">Security</option>
              <option value="kids">Playground</option>
            </select>
            <select
              required
              className="w-[330px] h-[45px] py-2 rounded-[5px] outline-[#FCA311] pl-2 bg-[#F3F3F3]"
              name="type"
              value={type}
            >
              <option value="">В доме имеется</option>
              <option value="mens">Elevator</option>
              <option value="womens">Parking</option>
              <option value="girls">Security</option>
              <option value="kids">Playground</option>
            </select>
            <select
              required
              className="w-[330px] h-[45px] py-2 rounded-[5px] outline-[#FCA311] pl-2 bg-[#F3F3F3]"
              name="type"
              value={type}
            >
              <option value="">В доме имеется</option>
              <option value="mens">Elevator</option>
              <option value="womens">Parking</option>
              <option value="girls">Security</option>
              <option value="kids">Playground</option>
            </select>
            <select
              required
              className="w-[330px] h-[45px] py-2 rounded-[5px] outline-[#FCA311] pl-2 bg-[#F3F3F3]"
              name="type"
              value={type}
            >
              <option value="">В доме имеется</option>
              <option value="mens">Elevator</option>
              <option value="womens">Parking</option>
              <option value="girls">Security</option>
              <option value="kids">Playground</option>
            </select>
            <select
              required
              className="w-[330px] h-[45px] py-2 rounded-[5px] outline-[#FCA311] pl-2 bg-[#F3F3F3]"
              name="type"
              value={type}
            >
              <option value="">В доме имеется</option>
              <option value="mens">Elevator</option>
              <option value="womens">Parking</option>
              <option value="girls">Security</option>
              <option value="kids">Playground</option>
            </select>
          </div>

          <div className="flex flex-col w-[48%] space-y-5">
            <div className="flex w-[440px] rounded-[5px] bg-[#F3F3F3]">
              <input
                required
                className="w-[400px] pl-[10px] outline-none h-[45px] bg-inherit"
                type="number"
                name="price"
                placeholder="Description"
                value={description}
              />
              <hr className="border border-[#999999]" />
              <button>UZS</button>
            </div>
            <div className="flex flex-col gap-[31px]">
              <div>
                <p className="text-[#999]">Обмен</p>
                <div className="flex gap-[34px]">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="commission"
                      className="cursor-pointer"
                    />
                    <label>Да</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="commission"
                      className="cursor-pointer"
                    />
                    <label>Нет</label>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[#999]">Рассрочка</p>
                <div className="flex gap-[34px]">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="commission"
                      className="cursor-pointer"
                    />
                    <label>Да</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="commission"
                      className="cursor-pointer"
                    />
                    <label>Нет</label>
                  </div>
                </div>
              </div>
              <input
                required
                className="w-[440px] h-[45px] py-2 rounded-[5px] outline-[#FCA311] pl-2 bg-[#F3F3F3]"
                type="text"
                name="description"
                placeholder="Description"
                value={description}
              />
            </div>
          </div>
        </form>
        <hr className="mt-[30px] mb-[20px]" />
        <p className="text-[30px] font-bold mb-6">Create Post</p>
        <form className="flex flex-wrap gap-x-5" onSubmit={handleProductSubmit}>
          <div className="flex flex-col w-[48%] space-y-5">
            <input
              required
              className="w-[330px] h-[45px] py-2 rounded-[5px] outline-[#FCA311] pl-2 bg-[#F3F3F3]"
              type="text"
              name="name"
              placeholder="Title Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              className="w-[330px] h-[45px] py-2 rounded-[5px] outline-[#FCA311] pl-2 bg-[#F3F3F3]"
              type="number"
              name="cost"
              placeholder="Title Price"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
            <input
              required
              className="w-[330px] h-[45px] py-2 rounded-[5px] outline-[#FCA311] pl-2 bg-[#F3F3F3]"
              type="number"
              name="previousCost"
              placeholder="Высота потолка ()"
              value={previousCost}
              onChange={(e) => setPreviousCost(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-[48%] space-y-5 mb-[99px]">
            <input
              required
              className="w-[440px] h-[45px] py-2 rounded-[5px] outline-[#FCA311] pl-2 bg-[#F3F3F3]"
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <select
              required
              className="w-[440px] h-[45px] py-2 rounded-[5px] outline-[#FCA311] pl-2 bg-[#F3F3F3]"
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">В доме имеется</option>
              <option value="mens">Elevator</option>
              <option value="womens">Parking</option>
              <option value="girls">Security</option>
              <option value="kids">Playground</option>
            </select>
            <select
              required
              className="w-[440px] h-[45px] py-2 rounded-[5px] outline-[#FCA311] pl-2 bg-[#F3F3F3]"
              name="shade"
              value={shade}
              onChange={(e) => setShade(e.target.value)}
            >
              <option value="">Прочие удобства</option>
              <option value="white">Gym</option>
              <option value="black">Swimming Pool</option>
              <option value="red">Laundry</option>
            </select>
          </div>

          <div className="w-full pr-[88px] flex justify-between mt-7 ">
            <div className="flex items-center gap-[20px]">
              <img src={Eye} alt="" />
              <img src={Eye} alt="" />
              <img src={Eye} alt="" />
              <img src={Eye} alt="" />
            </div>
            <div className="pr-[90px]">
              <textarea
                required
                className="w-[390px] h-[140px] border border-gray-300 rounded-[5px] p-3 outline-[#FCA311] bg-[#F3F3F3]"
                name="images"
                placeholder="Rasmni Urlini yuklang"
                value={images}
                onChange={(e) => setImages(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="mt-5 flex items-center justify-center w-[300px] h-[45px] bg-[#FCA311] text-black rounded-[5px] transition-all duration-300 hover:bg-[#FFA41B]"
              >
                {isLoading ? "Submitting..." : "Опубликовать"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
