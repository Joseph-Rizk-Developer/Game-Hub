import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let colour = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return <Badge color={colour}>{score}</Badge>;
};

export default CriticScore;
