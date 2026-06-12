import {IconBrandGooglePlay} from "@tabler/icons-react"
import Image from "next/image";
import { cn } from "@/utils";



export interface DownloadProps {
  label: string;
  className?: string;
   variant?: 'dark' | 'light';
  onClick?: () => void;
  iconClassname?: string;
}

export const Download = ({
  label,
  onClick,
  className,
  variant = 'dark',
  iconClassname,
}: DownloadProps) => {
  const light = variant === 'light';

  return (
    <button
     onClick={onClick}
     className={`flex gap-2 py-2.5 pl-2.5 pr-2 rounded-md text-brand-pure font-body font-semibold bg-brand-main-01 ${className} items-center`}
    >
        {label}
        <IconBrandGooglePlay
        className={`text-brand-main-03 font-body text-15 ${iconClassname}`}
        />
         <span
            className={cn(
              'h-3.5 w-px rounded-[5px]',
              light ? 'bg-neutral-250' : 'bg-neutral-600',
            )}
          />
         <Image src="/icons/apple.svg" alt="appstore" width={18} height={18} priority className="color-neutral-500"/> 

    </button>
  )
}


export default Download