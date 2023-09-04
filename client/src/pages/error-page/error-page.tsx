import { useNavigate } from "react-router-dom";
import { Footer } from "shared/ui";
import { Button } from "shared/ui/button";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          minHeight: "calc(100vh - 50px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button theme="darkGreen" size="small" onClick={() => navigate(-1)}>
          뒤로가기
        </Button>
        <Button
          theme="darkGreen"
          size="small"
          onClick={() => navigate("/", { replace: true })}
        >
          메인으로
        </Button>
      </div>
      <Footer />
    </>
  );
};
