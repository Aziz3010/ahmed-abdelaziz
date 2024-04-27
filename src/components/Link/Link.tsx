import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkComponent = ({
  linkPath,
  linkName,
}: {
  linkPath: string;
  linkName: string;
}) => {
  const pathName = usePathname();

  return (
    <Link
      scroll={false}
      className={`capitalize select-none p-[8px] rounded-[4px] hover:bg-[#192734] text-[#192734] hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-[#192734] transition-all duration-[300ms] ${
        pathName === linkPath
          ? "bg-[#192734] text-white dark:bg-white dark:text-[#192734]"
          : ""
      }`}
      href={linkPath}
    >
      {linkName}
    </Link>
  );
};

export default LinkComponent;
