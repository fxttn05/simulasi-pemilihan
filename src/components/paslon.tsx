
const paslon = () => {
  return (
    <div className="py-24 px-20 ">
        <div className="flex flex-wrap justify-center gap-6 gap-y-6">
            <div className="border-2 border-solid border-indigo-600 rounded-xl p-4">
                <p className="text-xl text-center font-semibold">Paslon 1</p>
                <img src="../public/paslon 1.png" alt="" className="w-96 mt-4"/>
            </div>
            <div className="border-2 border-solid border-indigo-600 rounded-xl p-4">
                <p className="text-xl text-center font-semibold">Paslon 2</p>
                <img src="../public/paslon 2.png" alt="" className="w-96 mt-4"/>
            </div>
            <div className="border-2 border-solid border-indigo-600 rounded-xl p-4">
                <p className="text-xl text-center font-semibold">Paslon 3</p>
                <img src="../public/paslon 3.png" alt="" className="w-96 mt-4"/>
            </div>
        </div>
        <div className="mt-20 flex justify-center">
            <a href="/hasil" className="hover:scale-105 transition-all duration-300">
                <div className="border-2 border-black py-6 px-10 rounded-xl">
                    <div className="flex gap-4 items-center">
                        <p className="font-semibold">LIHAT HASIL NYA SECARA REAL TIME ⇒ </p>
                        <div className="bg-red-800 text-white text-center px-3 py-1 rounded-xl text-xl"> ● Live</div>
                    </div>
                </div>
            </a>
        </div>
    </div>
  )
}

export default paslon