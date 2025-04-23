import React from "react";

const SubNavBarDropDown = (
  {
    valueSetter,
    items
  }: {
    valueSetter: (value: string) => void;
    items: SubNavBarDropDownItem[]
  },
) => {

  return (
    <select
      className="text-white [&>option]:bg-myblack w-full border-gray-500/30 border-2 rounded-lg py-2"
      onChange={(e) => valueSetter(e.target.value)}
    >
      {items && items.map((item) => {
        return (
          <option key={item.content} value={item.value}>
            {item.content}
          </option>
        );
      })}
    </select>
  );
};

export default SubNavBarDropDown;

export class SubNavBarDropDownItem {
  constructor(
    public content: string,
    public value: string
  ) {}
}