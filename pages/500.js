import { useRouter } from "next/router";
import { Spin } from "antd";

export default function Custom500() {
  const router = useRouter();
  setTimeout(() => {
    router.replace({ pathname: "/" });
  }, 45000);
  return (
    <div className="error-500">
      <div className="spin">
        <h2>Please wait</h2>
        <Spin />
      </div>
    </div>
  );
}
