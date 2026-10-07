import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function DetailPage() {
  const { id } = useParams();

  return (
    <div>
      <Link
        to="/"
        className="inline-flex items-center text-sm text-gray-600 hover:text-black mb-6 transition font-medium"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke HOME
      </Link>

      <div className="border rounded-xl p-8 bg-white shadow-sm max-w-2xl mx-auto">
        <div className="w-8 h-8 rounded-lg border flex items-center justify-center text-sm font-semibold mb-4 bg-gray-50">
          {id}
        </div>

        <span className="text-xs text-gray-400 font-medium">Detail Pertanyaan</span>
        <h1 className="text-2xl font-bold mt-1 mb-2">Detail HOME - ID: {id}</h1>
        <p className="text-gray-600 text-sm mb-6">
          Ini adalah halaman detail untuk HOME dengan ID: <span className="font-bold">{id}</span>.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg text-center text-xs text-gray-600 mb-8">
          Informasi lengkap mengenai pertanyaan ini dapat ditampilkan pada halaman detail.
        </div>

        <Link
          to="/"
          className="inline-block bg-black text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-gray-800 transition"
        >
          Kembali ke HOME
        </Link>
      </div>
    </div>
  );
}