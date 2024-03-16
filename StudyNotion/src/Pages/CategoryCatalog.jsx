import { useEffect, useState } from "react";
import { fetchCourseCategories } from "../services/operations/courseDetailsAPI";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Common/Footer";
import { useSelector } from "react-redux";

const CategoryCatalog = () => {
  const { loading } = useSelector((state) => state.profile);
  const imagesUrl = [
    {
      name: "Android",
      image:
        "https://img.freepik.com/free-vector/modern-android-icon_1035-9121.jpg?t=st=1710081972~exp=1710085572~hmac=ae22d4dc594fcce90cbe1211cb475fcf64724121f47ecb7410497aa261aeaabf&w=740",
    },
    {
      name: "Web Dev",
      image:
        "https://img.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_1284-68939.jpg?t=st=1710082073~exp=1710085673~hmac=32724a15d00ff302acceafb62151b9e0c1bfd5a35599a93aa07c39569cda2cf1&w=826",
    },
    {
      name: "Python",
      image:
        "https://www.ntuclearninghub.com/documents/39367/4216797/Python-Symbol.png/369e410e-a90f-f887-c2dc-61f7ef761476/",
    },
    {
      name: "DSA",
      image: "https://miro.medium.com/v2/resize:fit:1400/0*Rhu1FRkUGZFAeGIy",
    },
    {
      name: "AIML",
      image:
        "https://media.licdn.com/dms/image/D5612AQHjDGhc8cNfJA/article-cover_image-shrink_720_1280/0/1704439037481?e=2147483647&v=beta&t=wSs9ZAGGWfx_9TAfotJLRY87JtMQPhKo7wNAh1-inU0",
    },
    {
      name: "AIML",
      image:
        "https://media.licdn.com/dms/image/D4D12AQHYC_ZczxV2zw/article-cover_image-shrink_720_1280/0/1695524296879?e=2147483647&v=beta&t=VJkWc3l89UdKGn2pEkDo4IWINkztx2V3u0tdzPL8ILA",
    },
    {
      name: "AIML",
      image:
        "https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?t=st=1710565988~exp=1710569588~hmac=a2c3355ea15f175778156dc65d3ea807402d7555ef958daf8578ef81e5d26c71&w=1060",
    },
  ];
  const navigate = useNavigate();
  const [response, setResponse] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      const data = await fetchCourseCategories();
      setResponse(data);
      console.log("Data of course category : ", data);
    }

    fetchCategories();
  }, []);

  const handleClick = (index) => {
    const data = response[index]?.name.toLowerCase().replace(/\s+/g, "-");
    navigate(`/catalog/${data}`);
    console.log("Corrected Name is : ", data);
  };

  // If loading or no response yet, display loader
  if (loading || response.length === 0) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto mt-8 p-4 mb-10">
        <p className="text-3xl font-semibold text-richblack-50 mb-6">
          All Categories are listed below
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {response.map((category, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <img
                src={imagesUrl[index]?.image}
                alt="Category Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-richblack-5 mb-2">
                  {category?.name}
                </h2>
                <p className="text-richblack-300 mb-4">
                  {category?.description}
                </p>
                <button
                  onClick={() => handleClick(index)}
                  className="bg-yellow-50 text-black py-2 px-4 rounded-md font-semibold hover:bg-yellow-600 transition-colors"
                >
                  See Courses
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryCatalog;
