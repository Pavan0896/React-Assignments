import "@testing-library/jest-dom";

// test to check the add function
const { add } = require("./utils");

describe("add function", () => {
  it("adds two numbers correctly", () => {
    // Arrange
    const a = 5;
    const b = 7;

    // Act
    const result = add(a, b);

    // Assert
    expect(result).toBe(12);
  });

  it("returns zero when adding zero to a number", () => {
    // Arrange
    const a = 5;
    const b = 0;

    // Act
    const result = add(a, b);

    // Assert
    expect(result).toBe(5);
  });

  it("returns the same number when adding zero to it", () => {
    // Arrange
    const a = 0;
    const b = 10;

    // Act
    const result = add(a, b);

    // Assert
    expect(result).toBe(10);
  });
});

// test to check the fetchData function

const { fetchData } = require("./utils");

// Mocking the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: "mocked data" }),
  })
);

describe("fetchData function", () => {
  it("fetches data from the API", async () => {
    // Act
    const result = await fetchData();

    // Assert
    expect(fetch).toHaveBeenCalledWith("https://reqres.in/api/users");
    expect(result).toEqual({ data: "mocked data" });
  });
});
