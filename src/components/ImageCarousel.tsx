import  { useEffect, useState } from 'react';

const vehicles = [
  {
    id: 1,
    image: 'https://airyyrides.com/assets/ActivaFour-KdLJoN3U.png',
    name: 'Electric Sport Bike'
  },
  {
    id: 2,
    image: 'https://airyyrides.com/assets/ActivaOne-DdUQqsAd.png',
    name: 'Mountain E-Bike'
  },
  {
    id: 3,
    image: 'https://airyyrides.com/assets/ActivaOne-DdUQqsAd.png',
    name: 'Urban Electric Car'
  },
  {
    id: 4,
    image: 'https://airyyrides.com/assets/ActivaTwo-BTCcBJt9.png',
    name: 'Electric Scooter'
  },
  {
    id: 5,
    image: 'https://airyyrides.com/assets/ActivaOne-DdUQqsAd.png',
    name: 'Luxury Electric Car'
  }
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % vehicles.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const getVisibleVehicles = () => {
    const result = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + vehicles.length) % vehicles.length;
      result.push({ ...vehicles[index], position: i });
    }
    return result;
  };

  return (
    <div className="relative py-16 overflow-hidden">
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-6xl h-[400px]">
          {getVisibleVehicles().map(({ id, image, name, position }) => (
            <div
              key={id}
              className="absolute top-0 left-1/2 transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${position * 100}%) translateX(${position * 2}rem) translateX(-50%) scale(${position === 0 ? 1.2 : 0.8})`,
                zIndex: position === 0 ? 20 : 10,
                opacity: position === 0 ? 1 : 0.7,
              }}
            >
              <div className="relative w-[400px] h-[300px] rounded-lg overflow-hidden ">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0  p-4">
                  <h3 className="text-white text-xl font-semibold text-center">
                    {name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}