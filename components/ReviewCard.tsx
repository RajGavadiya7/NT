import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { Avatar } from "@mantine/core";
import {useEffect, useState} from "react";
import currentUser from "../database/currentuser";

export default function ReviewCard(data: any) {
  const dataReview = data.data[0];
  // state of current user
  const [isCurrentuser, setIsCurrentuser] = useState(false);

  useEffect(() => {
    if (dataReview.userid === currentUser.userid) {
      setIsCurrentuser(true);
    }
  }, []);

  return (
    <div className="review-container">
      <div className="profile-pic">
        <Avatar
          src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"
          alt="it's me"
          size="xl"
          className="avatar"
        />
      </div>
      <div className="profile-info">
        <div className="details">
          <h3>{dataReview.username}</h3>
          <p>{dataReview.rating + " ★ "}</p>
        </div>
        <p>{dataReview.discription}</p>
        <div className={`${isCurrentuser? "": "dissabled"}`}>
          {/* A button to edit review */}
        <Badge color="pink" variant="light" size="lg" className="delete" onClick={() => {
            const newReview = data.data[1].filter((obj: any) => {
              // console.log(data.data[3]);
              return obj.reviewid !== dataReview.reviewid;
            });
            data.data[2](newReview);
          }}>
          EDIT
        </Badge>
        </div>
      </div>
      <style>
        {`
            .review-container{
                width:100%;
                height:8rem;
                display:flex;
                flex-direction:row;
                align-items:center;
                background:#ffffff;
                margin-top:1rem;
                padding:1rem;
                position:relative;
                border-radius:10px;
            }
            .avatar{
              border-radius:50%;
            }

            .profile-info{
                display:flex;
                flex-direction:column;
                align-items:flex-start;
                justify-content:flex-start;
                margin-left:2rem;

            }

            .details{
                display:flex;
                flex-direction:row;
                align-items:center;
                justify-content:flex-start;
            }
            .details p{
                margin-left:1rem;
            }

            .delete{
              color: red;
              position:absolute;
              right:1rem;
              bottom:1rem;
              cursor:pointer;
              display: ;
            }
            .dissabled{
              display:none;
            }
        `}
      </style>
    </div>
  );
}
