import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const backButton =  
  {
    label: "Back",
    variant: "secondary",
    link: "/",
  }

export default function AboutMain (){
  return(
    <section className="flex flex-col justify-center my-12 mx-12 lg:flex-row lg:my-24 md:mx-48">
      <div>
        <Link to={backButton?.link}>
          <Button variant={backButton?.variant}>{backButton?.label}</Button>
        </Link>
      </div>
      <div className="lg:w-1/2 flex flex-col sm:w-full justify-center items-center">
        <div className="">
          <img src="https://img.freepik.com/premium-vector/vector-burger-hamburger-food-illustration-icon-fast-photo-doodle-vector-art-illustrations_1013341-1.jpg" alt="" />
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col sm:w-full justify-center gap-4">
        <h2 className="text-3xl font-bold text-center">About Us</h2>
        <p className="text-justify">"Kami adalah tim di balik aplikasi burger kami yang inovatif. Dengan cinta akan cita rasa yang otentik dan pengalaman makan yang tak terlupakan, kami bertekad untuk menghadirkan kenyamanan dan kelezatan dalam genggaman Anda. Dibuat dengan semangat untuk menjembatani antara para penikmat burger dan pilihan terbaik dari restoran-restoran pilihan, kami berusaha memberikan pengalaman pemesanan yang mudah, cepat, dan menggugah selera. Selamat datang di dunia burger yang lebih dekat dari jari Anda - bersama kami, setiap gigitan adalah petualangan rasa yang menyenangkan!"
        </p>
        <p className="text-justify font-semibold">Mari bersama-sama menjelajahi dunia burger dengan Burger App - tempat di mana setiap gigitan adalah petualangan baru!</p>
      </div>
    </section>
  );
}