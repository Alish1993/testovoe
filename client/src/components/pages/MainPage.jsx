import { Box, Heading, Text, SimpleGrid, VStack, Flex, Button, Link } from '@chakra-ui/react';
import Feature from '../ui/Feature';

export default function MainPage() {
  return (
    <Box>
      {/* Приветствие */}
      <Flex bg="teal.600" color="white" py={20} justify="center" align="center">
        <VStack spacing={4} textAlign="center">
          <Heading as="h1" size="2xl">
            Добро пожаловать в Кото-пост!
          </Heading>
          <Text fontSize="lg" maxW="600px">
            Открывайте мир котиков, делитесь своими любимыми фото и постами, и наслаждайтесь
            сообществом любителей кошек. Здесь каждый пост — это ода нашим пушистым друзьям!
          </Text>
          <Button colorScheme="teal" size="lg" mt={6}>
            Начать знакомство
          </Button>
        </VStack>
      </Flex>

      {/* Преимущества */}
      <Box py={10} px={4}>
        <Heading as="h2" size="xl" textAlign="center" mb={8}>
          Почему именно Кото-пост?
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            title="Мгновенная регистрация"
            description="Зарегистрируйтесь за несколько секунд и начните делиться котиками прямо сейчас!"
          />
          <Feature
            title="Сообщество единомышленников"
            description="Огромное сообщество любителей кошек, готовых поддержать вас и ваши посты!"
          />
          <Feature
            title="Полное управление контентом"
            description="Создавайте, редактируйте и удаляйте посты о котиках в любое время!"
          />
        </SimpleGrid>
      </Box>

      {/* Футер */}
      <Box bg="gray.700" color="white" py={10} mt={10}>
        <VStack spacing={4}>
          <Heading as="h3" size="md">
            Свяжитесь с нами
          </Heading>
          <Text>&copy; 2024 Кото-пост. Все права защищены.</Text>
        </VStack>
      </Box>
    </Box>
  );
}
