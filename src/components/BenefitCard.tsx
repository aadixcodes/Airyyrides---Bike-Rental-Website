// import React from 'react';
// import { LucideIcon } from 'lucide-react';

// interface BenefitCardProps {
//   title: string;
//   description: string;
//   icon: LucideIcon;
//   imageUrl: string;
// }

// export function BenefitCard({ title, description, icon: Icon, imageUrl }: BenefitCardProps) {
//   return (
//     <div className="relative group overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
//       <div className="flex flex-col h-full gap-4">
//         <div className="flex items-center gap-3">
//           <div className="p-2 rounded-lg bg-white/10">
//             <Icon className="w-6 h-6 text-white" />
//           </div>
//           <h3 className="text-xl font-semibold text-white">{title}</h3>
//         </div>
//         <div className="relative h-48 rounded-lg overflow-hidden">
//           <img
//             src={imageUrl}
//             alt={title}
//             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//         </div>
//         <p className="text-gray-300 flex-grow">{description}</p>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
}

export function BenefitCard({ title, description, icon: Icon, imageUrl }: BenefitCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-yellow-500/30 p-6 transition-all duration-300 hover:scale-[1.02]  hover:border-yellow-500/50">
      <div className="absolute inset-0 bg-[#05070B] pointer-events-none" />
      <div className="flex flex-col h-full gap-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-yellow-500/10 backdrop-blur-lg border border-yellow-500/20">
            <Icon className="w-6 h-6 text-yellow-400" />
          </div>
          <h3 className="text-xl font-semibold text-yellow-50">{title}</h3>
        </div>
        <div className="relative h-48 rounded-lg overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>
        <p className="text-gray-300 flex-grow leading-relaxed">{description}</p>
      </div>
    </div>
  );
}