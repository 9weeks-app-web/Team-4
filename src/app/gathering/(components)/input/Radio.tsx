interface RadioProps {
  name: string;
  radios: { id: string; value: string }[];
}

const Radio = ({ name, radios }: RadioProps) => {
  return (
    <fieldset className="grid grid-cols-4 grid-flow-row gap-y-7 text-neutral-50">
      {radios.map(({ id, value }) => (
        <label key={id} htmlFor="side">
          <input
            className="mr-2"
            type="radio"
            id={id}
            name={name}
            value={value}
          />
          {value}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
