import React from "react";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailsPage = () => {
  const { id } = useParams();
  console.log(id);

  const { data: game, isLoading, error } = useGame(id!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailsPage;
