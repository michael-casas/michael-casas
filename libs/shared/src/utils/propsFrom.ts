import React from "react";

export type PropsFrom<T> = T extends React.FC<infer Props> ? Props : never;
