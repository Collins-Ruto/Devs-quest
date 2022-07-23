import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import NavItem from "./NavItem";
import List from "./List";
import ListItem from "./ListItem";
import HomeNav from "../../pages/Home/HomeNav";
import "./styles/ForumMain.css";
import { useSelector, useDispatch } from "react-redux";
import { getForums, createForum } from "../../actions/forums";

export default function ForumMain() {
  // const [collabs, setCollabs] = useState([]);
  const dispatch = useDispatch();
  const forums = useSelector((state) => state.forums.result);
  console.log(forums)

  useEffect(() => {
    dispatch(getForums())
  }, []);

  return (
    <div className="forum-page">
      <HomeNav sidebarOn={true} />
      <div className="forum-home tsp grid grid-flow-col grid-cols-4">
        <div className="forum-items rounded-lg my-5 divide-y divide-slate-100 col-span-3">
          <Nav>
            <NavItem href="/new" isActive>
              New Collabs
            </NavItem>
            <NavItem href="/top">Top Rated</NavItem>
            <NavItem href="/picks">your projects</NavItem>
          </Nav>
          <List>
            {forums?.map((forum) => (
              <ListItem key={forum._id} forum={forum} />
            ))}
          </List>
        </div>
        <div className="forumBar col-start-4 bg-white"></div>
      </div>
    </div>
  );
}
