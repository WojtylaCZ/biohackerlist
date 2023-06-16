import React from "react";
import { Stack } from "react-bootstrap";
import { Hack, HackCard } from "./hack";

export type BiohackCategories = {
  name: string;
  hacks: Array<Hack>;
};

export const HacksSection = ({
  name,
  hacks,
  isFirst,
}: BiohackCategories & { isFirst: boolean }) => {
  const trailparksList = hacks.map((hack, id) => (
    <HackCard key={id} hack={hack} isFirst={isFirst && id === 0} />
  ));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h2
        style={{
          fontFamily: "Kaushan Script",
          color: "#f7b500",
          marginBottom: "24px",
          fontSize: "calc(1.775rem + 1.1vw)",
        }}
      >
        {name}
      </h2>
      <Stack gap={4}>{trailparksList}</Stack>
    </div>
  );
};
