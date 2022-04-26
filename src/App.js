import { ethers } from "ethers";
import { useEffect, useState } from "react";
import "./App.css";
import PrimaryButton from "./components/PrimaryButton";
import TextInput from "./components/TextInput";
import Adder from "./abis/Adder.json";

function App() {
  const [provider, setProvider] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [adderContract, setAdderContract] = useState(undefined);

  const loadBlockchainData = async () => {
    if (provider) {
      const { chainId } = await provider.getNetwork();
      const _adderContract = new ethers.Contract(
        Adder.networks[chainId].address,
        Adder.abi,
        provider
      );
      setAdderContract(_adderContract);
    }
  };

  const loadWeb3 = async () => {
    if (typeof window.ethereum !== "undefined" && !account) {
      const _provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(_provider);

      window.ethereum.on("accountsChanged", function (accounts) {
        if (accounts[0] !== account) {
          setAccount(accounts[0]);
        }
      });

      window.ethereum.on("chainChanged", (chainId) => {
        window.location.reload();
      });
    }
  };

  const web3Handler = async () => {
    if (provider) {
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      // Get the current account from the provider and set account
    }
  };

  async function addNumber() {
    //TODO: call the adder contract to add number input to the text input
  }

  return (
    <div className="App">
      <header className="App-header">
        <TextInput label={"Number to Add"} />
        <PrimaryButton onClick={addNumber}>Add</PrimaryButton>
      </header>
    </div>
  );
}

export default App;
