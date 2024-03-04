import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { catalogData } from "../apis";

export const getCatalogaPageData = async (categoryId) => {
  let result = [];
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector(
      "POST",
      catalogData.CATALOGPAGEDATA_API,
      { categoryId: categoryId }
    );

    console.log("CATALOG DATA : ", response);
    if (!response?.data?.success) {
      throw new Error("Could not fetch category page data");
    }

    result = response?.data;

    console.log("Response of Result in getCatalogPageData : ", result);
  } catch (error) {
    console.log("CATALOG PAGE API ERROR....", error);
    toast.error(error.message);
    result = error.response?.data;
  }
  toast.dismiss(toastId);
  return result;
};
