// import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

// function NavLink({
//   href,
//   children,
// }: {
//   href: string
//   children: React.ReactNode
// }) {
//   return (
//     <Link
//       href={href}
//       className="transition hover:text-teal-500 dark:hover:text-teal-400"
//     >
//       {children}
//     </Link>
//   )
// }

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              {/* <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/products">Products</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </div> */}
              <p>admin@mindcycle.tech</p>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} MindCycle AI. All rights
                reserved.
              </p>
              <p>(360) 298-4257</p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
