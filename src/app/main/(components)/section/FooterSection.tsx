import Image from 'next/image';

const FooterSection = () => {
    return (
        <div className="w-full h-[588px] bg-background-blue py-[100px]">
            <Image src="/images/main/footer.png" height={388} width={1920} className="mx-auto" />
        </div>
    )
}

export default FooterSection