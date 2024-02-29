import { useSelector } from "react-redux";
import IconBtn from "../../../Common/IconBtn";

const RenderTotalAmount = () => {
  const { total, cart } = useSelector((state) => state.cart);

  const handleBuyCourse = () => {
    const courses = cart.map((course) => course._id);
    console.log("Bought these courses : ", courses);
    // Infuture we have to integrate the payment here
  };
  return (
    <div>
      <p>Total:</p>
      <p>Rs {total}</p>
      <IconBtn
        text={"Buy Now"}
        onClick={handleBuyCourse}
        customClasses={"w-full justify-center"}
      />
    </div>
  );
};

export default RenderTotalAmount;
