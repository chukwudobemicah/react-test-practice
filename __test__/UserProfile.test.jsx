const { screen, render } = require("@testing-library/react");

// const { default: UseProfile } = require("@/component/UseProfile");
import UseProfile from "@/component/UseProfile";
// const { render } from "@testing-library/react";

describe("UserProfile - rendering", () => {
  it("should render email verified when isEmailVerified is true profile", () => {
    render(
      <UseProfile
        displayName="Micah"
        email="micah@gmail.com"
        userName="Micah"
        isEmailVerified={true}
      />
    );
    expect(screen.getByText(/email verified/)).toBeInTheDocument();
  });
  it("should render email verified when isEmailVerified is true profile", () => {
    render(
      <UseProfile
        displayName="Micah"
        email="micah@gmail.com"
        userName="Micah"
        isEmailVerified={false}
      />
    );
    expect(screen.queryByText(/email verified/)).not.toBeInTheDocument();
  });
});
