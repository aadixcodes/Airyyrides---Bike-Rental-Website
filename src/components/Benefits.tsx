// import React from 'react';
// import { Battery, Shield, Leaf, Car, Bike, Users } from 'lucide-react';
// import { BenefitCard } from './BenefitCard';

// const benefits = [
//   {
//     title: "50km Range",
//     description: "Our Electric Bikes offer an impressive 50km range, perfect for economical short rides and daily commutes.",
//     icon: Battery,
//     imageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     title: "Advanced Safety",
//     description: "Both our Electric Bikes and Activa come equipped with advanced safety features, ensuring secure and confident riding.",
//     icon: Shield,
//     imageUrl: "https://images.unsplash.com/photo-1619771914272-e3c1ba17ba4d?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     title: "Eco-Friendly",
//     description: "Choose our Electric Bikes for environmentally conscious travel, contributing to reduced emissions and a greener future.",
//     icon: Leaf,
//     imageUrl: "https://images.unsplash.com/photo-1593765087302-d8418ce10c67?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     title: "Well-Serviced Fleet",
//     description: "Our meticulously maintained Activa fleet ensures you always get a fresh, comfortable, and reliable riding experience.",
//     icon: Car,
//     imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     title: "Choice of Rides",
//     description: "Select between silent, efficient Electric Bikes or versatile, reliable Activa vehicles based on your preference.",
//     icon: Bike,
//     imageUrl: "https://images.unsplash.com/photo-1595190934263-4d0fb0483b4d?auto=format&fit=crop&q=80&w=800"
//   },
//   {
//     title: "Friendly Team",
//     description: "Experience our welcoming and cooperative team spirit, making every ride a pleasant and positive experience.",
//     icon: Users,
//     imageUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800"
//   }
// ];

// export function Benefits() {
//   return (
//     <section className="relative min-h-screen py-20 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b from-black to-[#06090F]" />
      
//       <div className="relative container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4">
//             Benefits of Riding with Us
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {benefits.map((benefit) => (
//             <BenefitCard
//               key={benefit.title}
//               {...benefit}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from 'react';
import { Battery, Shield, Leaf, Car, Bike, Users } from 'lucide-react';
import { BenefitCard } from './BenefitCard';

const benefits = [
  {
    title: "50km Range",
    description: "Our Electric Bikes offer an impressive 50km range, perfect for economical short rides and daily commutes.",
    icon: Battery,
    imageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Advanced Safety",
    description: "Both our Electric Bikes and Activa come equipped with advanced safety features, ensuring secure and confident riding.",
    icon: Shield,
    imageUrl: "https://images.unsplash.com/photo-1619771914272-e3c1ba17ba4d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Eco-Friendly",
    description: "Choose our Electric Bikes for environmentally conscious travel, contributing to reduced emissions and a greener future.",
    icon: Leaf,
    imageUrl: "https://plus.unsplash.com/premium_photo-1723575666709-9fa9b505b78d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Well-Serviced Fleet",
    description: "Our meticulously maintained Activa fleet ensures you always get a fresh, comfortable, and reliable riding experience.",
    icon: Car,
    imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Choice of Rides",
    description: "Select between silent, efficient Electric Bikes or versatile, reliable Activa vehicles based on your preference.",
    icon: Bike,
    imageUrl: "https://plus.unsplash.com/premium_photo-1686693219091-19350b5f2f0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Friendly Team",
    description: "Experience our welcoming and cooperative team spirit, making every ride a pleasant and positive experience.",
    icon: Users,
    imageUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800"
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="relative min-h-screen py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#06090F]" />
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-50 mb-4">
            Benefits of Riding with Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              {...benefit}
            />
          ))}
        </div>
      </div>
    </section>
  );
}