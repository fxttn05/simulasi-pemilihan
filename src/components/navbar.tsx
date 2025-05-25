import { useLocation } from 'react-router-dom';

const navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const title = path === '/hasil'
    ? 'Selamat Datang di penghitungan hasil real time Pemira 2025'
    : 'Selamat Datang di website Pemira 2025';
  return (
    <div>
        <div className="px-32 py-5 flex bg-blue-950 items-center text-white">
            <div className="w-3/12">
                <img src="../public/pemira.png" alt="" className="w-16 h-16"/>
            </div>
            <div className="w-6/12 flex justify-center">
                <p className="text-xl font-semibold text-center">{title}</p>
            </div>
            <div className="w-3/12 flex justify-end">
                <button className="bg-red-700 p-3 rounded-sm">
                    <a href="https://forms.gle/eKwS4LVfnYwJkuAz9" target="_blank">Vote Sekarang!</a>
                </button>
            </div>
        </div>
    </div>
  )
}

export default navbar