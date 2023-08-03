import Link from "next/link"

interface Props {
    href: string,
    children: React.ReactNode,
}


export const ButtonLink = ( { href, children }: Props ) => {

  return <Link href={href}>{children}</Link>

}
