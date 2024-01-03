const Counter = () => {
  return (
    <input
      className="w-[15%] px-2 py-1 border border-neutral-30 rounded-md before:content-[attr(data-placeholder)] before:w-full"
      type="number"
      defaultValue={0}
    />
  );
};

export default Counter;
