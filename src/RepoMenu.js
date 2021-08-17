import { useEffect, useState } from "react";
import { useIterator } from "./hooks";

export function RepoMenu({ repositories, selected, onSelect = (f) => f }) {
  const [{ name }, previous, next] = useIterator(repositories, selected ?
    repositories.findIndex(repo => repo.name === selected) : undefined);

  useEffect(() => {
    if (!name) {
      onSelect()
      return;
    }
    onSelect(name);
  }, [name]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <button onClick={previous}>&lt;</button>
        <p>{name}</p>
        <button onClick={next}>&gt;</button>
      </div>
    </>
  );
}

