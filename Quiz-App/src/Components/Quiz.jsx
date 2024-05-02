import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAction, skipAction, submitAction } from "../Redux/actions";
import { Button, Heading, Radio, RadioGroup, Stack,Text } from "@chakra-ui/react";

const Quiz = () => {
  const quiz = useSelector((store) => store.quiz);
  const dispatch = useDispatch();
  const [num, setNum] = useState(1);
  useEffect(() => {
    dispatch(fetchAction(num));
  }, [num]);

  const [option, setOption] = useState("");
  console.log(option);
  const handleSubmit = () => {
    dispatch(submitAction(option, num));
    setNum(num + 1);
    setOption("");
  };

  const handleSkip = () => {
    dispatch(skipAction());
    setNum((prev) => prev + 1);
  };
  return (
    <div>
      {num<11? (
        quiz.questions &&
        quiz.questions.map((e, iq) => (
          <div key={iq}>
            <Heading fontSize={30} fontWeight={500}>
              {e.id}. {e.question}
            </Heading>
            {e.options.map((e, io) => (
              <RadioGroup onChange={setOption} value={option} key={io} ml={600}>
                <Stack direction="column" >
                  <Radio value={`${io}`}>{e}</Radio>
                </Stack>
              </RadioGroup>
            ))}

            <Button onClick={handleSubmit} mr={50} mt={50} mb={50}>
              Submit
            </Button>
            <Button onClick={handleSkip} mt={50} mb={50}>Skip</Button>

          </div>
        ))
      ) : (<div>You have reached the end of quiz. Your score is {quiz.score}.</div>) }
    </div>
  );
};

export default Quiz;
