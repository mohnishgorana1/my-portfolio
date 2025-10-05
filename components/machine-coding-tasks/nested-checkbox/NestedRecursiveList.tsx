import React from "react";
import { NestedItem } from "./nested-checkbox";

interface Props {
  item: NestedItem;
  onCheck: (id: string, checked: boolean) => void;
}

function NestedRecursiveList({ item, onCheck }: Props) {
  return (
    <div className="">
      <span className="flex gap-x-1 items-center">
        <input
          type="checkbox"
          value={item.label}
          checked={item.checked || false}
          onChange={(e) => onCheck(item.id, e.target.checked)}
          className="font-bold text-xl h-4 w-4 rounded-full"
        />
        <label htmlFor={item.label} className="cursor-pointer">
          {item.label}
        </label>
      </span>
      {item.children && item.children.length > 0 && (
        <div className="ml-6">
          {item.children.map((child) => (
            <NestedRecursiveList
              key={child.id}
              item={child}
              onCheck={onCheck}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default NestedRecursiveList;
