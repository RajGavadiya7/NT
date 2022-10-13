import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { Avatar } from "@mantine/core";
export default function ReviewCard(data: any) {
  const dataReview = data.data[0];
  return (
    <div className="review-container">
      <div className="profile-pic">
        <Avatar
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FTiooiRo_avatar-dummy-png-transparent-png%2F&psig=AOvVaw0NG15zK-wkjXvlcxYUcEwN&ust=1665693199028000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMD33-zE2_oCFQAAAAAdAAAAABAE"
          alt="it's me"
          size="xl"
          radius="xl"
        />
      </div>
      <div className="profile-info">
        <div className="details">
          <h3>{dataReview.username}</h3>
          <p>{dataReview.rating}</p>
        </div>
        <p>{dataReview.discription}</p>
        <p
          className="delete"
          onClick={() => {
            const newReview = data.data[1].filter((obj: any) => {
              return obj.id !== dataReview.id;
            });
            data.data[2](newReview);
          }}
        >
          Delete
        </p>
      </div>
      <style>
        {`
            .review-container{
                width:100%;
                height:8rem;
                display:flex;
                flex-direction:row;
                align-items:center;
                background:#dedede;
                margin-top:1rem;
                padding:1rem;
                position:relative;
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
              bottom:0rem;
              cursor:pointer;
            }
        `}
      </style>
    </div>
  );
}
