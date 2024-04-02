import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../store/slice/auth";

export default function HomeBanner() {
const auth = useSelector((state) => state?.auth);

const dispatch = useDispatch();
useEffect(() => {
  dispatch(setUserData({ 
    name: "Ardii", 
    email: "ardi@gmail.com",
    isActive: true
  }));
},[]);

console.log(auth);

  return (
    <section className="bg-green-600">
      <div className="container mx-auto py-8 text-center flex flex-col gap-3">
        <h1 className="text-4xl font-bold text-white">Welcome to BurgerApp</h1>
        <p className="text-sm text-white max-w-xs mx-auto">Where the taste of its burger, matched with the efficiency when you're ordering!</p>
      </div>
    </section>
  );
}