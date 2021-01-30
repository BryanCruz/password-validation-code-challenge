const appListenMock = jest.fn((port, callback) => callback());
const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();

jest.mock("../config", () => ({ apiPort: 3333 }));
jest.mock("../api/app", () => ({
  listen: appListenMock,
}));

describe("App initialization", () => {
  it("Should init app and listen at configured port", () => {
    jest.requireActual("../index");

    expect(appListenMock.mock.calls[0][0]).toBe(3333);

    expect(consoleLogSpy).toBeCalledWith(
      "Server is running in http://localhost:3333"
    );
  });
});
