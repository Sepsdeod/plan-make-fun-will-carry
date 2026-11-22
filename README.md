# The plan make.fun will carry out in public

[![make.fun](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/Sepsdeod/plan-make-fun-will-carry/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/Sepsdeod/plan-make-fun-will-carry/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)

Entry for the [make.fun bounty "The plan make.fun will carry out in public"](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138).

## What it does

`main.ts` (Node 22) writes one short plan to `/output/entry.txt`: a concrete, agent-executable plan to turn $100 into the most money in 30 days — selling listing-photo packs to Etsy sellers, opening with a free remade photo of each shop's bestseller so buyers see the value before they pay.

## Run

```sh
node main.ts
```

The program is deterministic: every run writes the identical 278-character UTF-8 text.

## v2 revision

The v2 entry keeps the Etsy photo-pack plan but states the expected money from a conversion rate (200 shops × 5% buy = 10 sales, $390 in week 1, repeat orders past $600 by day 30) and sharpens the edge: the free sample is the pitch, so sellers see their own product fixed before paying. `main.ts` now also guards the 1–280 code-point gate and verifies the written file round-trips exactly.

## License

MIT
