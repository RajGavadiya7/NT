import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

export default function ProductCard(data: any) {
  const dataProduct = data.data;
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={dataProduct.url}
          height={260}
          width={500}
          alt={dataProduct.productname}
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{dataProduct.productname}</Text>
        <Badge color="green"  variant="light" size="xl">
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
