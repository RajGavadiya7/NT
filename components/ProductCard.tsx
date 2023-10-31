// Modules
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import style from "../styles/Home.module.css";
// Main
export default function ProductCard(data: any) {
  // Card data object
  const dataProduct = data.data;
  return (
    <Card
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
      className={dataProduct.dark ? "dark" : ""}
      style={{ boxShadow: "0 0 50px #00000039" }}
    >
      <Card.Section>
        <Image
          src={dataProduct.url}
          height={260}
          width={250}
          alt={dataProduct.productname}
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{dataProduct.productname}</Text>
        <Badge color="green" variant="light" size="xl">
          {" ₹ " + dataProduct.price}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {dataProduct.discription}
      </Text>

      <Button variant="light" color="cyan" fullWidth mt="md" radius="md">
        REVIEW
      </Button>
    </Card>
  );
}
