import React from 'react';
import TableRow from "./table-row";

const Table = (props: any) => {

   return (
       <div>
           <ul className="list-group">
                          {props.answers.map((elem: string, key: number) => {
                              return <TableRow
                                  checkAnswer={props.checkAnswer}
                                  key={key}
                                  text={elem}
                                  currentKey={key}
                                  markedAnswer={props.markedAnswer}/>
                          })}
                      </ul>

       </div>
   )
};

export default Table;
