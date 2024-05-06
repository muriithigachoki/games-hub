import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 70 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} paddingX="14px" borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
