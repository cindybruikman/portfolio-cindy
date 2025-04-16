import Link from "next/link";

const ButtonPrimary = ({ children, type, url = "#", className }) => {
  const isExternal = url.startsWith("http");

  const commonClasses = `text-size-15 font-bold text-white-color capitalize py-17px px-35px ${
    type === 2 ? "" : "ml-10px"
  } bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-full leading-1 ${className} transition-all duration-300`;

  if (isExternal) {
    return (
      <a
        href={url}
        className={commonClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={url} className={commonClasses}>
      {children}
    </Link>
  );
};

export default ButtonPrimary;
