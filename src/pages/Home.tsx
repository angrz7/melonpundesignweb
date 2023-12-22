import { Box, Flex, Text, SimpleGrid } from "@mantine/core"
import { ImageHolder } from "../component/ImageHolder";

export const Home = () => {
  return (
    <Flex direction={"column"} gap={"4rem"}>
      {/* Main image on top */}
      <Flex direction={"column"} gap={"md"}>
        {/* Image on top */}
        <ImageHolder
          width="full"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/85e7d122-9025-4c7a-bbd8-7926dda92b64/dg1y7c6-76540712-da30-4819-bb95-1cc8825ed35e.png/v1/fill/w_1280,h_427,q_80,strp/anime_summer_2023_banner_by_gingalibadeidara_dg1y7c6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDI3IiwicGF0aCI6IlwvZlwvODVlN2QxMjItOTAyNS00YzdhLWJiZDgtNzkyNmRkYTkyYjY0XC9kZzF5N2M2LTc2NTQwNzEyLWRhMzAtNDgxOS1iYjk1LTFjYzg4MjVlZDM1ZS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.V56W2Iqhxw9_jO4-0iQEOOfxACFBiFgH1P2jGAadFbE"
        />
        {/* Caption Top Image */}
        <Text>Hallo</Text>
      </Flex>

      {/* Squared Grid Images */}
      <Box w={"100%"} p={0}>
        {/* Spacing adalah jarak antara foto secara horizontal, dan verticalSpacing secara vertikalnya */}
        <SimpleGrid cols={3} spacing={"3rem"} verticalSpacing={"4.5rem"}>
          <Box>
            <Flex direction={"column"} gap={"sm"}>
              <ImageHolder
                width="full"
                src="https://img.freepik.com/fotos-premium/anime-maedchen-das-die-illustration-des-sonnenuntergangs-3d-aufpasst_717906-1415.jpg"
              />
              {/* Caption of the Image */}
              <Text>Hallo</Text>
            </Flex>
          </Box>
          <Box>
            <Flex direction={"column"} gap={"sm"}>
              <ImageHolder
                width="full"
                src="https://img.freepik.com/fotos-premium/anime-maedchen-das-die-illustration-des-sonnenuntergangs-3d-aufpasst_717906-1415.jpg"
              />
              {/* Caption of the Image */}
              <Text>Hallo</Text>
            </Flex>
          </Box>
          <Box>
            <Flex direction={"column"} gap={"sm"}>
              <ImageHolder
                width="full"
                src="https://img.freepik.com/fotos-premium/anime-maedchen-das-die-illustration-des-sonnenuntergangs-3d-aufpasst_717906-1415.jpg"
              />
              {/* Caption of the Image */}
              <Text>Hallo</Text>
            </Flex>
          </Box>
          <Box>
            <Flex direction={"column"} gap={"sm"}>
              <ImageHolder
                width="full"
                src="https://img.freepik.com/fotos-premium/anime-maedchen-das-die-illustration-des-sonnenuntergangs-3d-aufpasst_717906-1415.jpg"
              />
              {/* Caption of the Image */}
              <Text>Hallo</Text>
            </Flex>
          </Box>
          <Box>
            <Flex direction={"column"} gap={"sm"}>
              <ImageHolder
                width="full"
                src="https://img.freepik.com/fotos-premium/anime-maedchen-das-die-illustration-des-sonnenuntergangs-3d-aufpasst_717906-1415.jpg"
              />
              {/* Caption of the Image */}
              <Text>Hallo</Text>
            </Flex>
          </Box>

          <Box>
            <Flex direction={"column"} gap={"sm"}>
              <ImageHolder
                width="full"
                src="https://img.freepik.com/fotos-premium/anime-maedchen-das-die-illustration-des-sonnenuntergangs-3d-aufpasst_717906-1415.jpg"
              />
              {/* Caption of the Image */}
              <Text>Hallo</Text>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
