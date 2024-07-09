import {
  Cell,
  Slice,
  Address,
  Builder,
  beginCell,
  ComputeError,
  TupleItem,
  TupleReader,
  Dictionary,
  contractAddress,
  ContractProvider,
  Sender,
  Contract,
  ContractABI,
  ABIType,
  ABIGetter,
  ABIReceiver,
  TupleBuilder,
  DictionaryValue,
} from "ton-core";

export type StateInit = {
  $$type: "StateInit";
  code: Cell;
  data: Cell;
};

export function storeStateInit(src: StateInit) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeRef(src.code);
    b_0.storeRef(src.data);
  };
}

export function loadStateInit(slice: Slice) {
  let sc_0 = slice;
  let _code = sc_0.loadRef();
  let _data = sc_0.loadRef();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
  let _code = source.readCell();
  let _data = source.readCell();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
  let builder = new TupleBuilder();
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
    },
    parse: (src) => {
      return loadStateInit(src.loadRef().beginParse());
    },
  };
}

export type Context = {
  $$type: "Context";
  bounced: boolean;
  sender: Address;
  value: bigint;
  raw: Cell;
};

export function storeContext(src: Context) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounced);
    b_0.storeAddress(src.sender);
    b_0.storeInt(src.value, 257);
    b_0.storeRef(src.raw);
  };
}

export function loadContext(slice: Slice) {
  let sc_0 = slice;
  let _bounced = sc_0.loadBit();
  let _sender = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _raw = sc_0.loadRef();
  return {
    $$type: "Context" as const,
    bounced: _bounced,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

function loadTupleContext(source: TupleReader) {
  let _bounced = source.readBoolean();
  let _sender = source.readAddress();
  let _value = source.readBigNumber();
  let _raw = source.readCell();
  return {
    $$type: "Context" as const,
    bounced: _bounced,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

function storeTupleContext(source: Context) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounced);
  builder.writeAddress(source.sender);
  builder.writeNumber(source.value);
  builder.writeSlice(source.raw);
  return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeContext(src)).endCell());
    },
    parse: (src) => {
      return loadContext(src.loadRef().beginParse());
    },
  };
}

export type SendParameters = {
  $$type: "SendParameters";
  bounce: boolean;
  to: Address;
  value: bigint;
  mode: bigint;
  body: Cell | null;
  code: Cell | null;
  data: Cell | null;
};

export function storeSendParameters(src: SendParameters) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounce);
    b_0.storeAddress(src.to);
    b_0.storeInt(src.value, 257);
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body);
    } else {
      b_0.storeBit(false);
    }
    if (src.code !== null && src.code !== undefined) {
      b_0.storeBit(true).storeRef(src.code);
    } else {
      b_0.storeBit(false);
    }
    if (src.data !== null && src.data !== undefined) {
      b_0.storeBit(true).storeRef(src.data);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadSendParameters(slice: Slice) {
  let sc_0 = slice;
  let _bounce = sc_0.loadBit();
  let _to = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _mode = sc_0.loadIntBig(257);
  let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
  return {
    $$type: "SendParameters" as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function loadTupleSendParameters(source: TupleReader) {
  let _bounce = source.readBoolean();
  let _to = source.readAddress();
  let _value = source.readBigNumber();
  let _mode = source.readBigNumber();
  let _body = source.readCellOpt();
  let _code = source.readCellOpt();
  let _data = source.readCellOpt();
  return {
    $$type: "SendParameters" as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function storeTupleSendParameters(source: SendParameters) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounce);
  builder.writeAddress(source.to);
  builder.writeNumber(source.value);
  builder.writeNumber(source.mode);
  builder.writeCell(source.body);
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
    },
    parse: (src) => {
      return loadSendParameters(src.loadRef().beginParse());
    },
  };
}

export type Deploy = {
  $$type: "Deploy";
  queryId: bigint;
};

export function storeDeploy(src: Deploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2490013878, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2490013878) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadDeploy(src.loadRef().beginParse());
    },
  };
}

export type DeployOk = {
  $$type: "DeployOk";
  queryId: bigint;
};

export function storeDeployOk(src: DeployOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2952335191, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeployOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2952335191) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
    },
    parse: (src) => {
      return loadDeployOk(src.loadRef().beginParse());
    },
  };
}

export type FactoryDeploy = {
  $$type: "FactoryDeploy";
  queryId: bigint;
  cashback: Address;
};

export function storeFactoryDeploy(src: FactoryDeploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1829761339, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.cashback);
  };
}

export function loadFactoryDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1829761339) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  let _cashback = sc_0.loadAddress();
  return {
    $$type: "FactoryDeploy" as const,
    queryId: _queryId,
    cashback: _cashback,
  };
}

function loadTupleFactoryDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _cashback = source.readAddress();
  return {
    $$type: "FactoryDeploy" as const,
    queryId: _queryId,
    cashback: _cashback,
  };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.cashback);
  return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadFactoryDeploy(src.loadRef().beginParse());
    },
  };
}

export type Notification = {
  $$type: "Notification";
  notificationType: string;
  date: bigint;
  amount: bigint;
  competitionId: bigint;
};

export function storeNotification(src: Notification) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeStringRefTail(src.notificationType);
    b_0.storeUint(src.date, 128);
    b_0.storeCoins(src.amount);
    b_0.storeUint(src.competitionId, 64);
  };
}

export function loadNotification(slice: Slice) {
  let sc_0 = slice;
  let _notificationType = sc_0.loadStringRefTail();
  let _date = sc_0.loadUintBig(128);
  let _amount = sc_0.loadCoins();
  let _competitionId = sc_0.loadUintBig(64);
  return {
    $$type: "Notification" as const,
    notificationType: _notificationType,
    date: _date,
    amount: _amount,
    competitionId: _competitionId,
  };
}

function loadTupleNotification(source: TupleReader) {
  let _notificationType = source.readString();
  let _date = source.readBigNumber();
  let _amount = source.readBigNumber();
  let _competitionId = source.readBigNumber();
  return {
    $$type: "Notification" as const,
    notificationType: _notificationType,
    date: _date,
    amount: _amount,
    competitionId: _competitionId,
  };
}

function storeTupleNotification(source: Notification) {
  let builder = new TupleBuilder();
  builder.writeString(source.notificationType);
  builder.writeNumber(source.date);
  builder.writeNumber(source.amount);
  builder.writeNumber(source.competitionId);
  return builder.build();
}

function dictValueParserNotification(): DictionaryValue<Notification> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeNotification(src)).endCell());
    },
    parse: (src) => {
      return loadNotification(src.loadRef().beginParse());
    },
  };
}

export type Team = {
  $$type: "Team";
  color: string;
  totalCollected: bigint;
};

export function storeTeam(src: Team) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeStringRefTail(src.color);
    b_0.storeCoins(src.totalCollected);
  };
}

export function loadTeam(slice: Slice) {
  let sc_0 = slice;
  let _color = sc_0.loadStringRefTail();
  let _totalCollected = sc_0.loadCoins();
  return {
    $$type: "Team" as const,
    color: _color,
    totalCollected: _totalCollected,
  };
}

function loadTupleTeam(source: TupleReader) {
  let _color = source.readString();
  let _totalCollected = source.readBigNumber();
  return {
    $$type: "Team" as const,
    color: _color,
    totalCollected: _totalCollected,
  };
}

function storeTupleTeam(source: Team) {
  let builder = new TupleBuilder();
  builder.writeString(source.color);
  builder.writeNumber(source.totalCollected);
  return builder.build();
}

function dictValueParserTeam(): DictionaryValue<Team> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeTeam(src)).endCell());
    },
    parse: (src) => {
      return loadTeam(src.loadRef().beginParse());
    },
  };
}

export type Competition = {
  $$type: "Competition";
  isCompetitionActive: boolean;
  winnersTeam: Team | null;
  losersTeam: Team | null;
  nextDate: bigint;
  competitionId: bigint;
};

export function storeCompetition(src: Competition) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.isCompetitionActive);
    if (src.winnersTeam !== null && src.winnersTeam !== undefined) {
      b_0.storeBit(true);
      b_0.store(storeTeam(src.winnersTeam));
    } else {
      b_0.storeBit(false);
    }
    if (src.losersTeam !== null && src.losersTeam !== undefined) {
      b_0.storeBit(true);
      b_0.store(storeTeam(src.losersTeam));
    } else {
      b_0.storeBit(false);
    }
    b_0.storeUint(src.nextDate, 128);
    b_0.storeUint(src.competitionId, 64);
  };
}

export function loadCompetition(slice: Slice) {
  let sc_0 = slice;
  let _isCompetitionActive = sc_0.loadBit();
  let _winnersTeam = sc_0.loadBit() ? loadTeam(sc_0) : null;
  let _losersTeam = sc_0.loadBit() ? loadTeam(sc_0) : null;
  let _nextDate = sc_0.loadUintBig(128);
  let _competitionId = sc_0.loadUintBig(64);
  return {
    $$type: "Competition" as const,
    isCompetitionActive: _isCompetitionActive,
    winnersTeam: _winnersTeam,
    losersTeam: _losersTeam,
    nextDate: _nextDate,
    competitionId: _competitionId,
  };
}

function loadTupleCompetition(source: TupleReader) {
  let _isCompetitionActive = source.readBoolean();
  const _winnersTeam_p = source.readTupleOpt();
  const _winnersTeam = _winnersTeam_p ? loadTupleTeam(_winnersTeam_p) : null;
  const _losersTeam_p = source.readTupleOpt();
  const _losersTeam = _losersTeam_p ? loadTupleTeam(_losersTeam_p) : null;
  let _nextDate = source.readBigNumber();
  let _competitionId = source.readBigNumber();
  return {
    $$type: "Competition" as const,
    isCompetitionActive: _isCompetitionActive,
    winnersTeam: _winnersTeam,
    losersTeam: _losersTeam,
    nextDate: _nextDate,
    competitionId: _competitionId,
  };
}

function storeTupleCompetition(source: Competition) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.isCompetitionActive);
  if (source.winnersTeam !== null && source.winnersTeam !== undefined) {
    builder.writeTuple(storeTupleTeam(source.winnersTeam));
  } else {
    builder.writeTuple(null);
  }
  if (source.losersTeam !== null && source.losersTeam !== undefined) {
    builder.writeTuple(storeTupleTeam(source.losersTeam));
  } else {
    builder.writeTuple(null);
  }
  builder.writeNumber(source.nextDate);
  builder.writeNumber(source.competitionId);
  return builder.build();
}

function dictValueParserCompetition(): DictionaryValue<Competition> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeCompetition(src)).endCell());
    },
    parse: (src) => {
      return loadCompetition(src.loadRef().beginParse());
    },
  };
}

export type FeedOfAddress = {
  $$type: "FeedOfAddress";
  items: Dictionary<number, Notification>;
  length: bigint;
};

export function storeFeedOfAddress(src: FeedOfAddress) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeDict(
      src.items,
      Dictionary.Keys.Uint(32),
      dictValueParserNotification()
    );
    b_0.storeInt(src.length, 257);
  };
}

export function loadFeedOfAddress(slice: Slice) {
  let sc_0 = slice;
  let _items = Dictionary.load(
    Dictionary.Keys.Uint(32),
    dictValueParserNotification(),
    sc_0
  );
  let _length = sc_0.loadIntBig(257);
  return { $$type: "FeedOfAddress" as const, items: _items, length: _length };
}

function loadTupleFeedOfAddress(source: TupleReader) {
  let _items = Dictionary.loadDirect(
    Dictionary.Keys.Uint(32),
    dictValueParserNotification(),
    source.readCellOpt()
  );
  let _length = source.readBigNumber();
  return { $$type: "FeedOfAddress" as const, items: _items, length: _length };
}

function storeTupleFeedOfAddress(source: FeedOfAddress) {
  let builder = new TupleBuilder();
  builder.writeCell(
    source.items.size > 0
      ? beginCell()
          .storeDictDirect(
            source.items,
            Dictionary.Keys.Uint(32),
            dictValueParserNotification()
          )
          .endCell()
      : null
  );
  builder.writeNumber(source.length);
  return builder.build();
}

function dictValueParserFeedOfAddress(): DictionaryValue<FeedOfAddress> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeFeedOfAddress(src)).endCell());
    },
    parse: (src) => {
      return loadFeedOfAddress(src.loadRef().beginParse());
    },
  };
}

export type ActiveBet = {
  $$type: "ActiveBet";
  amount: bigint;
  team: string;
};

export function storeActiveBet(src: ActiveBet) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeCoins(src.amount);
    b_0.storeStringRefTail(src.team);
  };
}

export function loadActiveBet(slice: Slice) {
  let sc_0 = slice;
  let _amount = sc_0.loadCoins();
  let _team = sc_0.loadStringRefTail();
  return { $$type: "ActiveBet" as const, amount: _amount, team: _team };
}

function loadTupleActiveBet(source: TupleReader) {
  let _amount = source.readBigNumber();
  let _team = source.readString();
  return { $$type: "ActiveBet" as const, amount: _amount, team: _team };
}

function storeTupleActiveBet(source: ActiveBet) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  builder.writeString(source.team);
  return builder.build();
}

function dictValueParserActiveBet(): DictionaryValue<ActiveBet> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeActiveBet(src)).endCell());
    },
    parse: (src) => {
      return loadActiveBet(src.loadRef().beginParse());
    },
  };
}

export type ActiveBetsArray = {
  $$type: "ActiveBetsArray";
  items: Dictionary<number, ActiveBet>;
  length: bigint;
};

export function storeActiveBetsArray(src: ActiveBetsArray) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeDict(
      src.items,
      Dictionary.Keys.Uint(32),
      dictValueParserActiveBet()
    );
    b_0.storeInt(src.length, 257);
  };
}

export function loadActiveBetsArray(slice: Slice) {
  let sc_0 = slice;
  let _items = Dictionary.load(
    Dictionary.Keys.Uint(32),
    dictValueParserActiveBet(),
    sc_0
  );
  let _length = sc_0.loadIntBig(257);
  return { $$type: "ActiveBetsArray" as const, items: _items, length: _length };
}

function loadTupleActiveBetsArray(source: TupleReader) {
  let _items = Dictionary.loadDirect(
    Dictionary.Keys.Uint(32),
    dictValueParserActiveBet(),
    source.readCellOpt()
  );
  let _length = source.readBigNumber();
  return { $$type: "ActiveBetsArray" as const, items: _items, length: _length };
}

function storeTupleActiveBetsArray(source: ActiveBetsArray) {
  let builder = new TupleBuilder();
  builder.writeCell(
    source.items.size > 0
      ? beginCell()
          .storeDictDirect(
            source.items,
            Dictionary.Keys.Uint(32),
            dictValueParserActiveBet()
          )
          .endCell()
      : null
  );
  builder.writeNumber(source.length);
  return builder.build();
}

function dictValueParserActiveBetsArray(): DictionaryValue<ActiveBetsArray> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeActiveBetsArray(src)).endCell());
    },
    parse: (src) => {
      return loadActiveBetsArray(src.loadRef().beginParse());
    },
  };
}

export type CompetitionTest = {
  $$type: "CompetitionTest";
  isCompetitionActive: boolean;
  totalCollectedRed: bigint;
  totalCollectedBlue: bigint;
  nextDate: bigint;
  competitionId: bigint;
};

export function storeCompetitionTest(src: CompetitionTest) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.isCompetitionActive);
    b_0.storeCoins(src.totalCollectedRed);
    b_0.storeCoins(src.totalCollectedBlue);
    b_0.storeUint(src.nextDate, 128);
    b_0.storeUint(src.competitionId, 64);
  };
}

export function loadCompetitionTest(slice: Slice) {
  let sc_0 = slice;
  let _isCompetitionActive = sc_0.loadBit();
  let _totalCollectedRed = sc_0.loadCoins();
  let _totalCollectedBlue = sc_0.loadCoins();
  let _nextDate = sc_0.loadUintBig(128);
  let _competitionId = sc_0.loadUintBig(64);
  return {
    $$type: "CompetitionTest" as const,
    isCompetitionActive: _isCompetitionActive,
    totalCollectedRed: _totalCollectedRed,
    totalCollectedBlue: _totalCollectedBlue,
    nextDate: _nextDate,
    competitionId: _competitionId,
  };
}

function loadTupleCompetitionTest(source: TupleReader) {
  let _isCompetitionActive = source.readBoolean();
  let _totalCollectedRed = source.readBigNumber();
  let _totalCollectedBlue = source.readBigNumber();
  let _nextDate = source.readBigNumber();
  let _competitionId = source.readBigNumber();
  return {
    $$type: "CompetitionTest" as const,
    isCompetitionActive: _isCompetitionActive,
    totalCollectedRed: _totalCollectedRed,
    totalCollectedBlue: _totalCollectedBlue,
    nextDate: _nextDate,
    competitionId: _competitionId,
  };
}

function storeTupleCompetitionTest(source: CompetitionTest) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.isCompetitionActive);
  builder.writeNumber(source.totalCollectedRed);
  builder.writeNumber(source.totalCollectedBlue);
  builder.writeNumber(source.nextDate);
  builder.writeNumber(source.competitionId);
  return builder.build();
}

function dictValueParserCompetitionTest(): DictionaryValue<CompetitionTest> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeCompetitionTest(src)).endCell());
    },
    parse: (src) => {
      return loadCompetitionTest(src.loadRef().beginParse());
    },
  };
}

export type Bet = {
  $$type: "Bet";
  team: string;
};

export function storeBet(src: Bet) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(839026449, 32);
    b_0.storeStringRefTail(src.team);
  };
}

export function loadBet(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 839026449) {
    throw Error("Invalid prefix");
  }
  let _team = sc_0.loadStringRefTail();
  return { $$type: "Bet" as const, team: _team };
}

function loadTupleBet(source: TupleReader) {
  let _team = source.readString();
  return { $$type: "Bet" as const, team: _team };
}

function storeTupleBet(source: Bet) {
  let builder = new TupleBuilder();
  builder.writeString(source.team);
  return builder.build();
}

function dictValueParserBet(): DictionaryValue<Bet> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeBet(src)).endCell());
    },
    parse: (src) => {
      return loadBet(src.loadRef().beginParse());
    },
  };
}

type BettleContract_init_args = {
  $$type: "BettleContract_init_args";
  id: bigint;
};

function initBettleContract_init_args(src: BettleContract_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeInt(src.id, 257);
  };
}

async function BettleContract_init(id: bigint) {
  const __code = Cell.fromBase64(
    "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"
  );
  const __system = Cell.fromBase64(
    "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"
  );
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initBettleContract_init_args({ $$type: "BettleContract_init_args", id })(
    builder
  );
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const BettleContract_errors: { [key: number]: { message: string } } = {
  2: { message: `Stack underflow` },
  3: { message: `Stack overflow` },
  4: { message: `Integer overflow` },
  5: { message: `Integer out of expected range` },
  6: { message: `Invalid opcode` },
  7: { message: `Type check error` },
  8: { message: `Cell overflow` },
  9: { message: `Cell underflow` },
  10: { message: `Dictionary error` },
  13: { message: `Out of gas error` },
  32: { message: `Method ID not found` },
  34: { message: `Action is invalid or not supported` },
  37: { message: `Not enough TON` },
  38: { message: `Not enough extra-currencies` },
  128: { message: `Null reference exception` },
  129: { message: `Invalid serialization prefix` },
  130: { message: `Invalid incoming message` },
  131: { message: `Constraints error` },
  132: { message: `Access denied` },
  133: { message: `Contract stopped` },
  134: { message: `Invalid argument` },
  135: { message: `Code of a contract was not found` },
  136: { message: `Invalid address` },
  137: { message: `Masterchain support is not enabled for this contract` },
  1358: { message: `competition is not active` },
  11014: { message: `have no balance` },
  13198: { message: `minimum amount is 0.666 TON` },
  48449: { message: `balance is too low` },
  51381: { message: `balance not found` },
  58871: { message: `notifications not found` },
  59666: { message: `wrong team` },
};

const BettleContract_types: ABIType[] = [
  {
    name: "StateInit",
    header: null,
    fields: [
      { name: "code", type: { kind: "simple", type: "cell", optional: false } },
      { name: "data", type: { kind: "simple", type: "cell", optional: false } },
    ],
  },
  {
    name: "Context",
    header: null,
    fields: [
      {
        name: "bounced",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "sender",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "value",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      { name: "raw", type: { kind: "simple", type: "slice", optional: false } },
    ],
  },
  {
    name: "SendParameters",
    header: null,
    fields: [
      {
        name: "bounce",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "to",
        type: { kind: "simple", type: "address", optional: false },
      },
      {
        name: "value",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      {
        name: "mode",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      { name: "body", type: { kind: "simple", type: "cell", optional: true } },
      { name: "code", type: { kind: "simple", type: "cell", optional: true } },
      { name: "data", type: { kind: "simple", type: "cell", optional: true } },
    ],
  },
  {
    name: "Deploy",
    header: 2490013878,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
    ],
  },
  {
    name: "DeployOk",
    header: 2952335191,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
    ],
  },
  {
    name: "FactoryDeploy",
    header: 1829761339,
    fields: [
      {
        name: "queryId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
      {
        name: "cashback",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
  },
  {
    name: "Notification",
    header: null,
    fields: [
      {
        name: "notificationType",
        type: { kind: "simple", type: "string", optional: false },
      },
      {
        name: "date",
        type: { kind: "simple", type: "uint", optional: false, format: 128 },
      },
      {
        name: "amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "competitionId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
    ],
  },
  {
    name: "Team",
    header: null,
    fields: [
      {
        name: "color",
        type: { kind: "simple", type: "string", optional: false },
      },
      {
        name: "totalCollected",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
    ],
  },
  {
    name: "Competition",
    header: null,
    fields: [
      {
        name: "isCompetitionActive",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "winnersTeam",
        type: { kind: "simple", type: "Team", optional: true },
      },
      {
        name: "losersTeam",
        type: { kind: "simple", type: "Team", optional: true },
      },
      {
        name: "nextDate",
        type: { kind: "simple", type: "uint", optional: false, format: 128 },
      },
      {
        name: "competitionId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
    ],
  },
  {
    name: "FeedOfAddress",
    header: null,
    fields: [
      {
        name: "items",
        type: {
          kind: "dict",
          key: "uint",
          keyFormat: 32,
          value: "Notification",
          valueFormat: "ref",
        },
      },
      {
        name: "length",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
    ],
  },
  {
    name: "ActiveBet",
    header: null,
    fields: [
      {
        name: "amount",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "team",
        type: { kind: "simple", type: "string", optional: false },
      },
    ],
  },
  {
    name: "ActiveBetsArray",
    header: null,
    fields: [
      {
        name: "items",
        type: {
          kind: "dict",
          key: "uint",
          keyFormat: 32,
          value: "ActiveBet",
          valueFormat: "ref",
        },
      },
      {
        name: "length",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
    ],
  },
  {
    name: "CompetitionTest",
    header: null,
    fields: [
      {
        name: "isCompetitionActive",
        type: { kind: "simple", type: "bool", optional: false },
      },
      {
        name: "totalCollectedRed",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "totalCollectedBlue",
        type: {
          kind: "simple",
          type: "uint",
          optional: false,
          format: "coins",
        },
      },
      {
        name: "nextDate",
        type: { kind: "simple", type: "uint", optional: false, format: 128 },
      },
      {
        name: "competitionId",
        type: { kind: "simple", type: "uint", optional: false, format: 64 },
      },
    ],
  },
  {
    name: "Bet",
    header: 839026449,
    fields: [
      {
        name: "team",
        type: { kind: "simple", type: "string", optional: false },
      },
    ],
  },
];

const BettleContract_getters: ABIGetter[] = [
  {
    name: "id",
    arguments: [],
    returnType: { kind: "simple", type: "int", optional: false, format: 257 },
  },
  {
    name: "summary",
    arguments: [],
    returnType: { kind: "simple", type: "Competition", optional: false },
  },
  {
    name: "notificationsByAddress",
    arguments: [
      {
        name: "address",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
    returnType: { kind: "simple", type: "FeedOfAddress", optional: false },
  },
  {
    name: "balanceByAddress",
    arguments: [
      {
        name: "address",
        type: { kind: "simple", type: "address", optional: false },
      },
    ],
    returnType: { kind: "simple", type: "int", optional: false, format: 257 },
  },
  {
    name: "balances",
    arguments: [],
    returnType: { kind: "dict", key: "address", value: "int" },
  },
];

const BettleContract_receivers: ABIReceiver[] = [
  { receiver: "internal", message: { kind: "empty" } },
  { receiver: "internal", message: { kind: "typed", type: "Bet" } },
  { receiver: "internal", message: { kind: "text", text: "withdraw" } },
  { receiver: "internal", message: { kind: "typed", type: "Deploy" } },
];

export class BettleContract implements Contract {
  static async init(id: bigint) {
    return await BettleContract_init(id);
  }

  static async fromInit(id: bigint) {
    const init = await BettleContract_init(id);
    const address = contractAddress(0, init);
    return new BettleContract(address, init);
  }

  static fromAddress(address: Address) {
    return new BettleContract(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell; data: Cell };
  readonly abi: ContractABI = {
    types: BettleContract_types,
    getters: BettleContract_getters,
    receivers: BettleContract_receivers,
    errors: BettleContract_errors,
  };

  private constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(
    provider: ContractProvider,
    via: Sender,
    args: { value: bigint; bounce?: boolean | null | undefined },
    message: null | Bet | "withdraw" | Deploy
  ) {
    let body: Cell | null = null;
    if (message === null) {
      body = new Cell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "Bet"
    ) {
      body = beginCell().store(storeBet(message)).endCell();
    }
    if (message === "withdraw") {
      body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "Deploy"
    ) {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (body === null) {
      throw new Error("Invalid message type");
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getId(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("id", builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }

  async getSummary(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("summary", builder.build())).stack;
    const result = loadTupleCompetition(source);
    return result;
  }

  async getNotificationsByAddress(
    provider: ContractProvider,
    address: Address
  ) {
    let builder = new TupleBuilder();
    builder.writeAddress(address);
    let source = (await provider.get("notificationsByAddress", builder.build()))
      .stack;
    const result = loadTupleFeedOfAddress(source);
    return result;
  }

  async getBalanceByAddress(provider: ContractProvider, address: Address) {
    let builder = new TupleBuilder();
    builder.writeAddress(address);
    let source = (await provider.get("balanceByAddress", builder.build()))
      .stack;
    let result = source.readBigNumber();
    return result;
  }

  async getBalances(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("balances", builder.build())).stack;
    let result = Dictionary.loadDirect(
      Dictionary.Keys.Address(),
      Dictionary.Values.BigInt(257),
      source.readCellOpt()
    );
    return result;
  }
}
