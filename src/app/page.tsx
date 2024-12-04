// import Image from "next/image";
// import Hero from '@/components/Hero/hero'
import  About from "@/app/About/page"
import Edu from '@/app/Education/page'
import Myskill from'@/app/Uskill/page'
import  Certification from '@/app/Certificate/page'
import Projectss from '@/app/Proje/page'
import Contactpage from '@/app/Contact/page'
export default function Home(){
  return (
   <>
   <About/>
   <Edu/>
   <Myskill/>
    <Certification/>
    <Projectss/>
    <Contactpage/>
   
   
   </>
);
}
