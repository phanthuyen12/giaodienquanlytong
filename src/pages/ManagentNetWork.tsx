import { useEffect, useState } from 'react';
import CodeHighlight from '../components/Highlight';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../store';
import Dropdown from '../components/Dropdown';
import { setPageTitle } from '../store/themeConfigSlice';
import IconCode from '../components/Icon/IconCode';
import IconTrashLines from '../components/Icon/IconTrashLines';
import IconXCircle from '../components/Icon/IconXCircle';
import IconPencil from '../components/Icon/IconPencil';
import IconHorizontalDots from '../components/Icon/IconHorizontalDots';
import IconCircleCheck from '../components/Icon/IconCircleCheck';
import IconSettings from '../components/Icon/IconSettings';

const ManagentNetwork = () => {
  const dispatch = useDispatch();
  const [networkName, setNetworkName] = useState('');
  const [orgCount, setOrgCount] = useState(1);
  const [channelName, setChannelName] = useState('');
  const [networks, setNetworks] = useState([]);
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [chaincodeName, setChaincodeName] = useState('');
  const [chaincodeVersion, setChaincodeVersion] = useState('');

  const handleCreateNetwork = () => {
    // API call to create a new network
    console.log('Creating Network:', networkName, orgCount, channelName);
  };

  const handleStartNetwork = (network:String) => {
    // API call to start the network
    console.log('Starting Network:', network);
  };

  const handleStopNetwork = (network:String) => {
    // API call to stop the network
    console.log('Stopping Network:', network);
  };

  const handleDeployChaincode = () => {
    // API call to deploy chaincode
    console.log('Deploying Chaincode:', chaincodeName, chaincodeVersion, selectedNetwork);
  };

  useEffect(() => {
    dispatch(setPageTitle('Fabric Network Management'));
    // Fetch existing networks here
    // setNetworks(['Network1', 'Network2']); // Example data
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Fabric Network Management</h1>

      {/* Create New Network Form */}
      <div className="bg-white p-6 shadow rounded-lg mb-6">
        <h2 className="text-xl mb-4">Create New Network</h2>
        <div className="mb-4">
          <label className="block mb-2">Network Name</label>
          <input
            type="text"
            value={networkName}
            onChange={(e) => setNetworkName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter network name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Number of Organizations</label>
          <input
            type="number"
            value={orgCount}
            // onChange={(e) => setOrgCount(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter number of organizations"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Channel Name</label>
          <input
            type="text"
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter channel name"
          />
        </div>
        <button onClick={handleCreateNetwork} className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Network
        </button>
      </div>

      {/* Manage Existing Networks */}
      <div className="bg-white p-6 shadow rounded-lg mb-6">
        <h2 className="text-xl mb-4">Manage Networks</h2>
        <ul>
          {networks.map((network) => (
            <li key={network} className="mb-4 flex items-center justify-between">
              <span>{network}</span>
              <div className="space-x-4">
                <Tippy content="Start Network">
                  <button
                    onClick={() => handleStartNetwork(network)}
                    className="bg-green-500 text-white p-2 rounded"
                  >
                    <IconCircleCheck />
                  </button>
                </Tippy>
                <Tippy content="Stop Network">
                  <button
                    onClick={() => handleStopNetwork(network)}
                    className="bg-red-500 text-white p-2 rounded"
                  >
                    <IconXCircle />
                  </button>
                </Tippy>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Deploy Chaincode */}
      <div className="bg-white p-6 shadow rounded-lg mb-6">
        <h2 className="text-xl mb-4">Deploy Chaincode</h2>
        <div className="mb-4">
          <label className="block mb-2">Select Network</label>
          <Dropdown
            options={networks}
            selected={selectedNetwork}
            // onSelect={(network) => setSelectedNetwork(network)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Chaincode Name</label>
          <input
            type="text"
            value={chaincodeName}
            onChange={(e) => setChaincodeName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter chaincode name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Chaincode Version</label>
          <input
            type="text"
            value={chaincodeVersion}
            onChange={(e) => setChaincodeVersion(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter chaincode version"
          />
        </div>
        <button onClick={handleDeployChaincode} className="bg-blue-500 text-white px-4 py-2 rounded">
          Deploy Chaincode
        </button>
      </div>
    </div>
  );
};

export default ManagentNetwork;
