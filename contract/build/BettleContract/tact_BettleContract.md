# TACT Compilation Report
Contract: BettleContract
BOC Size: 2983 bytes

# Types
Total Types: 14

## StateInit
TLB: `_ code:^cell data:^cell = StateInit`
Signature: `StateInit{code:^cell,data:^cell}`

## Context
TLB: `_ bounced:bool sender:address value:int257 raw:^slice = Context`
Signature: `Context{bounced:bool,sender:address,value:int257,raw:^slice}`

## SendParameters
TLB: `_ bounce:bool to:address value:int257 mode:int257 body:Maybe ^cell code:Maybe ^cell data:Maybe ^cell = SendParameters`
Signature: `SendParameters{bounce:bool,to:address,value:int257,mode:int257,body:Maybe ^cell,code:Maybe ^cell,data:Maybe ^cell}`

## Deploy
TLB: `deploy#946a98b6 queryId:uint64 = Deploy`
Signature: `Deploy{queryId:uint64}`

## DeployOk
TLB: `deploy_ok#aff90f57 queryId:uint64 = DeployOk`
Signature: `DeployOk{queryId:uint64}`

## FactoryDeploy
TLB: `factory_deploy#6d0ff13b queryId:uint64 cashback:address = FactoryDeploy`
Signature: `FactoryDeploy{queryId:uint64,cashback:address}`

## Notification
TLB: `_ notificationType:^string date:uint128 amount:coins competitionId:uint64 = Notification`
Signature: `Notification{notificationType:^string,date:uint128,amount:coins,competitionId:uint64}`

## Team
TLB: `_ color:^string totalCollected:coins = Team`
Signature: `Team{color:^string,totalCollected:coins}`

## Competition
TLB: `_ isCompetitionActive:bool winnersTeam:Maybe Team{color:^string,totalCollected:coins} losersTeam:Maybe Team{color:^string,totalCollected:coins} nextDate:uint128 competitionId:uint64 = Competition`
Signature: `Competition{isCompetitionActive:bool,winnersTeam:Maybe Team{color:^string,totalCollected:coins},losersTeam:Maybe Team{color:^string,totalCollected:coins},nextDate:uint128,competitionId:uint64}`

## FeedOfAddress
TLB: `_ items:dict<uint32, ^Notification{notificationType:^string,date:uint128,amount:coins,competitionId:uint64}> length:int257 = FeedOfAddress`
Signature: `FeedOfAddress{items:dict<uint32, ^Notification{notificationType:^string,date:uint128,amount:coins,competitionId:uint64}>,length:int257}`

## ActiveBet
TLB: `_ amount:coins team:^string = ActiveBet`
Signature: `ActiveBet{amount:coins,team:^string}`

## ActiveBetsArray
TLB: `_ items:dict<uint32, ^ActiveBet{amount:coins,team:^string}> length:int257 = ActiveBetsArray`
Signature: `ActiveBetsArray{items:dict<uint32, ^ActiveBet{amount:coins,team:^string}>,length:int257}`

## CompetitionTest
TLB: `_ isCompetitionActive:bool totalCollectedRed:coins totalCollectedBlue:coins nextDate:uint128 competitionId:uint64 = CompetitionTest`
Signature: `CompetitionTest{isCompetitionActive:bool,totalCollectedRed:coins,totalCollectedBlue:coins,nextDate:uint128,competitionId:uint64}`

## Bet
TLB: `bet#32028711 team:^string = Bet`
Signature: `Bet{team:^string}`

# Get Methods
Total Get Methods: 5

## id

## summary

## notificationsByAddress
Argument: address

## balanceByAddress
Argument: address

## balances

# Error Codes
2: Stack underflow
3: Stack overflow
4: Integer overflow
5: Integer out of expected range
6: Invalid opcode
7: Type check error
8: Cell overflow
9: Cell underflow
10: Dictionary error
13: Out of gas error
32: Method ID not found
34: Action is invalid or not supported
37: Not enough TON
38: Not enough extra-currencies
128: Null reference exception
129: Invalid serialization prefix
130: Invalid incoming message
131: Constraints error
132: Access denied
133: Contract stopped
134: Invalid argument
135: Code of a contract was not found
136: Invalid address
137: Masterchain support is not enabled for this contract
1358: competition is not active
11014: have no balance
13198: minimum amount is 0.666 TON
48449: balance is too low
51381: balance not found
58871: notifications not found
59666: wrong team