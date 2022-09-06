import { useStore } from "../../store";

export const CountUp = () => {
  const count = useStore((state) => state.count);
  const incrementCount = useStore((state) => state.incrementCount);
  return (
    <div className='flex item-center justify-center flex-col'>
      <p className='font-mono text-center'>{count}</p>
      <button className='font-mono' onClick={incrementCount}>
        one up
      </button>
    </div>
  );
};
