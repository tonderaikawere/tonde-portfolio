import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 px-3 text-gray-600 dark:text-[#ADB7BE] text-lg font-medium rounded-md hover:text-blue-600 dark:hover:text-white transition-colors duration-300"
    >
      {title}
    </Link>
  );
};

export default NavLink;
