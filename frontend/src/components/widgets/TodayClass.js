import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: ${({ theme }) => theme.widgetColor};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

const CloseButton = styled.div`
  display: flex;
  align-items: center;
`;

const TodayClass = ({ setIsShow, setWidgetId }) => {
  const close = () => {
    setIsShow(false);
  };
  return (
    <Container
      layout
      layoutId="M01"
      whileHover={{
        scale: 1.01,
      }}
      onClick={() => {
        setWidgetId("M01");
      }}
    >
      <Wrapper>
        <Title>오늘의 수업</Title>
        <CloseButton onClick={close}>❌</CloseButton>
      </Wrapper>
    </Container>
  );
};

export default TodayClass;
