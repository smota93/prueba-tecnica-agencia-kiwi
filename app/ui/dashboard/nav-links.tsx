'use client';

import {
  HomeIcon,
  ShoppingCartIcon,
  ChartBarIcon,
  Squares2X2Icon,
  UserIcon,
  LockClosedIcon
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  {
    name: 'NFT Marketplace',
    href: '/dashboard/marketplace',
    icon: ShoppingCartIcon,
  },
  {
    name: 'Tables',
    href: '/dashboard/tables',
    icon: ChartBarIcon,
  },
  { name: 'Kanban', href: '/dashboard/kanban', icon: Squares2X2Icon },
  { name: 'Profile', href: '/dashboard/profile', icon: UserIcon },
  { name: 'Sign In', href: '/login', icon: LockClosedIcon }
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-violet-100 md:flex-none md:justify-start md:p-2 md:px-3 ${pathname === link.href
              ? 'text-violet-600'
              : ''
              }`}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}