import Link from "next/link";
import Image from "next/image";
import CartIcon from "@/components/CartIcon"
import LoginAndSignupOrLogout from "./LoginAndSignupOrLogout";

export default function NavBar() {
    return (
        <div className='bg-white'>
                <LoginAndSignupOrLogout/>
            <hr />
            <div className="flex justify-between items-center px-4">
                <Link href={"/"}>
                    <Image priority src='/logo.png' width={100} height={100} alt="Logo que sea rock" />
                </Link>
                <div className="flex gap-8">
                    <Link href={"/category/todos"}>Todos</Link>
                    <Link href={"/category/remeras"}>Remeras</Link>
                    <Link href={"/category/buzos"}>Buzos</Link>
                    <Link href={"/category/tazas"}>Tazas</Link>
                </div>
                <div>
                    <Link className="mx-5" href='/cart'>
                        <CartIcon />
                    </Link>
                </div>
            </div>
            <hr />
        </div>
    )
}