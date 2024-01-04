import { Children, useState } from 'react';
import Radar from '@/components/chart/Radar';

const RADIO_INPUTS = [
  '성실성',
  '참여도',
  '작업속도',
  '포용성',
  '의사소통',
  '직무경험',
];

const ChartSection = () => {
  const [radio1, setRadio1] = useState(0);
  const [radio2, setRadio2] = useState(0);
  const [radio3, setRadio3] = useState(0);
  const [radio4, setRadio4] = useState(0);
  const [radio5, setRadio5] = useState(0);
  const [radio6, setRadio6] = useState(0);

  const handleClickRadio = (name: string, value: number) => {
    switch (name) {
      case '성실성':
        setRadio1(value);
        break;
      case '참여도':
        setRadio2(value);
        break;
      case '작업속도':
        setRadio3(value);
        break;
      case '포용성':
        setRadio4(value);
        break;
      case '의사소통':
        setRadio5(value);
        break;
      case '직무경험':
        setRadio6(value);
        break;
      default:
        break;
    }
  };

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
          <Radar inputs={[radio1, radio2, radio3, radio4, radio5, radio6]} />
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
                RADIO_INPUTS.map(name => (
                  <div className="relative flex justify-between">
                    <div className="absolute top-[11px] w-full h-[2px] bg-neutral-10" />
                    {Array.from({ length: 5 }, (_, i) => 1 + i).map(v => (
                      <input
                        className="relative w-6 h-6 appearance-none border-2 border-neutral-10  ring-[2.5px] ring-inset ring-neutral-0 bg-neutral-10  rounded-[50%] checked:bg-primary-100 checked:border-primary-100
                        "
                        type="radio"
                        name={name}
                        value={v}
                        onClick={() => handleClickRadio(name, v)}
                      />
                    ))}
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
