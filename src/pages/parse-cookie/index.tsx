import React from "react";
import ReactJsonView from "react-json-view";
import { useQueryJsonStr } from "./useQueryJsonStr";

interface IProps {}
const ParseCookie: React.FC<IProps> = ({}) => {
  const json = useQueryJsonStr();

  return (
    <>
      <ReactJsonView src={json} displayDataTypes={false} />
    </>
  );
};

export default ParseCookie;
