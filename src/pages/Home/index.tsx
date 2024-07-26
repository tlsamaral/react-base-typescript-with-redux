import { env } from '../../env';

function Home() {
  const envKeys = env;
  console.log(envKeys);
  return <h1>Hello world</h1>;
}

export default Home;
