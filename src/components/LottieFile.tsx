import lottie from './lottie.json';
import { getLottieOptions } from './lottie';
import Lottie from 'react-lottie';

const LottieFile = () => {
  return (
    <>
      <div>
        <Lottie options={getLottieOptions(lottie)} height={300} width={300} />
      </div>
    </>
  );
};

export default LottieFile;
