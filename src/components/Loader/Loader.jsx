import { CircleLoader } from 'react-spinners';

function Loader() {
  const loaderCSSOverride = {
    marginTop: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };
  return (
    <CircleLoader color={'orange'} size={150} cssOverride={loaderCSSOverride} />
  );
}

export default Loader;
