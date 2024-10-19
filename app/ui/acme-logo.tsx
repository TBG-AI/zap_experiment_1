// import { GlobeAltIcon } from '@heroicons/react/24/outline';
// import { lusitana } from '@/app/ui/fonts';

// export default function AcmeLogo() {
//   return (
//     <div
//       className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
//     >
//       <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
//       <p className="text-[44px]">ZAP</p>
//     </div>
//   );
// }

import { IoFootball } from "react-icons/io5";

export default function AcmeLogo() {
  return (
    <div>
      <IoFootball className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">ZAP</p>
    </div>
  );
}
