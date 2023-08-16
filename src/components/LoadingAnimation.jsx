import { useRouter } from 'next/router';
import Loader from 'react-loader-spinner';

const LoadingAnimation = () => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Loader type="TailSpin" color="#000" height={40} width={40} />
      </div>
    );
  }

  return (
    <div>
      {/* Your content */}
    </div>
  );
};

export default LoadingAnimation;
