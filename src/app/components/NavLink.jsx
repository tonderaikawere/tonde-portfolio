import Link from "next/link";

const NavLink = ({ href, title }) => {
  const isExternal = typeof href === 'string' && (href.startsWith('http') || href.endsWith('.pdf'));

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="block py-2 px-3 text-gray-600 dark:text-[#ADB7BE] text-lg font-medium rounded-md hover:text-blue-600 dark:hover:text-white transition-colors duration-300"
    >
      {title}
    </Link>
  );
};

export default NavLink;
