import { useIntersect } from "../hooks/useIntersect";

const Div = ({ handle }: Props) => {
  const ref = useIntersect<HTMLDivElement>(handle);
  return <div ref={ref} />;
};

const elements = {
  Div,
};

export default elements;

type Props = {
  handle: () => void;
}