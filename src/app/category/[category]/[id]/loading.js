import Image from "next/image"

const loading = () => {
    return (
        <div className="h-full w-full min-h-screen flex justify-center items-center">
            <Image src={'/loading.gif'} width={200} height={200} alt="Cargando..."/>
        </div>
    )
}

export default loading