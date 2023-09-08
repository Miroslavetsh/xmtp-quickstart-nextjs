import { ThirdwebProvider } from "@thirdweb-dev/react";

import Home from "@/components/Home";

export default function Index() {
  return (
    <ThirdwebProvider activeChain="goerli">
      <Home />;
    </ThirdwebProvider>
  );
}
