import { useIntersect } from "../hooks/useIntersect";

const Div = ({ handle }: Props) => {
  const ref = useIntersect<HTMLDivElement>(handle);
  return <div ref={ref} />;
};

export default {
  Div,
};

type Props = {
  handle: () => void;
}