import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "shared/ui/header";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  render(<Header />, { wrapper: BrowserRouter });
});
test("헤더의 로고를 누르면 메인 페이지로 이동되어야 합니다.", async () => {
  const linkElement = screen.getByAltText("로고");
  fireEvent.click(linkElement);
  // 루트 디렉토리 slash 주의
  expect(location.href).toEqual(window.location.origin + "/");
});

test("헤더의 api 테스트 메뉴를 누르면 api 페이지로 이동되어야 합니다.", async () => {
  const linkElement = screen.getByText("API 테스트");
  fireEvent.click(linkElement);
  expect(location.href).toEqual(window.location.origin + "/api");
});
