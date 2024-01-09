import { Children } from 'react';

interface RadioProps {
  name: string;
  radios: { id: string; value: string }[];
}

const Radio = ({ name, radios }: RadioProps) => {
  return (
    <fieldset className="grid grid-cols-4 grid-flow-row gap-y-7 text-neutral-50">
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
