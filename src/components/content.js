import React from "react"

import style from "./content.module.css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Content = ({ title, text }) => {
  return (
    <>
      <dl className={style.container}>
        <dt className="visually-hidden">To</dt>
        <dd className={style.to}>{title}</dd>
        {/* <dd className={style.to}>{to}</dd> */}

        <dt className="visually-hidden">text</dt>
        <dd className={style.text}>{text}</dd>
        {/* <dt className="visually-hidden">From</dt> */}
        {/* <dd className={style.from}>{from}</dd> */}
      </dl>
      <section>{documentToReactComponents(text.json)}</section>
    </>
  )
}

export default Content
