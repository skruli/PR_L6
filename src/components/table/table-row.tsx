import React from 'react';

const styles = {
   cursor: 'pointer'
} as React.CSSProperties;

const TableRow = (props: any) => {
   return (
       <li style={styles} onClick={() => props.checkAnswer(props.text, props.currentKey)}
                  className={"list-group-item " + (props.markedAnswer.key === props.currentKey ? props.markedAnswer.variant : '')}>{props.text}
              </li>

   )
};

export default TableRow;