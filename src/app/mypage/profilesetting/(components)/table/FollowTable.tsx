'use strict';
import Image from 'next/image';
import BasicButton from '@/app/mypage/(components)/button/BasicButton';

const FollowTable = () => {
  return (
    <>
      {/* <table className="w-full h-[418px] flex-col" style={{ borderTop: "1px #E6E6E6", borderBottom: "1px solid" }}>
                <tr className="bg-[#FAFAFA] h-[67px]" style={{ borderBottom: "1px #E6E6E6" }}>
                    <th><input type="checkbox" />전체선택</th>
                    <th>사용자 목록</th>
                    <th>목록삭제</th>
                </tr>

                <tr className="text-center h-[67px]">
                    <td><input type="checkbox" /></td>
                    <td className="flex gap-x-2 justify-center items-center">
                        <div className="w-[28px] h-[28px] rounded-full bg-neutral-10" />
                        <div>Jason Raish</div>
                        <BasicButton content="차단해제" color="gray" />
                    </td>
                    <td>
                        <Image src="/images/mypage/trashcan_icon.png" width={20} height={20} className="mx-auto" />
                    </td>
                </tr>
                <tr className="text-center h-[67px]">
                    <td><input type="checkbox" /> 오징어</td>
                    <td>고등어</td>
                    <td>돌고래</td>
                </tr>
            </table > */}
    </>
  );
};

export default FollowTable;
