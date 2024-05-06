import {
  FaWindows,
  FaAndroid,
  FaApple,
  FaPlaystation,
  FaLinux,
  FaXbox,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { Platform } from "../hooks/useGame";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    linux: FaLinux,
    xbox: FaXbox,
    android: FaAndroid,
    mac: FaApple,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} color="gray.500" as={iconsMap[platform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
