// Automatically generated with Reach 0.1.13 (f79282c4)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (f79282c4)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'));
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  return {
    price_change: [ctc0, ctc0, ctc0],
    purchase: [ctc1, ctc2],
    restock: [ctc0, ctc0, ctc0],
    terminate: [ctc3],
    withdraw: [ctc0, ctc0, ctc0]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc6 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  
  const _coin_prices = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v6084, v6085, v6086, v6087, v6102, v6109] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6136, v6137, v11724, v11725, v11727, v11729, v11730] = svs;
      return (await ((async () => {
        
        
        return v6127;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6129, v6136, v6137, v6167, v6169, v6170, v6171, v6172, v6173, v6174, v6175, v6176, v6178, v6179, v6180] = svs;
      return (await ((async () => {
        
        
        return v6127;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _coin_supply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v6084, v6085, v6086, v6087, v6102, v6109] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6136, v6137, v11724, v11725, v11727, v11729, v11730] = svs;
      return (await ((async () => {
        
        
        return v11730;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6129, v6136, v6137, v6167, v6169, v6170, v6171, v6172, v6173, v6174, v6175, v6176, v6178, v6179, v6180] = svs;
      return (await ((async () => {
        
        
        return v6176;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _is_paused = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v6084, v6085, v6086, v6087, v6102, v6109] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6136, v6137, v11724, v11725, v11727, v11729, v11730] = svs;
      return (await ((async () => {
        
        
        return v6128;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6129, v6136, v6137, v6167, v6169, v6170, v6171, v6172, v6173, v6174, v6175, v6176, v6178, v6179, v6180] = svs;
      return (await ((async () => {
        
        
        return v6128;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      coin_prices: {
        decode: _coin_prices,
        dom: [],
        rng: ctc6
        },
      coin_supply: {
        decode: _coin_supply,
        dom: [],
        rng: ctc6
        },
      is_paused: {
        decode: _is_paused,
        dom: [],
        rng: ctc3
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc5, ctc0],
      3: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc6, ctc3, ctc5, ctc2, ctc4, ctc2, ctc2, ctc2, ctc6],
      5: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc6, ctc3, ctc3, ctc5, ctc2, ctc3, ctc3, ctc4, ctc2, ctc4, ctc2, ctc4, ctc2, ctc6, ctc2, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Tuple([]);
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Tuple([ctc3]);
  const ctc5 = stdlib.T_Data({
    buyer_api_purchase_bronze0_179: ctc1,
    buyer_api_purchase_gold0_179: ctc1,
    buyer_api_purchase_silver0_179: ctc1,
    controller_api_restock0_179: ctc4,
    controller_api_set_prices0_179: ctc4,
    controller_api_terminate0_179: ctc1,
    controller_api_toggle_pause0_179: ctc1,
    controller_api_withdraw0_179: ctc1
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([ctc2, ctc2, ctc6]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  
  
  const v6061 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v6062 = [v6061, v6061, v6061];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v6085, v6086, v6087], secs: v6089, time: v6088, didSend: v72, from: v6084 } = txn1;
  const v6090 = v6062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0')];
  const v6091 = stdlib.Array_set(v6090, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'));
  const v6092 = stdlib.Array_set(v6062, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'), v6091);
  const v6094 = v6092[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '1')];
  const v6095 = stdlib.Array_set(v6094, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'));
  const v6096 = stdlib.Array_set(v6092, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '1'), v6095);
  const v6098 = stdlib.tokenEq(v6086, v6085);
  const v6099 = v6098 ? false : true;
  stdlib.assert(v6099, {
    at: './src/contracts/coin_shop.rsh:116:14:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  const v6100 = v6096[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '2')];
  const v6101 = stdlib.Array_set(v6100, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'));
  const v6102 = stdlib.Array_set(v6096, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '2'), v6101);
  const v6104 = stdlib.tokenEq(v6087, v6085);
  const v6106 = stdlib.tokenEq(v6087, v6086);
  const v6107 = v6106 ? false : true;
  const v6108 = v6104 ? false : v6107;
  stdlib.assert(v6108, {
    at: './src/contracts/coin_shop.rsh:116:14:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  ;
  ;
  ;
  ;
  const v6109 = ctc.iam(v6084);
  const v6110 = stdlib.tokenEq(v6085, v6086);
  const v6112 = stdlib.tokenEq(v6085, v6087);
  const v6113 = v6112 ? false : true;
  const v6114 = v6110 ? false : v6113;
  const v6115 = stdlib.tokenEq(v6086, v6087);
  const v6116 = v6115 ? false : true;
  const v6117 = v6114 ? v6116 : false;
  stdlib.assert(v6117, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:122:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v6124, time: v6123, didSend: v114, from: v6122 } = txn2;
  ;
  const v6125 = stdlib.addressEq(v6084, v6122);
  stdlib.assert(v6125, {
    at: './src/contracts/coin_shop.rsh:128:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v6126 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30000000')];
  let v6127 = v6126;
  let v6128 = false;
  let v6129 = false;
  let v6130 = v6123;
  let v6136 = v6102;
  let v6137 = stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:105:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v6154 = v6129 ? false : true;
    
    return v6154;})()) {
    const v6167 = v6128 ? false : true;
    const v6168 = v6129 ? false : true;
    const v6169 = v6128 ? false : v6168;
    const v6170 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
    const v6171 = v6170[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
    const v6172 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
    const v6173 = v6172[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
    const v6174 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
    const v6175 = v6174[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
    const v6176 = [v6171, v6173, v6175];
    const v6178 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
    const v6179 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
    const v6180 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v6678], secs: v6680, time: v6679, didSend: v4870, from: v6677 } = txn4;
    switch (v6678[0]) {
      case 'buyer_api_purchase_bronze0_179': {
        const v6681 = v6678[1];
        undefined /* setApiDetails */;
        stdlib.assert(v6169, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:170:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:169:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'contract is currently inactive',
          who: 'Admin'
          });
        const v6689 = stdlib.ge(v6171, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:171:37:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v6689, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:171:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:169:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'balance insufficient for transaction',
          who: 'Admin'
          });
        const v6899 = stdlib.add(v6137, v6178);
        const v6900 = stdlib.le(v6899, stdlib.UInt_max);
        stdlib.assert(v6900, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v6905 = stdlib.le(v6171, stdlib.UInt_max);
        stdlib.assert(v6905, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v6913 = stdlib.le(v6173, stdlib.UInt_max);
        stdlib.assert(v6913, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v6921 = stdlib.le(v6175, stdlib.UInt_max);
        stdlib.assert(v6921, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v6958 = stdlib.sub(v6899, v6899);
        const v6959 = stdlib.ge(v6958, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:178:64:application', stdlib.UInt_max, '0'));
        stdlib.assert(v6959, {
          at: './src/contracts/coin_shop.rsh:178:64:application',
          fs: ['at ./src/contracts/coin_shop.rsh:176:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        ;
        const v6988 = stdlib.sub(v6171, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:44:decimal', stdlib.UInt_max, '1'));
        const v6989 = stdlib.ge(v6988, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v6989, {
          at: './src/contracts/coin_shop.rsh:179:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:176:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v6992 = stdlib.Array_set(v6170, '0', v6988);
        const v6993 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:56:application', stdlib.UInt_max, '0'), v6992);
        ;
        const v6994 = 'bronze';
        null;
        const v6995 = true;
        await txn4.getOutput('buyer_api_purchase_bronze', 'v6995', ctc6, v6995);
        const cv6127 = v6127;
        const cv6128 = v6128;
        const cv6129 = v6129;
        const cv6130 = v6679;
        const cv6136 = v6993;
        const cv6137 = v6958;
        
        v6127 = cv6127;
        v6128 = cv6128;
        v6129 = cv6129;
        v6130 = cv6130;
        v6136 = cv6136;
        v6137 = cv6137;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'buyer_api_purchase_gold0_179': {
        const v7311 = v6678[1];
        undefined /* setApiDetails */;
        stdlib.assert(v6169, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:210:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:209:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'contract is currently inactive',
          who: 'Admin'
          });
        const v7342 = stdlib.ge(v6175, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:211:37:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v7342, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:211:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:209:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'balance insufficient for transaction',
          who: 'Admin'
          });
        const v7529 = stdlib.add(v6137, v6180);
        const v7530 = stdlib.le(v7529, stdlib.UInt_max);
        stdlib.assert(v7530, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v7535 = stdlib.le(v6171, stdlib.UInt_max);
        stdlib.assert(v7535, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v7543 = stdlib.le(v6173, stdlib.UInt_max);
        stdlib.assert(v7543, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v7551 = stdlib.le(v6175, stdlib.UInt_max);
        stdlib.assert(v7551, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v7664 = stdlib.sub(v7529, v7529);
        const v7665 = stdlib.ge(v7664, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:218:64:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7665, {
          at: './src/contracts/coin_shop.rsh:218:64:application',
          fs: ['at ./src/contracts/coin_shop.rsh:216:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:216:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        ;
        const v7694 = stdlib.sub(v6175, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:50:decimal', stdlib.UInt_max, '1'));
        const v7695 = stdlib.ge(v7694, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7695, {
          at: './src/contracts/coin_shop.rsh:219:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:216:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:216:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v7698 = stdlib.Array_set(v6174, '0', v7694);
        const v7699 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:56:application', stdlib.UInt_max, '2'), v7698);
        ;
        const v7700 = 'gold  ';
        null;
        const v7701 = true;
        await txn4.getOutput('buyer_api_purchase_gold', 'v7701', ctc6, v7701);
        const cv6127 = v6127;
        const cv6128 = v6128;
        const cv6129 = v6129;
        const cv6130 = v6679;
        const cv6136 = v7699;
        const cv6137 = v7664;
        
        v6127 = cv6127;
        v6128 = cv6128;
        v6129 = cv6129;
        v6130 = cv6130;
        v6136 = cv6136;
        v6137 = cv6137;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'buyer_api_purchase_silver0_179': {
        const v7941 = v6678[1];
        undefined /* setApiDetails */;
        stdlib.assert(v6169, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:190:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:189:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'contract is currently inactive',
          who: 'Admin'
          });
        const v7995 = stdlib.ge(v6173, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:191:37:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v7995, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:191:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:189:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'balance insufficient for transaction',
          who: 'Admin'
          });
        const v8159 = stdlib.add(v6137, v6179);
        const v8160 = stdlib.le(v8159, stdlib.UInt_max);
        stdlib.assert(v8160, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v8165 = stdlib.le(v6171, stdlib.UInt_max);
        stdlib.assert(v8165, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v8173 = stdlib.le(v6173, stdlib.UInt_max);
        stdlib.assert(v8173, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v8181 = stdlib.le(v6175, stdlib.UInt_max);
        stdlib.assert(v8181, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v8370 = stdlib.sub(v8159, v8159);
        const v8371 = stdlib.ge(v8370, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:198:64:application', stdlib.UInt_max, '0'));
        stdlib.assert(v8371, {
          at: './src/contracts/coin_shop.rsh:198:64:application',
          fs: ['at ./src/contracts/coin_shop.rsh:196:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        ;
        const v8400 = stdlib.sub(v6173, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:47:decimal', stdlib.UInt_max, '1'));
        const v8401 = stdlib.ge(v8400, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v8401, {
          at: './src/contracts/coin_shop.rsh:199:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:196:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v8404 = stdlib.Array_set(v6172, '0', v8400);
        const v8405 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:56:application', stdlib.UInt_max, '1'), v8404);
        ;
        const v8406 = 'silver';
        null;
        const v8407 = true;
        await txn4.getOutput('buyer_api_purchase_silver', 'v8407', ctc6, v8407);
        const cv6127 = v6127;
        const cv6128 = v6128;
        const cv6129 = v6129;
        const cv6130 = v6679;
        const cv6136 = v8405;
        const cv6137 = v8370;
        
        v6127 = cv6127;
        v6128 = cv6128;
        v6129 = cv6129;
        v6130 = cv6130;
        v6136 = cv6136;
        v6137 = cv6137;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_restock0_179': {
        const v8571 = v6678[1];
        undefined /* setApiDetails */;
        const v8645 = v8571[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:232:14:spread', stdlib.UInt_max, '0')];
        const v8646 = stdlib.addressEq(v6677, v6109);
        stdlib.assert(v8646, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:233:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:232:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'action not authorized',
          who: 'Admin'
          });
        const v8648 = v8645[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:9:array ref', stdlib.UInt_max, '0')];
        const v8649 = stdlib.le(v8648, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:29:decimal', stdlib.UInt_max, '1200'));
        const v8650 = v8645[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:33:array ref', stdlib.UInt_max, '1')];
        const v8651 = stdlib.le(v8650, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:35:decimal', stdlib.UInt_max, '600'));
        const v8652 = v8649 ? v8651 : false;
        const v8653 = v8645[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:57:array ref', stdlib.UInt_max, '2')];
        const v8654 = stdlib.le(v8653, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:40:decimal', stdlib.UInt_max, '200'));
        const v8655 = v8652 ? v8654 : false;
        stdlib.assert(v8655, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:234:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:232:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'illegal param(s) were provided',
          who: 'Admin'
          });
        const v8790 = stdlib.le(v6137, stdlib.UInt_max);
        stdlib.assert(v8790, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v8794 = stdlib.add(v6171, v8648);
        const v8795 = stdlib.le(v8794, stdlib.UInt_max);
        stdlib.assert(v8795, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v8798 = stdlib.Array_set(v6170, '0', v8794);
        const v8799 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0'), v8798);
        ;
        const v8800 = v8799[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '1')];
        const v8801 = v8800[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0')];
        const v8802 = stdlib.add(v8801, v8650);
        const v8803 = stdlib.le(v8802, stdlib.UInt_max);
        stdlib.assert(v8803, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v8806 = stdlib.Array_set(v8800, '0', v8802);
        const v8807 = stdlib.Array_set(v8799, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '1'), v8806);
        ;
        const v8808 = v8807[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '2')];
        const v8809 = v8808[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0')];
        const v8810 = stdlib.add(v8809, v8653);
        const v8811 = stdlib.le(v8810, stdlib.UInt_max);
        stdlib.assert(v8811, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v8814 = stdlib.Array_set(v8808, '0', v8810);
        const v8815 = stdlib.Array_set(v8807, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '2'), v8814);
        ;
        const v9058 = v8815[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v9059 = v9058[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v9060 = v8815[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v9061 = v9060[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v9062 = v8815[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v9063 = v9062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        null;
        const v9066 = 'Successfully restocked coins';
        stdlib.protect(ctc7, await interact.log(v9066), {
          at: './src/contracts/coin_shop.rsh:242:39:application',
          fs: ['at ./src/contracts/coin_shop.rsh:242:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:242:39:function exp)', 'at ./src/contracts/coin_shop.rsh:242:39:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:242:39:application)', 'at ./src/contracts/coin_shop.rsh:238:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:238:27:function exp)'],
          msg: 'log',
          who: 'Admin'
          });
        
        const v9067 = true;
        await txn4.getOutput('controller_api_restock', 'v9067', ctc6, v9067);
        const cv6127 = v6127;
        const cv6128 = v6128;
        const cv6129 = v6129;
        const cv6130 = v6679;
        const cv6136 = v8815;
        const cv6137 = v6137;
        
        v6127 = cv6127;
        v6128 = cv6128;
        v6129 = cv6129;
        v6130 = cv6130;
        v6136 = cv6136;
        v6137 = cv6137;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_set_prices0_179': {
        const v9201 = v6678[1];
        undefined /* setApiDetails */;
        const v9308 = stdlib.addressEq(v6677, v6109);
        stdlib.assert(v9308, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:251:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:250:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:50:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:50:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'action not authorized',
          who: 'Admin'
          });
        const v9420 = stdlib.le(v6137, stdlib.UInt_max);
        stdlib.assert(v9420, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v9425 = stdlib.le(v6171, stdlib.UInt_max);
        stdlib.assert(v9425, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v9433 = stdlib.le(v6173, stdlib.UInt_max);
        stdlib.assert(v9433, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v9441 = stdlib.le(v6175, stdlib.UInt_max);
        stdlib.assert(v9441, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v9709 = v9201[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:250:14:spread', stdlib.UInt_max, '0')];
        const v9713 = v9709[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '0')];
        const v9714 = v9709[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '1')];
        const v9715 = v9709[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '2')];
        null;
        const v9717 = 'Successfully changed coin prices';
        stdlib.protect(ctc7, await interact.log(v9717), {
          at: './src/contracts/coin_shop.rsh:259:39:application',
          fs: ['at ./src/contracts/coin_shop.rsh:259:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:259:39:function exp)', 'at ./src/contracts/coin_shop.rsh:259:39:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:259:39:application)', 'at ./src/contracts/coin_shop.rsh:255:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:255:27:function exp)'],
          msg: 'log',
          who: 'Admin'
          });
        
        const v9718 = true;
        await txn4.getOutput('controller_api_set_prices', 'v9718', ctc6, v9718);
        const cv6127 = v9709;
        const cv6128 = v6128;
        const cv6129 = v6129;
        const cv6130 = v6679;
        const cv6136 = v6136;
        const cv6137 = v6137;
        
        v6127 = cv6127;
        v6128 = cv6128;
        v6129 = cv6129;
        v6130 = cv6130;
        v6136 = cv6136;
        v6137 = cv6137;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_terminate0_179': {
        const v9831 = v6678[1];
        undefined /* setApiDetails */;
        const v9957 = stdlib.addressEq(v6677, v6109);
        stdlib.assert(v9957, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:308:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:307:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:307:40:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:307:40:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'action not authorized',
          who: 'Admin'
          });
        const v10050 = stdlib.le(v6137, stdlib.UInt_max);
        stdlib.assert(v10050, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v10055 = stdlib.le(v6171, stdlib.UInt_max);
        stdlib.assert(v10055, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v10063 = stdlib.le(v6173, stdlib.UInt_max);
        stdlib.assert(v10063, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v10071 = stdlib.le(v6175, stdlib.UInt_max);
        stdlib.assert(v10071, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v10363 = 'Terminating Contract Execution';
        stdlib.protect(ctc7, await interact.log(v10363), {
          at: './src/contracts/coin_shop.rsh:313:39:application',
          fs: ['at ./src/contracts/coin_shop.rsh:313:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:313:39:function exp)', 'at ./src/contracts/coin_shop.rsh:313:39:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:313:39:application)', 'at ./src/contracts/coin_shop.rsh:312:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:312:27:function exp)'],
          msg: 'log',
          who: 'Admin'
          });
        
        const v10364 = true;
        null;
        const v10365 = true;
        await txn4.getOutput('controller_api_terminate', 'v10365', ctc6, v10365);
        const cv6127 = v6127;
        const cv6128 = v6128;
        const cv6129 = true;
        const cv6130 = v6679;
        const cv6136 = v6136;
        const cv6137 = v6137;
        
        v6127 = cv6127;
        v6128 = cv6128;
        v6129 = cv6129;
        v6130 = cv6130;
        v6136 = cv6136;
        v6137 = cv6137;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_toggle_pause0_179': {
        const v10461 = v6678[1];
        undefined /* setApiDetails */;
        const v10606 = stdlib.addressEq(v6677, v6109);
        stdlib.assert(v10606, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:268:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:267:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:267:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:267:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'action not authorized',
          who: 'Admin'
          });
        const v10680 = stdlib.le(v6137, stdlib.UInt_max);
        stdlib.assert(v10680, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v10685 = stdlib.le(v6171, stdlib.UInt_max);
        stdlib.assert(v10685, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v10693 = stdlib.le(v6173, stdlib.UInt_max);
        stdlib.assert(v10693, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v10701 = stdlib.le(v6175, stdlib.UInt_max);
        stdlib.assert(v10701, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v11005 = 'Resuming Contract APIs        ';
        const v11006 = 'Pausing Contract APIs         ';
        const v11007 = v6128 ? v11005 : v11006;
        stdlib.protect(ctc7, await interact.log(v11007), {
          at: './src/contracts/coin_shop.rsh:277:39:application',
          fs: ['at ./src/contracts/coin_shop.rsh:277:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:277:39:function exp)', 'at ./src/contracts/coin_shop.rsh:277:39:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:277:39:application)', 'at ./src/contracts/coin_shop.rsh:272:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:272:27:function exp)'],
          msg: 'log',
          who: 'Admin'
          });
        
        await txn4.getOutput('controller_api_toggle_pause', 'v6167', ctc6, v6167);
        const cv6127 = v6127;
        const cv6128 = v6167;
        const cv6129 = v6129;
        const cv6130 = v6679;
        const cv6136 = v6136;
        const cv6137 = v6137;
        
        v6127 = cv6127;
        v6128 = cv6128;
        v6129 = cv6129;
        v6130 = cv6130;
        v6136 = cv6136;
        v6137 = cv6137;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_withdraw0_179': {
        const v11091 = v6678[1];
        undefined /* setApiDetails */;
        const v11255 = stdlib.addressEq(v6677, v6109);
        stdlib.assert(v11255, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:288:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:287:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'action not authorized',
          who: 'Admin'
          });
        const v11310 = stdlib.le(v6137, stdlib.UInt_max);
        stdlib.assert(v11310, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v11315 = stdlib.le(v6171, stdlib.UInt_max);
        stdlib.assert(v11315, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v11323 = stdlib.le(v6173, stdlib.UInt_max);
        stdlib.assert(v11323, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v11331 = stdlib.le(v6175, stdlib.UInt_max);
        stdlib.assert(v11331, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v11651 = 'Withdrawing coins from contract';
        stdlib.protect(ctc7, await interact.log(v11651), {
          at: './src/contracts/coin_shop.rsh:293:39:application',
          fs: ['at ./src/contracts/coin_shop.rsh:293:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:293:39:function exp)', 'at ./src/contracts/coin_shop.rsh:293:39:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:293:39:application)', 'at ./src/contracts/coin_shop.rsh:292:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:292:27:function exp)'],
          msg: 'log',
          who: 'Admin'
          });
        
        const v11686 = stdlib.sub(v6171, v6171);
        const v11687 = stdlib.ge(v11686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v11687, {
          at: './src/contracts/coin_shop.rsh:297:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:292:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:292:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v11690 = stdlib.Array_set(v6170, '0', v11686);
        const v11691 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '0'), v11690);
        ;
        const v11692 = v11691[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '1')];
        const v11693 = v11692[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '0')];
        const v11697 = stdlib.sub(v11693, v6173);
        const v11698 = stdlib.ge(v11697, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v11698, {
          at: './src/contracts/coin_shop.rsh:297:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:292:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:292:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v11701 = stdlib.Array_set(v11692, '0', v11697);
        const v11702 = stdlib.Array_set(v11691, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '1'), v11701);
        ;
        const v11703 = v11702[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '2')];
        const v11704 = v11703[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '0')];
        const v11708 = stdlib.sub(v11704, v6175);
        const v11709 = stdlib.ge(v11708, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v11709, {
          at: './src/contracts/coin_shop.rsh:297:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:292:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:292:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v11712 = stdlib.Array_set(v11703, '0', v11708);
        const v11713 = stdlib.Array_set(v11702, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '2'), v11712);
        ;
        null;
        const v11714 = true;
        await txn4.getOutput('controller_api_withdraw', 'v11714', ctc6, v11714);
        const cv6127 = v6127;
        const cv6128 = v6128;
        const cv6129 = v6129;
        const cv6130 = v6679;
        const cv6136 = v11713;
        const cv6137 = v6137;
        
        v6127 = cv6127;
        v6128 = cv6128;
        v6129 = cv6129;
        v6130 = cv6130;
        v6136 = cv6136;
        v6137 = cv6137;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v11724 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
  const v11725 = v11724[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
  const v11726 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
  const v11727 = v11726[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
  const v11728 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
  const v11729 = v11728[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
  const v11730 = [v11725, v11727, v11729];
  const txn4 = await (ctc.sendrecv({
    args: [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6136, v6137, v11724, v11725, v11727, v11729, v11730],
    evt_cnt: 0,
    funcNum: 3,
    lct: v6130,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v11743, time: v11742, didSend: v5502, from: v11741 } = txn4;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v6109,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v6109,
        tok: v6085
        });
      sim_r.txns.push({
        kind: 'from',
        to: v6109,
        tok: v6086
        });
      sim_r.txns.push({
        kind: 'from',
        to: v6109,
        tok: v6087
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v6087
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v6086
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v6085
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc8, ctc0, ctc0, ctc0, ctc8, ctc3, ctc6, ctc10, ctc2, ctc9, ctc2, ctc2, ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v11743, time: v11742, didSend: v5502, from: v11741 } = txn4;
  ;
  const v11744 = stdlib.addressEq(v6109, v11741);
  const v11745 = stdlib.addressEq(v6084, v11741);
  const v11746 = v11744 ? true : v11745;
  stdlib.assert(v11746, {
    at: 'reach standard library:197:11:dot',
    fs: ['at ./src/contracts/coin_shop.rsh:325:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v11769 = stdlib.sub(v6137, v6137);
  const v11770 = stdlib.ge(v11769, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
  stdlib.assert(v11770, {
    at: 'reach standard library:198:46:application',
    fs: ['at ./src/contracts/coin_shop.rsh:325:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v11777 = stdlib.sub(v11725, v11725);
  const v11778 = stdlib.ge(v11777, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
  stdlib.assert(v11778, {
    at: 'reach standard library:198:46:application',
    fs: ['at ./src/contracts/coin_shop.rsh:325:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v11781 = stdlib.Array_set(v11724, '0', v11777);
  const v11782 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'), v11781);
  ;
  const v11783 = v11782[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '1')];
  const v11784 = v11783[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0')];
  const v11788 = stdlib.sub(v11784, v11727);
  const v11789 = stdlib.ge(v11788, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
  stdlib.assert(v11789, {
    at: 'reach standard library:198:46:application',
    fs: ['at ./src/contracts/coin_shop.rsh:325:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v11792 = stdlib.Array_set(v11783, '0', v11788);
  const v11793 = stdlib.Array_set(v11782, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '1'), v11792);
  ;
  const v11794 = v11793[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '2')];
  const v11795 = v11794[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0')];
  const v11799 = stdlib.sub(v11795, v11729);
  const v11800 = stdlib.ge(v11799, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
  stdlib.assert(v11800, {
    at: 'reach standard library:198:46:application',
    fs: ['at ./src/contracts/coin_shop.rsh:325:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v11818 = 'Closing contract...';
  stdlib.protect(ctc7, await interact.log(v11818), {
    at: './src/contracts/coin_shop.rsh:328:31:application',
    fs: ['at ./src/contracts/coin_shop.rsh:328:31:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:328:31:function exp)', 'at ./src/contracts/coin_shop.rsh:328:31:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:328:31:application)', 'at reach standard library:200:8:application call to "after" (defined at: ./src/contracts/coin_shop.rsh:327:12:function exp)', 'at ./src/contracts/coin_shop.rsh:325:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'log',
    who: 'Admin'
    });
  
  return;
  
  
  
  
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0, ctc0]);
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc4, ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Data({
    buyer_api_purchase_bronze0_179: ctc3,
    buyer_api_purchase_gold0_179: ctc3,
    buyer_api_purchase_silver0_179: ctc3,
    controller_api_restock0_179: ctc6,
    controller_api_set_prices0_179: ctc6,
    controller_api_terminate0_179: ctc3,
    controller_api_toggle_pause0_179: ctc3,
    controller_api_withdraw0_179: ctc3
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  
  
  const v6061 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v6062 = [v6061, v6061, v6061];
  const v6066 = stdlib.protect(ctc1, interact.coin_asa_ids, 'for Deployer\'s interact field coin_asa_ids');
  const v6067 = v6066[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:57:33:application', stdlib.UInt_max, '0')];
  const v6068 = v6066[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:57:33:application', stdlib.UInt_max, '1')];
  const v6069 = v6066[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:57:33:application', stdlib.UInt_max, '2')];
  
  const v6075 = stdlib.tokenEq(v6067, v6068);
  const v6077 = stdlib.tokenEq(v6067, v6069);
  const v6078 = v6077 ? false : true;
  const v6079 = v6075 ? false : v6078;
  const v6080 = stdlib.tokenEq(v6068, v6069);
  const v6081 = v6080 ? false : true;
  const v6082 = v6079 ? v6081 : false;
  stdlib.assert(v6082, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:111:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:108:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:108:22:function exp)'],
    msg: 'Token asa ids are not all unique!',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v6067, v6068, v6069],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6085, v6086, v6087], secs: v6089, time: v6088, didSend: v72, from: v6084 } = txn1;
      
      const v6090 = v6062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0')];
      const v6091 = stdlib.Array_set(v6090, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'));
      const v6092 = stdlib.Array_set(v6062, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'), v6091);
      const v6094 = v6092[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '1')];
      const v6095 = stdlib.Array_set(v6094, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'));
      const v6096 = stdlib.Array_set(v6092, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '1'), v6095);
      const v6100 = v6096[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '2')];
      const v6101 = stdlib.Array_set(v6100, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'));
      const v6102 = stdlib.Array_set(v6096, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '2'), v6101);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v6085
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v6086
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v6087
        });
      ;
      const v6109 = v6084;
      const v6119 = await ctc.getContractInfo();
      const v6120 = await ctc.getContractAddress();
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v6085, v6086, v6087], secs: v6089, time: v6088, didSend: v72, from: v6084 } = txn1;
  const v6090 = v6062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0')];
  const v6091 = stdlib.Array_set(v6090, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'));
  const v6092 = stdlib.Array_set(v6062, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'), v6091);
  const v6094 = v6092[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '1')];
  const v6095 = stdlib.Array_set(v6094, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'));
  const v6096 = stdlib.Array_set(v6092, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '1'), v6095);
  const v6098 = stdlib.tokenEq(v6086, v6085);
  const v6099 = v6098 ? false : true;
  stdlib.assert(v6099, {
    at: './src/contracts/coin_shop.rsh:116:14:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  const v6100 = v6096[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '2')];
  const v6101 = stdlib.Array_set(v6100, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'));
  const v6102 = stdlib.Array_set(v6096, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '2'), v6101);
  const v6104 = stdlib.tokenEq(v6087, v6085);
  const v6106 = stdlib.tokenEq(v6087, v6086);
  const v6107 = v6106 ? false : true;
  const v6108 = v6104 ? false : v6107;
  stdlib.assert(v6108, {
    at: './src/contracts/coin_shop.rsh:116:14:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  ;
  ;
  ;
  ;
  const v6109 = v6084;
  const v6110 = stdlib.tokenEq(v6085, v6086);
  const v6112 = stdlib.tokenEq(v6085, v6087);
  const v6113 = v6112 ? false : true;
  const v6114 = v6110 ? false : v6113;
  const v6115 = stdlib.tokenEq(v6086, v6087);
  const v6116 = v6115 ? false : true;
  const v6117 = v6114 ? v6116 : false;
  stdlib.assert(v6117, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:122:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  const v6119 = await ctc.getContractInfo();
  const v6120 = await ctc.getContractAddress();
  stdlib.protect(ctc2, await interact.deployed(v6119, v6120), {
    at: './src/contracts/coin_shop.rsh:126:31:application',
    fs: ['at ./src/contracts/coin_shop.rsh:126:31:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:31:function exp)', 'at ./src/contracts/coin_shop.rsh:126:31:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:126:31:application)'],
    msg: 'deployed',
    who: 'Deployer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v6084, v6085, v6086, v6087, v6102, v6109],
    evt_cnt: 0,
    funcNum: 1,
    lct: v6088,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:128:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v6124, time: v6123, didSend: v114, from: v6122 } = txn2;
      
      ;
      const v6126 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30000000')];
      const v6127 = v6126;
      const v6128 = false;
      const v6129 = false;
      const v6130 = v6123;
      const v6136 = v6102;
      const v6137 = stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:105:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v6154 = v6129 ? false : true;
        
        return v6154;})()) {
        const v6167 = v6128 ? false : true;
        const v6168 = v6129 ? false : true;
        const v6169 = v6128 ? false : v6168;
        const v6170 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v6171 = v6170[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v6172 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v6173 = v6172[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v6174 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v6175 = v6174[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v6176 = [v6171, v6173, v6175];
        const v6178 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
        const v6179 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
        const v6180 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
        sim_r.isHalt = false;
        }
      else {
        const v11724 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v11725 = v11724[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v11726 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v11727 = v11726[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v11728 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v11729 = v11728[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v11730 = [v11725, v11727, v11729];
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc0, ctc0, ctc0, ctc11, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v6124, time: v6123, didSend: v114, from: v6122 } = txn2;
  ;
  const v6125 = stdlib.addressEq(v6084, v6122);
  stdlib.assert(v6125, {
    at: './src/contracts/coin_shop.rsh:128:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v6126 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30000000')];
  let v6127 = v6126;
  let v6128 = false;
  let v6129 = false;
  let v6130 = v6123;
  let v6136 = v6102;
  let v6137 = stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:105:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v6154 = v6129 ? false : true;
    
    return v6154;})()) {
    const v6167 = v6128 ? false : true;
    const v6168 = v6129 ? false : true;
    const v6169 = v6128 ? false : v6168;
    const v6170 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
    const v6171 = v6170[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
    const v6172 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
    const v6173 = v6172[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
    const v6174 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
    const v6175 = v6174[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
    const v6176 = [v6171, v6173, v6175];
    const v6178 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
    const v6179 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
    const v6180 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v6678], secs: v6680, time: v6679, didSend: v4870, from: v6677 } = txn4;
    switch (v6678[0]) {
      case 'buyer_api_purchase_bronze0_179': {
        const v6681 = v6678[1];
        undefined /* setApiDetails */;
        stdlib.assert(v6169, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:170:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:169:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'contract is currently inactive',
          who: 'Deployer'
          });
        const v6689 = stdlib.ge(v6171, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:171:37:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v6689, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:171:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:169:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'balance insufficient for transaction',
          who: 'Deployer'
          });
        const v6899 = stdlib.add(v6137, v6178);
        const v6900 = stdlib.le(v6899, stdlib.UInt_max);
        stdlib.assert(v6900, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v6905 = stdlib.le(v6171, stdlib.UInt_max);
        stdlib.assert(v6905, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v6913 = stdlib.le(v6173, stdlib.UInt_max);
        stdlib.assert(v6913, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v6921 = stdlib.le(v6175, stdlib.UInt_max);
        stdlib.assert(v6921, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v6958 = stdlib.sub(v6899, v6899);
        const v6959 = stdlib.ge(v6958, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:178:64:application', stdlib.UInt_max, '0'));
        stdlib.assert(v6959, {
          at: './src/contracts/coin_shop.rsh:178:64:application',
          fs: ['at ./src/contracts/coin_shop.rsh:176:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Deployer'
          });
        ;
        const v6988 = stdlib.sub(v6171, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:44:decimal', stdlib.UInt_max, '1'));
        const v6989 = stdlib.ge(v6988, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v6989, {
          at: './src/contracts/coin_shop.rsh:179:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:176:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Deployer'
          });
        const v6992 = stdlib.Array_set(v6170, '0', v6988);
        const v6993 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:56:application', stdlib.UInt_max, '0'), v6992);
        ;
        const v6994 = 'bronze';
        null;
        const v6995 = true;
        await txn4.getOutput('buyer_api_purchase_bronze', 'v6995', ctc8, v6995);
        const cv6127 = v6127;
        const cv6128 = v6128;
        const cv6129 = v6129;
        const cv6130 = v6679;
        const cv6136 = v6993;
        const cv6137 = v6958;
        
        v6127 = cv6127;
        v6128 = cv6128;
        v6129 = cv6129;
        v6130 = cv6130;
        v6136 = cv6136;
        v6137 = cv6137;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'buyer_api_purchase_gold0_179': {
        const v7311 = v6678[1];
        undefined /* setApiDetails */;
        stdlib.assert(v6169, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:210:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:209:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'contract is currently inactive',
          who: 'Deployer'
          });
        const v7342 = stdlib.ge(v6175, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:211:37:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v7342, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:211:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:209:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'balance insufficient for transaction',
          who: 'Deployer'
          });
        const v7529 = stdlib.add(v6137, v6180);
        const v7530 = stdlib.le(v7529, stdlib.UInt_max);
        stdlib.assert(v7530, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v7535 = stdlib.le(v6171, stdlib.UInt_max);
        stdlib.assert(v7535, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v7543 = stdlib.le(v6173, stdlib.UInt_max);
        stdlib.assert(v7543, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v7551 = stdlib.le(v6175, stdlib.UInt_max);
        stdlib.assert(v7551, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v7664 = stdlib.sub(v7529, v7529);
        const v7665 = stdlib.ge(v7664, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:218:64:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7665, {
          at: './src/contracts/coin_shop.rsh:218:64:application',
          fs: ['at ./src/contracts/coin_shop.rsh:216:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:216:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Deployer'
          });
        ;
        const v7694 = stdlib.sub(v6175, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:50:decimal', stdlib.UInt_max, '1'));
        const v7695 = stdlib.ge(v7694, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7695, {
          at: './src/contracts/coin_shop.rsh:219:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:216:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:216:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Deployer'
          });
        const v7698 = stdlib.Array_set(v6174, '0', v7694);
        const v7699 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:56:application', stdlib.UInt_max, '2'), v7698);
        ;
        const v7700 = 'gold  ';
        null;
        const v7701 = true;
        await txn4.getOutput('buyer_api_purchase_gold', 'v7701', ctc8, v7701);
        const cv6127 = v6127;
        const cv6128 = v6128;
        const cv6129 = v6129;
        const cv6130 = v6679;
        const cv6136 = v7699;
        const cv6137 = v7664;
        
        v6127 = cv6127;
        v6128 = cv6128;
        v6129 = cv6129;
        v6130 = cv6130;
        v6136 = cv6136;
        v6137 = cv6137;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'buyer_api_purchase_silver0_179': {
        const v7941 = v6678[1];
        undefined /* setApiDetails */;
        stdlib.assert(v6169, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:190:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:189:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'contract is currently inactive',
          who: 'Deployer'
          });
        const v7995 = stdlib.ge(v6173, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:191:37:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v7995, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:191:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:189:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'balance insufficient for transaction',
          who: 'Deployer'
          });
        const v8159 = stdlib.add(v6137, v6179);
        const v8160 = stdlib.le(v8159, stdlib.UInt_max);
        stdlib.assert(v8160, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v8165 = stdlib.le(v6171, stdlib.UInt_max);
        stdlib.assert(v8165, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v8173 = stdlib.le(v6173, stdlib.UInt_max);
        stdlib.assert(v8173, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v8181 = stdlib.le(v6175, stdlib.UInt_max);
        stdlib.assert(v8181, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v8370 = stdlib.sub(v8159, v8159);
        const v8371 = stdlib.ge(v8370, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:198:64:application', stdlib.UInt_max, '0'));
        stdlib.assert(v8371, {
          at: './src/contracts/coin_shop.rsh:198:64:application',
          fs: ['at ./src/contracts/coin_shop.rsh:196:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Deployer'
          });
        ;
        const v8400 = stdlib.sub(v6173, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:47:decimal', stdlib.UInt_max, '1'));
        const v8401 = stdlib.ge(v8400, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v8401, {
          at: './src/contracts/coin_shop.rsh:199:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:196:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Deployer'
          });
        const v8404 = stdlib.Array_set(v6172, '0', v8400);
        const v8405 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:56:application', stdlib.UInt_max, '1'), v8404);
        ;
        const v8406 = 'silver';
        null;
        const v8407 = true;
        await txn4.getOutput('buyer_api_purchase_silver', 'v8407', ctc8, v8407);
        const cv6127 = v6127;
        const cv6128 = v6128;
        const cv6129 = v6129;
        const cv6130 = v6679;
        const cv6136 = v8405;
        const cv6137 = v8370;
        
        v6127 = cv6127;
        v6128 = cv6128;
        v6129 = cv6129;
        v6130 = cv6130;
        v6136 = cv6136;
        v6137 = cv6137;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_restock0_179': {
        const v8571 = v6678[1];
        undefined /* setApiDetails */;
        const v8645 = v8571[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:232:14:spread', stdlib.UInt_max, '0')];
        const v8646 = stdlib.addressEq(v6677, v6109);
        stdlib.assert(v8646, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:233:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:232:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'action not authorized',
          who: 'Deployer'
          });
        const v8648 = v8645[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:9:array ref', stdlib.UInt_max, '0')];
        const v8649 = stdlib.le(v8648, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:29:decimal', stdlib.UInt_max, '1200'));
        const v8650 = v8645[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:33:array ref', stdlib.UInt_max, '1')];
        const v8651 = stdlib.le(v8650, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:35:decimal', stdlib.UInt_max, '600'));
        const v8652 = v8649 ? v8651 : false;
        const v8653 = v8645[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:57:array ref', stdlib.UInt_max, '2')];
        const v8654 = stdlib.le(v8653, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:40:decimal', stdlib.UInt_max, '200'));
        const v8655 = v8652 ? v8654 : false;
        stdlib.assert(v8655, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:234:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:232:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'illegal param(s) were provided',
          who: 'Deployer'
          });
        const v8790 = stdlib.le(v6137, stdlib.UInt_max);
        stdlib.assert(v8790, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v8794 = stdlib.add(v6171, v8648);
        const v8795 = stdlib.le(v8794, stdlib.UInt_max);
        stdlib.assert(v8795, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        const v8798 = stdlib.Array_set(v6170, '0', v8794);
        const v8799 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0'), v8798);
        ;
        const v8800 = v8799[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '1')];
        const v8801 = v8800[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0')];
        const v8802 = stdlib.add(v8801, v8650);
        const v8803 = stdlib.le(v8802, stdlib.UInt_max);
        stdlib.assert(v8803, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        const v8806 = stdlib.Array_set(v8800, '0', v8802);
        const v8807 = stdlib.Array_set(v8799, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '1'), v8806);
        ;
        const v8808 = v8807[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '2')];
        const v8809 = v8808[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0')];
        const v8810 = stdlib.add(v8809, v8653);
        const v8811 = stdlib.le(v8810, stdlib.UInt_max);
        stdlib.assert(v8811, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        const v8814 = stdlib.Array_set(v8808, '0', v8810);
        const v8815 = stdlib.Array_set(v8807, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '2'), v8814);
        ;
        const v9058 = v8815[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v9059 = v9058[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v9060 = v8815[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v9061 = v9060[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v9062 = v8815[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v9063 = v9062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        null;
        const v9067 = true;
        await txn4.getOutput('controller_api_restock', 'v9067', ctc8, v9067);
        const cv6127 = v6127;
        const cv6128 = v6128;
        const cv6129 = v6129;
        const cv6130 = v6679;
        const cv6136 = v8815;
        const cv6137 = v6137;
        
        v6127 = cv6127;
        v6128 = cv6128;
        v6129 = cv6129;
        v6130 = cv6130;
        v6136 = cv6136;
        v6137 = cv6137;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_set_prices0_179': {
        const v9201 = v6678[1];
        undefined /* setApiDetails */;
        const v9308 = stdlib.addressEq(v6677, v6109);
        stdlib.assert(v9308, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:251:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:250:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:50:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:50:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'action not authorized',
          who: 'Deployer'
          });
        const v9420 = stdlib.le(v6137, stdlib.UInt_max);
        stdlib.assert(v9420, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v9425 = stdlib.le(v6171, stdlib.UInt_max);
        stdlib.assert(v9425, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v9433 = stdlib.le(v6173, stdlib.UInt_max);
        stdlib.assert(v9433, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v9441 = stdlib.le(v6175, stdlib.UInt_max);
        stdlib.assert(v9441, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v9709 = v9201[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:250:14:spread', stdlib.UInt_max, '0')];
        const v9713 = v9709[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '0')];
        const v9714 = v9709[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '1')];
        const v9715 = v9709[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '2')];
        null;
        const v9718 = true;
        await txn4.getOutput('controller_api_set_prices', 'v9718', ctc8, v9718);
        const cv6127 = v9709;
        const cv6128 = v6128;
        const cv6129 = v6129;
        const cv6130 = v6679;
        const cv6136 = v6136;
        const cv6137 = v6137;
        
        v6127 = cv6127;
        v6128 = cv6128;
        v6129 = cv6129;
        v6130 = cv6130;
        v6136 = cv6136;
        v6137 = cv6137;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_terminate0_179': {
        const v9831 = v6678[1];
        undefined /* setApiDetails */;
        const v9957 = stdlib.addressEq(v6677, v6109);
        stdlib.assert(v9957, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:308:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:307:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:307:40:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:307:40:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'action not authorized',
          who: 'Deployer'
          });
        const v10050 = stdlib.le(v6137, stdlib.UInt_max);
        stdlib.assert(v10050, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v10055 = stdlib.le(v6171, stdlib.UInt_max);
        stdlib.assert(v10055, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v10063 = stdlib.le(v6173, stdlib.UInt_max);
        stdlib.assert(v10063, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v10071 = stdlib.le(v6175, stdlib.UInt_max);
        stdlib.assert(v10071, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v10364 = true;
        null;
        const v10365 = true;
        await txn4.getOutput('controller_api_terminate', 'v10365', ctc8, v10365);
        const cv6127 = v6127;
        const cv6128 = v6128;
        const cv6129 = true;
        const cv6130 = v6679;
        const cv6136 = v6136;
        const cv6137 = v6137;
        
        v6127 = cv6127;
        v6128 = cv6128;
        v6129 = cv6129;
        v6130 = cv6130;
        v6136 = cv6136;
        v6137 = cv6137;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_toggle_pause0_179': {
        const v10461 = v6678[1];
        undefined /* setApiDetails */;
        const v10606 = stdlib.addressEq(v6677, v6109);
        stdlib.assert(v10606, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:268:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:267:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:267:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:267:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'action not authorized',
          who: 'Deployer'
          });
        const v10680 = stdlib.le(v6137, stdlib.UInt_max);
        stdlib.assert(v10680, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v10685 = stdlib.le(v6171, stdlib.UInt_max);
        stdlib.assert(v10685, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v10693 = stdlib.le(v6173, stdlib.UInt_max);
        stdlib.assert(v10693, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v10701 = stdlib.le(v6175, stdlib.UInt_max);
        stdlib.assert(v10701, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        await txn4.getOutput('controller_api_toggle_pause', 'v6167', ctc8, v6167);
        const cv6127 = v6127;
        const cv6128 = v6167;
        const cv6129 = v6129;
        const cv6130 = v6679;
        const cv6136 = v6136;
        const cv6137 = v6137;
        
        v6127 = cv6127;
        v6128 = cv6128;
        v6129 = cv6129;
        v6130 = cv6130;
        v6136 = cv6136;
        v6137 = cv6137;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_withdraw0_179': {
        const v11091 = v6678[1];
        undefined /* setApiDetails */;
        const v11255 = stdlib.addressEq(v6677, v6109);
        stdlib.assert(v11255, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:288:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:287:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'action not authorized',
          who: 'Deployer'
          });
        const v11310 = stdlib.le(v6137, stdlib.UInt_max);
        stdlib.assert(v11310, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v11315 = stdlib.le(v6171, stdlib.UInt_max);
        stdlib.assert(v11315, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v11323 = stdlib.le(v6173, stdlib.UInt_max);
        stdlib.assert(v11323, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v11331 = stdlib.le(v6175, stdlib.UInt_max);
        stdlib.assert(v11331, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v11686 = stdlib.sub(v6171, v6171);
        const v11687 = stdlib.ge(v11686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v11687, {
          at: './src/contracts/coin_shop.rsh:297:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:292:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:292:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Deployer'
          });
        const v11690 = stdlib.Array_set(v6170, '0', v11686);
        const v11691 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '0'), v11690);
        ;
        const v11692 = v11691[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '1')];
        const v11693 = v11692[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '0')];
        const v11697 = stdlib.sub(v11693, v6173);
        const v11698 = stdlib.ge(v11697, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v11698, {
          at: './src/contracts/coin_shop.rsh:297:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:292:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:292:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Deployer'
          });
        const v11701 = stdlib.Array_set(v11692, '0', v11697);
        const v11702 = stdlib.Array_set(v11691, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '1'), v11701);
        ;
        const v11703 = v11702[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '2')];
        const v11704 = v11703[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '0')];
        const v11708 = stdlib.sub(v11704, v6175);
        const v11709 = stdlib.ge(v11708, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v11709, {
          at: './src/contracts/coin_shop.rsh:297:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:292:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:292:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Deployer'
          });
        const v11712 = stdlib.Array_set(v11703, '0', v11708);
        const v11713 = stdlib.Array_set(v11702, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '2'), v11712);
        ;
        null;
        const v11714 = true;
        await txn4.getOutput('controller_api_withdraw', 'v11714', ctc8, v11714);
        const cv6127 = v6127;
        const cv6128 = v6128;
        const cv6129 = v6129;
        const cv6130 = v6679;
        const cv6136 = v11713;
        const cv6137 = v6137;
        
        v6127 = cv6127;
        v6128 = cv6128;
        v6129 = cv6129;
        v6130 = cv6130;
        v6136 = cv6136;
        v6137 = cv6137;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v11724 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
  const v11725 = v11724[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
  const v11726 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
  const v11727 = v11726[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
  const v11728 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
  const v11729 = v11728[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
  const v11730 = [v11725, v11727, v11729];
  const txn4 = await (ctc.sendrecv({
    args: [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6136, v6137, v11724, v11725, v11727, v11729, v11730],
    evt_cnt: 0,
    funcNum: 3,
    lct: v6130,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v11743, time: v11742, didSend: v5502, from: v11741 } = txn4;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v6109,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v6109,
        tok: v6085
        });
      sim_r.txns.push({
        kind: 'from',
        to: v6109,
        tok: v6086
        });
      sim_r.txns.push({
        kind: 'from',
        to: v6109,
        tok: v6087
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v6087
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v6086
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v6085
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc0, ctc0, ctc0, ctc9, ctc5, ctc8, ctc11, ctc4, ctc10, ctc4, ctc4, ctc4, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v11743, time: v11742, didSend: v5502, from: v11741 } = txn4;
  ;
  const v11744 = stdlib.addressEq(v6109, v11741);
  const v11745 = stdlib.addressEq(v6084, v11741);
  const v11746 = v11744 ? true : v11745;
  stdlib.assert(v11746, {
    at: 'reach standard library:197:11:dot',
    fs: ['at ./src/contracts/coin_shop.rsh:325:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v11769 = stdlib.sub(v6137, v6137);
  const v11770 = stdlib.ge(v11769, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
  stdlib.assert(v11770, {
    at: 'reach standard library:198:46:application',
    fs: ['at ./src/contracts/coin_shop.rsh:325:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'assume >= 0',
    who: 'Deployer'
    });
  ;
  const v11777 = stdlib.sub(v11725, v11725);
  const v11778 = stdlib.ge(v11777, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
  stdlib.assert(v11778, {
    at: 'reach standard library:198:46:application',
    fs: ['at ./src/contracts/coin_shop.rsh:325:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'assume >= 0',
    who: 'Deployer'
    });
  const v11781 = stdlib.Array_set(v11724, '0', v11777);
  const v11782 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'), v11781);
  ;
  const v11783 = v11782[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '1')];
  const v11784 = v11783[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0')];
  const v11788 = stdlib.sub(v11784, v11727);
  const v11789 = stdlib.ge(v11788, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
  stdlib.assert(v11789, {
    at: 'reach standard library:198:46:application',
    fs: ['at ./src/contracts/coin_shop.rsh:325:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'assume >= 0',
    who: 'Deployer'
    });
  const v11792 = stdlib.Array_set(v11783, '0', v11788);
  const v11793 = stdlib.Array_set(v11782, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '1'), v11792);
  ;
  const v11794 = v11793[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '2')];
  const v11795 = v11794[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0')];
  const v11799 = stdlib.sub(v11795, v11729);
  const v11800 = stdlib.ge(v11799, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
  stdlib.assert(v11800, {
    at: 'reach standard library:198:46:application',
    fs: ['at ./src/contracts/coin_shop.rsh:325:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'assume >= 0',
    who: 'Deployer'
    });
  ;
  return;
  
  
  
  
  
  
  };
export async function _buyer_api_purchase_bronze5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _buyer_api_purchase_bronze5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _buyer_api_purchase_bronze5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Data({
    buyer_api_purchase_bronze0_179: ctc7,
    buyer_api_purchase_gold0_179: ctc7,
    buyer_api_purchase_silver0_179: ctc7,
    controller_api_restock0_179: ctc8,
    controller_api_set_prices0_179: ctc8,
    controller_api_terminate0_179: ctc7,
    controller_api_toggle_pause0_179: ctc7,
    controller_api_withdraw0_179: ctc7
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6129, v6136, v6137, v6167, v6169, v6170, v6171, v6172, v6173, v6174, v6175, v6176, v6178, v6179, v6180] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v6183 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:169:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runbuyer_api_purchase_bronze0_179" (defined at: ./src/contracts/coin_shop.rsh:169:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'in',
    who: 'buyer_api_purchase_bronze'
    });
  stdlib.assert(v6169, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:170:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:169:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runbuyer_api_purchase_bronze0_179" (defined at: ./src/contracts/coin_shop.rsh:169:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'contract is currently inactive',
    who: 'buyer_api_purchase_bronze'
    });
  const v6187 = stdlib.ge(v6171, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:171:37:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v6187, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:171:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:169:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runbuyer_api_purchase_bronze0_179" (defined at: ./src/contracts/coin_shop.rsh:169:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'balance insufficient for transaction',
    who: 'buyer_api_purchase_bronze'
    });
  const v6192 = ['buyer_api_purchase_bronze0_179', v6183];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6129, v6136, v6137, v6167, v6169, v6170, v6171, v6172, v6173, v6174, v6175, v6176, v6178, v6179, v6180, v6192],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v6178, [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:175:43:decimal', stdlib.UInt_max, '0'), v6085], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:175:46:decimal', stdlib.UInt_max, '0'), v6086], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:175:49:decimal', stdlib.UInt_max, '0'), v6087]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6678], secs: v6680, time: v6679, didSend: v4870, from: v6677 } = txn1;
      
      switch (v6678[0]) {
        case 'buyer_api_purchase_bronze0_179': {
          const v6681 = v6678[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buyer_api_purchase_bronze"
            });
          const v6899 = stdlib.add(v6137, v6178);
          sim_r.txns.push({
            amt: v6178,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          ;
          ;
          const v6958 = stdlib.sub(v6899, v6899);
          sim_r.txns.push({
            kind: 'from',
            to: v6109,
            tok: undefined /* Nothing */
            });
          const v6988 = stdlib.sub(v6171, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:44:decimal', stdlib.UInt_max, '1'));
          const v6992 = stdlib.Array_set(v6170, '0', v6988);
          const v6993 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:56:application', stdlib.UInt_max, '0'), v6992);
          sim_r.txns.push({
            kind: 'from',
            to: v6677,
            tok: v6085
            });
          const v6994 = 'bronze';
          null;
          const v6995 = true;
          const v6996 = await txn1.getOutput('buyer_api_purchase_bronze', 'v6995', ctc4, v6995);
          
          const v14263 = v6127;
          const v14264 = v6128;
          const v14265 = v6129;
          const v14267 = v6993;
          const v14268 = v6958;
          const v14269 = v6129 ? false : true;
          if (v6129) {
            const v14283 = v6993[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v14284 = v14283[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v14285 = v6993[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v14286 = v14285[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v14287 = v6993[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v14288 = v14287[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v14289 = [v14284, v14286, v14288];
            sim_r.isHalt = false;
            }
          else {
            const v14270 = v6128 ? false : true;
            const v14272 = v6128 ? false : v14269;
            const v14273 = v6993[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v14274 = v14273[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v14275 = v6993[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v14276 = v14275[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v14277 = v6993[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v14278 = v14277[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v14279 = [v14274, v14276, v14278];
            const v14280 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
            const v14281 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
            const v14282 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'buyer_api_purchase_gold0_179': {
          const v7311 = v6678[1];
          
          break;
          }
        case 'buyer_api_purchase_silver0_179': {
          const v7941 = v6678[1];
          
          break;
          }
        case 'controller_api_restock0_179': {
          const v8571 = v6678[1];
          
          break;
          }
        case 'controller_api_set_prices0_179': {
          const v9201 = v6678[1];
          
          break;
          }
        case 'controller_api_terminate0_179': {
          const v9831 = v6678[1];
          
          break;
          }
        case 'controller_api_toggle_pause0_179': {
          const v10461 = v6678[1];
          
          break;
          }
        case 'controller_api_withdraw0_179': {
          const v11091 = v6678[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v6678], secs: v6680, time: v6679, didSend: v4870, from: v6677 } = txn1;
  switch (v6678[0]) {
    case 'buyer_api_purchase_bronze0_179': {
      const v6681 = v6678[1];
      undefined /* setApiDetails */;
      stdlib.assert(v6169, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:170:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:169:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'contract is currently inactive',
        who: 'buyer_api_purchase_bronze'
        });
      const v6689 = stdlib.ge(v6171, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:171:37:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v6689, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:171:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:169:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'balance insufficient for transaction',
        who: 'buyer_api_purchase_bronze'
        });
      const v6899 = stdlib.add(v6137, v6178);
      const v6900 = stdlib.le(v6899, stdlib.UInt_max);
      stdlib.assert(v6900, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_bronze'
        });
      ;
      const v6905 = stdlib.le(v6171, stdlib.UInt_max);
      stdlib.assert(v6905, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_bronze'
        });
      ;
      const v6913 = stdlib.le(v6173, stdlib.UInt_max);
      stdlib.assert(v6913, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_bronze'
        });
      ;
      const v6921 = stdlib.le(v6175, stdlib.UInt_max);
      stdlib.assert(v6921, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_bronze'
        });
      ;
      const v6958 = stdlib.sub(v6899, v6899);
      const v6959 = stdlib.ge(v6958, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:178:64:application', stdlib.UInt_max, '0'));
      stdlib.assert(v6959, {
        at: './src/contracts/coin_shop.rsh:178:64:application',
        fs: ['at ./src/contracts/coin_shop.rsh:176:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:27:function exp)'],
        msg: 'assume >= 0',
        who: 'buyer_api_purchase_bronze'
        });
      ;
      const v6988 = stdlib.sub(v6171, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:44:decimal', stdlib.UInt_max, '1'));
      const v6989 = stdlib.ge(v6988, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:56:application', stdlib.UInt_max, '0'));
      stdlib.assert(v6989, {
        at: './src/contracts/coin_shop.rsh:179:56:application',
        fs: ['at ./src/contracts/coin_shop.rsh:176:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:27:function exp)'],
        msg: 'assume >= 0',
        who: 'buyer_api_purchase_bronze'
        });
      const v6992 = stdlib.Array_set(v6170, '0', v6988);
      const v6993 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:56:application', stdlib.UInt_max, '0'), v6992);
      ;
      const v6994 = 'bronze';
      null;
      const v6995 = true;
      const v6996 = await txn1.getOutput('buyer_api_purchase_bronze', 'v6995', ctc4, v6995);
      if (v4870) {
        stdlib.protect(ctc10, await interact.out(v6681, v6996), {
          at: './src/contracts/coin_shop.rsh:169:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:169:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:15:function exp)', 'at ./src/contracts/coin_shop.rsh:183:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:176:27:function exp)', 'at ./src/contracts/coin_shop.rsh:176:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:27:function exp)'],
          msg: 'out',
          who: 'buyer_api_purchase_bronze'
          });
        }
      else {
        }
      
      const v14263 = v6127;
      const v14264 = v6128;
      const v14265 = v6129;
      const v14267 = v6993;
      const v14268 = v6958;
      const v14269 = v6129 ? false : true;
      if (v6129) {
        const v14283 = v6993[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v14284 = v14283[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v14285 = v6993[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v14286 = v14285[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v14287 = v6993[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v14288 = v14287[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v14289 = [v14284, v14286, v14288];
        return;
        }
      else {
        const v14270 = v6128 ? false : true;
        const v14272 = v6128 ? false : v14269;
        const v14273 = v6993[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v14274 = v14273[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v14275 = v6993[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v14276 = v14275[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v14277 = v6993[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v14278 = v14277[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v14279 = [v14274, v14276, v14278];
        const v14280 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
        const v14281 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
        const v14282 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
        return;
        }
      break;
      }
    case 'buyer_api_purchase_gold0_179': {
      const v7311 = v6678[1];
      return;
      break;
      }
    case 'buyer_api_purchase_silver0_179': {
      const v7941 = v6678[1];
      return;
      break;
      }
    case 'controller_api_restock0_179': {
      const v8571 = v6678[1];
      return;
      break;
      }
    case 'controller_api_set_prices0_179': {
      const v9201 = v6678[1];
      return;
      break;
      }
    case 'controller_api_terminate0_179': {
      const v9831 = v6678[1];
      return;
      break;
      }
    case 'controller_api_toggle_pause0_179': {
      const v10461 = v6678[1];
      return;
      break;
      }
    case 'controller_api_withdraw0_179': {
      const v11091 = v6678[1];
      return;
      break;
      }
    }
  
  
  };
export async function _buyer_api_purchase_gold5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _buyer_api_purchase_gold5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _buyer_api_purchase_gold5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Data({
    buyer_api_purchase_bronze0_179: ctc7,
    buyer_api_purchase_gold0_179: ctc7,
    buyer_api_purchase_silver0_179: ctc7,
    controller_api_restock0_179: ctc8,
    controller_api_set_prices0_179: ctc8,
    controller_api_terminate0_179: ctc7,
    controller_api_toggle_pause0_179: ctc7,
    controller_api_withdraw0_179: ctc7
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6129, v6136, v6137, v6167, v6169, v6170, v6171, v6172, v6173, v6174, v6175, v6176, v6178, v6179, v6180] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v6209 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:209:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runbuyer_api_purchase_gold0_179" (defined at: ./src/contracts/coin_shop.rsh:209:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'in',
    who: 'buyer_api_purchase_gold'
    });
  stdlib.assert(v6169, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:210:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:209:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runbuyer_api_purchase_gold0_179" (defined at: ./src/contracts/coin_shop.rsh:209:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'contract is currently inactive',
    who: 'buyer_api_purchase_gold'
    });
  const v6213 = stdlib.ge(v6175, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:211:37:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v6213, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:211:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:209:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runbuyer_api_purchase_gold0_179" (defined at: ./src/contracts/coin_shop.rsh:209:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'balance insufficient for transaction',
    who: 'buyer_api_purchase_gold'
    });
  const v6218 = ['buyer_api_purchase_gold0_179', v6209];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6129, v6136, v6137, v6167, v6169, v6170, v6171, v6172, v6173, v6174, v6175, v6176, v6178, v6179, v6180, v6218],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v6180, [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:215:43:decimal', stdlib.UInt_max, '0'), v6085], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:215:46:decimal', stdlib.UInt_max, '0'), v6086], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:215:49:decimal', stdlib.UInt_max, '0'), v6087]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6678], secs: v6680, time: v6679, didSend: v4870, from: v6677 } = txn1;
      
      switch (v6678[0]) {
        case 'buyer_api_purchase_bronze0_179': {
          const v6681 = v6678[1];
          
          break;
          }
        case 'buyer_api_purchase_gold0_179': {
          const v7311 = v6678[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buyer_api_purchase_gold"
            });
          const v7529 = stdlib.add(v6137, v6180);
          sim_r.txns.push({
            amt: v6180,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          ;
          ;
          const v7664 = stdlib.sub(v7529, v7529);
          sim_r.txns.push({
            kind: 'from',
            to: v6109,
            tok: undefined /* Nothing */
            });
          const v7694 = stdlib.sub(v6175, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:50:decimal', stdlib.UInt_max, '1'));
          const v7698 = stdlib.Array_set(v6174, '0', v7694);
          const v7699 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:56:application', stdlib.UInt_max, '2'), v7698);
          sim_r.txns.push({
            kind: 'from',
            to: v6677,
            tok: v6087
            });
          const v7700 = 'gold  ';
          null;
          const v7701 = true;
          const v7702 = await txn1.getOutput('buyer_api_purchase_gold', 'v7701', ctc4, v7701);
          
          const v14713 = v6127;
          const v14714 = v6128;
          const v14715 = v6129;
          const v14717 = v7699;
          const v14718 = v7664;
          const v14719 = v6129 ? false : true;
          if (v6129) {
            const v14733 = v7699[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v14734 = v14733[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v14735 = v7699[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v14736 = v14735[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v14737 = v7699[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v14738 = v14737[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v14739 = [v14734, v14736, v14738];
            sim_r.isHalt = false;
            }
          else {
            const v14720 = v6128 ? false : true;
            const v14722 = v6128 ? false : v14719;
            const v14723 = v7699[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v14724 = v14723[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v14725 = v7699[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v14726 = v14725[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v14727 = v7699[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v14728 = v14727[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v14729 = [v14724, v14726, v14728];
            const v14730 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
            const v14731 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
            const v14732 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'buyer_api_purchase_silver0_179': {
          const v7941 = v6678[1];
          
          break;
          }
        case 'controller_api_restock0_179': {
          const v8571 = v6678[1];
          
          break;
          }
        case 'controller_api_set_prices0_179': {
          const v9201 = v6678[1];
          
          break;
          }
        case 'controller_api_terminate0_179': {
          const v9831 = v6678[1];
          
          break;
          }
        case 'controller_api_toggle_pause0_179': {
          const v10461 = v6678[1];
          
          break;
          }
        case 'controller_api_withdraw0_179': {
          const v11091 = v6678[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v6678], secs: v6680, time: v6679, didSend: v4870, from: v6677 } = txn1;
  switch (v6678[0]) {
    case 'buyer_api_purchase_bronze0_179': {
      const v6681 = v6678[1];
      return;
      break;
      }
    case 'buyer_api_purchase_gold0_179': {
      const v7311 = v6678[1];
      undefined /* setApiDetails */;
      stdlib.assert(v6169, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:210:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:209:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'contract is currently inactive',
        who: 'buyer_api_purchase_gold'
        });
      const v7342 = stdlib.ge(v6175, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:211:37:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v7342, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:211:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:209:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'balance insufficient for transaction',
        who: 'buyer_api_purchase_gold'
        });
      const v7529 = stdlib.add(v6137, v6180);
      const v7530 = stdlib.le(v7529, stdlib.UInt_max);
      stdlib.assert(v7530, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_gold'
        });
      ;
      const v7535 = stdlib.le(v6171, stdlib.UInt_max);
      stdlib.assert(v7535, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_gold'
        });
      ;
      const v7543 = stdlib.le(v6173, stdlib.UInt_max);
      stdlib.assert(v7543, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_gold'
        });
      ;
      const v7551 = stdlib.le(v6175, stdlib.UInt_max);
      stdlib.assert(v7551, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_gold'
        });
      ;
      const v7664 = stdlib.sub(v7529, v7529);
      const v7665 = stdlib.ge(v7664, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:218:64:application', stdlib.UInt_max, '0'));
      stdlib.assert(v7665, {
        at: './src/contracts/coin_shop.rsh:218:64:application',
        fs: ['at ./src/contracts/coin_shop.rsh:216:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:216:27:function exp)'],
        msg: 'assume >= 0',
        who: 'buyer_api_purchase_gold'
        });
      ;
      const v7694 = stdlib.sub(v6175, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:50:decimal', stdlib.UInt_max, '1'));
      const v7695 = stdlib.ge(v7694, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:56:application', stdlib.UInt_max, '0'));
      stdlib.assert(v7695, {
        at: './src/contracts/coin_shop.rsh:219:56:application',
        fs: ['at ./src/contracts/coin_shop.rsh:216:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:216:27:function exp)'],
        msg: 'assume >= 0',
        who: 'buyer_api_purchase_gold'
        });
      const v7698 = stdlib.Array_set(v6174, '0', v7694);
      const v7699 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:56:application', stdlib.UInt_max, '2'), v7698);
      ;
      const v7700 = 'gold  ';
      null;
      const v7701 = true;
      const v7702 = await txn1.getOutput('buyer_api_purchase_gold', 'v7701', ctc4, v7701);
      if (v4870) {
        stdlib.protect(ctc10, await interact.out(v7311, v7702), {
          at: './src/contracts/coin_shop.rsh:209:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:209:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:15:function exp)', 'at ./src/contracts/coin_shop.rsh:223:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:216:27:function exp)', 'at ./src/contracts/coin_shop.rsh:216:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:216:27:function exp)'],
          msg: 'out',
          who: 'buyer_api_purchase_gold'
          });
        }
      else {
        }
      
      const v14713 = v6127;
      const v14714 = v6128;
      const v14715 = v6129;
      const v14717 = v7699;
      const v14718 = v7664;
      const v14719 = v6129 ? false : true;
      if (v6129) {
        const v14733 = v7699[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v14734 = v14733[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v14735 = v7699[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v14736 = v14735[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v14737 = v7699[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v14738 = v14737[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v14739 = [v14734, v14736, v14738];
        return;
        }
      else {
        const v14720 = v6128 ? false : true;
        const v14722 = v6128 ? false : v14719;
        const v14723 = v7699[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v14724 = v14723[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v14725 = v7699[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v14726 = v14725[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v14727 = v7699[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v14728 = v14727[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v14729 = [v14724, v14726, v14728];
        const v14730 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
        const v14731 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
        const v14732 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
        return;
        }
      break;
      }
    case 'buyer_api_purchase_silver0_179': {
      const v7941 = v6678[1];
      return;
      break;
      }
    case 'controller_api_restock0_179': {
      const v8571 = v6678[1];
      return;
      break;
      }
    case 'controller_api_set_prices0_179': {
      const v9201 = v6678[1];
      return;
      break;
      }
    case 'controller_api_terminate0_179': {
      const v9831 = v6678[1];
      return;
      break;
      }
    case 'controller_api_toggle_pause0_179': {
      const v10461 = v6678[1];
      return;
      break;
      }
    case 'controller_api_withdraw0_179': {
      const v11091 = v6678[1];
      return;
      break;
      }
    }
  
  
  };
export async function _buyer_api_purchase_silver5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _buyer_api_purchase_silver5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _buyer_api_purchase_silver5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Data({
    buyer_api_purchase_bronze0_179: ctc7,
    buyer_api_purchase_gold0_179: ctc7,
    buyer_api_purchase_silver0_179: ctc7,
    controller_api_restock0_179: ctc8,
    controller_api_set_prices0_179: ctc8,
    controller_api_terminate0_179: ctc7,
    controller_api_toggle_pause0_179: ctc7,
    controller_api_withdraw0_179: ctc7
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6129, v6136, v6137, v6167, v6169, v6170, v6171, v6172, v6173, v6174, v6175, v6176, v6178, v6179, v6180] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v6196 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:189:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runbuyer_api_purchase_silver0_179" (defined at: ./src/contracts/coin_shop.rsh:189:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'in',
    who: 'buyer_api_purchase_silver'
    });
  stdlib.assert(v6169, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:190:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:189:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runbuyer_api_purchase_silver0_179" (defined at: ./src/contracts/coin_shop.rsh:189:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'contract is currently inactive',
    who: 'buyer_api_purchase_silver'
    });
  const v6200 = stdlib.ge(v6173, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:191:37:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v6200, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:191:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:189:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runbuyer_api_purchase_silver0_179" (defined at: ./src/contracts/coin_shop.rsh:189:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'balance insufficient for transaction',
    who: 'buyer_api_purchase_silver'
    });
  const v6205 = ['buyer_api_purchase_silver0_179', v6196];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6129, v6136, v6137, v6167, v6169, v6170, v6171, v6172, v6173, v6174, v6175, v6176, v6178, v6179, v6180, v6205],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v6179, [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:195:43:decimal', stdlib.UInt_max, '0'), v6085], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:195:46:decimal', stdlib.UInt_max, '0'), v6086], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:195:49:decimal', stdlib.UInt_max, '0'), v6087]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6678], secs: v6680, time: v6679, didSend: v4870, from: v6677 } = txn1;
      
      switch (v6678[0]) {
        case 'buyer_api_purchase_bronze0_179': {
          const v6681 = v6678[1];
          
          break;
          }
        case 'buyer_api_purchase_gold0_179': {
          const v7311 = v6678[1];
          
          break;
          }
        case 'buyer_api_purchase_silver0_179': {
          const v7941 = v6678[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buyer_api_purchase_silver"
            });
          const v8159 = stdlib.add(v6137, v6179);
          sim_r.txns.push({
            amt: v6179,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          ;
          ;
          const v8370 = stdlib.sub(v8159, v8159);
          sim_r.txns.push({
            kind: 'from',
            to: v6109,
            tok: undefined /* Nothing */
            });
          const v8400 = stdlib.sub(v6173, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:47:decimal', stdlib.UInt_max, '1'));
          const v8404 = stdlib.Array_set(v6172, '0', v8400);
          const v8405 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:56:application', stdlib.UInt_max, '1'), v8404);
          sim_r.txns.push({
            kind: 'from',
            to: v6677,
            tok: v6086
            });
          const v8406 = 'silver';
          null;
          const v8407 = true;
          const v8408 = await txn1.getOutput('buyer_api_purchase_silver', 'v8407', ctc4, v8407);
          
          const v15163 = v6127;
          const v15164 = v6128;
          const v15165 = v6129;
          const v15167 = v8405;
          const v15168 = v8370;
          const v15169 = v6129 ? false : true;
          if (v6129) {
            const v15183 = v8405[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v15184 = v15183[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v15185 = v8405[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v15186 = v15185[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v15187 = v8405[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v15188 = v15187[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v15189 = [v15184, v15186, v15188];
            sim_r.isHalt = false;
            }
          else {
            const v15170 = v6128 ? false : true;
            const v15172 = v6128 ? false : v15169;
            const v15173 = v8405[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v15174 = v15173[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v15175 = v8405[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v15176 = v15175[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v15177 = v8405[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v15178 = v15177[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v15179 = [v15174, v15176, v15178];
            const v15180 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
            const v15181 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
            const v15182 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'controller_api_restock0_179': {
          const v8571 = v6678[1];
          
          break;
          }
        case 'controller_api_set_prices0_179': {
          const v9201 = v6678[1];
          
          break;
          }
        case 'controller_api_terminate0_179': {
          const v9831 = v6678[1];
          
          break;
          }
        case 'controller_api_toggle_pause0_179': {
          const v10461 = v6678[1];
          
          break;
          }
        case 'controller_api_withdraw0_179': {
          const v11091 = v6678[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v6678], secs: v6680, time: v6679, didSend: v4870, from: v6677 } = txn1;
  switch (v6678[0]) {
    case 'buyer_api_purchase_bronze0_179': {
      const v6681 = v6678[1];
      return;
      break;
      }
    case 'buyer_api_purchase_gold0_179': {
      const v7311 = v6678[1];
      return;
      break;
      }
    case 'buyer_api_purchase_silver0_179': {
      const v7941 = v6678[1];
      undefined /* setApiDetails */;
      stdlib.assert(v6169, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:190:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:189:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'contract is currently inactive',
        who: 'buyer_api_purchase_silver'
        });
      const v7995 = stdlib.ge(v6173, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:191:37:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v7995, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:191:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:189:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'balance insufficient for transaction',
        who: 'buyer_api_purchase_silver'
        });
      const v8159 = stdlib.add(v6137, v6179);
      const v8160 = stdlib.le(v8159, stdlib.UInt_max);
      stdlib.assert(v8160, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_silver'
        });
      ;
      const v8165 = stdlib.le(v6171, stdlib.UInt_max);
      stdlib.assert(v8165, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_silver'
        });
      ;
      const v8173 = stdlib.le(v6173, stdlib.UInt_max);
      stdlib.assert(v8173, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_silver'
        });
      ;
      const v8181 = stdlib.le(v6175, stdlib.UInt_max);
      stdlib.assert(v8181, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_silver'
        });
      ;
      const v8370 = stdlib.sub(v8159, v8159);
      const v8371 = stdlib.ge(v8370, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:198:64:application', stdlib.UInt_max, '0'));
      stdlib.assert(v8371, {
        at: './src/contracts/coin_shop.rsh:198:64:application',
        fs: ['at ./src/contracts/coin_shop.rsh:196:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:27:function exp)'],
        msg: 'assume >= 0',
        who: 'buyer_api_purchase_silver'
        });
      ;
      const v8400 = stdlib.sub(v6173, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:47:decimal', stdlib.UInt_max, '1'));
      const v8401 = stdlib.ge(v8400, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:56:application', stdlib.UInt_max, '0'));
      stdlib.assert(v8401, {
        at: './src/contracts/coin_shop.rsh:199:56:application',
        fs: ['at ./src/contracts/coin_shop.rsh:196:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:27:function exp)'],
        msg: 'assume >= 0',
        who: 'buyer_api_purchase_silver'
        });
      const v8404 = stdlib.Array_set(v6172, '0', v8400);
      const v8405 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:56:application', stdlib.UInt_max, '1'), v8404);
      ;
      const v8406 = 'silver';
      null;
      const v8407 = true;
      const v8408 = await txn1.getOutput('buyer_api_purchase_silver', 'v8407', ctc4, v8407);
      if (v4870) {
        stdlib.protect(ctc10, await interact.out(v7941, v8408), {
          at: './src/contracts/coin_shop.rsh:189:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:189:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:15:function exp)', 'at ./src/contracts/coin_shop.rsh:203:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:196:27:function exp)', 'at ./src/contracts/coin_shop.rsh:196:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:27:function exp)'],
          msg: 'out',
          who: 'buyer_api_purchase_silver'
          });
        }
      else {
        }
      
      const v15163 = v6127;
      const v15164 = v6128;
      const v15165 = v6129;
      const v15167 = v8405;
      const v15168 = v8370;
      const v15169 = v6129 ? false : true;
      if (v6129) {
        const v15183 = v8405[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v15184 = v15183[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v15185 = v8405[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v15186 = v15185[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v15187 = v8405[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v15188 = v15187[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v15189 = [v15184, v15186, v15188];
        return;
        }
      else {
        const v15170 = v6128 ? false : true;
        const v15172 = v6128 ? false : v15169;
        const v15173 = v8405[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v15174 = v15173[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v15175 = v8405[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v15176 = v15175[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v15177 = v8405[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v15178 = v15177[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v15179 = [v15174, v15176, v15178];
        const v15180 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
        const v15181 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
        const v15182 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
        return;
        }
      break;
      }
    case 'controller_api_restock0_179': {
      const v8571 = v6678[1];
      return;
      break;
      }
    case 'controller_api_set_prices0_179': {
      const v9201 = v6678[1];
      return;
      break;
      }
    case 'controller_api_terminate0_179': {
      const v9831 = v6678[1];
      return;
      break;
      }
    case 'controller_api_toggle_pause0_179': {
      const v10461 = v6678[1];
      return;
      break;
      }
    case 'controller_api_withdraw0_179': {
      const v11091 = v6678[1];
      return;
      break;
      }
    }
  
  
  };
export async function _controller_api_restock5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _controller_api_restock5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _controller_api_restock5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    buyer_api_purchase_bronze0_179: ctc8,
    buyer_api_purchase_gold0_179: ctc8,
    buyer_api_purchase_silver0_179: ctc8,
    controller_api_restock0_179: ctc7,
    controller_api_set_prices0_179: ctc7,
    controller_api_terminate0_179: ctc8,
    controller_api_toggle_pause0_179: ctc8,
    controller_api_withdraw0_179: ctc8
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6129, v6136, v6137, v6167, v6169, v6170, v6171, v6172, v6173, v6174, v6175, v6176, v6178, v6179, v6180] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v6220 = ctc.selfAddress();
  const v6222 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:232:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_restock0_179" (defined at: ./src/contracts/coin_shop.rsh:232:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'in',
    who: 'controller_api_restock'
    });
  const v6223 = v6222[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v6224 = v6223[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v6225 = v6223[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v6226 = v6223[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v6228 = stdlib.addressEq(v6220, v6109);
  stdlib.assert(v6228, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:233:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:232:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_restock0_179" (defined at: ./src/contracts/coin_shop.rsh:232:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'action not authorized',
    who: 'controller_api_restock'
    });
  const v6231 = stdlib.le(v6224, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:29:decimal', stdlib.UInt_max, '1200'));
  const v6233 = stdlib.le(v6225, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:35:decimal', stdlib.UInt_max, '600'));
  const v6234 = v6231 ? v6233 : false;
  const v6236 = stdlib.le(v6226, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:40:decimal', stdlib.UInt_max, '200'));
  const v6237 = v6234 ? v6236 : false;
  stdlib.assert(v6237, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:234:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:232:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_restock0_179" (defined at: ./src/contracts/coin_shop.rsh:232:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'illegal param(s) were provided',
    who: 'controller_api_restock'
    });
  const v6247 = ['controller_api_restock0_179', v6222];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6129, v6136, v6137, v6167, v6169, v6170, v6171, v6172, v6173, v6174, v6175, v6176, v6178, v6179, v6180, v6247],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:237:28:decimal', stdlib.UInt_max, '0'), [[v6224, v6085], [v6225, v6086], [v6226, v6087]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6678], secs: v6680, time: v6679, didSend: v4870, from: v6677 } = txn1;
      
      switch (v6678[0]) {
        case 'buyer_api_purchase_bronze0_179': {
          const v6681 = v6678[1];
          
          break;
          }
        case 'buyer_api_purchase_gold0_179': {
          const v7311 = v6678[1];
          
          break;
          }
        case 'buyer_api_purchase_silver0_179': {
          const v7941 = v6678[1];
          
          break;
          }
        case 'controller_api_restock0_179': {
          const v8571 = v6678[1];
          sim_r.txns.push({
            kind: 'api',
            who: "controller_api_restock"
            });
          const v8645 = v8571[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:232:14:spread', stdlib.UInt_max, '0')];
          const v8648 = v8645[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:9:array ref', stdlib.UInt_max, '0')];
          const v8650 = v8645[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:33:array ref', stdlib.UInt_max, '1')];
          const v8653 = v8645[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:57:array ref', stdlib.UInt_max, '2')];
          ;
          const v8794 = stdlib.add(v6171, v8648);
          const v8798 = stdlib.Array_set(v6170, '0', v8794);
          const v8799 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0'), v8798);
          sim_r.txns.push({
            amt: v8648,
            kind: 'to',
            tok: v6085
            });
          const v8800 = v8799[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '1')];
          const v8801 = v8800[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0')];
          const v8802 = stdlib.add(v8801, v8650);
          const v8806 = stdlib.Array_set(v8800, '0', v8802);
          const v8807 = stdlib.Array_set(v8799, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '1'), v8806);
          sim_r.txns.push({
            amt: v8650,
            kind: 'to',
            tok: v6086
            });
          const v8808 = v8807[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '2')];
          const v8809 = v8808[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0')];
          const v8810 = stdlib.add(v8809, v8653);
          const v8814 = stdlib.Array_set(v8808, '0', v8810);
          const v8815 = stdlib.Array_set(v8807, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '2'), v8814);
          sim_r.txns.push({
            amt: v8653,
            kind: 'to',
            tok: v6087
            });
          const v9058 = v8815[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
          const v9059 = v9058[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
          const v9060 = v8815[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
          const v9061 = v9060[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
          const v9062 = v8815[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
          const v9063 = v9062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
          null;
          const v9067 = true;
          const v9068 = await txn1.getOutput('controller_api_restock', 'v9067', ctc4, v9067);
          
          const v15613 = v6127;
          const v15614 = v6128;
          const v15615 = v6129;
          const v15617 = v8815;
          const v15618 = v6137;
          const v15619 = v6129 ? false : true;
          if (v6129) {
            const v15639 = [v9059, v9061, v9063];
            sim_r.isHalt = false;
            }
          else {
            const v15620 = v6128 ? false : true;
            const v15622 = v6128 ? false : v15619;
            const v15629 = [v9059, v9061, v9063];
            const v15630 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
            const v15631 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
            const v15632 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'controller_api_set_prices0_179': {
          const v9201 = v6678[1];
          
          break;
          }
        case 'controller_api_terminate0_179': {
          const v9831 = v6678[1];
          
          break;
          }
        case 'controller_api_toggle_pause0_179': {
          const v10461 = v6678[1];
          
          break;
          }
        case 'controller_api_withdraw0_179': {
          const v11091 = v6678[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v6678], secs: v6680, time: v6679, didSend: v4870, from: v6677 } = txn1;
  switch (v6678[0]) {
    case 'buyer_api_purchase_bronze0_179': {
      const v6681 = v6678[1];
      return;
      break;
      }
    case 'buyer_api_purchase_gold0_179': {
      const v7311 = v6678[1];
      return;
      break;
      }
    case 'buyer_api_purchase_silver0_179': {
      const v7941 = v6678[1];
      return;
      break;
      }
    case 'controller_api_restock0_179': {
      const v8571 = v6678[1];
      undefined /* setApiDetails */;
      const v8645 = v8571[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:232:14:spread', stdlib.UInt_max, '0')];
      const v8646 = stdlib.addressEq(v6677, v6109);
      stdlib.assert(v8646, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:233:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:232:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'action not authorized',
        who: 'controller_api_restock'
        });
      const v8648 = v8645[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:9:array ref', stdlib.UInt_max, '0')];
      const v8649 = stdlib.le(v8648, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:29:decimal', stdlib.UInt_max, '1200'));
      const v8650 = v8645[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:33:array ref', stdlib.UInt_max, '1')];
      const v8651 = stdlib.le(v8650, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:35:decimal', stdlib.UInt_max, '600'));
      const v8652 = v8649 ? v8651 : false;
      const v8653 = v8645[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:57:array ref', stdlib.UInt_max, '2')];
      const v8654 = stdlib.le(v8653, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:40:decimal', stdlib.UInt_max, '200'));
      const v8655 = v8652 ? v8654 : false;
      stdlib.assert(v8655, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:234:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:232:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'illegal param(s) were provided',
        who: 'controller_api_restock'
        });
      const v8790 = stdlib.le(v6137, stdlib.UInt_max);
      stdlib.assert(v8790, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_restock'
        });
      ;
      const v8794 = stdlib.add(v6171, v8648);
      const v8795 = stdlib.le(v8794, stdlib.UInt_max);
      stdlib.assert(v8795, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_restock'
        });
      const v8798 = stdlib.Array_set(v6170, '0', v8794);
      const v8799 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0'), v8798);
      ;
      const v8800 = v8799[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '1')];
      const v8801 = v8800[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0')];
      const v8802 = stdlib.add(v8801, v8650);
      const v8803 = stdlib.le(v8802, stdlib.UInt_max);
      stdlib.assert(v8803, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_restock'
        });
      const v8806 = stdlib.Array_set(v8800, '0', v8802);
      const v8807 = stdlib.Array_set(v8799, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '1'), v8806);
      ;
      const v8808 = v8807[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '2')];
      const v8809 = v8808[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0')];
      const v8810 = stdlib.add(v8809, v8653);
      const v8811 = stdlib.le(v8810, stdlib.UInt_max);
      stdlib.assert(v8811, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_restock'
        });
      const v8814 = stdlib.Array_set(v8808, '0', v8810);
      const v8815 = stdlib.Array_set(v8807, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '2'), v8814);
      ;
      const v9058 = v8815[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
      const v9059 = v9058[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
      const v9060 = v8815[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
      const v9061 = v9060[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
      const v9062 = v8815[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
      const v9063 = v9062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
      null;
      const v9067 = true;
      const v9068 = await txn1.getOutput('controller_api_restock', 'v9067', ctc4, v9067);
      if (v4870) {
        stdlib.protect(ctc10, await interact.out(v8571, v9068), {
          at: './src/contracts/coin_shop.rsh:232:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:232:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:15:function exp)', 'at ./src/contracts/coin_shop.rsh:244:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:238:27:function exp)', 'at ./src/contracts/coin_shop.rsh:238:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:238:27:function exp)'],
          msg: 'out',
          who: 'controller_api_restock'
          });
        }
      else {
        }
      
      const v15613 = v6127;
      const v15614 = v6128;
      const v15615 = v6129;
      const v15617 = v8815;
      const v15618 = v6137;
      const v15619 = v6129 ? false : true;
      if (v6129) {
        const v15639 = [v9059, v9061, v9063];
        return;
        }
      else {
        const v15620 = v6128 ? false : true;
        const v15622 = v6128 ? false : v15619;
        const v15629 = [v9059, v9061, v9063];
        const v15630 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
        const v15631 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
        const v15632 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
        return;
        }
      break;
      }
    case 'controller_api_set_prices0_179': {
      const v9201 = v6678[1];
      return;
      break;
      }
    case 'controller_api_terminate0_179': {
      const v9831 = v6678[1];
      return;
      break;
      }
    case 'controller_api_toggle_pause0_179': {
      const v10461 = v6678[1];
      return;
      break;
      }
    case 'controller_api_withdraw0_179': {
      const v11091 = v6678[1];
      return;
      break;
      }
    }
  
  
  };
export async function _controller_api_set_prices5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _controller_api_set_prices5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _controller_api_set_prices5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    buyer_api_purchase_bronze0_179: ctc8,
    buyer_api_purchase_gold0_179: ctc8,
    buyer_api_purchase_silver0_179: ctc8,
    controller_api_restock0_179: ctc7,
    controller_api_set_prices0_179: ctc7,
    controller_api_terminate0_179: ctc8,
    controller_api_toggle_pause0_179: ctc8,
    controller_api_withdraw0_179: ctc8
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6129, v6136, v6137, v6167, v6169, v6170, v6171, v6172, v6173, v6174, v6175, v6176, v6178, v6179, v6180] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v6249 = ctc.selfAddress();
  const v6251 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:250:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:50:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_set_prices0_179" (defined at: ./src/contracts/coin_shop.rsh:250:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'in',
    who: 'controller_api_set_prices'
    });
  const v6257 = stdlib.addressEq(v6249, v6109);
  stdlib.assert(v6257, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:251:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:250:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:50:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_set_prices0_179" (defined at: ./src/contracts/coin_shop.rsh:250:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'action not authorized',
    who: 'controller_api_set_prices'
    });
  const v6267 = ['controller_api_set_prices0_179', v6251];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6129, v6136, v6137, v6167, v6169, v6170, v6171, v6172, v6173, v6174, v6175, v6176, v6178, v6179, v6180, v6267],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:254:28:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:254:31:decimal', stdlib.UInt_max, '0'), v6085], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:254:34:decimal', stdlib.UInt_max, '0'), v6086], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:254:37:decimal', stdlib.UInt_max, '0'), v6087]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6678], secs: v6680, time: v6679, didSend: v4870, from: v6677 } = txn1;
      
      switch (v6678[0]) {
        case 'buyer_api_purchase_bronze0_179': {
          const v6681 = v6678[1];
          
          break;
          }
        case 'buyer_api_purchase_gold0_179': {
          const v7311 = v6678[1];
          
          break;
          }
        case 'buyer_api_purchase_silver0_179': {
          const v7941 = v6678[1];
          
          break;
          }
        case 'controller_api_restock0_179': {
          const v8571 = v6678[1];
          
          break;
          }
        case 'controller_api_set_prices0_179': {
          const v9201 = v6678[1];
          sim_r.txns.push({
            kind: 'api',
            who: "controller_api_set_prices"
            });
          ;
          ;
          ;
          ;
          const v9709 = v9201[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:250:14:spread', stdlib.UInt_max, '0')];
          const v9713 = v9709[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '0')];
          const v9714 = v9709[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '1')];
          const v9715 = v9709[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '2')];
          null;
          const v9718 = true;
          const v9719 = await txn1.getOutput('controller_api_set_prices', 'v9718', ctc4, v9718);
          
          const v16063 = v9709;
          const v16064 = v6128;
          const v16065 = v6129;
          const v16067 = v6136;
          const v16068 = v6137;
          const v16069 = v6129 ? false : true;
          if (v6129) {
            const v16083 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v16084 = v16083[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v16085 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v16086 = v16085[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v16087 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v16088 = v16087[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v16089 = [v16084, v16086, v16088];
            sim_r.isHalt = false;
            }
          else {
            const v16070 = v6128 ? false : true;
            const v16072 = v6128 ? false : v16069;
            const v16073 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v16074 = v16073[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v16075 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v16076 = v16075[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v16077 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v16078 = v16077[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v16079 = [v16074, v16076, v16078];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'controller_api_terminate0_179': {
          const v9831 = v6678[1];
          
          break;
          }
        case 'controller_api_toggle_pause0_179': {
          const v10461 = v6678[1];
          
          break;
          }
        case 'controller_api_withdraw0_179': {
          const v11091 = v6678[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v6678], secs: v6680, time: v6679, didSend: v4870, from: v6677 } = txn1;
  switch (v6678[0]) {
    case 'buyer_api_purchase_bronze0_179': {
      const v6681 = v6678[1];
      return;
      break;
      }
    case 'buyer_api_purchase_gold0_179': {
      const v7311 = v6678[1];
      return;
      break;
      }
    case 'buyer_api_purchase_silver0_179': {
      const v7941 = v6678[1];
      return;
      break;
      }
    case 'controller_api_restock0_179': {
      const v8571 = v6678[1];
      return;
      break;
      }
    case 'controller_api_set_prices0_179': {
      const v9201 = v6678[1];
      undefined /* setApiDetails */;
      const v9308 = stdlib.addressEq(v6677, v6109);
      stdlib.assert(v9308, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:251:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:250:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:50:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:50:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'action not authorized',
        who: 'controller_api_set_prices'
        });
      const v9420 = stdlib.le(v6137, stdlib.UInt_max);
      stdlib.assert(v9420, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_set_prices'
        });
      ;
      const v9425 = stdlib.le(v6171, stdlib.UInt_max);
      stdlib.assert(v9425, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_set_prices'
        });
      ;
      const v9433 = stdlib.le(v6173, stdlib.UInt_max);
      stdlib.assert(v9433, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_set_prices'
        });
      ;
      const v9441 = stdlib.le(v6175, stdlib.UInt_max);
      stdlib.assert(v9441, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_set_prices'
        });
      ;
      const v9709 = v9201[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:250:14:spread', stdlib.UInt_max, '0')];
      const v9713 = v9709[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '0')];
      const v9714 = v9709[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '1')];
      const v9715 = v9709[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '2')];
      null;
      const v9718 = true;
      const v9719 = await txn1.getOutput('controller_api_set_prices', 'v9718', ctc4, v9718);
      if (v4870) {
        stdlib.protect(ctc10, await interact.out(v9201, v9719), {
          at: './src/contracts/coin_shop.rsh:250:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:250:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:15:function exp)', 'at ./src/contracts/coin_shop.rsh:261:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:255:27:function exp)', 'at ./src/contracts/coin_shop.rsh:255:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:255:27:function exp)'],
          msg: 'out',
          who: 'controller_api_set_prices'
          });
        }
      else {
        }
      
      const v16063 = v9709;
      const v16064 = v6128;
      const v16065 = v6129;
      const v16067 = v6136;
      const v16068 = v6137;
      const v16069 = v6129 ? false : true;
      if (v6129) {
        const v16083 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v16084 = v16083[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v16085 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v16086 = v16085[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v16087 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v16088 = v16087[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v16089 = [v16084, v16086, v16088];
        return;
        }
      else {
        const v16070 = v6128 ? false : true;
        const v16072 = v6128 ? false : v16069;
        const v16073 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v16074 = v16073[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v16075 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v16076 = v16075[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v16077 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v16078 = v16077[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v16079 = [v16074, v16076, v16078];
        return;
        }
      break;
      }
    case 'controller_api_terminate0_179': {
      const v9831 = v6678[1];
      return;
      break;
      }
    case 'controller_api_toggle_pause0_179': {
      const v10461 = v6678[1];
      return;
      break;
      }
    case 'controller_api_withdraw0_179': {
      const v11091 = v6678[1];
      return;
      break;
      }
    }
  
  
  };
export async function _controller_api_terminate5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _controller_api_terminate5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _controller_api_terminate5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Data({
    buyer_api_purchase_bronze0_179: ctc7,
    buyer_api_purchase_gold0_179: ctc7,
    buyer_api_purchase_silver0_179: ctc7,
    controller_api_restock0_179: ctc8,
    controller_api_set_prices0_179: ctc8,
    controller_api_terminate0_179: ctc7,
    controller_api_toggle_pause0_179: ctc7,
    controller_api_withdraw0_179: ctc7
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6129, v6136, v6137, v6167, v6169, v6170, v6171, v6172, v6173, v6174, v6175, v6176, v6178, v6179, v6180] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v6289 = ctc.selfAddress();
  const v6291 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:307:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:307:40:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_terminate0_179" (defined at: ./src/contracts/coin_shop.rsh:307:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'in',
    who: 'controller_api_terminate'
    });
  const v6292 = stdlib.addressEq(v6289, v6109);
  stdlib.assert(v6292, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:308:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:307:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:307:40:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_terminate0_179" (defined at: ./src/contracts/coin_shop.rsh:307:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'action not authorized',
    who: 'controller_api_terminate'
    });
  const v6297 = ['controller_api_terminate0_179', v6291];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6129, v6136, v6137, v6167, v6169, v6170, v6171, v6172, v6173, v6174, v6175, v6176, v6178, v6179, v6180, v6297],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:311:28:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:311:31:decimal', stdlib.UInt_max, '0'), v6085], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:311:34:decimal', stdlib.UInt_max, '0'), v6086], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:311:37:decimal', stdlib.UInt_max, '0'), v6087]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6678], secs: v6680, time: v6679, didSend: v4870, from: v6677 } = txn1;
      
      switch (v6678[0]) {
        case 'buyer_api_purchase_bronze0_179': {
          const v6681 = v6678[1];
          
          break;
          }
        case 'buyer_api_purchase_gold0_179': {
          const v7311 = v6678[1];
          
          break;
          }
        case 'buyer_api_purchase_silver0_179': {
          const v7941 = v6678[1];
          
          break;
          }
        case 'controller_api_restock0_179': {
          const v8571 = v6678[1];
          
          break;
          }
        case 'controller_api_set_prices0_179': {
          const v9201 = v6678[1];
          
          break;
          }
        case 'controller_api_terminate0_179': {
          const v9831 = v6678[1];
          sim_r.txns.push({
            kind: 'api',
            who: "controller_api_terminate"
            });
          ;
          ;
          ;
          ;
          const v10364 = true;
          null;
          const v10365 = true;
          const v10366 = await txn1.getOutput('controller_api_terminate', 'v10365', ctc4, v10365);
          
          const v16513 = v6127;
          const v16514 = v6128;
          const v16517 = v6136;
          const v16518 = v6137;
          const v16533 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
          const v16534 = v16533[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
          const v16535 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
          const v16536 = v16535[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
          const v16537 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
          const v16538 = v16537[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
          const v16539 = [v16534, v16536, v16538];
          sim_r.isHalt = false;
          
          break;
          }
        case 'controller_api_toggle_pause0_179': {
          const v10461 = v6678[1];
          
          break;
          }
        case 'controller_api_withdraw0_179': {
          const v11091 = v6678[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v6678], secs: v6680, time: v6679, didSend: v4870, from: v6677 } = txn1;
  switch (v6678[0]) {
    case 'buyer_api_purchase_bronze0_179': {
      const v6681 = v6678[1];
      return;
      break;
      }
    case 'buyer_api_purchase_gold0_179': {
      const v7311 = v6678[1];
      return;
      break;
      }
    case 'buyer_api_purchase_silver0_179': {
      const v7941 = v6678[1];
      return;
      break;
      }
    case 'controller_api_restock0_179': {
      const v8571 = v6678[1];
      return;
      break;
      }
    case 'controller_api_set_prices0_179': {
      const v9201 = v6678[1];
      return;
      break;
      }
    case 'controller_api_terminate0_179': {
      const v9831 = v6678[1];
      undefined /* setApiDetails */;
      const v9957 = stdlib.addressEq(v6677, v6109);
      stdlib.assert(v9957, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:308:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:307:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:307:40:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:307:40:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'action not authorized',
        who: 'controller_api_terminate'
        });
      const v10050 = stdlib.le(v6137, stdlib.UInt_max);
      stdlib.assert(v10050, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_terminate'
        });
      ;
      const v10055 = stdlib.le(v6171, stdlib.UInt_max);
      stdlib.assert(v10055, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_terminate'
        });
      ;
      const v10063 = stdlib.le(v6173, stdlib.UInt_max);
      stdlib.assert(v10063, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_terminate'
        });
      ;
      const v10071 = stdlib.le(v6175, stdlib.UInt_max);
      stdlib.assert(v10071, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_terminate'
        });
      ;
      const v10364 = true;
      null;
      const v10365 = true;
      const v10366 = await txn1.getOutput('controller_api_terminate', 'v10365', ctc4, v10365);
      if (v4870) {
        stdlib.protect(ctc10, await interact.out(v9831, v10366), {
          at: './src/contracts/coin_shop.rsh:307:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:307:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:307:15:function exp)', 'at ./src/contracts/coin_shop.rsh:317:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:312:27:function exp)', 'at ./src/contracts/coin_shop.rsh:312:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:312:27:function exp)'],
          msg: 'out',
          who: 'controller_api_terminate'
          });
        }
      else {
        }
      
      const v16513 = v6127;
      const v16514 = v6128;
      const v16517 = v6136;
      const v16518 = v6137;
      const v16533 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
      const v16534 = v16533[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
      const v16535 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
      const v16536 = v16535[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
      const v16537 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
      const v16538 = v16537[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
      const v16539 = [v16534, v16536, v16538];
      return;
      
      break;
      }
    case 'controller_api_toggle_pause0_179': {
      const v10461 = v6678[1];
      return;
      break;
      }
    case 'controller_api_withdraw0_179': {
      const v11091 = v6678[1];
      return;
      break;
      }
    }
  
  
  };
export async function _controller_api_toggle_pause5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _controller_api_toggle_pause5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _controller_api_toggle_pause5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Data({
    buyer_api_purchase_bronze0_179: ctc7,
    buyer_api_purchase_gold0_179: ctc7,
    buyer_api_purchase_silver0_179: ctc7,
    controller_api_restock0_179: ctc8,
    controller_api_set_prices0_179: ctc8,
    controller_api_terminate0_179: ctc7,
    controller_api_toggle_pause0_179: ctc7,
    controller_api_withdraw0_179: ctc7
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6129, v6136, v6137, v6167, v6169, v6170, v6171, v6172, v6173, v6174, v6175, v6176, v6178, v6179, v6180] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v6269 = ctc.selfAddress();
  const v6271 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:267:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:267:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_toggle_pause0_179" (defined at: ./src/contracts/coin_shop.rsh:267:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'in',
    who: 'controller_api_toggle_pause'
    });
  const v6272 = stdlib.addressEq(v6269, v6109);
  stdlib.assert(v6272, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:268:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:267:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:267:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_toggle_pause0_179" (defined at: ./src/contracts/coin_shop.rsh:267:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'action not authorized',
    who: 'controller_api_toggle_pause'
    });
  const v6277 = ['controller_api_toggle_pause0_179', v6271];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6129, v6136, v6137, v6167, v6169, v6170, v6171, v6172, v6173, v6174, v6175, v6176, v6178, v6179, v6180, v6277],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:271:28:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:271:31:decimal', stdlib.UInt_max, '0'), v6085], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:271:34:decimal', stdlib.UInt_max, '0'), v6086], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:271:37:decimal', stdlib.UInt_max, '0'), v6087]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6678], secs: v6680, time: v6679, didSend: v4870, from: v6677 } = txn1;
      
      switch (v6678[0]) {
        case 'buyer_api_purchase_bronze0_179': {
          const v6681 = v6678[1];
          
          break;
          }
        case 'buyer_api_purchase_gold0_179': {
          const v7311 = v6678[1];
          
          break;
          }
        case 'buyer_api_purchase_silver0_179': {
          const v7941 = v6678[1];
          
          break;
          }
        case 'controller_api_restock0_179': {
          const v8571 = v6678[1];
          
          break;
          }
        case 'controller_api_set_prices0_179': {
          const v9201 = v6678[1];
          
          break;
          }
        case 'controller_api_terminate0_179': {
          const v9831 = v6678[1];
          
          break;
          }
        case 'controller_api_toggle_pause0_179': {
          const v10461 = v6678[1];
          sim_r.txns.push({
            kind: 'api',
            who: "controller_api_toggle_pause"
            });
          ;
          ;
          ;
          ;
          const v11010 = await txn1.getOutput('controller_api_toggle_pause', 'v6167', ctc4, v6167);
          
          const v16963 = v6127;
          const v16964 = v6167;
          const v16965 = v6129;
          const v16967 = v6136;
          const v16968 = v6137;
          const v16969 = v6129 ? false : true;
          if (v6129) {
            const v16983 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v16984 = v16983[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v16985 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v16986 = v16985[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v16987 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v16988 = v16987[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v16989 = [v16984, v16986, v16988];
            sim_r.isHalt = false;
            }
          else {
            const v16970 = v6167 ? false : true;
            const v16972 = v6167 ? false : v16969;
            const v16973 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v16974 = v16973[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v16975 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v16976 = v16975[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v16977 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v16978 = v16977[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v16979 = [v16974, v16976, v16978];
            const v16980 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
            const v16981 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
            const v16982 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'controller_api_withdraw0_179': {
          const v11091 = v6678[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v6678], secs: v6680, time: v6679, didSend: v4870, from: v6677 } = txn1;
  switch (v6678[0]) {
    case 'buyer_api_purchase_bronze0_179': {
      const v6681 = v6678[1];
      return;
      break;
      }
    case 'buyer_api_purchase_gold0_179': {
      const v7311 = v6678[1];
      return;
      break;
      }
    case 'buyer_api_purchase_silver0_179': {
      const v7941 = v6678[1];
      return;
      break;
      }
    case 'controller_api_restock0_179': {
      const v8571 = v6678[1];
      return;
      break;
      }
    case 'controller_api_set_prices0_179': {
      const v9201 = v6678[1];
      return;
      break;
      }
    case 'controller_api_terminate0_179': {
      const v9831 = v6678[1];
      return;
      break;
      }
    case 'controller_api_toggle_pause0_179': {
      const v10461 = v6678[1];
      undefined /* setApiDetails */;
      const v10606 = stdlib.addressEq(v6677, v6109);
      stdlib.assert(v10606, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:268:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:267:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:267:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:267:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'action not authorized',
        who: 'controller_api_toggle_pause'
        });
      const v10680 = stdlib.le(v6137, stdlib.UInt_max);
      stdlib.assert(v10680, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_toggle_pause'
        });
      ;
      const v10685 = stdlib.le(v6171, stdlib.UInt_max);
      stdlib.assert(v10685, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_toggle_pause'
        });
      ;
      const v10693 = stdlib.le(v6173, stdlib.UInt_max);
      stdlib.assert(v10693, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_toggle_pause'
        });
      ;
      const v10701 = stdlib.le(v6175, stdlib.UInt_max);
      stdlib.assert(v10701, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_toggle_pause'
        });
      ;
      const v11010 = await txn1.getOutput('controller_api_toggle_pause', 'v6167', ctc4, v6167);
      if (v4870) {
        stdlib.protect(ctc10, await interact.out(v10461, v11010), {
          at: './src/contracts/coin_shop.rsh:267:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:267:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:267:15:function exp)', 'at ./src/contracts/coin_shop.rsh:280:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:272:27:function exp)', 'at ./src/contracts/coin_shop.rsh:272:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:272:27:function exp)'],
          msg: 'out',
          who: 'controller_api_toggle_pause'
          });
        }
      else {
        }
      
      const v16963 = v6127;
      const v16964 = v6167;
      const v16965 = v6129;
      const v16967 = v6136;
      const v16968 = v6137;
      const v16969 = v6129 ? false : true;
      if (v6129) {
        const v16983 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v16984 = v16983[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v16985 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v16986 = v16985[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v16987 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v16988 = v16987[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v16989 = [v16984, v16986, v16988];
        return;
        }
      else {
        const v16970 = v6167 ? false : true;
        const v16972 = v6167 ? false : v16969;
        const v16973 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v16974 = v16973[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v16975 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v16976 = v16975[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v16977 = v6136[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v16978 = v16977[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v16979 = [v16974, v16976, v16978];
        const v16980 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
        const v16981 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
        const v16982 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
        return;
        }
      break;
      }
    case 'controller_api_withdraw0_179': {
      const v11091 = v6678[1];
      return;
      break;
      }
    }
  
  
  };
export async function _controller_api_withdraw5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _controller_api_withdraw5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _controller_api_withdraw5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Data({
    buyer_api_purchase_bronze0_179: ctc7,
    buyer_api_purchase_gold0_179: ctc7,
    buyer_api_purchase_silver0_179: ctc7,
    controller_api_restock0_179: ctc8,
    controller_api_set_prices0_179: ctc8,
    controller_api_terminate0_179: ctc7,
    controller_api_toggle_pause0_179: ctc7,
    controller_api_withdraw0_179: ctc7
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6129, v6136, v6137, v6167, v6169, v6170, v6171, v6172, v6173, v6174, v6175, v6176, v6178, v6179, v6180] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v6279 = ctc.selfAddress();
  const v6281 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:287:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_withdraw0_179" (defined at: ./src/contracts/coin_shop.rsh:287:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'in',
    who: 'controller_api_withdraw'
    });
  const v6282 = stdlib.addressEq(v6279, v6109);
  stdlib.assert(v6282, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:288:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:287:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_withdraw0_179" (defined at: ./src/contracts/coin_shop.rsh:287:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'action not authorized',
    who: 'controller_api_withdraw'
    });
  const v6287 = ['controller_api_withdraw0_179', v6281];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6084, v6085, v6086, v6087, v6109, v6127, v6128, v6129, v6136, v6137, v6167, v6169, v6170, v6171, v6172, v6173, v6174, v6175, v6176, v6178, v6179, v6180, v6287],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:291:28:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:291:31:decimal', stdlib.UInt_max, '0'), v6085], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:291:34:decimal', stdlib.UInt_max, '0'), v6086], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:291:37:decimal', stdlib.UInt_max, '0'), v6087]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v6678], secs: v6680, time: v6679, didSend: v4870, from: v6677 } = txn1;
      
      switch (v6678[0]) {
        case 'buyer_api_purchase_bronze0_179': {
          const v6681 = v6678[1];
          
          break;
          }
        case 'buyer_api_purchase_gold0_179': {
          const v7311 = v6678[1];
          
          break;
          }
        case 'buyer_api_purchase_silver0_179': {
          const v7941 = v6678[1];
          
          break;
          }
        case 'controller_api_restock0_179': {
          const v8571 = v6678[1];
          
          break;
          }
        case 'controller_api_set_prices0_179': {
          const v9201 = v6678[1];
          
          break;
          }
        case 'controller_api_terminate0_179': {
          const v9831 = v6678[1];
          
          break;
          }
        case 'controller_api_toggle_pause0_179': {
          const v10461 = v6678[1];
          
          break;
          }
        case 'controller_api_withdraw0_179': {
          const v11091 = v6678[1];
          sim_r.txns.push({
            kind: 'api',
            who: "controller_api_withdraw"
            });
          ;
          ;
          ;
          ;
          const v11686 = stdlib.sub(v6171, v6171);
          const v11690 = stdlib.Array_set(v6170, '0', v11686);
          const v11691 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '0'), v11690);
          sim_r.txns.push({
            kind: 'from',
            to: v6109,
            tok: v6085
            });
          const v11692 = v11691[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '1')];
          const v11693 = v11692[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '0')];
          const v11697 = stdlib.sub(v11693, v6173);
          const v11701 = stdlib.Array_set(v11692, '0', v11697);
          const v11702 = stdlib.Array_set(v11691, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '1'), v11701);
          sim_r.txns.push({
            kind: 'from',
            to: v6109,
            tok: v6086
            });
          const v11703 = v11702[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '2')];
          const v11704 = v11703[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '0')];
          const v11708 = stdlib.sub(v11704, v6175);
          const v11712 = stdlib.Array_set(v11703, '0', v11708);
          const v11713 = stdlib.Array_set(v11702, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '2'), v11712);
          sim_r.txns.push({
            kind: 'from',
            to: v6109,
            tok: v6087
            });
          null;
          const v11714 = true;
          const v11715 = await txn1.getOutput('controller_api_withdraw', 'v11714', ctc4, v11714);
          
          const v17413 = v6127;
          const v17414 = v6128;
          const v17415 = v6129;
          const v17417 = v11713;
          const v17418 = v6137;
          const v17419 = v6129 ? false : true;
          if (v6129) {
            const v17433 = v11713[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v17434 = v17433[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v17435 = v11713[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v17436 = v17435[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v17437 = v11713[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v17438 = v17437[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v17439 = [v17434, v17436, v17438];
            sim_r.isHalt = false;
            }
          else {
            const v17420 = v6128 ? false : true;
            const v17422 = v6128 ? false : v17419;
            const v17423 = v11713[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v17424 = v17423[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v17425 = v11713[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v17426 = v17425[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v17427 = v11713[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v17428 = v17427[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v17429 = [v17424, v17426, v17428];
            const v17430 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
            const v17431 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
            const v17432 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v6678], secs: v6680, time: v6679, didSend: v4870, from: v6677 } = txn1;
  switch (v6678[0]) {
    case 'buyer_api_purchase_bronze0_179': {
      const v6681 = v6678[1];
      return;
      break;
      }
    case 'buyer_api_purchase_gold0_179': {
      const v7311 = v6678[1];
      return;
      break;
      }
    case 'buyer_api_purchase_silver0_179': {
      const v7941 = v6678[1];
      return;
      break;
      }
    case 'controller_api_restock0_179': {
      const v8571 = v6678[1];
      return;
      break;
      }
    case 'controller_api_set_prices0_179': {
      const v9201 = v6678[1];
      return;
      break;
      }
    case 'controller_api_terminate0_179': {
      const v9831 = v6678[1];
      return;
      break;
      }
    case 'controller_api_toggle_pause0_179': {
      const v10461 = v6678[1];
      return;
      break;
      }
    case 'controller_api_withdraw0_179': {
      const v11091 = v6678[1];
      undefined /* setApiDetails */;
      const v11255 = stdlib.addressEq(v6677, v6109);
      stdlib.assert(v11255, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:288:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:287:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'action not authorized',
        who: 'controller_api_withdraw'
        });
      const v11310 = stdlib.le(v6137, stdlib.UInt_max);
      stdlib.assert(v11310, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_withdraw'
        });
      ;
      const v11315 = stdlib.le(v6171, stdlib.UInt_max);
      stdlib.assert(v11315, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_withdraw'
        });
      ;
      const v11323 = stdlib.le(v6173, stdlib.UInt_max);
      stdlib.assert(v11323, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_withdraw'
        });
      ;
      const v11331 = stdlib.le(v6175, stdlib.UInt_max);
      stdlib.assert(v11331, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_withdraw'
        });
      ;
      const v11686 = stdlib.sub(v6171, v6171);
      const v11687 = stdlib.ge(v11686, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '0'));
      stdlib.assert(v11687, {
        at: './src/contracts/coin_shop.rsh:297:56:application',
        fs: ['at ./src/contracts/coin_shop.rsh:292:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:292:27:function exp)'],
        msg: 'assume >= 0',
        who: 'controller_api_withdraw'
        });
      const v11690 = stdlib.Array_set(v6170, '0', v11686);
      const v11691 = stdlib.Array_set(v6136, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '0'), v11690);
      ;
      const v11692 = v11691[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '1')];
      const v11693 = v11692[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '0')];
      const v11697 = stdlib.sub(v11693, v6173);
      const v11698 = stdlib.ge(v11697, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '0'));
      stdlib.assert(v11698, {
        at: './src/contracts/coin_shop.rsh:297:56:application',
        fs: ['at ./src/contracts/coin_shop.rsh:292:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:292:27:function exp)'],
        msg: 'assume >= 0',
        who: 'controller_api_withdraw'
        });
      const v11701 = stdlib.Array_set(v11692, '0', v11697);
      const v11702 = stdlib.Array_set(v11691, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '1'), v11701);
      ;
      const v11703 = v11702[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '2')];
      const v11704 = v11703[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '0')];
      const v11708 = stdlib.sub(v11704, v6175);
      const v11709 = stdlib.ge(v11708, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '0'));
      stdlib.assert(v11709, {
        at: './src/contracts/coin_shop.rsh:297:56:application',
        fs: ['at ./src/contracts/coin_shop.rsh:292:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:292:27:function exp)'],
        msg: 'assume >= 0',
        who: 'controller_api_withdraw'
        });
      const v11712 = stdlib.Array_set(v11703, '0', v11708);
      const v11713 = stdlib.Array_set(v11702, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:297:56:application', stdlib.UInt_max, '2'), v11712);
      ;
      null;
      const v11714 = true;
      const v11715 = await txn1.getOutput('controller_api_withdraw', 'v11714', ctc4, v11714);
      if (v4870) {
        stdlib.protect(ctc10, await interact.out(v11091, v11715), {
          at: './src/contracts/coin_shop.rsh:287:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:287:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:15:function exp)', 'at ./src/contracts/coin_shop.rsh:301:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:292:27:function exp)', 'at ./src/contracts/coin_shop.rsh:292:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:292:27:function exp)'],
          msg: 'out',
          who: 'controller_api_withdraw'
          });
        }
      else {
        }
      
      const v17413 = v6127;
      const v17414 = v6128;
      const v17415 = v6129;
      const v17417 = v11713;
      const v17418 = v6137;
      const v17419 = v6129 ? false : true;
      if (v6129) {
        const v17433 = v11713[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v17434 = v17433[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v17435 = v11713[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v17436 = v17435[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v17437 = v11713[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v17438 = v17437[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v17439 = [v17434, v17436, v17438];
        return;
        }
      else {
        const v17420 = v6128 ? false : true;
        const v17422 = v6128 ? false : v17419;
        const v17423 = v11713[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v17424 = v17423[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v17425 = v11713[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v17426 = v17425[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v17427 = v11713[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v17428 = v17427[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v17429 = [v17424, v17426, v17428];
        const v17430 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
        const v17431 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
        const v17432 = v6127[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
        return;
        }
      break;
      }
    }
  
  
  };
export async function buyer_api_purchase_bronze(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for buyer_api_purchase_bronze expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for buyer_api_purchase_bronze expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _buyer_api_purchase_bronze5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function buyer_api_purchase_gold(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for buyer_api_purchase_gold expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for buyer_api_purchase_gold expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _buyer_api_purchase_gold5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function buyer_api_purchase_silver(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for buyer_api_purchase_silver expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for buyer_api_purchase_silver expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _buyer_api_purchase_silver5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function controller_api_restock(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for controller_api_restock expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for controller_api_restock expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _controller_api_restock5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function controller_api_set_prices(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for controller_api_set_prices expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for controller_api_set_prices expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _controller_api_set_prices5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function controller_api_terminate(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for controller_api_terminate expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for controller_api_terminate expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _controller_api_terminate5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function controller_api_toggle_pause(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for controller_api_toggle_pause expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for controller_api_toggle_pause expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _controller_api_toggle_pause5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function controller_api_withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for controller_api_withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for controller_api_withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _controller_api_withdraw5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64))void`, `_reachp_4((uint64,(byte,byte[24])))void`, `buyer_api_purchase_bronze()byte`, `buyer_api_purchase_gold()byte`, `buyer_api_purchase_silver()byte`, `controller_api_restock((uint64,uint64,uint64))byte`, `controller_api_set_prices((uint64,uint64,uint64))byte`, `controller_api_terminate()byte`, `controller_api_toggle_pause()byte`, `controller_api_withdraw()byte`],
    pure: [`coin_prices()(uint64,uint64,uint64)`, `coin_supply()(uint64,uint64,uint64)`, `is_paused()byte`],
    sigs: [`_reachp_0((uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64))void`, `_reachp_4((uint64,(byte,byte[24])))void`, `buyer_api_purchase_bronze()byte`, `buyer_api_purchase_gold()byte`, `buyer_api_purchase_silver()byte`, `coin_prices()(uint64,uint64,uint64)`, `coin_supply()(uint64,uint64,uint64)`, `controller_api_restock((uint64,uint64,uint64))byte`, `controller_api_set_prices((uint64,uint64,uint64))byte`, `controller_api_terminate()byte`, `controller_api_toggle_pause()byte`, `controller_api_withdraw()byte`, `is_paused()byte`]
    },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAMAP///////////wEBCAUDEKCNBiAoMAQmBQTDuqqJAAEAAQEBAjEYQQldKWRJIls1ASVbNQIqZCtkUCcEZFCCDwQDr6M8BAodJkkEFCCDHwQcjzblBD4NOmkERlzXZgRHkTeUBEtfIk4El4t5OASuKB3NBLbBefkExaQ7EQTW0YxwBN/ZIygE7i53ETYaAI4PCKgIwwkiCREJHAkfCRkJBgkJCPoIzgj9CQAIuAkDADQXRDQVJA9ENBk0EAhJNQsjDkQ0EIgLPTQVIw5ENBMjDkQ0ESMORDQLSQlJNQwiD0Q0CzQfiAojNBUkCUk1CyIPRCQ0IjEAiAoNgAZicm9uemU1DSg0DVAxAFCwJDUNgAgAAAAAAAAbUzQNFlEHCFCwNA0WUQcINQQyBjQaNBY0CxZcAFwANAw1GTUaNRs0HEEIqTQaVwARSTUQIls1DzQaVxERIls1DjQaVyIRIls1DTQPFjQOFlA0DRZQNQw0IzQiFlA0IRZQNCAWUDQfUDQeUDQdFlEHCFA0GlA0GRZQNBBQNA8WUDQOFlA0DRZQNAxQgT2vUCEFMgY1AjUBKksBVwB/ZytLAVd/f2cnBExX/ixnKTQBFjQCFlBnMRkiEkSICnw0A0AACoAEFR98dTQEULAkQzQXRDQRJA9ENBk0DghJNQsjDkQ0DogKCDQVIw5ENBMjDkQ0ESMORDQLSQlJNQwiD0Q0CzQfiAjuNBEkCUk1CyIPRCQ0IDEAiAjYgAZnb2xkAAA1DSg0DVAxAFCwJDUNgAgAAAAAAAAeFTQNFlEHCFCwNA0WUQcINQQyBjQaNBI0CxZcAFwiNAw1GTUaNRtC/sg0F0Q0EyQPRDQZNA8ISTULIw5ENA+ICXc0FSMORDQTIw5ENBEjDkQ0C0kJSTUMIg9ENAs0H4gIXTQTJAlJNQsiD0QkNCExAIgIR4AGc2lsdmVyNQ0oNA1QMQBQsCQ1DYAIAAAAAAAAINc0DRZRBwhQsDQNFlEHCDUEMgY0GjQUNAsWXABcETQMNRk1GjUbQv43NA1XARg1CzEANB8SRDQLIls1DjQLJVs1DTQLIQZbNQw0DoGwCQ40DYHYBA4QNAyByAEOEEQ0GSMORDQVNA4ISTULIw5ENBo0FjQLFlwAXAA1DzQONCKICMc0D1cREUk1ECJbNA0ISTUOIw5ENA80EDQOFlwAXBE1CzQNNCGICKA0C1ciEUk1DyJbNAwISTUOIw5ENAs0DzQOFlwAXCI1DTQMNCCICHk0DVcAESJbNQ40DVcRESJbNQw0DVciESJbNQuABAf2AGE0DhZQNAwWUDQLFlCwJDULgAgAAAAAAAAjazQLFlEHCFCwNAsWUQcINQQyBjQNNRo1G0L9OjEANB8SRDQZIw5ENBUjDkQ0EyMORDQRIw5ENA1XARhJNQwiWzUONAwlWzUNNAwhBls1C4AE3yi0DDQOFlA0DRZQNAsWULAkNQuACAAAAAAAACX2NAsWUQcIULA0CxZRBwg1BDQMMgY1GzUeQvzMMQA0HxJENBkjDkQ0FSMORDQTIw5ENBEjDkQkNQuABC4RPW80CxZRBwhQsCQ1C4AIAAAAAAAAKH00CxZRBwhQsDQLFlEHCDUEJDIGNRs1HEL8ejEANB8SRDQZIw5ENBUjDkQ0EyMORDQRIw5EgAgAAAAAAAAYFzQYFlEHCFCwNBgWUQcINQQ0GDIGNRs1HUL8OzEANB8SRDQZIw5ENBUjDkQ0EyMORDQRIw5ENBVJCUk1DCIPRDQaNBY0DBZcAFwANQs0FTQiNB+IBco0C1cREUk1DiJbNBMJSTUNIg9ENAs0DjQNFlwAXBE1DDQTNCE0H4gFoTQMVyIRSTUNIls0EQlJNQsiD0Q0ETQgNB+IBYWABPkNdMA0FRZQNBMWUDQRFlCwJDUOgAgAAAAAAAAtwjQOFlEHCFCwNA4WUQcINQQyBjQMNA00CxZcAFwiNRo1G0L7eIEhrzULIQQ0ARJEiAVJNAsiWzUMNAtXCBk1DYAEKm21WjQMFlA0DVCwNAyIBR80DSJVjQgDygPNA9AD0wPWA9kD3APfQvqigCEAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L/loAhAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/240ASEEDEEEVTQBIQUSRIgFPjQeNQQxGSISREL7XzQBIQQMQQRINAEhBRJEiAUhNAw1BEL/4CWvgAEDNAtQUDULQv8rJa+AAQQ0C1BQNQtC/x2AIQAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv71gCEAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L+zYAhAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/qU0ASEEDEEDrDQBIQUSRIgEdTQdFlEHCDUEQv8wMQA1IzQLIls1DDQLJVs1IjQLIQZbNSE0C4EYWzUggAT27avSNAwWUDQiFlA0IRZQNCAWULA0DIgDl4ERr0k1DElQNAxQSTULSVcAESWvXABcAEk1DElXERElr1wAXBE1CzQhNCITRDQLSVciESWvXABcIjUNNCA0IhM0IDQhExBEIQeIBFkiNCIyCogDNyEHiARMIjQhMgqIAyohB4gEPyI0IDIKiAMdNCM1HzQiNCETNCI0IBMQNCE0IBMQRDQjNCIWUDQhFlA0IBZQNA1QNB9QgZ8Br1AkMgZC+YskNAESRElXACA1I0khCFs1IkkhCVs1IUkhCls1IElXODM1DVdrIDUfNAsXNQyABNUVGRQ0DBZQsDQMiAK3NCMxABJEgBgAAAAAAJiWgAAAAAABMS0AAAAAAAHJw4AiIjIGNA0iNRk1GjUbNRw1HTUeQvisIQU0ARJEiAMRNAsXNQyABNQMbNY0DBZQsDQMiAJjNB8xABI0IzEAEhFENBlJCSIPRDQZNB+IAkE0D0kJSTUMIg9ENBo0EDQMFlwAXAA1CzQPNCI0H4gCHTQLVxERSTUPIls0DglJNQwiD0Q0DjQhNB+IAgE0CzQPNAwWXABcEVciESJbNA0JIg9ENA00IDQfiAHiIjQgMgoyCYgDGyI0ITIKMgmIAxEiNCIyCjIJiAMHMRkhBBJEiAMEIjIKMgmIAwhC+H2IAbUhB4gCwjYaATULQv3biAGlNhoBNQtC/q2IAZo2GgE1C0L/FYgBjzYaATULQvxDIjE0EkQhCzE1EkQiMTYSRCIxNxJEiAFvgaoCryIiQvgBQvyJQvwXQvxbQvyoQvzCNhoBNQtC/NI2GgE1C0L82EL840L9CEL9LUL9UkL22UL4C0L4mUL5J0L6IUL6jEL620L7FzQdFDUYNB0UNRc0GlcAEUk1FiJbNRU0GlcREUk1FCJbNRM0GlciEUk1EiJbNRE0FRY0ExZQNBEWUDUMNB4iWzUQNB4lWzUPNB4hBls1DiI1HDQjNCIWUDQhFlA0IBZQNB9QNB5QNB0WUQcIUDQcFlEHCFA0GlA0GRZQNBgWUQcIUDQXFlEHCFA0FlA0FRZQNBRQNBMWUDQSUDQRFlA0DFA0EBZQNA8WUDQOFlAhBDIGQvcLIrIBJLIQsgeyCLOJIrIBIQuyELIUshGyErOJNAEhBBJEiABaNB41BEL7qDQBIQQSRIgASjQMNQRC+5g0ASEEEkSIADo0HRZRBwg1BEL7hEiJTAlJNQYyCYgAEYkJSUH/7kk1BogA/4mxQv+gsUL/kCQ1A4lJIhJMNAISEUSJSVcAIDUjSSEIWzUiSSEJWzUhSSEKWzUgSVc4IDUfSVdYGDUeSVdwARc1HUlXcQEXNRxJV3IzNRpJgaUBWzUZSVetARc1GElXrgEXNRdJV68RNRZJgcABWzUVSVfIETUUSYHZAVs1E0lX4RE1EkmB8gFbNRFJV/oYNQxJgZICWzUQSYGaAls1D4GiAls1DolJVwAgNSNJIQhbNSJJIQlbNSFJIQpbNSBJVzggNR9JV1gYNR5JV3ABFzUdSVdxMzUaSYGkAVs1GUlXrBE1EEmBvQFbNQ9JgcUBWzUOSYHNAVs1DVfVGDUMiTEWNAAkCEk1AAlHAjgHMgoSRDgQJBJEOAgSRIk0Bgg1BokxFjQAJAhJNQAJRwM4FDIKEkQ4ECELEkQ4EU8CEkQ4EhJEibGyFUL+WzQGNAdKD0H+l0L+n7GyCUL+PQ==`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `24`,
    1000: `649`,
    1001: `649`,
    1002: `649`,
    1003: `650`,
    1004: `650`,
    1005: `651`,
    1006: `652`,
    1007: `652`,
    1008: `652`,
    1009: `653`,
    101: `24`,
    1010: `654`,
    1011: `655`,
    1012: `655`,
    1013: `656`,
    1014: `657`,
    1015: `657`,
    1016: `657`,
    1017: `658`,
    1018: `658`,
    1019: `659`,
    102: `24`,
    1020: `659`,
    1021: `660`,
    1022: `660`,
    1023: `661`,
    1024: `661`,
    1025: `662`,
    1026: `662`,
    1027: `663`,
    1028: `663`,
    1029: `663`,
    103: `24`,
    1030: `665`,
    1031: `665`,
    1032: `666`,
    1033: `666`,
    1034: `667`,
    1035: `668`,
    1036: `676`,
    1037: `676`,
    1038: `677`,
    1039: `678`,
    104: `24`,
    1040: `679`,
    1041: `682`,
    1042: `682`,
    1043: `683`,
    1044: `684`,
    1045: `685`,
    1046: `688`,
    1047: `688`,
    1048: `689`,
    1049: `690`,
    105: `24`,
    1050: `691`,
    1051: `694`,
    1052: `694`,
    1053: `695`,
    1054: `696`,
    1055: `697`,
    1056: `700`,
    1057: `700`,
    1058: `701`,
    1059: `701`,
    106: `24`,
    1060: `701`,
    1061: `702`,
    1062: `703`,
    1063: `703`,
    1064: `704`,
    1065: `705`,
    1066: `706`,
    1067: `706`,
    1068: `707`,
    1069: `707`,
    107: `24`,
    1070: `708`,
    1071: `709`,
    1072: `710`,
    1073: `710`,
    1074: `711`,
    1075: `711`,
    1076: `712`,
    1077: `712`,
    1078: `713`,
    1079: `714`,
    108: `24`,
    1080: `714`,
    1081: `715`,
    1082: `715`,
    1083: `715`,
    1084: `715`,
    1085: `715`,
    1086: `715`,
    1087: `716`,
    1088: `716`,
    1089: `717`,
    109: `24`,
    1090: `718`,
    1091: `719`,
    1092: `719`,
    1093: `720`,
    1094: `721`,
    1095: `722`,
    1096: `722`,
    1097: `723`,
    1098: `724`,
    1099: `725`,
    11: `2`,
    110: `24`,
    1100: `727`,
    1101: `728`,
    1102: `728`,
    1103: `729`,
    1104: `729`,
    1105: `729`,
    1106: `729`,
    1107: `729`,
    1108: `729`,
    1109: `729`,
    111: `24`,
    1110: `729`,
    1111: `729`,
    1112: `729`,
    1113: `730`,
    1114: `730`,
    1115: `731`,
    1116: `732`,
    1117: `732`,
    1118: `732`,
    1119: `733`,
    112: `24`,
    1120: `734`,
    1121: `735`,
    1122: `735`,
    1123: `736`,
    1124: `737`,
    1125: `737`,
    1126: `737`,
    1127: `738`,
    1128: `738`,
    1129: `739`,
    113: `24`,
    1130: `739`,
    1131: `740`,
    1132: `740`,
    1133: `741`,
    1134: `741`,
    1135: `742`,
    1136: `742`,
    1137: `743`,
    1138: `743`,
    1139: `743`,
    114: `24`,
    1140: `745`,
    1141: `745`,
    1142: `746`,
    1143: `746`,
    1144: `747`,
    1145: `748`,
    1146: `756`,
    1147: `756`,
    1148: `757`,
    1149: `758`,
    115: `24`,
    1150: `759`,
    1151: `762`,
    1152: `762`,
    1153: `763`,
    1154: `764`,
    1155: `765`,
    1156: `768`,
    1157: `768`,
    1158: `769`,
    1159: `770`,
    116: `24`,
    1160: `771`,
    1161: `774`,
    1162: `774`,
    1163: `775`,
    1164: `776`,
    1165: `777`,
    1166: `780`,
    1167: `781`,
    1168: `781`,
    1169: `782`,
    117: `24`,
    1170: `782`,
    1171: `782`,
    1172: `782`,
    1173: `782`,
    1174: `782`,
    1175: `783`,
    1176: `783`,
    1177: `784`,
    1178: `785`,
    1179: `785`,
    118: `24`,
    1180: `785`,
    1181: `786`,
    1182: `787`,
    1183: `789`,
    1184: `790`,
    1185: `790`,
    1186: `791`,
    1187: `791`,
    1188: `791`,
    1189: `791`,
    119: `24`,
    1190: `791`,
    1191: `791`,
    1192: `791`,
    1193: `791`,
    1194: `791`,
    1195: `791`,
    1196: `792`,
    1197: `792`,
    1198: `793`,
    1199: `794`,
    12: `2`,
    120: `24`,
    1200: `794`,
    1201: `794`,
    1202: `795`,
    1203: `796`,
    1204: `797`,
    1205: `797`,
    1206: `798`,
    1207: `799`,
    1208: `799`,
    1209: `799`,
    121: `24`,
    1210: `800`,
    1211: `800`,
    1212: `801`,
    1213: `802`,
    1214: `802`,
    1215: `803`,
    1216: `803`,
    1217: `804`,
    1218: `804`,
    1219: `805`,
    122: `24`,
    1220: `805`,
    1221: `805`,
    1222: `807`,
    1223: `807`,
    1224: `808`,
    1225: `808`,
    1226: `809`,
    1227: `810`,
    1228: `818`,
    1229: `818`,
    123: `24`,
    1230: `819`,
    1231: `820`,
    1232: `821`,
    1233: `824`,
    1234: `824`,
    1235: `825`,
    1236: `826`,
    1237: `827`,
    1238: `830`,
    1239: `830`,
    124: `24`,
    1240: `831`,
    1241: `832`,
    1242: `833`,
    1243: `836`,
    1244: `836`,
    1245: `837`,
    1246: `838`,
    1247: `839`,
    1248: `842`,
    1249: `842`,
    125: `24`,
    1250: `842`,
    1251: `842`,
    1252: `842`,
    1253: `842`,
    1254: `842`,
    1255: `842`,
    1256: `842`,
    1257: `842`,
    1258: `843`,
    1259: `843`,
    126: `24`,
    1260: `844`,
    1261: `845`,
    1262: `845`,
    1263: `845`,
    1264: `846`,
    1265: `847`,
    1266: `848`,
    1267: `848`,
    1268: `849`,
    1269: `850`,
    127: `24`,
    1270: `850`,
    1271: `850`,
    1272: `851`,
    1273: `851`,
    1274: `852`,
    1275: `852`,
    1276: `853`,
    1277: `853`,
    1278: `854`,
    1279: `854`,
    128: `24`,
    1280: `855`,
    1281: `855`,
    1282: `856`,
    1283: `856`,
    1284: `856`,
    1285: `858`,
    1286: `858`,
    1287: `859`,
    1288: `859`,
    1289: `860`,
    129: `24`,
    1290: `861`,
    1291: `869`,
    1292: `869`,
    1293: `870`,
    1294: `871`,
    1295: `872`,
    1296: `875`,
    1297: `875`,
    1298: `876`,
    1299: `877`,
    13: `2`,
    130: `24`,
    1300: `878`,
    1301: `881`,
    1302: `881`,
    1303: `882`,
    1304: `883`,
    1305: `884`,
    1306: `887`,
    1307: `887`,
    1308: `888`,
    1309: `889`,
    131: `24`,
    1310: `890`,
    1311: `893`,
    1312: `893`,
    1313: `894`,
    1314: `895`,
    1315: `896`,
    1316: `897`,
    1317: `897`,
    1318: `898`,
    1319: `899`,
    132: `24`,
    1320: `900`,
    1321: `904`,
    1322: `904`,
    1323: `905`,
    1324: `905`,
    1325: `906`,
    1326: `906`,
    1327: `907`,
    1328: `908`,
    1329: `908`,
    133: `24`,
    1330: `909`,
    1331: `909`,
    1332: `910`,
    1333: `910`,
    1334: `911`,
    1335: `911`,
    1336: `913`,
    1337: `913`,
    1338: `915`,
    1339: `915`,
    134: `24`,
    1340: `916`,
    1341: `916`,
    1342: `916`,
    1343: `917`,
    1344: `917`,
    1345: `918`,
    1346: `918`,
    1347: `918`,
    1348: `919`,
    1349: `920`,
    135: `24`,
    1350: `920`,
    1351: `921`,
    1352: `922`,
    1353: `923`,
    1354: `923`,
    1355: `924`,
    1356: `925`,
    1357: `926`,
    1358: `926`,
    1359: `927`,
    136: `24`,
    1360: `928`,
    1361: `929`,
    1362: `933`,
    1363: `933`,
    1364: `934`,
    1365: `934`,
    1366: `935`,
    1367: `935`,
    1368: `936`,
    1369: `937`,
    137: `24`,
    1370: `937`,
    1371: `938`,
    1372: `938`,
    1373: `939`,
    1374: `939`,
    1375: `940`,
    1376: `940`,
    1377: `942`,
    1378: `942`,
    1379: `943`,
    138: `24`,
    1380: `943`,
    1381: `944`,
    1382: `944`,
    1383: `944`,
    1384: `945`,
    1385: `945`,
    1386: `946`,
    1387: `946`,
    1388: `946`,
    1389: `947`,
    139: `24`,
    1390: `948`,
    1391: `948`,
    1392: `949`,
    1393: `950`,
    1394: `951`,
    1395: `951`,
    1396: `952`,
    1397: `953`,
    1398: `954`,
    1399: `954`,
    14: `2`,
    140: `24`,
    1400: `955`,
    1401: `956`,
    1402: `957`,
    1403: `961`,
    1404: `961`,
    1405: `963`,
    1406: `963`,
    1407: `964`,
    1408: `964`,
    1409: `965`,
    141: `24`,
    1410: `965`,
    1411: `965`,
    1412: `966`,
    1413: `966`,
    1414: `966`,
    1415: `966`,
    1416: `966`,
    1417: `966`,
    1418: `967`,
    1419: `967`,
    142: `25`,
    1420: `968`,
    1421: `969`,
    1422: `970`,
    1423: `970`,
    1424: `971`,
    1425: `972`,
    1426: `973`,
    1427: `973`,
    1428: `974`,
    1429: `975`,
    143: `25`,
    1430: `976`,
    1431: `978`,
    1432: `979`,
    1433: `979`,
    1434: `980`,
    1435: `980`,
    1436: `980`,
    1437: `980`,
    1438: `980`,
    1439: `980`,
    144: `25`,
    1440: `980`,
    1441: `980`,
    1442: `980`,
    1443: `980`,
    1444: `981`,
    1445: `981`,
    1446: `982`,
    1447: `983`,
    1448: `983`,
    1449: `983`,
    145: `26`,
    1450: `984`,
    1451: `985`,
    1452: `986`,
    1453: `986`,
    1454: `987`,
    1455: `988`,
    1456: `988`,
    1457: `988`,
    1458: `989`,
    1459: `989`,
    146: `26`,
    1460: `990`,
    1461: `990`,
    1462: `991`,
    1463: `991`,
    1464: `992`,
    1465: `992`,
    1466: `993`,
    1467: `993`,
    1468: `994`,
    1469: `995`,
    147: `26`,
    1470: `995`,
    1471: `996`,
    1472: `996`,
    1473: `997`,
    1474: `997`,
    1475: `998`,
    1476: `998`,
    1477: `999`,
    1478: `999`,
    1479: `999`,
    148: `26`,
    1480: `1001`,
    1481: `1001`,
    1482: `1002`,
    1483: `1003`,
    1484: `1003`,
    1485: `1005`,
    1486: `1005`,
    1487: `1006`,
    1488: `1006`,
    1489: `1007`,
    149: `26`,
    1490: `1008`,
    1491: `1009`,
    1492: `1009`,
    1493: `1009`,
    1494: `1010`,
    1495: `1010`,
    1496: `1011`,
    1497: `1012`,
    1498: `1013`,
    1499: `1013`,
    15: `2`,
    150: `26`,
    1500: `1014`,
    1501: `1014`,
    1502: `1015`,
    1503: `1015`,
    1504: `1015`,
    1505: `1016`,
    1506: `1016`,
    1507: `1017`,
    1508: `1017`,
    1509: `1017`,
    151: `26`,
    1510: `1017`,
    1511: `1017`,
    1512: `1017`,
    1513: `1018`,
    1514: `1018`,
    1515: `1019`,
    1516: `1020`,
    1517: `1021`,
    1518: `1021`,
    1519: `1022`,
    152: `26`,
    1520: `1023`,
    1521: `1025`,
    1522: `1025`,
    1523: `1026`,
    1524: `1026`,
    1525: `1026`,
    1526: `1027`,
    1527: `1027`,
    1528: `1028`,
    1529: `1029`,
    153: `26`,
    1530: `1030`,
    1531: `1030`,
    1532: `1030`,
    1533: `1030`,
    1534: `1030`,
    1535: `1030`,
    1536: `1030`,
    1537: `1030`,
    1538: `1030`,
    1539: `1030`,
    154: `26`,
    1540: `1030`,
    1541: `1030`,
    1542: `1030`,
    1543: `1030`,
    1544: `1030`,
    1545: `1030`,
    1546: `1030`,
    1547: `1030`,
    1548: `1031`,
    1549: `1031`,
    155: `26`,
    1550: `1031`,
    1551: `1033`,
    1552: `1033`,
    1553: `1033`,
    1554: `1033`,
    1555: `1033`,
    1556: `1033`,
    1557: `1033`,
    1558: `1033`,
    1559: `1033`,
    156: `26`,
    1560: `1033`,
    1561: `1033`,
    1562: `1033`,
    1563: `1033`,
    1564: `1033`,
    1565: `1033`,
    1566: `1033`,
    1567: `1033`,
    1568: `1033`,
    1569: `1033`,
    157: `26`,
    1570: `1033`,
    1571: `1033`,
    1572: `1033`,
    1573: `1033`,
    1574: `1033`,
    1575: `1033`,
    1576: `1033`,
    1577: `1033`,
    1578: `1033`,
    1579: `1033`,
    158: `26`,
    1580: `1033`,
    1581: `1033`,
    1582: `1033`,
    1583: `1033`,
    1584: `1033`,
    1585: `1033`,
    1586: `1034`,
    1587: `1034`,
    1588: `1035`,
    1589: `1035`,
    159: `26`,
    1590: `1035`,
    1591: `1037`,
    1592: `1037`,
    1593: `1037`,
    1594: `1037`,
    1595: `1037`,
    1596: `1037`,
    1597: `1037`,
    1598: `1037`,
    1599: `1037`,
    16: `2`,
    160: `26`,
    1600: `1037`,
    1601: `1037`,
    1602: `1037`,
    1603: `1037`,
    1604: `1037`,
    1605: `1037`,
    1606: `1037`,
    1607: `1037`,
    1608: `1037`,
    1609: `1037`,
    161: `26`,
    1610: `1037`,
    1611: `1037`,
    1612: `1037`,
    1613: `1037`,
    1614: `1037`,
    1615: `1037`,
    1616: `1037`,
    1617: `1037`,
    1618: `1037`,
    1619: `1037`,
    162: `26`,
    1620: `1037`,
    1621: `1037`,
    1622: `1037`,
    1623: `1037`,
    1624: `1037`,
    1625: `1037`,
    1626: `1038`,
    1627: `1038`,
    1628: `1039`,
    1629: `1039`,
    163: `26`,
    1630: `1039`,
    1631: `1041`,
    1632: `1041`,
    1633: `1042`,
    1634: `1042`,
    1635: `1043`,
    1636: `1044`,
    1637: `1044`,
    1638: `1044`,
    1639: `1045`,
    164: `26`,
    1640: `1045`,
    1641: `1046`,
    1642: `1046`,
    1643: `1047`,
    1644: `1048`,
    1645: `1051`,
    1646: `1051`,
    1647: `1051`,
    1648: `1052`,
    1649: `1052`,
    165: `26`,
    1650: `1053`,
    1651: `1053`,
    1652: `1055`,
    1653: `1055`,
    1654: `1056`,
    1655: `1057`,
    1656: `1058`,
    1657: `1060`,
    1658: `1060`,
    1659: `1060`,
    166: `26`,
    1660: `1062`,
    1661: `1062`,
    1662: `1063`,
    1663: `1063`,
    1664: `1064`,
    1665: `1065`,
    1666: `1065`,
    1667: `1065`,
    1668: `1066`,
    1669: `1066`,
    167: `26`,
    1670: `1067`,
    1671: `1067`,
    1672: `1068`,
    1673: `1069`,
    1674: `1072`,
    1675: `1072`,
    1676: `1072`,
    1677: `1073`,
    1678: `1073`,
    1679: `1074`,
    168: `26`,
    1680: `1074`,
    1681: `1075`,
    1682: `1075`,
    1683: `1075`,
    1684: `1077`,
    1685: `1078`,
    1686: `1079`,
    1687: `1079`,
    1688: `1079`,
    1689: `1080`,
    169: `26`,
    1690: `1080`,
    1691: `1081`,
    1692: `1082`,
    1693: `1083`,
    1694: `1083`,
    1695: `1084`,
    1696: `1084`,
    1697: `1084`,
    1698: `1086`,
    1699: `1087`,
    17: `2`,
    170: `26`,
    1700: `1088`,
    1701: `1088`,
    1702: `1088`,
    1703: `1089`,
    1704: `1089`,
    1705: `1090`,
    1706: `1091`,
    1707: `1092`,
    1708: `1092`,
    1709: `1093`,
    171: `26`,
    1710: `1093`,
    1711: `1093`,
    1712: `1095`,
    1713: `1095`,
    1714: `1095`,
    1715: `1095`,
    1716: `1095`,
    1717: `1095`,
    1718: `1095`,
    1719: `1095`,
    172: `26`,
    1720: `1095`,
    1721: `1095`,
    1722: `1095`,
    1723: `1095`,
    1724: `1095`,
    1725: `1095`,
    1726: `1095`,
    1727: `1095`,
    1728: `1095`,
    1729: `1095`,
    173: `26`,
    1730: `1095`,
    1731: `1095`,
    1732: `1095`,
    1733: `1095`,
    1734: `1095`,
    1735: `1095`,
    1736: `1095`,
    1737: `1095`,
    1738: `1095`,
    1739: `1095`,
    174: `26`,
    1740: `1095`,
    1741: `1095`,
    1742: `1095`,
    1743: `1095`,
    1744: `1095`,
    1745: `1095`,
    1746: `1095`,
    1747: `1096`,
    1748: `1096`,
    1749: `1097`,
    175: `26`,
    1750: `1097`,
    1751: `1097`,
    1752: `1099`,
    1753: `1099`,
    1754: `1099`,
    1755: `1099`,
    1756: `1099`,
    1757: `1099`,
    1758: `1099`,
    1759: `1099`,
    176: `26`,
    1760: `1099`,
    1761: `1099`,
    1762: `1099`,
    1763: `1099`,
    1764: `1099`,
    1765: `1099`,
    1766: `1099`,
    1767: `1099`,
    1768: `1099`,
    1769: `1099`,
    177: `28`,
    1770: `1099`,
    1771: `1099`,
    1772: `1099`,
    1773: `1099`,
    1774: `1099`,
    1775: `1099`,
    1776: `1099`,
    1777: `1099`,
    1778: `1099`,
    1779: `1099`,
    178: `30`,
    1780: `1099`,
    1781: `1099`,
    1782: `1099`,
    1783: `1099`,
    1784: `1099`,
    1785: `1099`,
    1786: `1099`,
    1787: `1100`,
    1788: `1100`,
    1789: `1101`,
    179: `30`,
    1790: `1101`,
    1791: `1101`,
    1792: `1103`,
    1793: `1103`,
    1794: `1103`,
    1795: `1103`,
    1796: `1103`,
    1797: `1103`,
    1798: `1103`,
    1799: `1103`,
    18: `2`,
    180: `31`,
    1800: `1103`,
    1801: `1103`,
    1802: `1103`,
    1803: `1103`,
    1804: `1103`,
    1805: `1103`,
    1806: `1103`,
    1807: `1103`,
    1808: `1103`,
    1809: `1103`,
    181: `39`,
    1810: `1103`,
    1811: `1103`,
    1812: `1103`,
    1813: `1103`,
    1814: `1103`,
    1815: `1103`,
    1816: `1103`,
    1817: `1103`,
    1818: `1103`,
    1819: `1103`,
    182: `39`,
    1820: `1103`,
    1821: `1103`,
    1822: `1103`,
    1823: `1103`,
    1824: `1103`,
    1825: `1103`,
    1826: `1103`,
    1827: `1104`,
    1828: `1104`,
    1829: `1105`,
    183: `40`,
    1830: `1105`,
    1831: `1105`,
    1832: `1107`,
    1833: `1107`,
    1834: `1108`,
    1835: `1108`,
    1836: `1109`,
    1837: `1110`,
    1838: `1110`,
    1839: `1110`,
    184: `41`,
    1840: `1111`,
    1841: `1111`,
    1842: `1112`,
    1843: `1112`,
    1844: `1113`,
    1845: `1114`,
    1846: `1117`,
    1847: `1117`,
    1848: `1117`,
    1849: `1118`,
    185: `42`,
    1850: `1118`,
    1851: `1119`,
    1852: `1120`,
    1853: `1120`,
    1854: `1120`,
    1855: `1121`,
    1856: `1121`,
    1857: `1122`,
    1858: `1122`,
    1859: `1122`,
    186: `50`,
    1860: `1124`,
    1861: `1124`,
    1862: `1125`,
    1863: `1125`,
    1864: `1126`,
    1865: `1126`,
    1866: `1127`,
    1867: `1128`,
    1868: `1129`,
    1869: `1129`,
    187: `50`,
    1870: `1130`,
    1871: `1130`,
    1872: `1131`,
    1873: `1132`,
    1874: `1133`,
    1875: `1133`,
    1876: `1134`,
    1877: `1134`,
    1878: `1135`,
    1879: `1135`,
    188: `51`,
    1880: `1136`,
    1881: `1137`,
    1882: `1137`,
    1883: `1138`,
    1884: `1138`,
    1885: `1139`,
    1886: `1139`,
    1887: `1140`,
    1888: `1141`,
    1889: `1141`,
    189: `51`,
    1890: `1142`,
    1891: `1142`,
    1892: `1142`,
    1893: `1142`,
    1894: `1142`,
    1895: `1142`,
    1896: `1143`,
    1897: `1143`,
    1898: `1144`,
    1899: `1145`,
    19: `2`,
    190: `52`,
    1900: `1146`,
    1901: `1146`,
    1902: `1147`,
    1903: `1148`,
    1904: `1149`,
    1905: `1149`,
    1906: `1150`,
    1907: `1151`,
    1908: `1152`,
    1909: `1152`,
    191: `53`,
    1910: `1153`,
    1911: `1154`,
    1912: `1155`,
    1913: `1157`,
    1914: `1157`,
    1915: `1158`,
    1916: `1158`,
    1917: `1158`,
    1918: `1159`,
    1919: `1159`,
    192: `54`,
    1920: `1160`,
    1921: `1161`,
    1922: `1162`,
    1923: `1162`,
    1924: `1163`,
    1925: `1164`,
    1926: `1165`,
    1927: `1165`,
    1928: `1166`,
    1929: `1167`,
    193: `54`,
    1930: `1168`,
    1931: `1168`,
    1932: `1169`,
    1933: `1170`,
    1934: `1170`,
    1935: `1170`,
    1936: `1171`,
    1937: `1172`,
    1938: `1173`,
    1939: `1173`,
    194: `55`,
    1940: `1174`,
    1941: `1174`,
    1942: `1175`,
    1943: `1176`,
    1944: `1176`,
    1945: `1177`,
    1946: `1178`,
    1947: `1178`,
    1948: `1178`,
    1949: `1179`,
    195: `56`,
    1950: `1180`,
    1951: `1181`,
    1952: `1181`,
    1953: `1182`,
    1954: `1182`,
    1955: `1183`,
    1956: `1183`,
    1957: `1184`,
    1958: `1184`,
    1959: `1185`,
    196: `57`,
    1960: `1185`,
    1961: `1186`,
    1962: `1187`,
    1963: `1190`,
    1964: `1190`,
    1965: `1191`,
    1966: `1192`,
    1967: `1192`,
    1968: `1192`,
    1969: `1193`,
    197: `60`,
    1970: `1194`,
    1971: `1195`,
    1972: `1195`,
    1973: `1196`,
    1974: `1196`,
    1975: `1197`,
    1976: `1197`,
    1977: `1198`,
    1978: `1198`,
    1979: `1199`,
    198: `60`,
    1980: `1199`,
    1981: `1200`,
    1982: `1201`,
    1983: `1201`,
    1984: `1202`,
    1985: `1202`,
    1986: `1203`,
    1987: `1204`,
    1988: `1205`,
    1989: `1208`,
    199: `61`,
    1990: `1208`,
    1991: `1209`,
    1992: `1209`,
    1993: `1209`,
    1994: `1210`,
    1995: `1212`,
    1996: `1212`,
    1997: `1213`,
    1998: `1213`,
    1999: `1214`,
    2: `2`,
    20: `2`,
    200: `61`,
    2000: `1214`,
    2001: `1214`,
    2002: `1215`,
    2003: `1215`,
    2004: `1216`,
    2005: `1216`,
    2006: `1216`,
    2007: `1217`,
    2008: `1219`,
    2009: `1219`,
    201: `61`,
    2010: `1220`,
    2011: `1220`,
    2012: `1221`,
    2013: `1221`,
    2014: `1221`,
    2015: `1222`,
    2016: `1222`,
    2017: `1223`,
    2018: `1223`,
    2019: `1223`,
    202: `64`,
    2020: `1224`,
    2021: `1226`,
    2022: `1226`,
    2023: `1227`,
    2024: `1227`,
    2025: `1228`,
    2026: `1228`,
    2027: `1228`,
    2028: `1229`,
    2029: `1229`,
    203: `64`,
    2030: `1230`,
    2031: `1230`,
    2032: `1231`,
    2033: `1231`,
    2034: `1232`,
    2035: `1232`,
    2036: `1233`,
    2037: `1234`,
    2038: `1234`,
    2039: `1235`,
    204: `65`,
    2040: `1235`,
    2041: `1236`,
    2042: `1237`,
    2043: `1238`,
    2044: `1238`,
    2045: `1239`,
    2046: `1239`,
    2047: `1240`,
    2048: `1241`,
    2049: `1242`,
    205: `66`,
    2050: `1247`,
    2051: `1247`,
    2052: `1248`,
    2053: `1248`,
    2054: `1249`,
    2055: `1250`,
    2056: `1251`,
    2057: `1251`,
    2058: `1252`,
    2059: `1253`,
    206: `67`,
    2060: `1254`,
    2061: `1254`,
    2062: `1255`,
    2063: `1256`,
    2064: `1257`,
    2065: `1257`,
    2066: `1258`,
    2067: `1259`,
    2068: `1259`,
    2069: `1260`,
    207: `70`,
    2070: `1261`,
    2071: `1261`,
    2072: `1261`,
    2073: `1262`,
    2074: `1263`,
    2075: `1264`,
    2076: `1265`,
    2077: `1265`,
    2078: `1266`,
    2079: `1266`,
    208: `70`,
    2080: `1266`,
    2081: `1268`,
    2082: `1269`,
    2083: `1269`,
    2084: `1270`,
    2085: `1271`,
    2086: `1273`,
    2087: `1274`,
    2088: `1274`,
    2089: `1274`,
    209: `71`,
    2090: `1275`,
    2091: `1275`,
    2092: `1276`,
    2093: `1277`,
    2094: `1277`,
    2095: `1278`,
    2096: `1279`,
    2097: `1279`,
    2098: `1280`,
    2099: `1281`,
    21: `2`,
    210: `72`,
    2100: `1281`,
    2101: `1282`,
    2102: `1283`,
    2103: `1283`,
    2104: `1284`,
    2105: `1285`,
    2106: `1285`,
    2107: `1286`,
    2108: `1287`,
    2109: `1287`,
    211: `73`,
    2110: `1288`,
    2111: `1289`,
    2112: `1289`,
    2113: `1289`,
    2114: `1290`,
    2115: `1290`,
    2116: `1291`,
    2117: `1291`,
    2118: `1291`,
    2119: `1292`,
    212: `76`,
    2120: `1292`,
    2121: `1293`,
    2122: `1293`,
    2123: `1294`,
    2124: `1295`,
    2125: `1295`,
    2126: `1296`,
    2127: `1296`,
    2128: `1296`,
    2129: `1296`,
    213: `76`,
    2130: `1296`,
    2131: `1296`,
    2132: `1297`,
    2133: `1297`,
    2134: `1298`,
    2135: `1299`,
    2136: `1300`,
    2137: `1302`,
    2138: `1302`,
    2139: `1303`,
    214: `77`,
    2140: `1303`,
    2141: `1303`,
    2142: `1304`,
    2143: `1304`,
    2144: `1305`,
    2145: `1305`,
    2146: `1306`,
    2147: `1307`,
    2148: `1310`,
    2149: `1310`,
    215: `78`,
    2150: `1310`,
    2151: `1310`,
    2152: `1310`,
    2153: `1310`,
    2154: `1310`,
    2155: `1310`,
    2156: `1310`,
    2157: `1310`,
    2158: `1310`,
    2159: `1310`,
    216: `79`,
    2160: `1310`,
    2161: `1310`,
    2162: `1310`,
    2163: `1310`,
    2164: `1310`,
    2165: `1310`,
    2166: `1310`,
    2167: `1310`,
    2168: `1310`,
    2169: `1310`,
    217: `82`,
    2170: `1310`,
    2171: `1310`,
    2172: `1310`,
    2173: `1310`,
    2174: `1311`,
    2175: `1312`,
    2176: `1313`,
    2177: `1313`,
    2178: `1314`,
    2179: `1314`,
    218: `82`,
    2180: `1315`,
    2181: `1316`,
    2182: `1316`,
    2183: `1317`,
    2184: `1317`,
    2185: `1318`,
    2186: `1318`,
    2187: `1319`,
    2188: `1319`,
    2189: `1320`,
    219: `83`,
    2190: `1320`,
    2191: `1321`,
    2192: `1321`,
    2193: `1322`,
    2194: `1322`,
    2195: `1322`,
    2196: `1324`,
    2197: `1324`,
    2198: `1325`,
    2199: `1325`,
    22: `2`,
    220: `84`,
    2200: `1326`,
    2201: `1327`,
    2202: `1328`,
    2203: `1328`,
    2204: `1328`,
    2205: `1329`,
    2206: `1329`,
    2207: `1330`,
    2208: `1331`,
    2209: `1331`,
    221: `85`,
    2210: `1332`,
    2211: `1332`,
    2212: `1332`,
    2213: `1332`,
    2214: `1332`,
    2215: `1332`,
    2216: `1333`,
    2217: `1333`,
    2218: `1334`,
    2219: `1335`,
    222: `86`,
    2220: `1336`,
    2221: `1338`,
    2222: `1338`,
    2223: `1339`,
    2224: `1339`,
    2225: `1339`,
    2226: `1340`,
    2227: `1340`,
    2228: `1341`,
    2229: `1341`,
    223: `86`,
    2230: `1342`,
    2231: `1343`,
    2232: `1343`,
    2233: `1344`,
    2234: `1344`,
    2235: `1345`,
    2236: `1346`,
    2237: `1347`,
    2238: `1351`,
    2239: `1351`,
    224: `87`,
    2240: `1352`,
    2241: `1353`,
    2242: `1354`,
    2243: `1355`,
    2244: `1356`,
    2245: `1360`,
    2246: `1360`,
    2247: `1362`,
    2248: `1362`,
    2249: `1363`,
    225: `88`,
    2250: `1363`,
    2251: `1363`,
    2252: `1364`,
    2253: `1364`,
    2254: `1365`,
    2255: `1366`,
    2256: `1367`,
    2257: `1368`,
    2258: `1368`,
    2259: `1369`,
    226: `89`,
    2260: `1370`,
    2261: `1371`,
    2262: `1375`,
    2263: `1375`,
    2264: `1376`,
    2265: `1376`,
    2266: `1377`,
    2267: `1377`,
    2268: `1378`,
    2269: `1379`,
    227: `93`,
    2270: `1379`,
    2271: `1380`,
    2272: `1380`,
    2273: `1381`,
    2274: `1381`,
    2275: `1382`,
    2276: `1382`,
    2277: `1384`,
    2278: `1384`,
    2279: `1385`,
    228: `93`,
    2280: `1385`,
    2281: `1386`,
    2282: `1386`,
    2283: `1386`,
    2284: `1387`,
    2285: `1387`,
    2286: `1388`,
    2287: `1388`,
    2288: `1388`,
    2289: `1389`,
    229: `95`,
    2290: `1390`,
    2291: `1390`,
    2292: `1391`,
    2293: `1392`,
    2294: `1393`,
    2295: `1393`,
    2296: `1394`,
    2297: `1395`,
    2298: `1396`,
    2299: `1396`,
    23: `2`,
    230: `95`,
    2300: `1397`,
    2301: `1398`,
    2302: `1399`,
    2303: `1403`,
    2304: `1403`,
    2305: `1405`,
    2306: `1405`,
    2307: `1406`,
    2308: `1406`,
    2309: `1407`,
    231: `96`,
    2310: `1407`,
    2311: `1407`,
    2312: `1408`,
    2313: `1408`,
    2314: `1409`,
    2315: `1409`,
    2316: `1410`,
    2317: `1410`,
    2318: `1411`,
    2319: `1412`,
    232: `96`,
    2320: `1412`,
    2321: `1413`,
    2322: `1413`,
    2323: `1414`,
    2324: `1414`,
    2325: `1414`,
    2326: `1415`,
    2327: `1416`,
    2328: `1417`,
    2329: `1417`,
    233: `96`,
    2330: `1418`,
    2331: `1419`,
    2332: `1420`,
    2333: `1421`,
    2334: `1425`,
    2335: `1425`,
    2336: `1427`,
    2337: `1427`,
    2338: `1428`,
    2339: `1428`,
    234: `97`,
    2340: `1429`,
    2341: `1429`,
    2342: `1429`,
    2343: `1431`,
    2344: `1432`,
    2345: `1432`,
    2346: `1433`,
    2347: `1433`,
    2348: `1434`,
    2349: `1434`,
    235: `97`,
    2350: `1435`,
    2351: `1435`,
    2352: `1435`,
    2353: `1436`,
    2354: `1437`,
    2355: `1437`,
    2356: `1438`,
    2357: `1438`,
    2358: `1439`,
    2359: `1439`,
    236: `98`,
    2360: `1440`,
    2361: `1440`,
    2362: `1440`,
    2363: `1441`,
    2364: `1442`,
    2365: `1442`,
    2366: `1443`,
    2367: `1443`,
    2368: `1444`,
    2369: `1444`,
    237: `99`,
    2370: `1445`,
    2371: `1445`,
    2372: `1445`,
    2373: `1447`,
    2374: `1447`,
    2375: `1448`,
    2376: `1448`,
    2377: `1449`,
    2378: `1450`,
    2379: `1452`,
    238: `100`,
    2380: `1452`,
    2381: `1452`,
    2382: `1454`,
    2383: `1455`,
    2384: `1455`,
    2385: `1456`,
    2386: `1456`,
    2387: `1457`,
    2388: `1457`,
    2389: `1457`,
    239: `101`,
    2390: `1458`,
    2391: `1458`,
    2392: `1458`,
    2393: `1460`,
    2394: `1460`,
    2395: `1460`,
    2396: `1461`,
    2397: `1461`,
    2398: `1462`,
    2399: `1462`,
    24: `2`,
    240: `101`,
    2400: `1462`,
    2401: `1463`,
    2402: `1463`,
    2403: `1463`,
    2404: `1464`,
    2405: `1464`,
    2406: `1465`,
    2407: `1465`,
    2408: `1465`,
    2409: `1467`,
    241: `102`,
    2410: `1467`,
    2411: `1467`,
    2412: `1468`,
    2413: `1468`,
    2414: `1468`,
    2415: `1469`,
    2416: `1469`,
    2417: `1470`,
    2418: `1470`,
    2419: `1470`,
    242: `103`,
    2420: `1472`,
    2421: `1472`,
    2422: `1472`,
    2423: `1473`,
    2424: `1473`,
    2425: `1473`,
    2426: `1474`,
    2427: `1474`,
    2428: `1475`,
    2429: `1475`,
    243: `104`,
    2430: `1475`,
    2431: `1477`,
    2432: `1477`,
    2433: `1477`,
    2434: `1478`,
    2435: `1478`,
    2436: `1478`,
    2437: `1479`,
    2438: `1479`,
    2439: `1480`,
    244: `108`,
    2440: `1480`,
    2441: `1480`,
    2442: `1482`,
    2443: `1483`,
    2444: `1483`,
    2445: `1484`,
    2446: `1485`,
    2447: `1486`,
    2448: `1486`,
    2449: `1487`,
    245: `110`,
    2450: `1487`,
    2451: `1488`,
    2452: `1489`,
    2453: `1490`,
    2454: `1491`,
    2455: `1491`,
    2456: `1492`,
    2457: `1493`,
    2458: `1494`,
    2459: `1495`,
    246: `110`,
    2460: `1495`,
    2461: `1496`,
    2462: `1497`,
    2463: `1498`,
    2464: `1498`,
    2465: `1498`,
    2466: `1499`,
    2467: `1499`,
    2468: `1499`,
    2469: `1500`,
    247: `112`,
    2470: `1501`,
    2471: `1502`,
    2472: `1503`,
    2473: `1503`,
    2474: `1503`,
    2475: `1505`,
    2476: `1505`,
    2477: `1505`,
    2478: `1507`,
    2479: `1507`,
    248: `112`,
    2480: `1507`,
    2481: `1509`,
    2482: `1509`,
    2483: `1509`,
    2484: `1511`,
    2485: `1511`,
    2486: `1511`,
    2487: `1513`,
    2488: `1513`,
    2489: `1513`,
    249: `113`,
    2490: `1515`,
    2491: `1515`,
    2492: `1515`,
    2493: `1516`,
    2494: `1516`,
    2495: `1517`,
    2496: `1517`,
    2497: `1517`,
    2498: `1519`,
    2499: `1519`,
    25: `2`,
    250: `113`,
    2500: `1519`,
    2501: `1520`,
    2502: `1520`,
    2503: `1521`,
    2504: `1521`,
    2505: `1521`,
    2506: `1523`,
    2507: `1523`,
    2508: `1523`,
    2509: `1525`,
    251: `113`,
    2510: `1525`,
    2511: `1525`,
    2512: `1527`,
    2513: `1527`,
    2514: `1527`,
    2515: `1529`,
    2516: `1529`,
    2517: `1529`,
    2518: `1531`,
    2519: `1531`,
    252: `114`,
    2520: `1531`,
    2521: `1533`,
    2522: `1533`,
    2523: `1533`,
    2524: `1535`,
    2525: `1535`,
    2526: `1535`,
    2527: `1537`,
    2528: `1537`,
    2529: `1537`,
    253: `114`,
    2530: `1539`,
    2531: `1539`,
    2532: `1539`,
    2533: `1541`,
    2534: `1541`,
    2535: `1541`,
    2536: `1543`,
    2537: `1543`,
    2538: `1543`,
    2539: `1545`,
    254: `114`,
    2540: `1545`,
    2541: `1545`,
    2542: `1547`,
    2543: `1547`,
    2544: `1548`,
    2545: `1549`,
    2546: `1549`,
    2547: `1550`,
    2548: `1550`,
    2549: `1551`,
    255: `114`,
    2550: `1552`,
    2551: `1552`,
    2552: `1553`,
    2553: `1553`,
    2554: `1554`,
    2555: `1554`,
    2556: `1554`,
    2557: `1555`,
    2558: `1556`,
    2559: `1556`,
    256: `114`,
    2560: `1557`,
    2561: `1558`,
    2562: `1559`,
    2563: `1559`,
    2564: `1560`,
    2565: `1560`,
    2566: `1561`,
    2567: `1561`,
    2568: `1561`,
    2569: `1562`,
    257: `114`,
    2570: `1563`,
    2571: `1563`,
    2572: `1564`,
    2573: `1565`,
    2574: `1566`,
    2575: `1566`,
    2576: `1567`,
    2577: `1567`,
    2578: `1568`,
    2579: `1568`,
    258: `114`,
    2580: `1568`,
    2581: `1569`,
    2582: `1570`,
    2583: `1570`,
    2584: `1571`,
    2585: `1572`,
    2586: `1573`,
    2587: `1573`,
    2588: `1574`,
    2589: `1574`,
    259: `114`,
    2590: `1575`,
    2591: `1576`,
    2592: `1576`,
    2593: `1577`,
    2594: `1578`,
    2595: `1579`,
    2596: `1579`,
    2597: `1580`,
    2598: `1581`,
    2599: `1582`,
    26: `2`,
    260: `115`,
    2600: `1582`,
    2601: `1583`,
    2602: `1583`,
    2603: `1584`,
    2604: `1585`,
    2605: `1586`,
    2606: `1586`,
    2607: `1587`,
    2608: `1587`,
    2609: `1588`,
    261: `115`,
    2610: `1589`,
    2611: `1590`,
    2612: `1590`,
    2613: `1591`,
    2614: `1591`,
    2615: `1592`,
    2616: `1592`,
    2617: `1593`,
    2618: `1594`,
    2619: `1594`,
    262: `116`,
    2620: `1595`,
    2621: `1596`,
    2622: `1596`,
    2623: `1598`,
    2624: `1598`,
    2625: `1599`,
    2626: `1599`,
    2627: `1600`,
    2628: `1601`,
    2629: `1602`,
    263: `117`,
    2630: `1602`,
    2631: `1603`,
    2632: `1604`,
    2633: `1605`,
    2634: `1605`,
    2635: `1606`,
    2636: `1607`,
    2637: `1608`,
    2638: `1608`,
    2639: `1609`,
    264: `117`,
    2640: `1610`,
    2641: `1610`,
    2642: `1611`,
    2643: `1612`,
    2644: `1612`,
    2645: `1613`,
    2646: `1614`,
    2647: `1614`,
    2648: `1614`,
    2649: `1615`,
    265: `118`,
    2650: `1616`,
    2651: `1616`,
    2652: `1617`,
    2653: `1618`,
    2654: `1618`,
    2655: `1618`,
    2656: `1619`,
    2657: `1620`,
    2658: `1620`,
    2659: `1621`,
    266: `119`,
    2660: `1622`,
    2661: `1622`,
    2662: `1623`,
    2663: `1624`,
    2664: `1625`,
    2665: `1625`,
    2666: `1626`,
    2667: `1627`,
    2668: `1627`,
    2669: `1627`,
    267: `119`,
    2670: `1628`,
    2671: `1629`,
    2672: `1629`,
    2673: `1630`,
    2674: `1631`,
    2675: `1631`,
    2676: `1631`,
    2677: `1632`,
    2678: `1633`,
    2679: `1633`,
    268: `120`,
    2680: `1634`,
    2681: `1635`,
    2682: `1635`,
    2683: `1636`,
    2684: `1637`,
    2685: `1638`,
    2686: `1638`,
    2687: `1639`,
    2688: `1640`,
    2689: `1640`,
    269: `121`,
    2690: `1641`,
    2691: `1642`,
    2692: `1643`,
    2693: `1643`,
    2694: `1644`,
    2695: `1645`,
    2696: `1645`,
    2697: `1646`,
    2698: `1647`,
    2699: `1648`,
    27: `2`,
    270: `123`,
    2700: `1648`,
    2701: `1649`,
    2702: `1650`,
    2703: `1650`,
    2704: `1651`,
    2705: `1652`,
    2706: `1653`,
    2707: `1653`,
    2708: `1654`,
    2709: `1655`,
    271: `124`,
    2710: `1656`,
    2711: `1656`,
    2712: `1657`,
    2713: `1658`,
    2714: `1659`,
    2715: `1659`,
    2716: `1660`,
    2717: `1660`,
    2718: `1661`,
    2719: `1661`,
    272: `124`,
    2720: `1661`,
    2721: `1663`,
    2722: `1664`,
    2723: `1664`,
    2724: `1665`,
    2725: `1666`,
    2726: `1666`,
    2727: `1667`,
    2728: `1667`,
    2729: `1668`,
    273: `125`,
    2730: `1668`,
    2731: `1669`,
    2732: `1670`,
    2733: `1672`,
    2734: `1673`,
    2735: `1673`,
    2736: `1674`,
    2737: `1674`,
    2738: `1675`,
    2739: `1675`,
    274: `125`,
    2740: `1676`,
    2741: `1676`,
    2742: `1677`,
    2743: `1677`,
    2744: `1678`,
    2745: `1678`,
    2746: `1679`,
    2747: `1680`,
    2748: `1682`,
    2749: `1682`,
    275: `125`,
    2750: `1683`,
    2751: `1683`,
    2752: `1684`,
    2753: `1685`,
    2754: `1688`,
    2755: `1688`,
    2756: `1688`,
    2757: `1689`,
    2758: `1689`,
    2759: `1690`,
    276: `125`,
    2760: `1690`,
    2761: `1691`,
    2762: `1691`,
    2763: `1691`,
    2764: `1693`,
    2765: `1693`,
    2766: `1694`,
    2767: `1694`,
    2768: `1695`,
    2769: `1696`,
    277: `125`,
    2770: `1699`,
    2771: `1699`,
    2772: `1699`,
    2773: `1700`,
    2774: `1700`,
    2775: `1701`,
    2776: `1701`,
    2777: `1702`,
    2778: `1702`,
    2779: `1702`,
    278: `125`,
    2780: `1704`,
    2781: `1704`,
    2782: `1705`,
    2783: `1705`,
    2784: `1706`,
    2785: `1707`,
    2786: `1710`,
    2787: `1710`,
    2788: `1710`,
    2789: `1711`,
    279: `125`,
    2790: `1711`,
    2791: `1712`,
    2792: `1713`,
    2793: `1713`,
    2794: `1713`,
    2795: `1714`,
    2796: `1714`,
    2797: `1715`,
    2798: `1715`,
    2799: `1715`,
    28: `2`,
    280: `125`,
    2800: `1717`,
    2801: `1718`,
    2802: `1720`,
    2803: `1721`,
    2804: `1722`,
    2805: `1723`,
    2806: `1723`,
    2807: `1724`,
    2808: `1724`,
    2809: `1725`,
    281: `125`,
    2810: `1725`,
    2811: `1725`,
    2812: `1726`,
    2813: `1728`,
    2814: `1729`,
    2815: `1730`,
    2816: `1730`,
    2817: `1730`,
    2818: `1731`,
    2819: `1732`,
    282: `125`,
    2820: `1732`,
    2821: `1733`,
    2822: `1733`,
    2823: `1733`,
    2824: `1734`,
    2825: `1736`,
    2826: `1737`,
    2827: `1737`,
    2828: `1737`,
    2829: `1739`,
    283: `126`,
    2830: `1740`,
    2831: `1740`,
    2832: `1740`,
    2833: `1742`,
    2834: `1743`,
    2835: `1743`,
    2836: `1744`,
    2837: `1746`,
    2838: `1747`,
    2839: `1748`,
    284: `126`,
    2840: `1749`,
    2841: `1750`,
    2842: `1750`,
    2843: `1751`,
    2844: `1752`,
    2845: `1753`,
    2846: `1754`,
    2847: `1756`,
    2848: `1757`,
    2849: `1757`,
    285: `127`,
    2850: `1757`,
    2851: `1758`,
    2852: `1758`,
    2853: `1759`,
    2854: `1760`,
    2855: `1760`,
    2856: `1761`,
    2857: `1762`,
    2858: `1762`,
    2859: `1763`,
    286: `128`,
    2860: `1764`,
    2861: `1764`,
    2862: `1765`,
    2863: `1766`,
    2864: `1766`,
    2865: `1767`,
    2866: `1768`,
    2867: `1768`,
    2868: `1769`,
    2869: `1770`,
    287: `128`,
    2870: `1770`,
    2871: `1771`,
    2872: `1772`,
    2873: `1772`,
    2874: `1772`,
    2875: `1773`,
    2876: `1773`,
    2877: `1774`,
    2878: `1775`,
    2879: `1775`,
    288: `128`,
    2880: `1775`,
    2881: `1776`,
    2882: `1776`,
    2883: `1777`,
    2884: `1778`,
    2885: `1778`,
    2886: `1778`,
    2887: `1779`,
    2888: `1780`,
    2889: `1780`,
    289: `129`,
    2890: `1781`,
    2891: `1782`,
    2892: `1782`,
    2893: `1782`,
    2894: `1783`,
    2895: `1784`,
    2896: `1784`,
    2897: `1785`,
    2898: `1786`,
    2899: `1786`,
    29: `2`,
    290: `130`,
    2900: `1786`,
    2901: `1787`,
    2902: `1787`,
    2903: `1788`,
    2904: `1789`,
    2905: `1789`,
    2906: `1789`,
    2907: `1790`,
    2908: `1791`,
    2909: `1791`,
    291: `131`,
    2910: `1792`,
    2911: `1793`,
    2912: `1793`,
    2913: `1793`,
    2914: `1794`,
    2915: `1795`,
    2916: `1795`,
    2917: `1796`,
    2918: `1797`,
    2919: `1797`,
    292: `131`,
    2920: `1797`,
    2921: `1798`,
    2922: `1799`,
    2923: `1799`,
    2924: `1800`,
    2925: `1801`,
    2926: `1801`,
    2927: `1801`,
    2928: `1802`,
    2929: `1802`,
    293: `132`,
    2930: `1803`,
    2931: `1804`,
    2932: `1804`,
    2933: `1804`,
    2934: `1805`,
    2935: `1806`,
    2936: `1806`,
    2937: `1807`,
    2938: `1808`,
    2939: `1808`,
    294: `133`,
    2940: `1808`,
    2941: `1809`,
    2942: `1809`,
    2943: `1810`,
    2944: `1811`,
    2945: `1811`,
    2946: `1811`,
    2947: `1812`,
    2948: `1813`,
    2949: `1813`,
    295: `133`,
    2950: `1814`,
    2951: `1815`,
    2952: `1815`,
    2953: `1815`,
    2954: `1816`,
    2955: `1816`,
    2956: `1817`,
    2957: `1818`,
    2958: `1818`,
    2959: `1818`,
    296: `133`,
    2960: `1819`,
    2961: `1820`,
    2962: `1820`,
    2963: `1821`,
    2964: `1822`,
    2965: `1822`,
    2966: `1822`,
    2967: `1823`,
    2968: `1823`,
    2969: `1824`,
    297: `134`,
    2970: `1825`,
    2971: `1825`,
    2972: `1825`,
    2973: `1826`,
    2974: `1827`,
    2975: `1827`,
    2976: `1828`,
    2977: `1829`,
    2978: `1829`,
    2979: `1829`,
    298: `134`,
    2980: `1830`,
    2981: `1831`,
    2982: `1831`,
    2983: `1832`,
    2984: `1832`,
    2985: `1832`,
    2986: `1833`,
    2987: `1834`,
    2988: `1834`,
    2989: `1835`,
    299: `135`,
    2990: `1837`,
    2991: `1838`,
    2992: `1838`,
    2993: `1838`,
    2994: `1839`,
    2995: `1839`,
    2996: `1840`,
    2997: `1841`,
    2998: `1841`,
    2999: `1842`,
    3: `2`,
    30: `2`,
    300: `135`,
    3000: `1843`,
    3001: `1843`,
    3002: `1844`,
    3003: `1845`,
    3004: `1845`,
    3005: `1846`,
    3006: `1847`,
    3007: `1847`,
    3008: `1848`,
    3009: `1849`,
    301: `136`,
    3010: `1849`,
    3011: `1850`,
    3012: `1851`,
    3013: `1851`,
    3014: `1852`,
    3015: `1853`,
    3016: `1853`,
    3017: `1853`,
    3018: `1854`,
    3019: `1854`,
    302: `136`,
    3020: `1855`,
    3021: `1856`,
    3022: `1856`,
    3023: `1856`,
    3024: `1857`,
    3025: `1857`,
    3026: `1858`,
    3027: `1859`,
    3028: `1859`,
    3029: `1859`,
    303: `137`,
    3030: `1860`,
    3031: `1861`,
    3032: `1861`,
    3033: `1862`,
    3034: `1863`,
    3035: `1863`,
    3036: `1863`,
    3037: `1864`,
    3038: `1864`,
    3039: `1865`,
    304: `137`,
    3040: `1866`,
    3041: `1866`,
    3042: `1866`,
    3043: `1867`,
    3044: `1868`,
    3045: `1868`,
    3046: `1869`,
    3047: `1870`,
    3048: `1870`,
    3049: `1870`,
    305: `138`,
    3050: `1871`,
    3051: `1871`,
    3052: `1872`,
    3053: `1873`,
    3054: `1873`,
    3055: `1873`,
    3056: `1874`,
    3057: `1875`,
    3058: `1875`,
    3059: `1876`,
    306: `138`,
    3060: `1877`,
    3061: `1877`,
    3062: `1877`,
    3063: `1878`,
    3064: `1879`,
    3065: `1879`,
    3066: `1880`,
    3067: `1881`,
    3068: `1881`,
    3069: `1881`,
    307: `139`,
    3070: `1882`,
    3071: `1883`,
    3072: `1883`,
    3073: `1884`,
    3074: `1884`,
    3075: `1884`,
    3076: `1885`,
    3077: `1885`,
    3078: `1886`,
    3079: `1889`,
    308: `140`,
    3080: `1889`,
    3081: `1890`,
    3082: `1890`,
    3083: `1891`,
    3084: `1892`,
    3085: `1893`,
    3086: `1894`,
    3087: `1894`,
    3088: `1895`,
    3089: `1896`,
    309: `140`,
    3090: `1896`,
    3091: `1897`,
    3092: `1897`,
    3093: `1898`,
    3094: `1898`,
    3095: `1899`,
    3096: `1900`,
    3097: `1901`,
    3098: `1901`,
    3099: `1902`,
    31: `2`,
    310: `141`,
    3100: `1903`,
    3101: `1904`,
    3102: `1905`,
    3103: `1905`,
    3104: `1906`,
    3105: `1907`,
    3106: `1908`,
    3107: `1910`,
    3108: `1910`,
    3109: `1911`,
    311: `141`,
    3110: `1912`,
    3111: `1912`,
    3112: `1913`,
    3113: `1916`,
    3114: `1916`,
    3115: `1917`,
    3116: `1917`,
    3117: `1918`,
    3118: `1919`,
    3119: `1920`,
    312: `142`,
    3120: `1921`,
    3121: `1921`,
    3122: `1922`,
    3123: `1923`,
    3124: `1923`,
    3125: `1924`,
    3126: `1924`,
    3127: `1925`,
    3128: `1925`,
    3129: `1926`,
    313: `142`,
    3130: `1927`,
    3131: `1928`,
    3132: `1928`,
    3133: `1929`,
    3134: `1929`,
    3135: `1930`,
    3136: `1931`,
    3137: `1932`,
    3138: `1932`,
    3139: `1933`,
    314: `143`,
    3140: `1933`,
    3141: `1934`,
    3142: `1935`,
    3143: `1936`,
    3144: `1936`,
    3145: `1937`,
    3146: `1938`,
    3147: `1939`,
    3148: `1941`,
    3149: `1942`,
    315: `143`,
    3150: `1942`,
    3151: `1943`,
    3152: `1943`,
    3153: `1943`,
    3154: `1945`,
    3155: `1945`,
    3156: `1946`,
    3157: `1946`,
    3158: `1947`,
    3159: `1948`,
    316: `144`,
    3160: `1949`,
    3161: `1949`,
    3162: `1949`,
    3163: `1950`,
    3164: `1950`,
    3165: `1950`,
    3166: `1952`,
    3167: `1953`,
    3168: `1953`,
    3169: `1954`,
    317: `144`,
    318: `145`,
    319: `145`,
    32: `2`,
    320: `147`,
    321: `147`,
    322: `148`,
    323: `148`,
    324: `148`,
    325: `149`,
    326: `149`,
    327: `150`,
    328: `150`,
    329: `150`,
    33: `2`,
    330: `151`,
    331: `152`,
    332: `152`,
    333: `153`,
    334: `154`,
    335: `155`,
    336: `155`,
    337: `156`,
    338: `156`,
    339: `157`,
    34: `2`,
    340: `157`,
    341: `157`,
    342: `158`,
    343: `159`,
    344: `160`,
    345: `160`,
    346: `161`,
    347: `161`,
    348: `162`,
    349: `162`,
    35: `2`,
    350: `162`,
    351: `163`,
    352: `164`,
    353: `165`,
    354: `165`,
    355: `166`,
    356: `166`,
    357: `167`,
    358: `168`,
    359: `168`,
    36: `2`,
    360: `169`,
    361: `170`,
    362: `171`,
    363: `171`,
    364: `172`,
    365: `173`,
    366: `174`,
    367: `174`,
    368: `176`,
    369: `176`,
    37: `2`,
    370: `177`,
    371: `177`,
    372: `178`,
    373: `179`,
    374: `180`,
    375: `180`,
    376: `181`,
    377: `182`,
    378: `183`,
    379: `183`,
    38: `2`,
    380: `184`,
    381: `185`,
    382: `186`,
    383: `186`,
    384: `187`,
    385: `188`,
    386: `188`,
    387: `189`,
    388: `190`,
    389: `190`,
    39: `2`,
    390: `191`,
    391: `192`,
    392: `192`,
    393: `192`,
    394: `193`,
    395: `194`,
    396: `194`,
    397: `195`,
    398: `196`,
    399: `196`,
    4: `2`,
    40: `4`,
    400: `197`,
    401: `198`,
    402: `199`,
    403: `199`,
    404: `200`,
    405: `201`,
    406: `201`,
    407: `202`,
    408: `203`,
    409: `204`,
    41: `4`,
    410: `204`,
    411: `205`,
    412: `206`,
    413: `207`,
    414: `207`,
    415: `208`,
    416: `209`,
    417: `210`,
    418: `210`,
    419: `211`,
    42: `5`,
    420: `212`,
    421: `212`,
    422: `213`,
    423: `214`,
    424: `215`,
    425: `215`,
    426: `216`,
    427: `216`,
    428: `218`,
    429: `218`,
    43: `5`,
    430: `219`,
    431: `219`,
    432: `220`,
    433: `221`,
    434: `221`,
    435: `222`,
    436: `222`,
    437: `222`,
    438: `223`,
    439: `224`,
    44: `5`,
    440: `225`,
    441: `225`,
    442: `226`,
    443: `226`,
    444: `226`,
    445: `227`,
    446: `228`,
    447: `228`,
    448: `229`,
    449: `230`,
    45: `6`,
    450: `230`,
    451: `230`,
    452: `231`,
    453: `232`,
    454: `233`,
    455: `233`,
    456: `234`,
    457: `235`,
    458: `235`,
    459: `236`,
    46: `7`,
    460: `237`,
    461: `238`,
    462: `239`,
    463: `239`,
    464: `240`,
    465: `241`,
    466: `242`,
    467: `244`,
    468: `244`,
    469: `244`,
    47: `8`,
    470: `246`,
    471: `246`,
    472: `247`,
    473: `247`,
    474: `247`,
    475: `249`,
    476: `249`,
    477: `249`,
    478: `249`,
    479: `249`,
    48: `9`,
    480: `249`,
    481: `250`,
    482: `250`,
    483: `251`,
    484: `252`,
    485: `254`,
    486: `255`,
    487: `257`,
    488: `257`,
    489: `258`,
    49: `10`,
    490: `266`,
    491: `266`,
    492: `267`,
    493: `268`,
    494: `269`,
    495: `277`,
    496: `277`,
    497: `278`,
    498: `278`,
    499: `279`,
    5: `2`,
    50: `11`,
    500: `280`,
    501: `281`,
    502: `281`,
    503: `282`,
    504: `283`,
    505: `284`,
    506: `287`,
    507: `287`,
    508: `288`,
    509: `288`,
    51: `11`,
    510: `288`,
    511: `291`,
    512: `291`,
    513: `292`,
    514: `293`,
    515: `294`,
    516: `297`,
    517: `297`,
    518: `298`,
    519: `299`,
    52: `12`,
    520: `300`,
    521: `303`,
    522: `303`,
    523: `304`,
    524: `305`,
    525: `306`,
    526: `309`,
    527: `309`,
    528: `310`,
    529: `311`,
    53: `13`,
    530: `312`,
    531: `313`,
    532: `313`,
    533: `314`,
    534: `315`,
    535: `316`,
    536: `320`,
    537: `320`,
    538: `322`,
    539: `322`,
    54: `14`,
    540: `323`,
    541: `323`,
    542: `323`,
    543: `324`,
    544: `324`,
    545: `325`,
    546: `326`,
    547: `327`,
    548: `328`,
    549: `328`,
    55: `14`,
    550: `329`,
    551: `330`,
    552: `331`,
    553: `335`,
    554: `337`,
    555: `337`,
    556: `339`,
    557: `339`,
    558: `340`,
    559: `340`,
    56: `15`,
    560: `340`,
    561: `341`,
    562: `341`,
    563: `341`,
    564: `341`,
    565: `341`,
    566: `341`,
    567: `341`,
    568: `341`,
    569: `342`,
    57: `16`,
    570: `342`,
    571: `343`,
    572: `344`,
    573: `344`,
    574: `345`,
    575: `346`,
    576: `346`,
    577: `347`,
    578: `348`,
    579: `350`,
    58: `17`,
    580: `351`,
    581: `351`,
    582: `352`,
    583: `352`,
    584: `352`,
    585: `352`,
    586: `352`,
    587: `352`,
    588: `352`,
    589: `352`,
    59: `18`,
    590: `352`,
    591: `352`,
    592: `353`,
    593: `353`,
    594: `354`,
    595: `355`,
    596: `355`,
    597: `355`,
    598: `356`,
    599: `357`,
    6: `2`,
    60: `19`,
    600: `358`,
    601: `358`,
    602: `359`,
    603: `360`,
    604: `360`,
    605: `360`,
    606: `361`,
    607: `361`,
    608: `362`,
    609: `362`,
    61: `20`,
    610: `363`,
    611: `363`,
    612: `364`,
    613: `364`,
    614: `365`,
    615: `365`,
    616: `366`,
    617: `367`,
    618: `367`,
    619: `368`,
    62: `20`,
    620: `368`,
    621: `369`,
    622: `369`,
    623: `370`,
    624: `370`,
    625: `371`,
    626: `371`,
    627: `372`,
    628: `372`,
    629: `373`,
    63: `21`,
    630: `373`,
    631: `373`,
    632: `375`,
    633: `375`,
    634: `376`,
    635: `384`,
    636: `384`,
    637: `385`,
    638: `386`,
    639: `387`,
    64: `22`,
    640: `395`,
    641: `395`,
    642: `396`,
    643: `396`,
    644: `397`,
    645: `398`,
    646: `399`,
    647: `399`,
    648: `400`,
    649: `401`,
    65: `24`,
    650: `402`,
    651: `405`,
    652: `405`,
    653: `406`,
    654: `406`,
    655: `406`,
    656: `409`,
    657: `409`,
    658: `410`,
    659: `411`,
    66: `24`,
    660: `412`,
    661: `415`,
    662: `415`,
    663: `416`,
    664: `417`,
    665: `418`,
    666: `421`,
    667: `421`,
    668: `422`,
    669: `423`,
    67: `24`,
    670: `424`,
    671: `427`,
    672: `427`,
    673: `428`,
    674: `429`,
    675: `430`,
    676: `431`,
    677: `431`,
    678: `432`,
    679: `433`,
    68: `24`,
    680: `434`,
    681: `438`,
    682: `438`,
    683: `440`,
    684: `440`,
    685: `441`,
    686: `441`,
    687: `441`,
    688: `442`,
    689: `442`,
    69: `24`,
    690: `443`,
    691: `444`,
    692: `445`,
    693: `446`,
    694: `446`,
    695: `447`,
    696: `448`,
    697: `449`,
    698: `453`,
    699: `455`,
    7: `2`,
    70: `24`,
    700: `455`,
    701: `457`,
    702: `457`,
    703: `458`,
    704: `458`,
    705: `458`,
    706: `459`,
    707: `459`,
    708: `459`,
    709: `459`,
    71: `24`,
    710: `459`,
    711: `459`,
    712: `459`,
    713: `459`,
    714: `460`,
    715: `460`,
    716: `461`,
    717: `462`,
    718: `462`,
    719: `463`,
    72: `24`,
    720: `464`,
    721: `464`,
    722: `465`,
    723: `466`,
    724: `468`,
    725: `469`,
    726: `469`,
    727: `470`,
    728: `470`,
    729: `470`,
    73: `24`,
    730: `470`,
    731: `470`,
    732: `470`,
    733: `470`,
    734: `470`,
    735: `470`,
    736: `470`,
    737: `471`,
    738: `471`,
    739: `472`,
    74: `24`,
    740: `473`,
    741: `473`,
    742: `473`,
    743: `474`,
    744: `475`,
    745: `476`,
    746: `476`,
    747: `477`,
    748: `478`,
    749: `478`,
    75: `24`,
    750: `478`,
    751: `479`,
    752: `479`,
    753: `480`,
    754: `480`,
    755: `481`,
    756: `481`,
    757: `482`,
    758: `482`,
    759: `483`,
    76: `24`,
    760: `483`,
    761: `484`,
    762: `485`,
    763: `485`,
    764: `486`,
    765: `486`,
    766: `487`,
    767: `487`,
    768: `488`,
    769: `488`,
    77: `24`,
    770: `489`,
    771: `489`,
    772: `490`,
    773: `490`,
    774: `491`,
    775: `491`,
    776: `491`,
    777: `493`,
    778: `493`,
    779: `494`,
    78: `24`,
    780: `494`,
    781: `494`,
    782: `495`,
    783: `495`,
    784: `496`,
    785: `496`,
    786: `497`,
    787: `497`,
    788: `498`,
    789: `499`,
    79: `24`,
    790: `507`,
    791: `507`,
    792: `508`,
    793: `509`,
    794: `510`,
    795: `510`,
    796: `511`,
    797: `511`,
    798: `512`,
    799: `513`,
    8: `2`,
    80: `24`,
    800: `514`,
    801: `514`,
    802: `515`,
    803: `515`,
    804: `516`,
    805: `516`,
    806: `517`,
    807: `518`,
    808: `518`,
    809: `519`,
    81: `24`,
    810: `519`,
    811: `520`,
    812: `520`,
    813: `520`,
    814: `521`,
    815: `522`,
    816: `522`,
    817: `523`,
    818: `523`,
    819: `523`,
    82: `24`,
    820: `524`,
    821: `525`,
    822: `526`,
    823: `526`,
    824: `527`,
    825: `527`,
    826: `527`,
    827: `528`,
    828: `529`,
    829: `530`,
    83: `24`,
    830: `538`,
    831: `538`,
    832: `539`,
    833: `540`,
    834: `541`,
    835: `544`,
    836: `544`,
    837: `545`,
    838: `545`,
    839: `546`,
    84: `24`,
    840: `547`,
    841: `548`,
    842: `548`,
    843: `549`,
    844: `550`,
    845: `551`,
    846: `554`,
    847: `554`,
    848: `555`,
    849: `555`,
    85: `24`,
    850: `556`,
    851: `556`,
    852: `557`,
    853: `558`,
    854: `558`,
    855: `559`,
    856: `559`,
    857: `560`,
    858: `560`,
    859: `561`,
    86: `24`,
    860: `561`,
    861: `562`,
    862: `562`,
    863: `563`,
    864: `563`,
    865: `563`,
    866: `566`,
    867: `566`,
    868: `567`,
    869: `567`,
    87: `24`,
    870: `567`,
    871: `568`,
    872: `569`,
    873: `569`,
    874: `570`,
    875: `571`,
    876: `572`,
    877: `572`,
    878: `573`,
    879: `574`,
    88: `24`,
    880: `575`,
    881: `575`,
    882: `576`,
    883: `577`,
    884: `578`,
    885: `581`,
    886: `581`,
    887: `582`,
    888: `582`,
    889: `583`,
    89: `24`,
    890: `583`,
    891: `584`,
    892: `585`,
    893: `585`,
    894: `586`,
    895: `586`,
    896: `587`,
    897: `587`,
    898: `588`,
    899: `588`,
    9: `2`,
    90: `24`,
    900: `589`,
    901: `589`,
    902: `590`,
    903: `590`,
    904: `590`,
    905: `593`,
    906: `593`,
    907: `594`,
    908: `594`,
    909: `594`,
    91: `24`,
    910: `595`,
    911: `596`,
    912: `596`,
    913: `597`,
    914: `598`,
    915: `599`,
    916: `599`,
    917: `600`,
    918: `601`,
    919: `602`,
    92: `24`,
    920: `602`,
    921: `603`,
    922: `604`,
    923: `605`,
    924: `608`,
    925: `608`,
    926: `609`,
    927: `609`,
    928: `610`,
    929: `610`,
    93: `24`,
    930: `611`,
    931: `612`,
    932: `612`,
    933: `613`,
    934: `613`,
    935: `614`,
    936: `614`,
    937: `615`,
    938: `615`,
    939: `616`,
    94: `24`,
    940: `616`,
    941: `617`,
    942: `617`,
    943: `617`,
    944: `620`,
    945: `620`,
    946: `621`,
    947: `621`,
    948: `621`,
    949: `622`,
    95: `24`,
    950: `623`,
    951: `624`,
    952: `624`,
    953: `625`,
    954: `625`,
    955: `626`,
    956: `626`,
    957: `626`,
    958: `627`,
    959: `628`,
    96: `24`,
    960: `629`,
    961: `629`,
    962: `630`,
    963: `630`,
    964: `631`,
    965: `631`,
    966: `631`,
    967: `632`,
    968: `633`,
    969: `634`,
    97: `24`,
    970: `634`,
    971: `635`,
    972: `635`,
    973: `635`,
    974: `635`,
    975: `635`,
    976: `635`,
    977: `636`,
    978: `636`,
    979: `637`,
    98: `24`,
    980: `638`,
    981: `639`,
    982: `639`,
    983: `640`,
    984: `641`,
    985: `642`,
    986: `642`,
    987: `643`,
    988: `644`,
    989: `645`,
    99: `24`,
    990: `647`,
    991: `648`,
    992: `648`,
    993: `649`,
    994: `649`,
    995: `649`,
    996: `649`,
    997: `649`,
    998: `649`,
    999: `649`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 3,
  stateSize: 298,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T9","name":"v17513","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_buyer_api_purchase_bronze0_179","type":"bool"},{"internalType":"bool","name":"_buyer_api_purchase_gold0_179","type":"bool"},{"internalType":"bool","name":"_buyer_api_purchase_silver0_179","type":"bool"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"}],"internalType":"struct T2","name":"_controller_api_restock0_179","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"}],"internalType":"struct T2","name":"_controller_api_set_prices0_179","type":"tuple"},{"internalType":"bool","name":"_controller_api_terminate0_179","type":"bool"},{"internalType":"bool","name":"_controller_api_toggle_pause0_179","type":"bool"},{"internalType":"bool","name":"_controller_api_withdraw0_179","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v10365","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v11714","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6167","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6995","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v7701","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v8407","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v9067","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v9718","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"price_change","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes6","name":"v0","type":"bytes6"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"purchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"restock","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"terminate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"withdraw","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"v17516","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"v17519","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_buyer_api_purchase_bronze0_179","type":"bool"},{"internalType":"bool","name":"_buyer_api_purchase_gold0_179","type":"bool"},{"internalType":"bool","name":"_buyer_api_purchase_silver0_179","type":"bool"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"}],"internalType":"struct T2","name":"_controller_api_restock0_179","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"}],"internalType":"struct T2","name":"_controller_api_set_prices0_179","type":"tuple"},{"internalType":"bool","name":"_controller_api_terminate0_179","type":"bool"},{"internalType":"bool","name":"_controller_api_toggle_pause0_179","type":"bool"},{"internalType":"bool","name":"_controller_api_withdraw0_179","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v17522","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyer_api_purchase_bronze","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyer_api_purchase_gold","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyer_api_purchase_silver","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"coin_prices","outputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"coin_supply","outputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"v17492","type":"tuple"}],"name":"controller_api_restock","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"v17498","type":"tuple"}],"name":"controller_api_set_prices","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"controller_api_terminate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"controller_api_toggle_pause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"controller_api_withdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"is_paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f6200497338819003918201601f19168301916001600160401b0383118484101762000674578084926080946040528339810103126200087f5760405190608082016001600160401b0381118382101762000674576200009391606091604052805184526200007460208201620008a0565b60208501526200008760408201620008a0565b604085015201620008a0565b60608201524360035560405161018081016001600160401b03811182821017620006745760009161016091604052828152826020820152826040820152826060820152620000e0620008b5565b6080820152620000ef620008b5565b60a08201528260c08201528260e0820152826101008201528261012082015282610140820152015260405160a0810181811060018060401b0382111762000674576040526200013d620008b5565b815262000149620008d6565b602082015262000158620008d6565b604082015262000167620008d6565b60608201526000608082015260ff6004541662000866577f445f7d1d3c7ecf7a61d6d64c4194290a54beada7275d0418d50b9c355c8b665360a060405133815284516020820152600180831b036020860151166040820152600180831b036040860151166060820152600180831b036060860151166080820152a18151801590811562000859575b50156200084057600081515260006020825101526000604082510152805160208201515280516020808301510152805160406020830151015260208101518051604060208201519101511515604051916200024a8362000884565b600083526020830152604082015262000262620008d6565b9160005b60038110620008065750508152806040830152602081015160406020820151910151151560405191620002998362000884565b6000835260208301526040820152620002b1620008d6565b9160005b60038110620007cc5750506020820152606082015260018060a01b0360408301511660018060a01b0360208401511614600014620007c45760005b15620007ab57606082015160208301516001600160a01b039182169116810362000787575060005b156200076e57346200075557336080820152602082015160408301516001600160a01b03908116911681810362000731575060005b15620007285760608301516001600160a01b031603620007205760005b156200070757604051916001600160401b0360c0840190811190841117620006745760c0830160405260008352600060208401526000604084015260006060840152620003b6620008d6565b6080840152600060a08401523383526020818101516001600160a01b0390811682860152604080840151821681870152606093840151909116838601529183015180830151918201519183015192519092909190151590620004188362000884565b600083526020830152604082015262000430620008d6565b9160005b60038110620006b757505060408201526080830152608060018060a01b039101511660a08201526001600055436001556040519060018060a01b03815116602083015260018060a01b03602082015116604083015260018060a01b03604082015116606083015260018060a01b036060820151166080830152608081015160a083016000905b600382106200068a5750505060a001516001600160a01b03166101c08281019190915281526101e081016001600160401b03811182821017620006745760405280516001600160401b0381116200067457600254600181811c9116801562000669575b60208210146200065357601f8111620005e9575b50602091601f82116001146200057f5791819260009262000573575b50508160011b916000199060031b1c1916176002555b60405161403c9081620009378239f35b0151905038806200054d565b601f19821692600260005260206000209160005b858110620005d057508360019510620005b6575b505050811b0160025562000563565b015160001960f88460031b161c19169055388080620005a7565b9192602060018192868501518155019401920162000593565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000648575b601f0160051c01905b8181106200063b575062000531565b600081556001016200062c565b909150819062000623565b634e487b7160e01b600052602260045260246000fd5b90607f16906200051d565b634e487b7160e01b600052604160045260246000fd5b602060606001926040865180518352848101518584015201511515604082015201930191019091620004ba565b620006c381836200090e565b51620006d082866200090e565b52620006dd81856200090e565b506000198114620006f15760010162000434565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260126004820152602490fd5b60016200036a565b5060006200036a565b60608401516001600160a01b0316036200074d5760006200034d565b60016200034d565b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b60408301516001600160a01b031603620007a357600062000318565b600162000318565b60405163100960cb60e01b8152600f6004820152602490fd5b6001620002f0565b620007d881836200090e565b51620007e582866200090e565b52620007f281856200090e565b506000198114620006f157600101620002b5565b6200081281836200090e565b516200081f82866200090e565b526200082c81856200090e565b506000198114620006f15760010162000266565b60405163100960cb60e01b8152600e6004820152602490fd5b90506001541438620001ef565b60405163100960cb60e01b8152600d6004820152602490fd5b600080fd5b606081019081106001600160401b038211176200067457604052565b51906001600160a01b03821682036200087f57565b60405190620008c48262000884565b60006040838281528260208201520152565b60405190620008e58262000884565b8160005b60608110620008f6575050565b60209062000903620008b5565b8184015201620008e9565b906003811015620009205760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c8063148f3a7b1461016c5780631e93b0f11461016357806341712c0a1461015a578063573b85101461015157806362781580146101485780636bb259061461013f5780638039fb9f14610136578063832307571461012d5780638c300455146101245780638e19e40d1461011b5780639d4f8aa914610112578063ab53f2c614610109578063abc8014a14610100578063aed712a0146100f7578063c2e3cb94146100ee578063cd419138146100e55763e091078a0361000e576100e0610ac5565b61000e565b506100e0610a8d565b506100e0610a4d565b506100e0610a03565b506100e06109b2565b506100e061093d565b506100e06108a3565b506100e0610857565b506100e06107b1565b506100e0610767565b506100e0610726565b506100e06106e8565b506100e061068f565b506100e06104ef565b506100e0610271565b506100e0610241565b506101c036600319011261023c57610182610da4565b6040519061018f82610b7c565b60043582526101a036602319011261023c5761022c916101ad610cf8565b6101b5612605565b81526101bf612614565b60208201526101cc612621565b60408201526101d961262e565b60608201526101e736612697565b60808201526101f5366126d5565b60a082015261020261263b565b60c082015261020f612649565b60e082015261021c612657565b6101008201526020820152612a8f565b60405160008152602090f35b0390f35b600080fd5b503461023c57600036600319011261023c576020600354604051908152f35b602090600319011261023c57600490565b5061028e61027e36610260565b610286610da4565b503690610e2b565b610296612167565b6104986000916102a960038454146110c6565b6102b1610c4f565b6102c56020918280825183010191016121bf565b916102e16102dc6102d860045460ff1690565b1590565b6110e6565b61032a6040967fd8b4bef0baf1b43e1c773ecc562857f82f7aa078ea677386f72396872c0e8515885180610316843383610feb565b0390a15180159081156104e3575b50611106565b6103343415611126565b610472608084019260018060a01b039233846103508751610e81565b16036104cc576103606001611146565b878080806103766103718a51610e81565b610e81565b6101008b0151908282156104c3575bf1156104b6575b87815261046d6103d48960e08901516103cf8d6101208c0151906103b6818a840151930151151590565b916103bf610d18565b9586528986015284019015159052565b6124a8565b8383019081526104036103e9858a0151610e81565b6103f38951610e81565b90886101408c01519216906123a5565b610444610411825160200190565b51518c6101608b019182519003950194855261042f8d8b0151610e81565b8861043a8b51610e81565b92519216906123a5565b51915192808301518b8282015191015115159161045f610d18565b95865285015215158a840152565b61250c565b5061018061048d6104866060860151610e81565b9351610e81565b9301519216906123a5565b80556104a46000600155565b6104ac6122c0565b5160008152602090f35b6104be6122b3565b61038c565b506108fc610385565b610360336104dd6103718951610e81565b14611146565b90506001541438610324565b5061022c6104ff61027e36610260565b6080610509610e49565b91610518600160005414611166565b610591610535610526610c4f565b60208082518301019101610f42565b9161054d6105486102d860045460ff1690565b611186565b7fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815966040518061057d843383610feb565b0390a1518015908115610683575b506111a6565b61059b34156111c6565b6105b73360018060a01b036105b08451610e81565b16146111e6565b629896808351526301312d006020845101526301c9c3806040845101526105dc611037565b926105f06105ea8351610e81565b856110b7565b6106096106006020840151610e81565b602086016110b7565b6106226106196040840151610e81565b604086016110b7565b61063b6106326060840151610e81565b606086016110b7565b61065361064b60a0840151610e81565b8486016110b7565b5160a0840152600060c0840152600060e08401524361010084015201516101208201526000610140820152611e24565b9050600154143861058b565b50600036600319011261023c57602060606106a8610da4565b6106dc816106b4613fb1565b85810190600282515251151585825101526106cd613fb1565b90600082525186820152612a8f565b01511515604051908152f35b50600036600319011261023c5760206040610701610da4565b6106dc8161070d613fb1565b85810190600182515251151585825101526106cd613fb1565b50600036600319011261023c576020610140610740610da4565b6106dc8161074c613fb1565b858101906007825152511515610100825101526106cd613fb1565b503461023c57600036600319011261023c576020600154604051908152f35b6040809180518452602081015160208501520151910152565b6060810192916107af9190610786565b565b503461023c57600036600319011261023c576107cb610d85565b5061023860a06107d9610da4565b60005460058110156108235760036107f19114611226565b6101a061080e6107ff610c4f565b602080825183010191016121bf565b0151828201525b01516040519182918261079f565b600561082f9114611206565b61024061084c61083d610c4f565b602080825183010191016127f8565b015182820152610815565b50600036600319011261023c5760208061086f610da4565b6106dc8161087b613fb1565b8481019060008251525115158582510152610894613fb1565b90600082525185820152612a8f565b503461023c57600036600319011261023c576102386109006101606108c6610da4565b60005460058110156109125760036108de9114611266565b6108f16108f860c06108f16107ff610c4f565b0151151590565b151582840152565b60405190151581529081906020820190565b600561091e9114611246565b61093860c061092e61083d610c4f565b0151151582840152565b6108f1565b503461023c576000806003193601126109af57805461095a610c4f565b906040519283918252602090604082840152835191826040850152815b83811061099857505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610977565b80fd5b50600036600319011261023c5760206101006109cc610da4565b6106dc816109d8613fb1565b85810190600582515251151560c0825101526106cd613fb1565b606090600319011261023c57600490565b50602060c0610a296106dc610a17366109f2565b610a1f610da4565b9283913690612665565b610a31613fcd565b90815152858101906003825152516080825101526106cd613fb1565b50600036600319011261023c576020610120610a67610da4565b6106dc81610a73613fb1565b85810190600682515251151560e0825101526106cd613fb1565b50602060e0610aa16106dc610a17366109f2565b610aa9613fcd565b908151528581019060048251525160a0825101526106cd613fb1565b503461023c57600036600319011261023c57610adf610d85565b506102386080610aed610da4565b6000546005811015610b12576003610b0591146112a6565b60a061080e6107ff610c4f565b6005610b1e9114611286565b60a061084c61083d610c4f565b90600182811c92168015610b5b575b6020831014610b4557565b634e487b7160e01b600052602260045260246000fd5b91607f1691610b3a565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610b9757604052565b610b9f610b65565b604052565b606081019081106001600160401b03821117610b9757604052565b602081019081106001600160401b03821117610b9757604052565b6101c081019081106001600160401b03821117610b9757604052565b608081019081106001600160401b03821117610b9757604052565b60a081019081106001600160401b03821117610b9757604052565b601f909101601f19168101906001600160401b03821190821017610b9757604052565b6040519060008260025491610c6383610b2b565b808352600193808516908115610cd75750600114610c89575b506107af92500383610c2c565b60026000908152600080516020613ff083398151915294602093509091905b818310610cbf5750506107af935082010138610c7c565b85548884018501529485019487945091830191610ca8565b90506107af94506020925060ff191682840152151560051b82010138610c7c565b6040519061012082016001600160401b03811183821017610b9757604052565b604051906107af82610ba4565b604051906102c082016001600160401b03811183821017610b9757604052565b604051906101c082016001600160401b03811183821017610b9757604052565b6040519061032082016001600160401b03811183821017610b9757604052565b60405190610d9282610ba4565b60006040838281528260208201520152565b6040519061018082016001600160401b03811183821017610e1e575b60405281610160600091828152826020820152826040820152826060820152610de7610d85565b6080820152610df4610d85565b60a08201528260c08201528260e08201528261010082015282610120820152826101408201520152565b610e26610b65565b610dc0565b919082602091031261023c57604051610e4381610bbf565b91358252565b60405190602082016001600160401b03811183821017610e74575b60405281610e70610d85565b9052565b610e7c610b65565b610e64565b6001600160a01b031690565b51906001600160a01b038216820361023c57565b8015150361023c57565b51906107af82610ea1565b919082606091031261023c57604051610ece81610ba4565b60408082948051845260208101516020850152015191610eed83610ea1565b0152565b81601f8201121561023c5760405191610f0983610ba4565b829061012083019281841161023c57915b838310610f28575050505090565b6020606091610f378486610eb6565b815201920191610f1a565b6101c08183031261023c5760405191610fc9916101a091610fbe9060c086016001600160401b03811187821017610fd1575b604052610f8083610e8d565b8652610f8e60208401610e8d565b6020870152610f9f60408401610e8d565b6040870152610fb060608401610e8d565b606087015260808301610ef1565b608085015201610e8d565b60a082015290565b610fd9610b65565b610f74565b6001600160a01b03169052565b6001600160a01b0390911681529051602082015260400190565b6040519061101282610ba4565b8160005b60608110611022575050565b60209061102d610d85565b8184015201611016565b6040519061016082016001600160401b038111838210176110aa575b60405281610140600091828152826020820152826040820152826060820152826080820152611080610d85565b60a08201528260c08201528260e0820152826101008201526110a0611005565b6101208201520152565b6110b2610b65565b611053565b6001600160a01b039091169052565b156110cd57565b60405163100960cb60e01b815260186004820152602490fd5b156110ed57565b60405163100960cb60e01b815260196004820152602490fd5b1561110d57565b60405163100960cb60e01b8152601a6004820152602490fd5b1561112d57565b60405163100960cb60e01b8152601b6004820152602490fd5b1561114d57565b60405163100960cb60e01b8152601c6004820152602490fd5b1561116d57565b60405163100960cb60e01b815260136004820152602490fd5b1561118d57565b60405163100960cb60e01b815260146004820152602490fd5b156111ad57565b60405163100960cb60e01b815260156004820152602490fd5b156111cd57565b60405163100960cb60e01b815260166004820152602490fd5b156111ed57565b60405163100960cb60e01b815260176004820152602490fd5b1561120d57565b60405163100960cb60e01b8152600a6004820152602490fd5b1561122d57565b60405163100960cb60e01b815260096004820152602490fd5b1561124d57565b60405163100960cb60e01b8152600c6004820152602490fd5b1561126d57565b60405163100960cb60e01b8152600b6004820152602490fd5b1561128d57565b60405163100960cb60e01b815260086004820152602490fd5b156112ad57565b60405163100960cb60e01b815260076004820152602490fd5b156112cd57565b60405163100960cb60e01b815260216004820152602490fd5b156112ed57565b60405163100960cb60e01b815260226004820152602490fd5b1561130d57565b60405163100960cb60e01b815260236004820152602490fd5b1561132d57565b60405163100960cb60e01b8152606d6004820152602490fd5b1561134d57565b60405163100960cb60e01b8152606f6004820152602490fd5b1561136d57565b60405163100960cb60e01b815260716004820152602490fd5b1561138d57565b60405163100960cb60e01b815260736004820152602490fd5b156113ad57565b60405163100960cb60e01b815260756004820152602490fd5b156113cd57565b60405163100960cb60e01b815260646004820152602490fd5b156113ed57565b60405163100960cb60e01b815260666004820152602490fd5b1561140d57565b60405163100960cb60e01b815260686004820152602490fd5b1561142d57565b60405163100960cb60e01b8152606a6004820152602490fd5b1561144d57565b60405163100960cb60e01b8152606c6004820152602490fd5b1561146d57565b60405163100960cb60e01b8152605b6004820152602490fd5b1561148d57565b60405163100960cb60e01b8152605d6004820152602490fd5b156114ad57565b60405163100960cb60e01b8152605f6004820152602490fd5b156114cd57565b60405163100960cb60e01b815260616004820152602490fd5b156114ed57565b60405163100960cb60e01b815260636004820152602490fd5b1561150d57565b60405163100960cb60e01b815260526004820152602490fd5b1561152d57565b60405163100960cb60e01b815260546004820152602490fd5b1561154d57565b60405163100960cb60e01b815260566004820152602490fd5b1561156d57565b60405163100960cb60e01b815260586004820152602490fd5b1561158d57565b60405163100960cb60e01b8152605a6004820152602490fd5b156115ad57565b60405163100960cb60e01b815260486004820152602490fd5b156115cd57565b60405163100960cb60e01b815260496004820152602490fd5b156115ed57565b60405163100960cb60e01b8152604b6004820152602490fd5b1561160d57565b60405163100960cb60e01b8152604d6004820152602490fd5b1561162d57565b60405163100960cb60e01b8152604f6004820152602490fd5b1561164d57565b60405163100960cb60e01b815260516004820152602490fd5b1561166d57565b60405163100960cb60e01b8152603c6004820152602490fd5b1561168d57565b60405163100960cb60e01b8152603d6004820152602490fd5b156116ad57565b60405163100960cb60e01b8152603f6004820152602490fd5b156116cd57565b60405163100960cb60e01b815260416004820152602490fd5b156116ed57565b60405163100960cb60e01b815260436004820152602490fd5b1561170d57565b60405163100960cb60e01b815260456004820152602490fd5b1561172d57565b60405163100960cb60e01b815260306004820152602490fd5b1561174d57565b60405163100960cb60e01b815260316004820152602490fd5b1561176d57565b60405163100960cb60e01b815260336004820152602490fd5b1561178d57565b60405163100960cb60e01b815260356004820152602490fd5b156117ad57565b60405163100960cb60e01b815260376004820152602490fd5b156117cd57565b60405163100960cb60e01b815260396004820152602490fd5b156117ed57565b602460405163100960cb60e01b8152816004820152fd5b1561180b57565b60405163100960cb60e01b815260256004820152602490fd5b1561182b57565b60405163100960cb60e01b815260276004820152602490fd5b1561184b57565b60405163100960cb60e01b815260296004820152602490fd5b1561186b57565b60405163100960cb60e01b8152602b6004820152602490fd5b1561188b57565b60405163100960cb60e01b8152602d6004820152602490fd5b604051906118b182610b7c565b816118ba610d85565b815260206118c6610d85565b910152565b9060038110156118dc5760051b0190565b634e487b7160e01b600052603260045260246000fd5b6118fa610d25565b906000808352806020840152806040840152806060840152806080840152611920610d85565b60a08401528060c08401528060e0840152611939611005565b61010084015280610120840152806101408401528061016084015261195c610d85565b610180840152806101a0840152611971610d85565b6101c0840152806101e0840152611986610d85565b6102008401528061022084015261199b610d85565b61024084015280610260840152806102808401526102a0830152565b60408091805184526020810151602085015201511515910152565b906000905b600382106119e457505050565b60206060826119f660019487516119b7565b019301910190916119d7565b9190916104e0610500820193611a19838251610fde565b611a2b60208201516020850190610fde565b611a3d60408201516040850190610fde565b611a4f60608201516060850190610fde565b611a6160808201516080850190610fde565b611a7360a082015160a0850190610786565b60c081015190611a8a610100928386019015159052565b60e081015191611aa1610120938487019015159052565b81015191611ab561014093848701906119d2565b810151916102609283860152810151611ad5610280918287019015159052565b61016082015192611aed6102a0948588019015159052565b611b016101808401516102c08801906119b7565b6101a0830151610320870152611b216101c08401516103408801906119b7565b6101e08301516103a0870152611b416102008401516103c08801906119b7565b610220830151610420870152611b61610240840151610440880190610786565b8201516104a08601528101516104c08501520151910152565b818110611b85575050565b60008155600101611b7a565b90601f8211611b9e575050565b6107af9160026000526020600020906020601f840160051c83019310611bcc575b601f0160051c0190611b7a565b9091508190611bbf565b80519091906001600160401b038111611cac575b611bfe81611bf9600254610b2b565b611b91565b602080601f8311600114611c3a5750819293600092611c2f575b50508160011b916000199060031b1c191617600255565b015190503880611c18565b6002600052601f19831694909190600080516020613ff0833981519152926000905b878210611c94575050836001959610611c7b575b505050811b01600255565b015160001960f88460031b161c19169055388080611c70565b80600185968294968601518155019501930190611c5c565b611cb4610b65565b611bea565b60405190611cc682610bda565b816000808252806020830152806040830152806060830152806080830152611cec610d85565b60a08301528060c0830152611cff611005565b60e083015280610100830152611d13610d85565b61012083015280610140830152806101608301526101808201526101a06118c6610d85565b6107af909291926103206101a0610380830195611d56848251610fde565b611d6860208201516020860190610fde565b611d7a60408201516040860190610fde565b611d8c60608201516060860190610fde565b611d9e60808201516080860190610fde565b611db060a082015160a0860190610786565b611df660c0820151611dc9610100918288019015159052565b60e083015190611ddf61012092838901906119d2565b8301516102408701528201516102608601906119b7565b6101408101516102c08501526101608101516102e08501526101808101516103008501520151910190610786565b611e2c6118a4565b60e082015115611f9657611f916107af92611f8392611f526101209283810190602082515151940193845152611e63825160200190565b515184516020015281516040015151604085510152611e80611cb9565b94611e94611e8e8351610e81565b876110b7565b611ead611ea46020840151610e81565b602088016110b7565b611ec6611ebd6040840151610e81565b604088016110b7565b611edf611ed66060840151610e81565b606088016110b7565b611ef8611eef6080840151610e81565b608088016110b7565b60a082015160a0870152611f1b611f1260c0840151151590565b151560c0880152565b825160e087015261014091820151610100870152825151908601528151515190850152805160200151516101608501525160400190565b5151610180830152516101a0820152611f6b6003600055565b611f7443600155565b60405192839160208301611d38565b03601f198101835282610c2c565b611bd6565b611f91611f839160406107af946101209261210684830180515151835152611fbf815160200190565b51518351602001528051604001515185845101526120b2611fde6118f2565b96611ff2611fec8751610e81565b896110b7565b61200b6120026020880151610e81565b60208a016110b7565b61202261201a88880151610e81565b888a016110b7565b61203b6120326060880151610e81565b60608a016110b7565b61205461204b6080880151610e81565b60808a016110b7565b6120ac60a0870196875160a08b015260c081019261207e6120758551151590565b151560c08d0152565b600060e08c015285516101008c015261014091820151908b015282511561215f576000905b8a019015159052565b51151590565b15612155576120c760005b1515610160880152565b805151610180870152805151516101a08701528051602001516101c0870152805160200151516101e08701528051604001516102008701525160400190565b5151610220850152516102408401528051516102608401526020815101516102808401525101516102a082015261213d6005600055565b61214643600155565b60405192839160208301611a02565b6120c760016120bd565b6001906120a3565b6040519061217482610ba4565b6000604083828152612184611005565b60208201520152565b919082606091031261023c576040516121a581610ba4565b604080829480518452602081015160208501520151910152565b906103808282031261023c576122aa906103206121da610d45565b936121e481610e8d565b85526121f260208201610e8d565b602086015261220360408201610e8d565b604086015261221460608201610e8d565b606086015261222560808201610e8d565b60808601526122378360a0830161218d565b60a086015261010061224a818301610eab565b60c08701526101209061225f85838501610ef1565b60e08801526102408301519087015261227c846102608401610eb6565b908601526102c08101516101408601526102e08101516101608601526103008101516101808601520161218d565b6101a082015290565b506040513d6000823e3d90fd5b6122cb600254610b2b565b806122d35750565b601f81116001146122e657506000600255565b600260005261232b90601f0160051c600080516020613ff0833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611b7a565b6000602081208160025555565b6000809161239e938260405191602083019263a9059cbb60e01b845260018060a01b038092166024820152600160448201526044815261237781610bf6565b5193165af161238e6123876123e3565b8092612448565b5060208082518301019101612430565b1561023c57565b6000919061239e93838093604051602081019363a9059cbb60e01b855260018060a01b03809316602483015260448201526044815261237781610bf6565b3d1561242b573d906001600160401b03821161241e575b60405191612412601f8201601f191660200184610c2c565b82523d6000602084013e565b612426610b65565b6123fa565b606090565b9081602091031261023c575161244581610ea1565b90565b156124505790565b80511561245f57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156124805790565b80511561248f57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b91906124b2611005565b926000805b600381106124c6575050508252565b6124d081846118cb565b516124db82886118cb565b526124e681876118cb565b5060001981146124f8576001016124b7565b634e487b7160e01b82526011600452602482fd5b9190612516611005565b926000805b6003811061252d575050506020830152565b61253781846118cb565b5161254282886118cb565b5261254d81876118cb565b5060001981146124f85760010161251b565b9190612569611005565b926000805b60038110612580575050506020830152565b61258a81846118cb565b5161259582886118cb565b526125a081876118cb565b5060001981146124f85760010161256e565b91906125bc611005565b926000805b600381106125d3575050506040830152565b6125dd81846118cb565b516125e882886118cb565b526125f381876118cb565b5060001981146124f8576001016125c1565b60243590600882101561023c57565b604435906107af82610ea1565b606435906107af82610ea1565b608435906107af82610ea1565b61016435906107af82610ea1565b61018435906107af82610ea1565b6101a435906107af82610ea1565b919082606091031261023c5760405161267d81610ba4565b604080829480358452602081013560208501520135910152565b60609060a319011261023c57604051906126b082610bbf565b604051826126bd82610ba4565b60a435825260c435602083015260e435604083015252565b60609061010319011261023c57604051906126ef82610bbf565b604051826126fc82610ba4565b61010435825261012435602083015261014435604083015252565b61271f610d65565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e084015280610100840152806101208401528061014084015280610160840152612773610e49565b610180840152806101a0840152612788611005565b6101c0840152806101e084015261279d611005565b610200840152806102208401526127b2611005565b6102408401526127c0610e49565b610260840152806102808401526127d5611005565b6102a0840152806102c08401526127ea611005565b6102e0840152610300830152565b906105008282031261023c576104e061280f610d25565b9261281981610e8d565b845261282760208201610e8d565b602085015261283860408201610e8d565b604085015261284960608201610e8d565b606085015261285a60808201610e8d565b608085015261286c8360a0830161218d565b60a085015261010061287f818301610eab565b60c0860152610120612892818401610eab565b60e0870152610140916128a786848601610ef1565b90870152610260908184015190870152610280916128c6838501610eab565b9087015261294c6102a0956128dc878601610eab565b6101608901526128f0816102c08701610eb6565b6101808901526103208501516101a0890152612910816103408701610eb6565b6101c08901526103a08501516101e0890152612930816103c08701610eb6565b610200890152610420850151610220890152610440850161218d565b6102408701526104a0830151908601526104c08201519085015201519082015290565b6008111561297957565b634e487b7160e01b600052602160045260246000fd5b906107af9151610786565b9092916020906101e083019460018060a01b031683528051828401520151908151916008831015612979576101006101c0916107af9460408501526129e86020820151606086019015159052565b6040810151151560808501526060810151151560a0850152612a12608082015160c086019061298f565b612a2560a082015161012086019061298f565b60c0810151151561018085015260e081015115156101a085015201511515910152565b5160088110156129795790565b6040919493926060820195825260208201520152565b6001600160d01b031990911681526001600160a01b03909116602082015260400190565b612a97612717565b600090612aa760058354146112c6565b612aaf610c4f565b612ac36020918280825183010191016127f8565b90612adb612ad66102d860045460ff1690565b6112e6565b806040957fe6f49766696b4c218e67f65e1efdf1a8735d3eee4a800e9211ac8ff067697f89875180612b0e84338361299a565b0390a1612b2681518015908115613e95575b50611306565b01612b318151612a48565b612b3a8161296f565b612da85750612b55612b50610160840151151590565b6117e6565b6101a0820194612b69600187511015611804565b61012094612b87868501516102608601908151018752513414611824565b82840197612ba6612ba1612b9b8b51610e81565b33613ea1565b611844565b828501612bbe612bb9612b9b8351610e81565b611864565b846060870192612bd9612bd4612b9b8651610e81565b611884565b8189019a858c5260808901958080808d612bf66103718c51610e81565b905190828215612d9f575bf115612d92575b60001990510198868101998a52338d51612c2190610e81565b90612c2b91612338565b606001612c40816562726f6e7a6560d01b9052565b516001600160d01b0319168651809133612c5a9183612a6b565b0360008051602061401083398151915291a18551600181527f9b37888484875081b3a97b4403646e19e2eab022172be936aedcb242d56216ce90602090a16001910152612ca5611037565b998651612cb190610e81565b612cbb908c6110b7565b51612cc590610e81565b612cd1908b87016110b7565b51612cdb90610e81565b612ce7908a85016110b7565b51612cf190610e81565b612cfe9060608a016110b7565b51612d0890610e81565b612d1590608089016110b7565b60a0838101519088015260c08301511515151560c088015260e08301511515151560e0880152610100438189015283015193519261018001518183820151910151612d5f90151590565b92612d68610d18565b94855284015290151590820152612d7e916124a8565b90830152516101408201526107af90611e24565b612d9a6122b3565b612c08565b506108fc612c01565b6001612db78297969751612a48565b612dc08161296f565b0361301c5750612ddc612dd7610160840151151590565b611726565b610220820193612df0600186511015611746565b610120948584015190612e156102a08601928351019260808801938452513414611766565b83850198612e2e612e29612b9b8c51610e81565b611786565b8380870191612e48612e43612b9b8551610e81565b6117a6565b6060880193612e62612e5d612b9b8751610e81565b6117c6565b60a08a019b808d5280808060808d0199612e7f6103718c51610e81565b905190828215613013575bf115613006575b6000199051019860c08101998a52338551612eab90610e81565b90612eb591612338565b60e001612ec8816319dbdb1960e21b9052565b516001600160d01b0319168251809133612ee29183612a6b565b0360008051602061401083398151915291a18151600181527fb0b29bb48fc2998c3054e84ba9307a2046d7f3158db8b3fd8298c53c59e160fb90602090a16001910152612f2d611037565b998651612f3990610e81565b612f43908c6110b7565b51612f4d90610e81565b612f59908b87016110b7565b51612f6390610e81565b612f6f908a85016110b7565b51612f7990610e81565b612f869060608a016110b7565b51612f9090610e81565b612f9d90608089016110b7565b60a0838101519088015260c08301511515151560c088015260e08301511515151560e0880152610100438189015283015193519261020001518183820151910151612fe790151590565b92612ff0610d18565b94855284015290151590820152612d7e916125b2565b61300e6122b3565b612e91565b506108fc612e8a565b600261302f829895979694939851612a48565b6130388161296f565b0361329a5750612b9b956101609261305a61305585850151151590565b611666565b6101e0830161306d600182511015611686565b6101209586850151916102808601928351019161309561010094858d019485525134146116a6565b6130ab6130a68789019d8e51610e81565b6116c6565b848701906130c46130bf612b9b8451610e81565b6116e6565b60608801926130de6130d9612b9b8651610e81565b611706565b8a8d019b808d5280808060808d01986130fa6103718b51610e81565b905190828215613291575bf115613284575b600019905101986101409c8d81019a8b5233845161312990610e81565b9061313391612338565b6539b4b63b32b960d11b9101819052865190819061315390339083612a6b565b0360008051602061401083398151915291a18551600181527fefad911c96ab63628fb16db6c3d0328f8380b67c7fb99900d1809a4fac47eafd90602090a160600161319e9060019052565b6131a6611037565b9b8c88516131b390610e81565b6131bc916110b7565b516131c690610e81565b6131d2908d88016110b7565b516131dc90610e81565b6131e8908c86016110b7565b516131f290610e81565b6131ff9060608c016110b7565b5161320990610e81565b6132169060808b016110b7565b60a084810151908a015260c0808501511515908a015260e0808501511515908a015243818a015283015193516101c090930151828101519082015115159261325c610d18565b948552840152901515908201526132729161255f565b9084015251908201526107af90611e24565b61328c6122b3565b61310c565b506108fc613105565b60036132ab82979694939751612a48565b6132b48161296f565b036135c357608090510151906101809384860192835261331760808801946132e96132e26103718851610e81565b33146115a6565b838551516104b0815111156000146135bd576102588c82015111155b156135b65760c89250015111156115c6565b61332134156115e6565b6101a0948588015184515151018096880152610100958689015191890151848b82015191015161335090151590565b90613359610d18565b9283528b83015215158482015261336f916124a8565b976101c0870198895280880198895161338790610e81565b855151516133959133613efc565b61339e90611606565b518181018051518387515101510190816101e08b01525185848201519101511515906133c8610d18565b928352848301521515858201526133de9161255f565b9161020088019283528389019283516133f690610e81565b8651518401516134069133613efc565b61340f90611626565b518481018051518688515101510190816102208c0152518685820151910151151590613439610d18565b9283528583015215158682015261344f916125b2565b9761024001978852606089019484865161346890610e81565b91515101516134779133613efc565b61348090611646565b875180515190858482015151910151519186519283926134a09284612a55565b037f37fcdf51404943ba64664e05b93d83f80292fdf04381d01241fdbfe57e9d6be391a18351600181527f2308dc53989f806867d7bf9498c693c3b71b5bdb938b6fb21f603e9ebc87273c90602090a160c0016134fd9060019052565b613505611037565b98885161351190610e81565b61351b908b6110b7565b5161352590610e81565b613530918a016110b7565b5161353a90610e81565b6135459188016110b7565b5161354f90610e81565b61355c90606087016110b7565b5161356690610e81565b61357390608086016110b7565b60a0838101519085015260c08084015115159085015260e0808401511515908501524390840152516101208084019190915201516101408201526107af90611e24565b50506115c6565b82613305565b90929160046135d28351612a48565b6135db8161296f565b036137bc57505160a001519261026001928352608084019182516135fe90610e81565b61360790610e81565b331461361290611506565b61361c3415611526565b85850195865161362b90610e81565b6136359033613ea1565b61363e90611546565b81860190815161364d90610e81565b6136579033613ea1565b61366090611566565b6060870193845161367090610e81565b61367a9033613ea1565b61368390611586565b86515180519085848201519101519186519283926136a19284612a55565b037fb382548241998489affa3f494b50b2793e7b4982ed2256fd670e6b3758944baa91a18351600181527f049d29931ed2e23dfd9e7f9851bd1c9136a441e355a798557ee161a790330cea90602090a160e0016136fe9060019052565b613706611037565b97875161371290610e81565b61371c908a6110b7565b5161372690610e81565b6137319189016110b7565b5161373b90610e81565b6137469187016110b7565b5161375090610e81565b61375d90606086016110b7565b5161376790610e81565b61377490608085016110b7565b515160a083015260c08101511515151560c083015260e08101511515151560e0830152610100438184015281015190610120918284015201516101408201526107af90611e24565b91939060056137ce8298959851612a48565b6137d78161296f565b0361398b57505050608083019081516137ef90610e81565b6137f890610e81565b331461380390611466565b61380d3415611486565b80840194855161381c90610e81565b6138269033613ea1565b61382f906114a6565b808501805161383d90610e81565b6138479033613ea1565b613850906114c6565b6060860192835161386090610e81565b61386a9033613ea1565b613873906114e6565b8251600181527f8af42bd28821e762acc84f5b0c59d0453b2f4b842220b030e985c6ddef04ecb590602090a18251600181527facccad04dd6a320854457d8bb98f922c9bf41f08af9ae066d6bee14d0e5c93f490602090a16001610100968701526138dc611037565b9787516138e890610e81565b6138f2908a6110b7565b516138fc90610e81565b6139079189016110b7565b5161391190610e81565b61391c9187016110b7565b5161392690610e81565b61393390606086016110b7565b5161393d90610e81565b61394a90608085016110b7565b60a0828101519084015260c08201511515151560c0840152600160e0840152438184015281015190610120918284015201516101408201526107af90611e24565b600661399b829897959851612a48565b6139a48161296f565b03613b4257505050608081019384516139bc90610e81565b6139c590610e81565b33146139d0906113c6565b6139da34156113e6565b8082019485516139e990610e81565b6139f39033613ea1565b6139fc90611406565b848301948551613a0b90610e81565b613a159033613ea1565b613a1e90611426565b60608401908151613a2e90610e81565b613a389033613ea1565b613a4190611446565b61014096878601948551613a5490151590565b835190151581527f0e7d895e66d1d1af094050881edd63ef52ea9593570cba02bdbb5f548ae8997b90602090a18551151561012098890152613a94611037565b998751613aa090610e81565b613aaa908c6110b7565b51613ab490610e81565b613abf918b016110b7565b51613ac990610e81565b613ad49189016110b7565b51613ade90610e81565b613aeb90606088016110b7565b51613af590610e81565b613b0290608087016110b7565b60a08281015190860152511515151560c085015260e08101511515151560e08501526101004381860152810151828501520151908201526107af90611e24565b613b556007919792949596939751612a48565b613b5e8161296f565b14613b6c575b505050505050565b60808401958651613b7c90610e81565b613b8590610e81565b3314613b9090611326565b613b9a3415611346565b6101a0850190828601978851613baf90610e81565b613bb99033613ea1565b613bc290611366565b6101e087018588018051613bd590610e81565b613bdf9033613ea1565b613be890611386565b61022089019160608a01928351613bfe90610e81565b613c089033613ea1565b613c11906113a6565b856102808b015261010095868c0151906101808d01518b8b820151910151613c3890151590565b90613c41610d18565b9283528b83015215158b820152613c57916124a8565b966102a08b019788528d51613c6b90610e81565b978651613c7790610e81565b82516001600160a01b039a613c8e928c16906123a5565b518b8a8201805151865190036102c081930152518c8c820151910151151590613cb5610d18565b9283528c83015215158c820152613ccb9161255f565b976102e08c019889528451613cdf90610e81565b8751613cea90610e81565b8286519116613cf8926123a5565b88516040015151835190039b610300019b8c528551613d1690610e81565b908751613d2290610e81565b9084519116613d30926123a5565b5191519051918951928392613d459284612a55565b037fa41fe49fea1ba91842314e6f26277af311c717fa5b42fc2c83bb4c0d0d90f63291a18651600181527fb813a0d18874b687c59db363468c52aa6f102027b1d41ed0b05956f1af45659090602090a160016101409a8b0152613da6611037565b9a8951613db290610e81565b613dbc908d6110b7565b51613dc690610e81565b613dd2908c88016110b7565b51613ddc90610e81565b613de8908b88016110b7565b51613df290610e81565b613dff9060608b016110b7565b51613e0990610e81565b613e169060808a016110b7565b60a0868101519089015260c08601511515151560c089015260e08601511515151560e0890152439088015251925191808401518183820151910151151592613e5c610d18565b94855284015290151590820152613e72916125b2565b906101209182850152015190820152613e8a90611e24565b388080808080613b64565b90506001541438612b20565b6000612445928192826040519160208301926323b872dd60e01b845260018060a01b03809216602482015230604482015282606482015260648152613ee581610c11565b5193165af161238e613ef56123e3565b8092612478565b6000916124459383809360405160208101936323b872dd60e01b855260018060a01b038093166024830152306044830152606482015260648152613ee581610c11565b6040519061012082016001600160401b03811183821017613fa4575b60405281610100600091828152826020820152826040820152826060820152613f82610e49565b6080820152613f8f610e49565b60a08201528260c08201528260e08201520152565b613fac610b65565b613f5b565b60405190613fbe82610b7c565b816000815260206118c6613f3f565b60405190613fda82610b7c565b81613fe3610e49565b815260206118c6613f3f56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace43559fdbda3802be12785165433940170227c305b1c57d809d0c2950cdff3037a164736f6c6343000811000a`,
  BytecodeLen: 18803,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/coin_shop.rsh:123:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './src/contracts/coin_shop.rsh:324:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./src/contracts/coin_shop.rsh:325:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/coin_shop.rsh:131:64:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "Deployer": Deployer,
  "buyer_api_purchase_bronze": buyer_api_purchase_bronze,
  "buyer_api_purchase_gold": buyer_api_purchase_gold,
  "buyer_api_purchase_silver": buyer_api_purchase_silver,
  "controller_api_restock": controller_api_restock,
  "controller_api_set_prices": controller_api_set_prices,
  "controller_api_terminate": controller_api_terminate,
  "controller_api_toggle_pause": controller_api_toggle_pause,
  "controller_api_withdraw": controller_api_withdraw
  };
export const _APIs = {
  buyer_api: {
    purchase_bronze: buyer_api_purchase_bronze,
    purchase_gold: buyer_api_purchase_gold,
    purchase_silver: buyer_api_purchase_silver
    },
  controller_api: {
    restock: controller_api_restock,
    set_prices: controller_api_set_prices,
    terminate: controller_api_terminate,
    toggle_pause: controller_api_toggle_pause,
    withdraw: controller_api_withdraw
    }
  };
