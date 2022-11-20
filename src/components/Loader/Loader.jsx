import { PuffLoader } from 'react-spinners';

function Loader() {
  const loaderCSSOverride = {
    marginTop: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };
  return (
    <PuffLoader color={'orange'} size={100} cssOverride={loaderCSSOverride} />
  );
}

export default Loader;
