// components/ReviewCard.js
import Link from 'next/link';

const ReviewCard = ({ review }: any) => (
  <div className="border rounded-lg p-4 shadow-lg">
    <img src={review.image} alt={review.dish} className="w-full h-48 object-cover rounded-md" />
    <h2 className="text-xl font-bold mt-4">{review.dish}</h2>
    <p className="text-gray-700 mt-2">{review.shortDescription}</p>
    <Link href={`/reviews/${review.id}`} className='text-red-500 mt-4 inline-block'>
      Leggi di più
    </Link>
  </div>
);

export default ReviewCard;
