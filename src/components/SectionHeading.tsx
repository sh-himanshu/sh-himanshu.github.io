type Props = {
  value: string;
};

const SectionHeading = ({ value }: Props) => {
  return (
    <h3 className='mb-10 max-w-fit scroll-m-20 border-b p-2 font-mono text-xl font-semibold tracking-tight'>
      # {value}
    </h3>
  );
};

export default SectionHeading;
