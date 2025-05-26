import bg from '../assets/background.webp'; // path relatif dari Hero.tsx

const Hero = () => {
  return (
    <div className="h-96">
      <div
        className="bg-cover bg-center bg-fixed h-96 px-24 py-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex h-[80%]">
          <div className="w-1/2"></div>
          <div className="w-1/2">
            <h1 className="text-end text-white font-bold text-5xl">PEMIRA 2025</h1>
            <p className="text-end text-white mt-5 text-xl">
              Pilihan mu menentukan masa depan organisasi XYZBCA <br />
              #BijakMemilih #JanganGolput
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-white rounded-xl px-20 py-10 border">
            <p className="text-2xl font-semibold">HALO SOBAT, TENTUKAN PILIHAN MU!</p>
            <p className="text-xl font-semibold text-gray-400">It's time to make your voice heard</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
