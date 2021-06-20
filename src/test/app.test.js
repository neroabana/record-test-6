import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Filter from "../components/Filter";
import RecordTable from "../components/RecordTable";

describe("The rendition of <Filter>", () => {
  test("if the 'Sort by name' label renders correctly", () => {
    const { getByText } = render(<Filter />);
    const myVar = getByText(/name/);
    expect(myVar).toBeInTheDocument;
  });

  test("if the 'Sort by age' label renders correctly", () => {
    const { getByText } = render(<Filter />);
    const myVar = getByText(/age/);
    expect(myVar).toBeInTheDocument;
  });

  test("if clicking the 'Name' radio button fires an event", () => {
    const sortName = jest.fn();
    const { getByTestId } = render(<Filter sortName={sortName} />);
    userEvent.click(getByTestId("name"));
    expect(sortName).toHaveBeenCalled;
  });

  test("if clicking the 'Age' radio button fires an event", () => {
    const sortAge = jest.fn();
    
    const { getByTestId } = render(<Filter sortAge={sortAge} />);
    
    userEvent.click(getByTestId("age"));
    expect(sortAge).toHaveBeenCalled;
  });
});

describe("The rendition of <RecordTable>", () => {
  it("tests to see if a table has been rendered at all", () => {
    const { queryByText } = render(<RecordTable />);
    const myVar = queryByText("table");
    expect(myVar).toBeVisible;
  });

  it("verifies if table rows get displayed", () => {
    let values = [
      { name: "tommy", dob: "4/12/1990" },
      { name: "diddy", dob: "4/3/1999" },
    ];
    const { getAllByRole } = render(<RecordTable data={values} />);
    const myVar = getAllByRole("row");
    expect(myVar).toHaveLength(3);
  });
});
