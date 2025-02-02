import React from "react";
import Position from "./Position";
import Club from "./Club";
import Player from "./Player";
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";
import PlayerCardsFilter from "./PlayerCardsFilter";
import TeamCardsFilter from "./TeamCardsFilter";
import PricingFilter from "./PricingFilter";

const PlayersFilter = () => {
  return (
    <>
      <aside className="w-60 p-4 m-2 bg-zinc-600/40 rounded-[15px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold">Filters</h2>
          <button className="text-sm text-zinc-400">Clear All Filters</button>
        </div>
        <div className="space-y-3">
          <div className="relative rounded-[10px]">
            <Input
              placeholder="Search Player/Team"
              className="w-full border-none pl-3 pr-10 bg-zinc-800/100"
            />
            <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <PlayerCardsFilter />
          <TeamCardsFilter />
          <PricingFilter />
          <Position />
          <Club />
          <Player />
        </div>
      </aside>
    </>
  );
};

export default PlayersFilter;
