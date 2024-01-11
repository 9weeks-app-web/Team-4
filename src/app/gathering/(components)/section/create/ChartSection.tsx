import { Children, useState } from 'react';
import Radar from '@/components/chart/Radar';
import clsx from 'clsx';

const RADIO_INPUTS = [
  '성실성',
  '참여도',
  '작업속도',
  '포용성',
  '의사소통',
  '직무경험',
];

const ChartSection = () => {
  const [radio, setRadio] = useState([0, 0, 0, 0, 0, 0]);

  return (
    <section className="flex flex-col">
      <h3 className="text-[20px] text-neutral-40 font-medium">
        *이런 사람을 선호해요!
      </h3>
      <p className="mt-[7px] mb-[18px] text-sm text-system-warning font-medium">
        설정하지 않으면 표시되지 않습니다.
      </p>
      <div className="flex gap-[150px] border px-[100px] py-[60px] border-neutral-10 rounded-xl">
        <div className="flex-1">
          <Radar
            inputs={[
              radio[0],
              radio[1],
              radio[2],
              radio[3],
              radio[4],
              radio[5],
            ]}
          />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex h-full">
            <div className="flex flex-col justify-between min-w-[100px]">
              {Children.toArray(
                RADIO_INPUTS.map(name => (
                  <span className="text-lg font-semibold">{name}</span>
                )),
              )}
            </div>
            <div className="flex flex-col justify-between w-full">
              {Children.toArray(
                RADIO_INPUTS.map((name, index) => (
                  <div className="relative flex justify-between">
                    <div className="absolute top-[11px] w-full h-[2px] bg-neutral-10" />
                    {Children.toArray(
                      Array.from({ length: 5 }, (_, i) => 1 + i).map((v, i) => (
                        <input
                          className={clsx(
                            'relative',
                            'w-6',
                            'h-6',
                            'appearance-none',
                            'border-2',
                            'border-neutral-10',
                            'ring-[2.5px]',
                            'ring-inset',
                            'ring-neutral-0',
                            'bg-neutral-10',
                            'rounded-[50%]',
                            'cursor-pointer',
                            'checked:bg-primary-100',
                            'checked:border-primary-100',
                            'active:bg-primary-70',
                            'active:border-primary-70',
                            radio[index] !== i + 1 && [
                              'hover:bg-primary-30',
                              'hover:border-primary-30',
                            ],
                          )}
                          type="radio"
                          name={name}
                          value={v}
                          onClick={() =>
                            setRadio(prev => {
                              const arr = [...prev];
                              arr[index] = v;
                              return arr;
                            })
                          }
                        />
                      )),
                    )}
                  </div>
                )),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartSection;
