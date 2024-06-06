"use client";

import {
  Box,
  Button,
  List,
  ListItem,
  Select,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
import { FcPlus } from "react-icons/fc";
import { LiaQuestionCircleSolid } from "react-icons/lia";
import Image from "next/image";
import RenderLineChart from "./linechart";

export default function Home() {
  return (
    <main>
      <Box
        bg="#000000"
        w="100%"
        p={4}
        color="white"
        padding="38px 76px"
        display="flex"
        justifyContent="space-between"
      >
        <Text
          display="flex"
          alignItems="center"
          gap="21"
          fontFamily="sans-serif"
          fontWeight="small"
          fontSize="3xl"
        >
          <Image src="/LogoMark.png" width={52} height={58} alt="logo" />
          DeHive
        </Text>

        <Box display="flex" alignItems="center" gap="20px">
          <Select
            placeholder="Polygon"
            w={184}
            h={54}
            borderRadius={50}
            borderColor="#41B7FF"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

          <Button
            borderRadius={50}
            w={184}
            h={54}
            bgGradient="linear(45deg, #FF6F4F, #FF01DD, #5C5CFF, #14E1E2)"
            color="white"
            _hover={{
              bgGradient: "linear(45deg, #14E1E2, #5C5CFF, #FF01DD, #FF6F4F)",
            }}
          >
            Connect wallet
          </Button>
        </Box>
      </Box>

      <Box display="flex">
        <Box bg="#13141D" w="8%" pl={5}>
          <Box paddingTop={55}>
            <Tooltip
              label="Dashboard"
              placement="auto-start"
              sx={{
                borderRadius: "50px 50px  50px  0",
                padding: "8px 16px",
              }}
            >
              <Image width="70" height="70" src="/Polygon20.png" alt="img" />
            </Tooltip>
          </Box>
        </Box>

        <Box bg="#000000" w="100%" pl={70} pt={82}>
          <Text fontSize="5xl" color="#FFFFFF" mb={10}>
            Dashboard
          </Text>

          <Box display="flex" gap={10} m={0} p={0} mb="45px">
            <Box bg="#13141D" p="40px 30px" borderRadius={24} width={850}>
              <Text fontSize="3xl" color="#FFFFFF">
                Market overview
              </Text>
              <Text fontSize="1xl" color="#FDFCFC" opacity="50%">
                Prices value updates
              </Text>
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <List display="flex" gap={25} mt={35}>
                  <ListItem color="#ffffff">
                    <Box>
                      <Box display="flex" alignItems="center" gap={2}>
                        <FaCircle color="A4D1EB" /> <Text> ETH-CORE</Text>
                      </Box>

                      <Text color="#4E4F56" ml={6}>
                        Ethereum
                      </Text>
                    </Box>
                  </ListItem>
                  <ListItem color="#ffffff">
                    <Box>
                      <Box display="flex" alignItems="center" gap={2}>
                        <FaCircle color="8844FC" /> <Text> Poly</Text>
                      </Box>

                      <Text color="#4E4F56" ml={6}>
                        Polygon
                      </Text>
                    </Box>
                  </ListItem>
                  <ListItem color="#ffffff">
                    <Box>
                      <Box display="flex" alignItems="center" gap={2}>
                        <FaCircle color="#AF0D02" /> <Text> Poly Gaming</Text>
                      </Box>

                      <Text color="#4E4F56" ml={6}>
                        Polygon
                      </Text>
                    </Box>
                  </ListItem>
                  {/* You can also use custom icons from react-icons */}
                </List>

                <Button
                  border="1px solid #4E4F56"
                  mt={9}
                  ml={25}
                  leftIcon={<FcPlus color="#00FF73" size={24} />}
                  colorScheme="#13141D"
                  variant="solid"
                  borderRadius={50}
                >
                  Add
                </Button>

                <Stack
                  mt="36px"
                  ml="auto"
                  direction="row"
                  align="center"
                  border="1px solid #4E4F56"
                  pt="2px"
                  pb="2px"
                  borderRadius={50}
                  height="43px"
                >
                  <Button
                    color="#4C4C53"
                    variant="solid"
                    borderRadius={50}
                    border="none"
                    bgColor="transparent"
                    w="49px"
                    height="35px"
                    _hover={{ bg: "#00FF73", color: "#FFFFFF" }}
                  >
                    1D
                  </Button>
                  <Button
                    color="#4C4C53"
                    variant="solid"
                    borderRadius={50}
                    border="none"
                    bgColor="transparent"
                    w="49px"
                    height="35px"
                    _hover={{ bg: "#00FF73", color: "#FFFFFF" }}
                  >
                    1W
                  </Button>
                  <Button
                    color="#4C4C53"
                    variant="solid"
                    borderRadius={50}
                    border="none"
                    bgColor="transparent"
                    w="49px"
                    height="35px"
                    _hover={{ bg: "#00FF73", color: "#FFFFFF" }}
                  >
                    1M
                  </Button>
                  <Button
                    color="#4C4C53"
                    variant="solid"
                    borderRadius={50}
                    border="none"
                    bgColor="transparent"
                    w="49px"
                    height="35px"
                    _hover={{ bg: "#00FF73", color: "#FFFFFF" }}
                  >
                    1Y
                  </Button>
                </Stack>
              </Box>
              <Box mt="20px">
                <RenderLineChart />
              </Box>
            </Box>

            <Box bg="#13141D" p="40px 30px" borderRadius={24} width="740px">
              <Text fontSize="3xl" color="#FFFFFF" mb="30px">
                Recent Activities
              </Text>

              <Box display="flex" mb="23px">
                <Box>
                  <Image
                    src="/Vector.png"
                    alt="img"
                    width="20"
                    height="20"
                    objectFit="fill"
                  />
                </Box>
                <Box ml="15px" width="150px">
                  <Text color="#fff">ETH-CORE</Text>
                  <Text color="#4E4F56">Cluster</Text>
                </Box>
                <Text color="#fff" width="130px">
                  $123.13
                </Text>
                <Box>
                  <Text
                    bg="linear-gradient(90deg, #FF01DD  , #41B7FF)"
                    bgClip="text"
                  >
                    Join Cluster
                  </Text>
                  <Text color="#4E4F56">12:50:15 AM</Text>
                </Box>
              </Box>

              <Box display="flex" mb="23px">
                <Box>
                  <Image
                    src="/Vector.png"
                    alt="img"
                    width="20"
                    height="20"
                    objectFit="fill"
                  />
                </Box>
                <Box ml="15px" width="150px">
                  <Text color="#fff">Poly Gaming</Text>
                  <Text color="#4E4F56">Cluster</Text>
                </Box>
                <Text color="#fff" width="130px">
                  $100,123.25
                </Text>
                <Box>
                  <Text
                    bg="linear-gradient(90deg, #FF01DD  , #41B7FF)"
                    bgClip="text"
                  >
                    Unstake Cluster
                  </Text>
                  <Text color="#4E4F56">12:50:15 AM</Text>
                </Box>
              </Box>

              <Box display="flex" mb="23px">
                <Box>
                  <Image
                    src="/Vector.png"
                    alt="img"
                    width="20"
                    height="20"
                    objectFit="fill"
                  />
                </Box>
                <Box ml="15px" width="150px">
                  <Text color="#fff">ETH-CORE</Text>
                  <Text color="#4E4F56">Cluster</Text>
                </Box>
                <Text color="#fff" width="130px">
                  $123.13
                </Text>
                <Box>
                  <Text
                    bg="linear-gradient(90deg, #FF01DD  , #41B7FF)"
                    bgClip="text"
                  >
                    Join Cluster
                  </Text>
                  <Text color="#4E4F56">12:50:15 AM</Text>
                </Box>
              </Box>

              <Box display="flex" mb="23px">
                <Box>
                  <Image
                    src="/Vector.png"
                    alt="img"
                    width="20"
                    height="20"
                    objectFit="fill"
                  />
                </Box>
                <Box ml="15px" width="150px">
                  <Text color="#fff">ETH-CORE</Text>
                  <Text color="#4E4F56">Cluster</Text>
                </Box>
                <Text color="#fff" width="130px">
                  $123.13
                </Text>
                <Box>
                  <Text
                    bg="linear-gradient(90deg, #FF01DD  , #41B7FF)"
                    bgClip="text"
                  >
                    Join Cluster
                  </Text>
                  <Text color="#4E4F56">12:50:15 AM</Text>
                </Box>
              </Box>

              <Box display="flex" mb="23px">
                <Box>
                  <Image
                    src="/Vector.png"
                    alt="img"
                    width="20"
                    height="20"
                    objectFit="fill"
                  />
                </Box>
                <Box ml="15px" width="150px">
                  <Text color="#fff">ETH-CORE</Text>
                  <Text color="#4E4F56">Cluster</Text>
                </Box>
                <Text color="#fff" width="130px">
                  $123.13
                </Text>
                <Box>
                  <Text
                    bg="linear-gradient(90deg, #FF01DD  , #41B7FF)"
                    bgClip="text"
                  >
                    Join Cluster
                  </Text>
                  <Text color="#4E4F56">12:50:15 AM</Text>
                </Box>
              </Box>

              <Box display="flex" mb="23px">
                <Box>
                  <Image
                    src="/Vector.png"
                    alt="img"
                    width="20"
                    height="20"
                    objectFit="fill"
                  />
                </Box>
                <Box ml="15px" width="150px">
                  <Text color="#fff">ETH-CORE</Text>
                  <Text color="#4E4F56">Cluster</Text>
                </Box>
                <Text color="#fff" width="130px">
                  $123.13
                </Text>
                <Box>
                  <Text
                    bg="linear-gradient(90deg, #FF01DD  , #41B7FF)"
                    bgClip="text"
                  >
                    Join Cluster
                  </Text>
                  <Text color="#4E4F56">12:50:15 AM</Text>
                </Box>
              </Box>
            </Box>
          </Box>

          <Text fontSize="2xl" color="#FFFFFF" mb="30px">
            Top performer
          </Text>

          <Box
            border="1px solid #ffffff"
            borderRadius={24}
            mr="76px"
            p="52px 35px"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            bg="linear-gradient(90deg, #DB39C5  3%, #C24DD1  9%, #6A60C1  15%, #4872B1  23% , #5EACC8  31%, #1D1F2E  43%, #1D1F2E  100%)"
            // opacity="11.3%"
            position="relative"
            mb="60px"
          >
            <Box
              position="absolute"
              top="25px"
              left="-6px"
              transform="translate(-50% -50%)"
            >
              <Image
                src="/label-impuls.png"
                alt="img"
                width="121"
                height="44"
              />
            </Box>
            <Box>
              <Image src="/assets.png" alt="assetImg" width="165" height="70" />
            </Box>

            <Box>
              <Box display="flex" alignItems="center" gap="5px" mb="12px">
                <Text color="#ffffff">DHV / QUICK</Text>
                <Box position="relative">
                  <Image
                    src="/PolygonCopy4.png"
                    alt="img"
                    width={21}
                    height={22}
                  />
                  <Text
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    color="#ffffff"
                    fontSize="12px"
                  >
                    ?
                  </Text>
                </Box>
                <Box position="relative">
                  <Image src="/question.png" alt="img" width={32} height={34} />
                  <Text
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    color="#00FF73"
                    fontSize="12px"
                  >
                    GET
                  </Text>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" gap="4px" mb="20px">
                <Box
                  border=" 1px solid #4D4E59"
                  p="8px"
                  borderRadius={50}
                  bgColor="#13141D"
                >
                  <Text color="#ffffff">QuickSwap</Text>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  border=" 1px solid #4D4E59"
                  p="8px"
                  borderRadius={50}
                  bgColor="#13141D"
                >
                  <Text color="#ffffff">
                    Volatility:{" "}
                    <Box as="span" color="#00FF73">
                      Very Low
                    </Box>
                  </Text>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  border=" 1px solid #4D4E59"
                  p="8px"
                  borderRadius={50}
                  bgColor="#13141D"
                >
                  <Text color="#ffffff">
                    Risk:{" "}
                    <Box as="span" color="#FC4E7E">
                      Very High
                    </Box>
                  </Text>
                </Box>
              </Box>

              <Box>
                <Text color="#ffffff">Your rewards: </Text>
                <Box display="flex" alignItems="center" gap="5px">
                  <Box color="#00FF73">$10,678.12</Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-evenly"
                    gap="8px"
                    border="1px solid #4D4E59"
                    borderRadius={50}
                    bg="#13141D"
                    p="6px"
                  >
                    <Image
                      src="/image69.png"
                      alt="img"
                      width={16}
                      height={16}
                    />
                    <Image
                      src="/image65.png"
                      alt="img"
                      width={16}
                      height={16}
                    />
                    <Image
                      src="/image71.png"
                      alt="img"
                      width={16}
                      height={16}
                    />
                  </Box>
                </Box>
                <Text color="#4D4E59">Accumulated rewards</Text>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" gap="50px">
              <Box>
                <Text color="#4D4E59" fontSize="24px" mb="18px">
                  APY
                </Text>
                <Box display="flex" alignItems="center" gap="5px" mb="10px">
                  <Text color="#FDFCFC" fontSize="24px">
                    199.11%
                  </Text>
                  <Box position="relative">
                    <Image
                      src="/PolygonCopy4.png"
                      alt="img"
                      width={21}
                      height={22}
                    />
                    <Text
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%)"
                      color="#ffffff"
                      fontSize="12px"
                    >
                      ?
                    </Text>
                  </Box>
                </Box>
                <Text color="rgba(253, 252, 252, 0.5)" fontSize="16px">
                  APR: 257.84%
                </Text>
              </Box>

              <Box>
                <Text color="#4D4E59" fontSize="24px" mb="18px">
                  TVL
                </Text>
                <Text color="#FDFCFC" fontSize="24px" mb="10px">
                  $124,235.00
                </Text>
                <Text color="rgba(253, 252, 252, 0.5)" fontSize="16px">
                  Total Value Locked
                </Text>
              </Box>

              <Box>
                <Text color="#4D4E59" fontSize="24px" mb="18px">
                  Your Deposits
                </Text>
                <Text color="#FDFCFC" fontSize="24px" mb="10px">
                  $123,123.00
                </Text>
                <Text color="rgba(253, 252, 252, 0.5)" fontSize="16px">
                  0.557890 DHV / QUICK
                </Text>
              </Box>
            </Box>

            <Box display="flex" flexDir="column" gap="20px">
              <Button
                borderRadius={50}
                w={179}
                h={54}
                bgGradient="linear(45deg, #FF6F4F, #FF01DD, #5C5CFF, #14E1E2)"
                color="white"
                _hover={{
                  bgGradient:
                    "linear(45deg, #14E1E2, #5C5CFF, #FF01DD, #FF6F4F)",
                }}
              >
                Stake
              </Button>

              <Button
                borderRadius={50}
                w={179}
                h={50}
                border="1px solid red"
                bg="transparent"
                color="white"
                _hover={{
                  bgColor: "red",
                }}
              >
                Unstake
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
