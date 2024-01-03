import Image from "next/image"
import profileIcon from "/public/images/mypage/profile_icon.png"
import githubIcon from "/public/images/mypage/github_icon.png"
import naverIcon from "/public/images/mypage/naver_icon.png"

const MySnsCard = () => {

    return (
        <div className="border-[1px] border-neutral-20 rounded-[12px] mt-[14px] bg-neutral-0 p-6">
            <div className="pb-2">
                <span className="font-semibold text-[16px]">SNS</span>
                <button className="float-right text-[14px] text-neutral-60">편집</button>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex items-center space-x-3 mt-2">
                    <Image src={profileIcon} className="w-[20px] h-[20px]" />
                    <p className="text-sm">abc123@gmail.com</p>
                </div>
                <div className="flex items-center space-x-3 mt-2">
                    <Image src={githubIcon} className="w-[20px] h-[20px]" />
                    <p className="text-sm">github.com</p>
                </div>
                <div className="flex items-center space-x-3 mt-2">
                    <Image src={naverIcon} className="w-[20px] h-[20px]" />
                    <p className="text-sm">blog.com</p>
                </div>
            </div>
        </div >
    )
}

export default MySnsCard