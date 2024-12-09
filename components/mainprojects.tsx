import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface FlexcodeItem {
  _id: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

export const Home: React.FC = () => {
  const [data, setData] = useState<FlexcodeItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Track loading state

  useEffect(() => {
    fetch('https://dsabackend.smartcraze.online/api/flexcode') 
      .then((response) => response.json())
      .then((data: FlexcodeItem[]) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">All Projects</h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <h1 className="text-4xl font-semibold animate-bounce">Sabar karo bhai...🚀</h1>
        </div>
      ) : data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item) => (
            <div
              key={item._id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover border border-gray-300 dark:border-gray-600"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 mt-2 dark:text-gray-300">{item.description}</p>
                <div className="flex justify-center mt-4">
                  <Link
                    href={item.link}
                    className="inline text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Try Now
                  </Link>
                </div>
                
              </div>
            </div>
          ))}
          
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-lg font-semibold">No projects found! Maybe try again later? 😅</p>
        </div>
      )}
    </div>
  );
};
