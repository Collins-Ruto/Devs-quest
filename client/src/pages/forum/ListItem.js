import UserAvatar from "react-user-avatar";
import { useState } from "react";
import placeImg from "../../images/devsq2.png";

export default function ListItem({ forum }) {
  return (
    <article className="space-x-6 p-7">
      <div className="flex w-100">
        <img src={placeImg} alt="" className="h-10 mr-2" />
        <div>
          <div className="userName">Michelle Appleton</div>
          <div className="dateUser text-xs text-justify">28 Jun 2020</div>
        </div>
      </div>
      <div className="flex flex-col pl-5">
        <h2 className="font-semibold text-2xl text-slate-900 text-start">
          {forum.title}
        </h2>
        <div className="mt-1 flex flex-col text-sm leading-6 font-medium">
          <div className="flex items-center space-x-3">
            {forum.tags.map((tag) => {
              console.log(tag);
              return <div className="mx-3">{" #" + tag}</div>;
            })}
          </div>
          <div className="flex text-base justify-between ml-2">
            <div className="flex items-center space-x-2 mr-8">
              <i className="text-2xl fa fa-thumbs-o-up" aria-hidden="true"></i>
              <h4>{` ${forum.likes.length} likes`}</h4>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fa fa-commenting-o" aria-hidden="true"></i>
              <h3>{` ${forum.comment.length} comments`}</h3>
            </div>
            <div className="ml-auto justify-self-end float-right w-1/5 font-normal">
              <button className="btn btn-primary">save</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
