import Link from 'next/link'
import Image from 'next/image'
import spectrumIcon from '/public/images/mypage/spectrum_icon.png'

const MyProfileCard = () => {
    return (
        <div className="border-[1px] border-neutral-20 rounded-[12px] flex flex-col items-center mt-[14px] space-y-4 bg-neutral-0 p-6">
            <div className="w-[72px] h-[72px] rounded-full bg-neutral-10" />
            <div className='flex flex-row space-x-[10px] items-center'>
                <h2 className="text-lg font-semibold">김스팩</h2>
                <div className="w-[18px] h-[18px] rounded-full bg-neutral-100" />
            </div>
            <div className='flex flex-row space-x-1'>
                <p className="text-[12px] text-neutral-50">본캐</p>
                <p className="text-[12px] pr-[5px]">UXUI 디자인</p>
                <p className="text-[12px] text-neutral-50">부캐</p>
                <p className="text-[12px]">서비스 기획</p>
            </div>
            <p className="text-center text-[12px]">스펙트럼처럼 넓어지는 나의 스펙, 스팩폴리오!</p>
            <div className="w-[224px] border-[1px] border-neutral-10 rounded-[6px] flex justify-between w-full px-5 py-3">
                <div className="text-center">
                    <p className="w-[18px] mx-auto pb-[3px]">
                        <Image src={spectrumIcon} />
                    </p>
                    <p className="text-[14px] text-gray-500 pt=[1px]">스팩트럼</p>
                </div>
                <div className="text-center">
                    <p className="font-bold text-[14px]">338</p>
                    <p className="text-[14px] text-gray-500">팔로워</p>
                </div>
                <div className="text-center">
                    <p className="font-bold text-[14px]">350</p>
                    <p className="text-[14px] text-gray-500">팔로잉</p>
                </div>
            </div>
            <div className='flex flex-col gap-[4px] w-[224px]'>
                <Link href="/mypage" className="p-[3px] text-[12px] text-center font-semibold text-primary-80 rounded border border-primary-80 rounded-[6px]">
                    프로필 설정
                </Link>
                <Link href="/mypage/privacysetting" className="p-[3px] text-center font-semibold text-[12px] bg-primary-100 border-primary-100 text-neutral-0 rounded-[6px]">
                    개인 정보
                </Link>
            </div>
        </div>
    )
}

export default MyProfileCard