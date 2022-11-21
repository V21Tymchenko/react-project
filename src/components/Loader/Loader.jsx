import { PuffLoader } from 'react-spinners';

function Loader() {
  const loaderCSSOverride = {
    marginTop: '400px',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
  return (
    <PuffLoader color={'orange'} size={100} cssOverride={loaderCSSOverride} />
  );
}

export default Loader;
