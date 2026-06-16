import { IconBrandGooglePlay } from "@tabler/icons-react";
import { cn } from "@/utils/cn";


interface DownloadAppButtonProps {
  className?: string;
  textClassName?: string;
  dividerClassName?: string;
  variant?: "light" | "dark" | "hero";
}

const variantStyles = {
  light: {
    button: "bg-neutral-175",
    text: "text-neutral-950",
    icon:"text-neutral-550",
    divider: "bg-neutral-250",
  },
  dark: {
    button: "bg-neutral-700",
    text: "text-brand-pure",
     icon:"text-neutral-300",
    divider: "bg-neutral-600",
  },
  hero: {
    button: "bg-brand-main-02",
    text: "text-brand-pure",
     icon:"text-brand-main-03",
    divider: "bg-brand-main-04",
  },
} as const;

export default function Download({
  className,
  textClassName,
  dividerClassName,
  variant = "light",
}: DownloadAppButtonProps) {
  const styles = variantStyles[variant];

  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-10.5 items-center gap-4 rounded-md py-2.5 pl-2.5 pr-2",
        styles.button,
        className
      )}
    >
      <span
        className={cn(
          "font-body  whitespace-nowrap text-15 font-semibold leading-[1.4] tracking-[-0.1125px]",
          styles.text,
          textClassName
        )}
      >
        Download app
      </span>

      <span className="flex items-center gap-2">
        <IconBrandGooglePlay className={cn("w-4.5 h-4.5",styles.icon,)} />

        <span
          className={cn(
            "h-3.5 w-px rounded-[5px]",
            styles.divider,
            dividerClassName
          )}
        />

         <img
          src="/icons/apple.svg"
          alt="Apple App Store"
          className="w-4.5 h-4.5 invert sepia saturate-200 hue-rotate-300"
        /> 

       

      </span>
    </button>
  );
}