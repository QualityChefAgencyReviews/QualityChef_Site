import Link from 'next/link';

const ChefCard = ({ chef }:any) => (
  <div className="border rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105">
    <img src={chef.image} alt={chef.name} className="w-full h-48 object-cover rounded-md" />
    <h2 className="text-xl font-bold mt-4">{chef.name}</h2>
    <p className="text-gray-700 mt-2">{chef.shortBio}</p>
    <Link href={`/chefs/${chef.id}`}className="text-red-500 mt-4 inline-block">
      Leggi di più
    </Link>
  </div>
);

export default ChefCard;
