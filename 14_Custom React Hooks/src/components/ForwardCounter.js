import useCounter from '../Hooks/use-counter';
import Card from './Card';

const ForwardCounter = () => {

  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
