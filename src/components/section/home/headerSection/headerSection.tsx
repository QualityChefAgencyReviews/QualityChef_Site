import { MetaData } from "@/constant/metaData"
import Link from "next/link"


const HeaderSection = () => {
    const bgImage = "https://th.bing.com/th/id/OIG1.RgtlMi0kEgEBhjbsHkta?pid=ImgGn"

    return (
<section className="relative bg-cover p-1 bg-center h-screen text-white flex items-center justify-center" style={{ backgroundImage: `url(${bgImage})`,}}>
  <div className="absolute inset-0 bg-black opacity-20"></div>
  <div className="relative text-center">
    <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Benvenuti su {MetaData.title?.toString()}</h1>
    <p className="mt-4 text-lg md:text-xl drop-shadow-lg">Agenzia di Social Media Marketing per ristoranti</p>
    <button className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
      <Link href="#reviews_section" scroll={true}>
        Scopri di più
      </Link>
    </button>
  </div>
</section>

      

    )
}
export default HeaderSection