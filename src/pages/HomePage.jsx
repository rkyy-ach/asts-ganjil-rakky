import { Link } from 'react-router-dom';
import { faqData } from "../data/faqData";
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      <div className="mb-8">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Pusat Bantuan</span>
        <h1 className="text-3xl font-bold mt-1">Pertanyaan Umum</h1>
        <p className="text-gray-500 text-sm mt-1">Temukan jawaban dari pertanyaan yang sering ditanyakan.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {faqData.map((item) => (
          <div key={item.id} className="border rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg border flex items-center justify-center text-sm font-semibold mb-4 bg-gray-50">
                {item.id}
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-6">{item.description}</p>
            </div>

            <Link
              to={`/home/${item.id}`}
              className="inline-flex items-center text-sm text-gray-600 hover:text-black font-medium transition"
            >
              Lihat detail <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}