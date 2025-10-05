"use client";
import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export interface NestedItem {
  id: string;
  label: string;
  children?: NestedItem[];
  checked?: boolean; // <-- this is important
}

export const NESTED_DATA: NestedItem[] = [
  {
    id: "sports",
    label: "Sports",
    children: [
      {
        id: "team_sports",
        label: "Team Sports",
        children: [
          { id: "football", label: "Football" },
          { id: "basketball", label: "Basketball" },
        ],
      },
      {
        id: "individual_sports",
        label: "Individual Sports",
        children: [
          { id: "tennis", label: "Tennis" },
          { id: "athletics", label: "Athletics" },
        ],
      },
    ],
  },
  {
    id: "technology",
    label: "Technology",
    children: [
      {
        id: "programming",
        label: "Programming",
        children: [
          { id: "javascript", label: "JavaScript" },
          { id: "python", label: "Python" },
          { id: "java", label: "Java" },
        ],
      },
    ],
  },
  {
    id: "hobbies",
    label: "Hobbies",
    children: [
      { id: "painting", label: "Painting" },
      { id: "reading", label: "Reading" },
    ],
  },
];

const Checkboxes = ({
  data,
  checked,
  setChecked,
}: {
  data: any;
  checked: any;
  setChecked: any;
}) => {
  const handleChange = (isChecked: boolean, node: any) => {
    setChecked((prev: any) => {
      const newState = { ...prev, [node.id]: isChecked };

      //1. if parent is checked then all available children should also be checked
      const updateChildren = (node: any) => {
        node.children?.forEach((child: any) => {
          newState[child.id] = isChecked;
          child.children && updateChildren(child);
        });
      };
      updateChildren(node);

      //2. check the parent as true if all chidlren are checked true
      const updateParent = (node: any, root: any) => {
        // step1 : find the parent
        // step2 : if parent available then check is all children are checked or not
        // step3 : update recursively upwards

        const findParent = (currentNode: any, targetId: string): any | null => {
          if (!currentNode.children) return null;

          for (let child of currentNode.children) {
            if (child.id === targetId) return currentNode;
            const found = findParent(child, targetId);
            if (found) return found;
          }
          return null;
        };

        const parent = root
          .map((currentNode: any) => findParent(currentNode, node.id))
          .filter(Boolean)[0];

        if (parent) {
          const allChecked = parent.children.every(
            (child: any) => newState[child.id]
          );
          newState[parent.id] = allChecked;
          updateParent(parent, root);
        }
      };
      updateParent(node, NESTED_DATA);

      return newState;
    });
  };

  return (
    <div className="ml-5">
      {data &&
        data.length > 0 &&
        data.map((node: any) => (
          <div
            className="flex flex-col items-start border border-neutral-800 px-2.5 py-1 my-1 rounded-md bg-neutral-900"
            key={node.id}
          >
            <label>
              <input
                type="checkbox"
                checked={checked[node.id] || false}
                onChange={(e) => handleChange(e.target.checked, node)}
                className="mr-1.5"
              />
              <span className="font-medium ml-1">{node.label}</span>
            </label>
            <Checkboxes
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          </div>
        ))}
    </div>
  );
};

function NESTEDCHECKBOX() {
  const [checked, setChecked] = useState({ id: false });
  const [submitted, setSubmitted] = useState<any>([]);
  const [open, setOpen] = useState(false);

  // 🧩 Build nested tree with isSelected flag
  const buildSelectedTree = (data: any, checked: any) => {
    return data.map((node: any) => {
      const isSelected = !!checked[node.id];
      return {
        ...node,
        isSelected,
        children: node.children
          ? buildSelectedTree(node.children, checked)
          : undefined,
      };
    });
  };

  // 🚀 Handle Submit
  const handleSubmit = () => {
    const selectedTree = buildSelectedTree(NESTED_DATA, checked);
    setSubmitted(selectedTree);
    console.log("Final Data for DB:", selectedTree);
    setOpen(true);
  };

  return (
    <main className="min-h-72 grid md:grid-cols-2 gap-x-3 gap-y-3 mb-5">
      <div className="space-y-4 bg-neutral-900 px-4 py-2 lg:pt-4 pb-6 rounded-sm md:rounded-xl flex flex-col md:flex-row md:items-center  md:justify-between">
        <section className="border border-neutral-800 pl-0 pr-4 py-2 rounded-md">
          <Checkboxes
            data={NESTED_DATA}
            checked={checked}
            setChecked={setChecked}
          />
        </section>
        <button
          onClick={handleSubmit}
          className="font-bold py-2 px-4 rounded-2xl text-center gap-x-2 bg-blue-700 hover:shadow hover:shadow-blue-700"
        >
          Submit
        </button>
      </div>

      {/* Modal for Submitted Data */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-neutral-900 border border-neutral-700">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-white">
              Submitted Data
            </DialogTitle>
          </DialogHeader>
          <pre className="bg-neutral-950 text-green-400 p-3 rounded-md text-sm whitespace-pre-wrap">
            {JSON.stringify(submitted, null, 2)}
          </pre>
        </DialogContent>
      </Dialog>

      <div className="bg-neutral-900/55 px-4 py-2 lg:py-4 rounded-sm md:rounded-xl w-full flex flex-col ">
        <h1 className="text-xl md:text-2xl font-semibold mb-5 md:animate-pulse text-start md:text-center">
          Challenges Faced <span className="md:hidden">in Nested Checkbox</span>
        </h1>
        <div className="w-full text-neutral-300 space-y-3 leading-relaxed text-sm">
          <p>
            The main challenge was handling the recursive nature of checkbox
            relationships. Each parent needed to reflect the state of its
            children, and vice versa — meaning if a parent was checked, all
            descendants should also be checked, and if all children were checked
            manually, the parent should become checked automatically.
          </p>

          <p>
            Implementing <strong>updateChildren</strong> was straightforward
            since it simply propagated the selected state downward through all
            nested children using recursion.
          </p>

          <p>
            However, the real challenge was <strong>updateParent</strong>.
            Finding a node’s parent in a deeply nested structure meant I needed
            a recursive function — <code>findParent</code> — to traverse the
            entire tree and locate which node contained the current one.
          </p>

          <p>
            Once the parent was found, I had to check if{" "}
            <code>every(child.isChecked)</code> was true for all its children.
            If yes, the parent should be checked; if not, it should be
            unchecked. Then this logic needed to repeat upward — meaning the
            parent’s parent also needed updating — which required another
            recursive call to <code>updateParent</code>.
          </p>

          <p>
            Debugging this was the toughest part. Initially, parent updates
            didn’t reflect correctly because <code>findParent</code> only
            checked one branch. I realized I needed to map over all root nodes
            and filter out non-null values to ensure it correctly located the
            parent, regardless of which subtree the node was in.
          </p>

          <p>
            Once that logic clicked, both directions — top-down and bottom-up —
            started syncing perfectly. This gave the checkboxes a truly
            recursive relationship, just like a file explorer folder system.
          </p>
        </div>
      </div>
    </main>
  );
}

export default NESTEDCHECKBOX;
