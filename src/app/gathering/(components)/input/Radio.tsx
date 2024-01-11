import { Children, useContext, useState } from 'react';
import { PercentContext } from '../../project/new/page';

interface RadioProps {
  name: string;
  radios: { id: string; value: string }[];
}

const Radio = ({ name, radios }: RadioProps) => {
  const context = useContext(PercentContext);
  const [isInputData, setIsInputData] = useState(false);

  return (
    <fieldset
      className="grid grid-cols-4 grid-flow-row gap-y-7 text-neutral-50"
      onChange={() => {
        isInputData || context?.setter(prev => prev + 1);
        setIsInputData(true);
      }}
    >
      {Children.toArray(
        radios.map(({ id, value }) => (
          <label htmlFor={id}>
            <input
              className="w-[18px] h-[18px] mr-2"
              type="radio"
              id={id}
              name={name}
              value={value}
            />
            {value}
          </label>
        )),
      )}
    </fieldset>
  );
};

export default Radio;
