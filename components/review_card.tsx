// Import Modules
import React from "react";
import { Text } from "@mantine/core";

// Default export function
export function CardForm(props: any) {
  const { data } = props;
  // console.log(data);
  return (
    <tbody>
      <tr className="container">
        <td className="cards-container">
          {data.length > 0 ? (
            data
          ) : (
            <Text weight={500} align="center">
              Nothing found
            </Text>
          )}
        </td>
      </tr>

      <style>
        {`
        .container{
          width: 96vw;
          background: transparent;
        }
          .cards-container{
            display:flex;
            align-items:flex-start;
            justify-content:flex-start;
            width:96vw;
            height: auto;
            flex-wrap: wrap;
            margin:0;
            padding:0;
          }
        `}
      </style>
    </tbody>
  );
}
