import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

type VoteCount = {
  name: string;
  value: number;
};

const VotingPieChart: React.FC = () => {
  const [data, setData] = useState<VoteCount[]>([]);
  const [loading, setLoading] = useState(true);

  const API_URL =
    'https://sheets.googleapis.com/v4/spreadsheets/1B1bdPzpbp4mb-MhUgAfHidJdg9SEzfr1Na83SELUgsw/values/Form%20Responses%201!D2:D?key=AIzaSyAHTAatWJ7RcUmp-jGJS7SG6RGih7cLe_M';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_URL);
        const rawVotes = res.data.values?.flat() ?? [];

        const count: Record<string, number> = {
          'Paslon nomor 1': 0,
          'Paslon nomor 2': 0,
          'Paslon nomor 3': 0,
        };

        rawVotes.forEach((vote: string) => {
          if (count[vote] !== undefined) count[vote]++;
        });

        const formatted: VoteCount[] = Object.entries(count)
          .map(([name, value]) => ({ name, value }))
          .filter((item) => item.value > 0);

        setData(formatted);
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const COLORS = ['#FF4136', '#0074D9', '#2ECC40'];

  return (
    <div>
      <div className="ml-10 mt-5 hover:scale-[101%] transition-all duration-200">
        <a href="/" className="border-1 border-black rounded-full py-2 px-3">kembali</a>
      </div>
      <div className="w-full max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 mt-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Hasil Voting Paslon
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : data.length === 0 ? (
          <p className="text-center text-gray-500">Belum ada data voting masuk.</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                dataKey="value"
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                isAnimationActive
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      
      </div>
    </div>
  );
  
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0].payload;
    return (
      <div className="bg-white dark:bg-gray-700 p-2 rounded shadow-md border border-gray-300 dark:border-gray-600">
        <p className="text-sm text-gray-800 dark:text-gray-200">
          {name.replace('Paslon nomor', 'Paslon')} memperoleh {value} suara
        </p>
      </div>
    );
  }

  return null;
};

export default VotingPieChart;
