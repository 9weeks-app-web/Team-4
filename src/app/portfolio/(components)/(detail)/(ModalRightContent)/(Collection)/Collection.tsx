'use client';

import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';

const PortfoliosCollection = ({
  setCollectionModalOpen,
}: {
  setCollectionModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [state, setState] = useState<boolean>(false);
  const [newCollectionState, setNewCollectionState] = useState<boolean>(false);
  const [create, setCreate] = useState<string>('');
  return (
    <div className="w-full text-neutral-100">
      {newCollectionState ? (
        <div className="w-full h-[274px]">
          <div className="w-full h-[174px] mb-[20px] mt-[32px] mx-[24] flex flex-col">
            <div className="flex">
              <div className="font-semibold text-[22px] mb-[24px] h-[48px]">
                새 컬렉션 만들기 
              </div>
              <button className='ml-auto mb-auto'
                onClick={() => {
                  setCollectionModalOpen(false);
                }}
              >
                <Image
                  src="/portfolios/cross.svg"
                  alt="닫기"
                  width={32}
                  height={32}
                />
              </button>
            </div>
            <input
              className="h-[50px] px-[16px] border border-neutral-10 py-[10px] rounded-xl w-full"
              placeholder="새 컬렉션 이름"
              onChange={e => {
                if (e && e.target && e.target.value) setCreate(e.target.value);
              }}
            />
          </div>
          <div className="h-[100px] w-full flex justify-center items-center border-t-neutral-10 border-t">
            <button
              className="text-[18px] font-[600]"
              disabled={!(create !== '')}
            >
              <div
                className={`flex rounded-xl ml-auto justify-center items-center p-[16px] w-[252px] h-[60px] ${
                  create.length !== 0 ? `bg-primary-80` : `bg-neutral-40`
                } text-neutral-0`}
              >
                제작하기
              </div>
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="w-full px-[24px] pt-[32px] pb-[40px]">
            <div className="flex">
              <div className="font-semibold text-[22px]">컬렉션 저장</div>
              <button className='ml-auto'
                onClick={() => {
                  setCollectionModalOpen(false);
                }}
              >
                <Image
                  src="/portfolios/cross.svg"
                  alt="닫기"
                  width={32}
                  height={32}
                />
              </button>
            </div>
            <div className="text-[14px] text-neutral-60 mt-[8px] mb-[24px]">
              마음에 드는 작업물을 내 컬렉션에 저장할 수 있습니다.
            </div>
            <button
              onClick={() => {
                setState(prev => !prev);
              }}
              className={`w-full rounded-xl border ${
                state ? `border-primary-100` : `border-neutral-30`
              }  flex p-[16px] items-center justify-between`}
            >
              <div className="flex items-center ">
                <div className="w-[78px] h-[58px] rounded-xl bg-[#D9D9D9]"></div>
                <div
                  className={`ml-[12px] ${
                    state ? `text-primary-100` : `text-neutral-100`
                  } text-[20px]`}
                >
                  Text
                </div>
              </div>
              {state && (
                <div className="w-[24px] h-[24px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.9496 9.79557C17.3401 9.40505 17.3401 8.77188 16.9496 8.38136C16.5591 7.99083 15.9259 7.99083 15.5354 8.38136L10.5856 13.3311L8.46431 11.2098C8.07379 10.8193 7.44063 10.8193 7.0501 11.2098C6.65958 11.6003 6.65958 12.2335 7.0501 12.624L9.80782 15.3817C10.2374 15.8113 10.9339 15.8113 11.3635 15.3817L16.9496 9.79557Z"
                      fill="#0059FF"
                    />
                  </svg>
                </div>
              )}
            </button>
          </div>
          <div className="flex w-full h-[100px] justify-between py-[20px] px-[24px] border-t border-t-neutral-10">
            <button
              className="flex h-full items-center"
              onClick={() => {
                setNewCollectionState(true);
              }}
            >
              <div className="bg-primary-100 w-[24px] h-[24px] rounded-full mr-[12px]">
                <Image
                  src="/portfolios/create_button_blue.svg"
                  alt="생성 버튼"
                  width={24}
                  height={24}
                />
              </div>
              <div className={`text-primary-100 font-[500] text-[20px]`}>
                새 컬렉션 만들기
              </div>
            </button>
            <button className="text-[18px] font-[600]" disabled={!state}>
              <div
                className={`flex rounded-xl ml-auto justify-center items-center p-[16px] w-[238px] h-[60px] ${
                  state ? `bg-primary-80` : `bg-neutral-40`
                } text-neutral-0`}
              >
                저장하기
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PortfoliosCollection;
