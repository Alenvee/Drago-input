import { TextField } from "@material-ui/core";
import React from "react";


export interface MyComponentProps {
  onChange: (e: React.ChangeEvent) => void;
  id: string;
  error?: string;
}

const MyComponent = (props: MyComponentProps) => {
  return (
    <>
      <TextField id={props.id} onChange={props.onChange} error={Boolean(props.error)} helperText={props.error} />
    </>
  );
};

export default MyComponent;
