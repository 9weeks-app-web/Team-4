'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const MenuListCard = () => {
    const pathname = usePathname();
    const menu = [
        {
            id: 0,
            title: "내 포트폴리오",
            link: "/mypage/myportfolio"

        },
        {
            id: 1,
            title: "관심 포트폴리오",
            link: "/mypage/interestportfolio"
        },
        {
            id: 2,
            title: "관심 채용정보",
            link: "/mypage/interestrecruit"
        },
        {
            id: 3,
            title: "커뮤니티 관리",
            link: "/mypage/community"
        },
        {
            id: 4,
            title: "모임 관리",
            link: "/mypage/gathering"
        },
        {
            id: 5,
            title: "보유 뱃지",
            link: "/mypage/badge"
        }
    ];
    return (
        <div className="border-[1px] border-neutral-20 rounded-[12px] mt-[14px] bg-neutral-0 px-6 py-1">
            <div className="text-sm space-y-3">
                {menu.map((item, index) => (
                    <Link href={item.link} key={index} className="p-[10px] font-medium text-[16px]">
                        <div className={pathname === item.link ? 'text-primary-100' : ''}>
                            {item.title}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default MenuListCard