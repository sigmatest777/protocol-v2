import { IAaveRealTConfiguration } from './../../helpers/types';
import { ZERO_ADDRESS } from '../../helpers/constants';
import { IAaveArcConfiguration, eEthereumNetwork, eContractid } from '../../helpers/types';

import { CommonsConfig } from './commons';
import {
  strategy13895Saratoga,
  strategy15796Hartwell,
  strategy17813Bradford,
  strategy19163Mitchell,
  strategy19201Westphalia,
  strategy19311Keystone,
  strategy4061Grnd,
  strategy4380Beaconsfield,
  strategy4680Buckingham,
  strategy9717Everts,
} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const AaveArcConfig: IAaveRealTConfiguration = {
  ...CommonsConfig,
  MarketId: 'RealT',
  ProviderId: 1,
  LendingPoolImpl: eContractid.PermissionedLendingPool,
  ReservesConfig: {
    'REALTOKEN-S-13895-SARATOGA-ST-DETROIT-MI': strategy13895Saratoga,
    'REALTOKEN-S-4380-BEACONSFIELD-ST-DETROIT-MI': strategy4380Beaconsfield,
    'REALTOKEN-S-17813-BRADFORD-ST-DETROIT-M': strategy17813Bradford,
    'REALTOKEN-S-15796-HARTWELL-ST-DETROIT-MI': strategy15796Hartwell,
    'REALTOKEN-S-9717-EVERTS-ST-DETROIT-MI': strategy9717Everts,
    'REALTOKEN-S-19201-WESTPHALIA-ST-DETROIT-MI': strategy19201Westphalia,
    'REALTOKEN-S-19163-MITCHELL-ST-DETROIT-MI': strategy19163Mitchell,
    'REALTOKEN-S-4061-GRAND-ST-DETROIT-M': strategy4061Grnd,
    'REALTOKEN-S-4680-BUCKINGHAM-AVE-DETROIT-MI': strategy4680Buckingham,
    'REALTOKEN-S-19311-KEYSTONE-ST-DETROIT-MI': strategy19311Keystone,
  },
  ReserveAssets: {
    [eEthereumNetwork.buidlerevm]: {},
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.coverage]: {},
    [eEthereumNetwork.kovan]: {
      'REALTOKEN-S-13895-SARATOGA-ST-DETROIT-MI': '0x6F442Da588232DC57Bf0096E8dE48D6961D5CC83',
      'REALTOKEN-S-4380-BEACONSFIELD-ST-DETROIT-MI': '0x96700Ffae33c651bC329c3f3fbFE56e1f291f117',
      'REALTOKEN-S-17813-BRADFORD-ST-DETROIT-M': '0x499A6c19F5537dd6005E2B5c6E1263103f558Ba4',
      'REALTOKEN-S-15796-HARTWELL-ST-DETROIT-MI': '0xB3D3C1bBcEf737204AADb4fA6D90e974bc262197',
      'REALTOKEN-S-9717-EVERTS-ST-DETROIT-MI': '0x73BdE888664DF8DDfD156B52e6999EEaBAB57C94',
      'REALTOKEN-S-19201-WESTPHALIA-ST-DETROIT-MI': '0x830B0e9a5ecf36D0A886D21e1C20043cD2d16515',
      'REALTOKEN-S-19163-MITCHELL-ST-DETROIT-MI': '0x4Cc53Ee5ef306a95d407321d4B4acc30814C04ee',
      'REALTOKEN-S-4061-GRAND-ST-DETROIT-M': '0xd9e89bFebAe447B42C1Fa85C590716eC8820f737',
      'REALTOKEN-S-4680-BUCKINGHAM-AVE-DETROIT-MI': '0xeFe82D6baF0dB71f92889eB9d00721bD49121316',
      'REALTOKEN-S-19311-KEYSTONE-ST-DETROIT-MI': '0x8a9F904B4EaD6a97F3aB304d0D2196f5c602c807',
    },
    [eEthereumNetwork.ropsten]: {},
    [eEthereumNetwork.main]: {},
    [eEthereumNetwork.tenderly]: {},
  },
};

export default AaveArcConfig;
