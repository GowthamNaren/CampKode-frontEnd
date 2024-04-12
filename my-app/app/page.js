import Image from "next/image";
import Login from "./Login/page";
import ExamRegistration from "./exam_registration_upload/page";
export default function Home() {
  return (
    <div>
      {/* <ExamRegistration/> */}
      <Login/>
    </div>
  );
}
