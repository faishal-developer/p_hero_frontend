import React from "react";
import { Button, Flex, Typography } from "antd";
import { useRouter } from "next/navigation";

const { Title } = Typography;

const boxStyle: React.CSSProperties = {
  width: "100%",
};

type Props = { link: string; title: string; }

const CVBreadcrumb = ({ link, title }: Props) => {

  // global
  const router = useRouter();

  return (
    <Flex gap="middle" align="start">
      <Flex style={boxStyle} justify="space-between" align="center">
        <Title style={{ margin: 0 }} level={3}>
          <Button
            type="primary"
            size="large"
            onClick={() => router.push(link)}
          >
            {title}
          </Button>
        </Title>

      </Flex>
    </Flex>
  );
};

export default CVBreadcrumb;
