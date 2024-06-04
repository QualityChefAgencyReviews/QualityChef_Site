import Link from 'next/link';

const ArticleCard = ({ article }:any) => (
  <div className="border rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105">
    <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-md" />
    <h2 className="text-xl font-bold mt-4">{article.title}</h2>
    <p className="text-gray-700 mt-2">{article.excerpt}</p>
    <Link href={`/blog/${article.id}`}className="text-red-500 mt-4 inline-block">
      Leggi di più
    </Link>
  </div>
);

export default ArticleCard;
