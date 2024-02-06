import renderer from "react-test-renderer";
import { Button } from "../..";

describe("Jest Snapshot testing suite", () => {
  it("Matches DOM Snapshot", () => {
    const domTree = renderer
      .create(
        <Button
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      )
      .toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
