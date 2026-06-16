import {IconArrowRight} from "@tabler/icons-react"


export interface GetStartedProps {
  label: string;
  className?: string;
  onClick?: () => void;
  iconClassname?: string;
}

export const GetStarted = ({
  label,
  onClick,
  className,
  iconClassname,
}: GetStartedProps) => {

  return (
    <button
     onClick={onClick}
     className={`flex gap-2  pl-2.5 pr-2 items-center rounded-md text-brand-pure font-body font-semibold bg-brand-main-01 ${className}`}
    >
        {label}
        <IconArrowRight
        className={`text-brand-main-03 ${iconClassname}`}
        />

    </button>
  )
}


export default GetStarted

