import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
        className="rounded-md bg-blue-100 text-white px-10 py-2 hover:bg-blue-200 hover:text-white"
        onClick={() => setSelectedPage(SelectedPage.ContactMe)}
        href={`${SelectedPage.ContactMe}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton