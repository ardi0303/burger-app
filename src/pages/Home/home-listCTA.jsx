import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const listCTA = [
  {
    label: "Order Now",
    variant: "primary",
    link: "/order",
  },
  {
    label: "About Us",
    variant: "secondary",
    link: "/about",
  },
  {
    label: "Feedback",
    variant: "secondary",
    link: "/feedback",
  }
]



export default function HomeListCTA() {
  return (
    <section className="h-[calc(100vh-156px)] flex flex-col justify-center">
      <div className="container mx-auto py-8">
        <div className="flex flex-col gap-4 justify-center max-w-48 mx-auto">
          {listCTA.map((item, i) => (
            <Link key={`${item?.label}-${i}`} to={item?.link}>
              <Button variant={item?.variant}>{item?.label}</Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}