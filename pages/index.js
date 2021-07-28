import FormLogin from "../components/FormLogin";
import { getProviders } from "../api/database";
import { GET_PROVIDERS } from "../api/queries";

export default function Home({ providers }) {
  return <FormLogin providers={providers} />;
}

export async function getServerSideProps() {
  const {
    data: { providers },
  } = await getProviders(GET_PROVIDERS);

  return {
    props: { providers }, // will be passed to the page component as props
  };
}
