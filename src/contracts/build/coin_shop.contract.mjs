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
      const [v6888, v6889, v6890, v6891, v6906, v6913] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6940, v6941, v12857, v12858, v12860, v12862, v12863] = svs;
      return (await ((async () => {
        
        
        return v6931;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6933, v6940, v6941, v6971, v6973, v6974, v6975, v6976, v6977, v6978, v6979, v6980, v6982, v6983, v6984] = svs;
      return (await ((async () => {
        
        
        return v6931;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _coin_supply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v6888, v6889, v6890, v6891, v6906, v6913] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6940, v6941, v12857, v12858, v12860, v12862, v12863] = svs;
      return (await ((async () => {
        
        
        return v12863;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6933, v6940, v6941, v6971, v6973, v6974, v6975, v6976, v6977, v6978, v6979, v6980, v6982, v6983, v6984] = svs;
      return (await ((async () => {
        
        
        return v6980;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _is_paused = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v6888, v6889, v6890, v6891, v6906, v6913] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6940, v6941, v12857, v12858, v12860, v12862, v12863] = svs;
      return (await ((async () => {
        
        
        return v6932;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6933, v6940, v6941, v6971, v6973, v6974, v6975, v6976, v6977, v6978, v6979, v6980, v6982, v6983, v6984] = svs;
      return (await ((async () => {
        
        
        return v6932;}))(...args));
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
    controller_api_withdraw0_179: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Address;
  const ctc9 = stdlib.T_Tuple([ctc2, ctc2, ctc6]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  
  
  const v6865 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v6866 = [v6865, v6865, v6865];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v6889, v6890, v6891], secs: v6893, time: v6892, didSend: v72, from: v6888 } = txn1;
  const v6894 = v6866[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0')];
  const v6895 = stdlib.Array_set(v6894, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'));
  const v6896 = stdlib.Array_set(v6866, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'), v6895);
  const v6898 = v6896[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '1')];
  const v6899 = stdlib.Array_set(v6898, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'));
  const v6900 = stdlib.Array_set(v6896, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '1'), v6899);
  const v6902 = stdlib.tokenEq(v6890, v6889);
  const v6903 = v6902 ? false : true;
  stdlib.assert(v6903, {
    at: './src/contracts/coin_shop.rsh:116:14:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  const v6904 = v6900[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '2')];
  const v6905 = stdlib.Array_set(v6904, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'));
  const v6906 = stdlib.Array_set(v6900, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '2'), v6905);
  const v6908 = stdlib.tokenEq(v6891, v6889);
  const v6910 = stdlib.tokenEq(v6891, v6890);
  const v6911 = v6910 ? false : true;
  const v6912 = v6908 ? false : v6911;
  stdlib.assert(v6912, {
    at: './src/contracts/coin_shop.rsh:116:14:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  ;
  ;
  ;
  ;
  const v6913 = ctc.iam(v6888);
  const v6914 = stdlib.tokenEq(v6889, v6890);
  const v6916 = stdlib.tokenEq(v6889, v6891);
  const v6917 = v6916 ? false : true;
  const v6918 = v6914 ? false : v6917;
  const v6919 = stdlib.tokenEq(v6890, v6891);
  const v6920 = v6919 ? false : true;
  const v6921 = v6918 ? v6920 : false;
  stdlib.assert(v6921, {
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
  const {data: [], secs: v6928, time: v6927, didSend: v114, from: v6926 } = txn2;
  ;
  const v6929 = stdlib.addressEq(v6888, v6926);
  stdlib.assert(v6929, {
    at: './src/contracts/coin_shop.rsh:128:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v6930 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30000000')];
  let v6931 = v6930;
  let v6932 = false;
  let v6933 = false;
  let v6934 = v6927;
  let v6940 = v6906;
  let v6941 = stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:105:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v6958 = v6933 ? false : true;
    
    return v6958;})()) {
    const v6971 = v6932 ? false : true;
    const v6972 = v6933 ? false : true;
    const v6973 = v6932 ? false : v6972;
    const v6974 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
    const v6975 = v6974[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
    const v6976 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
    const v6977 = v6976[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
    const v6978 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
    const v6979 = v6978[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
    const v6980 = [v6975, v6977, v6979];
    const v6982 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
    const v6983 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
    const v6984 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v7523], secs: v7525, time: v7524, didSend: v5580, from: v7522 } = txn4;
    switch (v7523[0]) {
      case 'buyer_api_purchase_bronze0_179': {
        const v7526 = v7523[1];
        undefined /* setApiDetails */;
        stdlib.assert(v6973, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:170:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:169:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'contract is currently inactive',
          who: 'Admin'
          });
        const v7534 = stdlib.ge(v6975, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:171:37:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v7534, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:171:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:169:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'balance insufficient for transaction',
          who: 'Admin'
          });
        const v7760 = stdlib.add(v6941, v6982);
        const v7761 = stdlib.le(v7760, stdlib.UInt_max);
        stdlib.assert(v7761, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v7766 = stdlib.le(v6975, stdlib.UInt_max);
        stdlib.assert(v7766, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v7774 = stdlib.le(v6977, stdlib.UInt_max);
        stdlib.assert(v7774, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v7782 = stdlib.le(v6979, stdlib.UInt_max);
        stdlib.assert(v7782, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v7819 = stdlib.sub(v7760, v7760);
        const v7820 = stdlib.ge(v7819, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:178:64:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7820, {
          at: './src/contracts/coin_shop.rsh:178:64:application',
          fs: ['at ./src/contracts/coin_shop.rsh:176:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        ;
        const v7849 = stdlib.sub(v6975, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:44:decimal', stdlib.UInt_max, '1'));
        const v7850 = stdlib.ge(v7849, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7850, {
          at: './src/contracts/coin_shop.rsh:179:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:176:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v7853 = stdlib.Array_set(v6974, '0', v7849);
        const v7854 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:56:application', stdlib.UInt_max, '0'), v7853);
        ;
        const v7855 = 'bronze';
        null;
        const v7856 = true;
        await txn4.getOutput('buyer_api_purchase_bronze', 'v7856', ctc6, v7856);
        const cv6931 = v6931;
        const cv6932 = v6932;
        const cv6933 = v6933;
        const cv6934 = v7524;
        const cv6940 = v7854;
        const cv6941 = v7819;
        
        v6931 = cv6931;
        v6932 = cv6932;
        v6933 = cv6933;
        v6934 = cv6934;
        v6940 = cv6940;
        v6941 = cv6941;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'buyer_api_purchase_gold0_179': {
        const v8192 = v7523[1];
        undefined /* setApiDetails */;
        stdlib.assert(v6973, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:210:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:209:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'contract is currently inactive',
          who: 'Admin'
          });
        const v8223 = stdlib.ge(v6979, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:211:37:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v8223, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:211:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:209:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'balance insufficient for transaction',
          who: 'Admin'
          });
        const v8426 = stdlib.add(v6941, v6984);
        const v8427 = stdlib.le(v8426, stdlib.UInt_max);
        stdlib.assert(v8427, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v8432 = stdlib.le(v6975, stdlib.UInt_max);
        stdlib.assert(v8432, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v8440 = stdlib.le(v6977, stdlib.UInt_max);
        stdlib.assert(v8440, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v8448 = stdlib.le(v6979, stdlib.UInt_max);
        stdlib.assert(v8448, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v8561 = stdlib.sub(v8426, v8426);
        const v8562 = stdlib.ge(v8561, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:218:64:application', stdlib.UInt_max, '0'));
        stdlib.assert(v8562, {
          at: './src/contracts/coin_shop.rsh:218:64:application',
          fs: ['at ./src/contracts/coin_shop.rsh:216:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:216:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        ;
        const v8591 = stdlib.sub(v6979, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:50:decimal', stdlib.UInt_max, '1'));
        const v8592 = stdlib.ge(v8591, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v8592, {
          at: './src/contracts/coin_shop.rsh:219:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:216:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:216:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v8595 = stdlib.Array_set(v6978, '0', v8591);
        const v8596 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:56:application', stdlib.UInt_max, '2'), v8595);
        ;
        const v8597 = 'gold  ';
        null;
        const v8598 = true;
        await txn4.getOutput('buyer_api_purchase_gold', 'v8598', ctc6, v8598);
        const cv6931 = v6931;
        const cv6932 = v6932;
        const cv6933 = v6933;
        const cv6934 = v7524;
        const cv6940 = v8596;
        const cv6941 = v8561;
        
        v6931 = cv6931;
        v6932 = cv6932;
        v6933 = cv6933;
        v6934 = cv6934;
        v6940 = cv6940;
        v6941 = cv6941;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'buyer_api_purchase_silver0_179': {
        const v8858 = v7523[1];
        undefined /* setApiDetails */;
        stdlib.assert(v6973, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:190:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:189:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'contract is currently inactive',
          who: 'Admin'
          });
        const v8912 = stdlib.ge(v6977, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:191:37:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v8912, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:191:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:189:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'balance insufficient for transaction',
          who: 'Admin'
          });
        const v9092 = stdlib.add(v6941, v6983);
        const v9093 = stdlib.le(v9092, stdlib.UInt_max);
        stdlib.assert(v9093, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v9098 = stdlib.le(v6975, stdlib.UInt_max);
        stdlib.assert(v9098, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v9106 = stdlib.le(v6977, stdlib.UInt_max);
        stdlib.assert(v9106, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v9114 = stdlib.le(v6979, stdlib.UInt_max);
        stdlib.assert(v9114, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v9303 = stdlib.sub(v9092, v9092);
        const v9304 = stdlib.ge(v9303, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:198:64:application', stdlib.UInt_max, '0'));
        stdlib.assert(v9304, {
          at: './src/contracts/coin_shop.rsh:198:64:application',
          fs: ['at ./src/contracts/coin_shop.rsh:196:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        ;
        const v9333 = stdlib.sub(v6977, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:47:decimal', stdlib.UInt_max, '1'));
        const v9334 = stdlib.ge(v9333, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v9334, {
          at: './src/contracts/coin_shop.rsh:199:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:196:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v9337 = stdlib.Array_set(v6976, '0', v9333);
        const v9338 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:56:application', stdlib.UInt_max, '1'), v9337);
        ;
        const v9339 = 'silver';
        null;
        const v9340 = true;
        await txn4.getOutput('buyer_api_purchase_silver', 'v9340', ctc6, v9340);
        const cv6931 = v6931;
        const cv6932 = v6932;
        const cv6933 = v6933;
        const cv6934 = v7524;
        const cv6940 = v9338;
        const cv6941 = v9303;
        
        v6931 = cv6931;
        v6932 = cv6932;
        v6933 = cv6933;
        v6934 = cv6934;
        v6940 = cv6940;
        v6941 = cv6941;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_restock0_179': {
        const v9524 = v7523[1];
        undefined /* setApiDetails */;
        const v9598 = v9524[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:232:14:spread', stdlib.UInt_max, '0')];
        const v9599 = stdlib.addressEq(v7522, v6913);
        stdlib.assert(v9599, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:233:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:232:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'action not authorized',
          who: 'Admin'
          });
        const v9601 = v9598[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:9:array ref', stdlib.UInt_max, '0')];
        const v9602 = stdlib.le(v9601, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:29:decimal', stdlib.UInt_max, '1200'));
        const v9603 = v9598[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:33:array ref', stdlib.UInt_max, '1')];
        const v9604 = stdlib.le(v9603, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:35:decimal', stdlib.UInt_max, '600'));
        const v9605 = v9602 ? v9604 : false;
        const v9606 = v9598[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:57:array ref', stdlib.UInt_max, '2')];
        const v9607 = stdlib.le(v9606, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:40:decimal', stdlib.UInt_max, '200'));
        const v9608 = v9605 ? v9607 : false;
        stdlib.assert(v9608, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:234:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:232:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'illegal param(s) were provided',
          who: 'Admin'
          });
        const v9759 = stdlib.le(v6941, stdlib.UInt_max);
        stdlib.assert(v9759, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v9763 = stdlib.add(v6975, v9601);
        const v9764 = stdlib.le(v9763, stdlib.UInt_max);
        stdlib.assert(v9764, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v9767 = stdlib.Array_set(v6974, '0', v9763);
        const v9768 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0'), v9767);
        ;
        const v9769 = v9768[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '1')];
        const v9770 = v9769[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0')];
        const v9771 = stdlib.add(v9770, v9603);
        const v9772 = stdlib.le(v9771, stdlib.UInt_max);
        stdlib.assert(v9772, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v9775 = stdlib.Array_set(v9769, '0', v9771);
        const v9776 = stdlib.Array_set(v9768, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '1'), v9775);
        ;
        const v9777 = v9776[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '2')];
        const v9778 = v9777[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0')];
        const v9779 = stdlib.add(v9778, v9606);
        const v9780 = stdlib.le(v9779, stdlib.UInt_max);
        stdlib.assert(v9780, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v9783 = stdlib.Array_set(v9777, '0', v9779);
        const v9784 = stdlib.Array_set(v9776, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '2'), v9783);
        ;
        const v10027 = v9784[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v10028 = v10027[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v10029 = v9784[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v10030 = v10029[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v10031 = v9784[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v10032 = v10031[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        null;
        const v10035 = 'Successfully restocked coins';
        stdlib.protect(ctc7, await interact.log(v10035), {
          at: './src/contracts/coin_shop.rsh:242:39:application',
          fs: ['at ./src/contracts/coin_shop.rsh:242:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:242:39:function exp)', 'at ./src/contracts/coin_shop.rsh:242:39:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:242:39:application)', 'at ./src/contracts/coin_shop.rsh:238:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:238:27:function exp)'],
          msg: 'log',
          who: 'Admin'
          });
        
        const v10036 = true;
        await txn4.getOutput('controller_api_restock', 'v10036', ctc6, v10036);
        const cv6931 = v6931;
        const cv6932 = v6932;
        const cv6933 = v6933;
        const cv6934 = v7524;
        const cv6940 = v9784;
        const cv6941 = v6941;
        
        v6931 = cv6931;
        v6932 = cv6932;
        v6933 = cv6933;
        v6934 = cv6934;
        v6940 = cv6940;
        v6941 = cv6941;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_set_prices0_179': {
        const v10190 = v7523[1];
        undefined /* setApiDetails */;
        const v10297 = stdlib.addressEq(v7522, v6913);
        stdlib.assert(v10297, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:251:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:250:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:50:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:50:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'action not authorized',
          who: 'Admin'
          });
        const v10425 = stdlib.le(v6941, stdlib.UInt_max);
        stdlib.assert(v10425, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v10430 = stdlib.le(v6975, stdlib.UInt_max);
        stdlib.assert(v10430, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v10438 = stdlib.le(v6977, stdlib.UInt_max);
        stdlib.assert(v10438, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v10446 = stdlib.le(v6979, stdlib.UInt_max);
        stdlib.assert(v10446, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v10714 = v10190[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:250:14:spread', stdlib.UInt_max, '0')];
        const v10718 = v10714[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '0')];
        const v10719 = v10714[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '1')];
        const v10720 = v10714[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '2')];
        null;
        const v10722 = 'Successfully changed coin prices';
        stdlib.protect(ctc7, await interact.log(v10722), {
          at: './src/contracts/coin_shop.rsh:259:39:application',
          fs: ['at ./src/contracts/coin_shop.rsh:259:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:259:39:function exp)', 'at ./src/contracts/coin_shop.rsh:259:39:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:259:39:application)', 'at ./src/contracts/coin_shop.rsh:255:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:255:27:function exp)'],
          msg: 'log',
          who: 'Admin'
          });
        
        const v10723 = true;
        await txn4.getOutput('controller_api_set_prices', 'v10723', ctc6, v10723);
        const cv6931 = v10714;
        const cv6932 = v6932;
        const cv6933 = v6933;
        const cv6934 = v7524;
        const cv6940 = v6940;
        const cv6941 = v6941;
        
        v6931 = cv6931;
        v6932 = cv6932;
        v6933 = cv6933;
        v6934 = cv6934;
        v6940 = cv6940;
        v6941 = cv6941;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_terminate0_179': {
        const v10856 = v7523[1];
        undefined /* setApiDetails */;
        const v10982 = stdlib.addressEq(v7522, v6913);
        stdlib.assert(v10982, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:310:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:309:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:309:40:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:309:40:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'action not authorized',
          who: 'Admin'
          });
        const v11091 = stdlib.le(v6941, stdlib.UInt_max);
        stdlib.assert(v11091, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v11096 = stdlib.le(v6975, stdlib.UInt_max);
        stdlib.assert(v11096, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v11104 = stdlib.le(v6977, stdlib.UInt_max);
        stdlib.assert(v11104, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v11112 = stdlib.le(v6979, stdlib.UInt_max);
        stdlib.assert(v11112, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v11404 = 'Terminating Contract Execution';
        stdlib.protect(ctc7, await interact.log(v11404), {
          at: './src/contracts/coin_shop.rsh:315:39:application',
          fs: ['at ./src/contracts/coin_shop.rsh:315:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:315:39:function exp)', 'at ./src/contracts/coin_shop.rsh:315:39:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:315:39:application)', 'at ./src/contracts/coin_shop.rsh:314:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:314:27:function exp)'],
          msg: 'log',
          who: 'Admin'
          });
        
        const v11405 = true;
        null;
        const v11406 = true;
        await txn4.getOutput('controller_api_terminate', 'v11406', ctc6, v11406);
        const cv6931 = v6931;
        const cv6932 = v6932;
        const cv6933 = true;
        const cv6934 = v7524;
        const cv6940 = v6940;
        const cv6941 = v6941;
        
        v6931 = cv6931;
        v6932 = cv6932;
        v6933 = cv6933;
        v6934 = cv6934;
        v6940 = cv6940;
        v6941 = cv6941;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_toggle_pause0_179': {
        const v11522 = v7523[1];
        undefined /* setApiDetails */;
        const v11667 = stdlib.addressEq(v7522, v6913);
        stdlib.assert(v11667, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:268:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:267:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:267:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:267:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'action not authorized',
          who: 'Admin'
          });
        const v11757 = stdlib.le(v6941, stdlib.UInt_max);
        stdlib.assert(v11757, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v11762 = stdlib.le(v6975, stdlib.UInt_max);
        stdlib.assert(v11762, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v11770 = stdlib.le(v6977, stdlib.UInt_max);
        stdlib.assert(v11770, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v11778 = stdlib.le(v6979, stdlib.UInt_max);
        stdlib.assert(v11778, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v12082 = 'Resuming Contract APIs        ';
        const v12083 = 'Pausing Contract APIs         ';
        const v12084 = v6932 ? v12082 : v12083;
        stdlib.protect(ctc7, await interact.log(v12084), {
          at: './src/contracts/coin_shop.rsh:277:39:application',
          fs: ['at ./src/contracts/coin_shop.rsh:277:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:277:39:function exp)', 'at ./src/contracts/coin_shop.rsh:277:39:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:277:39:application)', 'at ./src/contracts/coin_shop.rsh:272:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:272:27:function exp)'],
          msg: 'log',
          who: 'Admin'
          });
        
        await txn4.getOutput('controller_api_toggle_pause', 'v6971', ctc6, v6971);
        const cv6931 = v6931;
        const cv6932 = v6971;
        const cv6933 = v6933;
        const cv6934 = v7524;
        const cv6940 = v6940;
        const cv6941 = v6941;
        
        v6931 = cv6931;
        v6932 = cv6932;
        v6933 = cv6933;
        v6934 = cv6934;
        v6940 = cv6940;
        v6941 = cv6941;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_withdraw0_179': {
        const v12188 = v7523[1];
        undefined /* setApiDetails */;
        const v12352 = v12188[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:287:14:spread', stdlib.UInt_max, '0')];
        const v12353 = stdlib.addressEq(v7522, v6913);
        stdlib.assert(v12353, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:288:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:287:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'action not authorized',
          who: 'Admin'
          });
        const v12355 = v12352[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:290:41:array ref', stdlib.UInt_max, '0')];
        const v12358 = stdlib.ge(v6975, v12355);
        stdlib.assert(v12358, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:290:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:287:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'balance insufficient for transaction',
          who: 'Admin'
          });
        const v12360 = v12352[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:291:41:array ref', stdlib.UInt_max, '1')];
        const v12363 = stdlib.ge(v6977, v12360);
        stdlib.assert(v12363, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:291:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:287:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'balance insufficient for transaction',
          who: 'Admin'
          });
        const v12365 = v12352[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:292:41:array ref', stdlib.UInt_max, '2')];
        const v12368 = stdlib.ge(v6979, v12365);
        stdlib.assert(v12368, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:292:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:287:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'balance insufficient for transaction',
          who: 'Admin'
          });
        const v12423 = stdlib.le(v6941, stdlib.UInt_max);
        stdlib.assert(v12423, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v12428 = stdlib.le(v6975, stdlib.UInt_max);
        stdlib.assert(v12428, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v12436 = stdlib.le(v6977, stdlib.UInt_max);
        stdlib.assert(v12436, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v12444 = stdlib.le(v6979, stdlib.UInt_max);
        stdlib.assert(v12444, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v12781 = 'Withdrawing coins from contract';
        stdlib.protect(ctc7, await interact.log(v12781), {
          at: './src/contracts/coin_shop.rsh:297:39:application',
          fs: ['at ./src/contracts/coin_shop.rsh:297:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:297:39:function exp)', 'at ./src/contracts/coin_shop.rsh:297:39:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:297:39:application)', 'at ./src/contracts/coin_shop.rsh:296:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:296:27:function exp)'],
          msg: 'log',
          who: 'Admin'
          });
        
        const v12812 = stdlib.sub(v6975, v12355);
        const v12813 = stdlib.ge(v12812, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v12813, {
          at: './src/contracts/coin_shop.rsh:299:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:296:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:296:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v12816 = stdlib.Array_set(v6974, '0', v12812);
        const v12817 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '0'), v12816);
        ;
        const v12818 = v12817[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '1')];
        const v12819 = v12818[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '0')];
        const v12823 = stdlib.sub(v12819, v12360);
        const v12824 = stdlib.ge(v12823, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v12824, {
          at: './src/contracts/coin_shop.rsh:299:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:296:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:296:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v12827 = stdlib.Array_set(v12818, '0', v12823);
        const v12828 = stdlib.Array_set(v12817, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '1'), v12827);
        ;
        const v12829 = v12828[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '2')];
        const v12830 = v12829[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '0')];
        const v12834 = stdlib.sub(v12830, v12365);
        const v12835 = stdlib.ge(v12834, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v12835, {
          at: './src/contracts/coin_shop.rsh:299:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:296:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:296:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v12838 = stdlib.Array_set(v12829, '0', v12834);
        const v12839 = stdlib.Array_set(v12828, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '2'), v12838);
        ;
        null;
        const v12843 = true;
        await txn4.getOutput('controller_api_withdraw', 'v12843', ctc6, v12843);
        const cv6931 = v6931;
        const cv6932 = v6932;
        const cv6933 = v6933;
        const cv6934 = v7524;
        const cv6940 = v12839;
        const cv6941 = v6941;
        
        v6931 = cv6931;
        v6932 = cv6932;
        v6933 = cv6933;
        v6934 = cv6934;
        v6940 = cv6940;
        v6941 = cv6941;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v12857 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
  const v12858 = v12857[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
  const v12859 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
  const v12860 = v12859[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
  const v12861 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
  const v12862 = v12861[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
  const v12863 = [v12858, v12860, v12862];
  const txn4 = await (ctc.sendrecv({
    args: [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6940, v6941, v12857, v12858, v12860, v12862, v12863],
    evt_cnt: 0,
    funcNum: 3,
    lct: v6934,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v12876, time: v12875, didSend: v6276, from: v12874 } = txn4;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v6913,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v6913,
        tok: v6889
        });
      sim_r.txns.push({
        kind: 'from',
        to: v6913,
        tok: v6890
        });
      sim_r.txns.push({
        kind: 'from',
        to: v6913,
        tok: v6891
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v6891
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v6890
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v6889
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
  const {data: [], secs: v12876, time: v12875, didSend: v6276, from: v12874 } = txn4;
  ;
  const v12877 = stdlib.addressEq(v6913, v12874);
  const v12878 = stdlib.addressEq(v6888, v12874);
  const v12879 = v12877 ? true : v12878;
  stdlib.assert(v12879, {
    at: 'reach standard library:197:11:dot',
    fs: ['at ./src/contracts/coin_shop.rsh:327:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v12902 = stdlib.sub(v6941, v6941);
  const v12903 = stdlib.ge(v12902, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
  stdlib.assert(v12903, {
    at: 'reach standard library:198:46:application',
    fs: ['at ./src/contracts/coin_shop.rsh:327:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v12910 = stdlib.sub(v12858, v12858);
  const v12911 = stdlib.ge(v12910, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
  stdlib.assert(v12911, {
    at: 'reach standard library:198:46:application',
    fs: ['at ./src/contracts/coin_shop.rsh:327:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v12914 = stdlib.Array_set(v12857, '0', v12910);
  const v12915 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'), v12914);
  ;
  const v12916 = v12915[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '1')];
  const v12917 = v12916[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0')];
  const v12921 = stdlib.sub(v12917, v12860);
  const v12922 = stdlib.ge(v12921, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
  stdlib.assert(v12922, {
    at: 'reach standard library:198:46:application',
    fs: ['at ./src/contracts/coin_shop.rsh:327:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v12925 = stdlib.Array_set(v12916, '0', v12921);
  const v12926 = stdlib.Array_set(v12915, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '1'), v12925);
  ;
  const v12927 = v12926[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '2')];
  const v12928 = v12927[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0')];
  const v12932 = stdlib.sub(v12928, v12862);
  const v12933 = stdlib.ge(v12932, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
  stdlib.assert(v12933, {
    at: 'reach standard library:198:46:application',
    fs: ['at ./src/contracts/coin_shop.rsh:327:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v12951 = 'Closing contract...';
  stdlib.protect(ctc7, await interact.log(v12951), {
    at: './src/contracts/coin_shop.rsh:330:31:application',
    fs: ['at ./src/contracts/coin_shop.rsh:330:31:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:330:31:function exp)', 'at ./src/contracts/coin_shop.rsh:330:31:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:330:31:application)', 'at reach standard library:200:8:application call to "after" (defined at: ./src/contracts/coin_shop.rsh:329:12:function exp)', 'at ./src/contracts/coin_shop.rsh:327:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
    controller_api_withdraw0_179: ctc6
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  
  
  const v6865 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v6866 = [v6865, v6865, v6865];
  const v6870 = stdlib.protect(ctc1, interact.coin_asa_ids, 'for Deployer\'s interact field coin_asa_ids');
  const v6871 = v6870[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:57:33:application', stdlib.UInt_max, '0')];
  const v6872 = v6870[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:57:33:application', stdlib.UInt_max, '1')];
  const v6873 = v6870[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:57:33:application', stdlib.UInt_max, '2')];
  
  const v6879 = stdlib.tokenEq(v6871, v6872);
  const v6881 = stdlib.tokenEq(v6871, v6873);
  const v6882 = v6881 ? false : true;
  const v6883 = v6879 ? false : v6882;
  const v6884 = stdlib.tokenEq(v6872, v6873);
  const v6885 = v6884 ? false : true;
  const v6886 = v6883 ? v6885 : false;
  stdlib.assert(v6886, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:111:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:108:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:108:22:function exp)'],
    msg: 'Token asa ids are not all unique!',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v6871, v6872, v6873],
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
      
      
      const {data: [v6889, v6890, v6891], secs: v6893, time: v6892, didSend: v72, from: v6888 } = txn1;
      
      const v6894 = v6866[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0')];
      const v6895 = stdlib.Array_set(v6894, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'));
      const v6896 = stdlib.Array_set(v6866, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'), v6895);
      const v6898 = v6896[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '1')];
      const v6899 = stdlib.Array_set(v6898, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'));
      const v6900 = stdlib.Array_set(v6896, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '1'), v6899);
      const v6904 = v6900[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '2')];
      const v6905 = stdlib.Array_set(v6904, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'));
      const v6906 = stdlib.Array_set(v6900, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '2'), v6905);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v6889
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v6890
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v6891
        });
      ;
      const v6913 = v6888;
      const v6923 = await ctc.getContractInfo();
      const v6924 = await ctc.getContractAddress();
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v6889, v6890, v6891], secs: v6893, time: v6892, didSend: v72, from: v6888 } = txn1;
  const v6894 = v6866[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0')];
  const v6895 = stdlib.Array_set(v6894, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'));
  const v6896 = stdlib.Array_set(v6866, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'), v6895);
  const v6898 = v6896[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '1')];
  const v6899 = stdlib.Array_set(v6898, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'));
  const v6900 = stdlib.Array_set(v6896, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '1'), v6899);
  const v6902 = stdlib.tokenEq(v6890, v6889);
  const v6903 = v6902 ? false : true;
  stdlib.assert(v6903, {
    at: './src/contracts/coin_shop.rsh:116:14:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  const v6904 = v6900[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '2')];
  const v6905 = stdlib.Array_set(v6904, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '0'));
  const v6906 = stdlib.Array_set(v6900, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:116:14:dot', stdlib.UInt_max, '2'), v6905);
  const v6908 = stdlib.tokenEq(v6891, v6889);
  const v6910 = stdlib.tokenEq(v6891, v6890);
  const v6911 = v6910 ? false : true;
  const v6912 = v6908 ? false : v6911;
  stdlib.assert(v6912, {
    at: './src/contracts/coin_shop.rsh:116:14:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  ;
  ;
  ;
  ;
  const v6913 = v6888;
  const v6914 = stdlib.tokenEq(v6889, v6890);
  const v6916 = stdlib.tokenEq(v6889, v6891);
  const v6917 = v6916 ? false : true;
  const v6918 = v6914 ? false : v6917;
  const v6919 = stdlib.tokenEq(v6890, v6891);
  const v6920 = v6919 ? false : true;
  const v6921 = v6918 ? v6920 : false;
  stdlib.assert(v6921, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:122:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: null,
    who: 'Deployer'
    });
  const v6923 = await ctc.getContractInfo();
  const v6924 = await ctc.getContractAddress();
  stdlib.protect(ctc2, await interact.deployed(v6923, v6924), {
    at: './src/contracts/coin_shop.rsh:126:31:application',
    fs: ['at ./src/contracts/coin_shop.rsh:126:31:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:31:function exp)', 'at ./src/contracts/coin_shop.rsh:126:31:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:126:31:application)'],
    msg: 'deployed',
    who: 'Deployer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v6888, v6889, v6890, v6891, v6906, v6913],
    evt_cnt: 0,
    funcNum: 1,
    lct: v6892,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:128:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v6928, time: v6927, didSend: v114, from: v6926 } = txn2;
      
      ;
      const v6930 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30000000')];
      const v6931 = v6930;
      const v6932 = false;
      const v6933 = false;
      const v6934 = v6927;
      const v6940 = v6906;
      const v6941 = stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:105:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v6958 = v6933 ? false : true;
        
        return v6958;})()) {
        const v6971 = v6932 ? false : true;
        const v6972 = v6933 ? false : true;
        const v6973 = v6932 ? false : v6972;
        const v6974 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v6975 = v6974[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v6976 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v6977 = v6976[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v6978 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v6979 = v6978[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v6980 = [v6975, v6977, v6979];
        const v6982 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
        const v6983 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
        const v6984 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
        sim_r.isHalt = false;
        }
      else {
        const v12857 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v12858 = v12857[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v12859 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v12860 = v12859[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v12861 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v12862 = v12861[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v12863 = [v12858, v12860, v12862];
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc0, ctc0, ctc0, ctc11, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v6928, time: v6927, didSend: v114, from: v6926 } = txn2;
  ;
  const v6929 = stdlib.addressEq(v6888, v6926);
  stdlib.assert(v6929, {
    at: './src/contracts/coin_shop.rsh:128:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v6930 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30000000')];
  let v6931 = v6930;
  let v6932 = false;
  let v6933 = false;
  let v6934 = v6927;
  let v6940 = v6906;
  let v6941 = stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:105:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v6958 = v6933 ? false : true;
    
    return v6958;})()) {
    const v6971 = v6932 ? false : true;
    const v6972 = v6933 ? false : true;
    const v6973 = v6932 ? false : v6972;
    const v6974 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
    const v6975 = v6974[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
    const v6976 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
    const v6977 = v6976[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
    const v6978 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
    const v6979 = v6978[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
    const v6980 = [v6975, v6977, v6979];
    const v6982 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
    const v6983 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
    const v6984 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v7523], secs: v7525, time: v7524, didSend: v5580, from: v7522 } = txn4;
    switch (v7523[0]) {
      case 'buyer_api_purchase_bronze0_179': {
        const v7526 = v7523[1];
        undefined /* setApiDetails */;
        stdlib.assert(v6973, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:170:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:169:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'contract is currently inactive',
          who: 'Deployer'
          });
        const v7534 = stdlib.ge(v6975, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:171:37:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v7534, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:171:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:169:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'balance insufficient for transaction',
          who: 'Deployer'
          });
        const v7760 = stdlib.add(v6941, v6982);
        const v7761 = stdlib.le(v7760, stdlib.UInt_max);
        stdlib.assert(v7761, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v7766 = stdlib.le(v6975, stdlib.UInt_max);
        stdlib.assert(v7766, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v7774 = stdlib.le(v6977, stdlib.UInt_max);
        stdlib.assert(v7774, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v7782 = stdlib.le(v6979, stdlib.UInt_max);
        stdlib.assert(v7782, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v7819 = stdlib.sub(v7760, v7760);
        const v7820 = stdlib.ge(v7819, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:178:64:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7820, {
          at: './src/contracts/coin_shop.rsh:178:64:application',
          fs: ['at ./src/contracts/coin_shop.rsh:176:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Deployer'
          });
        ;
        const v7849 = stdlib.sub(v6975, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:44:decimal', stdlib.UInt_max, '1'));
        const v7850 = stdlib.ge(v7849, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7850, {
          at: './src/contracts/coin_shop.rsh:179:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:176:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Deployer'
          });
        const v7853 = stdlib.Array_set(v6974, '0', v7849);
        const v7854 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:56:application', stdlib.UInt_max, '0'), v7853);
        ;
        const v7855 = 'bronze';
        null;
        const v7856 = true;
        await txn4.getOutput('buyer_api_purchase_bronze', 'v7856', ctc8, v7856);
        const cv6931 = v6931;
        const cv6932 = v6932;
        const cv6933 = v6933;
        const cv6934 = v7524;
        const cv6940 = v7854;
        const cv6941 = v7819;
        
        v6931 = cv6931;
        v6932 = cv6932;
        v6933 = cv6933;
        v6934 = cv6934;
        v6940 = cv6940;
        v6941 = cv6941;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'buyer_api_purchase_gold0_179': {
        const v8192 = v7523[1];
        undefined /* setApiDetails */;
        stdlib.assert(v6973, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:210:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:209:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'contract is currently inactive',
          who: 'Deployer'
          });
        const v8223 = stdlib.ge(v6979, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:211:37:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v8223, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:211:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:209:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'balance insufficient for transaction',
          who: 'Deployer'
          });
        const v8426 = stdlib.add(v6941, v6984);
        const v8427 = stdlib.le(v8426, stdlib.UInt_max);
        stdlib.assert(v8427, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v8432 = stdlib.le(v6975, stdlib.UInt_max);
        stdlib.assert(v8432, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v8440 = stdlib.le(v6977, stdlib.UInt_max);
        stdlib.assert(v8440, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v8448 = stdlib.le(v6979, stdlib.UInt_max);
        stdlib.assert(v8448, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v8561 = stdlib.sub(v8426, v8426);
        const v8562 = stdlib.ge(v8561, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:218:64:application', stdlib.UInt_max, '0'));
        stdlib.assert(v8562, {
          at: './src/contracts/coin_shop.rsh:218:64:application',
          fs: ['at ./src/contracts/coin_shop.rsh:216:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:216:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Deployer'
          });
        ;
        const v8591 = stdlib.sub(v6979, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:50:decimal', stdlib.UInt_max, '1'));
        const v8592 = stdlib.ge(v8591, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v8592, {
          at: './src/contracts/coin_shop.rsh:219:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:216:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:216:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Deployer'
          });
        const v8595 = stdlib.Array_set(v6978, '0', v8591);
        const v8596 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:56:application', stdlib.UInt_max, '2'), v8595);
        ;
        const v8597 = 'gold  ';
        null;
        const v8598 = true;
        await txn4.getOutput('buyer_api_purchase_gold', 'v8598', ctc8, v8598);
        const cv6931 = v6931;
        const cv6932 = v6932;
        const cv6933 = v6933;
        const cv6934 = v7524;
        const cv6940 = v8596;
        const cv6941 = v8561;
        
        v6931 = cv6931;
        v6932 = cv6932;
        v6933 = cv6933;
        v6934 = cv6934;
        v6940 = cv6940;
        v6941 = cv6941;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'buyer_api_purchase_silver0_179': {
        const v8858 = v7523[1];
        undefined /* setApiDetails */;
        stdlib.assert(v6973, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:190:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:189:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'contract is currently inactive',
          who: 'Deployer'
          });
        const v8912 = stdlib.ge(v6977, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:191:37:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v8912, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:191:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:189:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'balance insufficient for transaction',
          who: 'Deployer'
          });
        const v9092 = stdlib.add(v6941, v6983);
        const v9093 = stdlib.le(v9092, stdlib.UInt_max);
        stdlib.assert(v9093, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v9098 = stdlib.le(v6975, stdlib.UInt_max);
        stdlib.assert(v9098, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v9106 = stdlib.le(v6977, stdlib.UInt_max);
        stdlib.assert(v9106, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v9114 = stdlib.le(v6979, stdlib.UInt_max);
        stdlib.assert(v9114, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v9303 = stdlib.sub(v9092, v9092);
        const v9304 = stdlib.ge(v9303, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:198:64:application', stdlib.UInt_max, '0'));
        stdlib.assert(v9304, {
          at: './src/contracts/coin_shop.rsh:198:64:application',
          fs: ['at ./src/contracts/coin_shop.rsh:196:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Deployer'
          });
        ;
        const v9333 = stdlib.sub(v6977, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:47:decimal', stdlib.UInt_max, '1'));
        const v9334 = stdlib.ge(v9333, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v9334, {
          at: './src/contracts/coin_shop.rsh:199:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:196:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Deployer'
          });
        const v9337 = stdlib.Array_set(v6976, '0', v9333);
        const v9338 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:56:application', stdlib.UInt_max, '1'), v9337);
        ;
        const v9339 = 'silver';
        null;
        const v9340 = true;
        await txn4.getOutput('buyer_api_purchase_silver', 'v9340', ctc8, v9340);
        const cv6931 = v6931;
        const cv6932 = v6932;
        const cv6933 = v6933;
        const cv6934 = v7524;
        const cv6940 = v9338;
        const cv6941 = v9303;
        
        v6931 = cv6931;
        v6932 = cv6932;
        v6933 = cv6933;
        v6934 = cv6934;
        v6940 = cv6940;
        v6941 = cv6941;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_restock0_179': {
        const v9524 = v7523[1];
        undefined /* setApiDetails */;
        const v9598 = v9524[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:232:14:spread', stdlib.UInt_max, '0')];
        const v9599 = stdlib.addressEq(v7522, v6913);
        stdlib.assert(v9599, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:233:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:232:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'action not authorized',
          who: 'Deployer'
          });
        const v9601 = v9598[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:9:array ref', stdlib.UInt_max, '0')];
        const v9602 = stdlib.le(v9601, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:29:decimal', stdlib.UInt_max, '1200'));
        const v9603 = v9598[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:33:array ref', stdlib.UInt_max, '1')];
        const v9604 = stdlib.le(v9603, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:35:decimal', stdlib.UInt_max, '600'));
        const v9605 = v9602 ? v9604 : false;
        const v9606 = v9598[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:57:array ref', stdlib.UInt_max, '2')];
        const v9607 = stdlib.le(v9606, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:40:decimal', stdlib.UInt_max, '200'));
        const v9608 = v9605 ? v9607 : false;
        stdlib.assert(v9608, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:234:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:232:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'illegal param(s) were provided',
          who: 'Deployer'
          });
        const v9759 = stdlib.le(v6941, stdlib.UInt_max);
        stdlib.assert(v9759, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v9763 = stdlib.add(v6975, v9601);
        const v9764 = stdlib.le(v9763, stdlib.UInt_max);
        stdlib.assert(v9764, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        const v9767 = stdlib.Array_set(v6974, '0', v9763);
        const v9768 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0'), v9767);
        ;
        const v9769 = v9768[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '1')];
        const v9770 = v9769[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0')];
        const v9771 = stdlib.add(v9770, v9603);
        const v9772 = stdlib.le(v9771, stdlib.UInt_max);
        stdlib.assert(v9772, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        const v9775 = stdlib.Array_set(v9769, '0', v9771);
        const v9776 = stdlib.Array_set(v9768, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '1'), v9775);
        ;
        const v9777 = v9776[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '2')];
        const v9778 = v9777[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0')];
        const v9779 = stdlib.add(v9778, v9606);
        const v9780 = stdlib.le(v9779, stdlib.UInt_max);
        stdlib.assert(v9780, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        const v9783 = stdlib.Array_set(v9777, '0', v9779);
        const v9784 = stdlib.Array_set(v9776, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '2'), v9783);
        ;
        const v10027 = v9784[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v10028 = v10027[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v10029 = v9784[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v10030 = v10029[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v10031 = v9784[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v10032 = v10031[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        null;
        const v10036 = true;
        await txn4.getOutput('controller_api_restock', 'v10036', ctc8, v10036);
        const cv6931 = v6931;
        const cv6932 = v6932;
        const cv6933 = v6933;
        const cv6934 = v7524;
        const cv6940 = v9784;
        const cv6941 = v6941;
        
        v6931 = cv6931;
        v6932 = cv6932;
        v6933 = cv6933;
        v6934 = cv6934;
        v6940 = cv6940;
        v6941 = cv6941;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_set_prices0_179': {
        const v10190 = v7523[1];
        undefined /* setApiDetails */;
        const v10297 = stdlib.addressEq(v7522, v6913);
        stdlib.assert(v10297, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:251:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:250:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:50:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:50:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'action not authorized',
          who: 'Deployer'
          });
        const v10425 = stdlib.le(v6941, stdlib.UInt_max);
        stdlib.assert(v10425, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v10430 = stdlib.le(v6975, stdlib.UInt_max);
        stdlib.assert(v10430, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v10438 = stdlib.le(v6977, stdlib.UInt_max);
        stdlib.assert(v10438, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v10446 = stdlib.le(v6979, stdlib.UInt_max);
        stdlib.assert(v10446, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v10714 = v10190[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:250:14:spread', stdlib.UInt_max, '0')];
        const v10718 = v10714[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '0')];
        const v10719 = v10714[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '1')];
        const v10720 = v10714[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '2')];
        null;
        const v10723 = true;
        await txn4.getOutput('controller_api_set_prices', 'v10723', ctc8, v10723);
        const cv6931 = v10714;
        const cv6932 = v6932;
        const cv6933 = v6933;
        const cv6934 = v7524;
        const cv6940 = v6940;
        const cv6941 = v6941;
        
        v6931 = cv6931;
        v6932 = cv6932;
        v6933 = cv6933;
        v6934 = cv6934;
        v6940 = cv6940;
        v6941 = cv6941;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_terminate0_179': {
        const v10856 = v7523[1];
        undefined /* setApiDetails */;
        const v10982 = stdlib.addressEq(v7522, v6913);
        stdlib.assert(v10982, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:310:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:309:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:309:40:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:309:40:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'action not authorized',
          who: 'Deployer'
          });
        const v11091 = stdlib.le(v6941, stdlib.UInt_max);
        stdlib.assert(v11091, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v11096 = stdlib.le(v6975, stdlib.UInt_max);
        stdlib.assert(v11096, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v11104 = stdlib.le(v6977, stdlib.UInt_max);
        stdlib.assert(v11104, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v11112 = stdlib.le(v6979, stdlib.UInt_max);
        stdlib.assert(v11112, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v11405 = true;
        null;
        const v11406 = true;
        await txn4.getOutput('controller_api_terminate', 'v11406', ctc8, v11406);
        const cv6931 = v6931;
        const cv6932 = v6932;
        const cv6933 = true;
        const cv6934 = v7524;
        const cv6940 = v6940;
        const cv6941 = v6941;
        
        v6931 = cv6931;
        v6932 = cv6932;
        v6933 = cv6933;
        v6934 = cv6934;
        v6940 = cv6940;
        v6941 = cv6941;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_toggle_pause0_179': {
        const v11522 = v7523[1];
        undefined /* setApiDetails */;
        const v11667 = stdlib.addressEq(v7522, v6913);
        stdlib.assert(v11667, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:268:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:267:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:267:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:267:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'action not authorized',
          who: 'Deployer'
          });
        const v11757 = stdlib.le(v6941, stdlib.UInt_max);
        stdlib.assert(v11757, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v11762 = stdlib.le(v6975, stdlib.UInt_max);
        stdlib.assert(v11762, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v11770 = stdlib.le(v6977, stdlib.UInt_max);
        stdlib.assert(v11770, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v11778 = stdlib.le(v6979, stdlib.UInt_max);
        stdlib.assert(v11778, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        await txn4.getOutput('controller_api_toggle_pause', 'v6971', ctc8, v6971);
        const cv6931 = v6931;
        const cv6932 = v6971;
        const cv6933 = v6933;
        const cv6934 = v7524;
        const cv6940 = v6940;
        const cv6941 = v6941;
        
        v6931 = cv6931;
        v6932 = cv6932;
        v6933 = cv6933;
        v6934 = cv6934;
        v6940 = cv6940;
        v6941 = cv6941;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_withdraw0_179': {
        const v12188 = v7523[1];
        undefined /* setApiDetails */;
        const v12352 = v12188[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:287:14:spread', stdlib.UInt_max, '0')];
        const v12353 = stdlib.addressEq(v7522, v6913);
        stdlib.assert(v12353, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:288:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:287:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'action not authorized',
          who: 'Deployer'
          });
        const v12355 = v12352[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:290:41:array ref', stdlib.UInt_max, '0')];
        const v12358 = stdlib.ge(v6975, v12355);
        stdlib.assert(v12358, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:290:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:287:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'balance insufficient for transaction',
          who: 'Deployer'
          });
        const v12360 = v12352[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:291:41:array ref', stdlib.UInt_max, '1')];
        const v12363 = stdlib.ge(v6977, v12360);
        stdlib.assert(v12363, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:291:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:287:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'balance insufficient for transaction',
          who: 'Deployer'
          });
        const v12365 = v12352[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:292:41:array ref', stdlib.UInt_max, '2')];
        const v12368 = stdlib.ge(v6979, v12365);
        stdlib.assert(v12368, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:292:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:287:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
          msg: 'balance insufficient for transaction',
          who: 'Deployer'
          });
        const v12423 = stdlib.le(v6941, stdlib.UInt_max);
        stdlib.assert(v12423, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v12428 = stdlib.le(v6975, stdlib.UInt_max);
        stdlib.assert(v12428, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v12436 = stdlib.le(v6977, stdlib.UInt_max);
        stdlib.assert(v12436, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v12444 = stdlib.le(v6979, stdlib.UInt_max);
        stdlib.assert(v12444, {
          at: './src/contracts/coin_shop.rsh:131:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Deployer'
          });
        ;
        const v12812 = stdlib.sub(v6975, v12355);
        const v12813 = stdlib.ge(v12812, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v12813, {
          at: './src/contracts/coin_shop.rsh:299:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:296:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:296:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Deployer'
          });
        const v12816 = stdlib.Array_set(v6974, '0', v12812);
        const v12817 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '0'), v12816);
        ;
        const v12818 = v12817[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '1')];
        const v12819 = v12818[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '0')];
        const v12823 = stdlib.sub(v12819, v12360);
        const v12824 = stdlib.ge(v12823, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v12824, {
          at: './src/contracts/coin_shop.rsh:299:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:296:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:296:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Deployer'
          });
        const v12827 = stdlib.Array_set(v12818, '0', v12823);
        const v12828 = stdlib.Array_set(v12817, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '1'), v12827);
        ;
        const v12829 = v12828[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '2')];
        const v12830 = v12829[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '0')];
        const v12834 = stdlib.sub(v12830, v12365);
        const v12835 = stdlib.ge(v12834, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v12835, {
          at: './src/contracts/coin_shop.rsh:299:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:296:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:296:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Deployer'
          });
        const v12838 = stdlib.Array_set(v12829, '0', v12834);
        const v12839 = stdlib.Array_set(v12828, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '2'), v12838);
        ;
        null;
        const v12843 = true;
        await txn4.getOutput('controller_api_withdraw', 'v12843', ctc8, v12843);
        const cv6931 = v6931;
        const cv6932 = v6932;
        const cv6933 = v6933;
        const cv6934 = v7524;
        const cv6940 = v12839;
        const cv6941 = v6941;
        
        v6931 = cv6931;
        v6932 = cv6932;
        v6933 = cv6933;
        v6934 = cv6934;
        v6940 = cv6940;
        v6941 = cv6941;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v12857 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
  const v12858 = v12857[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
  const v12859 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
  const v12860 = v12859[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
  const v12861 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
  const v12862 = v12861[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
  const v12863 = [v12858, v12860, v12862];
  const txn4 = await (ctc.sendrecv({
    args: [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6940, v6941, v12857, v12858, v12860, v12862, v12863],
    evt_cnt: 0,
    funcNum: 3,
    lct: v6934,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v12876, time: v12875, didSend: v6276, from: v12874 } = txn4;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v6913,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v6913,
        tok: v6889
        });
      sim_r.txns.push({
        kind: 'from',
        to: v6913,
        tok: v6890
        });
      sim_r.txns.push({
        kind: 'from',
        to: v6913,
        tok: v6891
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v6891
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v6890
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v6889
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
  const {data: [], secs: v12876, time: v12875, didSend: v6276, from: v12874 } = txn4;
  ;
  const v12877 = stdlib.addressEq(v6913, v12874);
  const v12878 = stdlib.addressEq(v6888, v12874);
  const v12879 = v12877 ? true : v12878;
  stdlib.assert(v12879, {
    at: 'reach standard library:197:11:dot',
    fs: ['at ./src/contracts/coin_shop.rsh:327:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const v12902 = stdlib.sub(v6941, v6941);
  const v12903 = stdlib.ge(v12902, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
  stdlib.assert(v12903, {
    at: 'reach standard library:198:46:application',
    fs: ['at ./src/contracts/coin_shop.rsh:327:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'assume >= 0',
    who: 'Deployer'
    });
  ;
  const v12910 = stdlib.sub(v12858, v12858);
  const v12911 = stdlib.ge(v12910, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
  stdlib.assert(v12911, {
    at: 'reach standard library:198:46:application',
    fs: ['at ./src/contracts/coin_shop.rsh:327:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'assume >= 0',
    who: 'Deployer'
    });
  const v12914 = stdlib.Array_set(v12857, '0', v12910);
  const v12915 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'), v12914);
  ;
  const v12916 = v12915[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '1')];
  const v12917 = v12916[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0')];
  const v12921 = stdlib.sub(v12917, v12860);
  const v12922 = stdlib.ge(v12921, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
  stdlib.assert(v12922, {
    at: 'reach standard library:198:46:application',
    fs: ['at ./src/contracts/coin_shop.rsh:327:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'assume >= 0',
    who: 'Deployer'
    });
  const v12925 = stdlib.Array_set(v12916, '0', v12921);
  const v12926 = stdlib.Array_set(v12915, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '1'), v12925);
  ;
  const v12927 = v12926[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '2')];
  const v12928 = v12927[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0')];
  const v12932 = stdlib.sub(v12928, v12862);
  const v12933 = stdlib.ge(v12932, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
  stdlib.assert(v12933, {
    at: 'reach standard library:198:46:application',
    fs: ['at ./src/contracts/coin_shop.rsh:327:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
    controller_api_withdraw0_179: ctc8
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6933, v6940, v6941, v6971, v6973, v6974, v6975, v6976, v6977, v6978, v6979, v6980, v6982, v6983, v6984] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v6987 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:169:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runbuyer_api_purchase_bronze0_179" (defined at: ./src/contracts/coin_shop.rsh:169:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'in',
    who: 'buyer_api_purchase_bronze'
    });
  stdlib.assert(v6973, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:170:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:169:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runbuyer_api_purchase_bronze0_179" (defined at: ./src/contracts/coin_shop.rsh:169:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'contract is currently inactive',
    who: 'buyer_api_purchase_bronze'
    });
  const v6991 = stdlib.ge(v6975, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:171:37:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v6991, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:171:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:169:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runbuyer_api_purchase_bronze0_179" (defined at: ./src/contracts/coin_shop.rsh:169:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'balance insufficient for transaction',
    who: 'buyer_api_purchase_bronze'
    });
  const v6996 = ['buyer_api_purchase_bronze0_179', v6987];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6933, v6940, v6941, v6971, v6973, v6974, v6975, v6976, v6977, v6978, v6979, v6980, v6982, v6983, v6984, v6996],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v6982, [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:175:43:decimal', stdlib.UInt_max, '0'), v6889], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:175:46:decimal', stdlib.UInt_max, '0'), v6890], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:175:49:decimal', stdlib.UInt_max, '0'), v6891]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v7523], secs: v7525, time: v7524, didSend: v5580, from: v7522 } = txn1;
      
      switch (v7523[0]) {
        case 'buyer_api_purchase_bronze0_179': {
          const v7526 = v7523[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buyer_api_purchase_bronze"
            });
          const v7760 = stdlib.add(v6941, v6982);
          sim_r.txns.push({
            amt: v6982,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          ;
          ;
          const v7819 = stdlib.sub(v7760, v7760);
          sim_r.txns.push({
            kind: 'from',
            to: v6913,
            tok: undefined /* Nothing */
            });
          const v7849 = stdlib.sub(v6975, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:44:decimal', stdlib.UInt_max, '1'));
          const v7853 = stdlib.Array_set(v6974, '0', v7849);
          const v7854 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:56:application', stdlib.UInt_max, '0'), v7853);
          sim_r.txns.push({
            kind: 'from',
            to: v7522,
            tok: v6889
            });
          const v7855 = 'bronze';
          null;
          const v7856 = true;
          const v7857 = await txn1.getOutput('buyer_api_purchase_bronze', 'v7856', ctc4, v7856);
          
          const v15396 = v6931;
          const v15397 = v6932;
          const v15398 = v6933;
          const v15400 = v7854;
          const v15401 = v7819;
          const v15402 = v6933 ? false : true;
          if (v6933) {
            const v15416 = v7854[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v15417 = v15416[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v15418 = v7854[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v15419 = v15418[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v15420 = v7854[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v15421 = v15420[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v15422 = [v15417, v15419, v15421];
            sim_r.isHalt = false;
            }
          else {
            const v15403 = v6932 ? false : true;
            const v15405 = v6932 ? false : v15402;
            const v15406 = v7854[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v15407 = v15406[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v15408 = v7854[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v15409 = v15408[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v15410 = v7854[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v15411 = v15410[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v15412 = [v15407, v15409, v15411];
            const v15413 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
            const v15414 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
            const v15415 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'buyer_api_purchase_gold0_179': {
          const v8192 = v7523[1];
          
          break;
          }
        case 'buyer_api_purchase_silver0_179': {
          const v8858 = v7523[1];
          
          break;
          }
        case 'controller_api_restock0_179': {
          const v9524 = v7523[1];
          
          break;
          }
        case 'controller_api_set_prices0_179': {
          const v10190 = v7523[1];
          
          break;
          }
        case 'controller_api_terminate0_179': {
          const v10856 = v7523[1];
          
          break;
          }
        case 'controller_api_toggle_pause0_179': {
          const v11522 = v7523[1];
          
          break;
          }
        case 'controller_api_withdraw0_179': {
          const v12188 = v7523[1];
          
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
  const {data: [v7523], secs: v7525, time: v7524, didSend: v5580, from: v7522 } = txn1;
  switch (v7523[0]) {
    case 'buyer_api_purchase_bronze0_179': {
      const v7526 = v7523[1];
      undefined /* setApiDetails */;
      stdlib.assert(v6973, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:170:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:169:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'contract is currently inactive',
        who: 'buyer_api_purchase_bronze'
        });
      const v7534 = stdlib.ge(v6975, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:171:37:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v7534, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:171:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:169:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'balance insufficient for transaction',
        who: 'buyer_api_purchase_bronze'
        });
      const v7760 = stdlib.add(v6941, v6982);
      const v7761 = stdlib.le(v7760, stdlib.UInt_max);
      stdlib.assert(v7761, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_bronze'
        });
      ;
      const v7766 = stdlib.le(v6975, stdlib.UInt_max);
      stdlib.assert(v7766, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_bronze'
        });
      ;
      const v7774 = stdlib.le(v6977, stdlib.UInt_max);
      stdlib.assert(v7774, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_bronze'
        });
      ;
      const v7782 = stdlib.le(v6979, stdlib.UInt_max);
      stdlib.assert(v7782, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_bronze'
        });
      ;
      const v7819 = stdlib.sub(v7760, v7760);
      const v7820 = stdlib.ge(v7819, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:178:64:application', stdlib.UInt_max, '0'));
      stdlib.assert(v7820, {
        at: './src/contracts/coin_shop.rsh:178:64:application',
        fs: ['at ./src/contracts/coin_shop.rsh:176:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:27:function exp)'],
        msg: 'assume >= 0',
        who: 'buyer_api_purchase_bronze'
        });
      ;
      const v7849 = stdlib.sub(v6975, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:44:decimal', stdlib.UInt_max, '1'));
      const v7850 = stdlib.ge(v7849, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:56:application', stdlib.UInt_max, '0'));
      stdlib.assert(v7850, {
        at: './src/contracts/coin_shop.rsh:179:56:application',
        fs: ['at ./src/contracts/coin_shop.rsh:176:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:27:function exp)'],
        msg: 'assume >= 0',
        who: 'buyer_api_purchase_bronze'
        });
      const v7853 = stdlib.Array_set(v6974, '0', v7849);
      const v7854 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:179:56:application', stdlib.UInt_max, '0'), v7853);
      ;
      const v7855 = 'bronze';
      null;
      const v7856 = true;
      const v7857 = await txn1.getOutput('buyer_api_purchase_bronze', 'v7856', ctc4, v7856);
      if (v5580) {
        stdlib.protect(ctc10, await interact.out(v7526, v7857), {
          at: './src/contracts/coin_shop.rsh:169:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:169:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:169:15:function exp)', 'at ./src/contracts/coin_shop.rsh:183:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:176:27:function exp)', 'at ./src/contracts/coin_shop.rsh:176:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:176:27:function exp)'],
          msg: 'out',
          who: 'buyer_api_purchase_bronze'
          });
        }
      else {
        }
      
      const v15396 = v6931;
      const v15397 = v6932;
      const v15398 = v6933;
      const v15400 = v7854;
      const v15401 = v7819;
      const v15402 = v6933 ? false : true;
      if (v6933) {
        const v15416 = v7854[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v15417 = v15416[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v15418 = v7854[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v15419 = v15418[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v15420 = v7854[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v15421 = v15420[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v15422 = [v15417, v15419, v15421];
        return;
        }
      else {
        const v15403 = v6932 ? false : true;
        const v15405 = v6932 ? false : v15402;
        const v15406 = v7854[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v15407 = v15406[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v15408 = v7854[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v15409 = v15408[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v15410 = v7854[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v15411 = v15410[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v15412 = [v15407, v15409, v15411];
        const v15413 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
        const v15414 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
        const v15415 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
        return;
        }
      break;
      }
    case 'buyer_api_purchase_gold0_179': {
      const v8192 = v7523[1];
      return;
      break;
      }
    case 'buyer_api_purchase_silver0_179': {
      const v8858 = v7523[1];
      return;
      break;
      }
    case 'controller_api_restock0_179': {
      const v9524 = v7523[1];
      return;
      break;
      }
    case 'controller_api_set_prices0_179': {
      const v10190 = v7523[1];
      return;
      break;
      }
    case 'controller_api_terminate0_179': {
      const v10856 = v7523[1];
      return;
      break;
      }
    case 'controller_api_toggle_pause0_179': {
      const v11522 = v7523[1];
      return;
      break;
      }
    case 'controller_api_withdraw0_179': {
      const v12188 = v7523[1];
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
    controller_api_withdraw0_179: ctc8
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6933, v6940, v6941, v6971, v6973, v6974, v6975, v6976, v6977, v6978, v6979, v6980, v6982, v6983, v6984] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v7013 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:209:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runbuyer_api_purchase_gold0_179" (defined at: ./src/contracts/coin_shop.rsh:209:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'in',
    who: 'buyer_api_purchase_gold'
    });
  stdlib.assert(v6973, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:210:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:209:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runbuyer_api_purchase_gold0_179" (defined at: ./src/contracts/coin_shop.rsh:209:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'contract is currently inactive',
    who: 'buyer_api_purchase_gold'
    });
  const v7017 = stdlib.ge(v6979, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:211:37:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v7017, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:211:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:209:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runbuyer_api_purchase_gold0_179" (defined at: ./src/contracts/coin_shop.rsh:209:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'balance insufficient for transaction',
    who: 'buyer_api_purchase_gold'
    });
  const v7022 = ['buyer_api_purchase_gold0_179', v7013];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6933, v6940, v6941, v6971, v6973, v6974, v6975, v6976, v6977, v6978, v6979, v6980, v6982, v6983, v6984, v7022],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v6984, [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:215:43:decimal', stdlib.UInt_max, '0'), v6889], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:215:46:decimal', stdlib.UInt_max, '0'), v6890], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:215:49:decimal', stdlib.UInt_max, '0'), v6891]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v7523], secs: v7525, time: v7524, didSend: v5580, from: v7522 } = txn1;
      
      switch (v7523[0]) {
        case 'buyer_api_purchase_bronze0_179': {
          const v7526 = v7523[1];
          
          break;
          }
        case 'buyer_api_purchase_gold0_179': {
          const v8192 = v7523[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buyer_api_purchase_gold"
            });
          const v8426 = stdlib.add(v6941, v6984);
          sim_r.txns.push({
            amt: v6984,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          ;
          ;
          const v8561 = stdlib.sub(v8426, v8426);
          sim_r.txns.push({
            kind: 'from',
            to: v6913,
            tok: undefined /* Nothing */
            });
          const v8591 = stdlib.sub(v6979, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:50:decimal', stdlib.UInt_max, '1'));
          const v8595 = stdlib.Array_set(v6978, '0', v8591);
          const v8596 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:56:application', stdlib.UInt_max, '2'), v8595);
          sim_r.txns.push({
            kind: 'from',
            to: v7522,
            tok: v6891
            });
          const v8597 = 'gold  ';
          null;
          const v8598 = true;
          const v8599 = await txn1.getOutput('buyer_api_purchase_gold', 'v8598', ctc4, v8598);
          
          const v15846 = v6931;
          const v15847 = v6932;
          const v15848 = v6933;
          const v15850 = v8596;
          const v15851 = v8561;
          const v15852 = v6933 ? false : true;
          if (v6933) {
            const v15866 = v8596[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v15867 = v15866[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v15868 = v8596[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v15869 = v15868[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v15870 = v8596[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v15871 = v15870[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v15872 = [v15867, v15869, v15871];
            sim_r.isHalt = false;
            }
          else {
            const v15853 = v6932 ? false : true;
            const v15855 = v6932 ? false : v15852;
            const v15856 = v8596[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v15857 = v15856[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v15858 = v8596[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v15859 = v15858[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v15860 = v8596[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v15861 = v15860[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v15862 = [v15857, v15859, v15861];
            const v15863 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
            const v15864 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
            const v15865 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'buyer_api_purchase_silver0_179': {
          const v8858 = v7523[1];
          
          break;
          }
        case 'controller_api_restock0_179': {
          const v9524 = v7523[1];
          
          break;
          }
        case 'controller_api_set_prices0_179': {
          const v10190 = v7523[1];
          
          break;
          }
        case 'controller_api_terminate0_179': {
          const v10856 = v7523[1];
          
          break;
          }
        case 'controller_api_toggle_pause0_179': {
          const v11522 = v7523[1];
          
          break;
          }
        case 'controller_api_withdraw0_179': {
          const v12188 = v7523[1];
          
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
  const {data: [v7523], secs: v7525, time: v7524, didSend: v5580, from: v7522 } = txn1;
  switch (v7523[0]) {
    case 'buyer_api_purchase_bronze0_179': {
      const v7526 = v7523[1];
      return;
      break;
      }
    case 'buyer_api_purchase_gold0_179': {
      const v8192 = v7523[1];
      undefined /* setApiDetails */;
      stdlib.assert(v6973, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:210:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:209:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'contract is currently inactive',
        who: 'buyer_api_purchase_gold'
        });
      const v8223 = stdlib.ge(v6979, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:211:37:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v8223, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:211:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:209:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:39:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'balance insufficient for transaction',
        who: 'buyer_api_purchase_gold'
        });
      const v8426 = stdlib.add(v6941, v6984);
      const v8427 = stdlib.le(v8426, stdlib.UInt_max);
      stdlib.assert(v8427, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_gold'
        });
      ;
      const v8432 = stdlib.le(v6975, stdlib.UInt_max);
      stdlib.assert(v8432, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_gold'
        });
      ;
      const v8440 = stdlib.le(v6977, stdlib.UInt_max);
      stdlib.assert(v8440, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_gold'
        });
      ;
      const v8448 = stdlib.le(v6979, stdlib.UInt_max);
      stdlib.assert(v8448, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_gold'
        });
      ;
      const v8561 = stdlib.sub(v8426, v8426);
      const v8562 = stdlib.ge(v8561, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:218:64:application', stdlib.UInt_max, '0'));
      stdlib.assert(v8562, {
        at: './src/contracts/coin_shop.rsh:218:64:application',
        fs: ['at ./src/contracts/coin_shop.rsh:216:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:216:27:function exp)'],
        msg: 'assume >= 0',
        who: 'buyer_api_purchase_gold'
        });
      ;
      const v8591 = stdlib.sub(v6979, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:50:decimal', stdlib.UInt_max, '1'));
      const v8592 = stdlib.ge(v8591, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:56:application', stdlib.UInt_max, '0'));
      stdlib.assert(v8592, {
        at: './src/contracts/coin_shop.rsh:219:56:application',
        fs: ['at ./src/contracts/coin_shop.rsh:216:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:216:27:function exp)'],
        msg: 'assume >= 0',
        who: 'buyer_api_purchase_gold'
        });
      const v8595 = stdlib.Array_set(v6978, '0', v8591);
      const v8596 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:219:56:application', stdlib.UInt_max, '2'), v8595);
      ;
      const v8597 = 'gold  ';
      null;
      const v8598 = true;
      const v8599 = await txn1.getOutput('buyer_api_purchase_gold', 'v8598', ctc4, v8598);
      if (v5580) {
        stdlib.protect(ctc10, await interact.out(v8192, v8599), {
          at: './src/contracts/coin_shop.rsh:209:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:209:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:209:15:function exp)', 'at ./src/contracts/coin_shop.rsh:223:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:216:27:function exp)', 'at ./src/contracts/coin_shop.rsh:216:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:216:27:function exp)'],
          msg: 'out',
          who: 'buyer_api_purchase_gold'
          });
        }
      else {
        }
      
      const v15846 = v6931;
      const v15847 = v6932;
      const v15848 = v6933;
      const v15850 = v8596;
      const v15851 = v8561;
      const v15852 = v6933 ? false : true;
      if (v6933) {
        const v15866 = v8596[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v15867 = v15866[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v15868 = v8596[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v15869 = v15868[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v15870 = v8596[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v15871 = v15870[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v15872 = [v15867, v15869, v15871];
        return;
        }
      else {
        const v15853 = v6932 ? false : true;
        const v15855 = v6932 ? false : v15852;
        const v15856 = v8596[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v15857 = v15856[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v15858 = v8596[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v15859 = v15858[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v15860 = v8596[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v15861 = v15860[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v15862 = [v15857, v15859, v15861];
        const v15863 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
        const v15864 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
        const v15865 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
        return;
        }
      break;
      }
    case 'buyer_api_purchase_silver0_179': {
      const v8858 = v7523[1];
      return;
      break;
      }
    case 'controller_api_restock0_179': {
      const v9524 = v7523[1];
      return;
      break;
      }
    case 'controller_api_set_prices0_179': {
      const v10190 = v7523[1];
      return;
      break;
      }
    case 'controller_api_terminate0_179': {
      const v10856 = v7523[1];
      return;
      break;
      }
    case 'controller_api_toggle_pause0_179': {
      const v11522 = v7523[1];
      return;
      break;
      }
    case 'controller_api_withdraw0_179': {
      const v12188 = v7523[1];
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
    controller_api_withdraw0_179: ctc8
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6933, v6940, v6941, v6971, v6973, v6974, v6975, v6976, v6977, v6978, v6979, v6980, v6982, v6983, v6984] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v7000 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:189:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runbuyer_api_purchase_silver0_179" (defined at: ./src/contracts/coin_shop.rsh:189:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'in',
    who: 'buyer_api_purchase_silver'
    });
  stdlib.assert(v6973, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:190:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:189:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runbuyer_api_purchase_silver0_179" (defined at: ./src/contracts/coin_shop.rsh:189:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'contract is currently inactive',
    who: 'buyer_api_purchase_silver'
    });
  const v7004 = stdlib.ge(v6977, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:191:37:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v7004, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:191:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:189:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runbuyer_api_purchase_silver0_179" (defined at: ./src/contracts/coin_shop.rsh:189:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'balance insufficient for transaction',
    who: 'buyer_api_purchase_silver'
    });
  const v7009 = ['buyer_api_purchase_silver0_179', v7000];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6933, v6940, v6941, v6971, v6973, v6974, v6975, v6976, v6977, v6978, v6979, v6980, v6982, v6983, v6984, v7009],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v6983, [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:195:43:decimal', stdlib.UInt_max, '0'), v6889], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:195:46:decimal', stdlib.UInt_max, '0'), v6890], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:195:49:decimal', stdlib.UInt_max, '0'), v6891]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v7523], secs: v7525, time: v7524, didSend: v5580, from: v7522 } = txn1;
      
      switch (v7523[0]) {
        case 'buyer_api_purchase_bronze0_179': {
          const v7526 = v7523[1];
          
          break;
          }
        case 'buyer_api_purchase_gold0_179': {
          const v8192 = v7523[1];
          
          break;
          }
        case 'buyer_api_purchase_silver0_179': {
          const v8858 = v7523[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buyer_api_purchase_silver"
            });
          const v9092 = stdlib.add(v6941, v6983);
          sim_r.txns.push({
            amt: v6983,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          ;
          ;
          const v9303 = stdlib.sub(v9092, v9092);
          sim_r.txns.push({
            kind: 'from',
            to: v6913,
            tok: undefined /* Nothing */
            });
          const v9333 = stdlib.sub(v6977, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:47:decimal', stdlib.UInt_max, '1'));
          const v9337 = stdlib.Array_set(v6976, '0', v9333);
          const v9338 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:56:application', stdlib.UInt_max, '1'), v9337);
          sim_r.txns.push({
            kind: 'from',
            to: v7522,
            tok: v6890
            });
          const v9339 = 'silver';
          null;
          const v9340 = true;
          const v9341 = await txn1.getOutput('buyer_api_purchase_silver', 'v9340', ctc4, v9340);
          
          const v16296 = v6931;
          const v16297 = v6932;
          const v16298 = v6933;
          const v16300 = v9338;
          const v16301 = v9303;
          const v16302 = v6933 ? false : true;
          if (v6933) {
            const v16316 = v9338[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v16317 = v16316[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v16318 = v9338[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v16319 = v16318[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v16320 = v9338[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v16321 = v16320[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v16322 = [v16317, v16319, v16321];
            sim_r.isHalt = false;
            }
          else {
            const v16303 = v6932 ? false : true;
            const v16305 = v6932 ? false : v16302;
            const v16306 = v9338[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v16307 = v16306[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v16308 = v9338[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v16309 = v16308[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v16310 = v9338[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v16311 = v16310[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v16312 = [v16307, v16309, v16311];
            const v16313 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
            const v16314 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
            const v16315 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'controller_api_restock0_179': {
          const v9524 = v7523[1];
          
          break;
          }
        case 'controller_api_set_prices0_179': {
          const v10190 = v7523[1];
          
          break;
          }
        case 'controller_api_terminate0_179': {
          const v10856 = v7523[1];
          
          break;
          }
        case 'controller_api_toggle_pause0_179': {
          const v11522 = v7523[1];
          
          break;
          }
        case 'controller_api_withdraw0_179': {
          const v12188 = v7523[1];
          
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
  const {data: [v7523], secs: v7525, time: v7524, didSend: v5580, from: v7522 } = txn1;
  switch (v7523[0]) {
    case 'buyer_api_purchase_bronze0_179': {
      const v7526 = v7523[1];
      return;
      break;
      }
    case 'buyer_api_purchase_gold0_179': {
      const v8192 = v7523[1];
      return;
      break;
      }
    case 'buyer_api_purchase_silver0_179': {
      const v8858 = v7523[1];
      undefined /* setApiDetails */;
      stdlib.assert(v6973, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:190:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:189:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'contract is currently inactive',
        who: 'buyer_api_purchase_silver'
        });
      const v8912 = stdlib.ge(v6977, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:191:37:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v8912, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:191:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:189:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:41:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'balance insufficient for transaction',
        who: 'buyer_api_purchase_silver'
        });
      const v9092 = stdlib.add(v6941, v6983);
      const v9093 = stdlib.le(v9092, stdlib.UInt_max);
      stdlib.assert(v9093, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_silver'
        });
      ;
      const v9098 = stdlib.le(v6975, stdlib.UInt_max);
      stdlib.assert(v9098, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_silver'
        });
      ;
      const v9106 = stdlib.le(v6977, stdlib.UInt_max);
      stdlib.assert(v9106, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_silver'
        });
      ;
      const v9114 = stdlib.le(v6979, stdlib.UInt_max);
      stdlib.assert(v9114, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_silver'
        });
      ;
      const v9303 = stdlib.sub(v9092, v9092);
      const v9304 = stdlib.ge(v9303, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:198:64:application', stdlib.UInt_max, '0'));
      stdlib.assert(v9304, {
        at: './src/contracts/coin_shop.rsh:198:64:application',
        fs: ['at ./src/contracts/coin_shop.rsh:196:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:27:function exp)'],
        msg: 'assume >= 0',
        who: 'buyer_api_purchase_silver'
        });
      ;
      const v9333 = stdlib.sub(v6977, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:47:decimal', stdlib.UInt_max, '1'));
      const v9334 = stdlib.ge(v9333, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:56:application', stdlib.UInt_max, '0'));
      stdlib.assert(v9334, {
        at: './src/contracts/coin_shop.rsh:199:56:application',
        fs: ['at ./src/contracts/coin_shop.rsh:196:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:27:function exp)'],
        msg: 'assume >= 0',
        who: 'buyer_api_purchase_silver'
        });
      const v9337 = stdlib.Array_set(v6976, '0', v9333);
      const v9338 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:199:56:application', stdlib.UInt_max, '1'), v9337);
      ;
      const v9339 = 'silver';
      null;
      const v9340 = true;
      const v9341 = await txn1.getOutput('buyer_api_purchase_silver', 'v9340', ctc4, v9340);
      if (v5580) {
        stdlib.protect(ctc10, await interact.out(v8858, v9341), {
          at: './src/contracts/coin_shop.rsh:189:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:189:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:189:15:function exp)', 'at ./src/contracts/coin_shop.rsh:203:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:196:27:function exp)', 'at ./src/contracts/coin_shop.rsh:196:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:196:27:function exp)'],
          msg: 'out',
          who: 'buyer_api_purchase_silver'
          });
        }
      else {
        }
      
      const v16296 = v6931;
      const v16297 = v6932;
      const v16298 = v6933;
      const v16300 = v9338;
      const v16301 = v9303;
      const v16302 = v6933 ? false : true;
      if (v6933) {
        const v16316 = v9338[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v16317 = v16316[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v16318 = v9338[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v16319 = v16318[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v16320 = v9338[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v16321 = v16320[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v16322 = [v16317, v16319, v16321];
        return;
        }
      else {
        const v16303 = v6932 ? false : true;
        const v16305 = v6932 ? false : v16302;
        const v16306 = v9338[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v16307 = v16306[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v16308 = v9338[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v16309 = v16308[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v16310 = v9338[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v16311 = v16310[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v16312 = [v16307, v16309, v16311];
        const v16313 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
        const v16314 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
        const v16315 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
        return;
        }
      break;
      }
    case 'controller_api_restock0_179': {
      const v9524 = v7523[1];
      return;
      break;
      }
    case 'controller_api_set_prices0_179': {
      const v10190 = v7523[1];
      return;
      break;
      }
    case 'controller_api_terminate0_179': {
      const v10856 = v7523[1];
      return;
      break;
      }
    case 'controller_api_toggle_pause0_179': {
      const v11522 = v7523[1];
      return;
      break;
      }
    case 'controller_api_withdraw0_179': {
      const v12188 = v7523[1];
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
    controller_api_withdraw0_179: ctc7
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6933, v6940, v6941, v6971, v6973, v6974, v6975, v6976, v6977, v6978, v6979, v6980, v6982, v6983, v6984] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v7024 = ctc.selfAddress();
  const v7026 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:232:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_restock0_179" (defined at: ./src/contracts/coin_shop.rsh:232:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'in',
    who: 'controller_api_restock'
    });
  const v7027 = v7026[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v7028 = v7027[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v7029 = v7027[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v7030 = v7027[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v7032 = stdlib.addressEq(v7024, v6913);
  stdlib.assert(v7032, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:233:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:232:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_restock0_179" (defined at: ./src/contracts/coin_shop.rsh:232:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'action not authorized',
    who: 'controller_api_restock'
    });
  const v7035 = stdlib.le(v7028, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:29:decimal', stdlib.UInt_max, '1200'));
  const v7037 = stdlib.le(v7029, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:35:decimal', stdlib.UInt_max, '600'));
  const v7038 = v7035 ? v7037 : false;
  const v7040 = stdlib.le(v7030, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:40:decimal', stdlib.UInt_max, '200'));
  const v7041 = v7038 ? v7040 : false;
  stdlib.assert(v7041, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:234:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:232:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_restock0_179" (defined at: ./src/contracts/coin_shop.rsh:232:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'illegal param(s) were provided',
    who: 'controller_api_restock'
    });
  const v7051 = ['controller_api_restock0_179', v7026];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6933, v6940, v6941, v6971, v6973, v6974, v6975, v6976, v6977, v6978, v6979, v6980, v6982, v6983, v6984, v7051],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:237:28:decimal', stdlib.UInt_max, '0'), [[v7028, v6889], [v7029, v6890], [v7030, v6891]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v7523], secs: v7525, time: v7524, didSend: v5580, from: v7522 } = txn1;
      
      switch (v7523[0]) {
        case 'buyer_api_purchase_bronze0_179': {
          const v7526 = v7523[1];
          
          break;
          }
        case 'buyer_api_purchase_gold0_179': {
          const v8192 = v7523[1];
          
          break;
          }
        case 'buyer_api_purchase_silver0_179': {
          const v8858 = v7523[1];
          
          break;
          }
        case 'controller_api_restock0_179': {
          const v9524 = v7523[1];
          sim_r.txns.push({
            kind: 'api',
            who: "controller_api_restock"
            });
          const v9598 = v9524[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:232:14:spread', stdlib.UInt_max, '0')];
          const v9601 = v9598[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:9:array ref', stdlib.UInt_max, '0')];
          const v9603 = v9598[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:33:array ref', stdlib.UInt_max, '1')];
          const v9606 = v9598[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:57:array ref', stdlib.UInt_max, '2')];
          ;
          const v9763 = stdlib.add(v6975, v9601);
          const v9767 = stdlib.Array_set(v6974, '0', v9763);
          const v9768 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0'), v9767);
          sim_r.txns.push({
            amt: v9601,
            kind: 'to',
            tok: v6889
            });
          const v9769 = v9768[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '1')];
          const v9770 = v9769[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0')];
          const v9771 = stdlib.add(v9770, v9603);
          const v9775 = stdlib.Array_set(v9769, '0', v9771);
          const v9776 = stdlib.Array_set(v9768, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '1'), v9775);
          sim_r.txns.push({
            amt: v9603,
            kind: 'to',
            tok: v6890
            });
          const v9777 = v9776[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '2')];
          const v9778 = v9777[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0')];
          const v9779 = stdlib.add(v9778, v9606);
          const v9783 = stdlib.Array_set(v9777, '0', v9779);
          const v9784 = stdlib.Array_set(v9776, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '2'), v9783);
          sim_r.txns.push({
            amt: v9606,
            kind: 'to',
            tok: v6891
            });
          const v10027 = v9784[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
          const v10028 = v10027[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
          const v10029 = v9784[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
          const v10030 = v10029[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
          const v10031 = v9784[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
          const v10032 = v10031[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
          null;
          const v10036 = true;
          const v10037 = await txn1.getOutput('controller_api_restock', 'v10036', ctc4, v10036);
          
          const v16746 = v6931;
          const v16747 = v6932;
          const v16748 = v6933;
          const v16750 = v9784;
          const v16751 = v6941;
          const v16752 = v6933 ? false : true;
          if (v6933) {
            const v16772 = [v10028, v10030, v10032];
            sim_r.isHalt = false;
            }
          else {
            const v16753 = v6932 ? false : true;
            const v16755 = v6932 ? false : v16752;
            const v16762 = [v10028, v10030, v10032];
            const v16763 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
            const v16764 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
            const v16765 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'controller_api_set_prices0_179': {
          const v10190 = v7523[1];
          
          break;
          }
        case 'controller_api_terminate0_179': {
          const v10856 = v7523[1];
          
          break;
          }
        case 'controller_api_toggle_pause0_179': {
          const v11522 = v7523[1];
          
          break;
          }
        case 'controller_api_withdraw0_179': {
          const v12188 = v7523[1];
          
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
  const {data: [v7523], secs: v7525, time: v7524, didSend: v5580, from: v7522 } = txn1;
  switch (v7523[0]) {
    case 'buyer_api_purchase_bronze0_179': {
      const v7526 = v7523[1];
      return;
      break;
      }
    case 'buyer_api_purchase_gold0_179': {
      const v8192 = v7523[1];
      return;
      break;
      }
    case 'buyer_api_purchase_silver0_179': {
      const v8858 = v7523[1];
      return;
      break;
      }
    case 'controller_api_restock0_179': {
      const v9524 = v7523[1];
      undefined /* setApiDetails */;
      const v9598 = v9524[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:232:14:spread', stdlib.UInt_max, '0')];
      const v9599 = stdlib.addressEq(v7522, v6913);
      stdlib.assert(v9599, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:233:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:232:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'action not authorized',
        who: 'controller_api_restock'
        });
      const v9601 = v9598[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:9:array ref', stdlib.UInt_max, '0')];
      const v9602 = stdlib.le(v9601, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:29:decimal', stdlib.UInt_max, '1200'));
      const v9603 = v9598[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:33:array ref', stdlib.UInt_max, '1')];
      const v9604 = stdlib.le(v9603, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:35:decimal', stdlib.UInt_max, '600'));
      const v9605 = v9602 ? v9604 : false;
      const v9606 = v9598[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:57:array ref', stdlib.UInt_max, '2')];
      const v9607 = stdlib.le(v9606, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:40:decimal', stdlib.UInt_max, '200'));
      const v9608 = v9605 ? v9607 : false;
      stdlib.assert(v9608, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:234:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:232:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:42:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'illegal param(s) were provided',
        who: 'controller_api_restock'
        });
      const v9759 = stdlib.le(v6941, stdlib.UInt_max);
      stdlib.assert(v9759, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_restock'
        });
      ;
      const v9763 = stdlib.add(v6975, v9601);
      const v9764 = stdlib.le(v9763, stdlib.UInt_max);
      stdlib.assert(v9764, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_restock'
        });
      const v9767 = stdlib.Array_set(v6974, '0', v9763);
      const v9768 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0'), v9767);
      ;
      const v9769 = v9768[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '1')];
      const v9770 = v9769[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0')];
      const v9771 = stdlib.add(v9770, v9603);
      const v9772 = stdlib.le(v9771, stdlib.UInt_max);
      stdlib.assert(v9772, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_restock'
        });
      const v9775 = stdlib.Array_set(v9769, '0', v9771);
      const v9776 = stdlib.Array_set(v9768, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '1'), v9775);
      ;
      const v9777 = v9776[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '2')];
      const v9778 = v9777[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '0')];
      const v9779 = stdlib.add(v9778, v9606);
      const v9780 = stdlib.le(v9779, stdlib.UInt_max);
      stdlib.assert(v9780, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_restock'
        });
      const v9783 = stdlib.Array_set(v9777, '0', v9779);
      const v9784 = stdlib.Array_set(v9776, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:131:64:dot', stdlib.UInt_max, '2'), v9783);
      ;
      const v10027 = v9784[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
      const v10028 = v10027[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
      const v10029 = v9784[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
      const v10030 = v10029[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
      const v10031 = v9784[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
      const v10032 = v10031[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
      null;
      const v10036 = true;
      const v10037 = await txn1.getOutput('controller_api_restock', 'v10036', ctc4, v10036);
      if (v5580) {
        stdlib.protect(ctc10, await interact.out(v9524, v10037), {
          at: './src/contracts/coin_shop.rsh:232:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:232:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:232:15:function exp)', 'at ./src/contracts/coin_shop.rsh:244:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:238:27:function exp)', 'at ./src/contracts/coin_shop.rsh:238:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:238:27:function exp)'],
          msg: 'out',
          who: 'controller_api_restock'
          });
        }
      else {
        }
      
      const v16746 = v6931;
      const v16747 = v6932;
      const v16748 = v6933;
      const v16750 = v9784;
      const v16751 = v6941;
      const v16752 = v6933 ? false : true;
      if (v6933) {
        const v16772 = [v10028, v10030, v10032];
        return;
        }
      else {
        const v16753 = v6932 ? false : true;
        const v16755 = v6932 ? false : v16752;
        const v16762 = [v10028, v10030, v10032];
        const v16763 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
        const v16764 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
        const v16765 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
        return;
        }
      break;
      }
    case 'controller_api_set_prices0_179': {
      const v10190 = v7523[1];
      return;
      break;
      }
    case 'controller_api_terminate0_179': {
      const v10856 = v7523[1];
      return;
      break;
      }
    case 'controller_api_toggle_pause0_179': {
      const v11522 = v7523[1];
      return;
      break;
      }
    case 'controller_api_withdraw0_179': {
      const v12188 = v7523[1];
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
    controller_api_withdraw0_179: ctc7
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6933, v6940, v6941, v6971, v6973, v6974, v6975, v6976, v6977, v6978, v6979, v6980, v6982, v6983, v6984] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v7053 = ctc.selfAddress();
  const v7055 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:250:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:50:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_set_prices0_179" (defined at: ./src/contracts/coin_shop.rsh:250:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'in',
    who: 'controller_api_set_prices'
    });
  const v7061 = stdlib.addressEq(v7053, v6913);
  stdlib.assert(v7061, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:251:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:250:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:50:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_set_prices0_179" (defined at: ./src/contracts/coin_shop.rsh:250:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'action not authorized',
    who: 'controller_api_set_prices'
    });
  const v7071 = ['controller_api_set_prices0_179', v7055];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6933, v6940, v6941, v6971, v6973, v6974, v6975, v6976, v6977, v6978, v6979, v6980, v6982, v6983, v6984, v7071],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:254:28:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:254:31:decimal', stdlib.UInt_max, '0'), v6889], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:254:34:decimal', stdlib.UInt_max, '0'), v6890], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:254:37:decimal', stdlib.UInt_max, '0'), v6891]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v7523], secs: v7525, time: v7524, didSend: v5580, from: v7522 } = txn1;
      
      switch (v7523[0]) {
        case 'buyer_api_purchase_bronze0_179': {
          const v7526 = v7523[1];
          
          break;
          }
        case 'buyer_api_purchase_gold0_179': {
          const v8192 = v7523[1];
          
          break;
          }
        case 'buyer_api_purchase_silver0_179': {
          const v8858 = v7523[1];
          
          break;
          }
        case 'controller_api_restock0_179': {
          const v9524 = v7523[1];
          
          break;
          }
        case 'controller_api_set_prices0_179': {
          const v10190 = v7523[1];
          sim_r.txns.push({
            kind: 'api',
            who: "controller_api_set_prices"
            });
          ;
          ;
          ;
          ;
          const v10714 = v10190[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:250:14:spread', stdlib.UInt_max, '0')];
          const v10718 = v10714[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '0')];
          const v10719 = v10714[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '1')];
          const v10720 = v10714[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '2')];
          null;
          const v10723 = true;
          const v10724 = await txn1.getOutput('controller_api_set_prices', 'v10723', ctc4, v10723);
          
          const v17196 = v10714;
          const v17197 = v6932;
          const v17198 = v6933;
          const v17200 = v6940;
          const v17201 = v6941;
          const v17202 = v6933 ? false : true;
          if (v6933) {
            const v17216 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v17217 = v17216[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v17218 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v17219 = v17218[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v17220 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v17221 = v17220[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v17222 = [v17217, v17219, v17221];
            sim_r.isHalt = false;
            }
          else {
            const v17203 = v6932 ? false : true;
            const v17205 = v6932 ? false : v17202;
            const v17206 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v17207 = v17206[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v17208 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v17209 = v17208[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v17210 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v17211 = v17210[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v17212 = [v17207, v17209, v17211];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'controller_api_terminate0_179': {
          const v10856 = v7523[1];
          
          break;
          }
        case 'controller_api_toggle_pause0_179': {
          const v11522 = v7523[1];
          
          break;
          }
        case 'controller_api_withdraw0_179': {
          const v12188 = v7523[1];
          
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
  const {data: [v7523], secs: v7525, time: v7524, didSend: v5580, from: v7522 } = txn1;
  switch (v7523[0]) {
    case 'buyer_api_purchase_bronze0_179': {
      const v7526 = v7523[1];
      return;
      break;
      }
    case 'buyer_api_purchase_gold0_179': {
      const v8192 = v7523[1];
      return;
      break;
      }
    case 'buyer_api_purchase_silver0_179': {
      const v8858 = v7523[1];
      return;
      break;
      }
    case 'controller_api_restock0_179': {
      const v9524 = v7523[1];
      return;
      break;
      }
    case 'controller_api_set_prices0_179': {
      const v10190 = v7523[1];
      undefined /* setApiDetails */;
      const v10297 = stdlib.addressEq(v7522, v6913);
      stdlib.assert(v10297, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:251:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:250:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:50:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:50:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'action not authorized',
        who: 'controller_api_set_prices'
        });
      const v10425 = stdlib.le(v6941, stdlib.UInt_max);
      stdlib.assert(v10425, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_set_prices'
        });
      ;
      const v10430 = stdlib.le(v6975, stdlib.UInt_max);
      stdlib.assert(v10430, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_set_prices'
        });
      ;
      const v10438 = stdlib.le(v6977, stdlib.UInt_max);
      stdlib.assert(v10438, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_set_prices'
        });
      ;
      const v10446 = stdlib.le(v6979, stdlib.UInt_max);
      stdlib.assert(v10446, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_set_prices'
        });
      ;
      const v10714 = v10190[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:250:14:spread', stdlib.UInt_max, '0')];
      const v10718 = v10714[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '0')];
      const v10719 = v10714[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '1')];
      const v10720 = v10714[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:257:41:spread', stdlib.UInt_max, '2')];
      null;
      const v10723 = true;
      const v10724 = await txn1.getOutput('controller_api_set_prices', 'v10723', ctc4, v10723);
      if (v5580) {
        stdlib.protect(ctc10, await interact.out(v10190, v10724), {
          at: './src/contracts/coin_shop.rsh:250:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:250:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:15:function exp)', 'at ./src/contracts/coin_shop.rsh:261:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:255:27:function exp)', 'at ./src/contracts/coin_shop.rsh:255:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:255:27:function exp)'],
          msg: 'out',
          who: 'controller_api_set_prices'
          });
        }
      else {
        }
      
      const v17196 = v10714;
      const v17197 = v6932;
      const v17198 = v6933;
      const v17200 = v6940;
      const v17201 = v6941;
      const v17202 = v6933 ? false : true;
      if (v6933) {
        const v17216 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v17217 = v17216[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v17218 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v17219 = v17218[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v17220 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v17221 = v17220[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v17222 = [v17217, v17219, v17221];
        return;
        }
      else {
        const v17203 = v6932 ? false : true;
        const v17205 = v6932 ? false : v17202;
        const v17206 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v17207 = v17206[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v17208 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v17209 = v17208[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v17210 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v17211 = v17210[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v17212 = [v17207, v17209, v17211];
        return;
        }
      break;
      }
    case 'controller_api_terminate0_179': {
      const v10856 = v7523[1];
      return;
      break;
      }
    case 'controller_api_toggle_pause0_179': {
      const v11522 = v7523[1];
      return;
      break;
      }
    case 'controller_api_withdraw0_179': {
      const v12188 = v7523[1];
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
    controller_api_withdraw0_179: ctc8
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6933, v6940, v6941, v6971, v6973, v6974, v6975, v6976, v6977, v6978, v6979, v6980, v6982, v6983, v6984] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v7118 = ctc.selfAddress();
  const v7120 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:309:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:309:40:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_terminate0_179" (defined at: ./src/contracts/coin_shop.rsh:309:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'in',
    who: 'controller_api_terminate'
    });
  const v7121 = stdlib.addressEq(v7118, v6913);
  stdlib.assert(v7121, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:310:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:309:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:309:40:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_terminate0_179" (defined at: ./src/contracts/coin_shop.rsh:309:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'action not authorized',
    who: 'controller_api_terminate'
    });
  const v7126 = ['controller_api_terminate0_179', v7120];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6933, v6940, v6941, v6971, v6973, v6974, v6975, v6976, v6977, v6978, v6979, v6980, v6982, v6983, v6984, v7126],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:313:28:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:313:31:decimal', stdlib.UInt_max, '0'), v6889], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:313:34:decimal', stdlib.UInt_max, '0'), v6890], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:313:37:decimal', stdlib.UInt_max, '0'), v6891]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v7523], secs: v7525, time: v7524, didSend: v5580, from: v7522 } = txn1;
      
      switch (v7523[0]) {
        case 'buyer_api_purchase_bronze0_179': {
          const v7526 = v7523[1];
          
          break;
          }
        case 'buyer_api_purchase_gold0_179': {
          const v8192 = v7523[1];
          
          break;
          }
        case 'buyer_api_purchase_silver0_179': {
          const v8858 = v7523[1];
          
          break;
          }
        case 'controller_api_restock0_179': {
          const v9524 = v7523[1];
          
          break;
          }
        case 'controller_api_set_prices0_179': {
          const v10190 = v7523[1];
          
          break;
          }
        case 'controller_api_terminate0_179': {
          const v10856 = v7523[1];
          sim_r.txns.push({
            kind: 'api',
            who: "controller_api_terminate"
            });
          ;
          ;
          ;
          ;
          const v11405 = true;
          null;
          const v11406 = true;
          const v11407 = await txn1.getOutput('controller_api_terminate', 'v11406', ctc4, v11406);
          
          const v17646 = v6931;
          const v17647 = v6932;
          const v17650 = v6940;
          const v17651 = v6941;
          const v17666 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
          const v17667 = v17666[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
          const v17668 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
          const v17669 = v17668[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
          const v17670 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
          const v17671 = v17670[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
          const v17672 = [v17667, v17669, v17671];
          sim_r.isHalt = false;
          
          break;
          }
        case 'controller_api_toggle_pause0_179': {
          const v11522 = v7523[1];
          
          break;
          }
        case 'controller_api_withdraw0_179': {
          const v12188 = v7523[1];
          
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
  const {data: [v7523], secs: v7525, time: v7524, didSend: v5580, from: v7522 } = txn1;
  switch (v7523[0]) {
    case 'buyer_api_purchase_bronze0_179': {
      const v7526 = v7523[1];
      return;
      break;
      }
    case 'buyer_api_purchase_gold0_179': {
      const v8192 = v7523[1];
      return;
      break;
      }
    case 'buyer_api_purchase_silver0_179': {
      const v8858 = v7523[1];
      return;
      break;
      }
    case 'controller_api_restock0_179': {
      const v9524 = v7523[1];
      return;
      break;
      }
    case 'controller_api_set_prices0_179': {
      const v10190 = v7523[1];
      return;
      break;
      }
    case 'controller_api_terminate0_179': {
      const v10856 = v7523[1];
      undefined /* setApiDetails */;
      const v10982 = stdlib.addressEq(v7522, v6913);
      stdlib.assert(v10982, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:310:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:309:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:309:40:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:309:40:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'action not authorized',
        who: 'controller_api_terminate'
        });
      const v11091 = stdlib.le(v6941, stdlib.UInt_max);
      stdlib.assert(v11091, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_terminate'
        });
      ;
      const v11096 = stdlib.le(v6975, stdlib.UInt_max);
      stdlib.assert(v11096, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_terminate'
        });
      ;
      const v11104 = stdlib.le(v6977, stdlib.UInt_max);
      stdlib.assert(v11104, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_terminate'
        });
      ;
      const v11112 = stdlib.le(v6979, stdlib.UInt_max);
      stdlib.assert(v11112, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_terminate'
        });
      ;
      const v11405 = true;
      null;
      const v11406 = true;
      const v11407 = await txn1.getOutput('controller_api_terminate', 'v11406', ctc4, v11406);
      if (v5580) {
        stdlib.protect(ctc10, await interact.out(v10856, v11407), {
          at: './src/contracts/coin_shop.rsh:309:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:309:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:309:15:function exp)', 'at ./src/contracts/coin_shop.rsh:319:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:314:27:function exp)', 'at ./src/contracts/coin_shop.rsh:314:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:314:27:function exp)'],
          msg: 'out',
          who: 'controller_api_terminate'
          });
        }
      else {
        }
      
      const v17646 = v6931;
      const v17647 = v6932;
      const v17650 = v6940;
      const v17651 = v6941;
      const v17666 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
      const v17667 = v17666[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
      const v17668 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
      const v17669 = v17668[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
      const v17670 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
      const v17671 = v17670[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
      const v17672 = [v17667, v17669, v17671];
      return;
      
      break;
      }
    case 'controller_api_toggle_pause0_179': {
      const v11522 = v7523[1];
      return;
      break;
      }
    case 'controller_api_withdraw0_179': {
      const v12188 = v7523[1];
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
    controller_api_withdraw0_179: ctc8
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6933, v6940, v6941, v6971, v6973, v6974, v6975, v6976, v6977, v6978, v6979, v6980, v6982, v6983, v6984] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v7073 = ctc.selfAddress();
  const v7075 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:267:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:267:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_toggle_pause0_179" (defined at: ./src/contracts/coin_shop.rsh:267:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'in',
    who: 'controller_api_toggle_pause'
    });
  const v7076 = stdlib.addressEq(v7073, v6913);
  stdlib.assert(v7076, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:268:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:267:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:267:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_toggle_pause0_179" (defined at: ./src/contracts/coin_shop.rsh:267:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'action not authorized',
    who: 'controller_api_toggle_pause'
    });
  const v7081 = ['controller_api_toggle_pause0_179', v7075];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6933, v6940, v6941, v6971, v6973, v6974, v6975, v6976, v6977, v6978, v6979, v6980, v6982, v6983, v6984, v7081],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:271:28:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:271:31:decimal', stdlib.UInt_max, '0'), v6889], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:271:34:decimal', stdlib.UInt_max, '0'), v6890], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:271:37:decimal', stdlib.UInt_max, '0'), v6891]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v7523], secs: v7525, time: v7524, didSend: v5580, from: v7522 } = txn1;
      
      switch (v7523[0]) {
        case 'buyer_api_purchase_bronze0_179': {
          const v7526 = v7523[1];
          
          break;
          }
        case 'buyer_api_purchase_gold0_179': {
          const v8192 = v7523[1];
          
          break;
          }
        case 'buyer_api_purchase_silver0_179': {
          const v8858 = v7523[1];
          
          break;
          }
        case 'controller_api_restock0_179': {
          const v9524 = v7523[1];
          
          break;
          }
        case 'controller_api_set_prices0_179': {
          const v10190 = v7523[1];
          
          break;
          }
        case 'controller_api_terminate0_179': {
          const v10856 = v7523[1];
          
          break;
          }
        case 'controller_api_toggle_pause0_179': {
          const v11522 = v7523[1];
          sim_r.txns.push({
            kind: 'api',
            who: "controller_api_toggle_pause"
            });
          ;
          ;
          ;
          ;
          const v12087 = await txn1.getOutput('controller_api_toggle_pause', 'v6971', ctc4, v6971);
          
          const v18096 = v6931;
          const v18097 = v6971;
          const v18098 = v6933;
          const v18100 = v6940;
          const v18101 = v6941;
          const v18102 = v6933 ? false : true;
          if (v6933) {
            const v18116 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v18117 = v18116[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v18118 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v18119 = v18118[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v18120 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v18121 = v18120[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v18122 = [v18117, v18119, v18121];
            sim_r.isHalt = false;
            }
          else {
            const v18103 = v6971 ? false : true;
            const v18105 = v6971 ? false : v18102;
            const v18106 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v18107 = v18106[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v18108 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v18109 = v18108[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v18110 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v18111 = v18110[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v18112 = [v18107, v18109, v18111];
            const v18113 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
            const v18114 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
            const v18115 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'controller_api_withdraw0_179': {
          const v12188 = v7523[1];
          
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
  const {data: [v7523], secs: v7525, time: v7524, didSend: v5580, from: v7522 } = txn1;
  switch (v7523[0]) {
    case 'buyer_api_purchase_bronze0_179': {
      const v7526 = v7523[1];
      return;
      break;
      }
    case 'buyer_api_purchase_gold0_179': {
      const v8192 = v7523[1];
      return;
      break;
      }
    case 'buyer_api_purchase_silver0_179': {
      const v8858 = v7523[1];
      return;
      break;
      }
    case 'controller_api_restock0_179': {
      const v9524 = v7523[1];
      return;
      break;
      }
    case 'controller_api_set_prices0_179': {
      const v10190 = v7523[1];
      return;
      break;
      }
    case 'controller_api_terminate0_179': {
      const v10856 = v7523[1];
      return;
      break;
      }
    case 'controller_api_toggle_pause0_179': {
      const v11522 = v7523[1];
      undefined /* setApiDetails */;
      const v11667 = stdlib.addressEq(v7522, v6913);
      stdlib.assert(v11667, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:268:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:267:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:267:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:267:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'action not authorized',
        who: 'controller_api_toggle_pause'
        });
      const v11757 = stdlib.le(v6941, stdlib.UInt_max);
      stdlib.assert(v11757, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_toggle_pause'
        });
      ;
      const v11762 = stdlib.le(v6975, stdlib.UInt_max);
      stdlib.assert(v11762, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_toggle_pause'
        });
      ;
      const v11770 = stdlib.le(v6977, stdlib.UInt_max);
      stdlib.assert(v11770, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_toggle_pause'
        });
      ;
      const v11778 = stdlib.le(v6979, stdlib.UInt_max);
      stdlib.assert(v11778, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_toggle_pause'
        });
      ;
      const v12087 = await txn1.getOutput('controller_api_toggle_pause', 'v6971', ctc4, v6971);
      if (v5580) {
        stdlib.protect(ctc10, await interact.out(v11522, v12087), {
          at: './src/contracts/coin_shop.rsh:267:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:267:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:267:15:function exp)', 'at ./src/contracts/coin_shop.rsh:280:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:272:27:function exp)', 'at ./src/contracts/coin_shop.rsh:272:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:272:27:function exp)'],
          msg: 'out',
          who: 'controller_api_toggle_pause'
          });
        }
      else {
        }
      
      const v18096 = v6931;
      const v18097 = v6971;
      const v18098 = v6933;
      const v18100 = v6940;
      const v18101 = v6941;
      const v18102 = v6933 ? false : true;
      if (v6933) {
        const v18116 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v18117 = v18116[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v18118 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v18119 = v18118[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v18120 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v18121 = v18120[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v18122 = [v18117, v18119, v18121];
        return;
        }
      else {
        const v18103 = v6971 ? false : true;
        const v18105 = v6971 ? false : v18102;
        const v18106 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v18107 = v18106[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v18108 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v18109 = v18108[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v18110 = v6940[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v18111 = v18110[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v18112 = [v18107, v18109, v18111];
        const v18113 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
        const v18114 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
        const v18115 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
        return;
        }
      break;
      }
    case 'controller_api_withdraw0_179': {
      const v12188 = v7523[1];
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
    controller_api_withdraw0_179: ctc7
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6933, v6940, v6941, v6971, v6973, v6974, v6975, v6976, v6977, v6978, v6979, v6980, v6982, v6983, v6984] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v7083 = ctc.selfAddress();
  const v7085 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:287:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_withdraw0_179" (defined at: ./src/contracts/coin_shop.rsh:287:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'in',
    who: 'controller_api_withdraw'
    });
  const v7086 = v7085[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v7087 = v7086[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v7088 = v7086[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v7089 = v7086[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v7091 = stdlib.addressEq(v7083, v6913);
  stdlib.assert(v7091, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:288:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:287:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_withdraw0_179" (defined at: ./src/contracts/coin_shop.rsh:287:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'action not authorized',
    who: 'controller_api_withdraw'
    });
  const v7096 = stdlib.ge(v6975, v7087);
  stdlib.assert(v7096, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:290:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:287:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_withdraw0_179" (defined at: ./src/contracts/coin_shop.rsh:287:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'balance insufficient for transaction',
    who: 'controller_api_withdraw'
    });
  const v7101 = stdlib.ge(v6977, v7088);
  stdlib.assert(v7101, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:291:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:287:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_withdraw0_179" (defined at: ./src/contracts/coin_shop.rsh:287:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'balance insufficient for transaction',
    who: 'controller_api_withdraw'
    });
  const v7106 = stdlib.ge(v6979, v7089);
  stdlib.assert(v7106, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:292:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:287:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to "runcontroller_api_withdraw0_179" (defined at: ./src/contracts/coin_shop.rsh:287:14:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)'],
    msg: 'balance insufficient for transaction',
    who: 'controller_api_withdraw'
    });
  const v7116 = ['controller_api_withdraw0_179', v7085];
  
  const txn1 = await (ctc.sendrecv({
    args: [v6888, v6889, v6890, v6891, v6913, v6931, v6932, v6933, v6940, v6941, v6971, v6973, v6974, v6975, v6976, v6977, v6978, v6979, v6980, v6982, v6983, v6984, v7116],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:295:28:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:295:31:decimal', stdlib.UInt_max, '0'), v6889], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:295:34:decimal', stdlib.UInt_max, '0'), v6890], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:295:37:decimal', stdlib.UInt_max, '0'), v6891]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v7523], secs: v7525, time: v7524, didSend: v5580, from: v7522 } = txn1;
      
      switch (v7523[0]) {
        case 'buyer_api_purchase_bronze0_179': {
          const v7526 = v7523[1];
          
          break;
          }
        case 'buyer_api_purchase_gold0_179': {
          const v8192 = v7523[1];
          
          break;
          }
        case 'buyer_api_purchase_silver0_179': {
          const v8858 = v7523[1];
          
          break;
          }
        case 'controller_api_restock0_179': {
          const v9524 = v7523[1];
          
          break;
          }
        case 'controller_api_set_prices0_179': {
          const v10190 = v7523[1];
          
          break;
          }
        case 'controller_api_terminate0_179': {
          const v10856 = v7523[1];
          
          break;
          }
        case 'controller_api_toggle_pause0_179': {
          const v11522 = v7523[1];
          
          break;
          }
        case 'controller_api_withdraw0_179': {
          const v12188 = v7523[1];
          sim_r.txns.push({
            kind: 'api',
            who: "controller_api_withdraw"
            });
          const v12352 = v12188[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:287:14:spread', stdlib.UInt_max, '0')];
          const v12355 = v12352[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:290:41:array ref', stdlib.UInt_max, '0')];
          const v12360 = v12352[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:291:41:array ref', stdlib.UInt_max, '1')];
          const v12365 = v12352[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:292:41:array ref', stdlib.UInt_max, '2')];
          ;
          ;
          ;
          ;
          const v12812 = stdlib.sub(v6975, v12355);
          const v12816 = stdlib.Array_set(v6974, '0', v12812);
          const v12817 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '0'), v12816);
          sim_r.txns.push({
            kind: 'from',
            to: v6913,
            tok: v6889
            });
          const v12818 = v12817[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '1')];
          const v12819 = v12818[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '0')];
          const v12823 = stdlib.sub(v12819, v12360);
          const v12827 = stdlib.Array_set(v12818, '0', v12823);
          const v12828 = stdlib.Array_set(v12817, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '1'), v12827);
          sim_r.txns.push({
            kind: 'from',
            to: v6913,
            tok: v6890
            });
          const v12829 = v12828[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '2')];
          const v12830 = v12829[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '0')];
          const v12834 = stdlib.sub(v12830, v12365);
          const v12838 = stdlib.Array_set(v12829, '0', v12834);
          const v12839 = stdlib.Array_set(v12828, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '2'), v12838);
          sim_r.txns.push({
            kind: 'from',
            to: v6913,
            tok: v6891
            });
          null;
          const v12843 = true;
          const v12844 = await txn1.getOutput('controller_api_withdraw', 'v12843', ctc4, v12843);
          
          const v18546 = v6931;
          const v18547 = v6932;
          const v18548 = v6933;
          const v18550 = v12839;
          const v18551 = v6941;
          const v18552 = v6933 ? false : true;
          if (v6933) {
            const v18566 = v12839[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v18567 = v18566[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v18568 = v12839[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v18569 = v18568[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v18570 = v12839[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v18571 = v18570[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v18572 = [v18567, v18569, v18571];
            sim_r.isHalt = false;
            }
          else {
            const v18553 = v6932 ? false : true;
            const v18555 = v6932 ? false : v18552;
            const v18556 = v12839[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v18557 = v18556[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
            const v18558 = v12839[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
            const v18559 = v18558[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
            const v18560 = v12839[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
            const v18561 = v18560[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
            const v18562 = [v18557, v18559, v18561];
            const v18563 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
            const v18564 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
            const v18565 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
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
  const {data: [v7523], secs: v7525, time: v7524, didSend: v5580, from: v7522 } = txn1;
  switch (v7523[0]) {
    case 'buyer_api_purchase_bronze0_179': {
      const v7526 = v7523[1];
      return;
      break;
      }
    case 'buyer_api_purchase_gold0_179': {
      const v8192 = v7523[1];
      return;
      break;
      }
    case 'buyer_api_purchase_silver0_179': {
      const v8858 = v7523[1];
      return;
      break;
      }
    case 'controller_api_restock0_179': {
      const v9524 = v7523[1];
      return;
      break;
      }
    case 'controller_api_set_prices0_179': {
      const v10190 = v7523[1];
      return;
      break;
      }
    case 'controller_api_terminate0_179': {
      const v10856 = v7523[1];
      return;
      break;
      }
    case 'controller_api_toggle_pause0_179': {
      const v11522 = v7523[1];
      return;
      break;
      }
    case 'controller_api_withdraw0_179': {
      const v12188 = v7523[1];
      undefined /* setApiDetails */;
      const v12352 = v12188[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:287:14:spread', stdlib.UInt_max, '0')];
      const v12353 = stdlib.addressEq(v7522, v6913);
      stdlib.assert(v12353, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:288:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:287:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'action not authorized',
        who: 'controller_api_withdraw'
        });
      const v12355 = v12352[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:290:41:array ref', stdlib.UInt_max, '0')];
      const v12358 = stdlib.ge(v6975, v12355);
      stdlib.assert(v12358, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:290:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:287:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'balance insufficient for transaction',
        who: 'controller_api_withdraw'
        });
      const v12360 = v12352[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:291:41:array ref', stdlib.UInt_max, '1')];
      const v12363 = stdlib.ge(v6977, v12360);
      stdlib.assert(v12363, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:291:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:287:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'balance insufficient for transaction',
        who: 'controller_api_withdraw'
        });
      const v12365 = v12352[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:292:41:array ref', stdlib.UInt_max, '2')];
      const v12368 = stdlib.ge(v6979, v12365);
      stdlib.assert(v12368, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:292:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:287:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:43:function exp)', 'at ./src/contracts/coin_shop.rsh:131:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:131:64:function exp)', 'at ./src/contracts/coin_shop.rsh:143:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:143:18:function exp)'],
        msg: 'balance insufficient for transaction',
        who: 'controller_api_withdraw'
        });
      const v12423 = stdlib.le(v6941, stdlib.UInt_max);
      stdlib.assert(v12423, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_withdraw'
        });
      ;
      const v12428 = stdlib.le(v6975, stdlib.UInt_max);
      stdlib.assert(v12428, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_withdraw'
        });
      ;
      const v12436 = stdlib.le(v6977, stdlib.UInt_max);
      stdlib.assert(v12436, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_withdraw'
        });
      ;
      const v12444 = stdlib.le(v6979, stdlib.UInt_max);
      stdlib.assert(v12444, {
        at: './src/contracts/coin_shop.rsh:131:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_withdraw'
        });
      ;
      const v12812 = stdlib.sub(v6975, v12355);
      const v12813 = stdlib.ge(v12812, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '0'));
      stdlib.assert(v12813, {
        at: './src/contracts/coin_shop.rsh:299:56:application',
        fs: ['at ./src/contracts/coin_shop.rsh:296:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:296:27:function exp)'],
        msg: 'assume >= 0',
        who: 'controller_api_withdraw'
        });
      const v12816 = stdlib.Array_set(v6974, '0', v12812);
      const v12817 = stdlib.Array_set(v6940, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '0'), v12816);
      ;
      const v12818 = v12817[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '1')];
      const v12819 = v12818[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '0')];
      const v12823 = stdlib.sub(v12819, v12360);
      const v12824 = stdlib.ge(v12823, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '0'));
      stdlib.assert(v12824, {
        at: './src/contracts/coin_shop.rsh:299:56:application',
        fs: ['at ./src/contracts/coin_shop.rsh:296:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:296:27:function exp)'],
        msg: 'assume >= 0',
        who: 'controller_api_withdraw'
        });
      const v12827 = stdlib.Array_set(v12818, '0', v12823);
      const v12828 = stdlib.Array_set(v12817, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '1'), v12827);
      ;
      const v12829 = v12828[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '2')];
      const v12830 = v12829[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '0')];
      const v12834 = stdlib.sub(v12830, v12365);
      const v12835 = stdlib.ge(v12834, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '0'));
      stdlib.assert(v12835, {
        at: './src/contracts/coin_shop.rsh:299:56:application',
        fs: ['at ./src/contracts/coin_shop.rsh:296:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:296:27:function exp)'],
        msg: 'assume >= 0',
        who: 'controller_api_withdraw'
        });
      const v12838 = stdlib.Array_set(v12829, '0', v12834);
      const v12839 = stdlib.Array_set(v12828, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:299:56:application', stdlib.UInt_max, '2'), v12838);
      ;
      null;
      const v12843 = true;
      const v12844 = await txn1.getOutput('controller_api_withdraw', 'v12843', ctc4, v12843);
      if (v5580) {
        stdlib.protect(ctc10, await interact.out(v12188, v12844), {
          at: './src/contracts/coin_shop.rsh:287:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:287:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:287:15:function exp)', 'at ./src/contracts/coin_shop.rsh:303:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:296:27:function exp)', 'at ./src/contracts/coin_shop.rsh:296:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:296:27:function exp)'],
          msg: 'out',
          who: 'controller_api_withdraw'
          });
        }
      else {
        }
      
      const v18546 = v6931;
      const v18547 = v6932;
      const v18548 = v6933;
      const v18550 = v12839;
      const v18551 = v6941;
      const v18552 = v6933 ? false : true;
      if (v6933) {
        const v18566 = v12839[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v18567 = v18566[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v18568 = v12839[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v18569 = v18568[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v18570 = v12839[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v18571 = v18570[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v18572 = [v18567, v18569, v18571];
        return;
        }
      else {
        const v18553 = v6932 ? false : true;
        const v18555 = v6932 ? false : v18552;
        const v18556 = v12839[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v18557 = v18556[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:149:24:application', stdlib.UInt_max, '0')];
        const v18558 = v12839[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '1')];
        const v18559 = v18558[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:150:24:application', stdlib.UInt_max, '0')];
        const v18560 = v12839[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '2')];
        const v18561 = v18560[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:151:24:application', stdlib.UInt_max, '0')];
        const v18562 = [v18557, v18559, v18561];
        const v18563 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '0')];
        const v18564 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '1')];
        const v18565 = v6931[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:164:33:application', stdlib.UInt_max, '2')];
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
    impure: [`_reachp_0((uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64))void`, `_reachp_4((uint64,(byte,byte[24])))void`, `buyer_api_purchase_bronze()byte`, `buyer_api_purchase_gold()byte`, `buyer_api_purchase_silver()byte`, `controller_api_restock((uint64,uint64,uint64))byte`, `controller_api_set_prices((uint64,uint64,uint64))byte`, `controller_api_terminate()byte`, `controller_api_toggle_pause()byte`, `controller_api_withdraw((uint64,uint64,uint64))byte`],
    pure: [`coin_prices()(uint64,uint64,uint64)`, `coin_supply()(uint64,uint64,uint64)`, `is_paused()byte`],
    sigs: [`_reachp_0((uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64))void`, `_reachp_4((uint64,(byte,byte[24])))void`, `buyer_api_purchase_bronze()byte`, `buyer_api_purchase_gold()byte`, `buyer_api_purchase_silver()byte`, `coin_prices()(uint64,uint64,uint64)`, `coin_supply()(uint64,uint64,uint64)`, `controller_api_restock((uint64,uint64,uint64))byte`, `controller_api_set_prices((uint64,uint64,uint64))byte`, `controller_api_terminate()byte`, `controller_api_toggle_pause()byte`, `controller_api_withdraw((uint64,uint64,uint64))byte`, `is_paused()byte`]
    },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAMAP///////////wEBCAUDEKCNBiAoMAQmBQTDuqqJAAEAAQEBAjEYQQlwKWRJIls1ASVbNQIqZCtkUCcEZFCCDwQDr6M8BAodJkkEFCCDHwQcjzblBD4NOmkER5E3lARLXyJOBIjt/tYEl4t5OASuKB3NBLbBefkExaQ7EQTW0YxwBN/ZIygE7i53ETYaAI4PCLsI1gk6CSQJLwksCRkJMgkcCQ0I4QkQCRMIywkWADQXRDQVJA9ENBk0EAhJNQsjDkQ0EIgLVTQVIw5ENBMjDkQ0ESMORDQLSQlJNQwiD0Q0CzQfiAo7NBUkCUk1CyIPRCQ0IjEAiAolgAZicm9uemU1DSg0DVAxAFCwJDUNgAgAAAAAAAAesDQNFlEHCFCwNA0WUQcINQQyBjQaNBY0CxZcAFwANAw1GTUaNRs0HEEIwTQaVwARSTUQIls1DzQaVxERIls1DjQaVyIRIls1DTQPFjQOFlA0DRZQNQw0IzQiFlA0IRZQNCAWUDQfUDQeUDQdFlEHCFA0GlA0GRZQNBBQNA8WUDQOFlA0DRZQNAxQgT2vUCEFMgY1AjUBKksBVwB/ZytLAVd/f2cnBExX/ixnKTQBFjQCFlBnMRkiEkSICpQ0A0AACoAEFR98dTQEULAkQzQXRDQRJA9ENBk0DghJNQsjDkQ0DogKIDQVIw5ENBMjDkQ0ESMORDQLSQlJNQwiD0Q0CzQfiAkGNBEkCUk1CyIPRCQ0IDEAiAjwgAZnb2xkAAA1DSg0DVAxAFCwJDUNgAgAAAAAAAAhljQNFlEHCFCwNA0WUQcINQQyBjQaNBI0CxZcAFwiNAw1GTUaNRtC/sg0F0Q0EyQPRDQZNA8ISTULIw5ENA+ICY80FSMORDQTIw5ENBEjDkQ0C0kJSTUMIg9ENAs0H4gIdTQTJAlJNQsiD0QkNCExAIgIX4AGc2lsdmVyNQ0oNA1QMQBQsCQ1DYAIAAAAAAAAJHw0DRZRBwhQsDQNFlEHCDUEMgY0GjQUNAsWXABcETQMNRk1GjUbQv43NA1XARg1CzEANB8SRDQLIls1DjQLJVs1DTQLIQZbNQw0DoGwCQ40DYHYBA4QNAyByAEOEEQ0GSMORDQVNA4ISTULIw5ENBo0FjQLFlwAXAA1DzQONCKICN80D1cREUk1ECJbNA0ISTUOIw5ENA80EDQOFlwAXBE1CzQNNCGICLg0C1ciEUk1DyJbNAwISTUOIw5ENAs0DzQOFlwAXCI1DTQMNCCICJE0DVcAESJbNQ40DVcRESJbNQw0DVciESJbNQuABAf2AGE0DhZQNAwWUDQLFlCwJDULgAgAAAAAAAAnNDQLFlEHCFCwNAsWUQcINQQyBjQNNRo1G0L9OjEANB8SRDQZIw5ENBUjDkQ0EyMORDQRIw5ENA1XARhJNQwiWzUONAwlWzUNNAwhBls1C4AE3yi0DDQOFlA0DRZQNAsWULAkNQuACAAAAAAAACnjNAsWUQcIULA0CxZRBwg1BDQMMgY1GzUeQvzMMQA0HxJENBkjDkQ0FSMORDQTIw5ENBEjDkQkNQuABC4RPW80CxZRBwhQsCQ1C4AIAAAAAAAALI40CxZRBwhQsDQLFlEHCDUEJDIGNRs1HEL8ejEANB8SRDQZIw5ENBUjDkQ0EyMORDQRIw5EgAgAAAAAAAAbOzQYFlEHCFCwNBgWUQcINQQ0GDIGNRs1HUL8OzQNVwEYNQ4xADQfEkQ0DiJbNQ00FTQND0Q0DiVbNQw0EzQMD0Q0DiEGWzULNBE0Cw9ENBkjDkQ0FSMORDQTIw5ENBEjDkQ0FTQNCUk1DiIPRDQaNBY0DhZcAFwANQ80DTQiNB+IBbU0D1cREUk1ESJbNAwJSTUQIg9ENA80ETQQFlwAXBE1DjQMNCE0H4gFjDQOVyIRSTUQIls0CwlJNQ8iD0Q0CzQgNB+IBXCABPkNdMA0DRZQNAwWUDQLFlCwJDULgAgAAAAAAAAyKzQLFlEHCFCwNAsWUQcINQQyBjQONBA0DxZcAFwiNRo1G0L7S4EhrzULIQQ0ARJEiAU0NAsiWzUMNAtXCBk1DYAEKm21WjQMFlA0DVCwNAyIBQo0DSJVjQgDtQO4A7sDvgPBA8QDxwPKQvp1gCEAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L/loAhAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/240ASEEDEEEQDQBIQUSRIgFKTQeNQQxGSISREL7MjQBIQQMQQQzNAEhBRJEiAUMNAw1BEL/4CWvgAEDNAtQUDULQv8rJa+AAQQ0C1BQNQtC/x2AIQAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv71gCEAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L+zSWvgAEHNAtQUDULQv6/NAEhBAxBA7E0ASEFEkSIBHo0HRZRBwg1BEL/SjEANSM0CyJbNQw0CyVbNSI0CyEGWzUhNAuBGFs1IIAE9u2r0jQMFlA0IhZQNCEWUDQgFlCwNAyIA5yBEa9JNQxJUDQMUEk1C0lXABElr1wAXABJNQxJVxERJa9cAFwRNQs0ITQiE0Q0C0lXIhElr1wAXCI1DTQgNCITNCA0IRMQRCEHiAReIjQiMgqIAzwhB4gEUSI0ITIKiAMvIQeIBEQiNCAyCogDIjQjNR80IjQhEzQiNCATEDQhNCATEEQ0IzQiFlA0IRZQNCAWUDQNUDQfUIGfAa9QJDIGQvl4JDQBEkRJVwAgNSNJIQhbNSJJIQlbNSFJIQpbNSBJVzgzNQ1XayA1HzQLFzUMgATVFRkUNAwWULA0DIgCvDQjMQASRIAYAAAAAACYloAAAAAAATEtAAAAAAABycOAIiIyBjQNIjUZNRo1GzUcNR01HkL4mSEFNAESRIgDFjQLFzUMgATUDGzWNAwWULA0DIgCaDQfMQASNCMxABIRRDQZSQkiD0Q0GTQfiAJGNA9JCUk1DCIPRDQaNBA0DBZcAFwANQs0DzQiNB+IAiI0C1cREUk1DyJbNA4JSTUMIg9ENA40ITQfiAIGNAs0DzQMFlwAXBFXIhEiWzQNCSIPRDQNNCA0H4gB5yI0IDIKMgmIAyAiNCEyCjIJiAMWIjQiMgoyCYgDDDEZIQQSRIgDCSIyCjIJiAMNQvhqiAG6IQeIAsc2GgE1C0L924gBqjYaATULQv6tiAGfNhoBNQtC/xWIAZQ2GgE1C0L8XSIxNBJEIQsxNRJEIjE2EkQiMTcSRIgBdIGqAq8iIkL37kL8o0L8MUL8dUL8wkL83DYaATULQvzsNhoBNQtC/PJC/P1C/SI2GgE1C0L9QkL9TUL2wUL380L4gUL5D0L6CUL6dEL6w0L6/zQdFDUYNB0UNRc0GlcAEUk1FiJbNRU0GlcREUk1FCJbNRM0GlciEUk1EiJbNRE0FRY0ExZQNBEWUDUMNB4iWzUQNB4lWzUPNB4hBls1DiI1HDQjNCIWUDQhFlA0IBZQNB9QNB5QNB0WUQcIUDQcFlEHCFA0GlA0GRZQNBgWUQcIUDQXFlEHCFA0FlA0FRZQNBRQNBMWUDQSUDQRFlA0DFA0EBZQNA8WUDQOFlAhBDIGQvbzIrIBJLIQsgeyCLOJIrIBIQuyELIUshGyErOJNAEhBBJEiABaNB41BEL7vTQBIQQSRIgASjQMNQRC+600ASEEEkSIADo0HRZRBwg1BEL7mUiJTAlJNQYyCYgAEYkJSUH/7kk1BogA/4mxQv+gsUL/kCQ1A4lJIhJMNAISEUSJSVcAIDUjSSEIWzUiSSEJWzUhSSEKWzUgSVc4IDUfSVdYGDUeSVdwARc1HUlXcQEXNRxJV3IzNRpJgaUBWzUZSVetARc1GElXrgEXNRdJV68RNRZJgcABWzUVSVfIETUUSYHZAVs1E0lX4RE1EkmB8gFbNRFJV/oYNQxJgZICWzUQSYGaAls1D4GiAls1DolJVwAgNSNJIQhbNSJJIQlbNSFJIQpbNSBJVzggNR9JV1gYNR5JV3ABFzUdSVdxMzUaSYGkAVs1GUlXrBE1EEmBvQFbNQ9JgcUBWzUOSYHNAVs1DVfVGDUMiTEWNAAkCEk1AAlHAjgHMgoSRDgQJBJEOAgSRIk0Bgg1BokxFjQAJAhJNQAJRwM4FDIKEkQ4ECELEkQ4EU8CEkQ4EhJEibGyFUL+WzQGNAdKD0H+l0L+n7GyCUL+PQ==`,
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
    1289: `859`,
    129: `24`,
    1290: `860`,
    1291: `860`,
    1292: `861`,
    1293: `861`,
    1294: `862`,
    1295: `862`,
    1296: `863`,
    1297: `864`,
    1298: `872`,
    1299: `872`,
    13: `2`,
    130: `24`,
    1300: `873`,
    1301: `874`,
    1302: `875`,
    1303: `875`,
    1304: `876`,
    1305: `876`,
    1306: `877`,
    1307: `877`,
    1308: `878`,
    1309: `879`,
    131: `24`,
    1310: `887`,
    1311: `887`,
    1312: `888`,
    1313: `889`,
    1314: `890`,
    1315: `890`,
    1316: `891`,
    1317: `891`,
    1318: `892`,
    1319: `892`,
    132: `24`,
    1320: `893`,
    1321: `894`,
    1322: `902`,
    1323: `902`,
    1324: `903`,
    1325: `903`,
    1326: `904`,
    1327: `905`,
    1328: `905`,
    1329: `906`,
    133: `24`,
    1330: `906`,
    1331: `907`,
    1332: `907`,
    1333: `908`,
    1334: `909`,
    1335: `917`,
    1336: `917`,
    1337: `918`,
    1338: `919`,
    1339: `920`,
    134: `24`,
    1340: `923`,
    1341: `923`,
    1342: `924`,
    1343: `925`,
    1344: `926`,
    1345: `929`,
    1346: `929`,
    1347: `930`,
    1348: `931`,
    1349: `932`,
    135: `24`,
    1350: `935`,
    1351: `935`,
    1352: `936`,
    1353: `937`,
    1354: `938`,
    1355: `941`,
    1356: `941`,
    1357: `942`,
    1358: `942`,
    1359: `943`,
    136: `24`,
    1360: `944`,
    1361: `945`,
    1362: `945`,
    1363: `946`,
    1364: `947`,
    1365: `948`,
    1366: `952`,
    1367: `952`,
    1368: `953`,
    1369: `953`,
    137: `24`,
    1370: `954`,
    1371: `954`,
    1372: `955`,
    1373: `956`,
    1374: `956`,
    1375: `957`,
    1376: `957`,
    1377: `958`,
    1378: `958`,
    1379: `959`,
    138: `24`,
    1380: `959`,
    1381: `961`,
    1382: `961`,
    1383: `963`,
    1384: `963`,
    1385: `964`,
    1386: `964`,
    1387: `964`,
    1388: `965`,
    1389: `965`,
    139: `24`,
    1390: `966`,
    1391: `966`,
    1392: `966`,
    1393: `967`,
    1394: `968`,
    1395: `968`,
    1396: `969`,
    1397: `970`,
    1398: `971`,
    1399: `971`,
    14: `2`,
    140: `24`,
    1400: `972`,
    1401: `973`,
    1402: `974`,
    1403: `974`,
    1404: `975`,
    1405: `976`,
    1406: `977`,
    1407: `981`,
    1408: `981`,
    1409: `982`,
    141: `24`,
    1410: `982`,
    1411: `983`,
    1412: `983`,
    1413: `984`,
    1414: `985`,
    1415: `985`,
    1416: `986`,
    1417: `986`,
    1418: `987`,
    1419: `987`,
    142: `25`,
    1420: `988`,
    1421: `988`,
    1422: `990`,
    1423: `990`,
    1424: `991`,
    1425: `991`,
    1426: `992`,
    1427: `992`,
    1428: `992`,
    1429: `993`,
    143: `25`,
    1430: `993`,
    1431: `994`,
    1432: `994`,
    1433: `994`,
    1434: `995`,
    1435: `996`,
    1436: `996`,
    1437: `997`,
    1438: `998`,
    1439: `999`,
    144: `25`,
    1440: `999`,
    1441: `1000`,
    1442: `1001`,
    1443: `1002`,
    1444: `1002`,
    1445: `1003`,
    1446: `1004`,
    1447: `1005`,
    1448: `1009`,
    1449: `1009`,
    145: `26`,
    1450: `1011`,
    1451: `1011`,
    1452: `1012`,
    1453: `1012`,
    1454: `1013`,
    1455: `1013`,
    1456: `1013`,
    1457: `1014`,
    1458: `1014`,
    1459: `1014`,
    146: `26`,
    1460: `1014`,
    1461: `1014`,
    1462: `1014`,
    1463: `1015`,
    1464: `1015`,
    1465: `1016`,
    1466: `1017`,
    1467: `1018`,
    1468: `1018`,
    1469: `1019`,
    147: `26`,
    1470: `1020`,
    1471: `1021`,
    1472: `1021`,
    1473: `1022`,
    1474: `1023`,
    1475: `1024`,
    1476: `1026`,
    1477: `1027`,
    1478: `1027`,
    1479: `1028`,
    148: `26`,
    1480: `1028`,
    1481: `1028`,
    1482: `1028`,
    1483: `1028`,
    1484: `1028`,
    1485: `1028`,
    1486: `1028`,
    1487: `1028`,
    1488: `1028`,
    1489: `1029`,
    149: `26`,
    1490: `1029`,
    1491: `1030`,
    1492: `1031`,
    1493: `1031`,
    1494: `1031`,
    1495: `1032`,
    1496: `1033`,
    1497: `1034`,
    1498: `1034`,
    1499: `1035`,
    15: `2`,
    150: `26`,
    1500: `1036`,
    1501: `1036`,
    1502: `1036`,
    1503: `1037`,
    1504: `1037`,
    1505: `1038`,
    1506: `1038`,
    1507: `1039`,
    1508: `1039`,
    1509: `1040`,
    151: `26`,
    1510: `1040`,
    1511: `1041`,
    1512: `1041`,
    1513: `1042`,
    1514: `1043`,
    1515: `1043`,
    1516: `1044`,
    1517: `1044`,
    1518: `1045`,
    1519: `1045`,
    152: `26`,
    1520: `1046`,
    1521: `1046`,
    1522: `1047`,
    1523: `1047`,
    1524: `1047`,
    1525: `1049`,
    1526: `1049`,
    1527: `1050`,
    1528: `1051`,
    1529: `1051`,
    153: `26`,
    1530: `1053`,
    1531: `1053`,
    1532: `1054`,
    1533: `1054`,
    1534: `1055`,
    1535: `1056`,
    1536: `1057`,
    1537: `1057`,
    1538: `1057`,
    1539: `1058`,
    154: `26`,
    1540: `1058`,
    1541: `1059`,
    1542: `1060`,
    1543: `1061`,
    1544: `1061`,
    1545: `1062`,
    1546: `1062`,
    1547: `1063`,
    1548: `1063`,
    1549: `1063`,
    155: `26`,
    1550: `1064`,
    1551: `1064`,
    1552: `1065`,
    1553: `1065`,
    1554: `1065`,
    1555: `1065`,
    1556: `1065`,
    1557: `1065`,
    1558: `1066`,
    1559: `1066`,
    156: `26`,
    1560: `1067`,
    1561: `1068`,
    1562: `1069`,
    1563: `1069`,
    1564: `1070`,
    1565: `1071`,
    1566: `1073`,
    1567: `1073`,
    1568: `1074`,
    1569: `1074`,
    157: `26`,
    1570: `1074`,
    1571: `1075`,
    1572: `1075`,
    1573: `1076`,
    1574: `1077`,
    1575: `1078`,
    1576: `1078`,
    1577: `1078`,
    1578: `1078`,
    1579: `1078`,
    158: `26`,
    1580: `1078`,
    1581: `1078`,
    1582: `1078`,
    1583: `1078`,
    1584: `1078`,
    1585: `1078`,
    1586: `1078`,
    1587: `1078`,
    1588: `1078`,
    1589: `1078`,
    159: `26`,
    1590: `1078`,
    1591: `1078`,
    1592: `1078`,
    1593: `1079`,
    1594: `1079`,
    1595: `1079`,
    1596: `1081`,
    1597: `1081`,
    1598: `1081`,
    1599: `1081`,
    16: `2`,
    160: `26`,
    1600: `1081`,
    1601: `1081`,
    1602: `1081`,
    1603: `1081`,
    1604: `1081`,
    1605: `1081`,
    1606: `1081`,
    1607: `1081`,
    1608: `1081`,
    1609: `1081`,
    161: `26`,
    1610: `1081`,
    1611: `1081`,
    1612: `1081`,
    1613: `1081`,
    1614: `1081`,
    1615: `1081`,
    1616: `1081`,
    1617: `1081`,
    1618: `1081`,
    1619: `1081`,
    162: `26`,
    1620: `1081`,
    1621: `1081`,
    1622: `1081`,
    1623: `1081`,
    1624: `1081`,
    1625: `1081`,
    1626: `1081`,
    1627: `1081`,
    1628: `1081`,
    1629: `1081`,
    163: `26`,
    1630: `1081`,
    1631: `1082`,
    1632: `1082`,
    1633: `1083`,
    1634: `1083`,
    1635: `1083`,
    1636: `1085`,
    1637: `1085`,
    1638: `1085`,
    1639: `1085`,
    164: `26`,
    1640: `1085`,
    1641: `1085`,
    1642: `1085`,
    1643: `1085`,
    1644: `1085`,
    1645: `1085`,
    1646: `1085`,
    1647: `1085`,
    1648: `1085`,
    1649: `1085`,
    165: `26`,
    1650: `1085`,
    1651: `1085`,
    1652: `1085`,
    1653: `1085`,
    1654: `1085`,
    1655: `1085`,
    1656: `1085`,
    1657: `1085`,
    1658: `1085`,
    1659: `1085`,
    166: `26`,
    1660: `1085`,
    1661: `1085`,
    1662: `1085`,
    1663: `1085`,
    1664: `1085`,
    1665: `1085`,
    1666: `1085`,
    1667: `1085`,
    1668: `1085`,
    1669: `1085`,
    167: `26`,
    1670: `1085`,
    1671: `1086`,
    1672: `1086`,
    1673: `1087`,
    1674: `1087`,
    1675: `1087`,
    1676: `1089`,
    1677: `1089`,
    1678: `1090`,
    1679: `1090`,
    168: `26`,
    1680: `1091`,
    1681: `1092`,
    1682: `1092`,
    1683: `1092`,
    1684: `1093`,
    1685: `1093`,
    1686: `1094`,
    1687: `1094`,
    1688: `1095`,
    1689: `1096`,
    169: `26`,
    1690: `1099`,
    1691: `1099`,
    1692: `1099`,
    1693: `1100`,
    1694: `1100`,
    1695: `1101`,
    1696: `1101`,
    1697: `1103`,
    1698: `1103`,
    1699: `1104`,
    17: `2`,
    170: `26`,
    1700: `1105`,
    1701: `1106`,
    1702: `1108`,
    1703: `1108`,
    1704: `1108`,
    1705: `1110`,
    1706: `1110`,
    1707: `1111`,
    1708: `1111`,
    1709: `1112`,
    171: `26`,
    1710: `1113`,
    1711: `1113`,
    1712: `1113`,
    1713: `1114`,
    1714: `1114`,
    1715: `1115`,
    1716: `1115`,
    1717: `1116`,
    1718: `1117`,
    1719: `1120`,
    172: `26`,
    1720: `1120`,
    1721: `1120`,
    1722: `1121`,
    1723: `1121`,
    1724: `1122`,
    1725: `1122`,
    1726: `1123`,
    1727: `1123`,
    1728: `1123`,
    1729: `1125`,
    173: `26`,
    1730: `1126`,
    1731: `1127`,
    1732: `1127`,
    1733: `1127`,
    1734: `1128`,
    1735: `1128`,
    1736: `1129`,
    1737: `1130`,
    1738: `1131`,
    1739: `1131`,
    174: `26`,
    1740: `1132`,
    1741: `1132`,
    1742: `1132`,
    1743: `1134`,
    1744: `1135`,
    1745: `1136`,
    1746: `1136`,
    1747: `1136`,
    1748: `1137`,
    1749: `1137`,
    175: `26`,
    1750: `1138`,
    1751: `1139`,
    1752: `1140`,
    1753: `1140`,
    1754: `1141`,
    1755: `1141`,
    1756: `1141`,
    1757: `1143`,
    1758: `1143`,
    1759: `1143`,
    176: `26`,
    1760: `1143`,
    1761: `1143`,
    1762: `1143`,
    1763: `1143`,
    1764: `1143`,
    1765: `1143`,
    1766: `1143`,
    1767: `1143`,
    1768: `1143`,
    1769: `1143`,
    177: `28`,
    1770: `1143`,
    1771: `1143`,
    1772: `1143`,
    1773: `1143`,
    1774: `1143`,
    1775: `1143`,
    1776: `1143`,
    1777: `1143`,
    1778: `1143`,
    1779: `1143`,
    178: `30`,
    1780: `1143`,
    1781: `1143`,
    1782: `1143`,
    1783: `1143`,
    1784: `1143`,
    1785: `1143`,
    1786: `1143`,
    1787: `1143`,
    1788: `1143`,
    1789: `1143`,
    179: `30`,
    1790: `1143`,
    1791: `1143`,
    1792: `1144`,
    1793: `1144`,
    1794: `1145`,
    1795: `1145`,
    1796: `1145`,
    1797: `1147`,
    1798: `1147`,
    1799: `1147`,
    18: `2`,
    180: `31`,
    1800: `1147`,
    1801: `1147`,
    1802: `1147`,
    1803: `1147`,
    1804: `1147`,
    1805: `1147`,
    1806: `1147`,
    1807: `1147`,
    1808: `1147`,
    1809: `1147`,
    181: `39`,
    1810: `1147`,
    1811: `1147`,
    1812: `1147`,
    1813: `1147`,
    1814: `1147`,
    1815: `1147`,
    1816: `1147`,
    1817: `1147`,
    1818: `1147`,
    1819: `1147`,
    182: `39`,
    1820: `1147`,
    1821: `1147`,
    1822: `1147`,
    1823: `1147`,
    1824: `1147`,
    1825: `1147`,
    1826: `1147`,
    1827: `1147`,
    1828: `1147`,
    1829: `1147`,
    183: `40`,
    1830: `1147`,
    1831: `1147`,
    1832: `1148`,
    1833: `1148`,
    1834: `1149`,
    1835: `1149`,
    1836: `1149`,
    1837: `1151`,
    1838: `1152`,
    1839: `1153`,
    184: `41`,
    1840: `1153`,
    1841: `1153`,
    1842: `1154`,
    1843: `1154`,
    1844: `1155`,
    1845: `1156`,
    1846: `1157`,
    1847: `1157`,
    1848: `1158`,
    1849: `1158`,
    185: `42`,
    1850: `1158`,
    1851: `1160`,
    1852: `1160`,
    1853: `1161`,
    1854: `1161`,
    1855: `1162`,
    1856: `1163`,
    1857: `1163`,
    1858: `1163`,
    1859: `1164`,
    186: `50`,
    1860: `1164`,
    1861: `1165`,
    1862: `1165`,
    1863: `1166`,
    1864: `1167`,
    1865: `1170`,
    1866: `1170`,
    1867: `1170`,
    1868: `1171`,
    1869: `1171`,
    187: `50`,
    1870: `1172`,
    1871: `1173`,
    1872: `1173`,
    1873: `1173`,
    1874: `1174`,
    1875: `1174`,
    1876: `1175`,
    1877: `1175`,
    1878: `1175`,
    1879: `1177`,
    188: `51`,
    1880: `1177`,
    1881: `1178`,
    1882: `1178`,
    1883: `1179`,
    1884: `1179`,
    1885: `1180`,
    1886: `1181`,
    1887: `1182`,
    1888: `1182`,
    1889: `1183`,
    189: `51`,
    1890: `1183`,
    1891: `1184`,
    1892: `1185`,
    1893: `1186`,
    1894: `1186`,
    1895: `1187`,
    1896: `1187`,
    1897: `1188`,
    1898: `1188`,
    1899: `1189`,
    19: `2`,
    190: `52`,
    1900: `1190`,
    1901: `1190`,
    1902: `1191`,
    1903: `1191`,
    1904: `1192`,
    1905: `1192`,
    1906: `1193`,
    1907: `1194`,
    1908: `1194`,
    1909: `1195`,
    191: `53`,
    1910: `1195`,
    1911: `1195`,
    1912: `1195`,
    1913: `1195`,
    1914: `1195`,
    1915: `1196`,
    1916: `1196`,
    1917: `1197`,
    1918: `1198`,
    1919: `1199`,
    192: `54`,
    1920: `1199`,
    1921: `1200`,
    1922: `1201`,
    1923: `1202`,
    1924: `1202`,
    1925: `1203`,
    1926: `1204`,
    1927: `1205`,
    1928: `1205`,
    1929: `1206`,
    193: `54`,
    1930: `1207`,
    1931: `1208`,
    1932: `1210`,
    1933: `1210`,
    1934: `1211`,
    1935: `1211`,
    1936: `1211`,
    1937: `1212`,
    1938: `1212`,
    1939: `1213`,
    194: `55`,
    1940: `1214`,
    1941: `1215`,
    1942: `1215`,
    1943: `1216`,
    1944: `1217`,
    1945: `1218`,
    1946: `1218`,
    1947: `1219`,
    1948: `1220`,
    1949: `1221`,
    195: `56`,
    1950: `1221`,
    1951: `1222`,
    1952: `1223`,
    1953: `1223`,
    1954: `1223`,
    1955: `1224`,
    1956: `1225`,
    1957: `1226`,
    1958: `1226`,
    1959: `1227`,
    196: `57`,
    1960: `1227`,
    1961: `1228`,
    1962: `1229`,
    1963: `1229`,
    1964: `1230`,
    1965: `1231`,
    1966: `1231`,
    1967: `1231`,
    1968: `1232`,
    1969: `1233`,
    197: `60`,
    1970: `1234`,
    1971: `1234`,
    1972: `1235`,
    1973: `1235`,
    1974: `1236`,
    1975: `1236`,
    1976: `1237`,
    1977: `1237`,
    1978: `1238`,
    1979: `1238`,
    198: `60`,
    1980: `1239`,
    1981: `1240`,
    1982: `1243`,
    1983: `1243`,
    1984: `1244`,
    1985: `1245`,
    1986: `1245`,
    1987: `1245`,
    1988: `1246`,
    1989: `1247`,
    199: `61`,
    1990: `1248`,
    1991: `1248`,
    1992: `1249`,
    1993: `1249`,
    1994: `1250`,
    1995: `1250`,
    1996: `1251`,
    1997: `1251`,
    1998: `1252`,
    1999: `1252`,
    2: `2`,
    20: `2`,
    200: `61`,
    2000: `1253`,
    2001: `1254`,
    2002: `1254`,
    2003: `1255`,
    2004: `1255`,
    2005: `1256`,
    2006: `1257`,
    2007: `1258`,
    2008: `1261`,
    2009: `1261`,
    201: `61`,
    2010: `1262`,
    2011: `1262`,
    2012: `1262`,
    2013: `1263`,
    2014: `1265`,
    2015: `1265`,
    2016: `1266`,
    2017: `1266`,
    2018: `1267`,
    2019: `1267`,
    202: `64`,
    2020: `1267`,
    2021: `1268`,
    2022: `1268`,
    2023: `1269`,
    2024: `1269`,
    2025: `1269`,
    2026: `1270`,
    2027: `1272`,
    2028: `1272`,
    2029: `1273`,
    203: `64`,
    2030: `1273`,
    2031: `1274`,
    2032: `1274`,
    2033: `1274`,
    2034: `1275`,
    2035: `1275`,
    2036: `1276`,
    2037: `1276`,
    2038: `1276`,
    2039: `1277`,
    204: `65`,
    2040: `1279`,
    2041: `1279`,
    2042: `1280`,
    2043: `1280`,
    2044: `1281`,
    2045: `1281`,
    2046: `1281`,
    2047: `1282`,
    2048: `1282`,
    2049: `1283`,
    205: `66`,
    2050: `1283`,
    2051: `1284`,
    2052: `1284`,
    2053: `1285`,
    2054: `1285`,
    2055: `1286`,
    2056: `1287`,
    2057: `1287`,
    2058: `1288`,
    2059: `1288`,
    206: `67`,
    2060: `1289`,
    2061: `1290`,
    2062: `1291`,
    2063: `1291`,
    2064: `1292`,
    2065: `1292`,
    2066: `1293`,
    2067: `1294`,
    2068: `1295`,
    2069: `1300`,
    207: `70`,
    2070: `1300`,
    2071: `1301`,
    2072: `1301`,
    2073: `1302`,
    2074: `1303`,
    2075: `1304`,
    2076: `1304`,
    2077: `1305`,
    2078: `1306`,
    2079: `1307`,
    208: `70`,
    2080: `1307`,
    2081: `1308`,
    2082: `1309`,
    2083: `1310`,
    2084: `1310`,
    2085: `1311`,
    2086: `1312`,
    2087: `1312`,
    2088: `1313`,
    2089: `1314`,
    209: `71`,
    2090: `1314`,
    2091: `1314`,
    2092: `1315`,
    2093: `1316`,
    2094: `1317`,
    2095: `1318`,
    2096: `1318`,
    2097: `1319`,
    2098: `1319`,
    2099: `1319`,
    21: `2`,
    210: `72`,
    2100: `1321`,
    2101: `1322`,
    2102: `1322`,
    2103: `1323`,
    2104: `1324`,
    2105: `1326`,
    2106: `1327`,
    2107: `1327`,
    2108: `1327`,
    2109: `1328`,
    211: `73`,
    2110: `1328`,
    2111: `1329`,
    2112: `1330`,
    2113: `1330`,
    2114: `1331`,
    2115: `1332`,
    2116: `1332`,
    2117: `1333`,
    2118: `1334`,
    2119: `1334`,
    212: `76`,
    2120: `1335`,
    2121: `1336`,
    2122: `1336`,
    2123: `1337`,
    2124: `1338`,
    2125: `1338`,
    2126: `1339`,
    2127: `1340`,
    2128: `1340`,
    2129: `1341`,
    213: `76`,
    2130: `1342`,
    2131: `1342`,
    2132: `1342`,
    2133: `1343`,
    2134: `1343`,
    2135: `1344`,
    2136: `1344`,
    2137: `1344`,
    2138: `1345`,
    2139: `1345`,
    214: `77`,
    2140: `1346`,
    2141: `1346`,
    2142: `1347`,
    2143: `1348`,
    2144: `1348`,
    2145: `1349`,
    2146: `1349`,
    2147: `1349`,
    2148: `1349`,
    2149: `1349`,
    215: `78`,
    2150: `1349`,
    2151: `1350`,
    2152: `1350`,
    2153: `1351`,
    2154: `1352`,
    2155: `1353`,
    2156: `1355`,
    2157: `1355`,
    2158: `1356`,
    2159: `1356`,
    216: `79`,
    2160: `1356`,
    2161: `1357`,
    2162: `1357`,
    2163: `1358`,
    2164: `1358`,
    2165: `1359`,
    2166: `1360`,
    2167: `1363`,
    2168: `1363`,
    2169: `1363`,
    217: `82`,
    2170: `1363`,
    2171: `1363`,
    2172: `1363`,
    2173: `1363`,
    2174: `1363`,
    2175: `1363`,
    2176: `1363`,
    2177: `1363`,
    2178: `1363`,
    2179: `1363`,
    218: `82`,
    2180: `1363`,
    2181: `1363`,
    2182: `1363`,
    2183: `1363`,
    2184: `1363`,
    2185: `1363`,
    2186: `1363`,
    2187: `1363`,
    2188: `1363`,
    2189: `1363`,
    219: `83`,
    2190: `1363`,
    2191: `1363`,
    2192: `1363`,
    2193: `1364`,
    2194: `1365`,
    2195: `1366`,
    2196: `1366`,
    2197: `1367`,
    2198: `1367`,
    2199: `1368`,
    22: `2`,
    220: `84`,
    2200: `1369`,
    2201: `1369`,
    2202: `1370`,
    2203: `1370`,
    2204: `1371`,
    2205: `1371`,
    2206: `1372`,
    2207: `1372`,
    2208: `1373`,
    2209: `1373`,
    221: `85`,
    2210: `1374`,
    2211: `1374`,
    2212: `1375`,
    2213: `1375`,
    2214: `1375`,
    2215: `1377`,
    2216: `1377`,
    2217: `1378`,
    2218: `1378`,
    2219: `1379`,
    222: `86`,
    2220: `1380`,
    2221: `1381`,
    2222: `1381`,
    2223: `1381`,
    2224: `1382`,
    2225: `1382`,
    2226: `1383`,
    2227: `1384`,
    2228: `1384`,
    2229: `1385`,
    223: `86`,
    2230: `1385`,
    2231: `1385`,
    2232: `1385`,
    2233: `1385`,
    2234: `1385`,
    2235: `1386`,
    2236: `1386`,
    2237: `1387`,
    2238: `1388`,
    2239: `1389`,
    224: `87`,
    2240: `1391`,
    2241: `1391`,
    2242: `1392`,
    2243: `1392`,
    2244: `1392`,
    2245: `1393`,
    2246: `1393`,
    2247: `1394`,
    2248: `1394`,
    2249: `1395`,
    225: `88`,
    2250: `1396`,
    2251: `1396`,
    2252: `1397`,
    2253: `1397`,
    2254: `1398`,
    2255: `1399`,
    2256: `1400`,
    2257: `1404`,
    2258: `1404`,
    2259: `1405`,
    226: `89`,
    2260: `1406`,
    2261: `1407`,
    2262: `1408`,
    2263: `1409`,
    2264: `1413`,
    2265: `1413`,
    2266: `1415`,
    2267: `1415`,
    2268: `1416`,
    2269: `1416`,
    227: `93`,
    2270: `1416`,
    2271: `1417`,
    2272: `1417`,
    2273: `1418`,
    2274: `1419`,
    2275: `1420`,
    2276: `1421`,
    2277: `1421`,
    2278: `1422`,
    2279: `1423`,
    228: `93`,
    2280: `1424`,
    2281: `1428`,
    2282: `1428`,
    2283: `1429`,
    2284: `1429`,
    2285: `1430`,
    2286: `1430`,
    2287: `1431`,
    2288: `1432`,
    2289: `1432`,
    229: `95`,
    2290: `1433`,
    2291: `1433`,
    2292: `1434`,
    2293: `1434`,
    2294: `1435`,
    2295: `1435`,
    2296: `1437`,
    2297: `1437`,
    2298: `1438`,
    2299: `1438`,
    23: `2`,
    230: `95`,
    2300: `1439`,
    2301: `1439`,
    2302: `1439`,
    2303: `1440`,
    2304: `1440`,
    2305: `1441`,
    2306: `1441`,
    2307: `1441`,
    2308: `1442`,
    2309: `1443`,
    231: `96`,
    2310: `1443`,
    2311: `1444`,
    2312: `1445`,
    2313: `1446`,
    2314: `1446`,
    2315: `1447`,
    2316: `1448`,
    2317: `1449`,
    2318: `1449`,
    2319: `1450`,
    232: `96`,
    2320: `1451`,
    2321: `1452`,
    2322: `1456`,
    2323: `1456`,
    2324: `1458`,
    2325: `1458`,
    2326: `1459`,
    2327: `1459`,
    2328: `1460`,
    2329: `1460`,
    233: `96`,
    2330: `1460`,
    2331: `1461`,
    2332: `1461`,
    2333: `1462`,
    2334: `1462`,
    2335: `1463`,
    2336: `1463`,
    2337: `1464`,
    2338: `1465`,
    2339: `1465`,
    234: `97`,
    2340: `1466`,
    2341: `1466`,
    2342: `1467`,
    2343: `1467`,
    2344: `1467`,
    2345: `1468`,
    2346: `1469`,
    2347: `1470`,
    2348: `1470`,
    2349: `1471`,
    235: `97`,
    2350: `1472`,
    2351: `1473`,
    2352: `1474`,
    2353: `1478`,
    2354: `1478`,
    2355: `1480`,
    2356: `1480`,
    2357: `1481`,
    2358: `1481`,
    2359: `1482`,
    236: `98`,
    2360: `1482`,
    2361: `1482`,
    2362: `1484`,
    2363: `1485`,
    2364: `1485`,
    2365: `1486`,
    2366: `1486`,
    2367: `1487`,
    2368: `1487`,
    2369: `1488`,
    237: `99`,
    2370: `1488`,
    2371: `1488`,
    2372: `1489`,
    2373: `1490`,
    2374: `1490`,
    2375: `1491`,
    2376: `1491`,
    2377: `1492`,
    2378: `1492`,
    2379: `1493`,
    238: `100`,
    2380: `1493`,
    2381: `1493`,
    2382: `1494`,
    2383: `1495`,
    2384: `1495`,
    2385: `1496`,
    2386: `1496`,
    2387: `1497`,
    2388: `1497`,
    2389: `1498`,
    239: `101`,
    2390: `1498`,
    2391: `1498`,
    2392: `1500`,
    2393: `1500`,
    2394: `1501`,
    2395: `1501`,
    2396: `1502`,
    2397: `1503`,
    2398: `1505`,
    2399: `1505`,
    24: `2`,
    240: `101`,
    2400: `1505`,
    2401: `1507`,
    2402: `1508`,
    2403: `1508`,
    2404: `1509`,
    2405: `1509`,
    2406: `1510`,
    2407: `1510`,
    2408: `1510`,
    2409: `1511`,
    241: `102`,
    2410: `1511`,
    2411: `1511`,
    2412: `1513`,
    2413: `1513`,
    2414: `1513`,
    2415: `1514`,
    2416: `1514`,
    2417: `1515`,
    2418: `1515`,
    2419: `1515`,
    242: `103`,
    2420: `1516`,
    2421: `1516`,
    2422: `1516`,
    2423: `1517`,
    2424: `1517`,
    2425: `1518`,
    2426: `1518`,
    2427: `1518`,
    2428: `1520`,
    2429: `1520`,
    243: `104`,
    2430: `1520`,
    2431: `1521`,
    2432: `1521`,
    2433: `1521`,
    2434: `1522`,
    2435: `1522`,
    2436: `1523`,
    2437: `1523`,
    2438: `1523`,
    2439: `1525`,
    244: `108`,
    2440: `1525`,
    2441: `1525`,
    2442: `1526`,
    2443: `1526`,
    2444: `1526`,
    2445: `1527`,
    2446: `1527`,
    2447: `1528`,
    2448: `1528`,
    2449: `1528`,
    245: `110`,
    2450: `1530`,
    2451: `1530`,
    2452: `1530`,
    2453: `1531`,
    2454: `1531`,
    2455: `1531`,
    2456: `1532`,
    2457: `1532`,
    2458: `1533`,
    2459: `1533`,
    246: `110`,
    2460: `1533`,
    2461: `1535`,
    2462: `1536`,
    2463: `1536`,
    2464: `1537`,
    2465: `1538`,
    2466: `1539`,
    2467: `1539`,
    2468: `1540`,
    2469: `1540`,
    247: `112`,
    2470: `1541`,
    2471: `1542`,
    2472: `1543`,
    2473: `1544`,
    2474: `1544`,
    2475: `1545`,
    2476: `1546`,
    2477: `1547`,
    2478: `1548`,
    2479: `1548`,
    248: `112`,
    2480: `1549`,
    2481: `1550`,
    2482: `1551`,
    2483: `1551`,
    2484: `1551`,
    2485: `1552`,
    2486: `1552`,
    2487: `1552`,
    2488: `1553`,
    2489: `1554`,
    249: `113`,
    2490: `1555`,
    2491: `1556`,
    2492: `1556`,
    2493: `1556`,
    2494: `1558`,
    2495: `1558`,
    2496: `1558`,
    2497: `1560`,
    2498: `1560`,
    2499: `1560`,
    25: `2`,
    250: `113`,
    2500: `1562`,
    2501: `1562`,
    2502: `1562`,
    2503: `1564`,
    2504: `1564`,
    2505: `1564`,
    2506: `1566`,
    2507: `1566`,
    2508: `1566`,
    2509: `1568`,
    251: `113`,
    2510: `1568`,
    2511: `1568`,
    2512: `1569`,
    2513: `1569`,
    2514: `1570`,
    2515: `1570`,
    2516: `1570`,
    2517: `1572`,
    2518: `1572`,
    2519: `1572`,
    252: `114`,
    2520: `1573`,
    2521: `1573`,
    2522: `1574`,
    2523: `1574`,
    2524: `1574`,
    2525: `1576`,
    2526: `1576`,
    2527: `1576`,
    2528: `1578`,
    2529: `1578`,
    253: `114`,
    2530: `1578`,
    2531: `1580`,
    2532: `1580`,
    2533: `1580`,
    2534: `1581`,
    2535: `1581`,
    2536: `1582`,
    2537: `1582`,
    2538: `1582`,
    2539: `1584`,
    254: `114`,
    2540: `1584`,
    2541: `1584`,
    2542: `1586`,
    2543: `1586`,
    2544: `1586`,
    2545: `1588`,
    2546: `1588`,
    2547: `1588`,
    2548: `1590`,
    2549: `1590`,
    255: `114`,
    2550: `1590`,
    2551: `1592`,
    2552: `1592`,
    2553: `1592`,
    2554: `1594`,
    2555: `1594`,
    2556: `1594`,
    2557: `1596`,
    2558: `1596`,
    2559: `1596`,
    256: `114`,
    2560: `1598`,
    2561: `1598`,
    2562: `1598`,
    2563: `1600`,
    2564: `1600`,
    2565: `1600`,
    2566: `1602`,
    2567: `1602`,
    2568: `1603`,
    2569: `1604`,
    257: `114`,
    2570: `1604`,
    2571: `1605`,
    2572: `1605`,
    2573: `1606`,
    2574: `1607`,
    2575: `1607`,
    2576: `1608`,
    2577: `1608`,
    2578: `1609`,
    2579: `1609`,
    258: `114`,
    2580: `1609`,
    2581: `1610`,
    2582: `1611`,
    2583: `1611`,
    2584: `1612`,
    2585: `1613`,
    2586: `1614`,
    2587: `1614`,
    2588: `1615`,
    2589: `1615`,
    259: `114`,
    2590: `1616`,
    2591: `1616`,
    2592: `1616`,
    2593: `1617`,
    2594: `1618`,
    2595: `1618`,
    2596: `1619`,
    2597: `1620`,
    2598: `1621`,
    2599: `1621`,
    26: `2`,
    260: `115`,
    2600: `1622`,
    2601: `1622`,
    2602: `1623`,
    2603: `1623`,
    2604: `1623`,
    2605: `1624`,
    2606: `1625`,
    2607: `1625`,
    2608: `1626`,
    2609: `1627`,
    261: `115`,
    2610: `1628`,
    2611: `1628`,
    2612: `1629`,
    2613: `1629`,
    2614: `1630`,
    2615: `1631`,
    2616: `1631`,
    2617: `1632`,
    2618: `1633`,
    2619: `1634`,
    262: `116`,
    2620: `1634`,
    2621: `1635`,
    2622: `1636`,
    2623: `1637`,
    2624: `1637`,
    2625: `1638`,
    2626: `1638`,
    2627: `1639`,
    2628: `1640`,
    2629: `1641`,
    263: `117`,
    2630: `1641`,
    2631: `1642`,
    2632: `1642`,
    2633: `1643`,
    2634: `1644`,
    2635: `1645`,
    2636: `1645`,
    2637: `1646`,
    2638: `1646`,
    2639: `1647`,
    264: `117`,
    2640: `1647`,
    2641: `1648`,
    2642: `1649`,
    2643: `1649`,
    2644: `1650`,
    2645: `1651`,
    2646: `1651`,
    2647: `1653`,
    2648: `1653`,
    2649: `1654`,
    265: `118`,
    2650: `1654`,
    2651: `1655`,
    2652: `1656`,
    2653: `1657`,
    2654: `1657`,
    2655: `1658`,
    2656: `1659`,
    2657: `1660`,
    2658: `1660`,
    2659: `1661`,
    266: `119`,
    2660: `1662`,
    2661: `1663`,
    2662: `1663`,
    2663: `1664`,
    2664: `1665`,
    2665: `1665`,
    2666: `1666`,
    2667: `1667`,
    2668: `1667`,
    2669: `1668`,
    267: `119`,
    2670: `1669`,
    2671: `1669`,
    2672: `1669`,
    2673: `1670`,
    2674: `1671`,
    2675: `1671`,
    2676: `1672`,
    2677: `1673`,
    2678: `1673`,
    2679: `1673`,
    268: `120`,
    2680: `1674`,
    2681: `1675`,
    2682: `1675`,
    2683: `1676`,
    2684: `1677`,
    2685: `1677`,
    2686: `1678`,
    2687: `1679`,
    2688: `1680`,
    2689: `1680`,
    269: `121`,
    2690: `1681`,
    2691: `1682`,
    2692: `1682`,
    2693: `1682`,
    2694: `1683`,
    2695: `1684`,
    2696: `1684`,
    2697: `1685`,
    2698: `1686`,
    2699: `1686`,
    27: `2`,
    270: `123`,
    2700: `1686`,
    2701: `1687`,
    2702: `1688`,
    2703: `1688`,
    2704: `1689`,
    2705: `1690`,
    2706: `1690`,
    2707: `1691`,
    2708: `1692`,
    2709: `1693`,
    271: `124`,
    2710: `1693`,
    2711: `1694`,
    2712: `1695`,
    2713: `1695`,
    2714: `1696`,
    2715: `1697`,
    2716: `1698`,
    2717: `1698`,
    2718: `1699`,
    2719: `1700`,
    272: `124`,
    2720: `1700`,
    2721: `1701`,
    2722: `1702`,
    2723: `1703`,
    2724: `1703`,
    2725: `1704`,
    2726: `1705`,
    2727: `1705`,
    2728: `1706`,
    2729: `1707`,
    273: `125`,
    2730: `1708`,
    2731: `1708`,
    2732: `1709`,
    2733: `1710`,
    2734: `1711`,
    2735: `1711`,
    2736: `1712`,
    2737: `1713`,
    2738: `1714`,
    2739: `1714`,
    274: `125`,
    2740: `1715`,
    2741: `1715`,
    2742: `1716`,
    2743: `1716`,
    2744: `1716`,
    2745: `1718`,
    2746: `1719`,
    2747: `1719`,
    2748: `1720`,
    2749: `1721`,
    275: `125`,
    2750: `1721`,
    2751: `1722`,
    2752: `1722`,
    2753: `1723`,
    2754: `1723`,
    2755: `1724`,
    2756: `1725`,
    2757: `1727`,
    2758: `1728`,
    2759: `1728`,
    276: `125`,
    2760: `1729`,
    2761: `1729`,
    2762: `1730`,
    2763: `1730`,
    2764: `1731`,
    2765: `1731`,
    2766: `1732`,
    2767: `1732`,
    2768: `1733`,
    2769: `1733`,
    277: `125`,
    2770: `1734`,
    2771: `1735`,
    2772: `1737`,
    2773: `1737`,
    2774: `1738`,
    2775: `1738`,
    2776: `1739`,
    2777: `1740`,
    2778: `1743`,
    2779: `1743`,
    278: `125`,
    2780: `1743`,
    2781: `1744`,
    2782: `1744`,
    2783: `1745`,
    2784: `1745`,
    2785: `1746`,
    2786: `1746`,
    2787: `1746`,
    2788: `1748`,
    2789: `1748`,
    279: `125`,
    2790: `1749`,
    2791: `1749`,
    2792: `1750`,
    2793: `1751`,
    2794: `1754`,
    2795: `1754`,
    2796: `1754`,
    2797: `1755`,
    2798: `1755`,
    2799: `1756`,
    28: `2`,
    280: `125`,
    2800: `1756`,
    2801: `1757`,
    2802: `1757`,
    2803: `1757`,
    2804: `1759`,
    2805: `1759`,
    2806: `1760`,
    2807: `1760`,
    2808: `1761`,
    2809: `1762`,
    281: `125`,
    2810: `1765`,
    2811: `1765`,
    2812: `1765`,
    2813: `1766`,
    2814: `1766`,
    2815: `1767`,
    2816: `1768`,
    2817: `1768`,
    2818: `1768`,
    2819: `1769`,
    282: `125`,
    2820: `1769`,
    2821: `1770`,
    2822: `1770`,
    2823: `1770`,
    2824: `1772`,
    2825: `1773`,
    2826: `1775`,
    2827: `1776`,
    2828: `1777`,
    2829: `1778`,
    283: `126`,
    2830: `1778`,
    2831: `1779`,
    2832: `1779`,
    2833: `1780`,
    2834: `1780`,
    2835: `1780`,
    2836: `1781`,
    2837: `1783`,
    2838: `1784`,
    2839: `1785`,
    284: `126`,
    2840: `1785`,
    2841: `1785`,
    2842: `1786`,
    2843: `1787`,
    2844: `1787`,
    2845: `1788`,
    2846: `1788`,
    2847: `1788`,
    2848: `1789`,
    2849: `1791`,
    285: `127`,
    2850: `1792`,
    2851: `1792`,
    2852: `1792`,
    2853: `1794`,
    2854: `1795`,
    2855: `1795`,
    2856: `1795`,
    2857: `1797`,
    2858: `1798`,
    2859: `1798`,
    286: `128`,
    2860: `1799`,
    2861: `1801`,
    2862: `1802`,
    2863: `1803`,
    2864: `1804`,
    2865: `1805`,
    2866: `1805`,
    2867: `1806`,
    2868: `1807`,
    2869: `1808`,
    287: `128`,
    2870: `1809`,
    2871: `1811`,
    2872: `1812`,
    2873: `1812`,
    2874: `1812`,
    2875: `1813`,
    2876: `1813`,
    2877: `1814`,
    2878: `1815`,
    2879: `1815`,
    288: `128`,
    2880: `1816`,
    2881: `1817`,
    2882: `1817`,
    2883: `1818`,
    2884: `1819`,
    2885: `1819`,
    2886: `1820`,
    2887: `1821`,
    2888: `1821`,
    2889: `1822`,
    289: `129`,
    2890: `1823`,
    2891: `1823`,
    2892: `1824`,
    2893: `1825`,
    2894: `1825`,
    2895: `1826`,
    2896: `1827`,
    2897: `1827`,
    2898: `1827`,
    2899: `1828`,
    29: `2`,
    290: `130`,
    2900: `1828`,
    2901: `1829`,
    2902: `1830`,
    2903: `1830`,
    2904: `1830`,
    2905: `1831`,
    2906: `1831`,
    2907: `1832`,
    2908: `1833`,
    2909: `1833`,
    291: `131`,
    2910: `1833`,
    2911: `1834`,
    2912: `1835`,
    2913: `1835`,
    2914: `1836`,
    2915: `1837`,
    2916: `1837`,
    2917: `1837`,
    2918: `1838`,
    2919: `1839`,
    292: `131`,
    2920: `1839`,
    2921: `1840`,
    2922: `1841`,
    2923: `1841`,
    2924: `1841`,
    2925: `1842`,
    2926: `1842`,
    2927: `1843`,
    2928: `1844`,
    2929: `1844`,
    293: `132`,
    2930: `1844`,
    2931: `1845`,
    2932: `1846`,
    2933: `1846`,
    2934: `1847`,
    2935: `1848`,
    2936: `1848`,
    2937: `1848`,
    2938: `1849`,
    2939: `1850`,
    294: `133`,
    2940: `1850`,
    2941: `1851`,
    2942: `1852`,
    2943: `1852`,
    2944: `1852`,
    2945: `1853`,
    2946: `1854`,
    2947: `1854`,
    2948: `1855`,
    2949: `1856`,
    295: `133`,
    2950: `1856`,
    2951: `1856`,
    2952: `1857`,
    2953: `1857`,
    2954: `1858`,
    2955: `1859`,
    2956: `1859`,
    2957: `1859`,
    2958: `1860`,
    2959: `1861`,
    296: `133`,
    2960: `1861`,
    2961: `1862`,
    2962: `1863`,
    2963: `1863`,
    2964: `1863`,
    2965: `1864`,
    2966: `1864`,
    2967: `1865`,
    2968: `1866`,
    2969: `1866`,
    297: `134`,
    2970: `1866`,
    2971: `1867`,
    2972: `1868`,
    2973: `1868`,
    2974: `1869`,
    2975: `1870`,
    2976: `1870`,
    2977: `1870`,
    2978: `1871`,
    2979: `1871`,
    298: `134`,
    2980: `1872`,
    2981: `1873`,
    2982: `1873`,
    2983: `1873`,
    2984: `1874`,
    2985: `1875`,
    2986: `1875`,
    2987: `1876`,
    2988: `1877`,
    2989: `1877`,
    299: `135`,
    2990: `1877`,
    2991: `1878`,
    2992: `1878`,
    2993: `1879`,
    2994: `1880`,
    2995: `1880`,
    2996: `1880`,
    2997: `1881`,
    2998: `1882`,
    2999: `1882`,
    3: `2`,
    30: `2`,
    300: `135`,
    3000: `1883`,
    3001: `1884`,
    3002: `1884`,
    3003: `1884`,
    3004: `1885`,
    3005: `1886`,
    3006: `1886`,
    3007: `1887`,
    3008: `1887`,
    3009: `1887`,
    301: `136`,
    3010: `1888`,
    3011: `1889`,
    3012: `1889`,
    3013: `1890`,
    3014: `1892`,
    3015: `1893`,
    3016: `1893`,
    3017: `1893`,
    3018: `1894`,
    3019: `1894`,
    302: `136`,
    3020: `1895`,
    3021: `1896`,
    3022: `1896`,
    3023: `1897`,
    3024: `1898`,
    3025: `1898`,
    3026: `1899`,
    3027: `1900`,
    3028: `1900`,
    3029: `1901`,
    303: `137`,
    3030: `1902`,
    3031: `1902`,
    3032: `1903`,
    3033: `1904`,
    3034: `1904`,
    3035: `1905`,
    3036: `1906`,
    3037: `1906`,
    3038: `1907`,
    3039: `1908`,
    304: `137`,
    3040: `1908`,
    3041: `1908`,
    3042: `1909`,
    3043: `1909`,
    3044: `1910`,
    3045: `1911`,
    3046: `1911`,
    3047: `1911`,
    3048: `1912`,
    3049: `1912`,
    305: `138`,
    3050: `1913`,
    3051: `1914`,
    3052: `1914`,
    3053: `1914`,
    3054: `1915`,
    3055: `1916`,
    3056: `1916`,
    3057: `1917`,
    3058: `1918`,
    3059: `1918`,
    306: `138`,
    3060: `1918`,
    3061: `1919`,
    3062: `1919`,
    3063: `1920`,
    3064: `1921`,
    3065: `1921`,
    3066: `1921`,
    3067: `1922`,
    3068: `1923`,
    3069: `1923`,
    307: `139`,
    3070: `1924`,
    3071: `1925`,
    3072: `1925`,
    3073: `1925`,
    3074: `1926`,
    3075: `1926`,
    3076: `1927`,
    3077: `1928`,
    3078: `1928`,
    3079: `1928`,
    308: `140`,
    3080: `1929`,
    3081: `1930`,
    3082: `1930`,
    3083: `1931`,
    3084: `1932`,
    3085: `1932`,
    3086: `1932`,
    3087: `1933`,
    3088: `1934`,
    3089: `1934`,
    309: `140`,
    3090: `1935`,
    3091: `1936`,
    3092: `1936`,
    3093: `1936`,
    3094: `1937`,
    3095: `1938`,
    3096: `1938`,
    3097: `1939`,
    3098: `1939`,
    3099: `1939`,
    31: `2`,
    310: `141`,
    3100: `1940`,
    3101: `1940`,
    3102: `1941`,
    3103: `1944`,
    3104: `1944`,
    3105: `1945`,
    3106: `1945`,
    3107: `1946`,
    3108: `1947`,
    3109: `1948`,
    311: `141`,
    3110: `1949`,
    3111: `1949`,
    3112: `1950`,
    3113: `1951`,
    3114: `1951`,
    3115: `1952`,
    3116: `1952`,
    3117: `1953`,
    3118: `1953`,
    3119: `1954`,
    312: `142`,
    3120: `1955`,
    3121: `1956`,
    3122: `1956`,
    3123: `1957`,
    3124: `1958`,
    3125: `1959`,
    3126: `1960`,
    3127: `1960`,
    3128: `1961`,
    3129: `1962`,
    313: `142`,
    3130: `1963`,
    3131: `1965`,
    3132: `1965`,
    3133: `1966`,
    3134: `1967`,
    3135: `1967`,
    3136: `1968`,
    3137: `1971`,
    3138: `1971`,
    3139: `1972`,
    314: `143`,
    3140: `1972`,
    3141: `1973`,
    3142: `1974`,
    3143: `1975`,
    3144: `1976`,
    3145: `1976`,
    3146: `1977`,
    3147: `1978`,
    3148: `1978`,
    3149: `1979`,
    315: `143`,
    3150: `1979`,
    3151: `1980`,
    3152: `1980`,
    3153: `1981`,
    3154: `1982`,
    3155: `1983`,
    3156: `1983`,
    3157: `1984`,
    3158: `1984`,
    3159: `1985`,
    316: `144`,
    3160: `1986`,
    3161: `1987`,
    3162: `1987`,
    3163: `1988`,
    3164: `1988`,
    3165: `1989`,
    3166: `1990`,
    3167: `1991`,
    3168: `1991`,
    3169: `1992`,
    317: `144`,
    3170: `1993`,
    3171: `1994`,
    3172: `1996`,
    3173: `1997`,
    3174: `1997`,
    3175: `1998`,
    3176: `1998`,
    3177: `1998`,
    3178: `2000`,
    3179: `2000`,
    318: `145`,
    3180: `2001`,
    3181: `2001`,
    3182: `2002`,
    3183: `2003`,
    3184: `2004`,
    3185: `2004`,
    3186: `2004`,
    3187: `2005`,
    3188: `2005`,
    3189: `2005`,
    319: `145`,
    3190: `2007`,
    3191: `2008`,
    3192: `2008`,
    3193: `2009`,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T9","name":"v18648","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_buyer_api_purchase_bronze0_179","type":"bool"},{"internalType":"bool","name":"_buyer_api_purchase_gold0_179","type":"bool"},{"internalType":"bool","name":"_buyer_api_purchase_silver0_179","type":"bool"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"}],"internalType":"struct T2","name":"_controller_api_restock0_179","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"}],"internalType":"struct T2","name":"_controller_api_set_prices0_179","type":"tuple"},{"internalType":"bool","name":"_controller_api_terminate0_179","type":"bool"},{"internalType":"bool","name":"_controller_api_toggle_pause0_179","type":"bool"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"}],"internalType":"struct T2","name":"_controller_api_withdraw0_179","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v10036","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v10723","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v11406","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v12843","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6971","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v7856","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v8598","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v9340","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"price_change","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes6","name":"v0","type":"bytes6"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"purchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"restock","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"terminate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"withdraw","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"v18651","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"v18654","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_buyer_api_purchase_bronze0_179","type":"bool"},{"internalType":"bool","name":"_buyer_api_purchase_gold0_179","type":"bool"},{"internalType":"bool","name":"_buyer_api_purchase_silver0_179","type":"bool"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"}],"internalType":"struct T2","name":"_controller_api_restock0_179","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"}],"internalType":"struct T2","name":"_controller_api_set_prices0_179","type":"tuple"},{"internalType":"bool","name":"_controller_api_terminate0_179","type":"bool"},{"internalType":"bool","name":"_controller_api_toggle_pause0_179","type":"bool"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"}],"internalType":"struct T2","name":"_controller_api_withdraw0_179","type":"tuple"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v18657","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyer_api_purchase_bronze","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyer_api_purchase_gold","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyer_api_purchase_silver","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"coin_prices","outputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"coin_supply","outputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"v18625","type":"tuple"}],"name":"controller_api_restock","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"v18631","type":"tuple"}],"name":"controller_api_set_prices","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"controller_api_terminate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"controller_api_toggle_pause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"v18645","type":"tuple"}],"name":"controller_api_withdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"is_paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f62004a6e38819003918201601f19168301916001600160401b0383118484101762000674578084926080946040528339810103126200087f5760405190608082016001600160401b0381118382101762000674576200009391606091604052805184526200007460208201620008a0565b60208501526200008760408201620008a0565b604085015201620008a0565b60608201524360035560405161018081016001600160401b03811182821017620006745760009161016091604052828152826020820152826040820152826060820152620000e0620008b5565b6080820152620000ef620008b5565b60a08201528260c08201528260e0820152826101008201528261012082015282610140820152015260405160a0810181811060018060401b0382111762000674576040526200013d620008b5565b815262000149620008d6565b602082015262000158620008d6565b604082015262000167620008d6565b60608201526000608082015260ff6004541662000866577f445f7d1d3c7ecf7a61d6d64c4194290a54beada7275d0418d50b9c355c8b665360a060405133815284516020820152600180831b036020860151166040820152600180831b036040860151166060820152600180831b036060860151166080820152a18151801590811562000859575b50156200084057600081515260006020825101526000604082510152805160208201515280516020808301510152805160406020830151015260208101518051604060208201519101511515604051916200024a8362000884565b600083526020830152604082015262000262620008d6565b9160005b60038110620008065750508152806040830152602081015160406020820151910151151560405191620002998362000884565b6000835260208301526040820152620002b1620008d6565b9160005b60038110620007cc5750506020820152606082015260018060a01b0360408301511660018060a01b0360208401511614600014620007c45760005b15620007ab57606082015160208301516001600160a01b039182169116810362000787575060005b156200076e57346200075557336080820152602082015160408301516001600160a01b03908116911681810362000731575060005b15620007285760608301516001600160a01b031603620007205760005b156200070757604051916001600160401b0360c0840190811190841117620006745760c0830160405260008352600060208401526000604084015260006060840152620003b6620008d6565b6080840152600060a08401523383526020818101516001600160a01b0390811682860152604080840151821681870152606093840151909116838601529183015180830151918201519183015192519092909190151590620004188362000884565b600083526020830152604082015262000430620008d6565b9160005b60038110620006b757505060408201526080830152608060018060a01b039101511660a08201526001600055436001556040519060018060a01b03815116602083015260018060a01b03602082015116604083015260018060a01b03604082015116606083015260018060a01b036060820151166080830152608081015160a083016000905b600382106200068a5750505060a001516001600160a01b03166101c08281019190915281526101e081016001600160401b03811182821017620006745760405280516001600160401b0381116200067457600254600181811c9116801562000669575b60208210146200065357601f8111620005e9575b50602091601f82116001146200057f5791819260009262000573575b50508160011b916000199060031b1c1916176002555b6040516141379081620009378239f35b0151905038806200054d565b601f19821692600260005260206000209160005b858110620005d057508360019510620005b6575b505050811b0160025562000563565b015160001960f88460031b161c19169055388080620005a7565b9192602060018192868501518155019401920162000593565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000648575b601f0160051c01905b8181106200063b575062000531565b600081556001016200062c565b909150819062000623565b634e487b7160e01b600052602260045260246000fd5b90607f16906200051d565b634e487b7160e01b600052604160045260246000fd5b602060606001926040865180518352848101518584015201511515604082015201930191019091620004ba565b620006c381836200090e565b51620006d082866200090e565b52620006dd81856200090e565b506000198114620006f15760010162000434565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260126004820152602490fd5b60016200036a565b5060006200036a565b60608401516001600160a01b0316036200074d5760006200034d565b60016200034d565b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b60408301516001600160a01b031603620007a357600062000318565b600162000318565b60405163100960cb60e01b8152600f6004820152602490fd5b6001620002f0565b620007d881836200090e565b51620007e582866200090e565b52620007f281856200090e565b506000198114620006f157600101620002b5565b6200081281836200090e565b516200081f82866200090e565b526200082c81856200090e565b506000198114620006f15760010162000266565b60405163100960cb60e01b8152600e6004820152602490fd5b90506001541438620001ef565b60405163100960cb60e01b8152600d6004820152602490fd5b600080fd5b606081019081106001600160401b038211176200067457604052565b51906001600160a01b03821682036200087f57565b60405190620008c48262000884565b60006040838281528260208201520152565b60405190620008e58262000884565b8160005b60608110620008f6575050565b60209062000903620008b5565b8184015201620008e9565b906003811015620009205760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f11461016c57806341712c0a14610163578063573b85101461015a57806362781580146101515780636bb2590614610148578063832307571461013f578063897fb2de146101365780638c3004551461012d5780638e19e40d146101245780639d4f8aa91461011b578063ab53f2c614610112578063abc8014a14610109578063aed712a014610100578063beeb3721146100f7578063c2e3cb94146100ee578063cd419138146100e55763e091078a0361000e576100e0610abf565b61000e565b506100e0610a87565b506100e0610a47565b506100e0610a0d565b506100e06109c3565b506100e0610972565b506100e06108fd565b506100e0610863565b506100e0610817565b506100e0610771565b506100e0610685565b506100e0610666565b506100e0610628565b506100e06105cf565b506100e0610423565b506100e06101a1565b503461018b57600036600319011261018b576020600354604051908152f35b600080fd5b602090600319011261018b57600490565b506101be6101ae36610190565b6101b6610d9e565b503690610e25565b6101c66121c1565b6103c86000916101d960038454146110c0565b6101e1610c49565b6101f5602091828082518301019101612219565b9161021161020c61020860045460ff1690565b1590565b6110e0565b61025a6040967fd8b4bef0baf1b43e1c773ecc562857f82f7aa078ea677386f72396872c0e8515885180610246843383610fe5565b0390a1518015908115610417575b50611100565b6102643415611120565b6103a2608084019260018060a01b039233846102808751610e7b565b1603610400576102906001611140565b878080806102a66102a18a51610e7b565b610e7b565b6101008b0151908282156103f7575bf1156103ea575b87815261039d6103048960e08901516102ff8d6101208c0151906102e6818a840151930151151590565b916102ef610cf2565b9586528986015284019015159052565b612502565b838301908152610333610319858a0151610e7b565b6103238951610e7b565b90886101408c01519216906123ff565b610374610341825160200190565b51518c6101608b019182519003950194855261035f8d8b0151610e7b565b8861036a8b51610e7b565b92519216906123ff565b51915192808301518b8282015191015115159161038f610cf2565b95865285015215158a840152565b612566565b506101806103bd6103b66060860151610e7b565b9351610e7b565b9301519216906123ff565b80556103d46000600155565b6103dc61231a565b5160008152602090f35b0390f35b6103f261230d565b6102bc565b506108fc6102b5565b610290336104116102a18951610e7b565b14611140565b90506001541438610254565b506105b76104336101ae36610190565b608061043d610e43565b9161044c600160005414611160565b6104c561046961045a610c49565b60208082518301019101610f3c565b9161048161047c61020860045460ff1690565b611180565b7fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596604051806104b1843383610fe5565b0390a15180159081156105c3575b506111a0565b6104cf34156111c0565b6104eb3360018060a01b036104e48451610e7b565b16146111e0565b629896808351526301312d006020845101526301c9c380604084510152610510611031565b9261052461051e8351610e7b565b856110b1565b61053d6105346020840151610e7b565b602086016110b1565b61055661054d6040840151610e7b565b604086016110b1565b61056f6105666060840151610e7b565b606086016110b1565b61058761057f60a0840151610e7b565b8486016110b1565b5160a0840152600060c0840152600060e08401524361010084015201516101208201526000610140820152611e7e565b60405160008152602090f35b905060015414386104bf565b50600036600319011261018b57602060606105e8610d9e565b61061c816105f46140ac565b858101906002825152511515858251015261060d6140ac565b90600082525186820152612b2c565b01511515604051908152f35b50600036600319011261018b5760206040610641610d9e565b61061c8161064d6140ac565b858101906001825152511515858251015261060d6140ac565b503461018b57600036600319011261018b576020600154604051908152f35b5061020036600319011261018b5761069b610d9e565b604051906106a882610b76565b60043582526101e036602319011261018b576105b7916106c6610cff565b6106ce61265f565b81526106d861266e565b60208201526106e561267b565b60408201526106f2612688565b6060820152610700366126e3565b608082015261070e36612721565b60a082015261071b612695565b60c08201526107286126a3565b60e082015261073636612763565b6101008201526020820152612b2c565b6040809180518452602081015160208501520151910152565b60608101929161076f9190610746565b565b503461018b57600036600319011261018b5761078b610d7f565b506103e660a0610799610d9e565b60005460058110156107e35760036107b19114611220565b6101a06107ce6107bf610c49565b60208082518301019101612219565b0151828201525b01516040519182918261075f565b60056107ef9114611200565b61024061080c6107fd610c49565b60208082518301019101612894565b0151828201526107d5565b50600036600319011261018b5760208061082f610d9e565b61061c8161083b6140ac565b84810190600082515251151585825101526108546140ac565b90600082525185820152612b2c565b503461018b57600036600319011261018b576103e66108c0610160610886610d9e565b60005460058110156108d257600361089e9114611260565b6108b16108b860c06108b16107bf610c49565b0151151590565b151582840152565b60405190151581529081906020820190565b60056108de9114611240565b6108f860c06108ee6107fd610c49565b0151151582840152565b6108b1565b503461018b5760008060031936011261096f57805461091a610c49565b906040519283918252602090604082840152835191826040850152815b83811061095857505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610937565b80fd5b50600036600319011261018b57602061010061098c610d9e565b61061c816109986140ac565b85810190600582515251151560c08251015261060d6140ac565b606090600319011261018b57600490565b50602060c06109e961061c6109d7366109b2565b6109df610d9e565b92839136906126b1565b6109f16140c8565b908151528581019060038251525160808251015261060d6140ac565b506020610140610a2261061c6109d7366109b2565b610a2a6140c8565b90815152858101906007825152516101008251015261060d6140ac565b50600036600319011261018b576020610120610a61610d9e565b61061c81610a6d6140ac565b85810190600682515251151560e08251015261060d6140ac565b50602060e0610a9b61061c6109d7366109b2565b610aa36140c8565b908151528581019060048251525160a08251015261060d6140ac565b503461018b57600036600319011261018b57610ad9610d7f565b506103e66080610ae7610d9e565b6000546005811015610b0c576003610aff91146112a0565b60a06107ce6107bf610c49565b6005610b189114611280565b60a061080c6107fd610c49565b90600182811c92168015610b55575b6020831014610b3f57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610b34565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610b9157604052565b610b99610b5f565b604052565b606081019081106001600160401b03821117610b9157604052565b602081019081106001600160401b03821117610b9157604052565b6101c081019081106001600160401b03821117610b9157604052565b608081019081106001600160401b03821117610b9157604052565b60a081019081106001600160401b03821117610b9157604052565b601f909101601f19168101906001600160401b03821190821017610b9157604052565b6040519060008260025491610c5d83610b25565b808352600193808516908115610cd15750600114610c83575b5061076f92500383610c26565b600260009081526000805160206140eb83398151915294602093509091905b818310610cb957505061076f935082010138610c76565b85548884018501529485019487945091830191610ca2565b905061076f94506020925060ff191682840152151560051b82010138610c76565b6040519061076f82610b9e565b6040519061012082016001600160401b03811183821017610b9157604052565b604051906102c082016001600160401b03811183821017610b9157604052565b604051906101c082016001600160401b03811183821017610b9157604052565b6040519061034082016001600160401b03811183821017610b9157604052565b60405190610d8c82610b9e565b60006040838281528260208201520152565b6040519061018082016001600160401b03811183821017610e18575b60405281610160600091828152826020820152826040820152826060820152610de1610d7f565b6080820152610dee610d7f565b60a08201528260c08201528260e08201528261010082015282610120820152826101408201520152565b610e20610b5f565b610dba565b919082602091031261018b57604051610e3d81610bb9565b91358252565b60405190602082016001600160401b03811183821017610e6e575b60405281610e6a610d7f565b9052565b610e76610b5f565b610e5e565b6001600160a01b031690565b51906001600160a01b038216820361018b57565b8015150361018b57565b519061076f82610e9b565b919082606091031261018b57604051610ec881610b9e565b60408082948051845260208101516020850152015191610ee783610e9b565b0152565b81601f8201121561018b5760405191610f0383610b9e565b829061012083019281841161018b57915b838310610f22575050505090565b6020606091610f318486610eb0565b815201920191610f14565b6101c08183031261018b5760405191610fc3916101a091610fb89060c086016001600160401b03811187821017610fcb575b604052610f7a83610e87565b8652610f8860208401610e87565b6020870152610f9960408401610e87565b6040870152610faa60608401610e87565b606087015260808301610eeb565b608085015201610e87565b60a082015290565b610fd3610b5f565b610f6e565b6001600160a01b03169052565b6001600160a01b0390911681529051602082015260400190565b6040519061100c82610b9e565b8160005b6060811061101c575050565b602090611027610d7f565b8184015201611010565b6040519061016082016001600160401b038111838210176110a4575b6040528161014060009182815282602082015282604082015282606082015282608082015261107a610d7f565b60a08201528260c08201528260e08201528261010082015261109a610fff565b6101208201520152565b6110ac610b5f565b61104d565b6001600160a01b039091169052565b156110c757565b60405163100960cb60e01b815260186004820152602490fd5b156110e757565b60405163100960cb60e01b815260196004820152602490fd5b1561110757565b60405163100960cb60e01b8152601a6004820152602490fd5b1561112757565b60405163100960cb60e01b8152601b6004820152602490fd5b1561114757565b60405163100960cb60e01b8152601c6004820152602490fd5b1561116757565b60405163100960cb60e01b815260136004820152602490fd5b1561118757565b60405163100960cb60e01b815260146004820152602490fd5b156111a757565b60405163100960cb60e01b815260156004820152602490fd5b156111c757565b60405163100960cb60e01b815260166004820152602490fd5b156111e757565b60405163100960cb60e01b815260176004820152602490fd5b1561120757565b60405163100960cb60e01b8152600a6004820152602490fd5b1561122757565b60405163100960cb60e01b815260096004820152602490fd5b1561124757565b60405163100960cb60e01b8152600c6004820152602490fd5b1561126757565b60405163100960cb60e01b8152600b6004820152602490fd5b1561128757565b60405163100960cb60e01b815260086004820152602490fd5b156112a757565b60405163100960cb60e01b815260076004820152602490fd5b156112c757565b60405163100960cb60e01b815260216004820152602490fd5b156112e757565b60405163100960cb60e01b815260226004820152602490fd5b1561130757565b60405163100960cb60e01b815260236004820152602490fd5b1561132757565b60405163100960cb60e01b8152606d6004820152602490fd5b1561134757565b60405163100960cb60e01b8152606e6004820152602490fd5b1561136757565b60405163100960cb60e01b8152606f6004820152602490fd5b1561138757565b60405163100960cb60e01b815260706004820152602490fd5b156113a757565b60405163100960cb60e01b815260726004820152602490fd5b156113c757565b60405163100960cb60e01b815260746004820152602490fd5b156113e757565b60405163100960cb60e01b815260766004820152602490fd5b1561140757565b60405163100960cb60e01b815260786004820152602490fd5b1561142757565b60405163100960cb60e01b815260646004820152602490fd5b1561144757565b60405163100960cb60e01b815260666004820152602490fd5b1561146757565b60405163100960cb60e01b815260686004820152602490fd5b1561148757565b60405163100960cb60e01b8152606a6004820152602490fd5b156114a757565b60405163100960cb60e01b8152606c6004820152602490fd5b156114c757565b60405163100960cb60e01b8152605b6004820152602490fd5b156114e757565b60405163100960cb60e01b8152605d6004820152602490fd5b1561150757565b60405163100960cb60e01b8152605f6004820152602490fd5b1561152757565b60405163100960cb60e01b815260616004820152602490fd5b1561154757565b60405163100960cb60e01b815260636004820152602490fd5b1561156757565b60405163100960cb60e01b815260526004820152602490fd5b1561158757565b60405163100960cb60e01b815260546004820152602490fd5b156115a757565b60405163100960cb60e01b815260566004820152602490fd5b156115c757565b60405163100960cb60e01b815260586004820152602490fd5b156115e757565b60405163100960cb60e01b8152605a6004820152602490fd5b1561160757565b60405163100960cb60e01b815260486004820152602490fd5b1561162757565b60405163100960cb60e01b815260496004820152602490fd5b1561164757565b60405163100960cb60e01b8152604b6004820152602490fd5b1561166757565b60405163100960cb60e01b8152604d6004820152602490fd5b1561168757565b60405163100960cb60e01b8152604f6004820152602490fd5b156116a757565b60405163100960cb60e01b815260516004820152602490fd5b156116c757565b60405163100960cb60e01b8152603c6004820152602490fd5b156116e757565b60405163100960cb60e01b8152603d6004820152602490fd5b1561170757565b60405163100960cb60e01b8152603f6004820152602490fd5b1561172757565b60405163100960cb60e01b815260416004820152602490fd5b1561174757565b60405163100960cb60e01b815260436004820152602490fd5b1561176757565b60405163100960cb60e01b815260456004820152602490fd5b1561178757565b60405163100960cb60e01b815260306004820152602490fd5b156117a757565b60405163100960cb60e01b815260316004820152602490fd5b156117c757565b60405163100960cb60e01b815260336004820152602490fd5b156117e757565b60405163100960cb60e01b815260356004820152602490fd5b1561180757565b60405163100960cb60e01b815260376004820152602490fd5b1561182757565b60405163100960cb60e01b815260396004820152602490fd5b1561184757565b602460405163100960cb60e01b8152816004820152fd5b1561186557565b60405163100960cb60e01b815260256004820152602490fd5b1561188557565b60405163100960cb60e01b815260276004820152602490fd5b156118a557565b60405163100960cb60e01b815260296004820152602490fd5b156118c557565b60405163100960cb60e01b8152602b6004820152602490fd5b156118e557565b60405163100960cb60e01b8152602d6004820152602490fd5b6040519061190b82610b76565b81611914610d7f565b81526020611920610d7f565b910152565b9060038110156119365760051b0190565b634e487b7160e01b600052603260045260246000fd5b611954610d1f565b90600080835280602084015280604084015280606084015280608084015261197a610d7f565b60a08401528060c08401528060e0840152611993610fff565b6101008401528061012084015280610140840152806101608401526119b6610d7f565b610180840152806101a08401526119cb610d7f565b6101c0840152806101e08401526119e0610d7f565b610200840152806102208401526119f5610d7f565b61024084015280610260840152806102808401526102a0830152565b60408091805184526020810151602085015201511515910152565b906000905b60038210611a3e57505050565b6020606082611a506001948751611a11565b01930191019091611a31565b9190916104e0610500820193611a73838251610fd8565b611a8560208201516020850190610fd8565b611a9760408201516040850190610fd8565b611aa960608201516060850190610fd8565b611abb60808201516080850190610fd8565b611acd60a082015160a0850190610746565b60c081015190611ae4610100928386019015159052565b60e081015191611afb610120938487019015159052565b81015191611b0f6101409384870190611a2c565b810151916102609283860152810151611b2f610280918287019015159052565b61016082015192611b476102a0948588019015159052565b611b5b6101808401516102c0880190611a11565b6101a0830151610320870152611b7b6101c0840151610340880190611a11565b6101e08301516103a0870152611b9b6102008401516103c0880190611a11565b610220830151610420870152611bbb610240840151610440880190610746565b8201516104a08601528101516104c08501520151910152565b818110611bdf575050565b60008155600101611bd4565b90601f8211611bf8575050565b61076f9160026000526020600020906020601f840160051c83019310611c26575b601f0160051c0190611bd4565b9091508190611c19565b80519091906001600160401b038111611d06575b611c5881611c53600254610b25565b611beb565b602080601f8311600114611c945750819293600092611c89575b50508160011b916000199060031b1c191617600255565b015190503880611c72565b6002600052601f198316949091906000805160206140eb833981519152926000905b878210611cee575050836001959610611cd5575b505050811b01600255565b015160001960f88460031b161c19169055388080611cca565b80600185968294968601518155019501930190611cb6565b611d0e610b5f565b611c44565b60405190611d2082610bd4565b816000808252806020830152806040830152806060830152806080830152611d46610d7f565b60a08301528060c0830152611d59610fff565b60e083015280610100830152611d6d610d7f565b61012083015280610140830152806101608301526101808201526101a0611920610d7f565b61076f909291926103206101a0610380830195611db0848251610fd8565b611dc260208201516020860190610fd8565b611dd460408201516040860190610fd8565b611de660608201516060860190610fd8565b611df860808201516080860190610fd8565b611e0a60a082015160a0860190610746565b611e5060c0820151611e23610100918288019015159052565b60e083015190611e396101209283890190611a2c565b830151610240870152820151610260860190611a11565b6101408101516102c08501526101608101516102e08501526101808101516103008501520151910190610746565b611e866118fe565b60e082015115611ff057611feb61076f92611fdd92611fac6101209283810190602082515151940193845152611ebd825160200190565b515184516020015281516040015151604085510152611eda611d13565b94611eee611ee88351610e7b565b876110b1565b611f07611efe6020840151610e7b565b602088016110b1565b611f20611f176040840151610e7b565b604088016110b1565b611f39611f306060840151610e7b565b606088016110b1565b611f52611f496080840151610e7b565b608088016110b1565b60a082015160a0870152611f75611f6c60c0840151151590565b151560c0880152565b825160e087015261014091820151610100870152825151908601528151515190850152805160200151516101608501525160400190565b5151610180830152516101a0820152611fc56003600055565b611fce43600155565b60405192839160208301611d92565b03601f198101835282610c26565b611c30565b611feb611fdd91604061076f946101209261216084830180515151835152612019815160200190565b515183516020015280516040015151858451015261210c61203861194c565b9661204c6120468751610e7b565b896110b1565b61206561205c6020880151610e7b565b60208a016110b1565b61207c61207488880151610e7b565b888a016110b1565b61209561208c6060880151610e7b565b60608a016110b1565b6120ae6120a56080880151610e7b565b60808a016110b1565b61210660a0870196875160a08b015260c08101926120d86120cf8551151590565b151560c08d0152565b600060e08c015285516101008c015261014091820151908b01528251156121b9576000905b8a019015159052565b51151590565b156121af5761212160005b1515610160880152565b805151610180870152805151516101a08701528051602001516101c0870152805160200151516101e08701528051604001516102008701525160400190565b5151610220850152516102408401528051516102608401526020815101516102808401525101516102a08201526121976005600055565b6121a043600155565b60405192839160208301611a5c565b6121216001612117565b6001906120fd565b604051906121ce82610b9e565b60006040838281526121de610fff565b60208201520152565b919082606091031261018b576040516121ff81610b9e565b604080829480518452602081015160208501520151910152565b906103808282031261018b5761230490610320612234610d3f565b9361223e81610e87565b855261224c60208201610e87565b602086015261225d60408201610e87565b604086015261226e60608201610e87565b606086015261227f60808201610e87565b60808601526122918360a083016121e7565b60a08601526101006122a4818301610ea5565b60c0870152610120906122b985838501610eeb565b60e0880152610240830151908701526122d6846102608401610eb0565b908601526102c08101516101408601526102e0810151610160860152610300810151610180860152016121e7565b6101a082015290565b506040513d6000823e3d90fd5b612325600254610b25565b8061232d5750565b601f811160011461234057506000600255565b600260005261238590601f0160051c6000805160206140eb833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611bd4565b6000602081208160025555565b600080916123f8938260405191602083019263a9059cbb60e01b845260018060a01b03809216602482015260016044820152604481526123d181610bf0565b5193165af16123e86123e161243d565b80926124a2565b506020808251830101910161248a565b1561018b57565b600091906123f893838093604051602081019363a9059cbb60e01b855260018060a01b0380931660248301526044820152604481526123d181610bf0565b3d15612485573d906001600160401b038211612478575b6040519161246c601f8201601f191660200184610c26565b82523d6000602084013e565b612480610b5f565b612454565b606090565b9081602091031261018b575161249f81610e9b565b90565b156124aa5790565b8051156124b957805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156124da5790565b8051156124e957805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b919061250c610fff565b926000805b60038110612520575050508252565b61252a8184611925565b516125358288611925565b526125408187611925565b50600019811461255257600101612511565b634e487b7160e01b82526011600452602482fd5b9190612570610fff565b926000805b60038110612587575050506020830152565b6125918184611925565b5161259c8288611925565b526125a78187611925565b50600019811461255257600101612575565b91906125c3610fff565b926000805b600381106125da575050506020830152565b6125e48184611925565b516125ef8288611925565b526125fa8187611925565b506000198114612552576001016125c8565b9190612616610fff565b926000805b6003811061262d575050506040830152565b6126378184611925565b516126428288611925565b5261264d8187611925565b5060001981146125525760010161261b565b60243590600882101561018b57565b6044359061076f82610e9b565b6064359061076f82610e9b565b6084359061076f82610e9b565b610164359061076f82610e9b565b610184359061076f82610e9b565b919082606091031261018b576040516126c981610b9e565b604080829480358452602081013560208501520135910152565b60609060a319011261018b57604051906126fc82610bb9565b6040518261270982610b9e565b60a435825260c435602083015260e435604083015252565b60609061010319011261018b576040519061273b82610bb9565b6040518261274882610b9e565b61010435825261012435602083015261014435604083015252565b6060906101a319011261018b576040519061277d82610bb9565b6040518261278a82610b9e565b6101a43582526101c43560208301526101e435604083015252565b6127ad610d5f565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e084015280610100840152806101208401528061014084015280610160840152612801610e43565b610180840152806101a0840152612816610fff565b6101c0840152806101e084015261282b610fff565b61020084015280610220840152612840610fff565b61024084015261284e610e43565b61026084015261285c610e43565b610280840152806102a0840152612871610fff565b6102c0840152806102e0840152612886610fff565b610300840152610320830152565b906105008282031261018b576104e06128ab610d1f565b926128b581610e87565b84526128c360208201610e87565b60208501526128d460408201610e87565b60408501526128e560608201610e87565b60608501526128f660808201610e87565b60808501526129088360a083016121e7565b60a085015261010061291b818301610ea5565b60c086015261012061292e818401610ea5565b60e08701526101409161294386848601610eeb565b9087015261026090818401519087015261028091612962838501610ea5565b908701526129e86102a095612978878601610ea5565b61016089015261298c816102c08701610eb0565b6101808901526103208501516101a08901526129ac816103408701610eb0565b6101c08901526103a08501516101e08901526129cc816103c08701610eb0565b61020089015261042085015161022089015261044085016121e7565b6102408701526104a0830151908601526104c08201519085015201519082015290565b60081115612a1557565b634e487b7160e01b600052602160045260246000fd5b9061076f9151610746565b90929160209061022083019460018060a01b031683528051828401520151908151916008831015612a15576101006101c09161076f946040850152612a846020820151606086019015159052565b6040810151151560808501526060810151151560a0850152612aae608082015160c0860190612a2b565b612ac160a0820151610120860190612a2b565b60c0810151151561018085015260e081015115156101a08501520151910190612a2b565b516008811015612a155790565b6040919493926060820195825260208201520152565b6001600160d01b031990911681526001600160a01b03909116602082015260400190565b612b346127a5565b600090612b4460058354146112c0565b612b4c610c49565b612b60602091828082518301019101612894565b90612b78612b7361020860045460ff1690565b6112e0565b806040957ffc67661d575f9ed7f455b92b74f85b90881d4e50ef39f5c1cac957a787d0065c875180612bab843383612a36565b0390a1612bc381518015908115613f8e575b50611300565b01612bce8151612ae5565b612bd781612a0b565b612e455750612bf2612bed610160840151151590565b611840565b6101a0820194612c0660018751101561185e565b61012094612c2486850151610260860190815101875251341461187e565b82840197612c43612c3e612c388b51610e7b565b33613f9a565b61189e565b828501612c5b612c56612c388351610e7b565b6118be565b846060870192612c76612c71612c388651610e7b565b6118de565b8189019a858c5260808901958080808d612c936102a18c51610e7b565b905190828215612e3c575bf115612e2f575b60001990510198868101998a52338d51612cbe90610e7b565b90612cc891612392565b606001612cdd816562726f6e7a6560d01b9052565b516001600160d01b0319168651809133612cf79183612b08565b0360008051602061410b83398151915291a18551600181527f7eac389e77409a238e7c6379afd83dc5d52d4a6f82f5c3065f16641b7743151490602090a16001910152612d42611031565b998651612d4e90610e7b565b612d58908c6110b1565b51612d6290610e7b565b612d6e908b87016110b1565b51612d7890610e7b565b612d84908a85016110b1565b51612d8e90610e7b565b612d9b9060608a016110b1565b51612da590610e7b565b612db290608089016110b1565b60a0838101519088015260c08301511515151560c088015260e08301511515151560e0880152610100438189015283015193519261018001518183820151910151612dfc90151590565b92612e05610cf2565b94855284015290151590820152612e1b91612502565b908301525161014082015261076f90611e7e565b612e3761230d565b612ca5565b506108fc612c9e565b6001612e548297969751612ae5565b612e5d81612a0b565b036130b95750612e79612e74610160840151151590565b611780565b610220820193612e8d6001865110156117a0565b610120948584015190612eb26102a086019283510192608088019384525134146117c0565b83850198612ecb612ec6612c388c51610e7b565b6117e0565b8380870191612ee5612ee0612c388551610e7b565b611800565b6060880193612eff612efa612c388751610e7b565b611820565b60a08a019b808d5280808060808d0199612f1c6102a18c51610e7b565b9051908282156130b0575bf1156130a3575b6000199051019860c08101998a52338551612f4890610e7b565b90612f5291612392565b60e001612f65816319dbdb1960e21b9052565b516001600160d01b0319168251809133612f7f9183612b08565b0360008051602061410b83398151915291a18151600181527f332d4cd54348d7e72027b79591aeb3b7bd54535c662f1fcdd632fa02c091f58890602090a16001910152612fca611031565b998651612fd690610e7b565b612fe0908c6110b1565b51612fea90610e7b565b612ff6908b87016110b1565b5161300090610e7b565b61300c908a85016110b1565b5161301690610e7b565b6130239060608a016110b1565b5161302d90610e7b565b61303a90608089016110b1565b60a0838101519088015260c08301511515151560c088015260e08301511515151560e088015261010043818901528301519351926102000151818382015191015161308490151590565b9261308d610cf2565b94855284015290151590820152612e1b9161260c565b6130ab61230d565b612f2e565b506108fc612f27565b60026130cc829895979694939851612ae5565b6130d581612a0b565b036133375750612c3895610160926130f76130f285850151151590565b6116c0565b6101e0830161310a6001825110156116e0565b6101209586850151916102808601928351019161313261010094858d01948552513414611700565b6131486131438789019d8e51610e7b565b611720565b8487019061316161315c612c388451610e7b565b611740565b606088019261317b613176612c388651610e7b565b611760565b8a8d019b808d5280808060808d01986131976102a18b51610e7b565b90519082821561332e575bf115613321575b600019905101986101409c8d81019a8b523384516131c690610e7b565b906131d091612392565b6539b4b63b32b960d11b910181905286519081906131f090339083612b08565b0360008051602061410b83398151915291a18551600181527f508afdc8b07bb0b86b3b4d43a0e65c5aed23ad1ba7f653466924ba15de0526e690602090a160600161323b9060019052565b613243611031565b9b8c885161325090610e7b565b613259916110b1565b5161326390610e7b565b61326f908d88016110b1565b5161327990610e7b565b613285908c86016110b1565b5161328f90610e7b565b61329c9060608c016110b1565b516132a690610e7b565b6132b39060808b016110b1565b60a084810151908a015260c0808501511515908a015260e0808501511515908a015243818a015283015193516101c09093015182810151908201511515926132f9610cf2565b9485528401529015159082015261330f916125b9565b90840152519082015261076f90611e7e565b61332961230d565b6131a9565b506108fc6131a2565b600361334882979694939751612ae5565b61335181612a0b565b036136605760809051015190610180938486019283526133b4608088019461338661337f6102a18851610e7b565b3314611600565b838551516104b08151111560001461365a576102588c82015111155b156136535760c8925001511115611620565b6133be3415611640565b6101a0948588015184515151018096880152610100958689015191890151848b8201519101516133ed90151590565b906133f6610cf2565b9283528b83015215158482015261340c91612502565b976101c0870198895280880198895161342490610e7b565b855151516134329133613ff5565b61343b90611660565b518181018051518387515101510190816101e08b0152518584820151910151151590613465610cf2565b9283528483015215158582015261347b916125b9565b91610200880192835283890192835161349390610e7b565b8651518401516134a39133613ff5565b6134ac90611680565b518481018051518688515101510190816102208c01525186858201519101511515906134d6610cf2565b928352858301521515868201526134ec9161260c565b9761024001978852606089019484865161350590610e7b565b91515101516135149133613ff5565b61351d906116a0565b8751805151908584820151519101515191865192839261353d9284612af2565b037f37fcdf51404943ba64664e05b93d83f80292fdf04381d01241fdbfe57e9d6be391a18351600181527f9302f205083e7faed645699e10ea74a95174c31ece0b3a89420595bdb03ec94c90602090a160c00161359a9060019052565b6135a2611031565b9888516135ae90610e7b565b6135b8908b6110b1565b516135c290610e7b565b6135cd918a016110b1565b516135d790610e7b565b6135e29188016110b1565b516135ec90610e7b565b6135f990606087016110b1565b5161360390610e7b565b61361090608086016110b1565b60a0838101519085015260c08084015115159085015260e08084015115159085015243908401525161012080840191909152015161014082015261076f90611e7e565b5050611620565b826133a2565b9092915060046136708251612ae5565b61367981612a0b565b03613859575160a0015192610260019283526080840191825161369b90610e7b565b6136a490610e7b565b33146136af90611560565b6136b93415611580565b8585019586516136c890610e7b565b6136d29033613f9a565b6136db906115a0565b8186019081516136ea90610e7b565b6136f49033613f9a565b6136fd906115c0565b6060870193845161370d90610e7b565b6137179033613f9a565b613720906115e0565b865151805190858482015191015191865192839261373e9284612af2565b037fb382548241998489affa3f494b50b2793e7b4982ed2256fd670e6b3758944baa91a18351600181527f11f16b6059a6b7b6e255cad7cede85b0b7ff4c52dd611bd33effd141a91f4e6090602090a160e00161379b9060019052565b6137a3611031565b9787516137af90610e7b565b6137b9908a6110b1565b516137c390610e7b565b6137ce9189016110b1565b516137d890610e7b565b6137e39187016110b1565b516137ed90610e7b565b6137fa90606086016110b1565b5161380490610e7b565b61381190608085016110b1565b515160a083015260c08101511515151560c083015260e08101511515151560e08301526101004381840152810151906101209182840152015161014082015261076f90611e7e565b9092600561386a8397949751612ae5565b61387381612a0b565b03613a265750506080830190815161388a90610e7b565b61389390610e7b565b331461389e906114c0565b6138a834156114e0565b8084019485516138b790610e7b565b6138c19033613f9a565b6138ca90611500565b80850180516138d890610e7b565b6138e29033613f9a565b6138eb90611520565b606086019283516138fb90610e7b565b6139059033613f9a565b61390e90611540565b8251600181527f8af42bd28821e762acc84f5b0c59d0453b2f4b842220b030e985c6ddef04ecb590602090a18251600181527f552c3428afecfd06142e4702a1a17ce9af5e47f154734ea5216ab50310c48bb090602090a1600161010096870152613977611031565b97875161398390610e7b565b61398d908a6110b1565b5161399790610e7b565b6139a29189016110b1565b516139ac90610e7b565b6139b79187016110b1565b516139c190610e7b565b6139ce90606086016110b1565b516139d890610e7b565b6139e590608085016110b1565b60a0828101519084015260c08201511515151560c0840152600160e08401524381840152810151906101209182840152015161014082015261076f90611e7e565b6006613a36839796949751612ae5565b613a3f81612a0b565b03613bdc57505060808101938451613a5690610e7b565b613a5f90610e7b565b3314613a6a90611420565b613a743415611440565b808201948551613a8390610e7b565b613a8d9033613f9a565b613a9690611460565b848301948551613aa590610e7b565b613aaf9033613f9a565b613ab890611480565b60608401908151613ac890610e7b565b613ad29033613f9a565b613adb906114a0565b61014096878601948551613aee90151590565b835190151581527fae90ebd36e66d29a7a743a5f5e0dca0d9c931dd0d1a7943bac860eaf24ae1a1090602090a18551151561012098890152613b2e611031565b998751613b3a90610e7b565b613b44908c6110b1565b51613b4e90610e7b565b613b59918b016110b1565b51613b6390610e7b565b613b6e9189016110b1565b51613b7890610e7b565b613b8590606088016110b1565b51613b8f90610e7b565b613b9c90608087016110b1565b60a08281015190860152511515151560c085015260e08101511515151560e085015261010043818601528101518285015201519082015261076f90611e7e565b91929390946007613bed8751612ae5565b613bf681612a0b565b14613c04575b505050505050565b6101008096510151610280840190815260808501968751613c2490610e7b565b613c2d90610e7b565b3314613c3890611320565b6101a08601978851835151511115613c4f90611340565b6101e08701518484515101511115613c6690611360565b6102208701518584515101511115613c7d90611380565b613c8734156113a0565b838701988951613c9690610e7b565b613ca09033613f9a565b613ca9906113c0565b8588018051613cb790610e7b565b613cc19033613f9a565b613cca906113e0565b60608901918251613cda90610e7b565b613ce49033613f9a565b613ced90611400565b51855151519003806102a08a0152848a0151906101808b01518989820151910151613d1790151590565b90613d20610cf2565b92835289830152151589820152613d3691612502565b946102c089019586528b51613d4a90610e7b565b958451613d5690610e7b565b825151516001600160a01b0398613d6f928a16906123ff565b51878101805151898451510151900390816102e08d0152518a8a820151910151151590613d9a610cf2565b9283528a83015215158a820152613db0916125b9565b956103008a019687528251613dc490610e7b565b8551613dcf90610e7b565b828a85515101519116613de1926123ff565b865160400151518251908a8251015190039a610320019a8b528451613e0590610e7b565b918a8751613e1290610e7b565b925101519116613e21926123ff565b51518051908888820151910151918951928392613e3e9284612af2565b037fa41fe49fea1ba91842314e6f26277af311c717fa5b42fc2c83bb4c0d0d90f63291a18651600181527ffdf670d9451a73a5c7dd0ea7746a8c85dcb5b66e1c6954feaae59a0203bb821c90602090a160016101409a8b0152613e9f611031565b9a8951613eab90610e7b565b613eb5908d6110b1565b51613ebf90610e7b565b613ecb908c88016110b1565b51613ed590610e7b565b613ee1908b88016110b1565b51613eeb90610e7b565b613ef89060608b016110b1565b51613f0290610e7b565b613f0f9060808a016110b1565b60a0868101519089015260c08601511515151560c089015260e08601511515151560e0890152439088015251925191808401518183820151910151151592613f55610cf2565b94855284015290151590820152613f6b9161260c565b906101209182850152015190820152613f8390611e7e565b388080808080613bfc565b90506001541438612bbd565b600061249f928192826040519160208301926323b872dd60e01b845260018060a01b03809216602482015230604482015282606482015260648152613fde81610c0b565b5193165af16123e8613fee61243d565b80926124d2565b60009161249f9383809360405160208101936323b872dd60e01b855260018060a01b038093166024830152306044830152606482015260648152613fde81610c0b565b6040519061012082016001600160401b0381118382101761409f575b604052816000808252806020830152806040830152806060830152614077610e43565b6080830152614084610e43565b60a08301528060c083015260e0820152610100611920610e43565b6140a7610b5f565b614054565b604051906140b982610b76565b81600081526020611920614038565b604051906140d582610b76565b816140de610e43565b8152602061192061403856fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace43559fdbda3802be12785165433940170227c305b1c57d809d0c2950cdff3037a164736f6c6343000811000a`,
  BytecodeLen: 19054,
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
    at: './src/contracts/coin_shop.rsh:326:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./src/contracts/coin_shop.rsh:327:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
